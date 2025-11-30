import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Send, Loader2, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    companySize: "",
    revenue: "",
    currentTools: [] as string[],
    otherTool: "",
    needs: "",
  });

  const carouselReviews = [
    { name: "Liam", text: "They built my chatbot in like 3 days. Now I don't have to answer the same questions over and over." },
    { name: "Aria", text: "I was spending 6 hours a day doing data entry. Now it takes 10 minutes. This is crazy good." },
    { name: "Alexander", text: "My assistant can handle appointments now without me. Saves me probably 15 hours a week." },
    { name: "Evelyn", text: "I didn't know you could automate WhatsApp like this. Game changer for my business." },
    { name: "Elias", text: "The AI reads all my emails and tells me what's important. I actually have free time now." },
    { name: "Luca", text: "They made a system that finds leads for me while I sleep. Best investment I ever made." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % carouselReviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const toolOptions = [
    "WhatsApp Business",
    "Email Marketing Tools",
    "CRM System",
    "Manual Lead Generation",
    "Basic Chatbots",
    "Google Sheets/Excel",
    "Social Media Management",
    "Calendar Scheduling Tools",
    "E-commerce Platform",
    "Project Management Software",
    "Analytics Tools",
    "Custom In-House Tools"
  ];

  const handleToolToggle = (tool: string) => {
    setFormData(prev => ({
      ...prev,
      currentTools: prev.currentTools.includes(tool)
        ? prev.currentTools.filter(t => t !== tool)
        : [...prev.currentTools, tool]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.companyName) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const webhookUrl = "https://hook.eu2.make.com/mkjq6jct09kia72c6c7oxvy2a9ogoqre";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "booking_form"
        }),
      });

      if (response.ok) {
        toast({
          title: "Demo Request Submitted!",
          description: "We'll contact you within 24 hours to schedule your free demo.",
        });
        
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 sm:mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>

          {/* Carousel Reviews at Top */}
          <div className="mb-8 sm:mb-12 h-32 sm:h-40 flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReviewIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-center px-4"
              >
                <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed mb-3 font-light italic">
                  "{carouselReviews[currentReviewIndex].text}"
                </p>
                <p className="text-sm sm:text-base font-medium text-muted-foreground">
                  — {carouselReviews[currentReviewIndex].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Book Your Free Demo
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how AI automation can transform your business. Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-elegant border border-border space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Contact Information</h2>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    placeholder="Your Company Inc."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size</Label>
                    <Select 
                      value={formData.companySize} 
                      onValueChange={(value) => setFormData({ ...formData, companySize: value })}
                    >
                      <SelectTrigger id="companySize">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501+">501+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="revenue">Annual Revenue</Label>
                    <Select 
                      value={formData.revenue} 
                      onValueChange={(value) => setFormData({ ...formData, revenue: value })}
                    >
                      <SelectTrigger id="revenue">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<100k">Less than $100K</SelectItem>
                        <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                        <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                        <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                        <SelectItem value="5m+">$5M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Current Tools */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-xl sm:text-2xl font-semibold">What tools do you currently use?</h2>
                <p className="text-sm text-muted-foreground">Select all that apply - this helps us understand your current workflow</p>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {toolOptions.map((tool) => (
                    <div key={tool} className="flex items-start space-x-3 bg-background/50 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                      <Checkbox
                        id={tool}
                        checked={formData.currentTools.includes(tool)}
                        onCheckedChange={() => handleToolToggle(tool)}
                        className="mt-1"
                      />
                      <Label
                        htmlFor={tool}
                        className="text-sm leading-tight cursor-pointer flex-1"
                      >
                        {tool}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-2">
                  <Label htmlFor="otherTool">Other Tools (Please specify)</Label>
                  <Textarea
                    id="otherTool"
                    placeholder="List any other tools you're currently using..."
                    value={formData.otherTool}
                    onChange={(e) => setFormData({ ...formData, otherTool: e.target.value })}
                    rows={2}
                    className="w-full resize-none"
                  />
                </div>
              </div>

              {/* What They Need */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-xl sm:text-2xl font-semibold">What do you need help with?</h2>
                <p className="text-sm text-muted-foreground">Describe your goals and challenges</p>
                
                <div className="space-y-2">
                  <Label htmlFor="needs">Your Needs *</Label>
                  <Textarea
                    id="needs"
                    placeholder="Tell us what you're looking to achieve or what problems you're trying to solve..."
                    value={formData.needs}
                    onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                    rows={4}
                    className="w-full resize-none"
                    required
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full py-6 text-base sm:text-lg group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Demo Request
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            By submitting this form, you agree to our{" "}
            <button
              onClick={() => navigate("/privacy")}
              className="text-accent hover:underline"
            >
              Privacy Policy
            </button>{" "}
            and{" "}
            <button
              onClick={() => navigate("/terms")}
              className="text-accent hover:underline"
            >
              Terms of Service
            </button>
          </p>

          {/* LinkedIn Connection Section at Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Or Connect Directly</h3>
              <p className="text-muted-foreground mb-8">
                Prefer a quick chat? Let's connect on LinkedIn to discuss your project.
              </p>
            </div>
            
            <div className="max-w-md mx-auto p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border shadow-elegant text-center">
              <div className="w-20 h-20 rounded-full bg-[#0077b5] flex items-center justify-center mx-auto mb-6">
                <Linkedin className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Connect on LinkedIn</h4>
              <p className="text-muted-foreground mb-6 text-sm">
                Send me a message to discuss your project, ask questions, or explore how we can work together.
              </p>
              <Button
                size="lg"
                asChild
                className="rounded-full px-8 py-6 text-base bg-[#0077b5] hover:bg-[#006399] text-white"
              >
                <a
                  href="https://www.linkedin.com/in/abhinav-automations/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Message on LinkedIn
                </a>
              </Button>
              <div className="mt-6 space-y-2">
                <p className="text-xs text-muted-foreground">Available for new projects</p>
                <p className="text-xs text-muted-foreground">Response time: Within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingForm;
