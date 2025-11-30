import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    companySize: "",
    revenue: "",
    features: [] as string[],
    otherFeature: "",
  });

  const featureOptions = [
    "WhatsApp Business Automation",
    "Email Automation Platform",
    "CRM Integration",
    "Lead Generation System",
    "Customer Support Chatbot",
    "Document Processing (RAG)",
    "Voice AI Agent",
    "Data Analytics Dashboard",
    "Social Media Automation",
    "Appointment Scheduling System",
    "E-commerce Automation",
    "Marketing Campaign Automation"
  ];

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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

    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your free demo.",
    });

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    // Reset form
    setTimeout(() => {
      navigate("/");
    }, 2000);
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

              {/* Features Selection */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-xl sm:text-2xl font-semibold">What are you interested in?</h2>
                <p className="text-sm text-muted-foreground">Select all that apply</p>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {featureOptions.map((feature) => (
                    <div key={feature} className="flex items-start space-x-3 bg-background/50 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                      <Checkbox
                        id={feature}
                        checked={formData.features.includes(feature)}
                        onCheckedChange={() => handleFeatureToggle(feature)}
                        className="mt-1"
                      />
                      <Label
                        htmlFor={feature}
                        className="text-sm leading-tight cursor-pointer flex-1"
                      >
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-2">
                  <Label htmlFor="otherFeature">Other (Please specify)</Label>
                  <Textarea
                    id="otherFeature"
                    placeholder="Describe any other automation needs..."
                    value={formData.otherFeature}
                    onChange={(e) => setFormData({ ...formData, otherFeature: e.target.value })}
                    rows={3}
                    className="w-full resize-none"
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full py-6 text-base sm:text-lg group"
            >
              Submit Demo Request
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
        </motion.div>
      </div>
    </div>
  );
};

export default BookingForm;
