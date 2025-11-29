import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Sparkles, Send, CheckCircle2, Target, FileText, Rocket } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

type Step = "business" | "plan" | "demo" | "integration";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const steps = [
  { id: "business", label: "Understand Business", icon: Target, description: "Tell us about your needs" },
  { id: "plan", label: "Create Plan", icon: FileText, description: "We'll design a solution" },
  { id: "demo", label: "Build Demo", icon: Sparkles, description: "See it in action" },
  { id: "integration", label: "Easy Integration", icon: Rocket, description: "Start building instantly" }
];

const ChatWizard = () => {
  const [currentStep, setCurrentStep] = useState<Step>("business");
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "assistant", 
      text: "👋 Welcome! I'm here to understand your business needs and create a custom AI solution for you. Let's start - what kind of business are you building?" 
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setMessages([...messages, { role: "user", text: userMessage }]);
    setInput("");
    
    // Simulate AI responses based on current step
    setTimeout(() => {
      let response = "";
      
      if (currentStep === "business") {
        response = "Great! I understand you need help with that. Let me ask a few more questions to create the perfect solution. What are your main pain points?";
        // After a few exchanges, move to next step
        if (messages.length > 4) {
          setTimeout(() => {
            setMessages(prev => [...prev, { 
              role: "assistant", 
              text: "Perfect! I have everything I need. Let me create a detailed plan for your AI solution..." 
            }]);
            setCurrentStep("plan");
          }, 2000);
        }
      } else if (currentStep === "plan") {
        response = "Based on what you've told me, here's what I recommend:\n\n✓ AI-powered automation for your workflows\n✓ Custom chatbot for customer support\n✓ Smart analytics dashboard\n\nShall I build a demo for you?";
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            role: "assistant", 
            text: "Building your custom demo now..." 
          }]);
          setCurrentStep("demo");
        }, 3000);
      } else if (currentStep === "demo") {
        response = "🎉 Your demo is ready! Here's what I've built:\n\n• Interactive prototype\n• Full features preview\n• Ready to customize\n\nLike what you see? Click below to start integration!";
        setTimeout(() => {
          setCurrentStep("integration");
        }, 2000);
      } else {
        response = "Awesome! Let's get you started. No sales calls, no hassle - just click 'Start Building' and you're ready to go!";
      }
      
      setMessages(prev => [...prev, { role: "assistant", text: response }]);
    }, 1000);
  };

  const getCurrentStepIndex = () => steps.findIndex(s => s.id === currentStep);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Progress Steps */}
      <div className="grid grid-cols-4 gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = step.id === currentStep;
          const isCompleted = index < getCurrentStepIndex();
          
          return (
            <motion.div
              key={step.id}
              className={`relative p-6 rounded-2xl border-2 transition-all ${
                isActive 
                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/20' 
                  : isCompleted
                  ? 'border-green-500 bg-green-500/5'
                  : 'border-border/50 bg-background/50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                  isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : isCompleted
                    ? 'bg-green-500 text-white'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {isCompleted ? (
                    <CheckCircle2 className="w-7 h-7" />
                  ) : (
                    <Icon className="w-7 h-7" />
                  )}
                </div>
                <div>
                  <h4 className={`font-semibold ${isActive ? 'text-primary' : 'text-foreground'}`}>
                    {step.label}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Chat Interface */}
      <motion.div
        className="bg-gradient-to-br from-background via-background to-primary/5 rounded-3xl border border-border/50 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Header */}
        <div className="bg-primary/10 backdrop-blur-xl border-b border-border/50 px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">AI Business Consultant</h3>
                <p className="text-sm text-muted-foreground">No sales calls, no tension</p>
              </div>
            </div>
            {currentStep === "integration" && (
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                <Rocket className="w-4 h-4 mr-2" />
                Start Building
              </Button>
            )}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-8 space-y-6 min-h-[500px] max-h-[500px] overflow-y-auto">
          <AnimatePresence mode="popLayout">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: message.role === "user" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-6 py-4 ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg"
                      : "bg-muted/50 text-foreground border border-border/50"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
