import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Terms = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>

          <h1 className="text-5xl font-semibold tracking-tight mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground text-xl leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Execute provides AI automation, custom RAG assistant development, and full-stack web application services. We reserve the right to modify or discontinue services at any time without notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">24-Hour Demo Period</h2>
              <p className="text-muted-foreground leading-relaxed">
                All AI agents come with a free 24-hour demo period. During this time, you can test the full functionality. No purchase is required unless you choose to continue after the demo period.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Premium Subscription:</strong> $49/month, billed monthly, cancel anytime</li>
                <li><strong>Lifetime Access:</strong> Custom pricing, one-time payment</li>
                <li>All payments are non-refundable unless otherwise stated</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All intellectual property rights in our services and technology remain with Execute. Upon full payment for custom development, you receive ownership of the delivered code and assets specific to your project.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Execute shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms & Conditions, please contact us through our website or LinkedIn profile.
              </p>
            </section>
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              onClick={() => navigate("/")}
              className="rounded-full px-8"
            >
              Return to Home
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
