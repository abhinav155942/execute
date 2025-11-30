import { Bot, Calendar, FileText, MessageSquare, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectInterfaceProps {
  type: "rag" | "call-booking" | "lead-gen";
  className?: string;
}

export const ProjectInterface = ({ type, className = "" }: ProjectInterfaceProps) => {
  if (type === "rag") {
    return (
      <div className={`relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 sm:p-8 border border-border ${className}`}>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-border/50">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="h-3 bg-foreground/10 rounded w-32 mb-2" />
              <div className="h-2 bg-foreground/5 rounded w-20" />
            </div>
          </div>

          {/* Document Cards */}
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-background/50 rounded-lg p-3 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-accent" />
                <div className="flex-1 space-y-1">
                  <div className="h-2 bg-foreground/10 rounded w-full" />
                  <div className="h-2 bg-foreground/5 rounded w-2/3" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chat Interface */}
          <div className="space-y-2 pt-2">
            <div className="bg-accent/10 rounded-lg p-3 ml-8">
              <div className="h-2 bg-accent/30 rounded w-full mb-1" />
              <div className="h-2 bg-accent/30 rounded w-4/5" />
            </div>
            <div className="bg-primary/10 rounded-lg p-3 mr-8">
              <div className="h-2 bg-primary/30 rounded w-full mb-1" />
              <div className="h-2 bg-primary/30 rounded w-3/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "call-booking") {
    return (
      <div className={`relative bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6 sm:p-8 border border-border ${className}`}>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-border/50">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <div className="h-3 bg-foreground/10 rounded w-24" />
            </div>
            <div className="h-8 w-8 rounded bg-accent/20" />
          </div>

          {/* Calendar Grid */}
          <div className="space-y-2">
            <div className="flex gap-2 mb-3">
              {["M", "T", "W", "T", "F"].map((day, i) => (
                <div key={i} className="flex-1 text-center">
                  <div className="h-2 bg-foreground/10 rounded mb-2" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-2">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className={`aspect-square rounded ${
                    i === 7 || i === 11
                      ? "bg-accent text-accent-foreground"
                      : "bg-background/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Time Slots */}
          <div className="space-y-2 pt-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2 bg-background/50 rounded-lg p-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="h-2 bg-foreground/10 rounded flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // lead-gen type
  return (
    <div className={`relative bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-6 sm:p-8 border border-border ${className}`}>
      <div className="space-y-4">
        {/* Header with metrics */}
        <div className="flex items-center justify-between pb-4 border-b border-border/50">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            <div className="h-3 bg-foreground/10 rounded w-32" />
          </div>
          <Users className="w-5 h-5 text-muted-foreground" />
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: "247", label: "Leads" },
            { value: "89%", label: "Rate" },
            { value: "$42K", label: "Value" }
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-background/50 rounded-lg p-3 text-center"
            >
              <div className="text-lg sm:text-xl font-bold text-accent mb-1">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Lead List */}
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3 bg-background/50 rounded-lg p-3"
            >
              <div className="w-8 h-8 rounded-full bg-accent/20" />
              <div className="flex-1 space-y-1">
                <div className="h-2 bg-foreground/10 rounded w-3/4" />
                <div className="h-2 bg-foreground/5 rounded w-1/2" />
              </div>
              <MessageSquare className="w-4 h-4 text-accent" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
