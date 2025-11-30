import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Send, Loader2, Star, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const reviews = [
  { name: "Michael", text: "This saved me so much time. Now I get more done in less hours.", rating: 5 },
  { name: "Sarah", text: "I was doing everything by hand before. Now it just runs by itself.", rating: 5 },
  { name: "David", text: "My customers get answers right away now. They love it.", rating: 5 },
  { name: "Jennifer", text: "I used to spend hours on this stuff. Now I barely touch it.", rating: 5 },
  { name: "Robert", text: "It was way easier than I thought. Works great for my business.", rating: 5 },
  { name: "Lisa", text: "This thing pays for itself. I save like 30 hours every week now.", rating: 5 }
];

const BookingForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    companySize: "",
    revenue: "",
    currentTools: [] as string[],
    otherCurrentTool: "",
    projectNeeds: "",
  });

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentToolOptions = [
    "WhatsApp Business",
    "Email Marketing Tools",
    "CRM Software",
    "Lead Generation Tools",
    "Customer Support Platform",
    "Document Management",
    "Voice Call Systems",
    "Analytics Tools",
    "Social Media Tools",
    "Calendar/Scheduling",
    "E-commerce Platform",
    "Marketing Automation"
  ];

  const handleToolToggle = (tool: string) => {
    setFormData(prev => ({
      ...prev,
      currentTools: prev.currentTools.includes(tool)
        ? prev.currentTools.filter(t => t !== tool)
        : [...prev.currentTools, tool]
    }));
  };

  // Calculate progress based on filled sections
  const calculateProgress = () => {
    let filledSections = 0;
    const totalSections = 3;

    // Section 1: Basic Information
    if (formData.name && formData.email && formData.companyName) {
      filledSections += 1;
    }

    // Section 2: Current Tools
    if (formData.currentTools.length > 0 || formData.otherCurrentTool) {
      filledSections += 1;
    }

    // Section 3: Project Needs
    if (formData.projectNeeds) {
      filledSections += 1;
    }

    return (filledSections / totalSections) * 100;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.companyName || !formData.projectNeeds) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://hook.eu2.make.com/mkjq6jct09kia72c6c7oxvy2a9ogoqre", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      toast({
        title: "Demo Request Submitted!",
        description: "Please check your email inbox for confirmation and next steps.",
      });

      console.log("Webhook response:", data);
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
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

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Form Progress</span>
              <span className="text-sm font-medium text-primary">{Math.round(calculateProgress())}%</span>
            </div>
            <Progress value={calculateProgress()} className="h-2" />
          </div>

          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Book Your Free Demo
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how AI automation can transform your business. Fill out the form below and we'll get back to you within 24 hours.
            </p>
            
            {/* Reviews Section */}
            <div className="mt-8 max-w-md mx-auto h-24 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <div className="flex gap-1 mb-2">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{reviews[currentReview].text}"
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    - {reviews[currentReview].name}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
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

              {/* Current Tools Section */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-xl sm:text-2xl font-semibold">What tools are you currently using?</h2>
                <p className="text-sm text-muted-foreground">Tell us what you're already working with</p>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {currentToolOptions.map((tool) => (
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
                  <Label htmlFor="otherCurrentTool">Other tools you use</Label>
                  <Input
                    id="otherCurrentTool"
                    placeholder="List any other tools..."
                    value={formData.otherCurrentTool}
                    onChange={(e) => setFormData({ ...formData, otherCurrentTool: e.target.value })}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Project Needs Section */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-xl sm:text-2xl font-semibold">What do you need help with? *</h2>
                <p className="text-sm text-muted-foreground">Describe what you're looking for</p>
                
                <Textarea
                  id="projectNeeds"
                  placeholder="Tell us what you want to automate or build..."
                  value={formData.projectNeeds}
                  onChange={(e) => setFormData({ ...formData, projectNeeds: e.target.value })}
                  rows={5}
                  required
                  className="w-full resize-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full rounded-full py-6 text-base sm:text-lg group"
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

          {/* LinkedIn Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 pt-16 border-t border-border"
          >
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  Let's Connect
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                  Prefer to reach out directly? Connect with me on LinkedIn to discuss your project.
                </p>
              </div>

              <div className="inline-block p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border shadow-elegant">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0077b5] flex items-center justify-center mx-auto mb-6">
                  <Linkedin className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Connect on LinkedIn</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-md mx-auto">
                  Send me a message on LinkedIn to discuss your project, ask questions, or explore how we can work together.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="rounded-full px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg bg-[#0077b5] hover:bg-[#006399] text-white"
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
              </div>

              <div className="space-y-3 pt-6">
                <p className="text-sm text-muted-foreground">
                  Available for new projects and consultations
                </p>
                <p className="text-sm text-muted-foreground">
                  Response time: Within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingForm;
