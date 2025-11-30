import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Privacy = () => {
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

          <h1 className="text-5xl font-semibold tracking-tight mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground text-xl leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Execute, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Name and contact information</li>
                <li>Business information</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your requests and transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use third-party services to help us operate our business and provide services to you. These third parties have access to your information only to perform specific tasks on our behalf.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through our website or LinkedIn profile.
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

export default Privacy;
