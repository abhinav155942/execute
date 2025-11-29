import React from 'react';

export const renderMarkdown = (text: string): React.ReactNode => {
  // Split text into lines to handle tables
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Check if this is a table
    if (line.includes('|') && i + 1 < lines.length && lines[i + 1].includes('---')) {
      // Parse table
      const tableLines: string[] = [line];
      i++;
      
      // Add separator line
      tableLines.push(lines[i]);
      i++;

      // Add remaining table rows
      while (i < lines.length && lines[i].includes('|')) {
        tableLines.push(lines[i]);
        i++;
      }

      // Render table
      const headerCells = tableLines[0]
        .split('|')
        .map(cell => cell.trim())
        .filter(cell => cell);

      const rows = tableLines.slice(2).map(row =>
        row.split('|').map(cell => cell.trim()).filter(cell => cell)
      );

      elements.push(
        <table key={`table-${elements.length}`} className="my-4 w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              {headerCells.map((header, idx) => (
                <th key={idx} className="px-4 py-2 text-left font-semibold">
                  {renderInlineMarkdown(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b border-border/50">
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-4 py-2">
                    {renderInlineMarkdown(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      // Regular line - parse inline markdown
      if (line.trim()) {
        elements.push(
          <p key={`p-${elements.length}`} className="mb-2">
            {renderInlineMarkdown(line)}
          </p>
        );
      } else {
        // Empty line
        elements.push(<br key={`br-${elements.length}`} />);
      }
      i++;
    }
  }

  return <>{elements}</>;
};

const renderInlineMarkdown = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  let currentIndex = 0;
  
  // Pattern to match **bold** or *italic*
  const pattern = /(\*\*.*?\*\*|\*.*?\*)/g;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > currentIndex) {
      parts.push(text.substring(currentIndex, match.index));
    }

    const matchedText = match[0];
    
    if (matchedText.startsWith('**') && matchedText.endsWith('**')) {
      // Bold text
      parts.push(
        <strong key={`bold-${match.index}`}>
          {matchedText.slice(2, -2)}
        </strong>
      );
    } else if (matchedText.startsWith('*') && matchedText.endsWith('*')) {
      // Italic text
      parts.push(
        <em key={`italic-${match.index}`}>
          {matchedText.slice(1, -1)}
        </em>
      );
    }

    currentIndex = match.index + matchedText.length;
  }

  // Add remaining text
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
};
