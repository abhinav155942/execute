import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="container mx-auto max-w-2xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-12"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
              Ready to transform your business with AI automation? Let's discuss your project.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="inline-block p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border shadow-elegant">
              <div className="w-24 h-24 rounded-full bg-[#0077b5] flex items-center justify-center mx-auto mb-6">
                <Linkedin className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Connect on LinkedIn</h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                Send me a message on LinkedIn to discuss your project, ask questions, or explore how we can work together.
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/book-demo")}
                className="rounded-full px-10 py-6 text-lg bg-[#0077b5] hover:bg-[#006399] text-white"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Book a Demo
              </Button>
            </div>

            <div className="space-y-4 pt-8">
              <p className="text-sm text-muted-foreground">
                Available for new projects and consultations
              </p>
              <p className="text-sm text-muted-foreground">
                Response time: Within 24 hours
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
