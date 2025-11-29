import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Send } from "lucide-react";
import { useState } from "react";

const ChatWizard = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "👋 Hi! I'm your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        text: "I'd be happy to help you with that! Let me analyze your request..." 
      }]);
    }, 1000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        className="bg-gradient-to-br from-background via-background to-primary/5 rounded-3xl border border-border/50 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="bg-primary/10 backdrop-blur-xl border-b border-border/50 px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">AI Chat Wizard</h3>
              <p className="text-sm text-muted-foreground">Always here to help</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-8 space-y-6 min-h-[400px] max-h-[400px] overflow-y-auto">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: message.role === "user" ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-foreground border border-border/50"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-border/50 bg-muted/30 backdrop-blur-xl p-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="w-full bg-background border border-border rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <MessageSquare className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
            <motion.button
              onClick={handleSend}
              className="bg-primary text-primary-foreground rounded-xl px-8 py-4 font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
              Send
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatWizard;
