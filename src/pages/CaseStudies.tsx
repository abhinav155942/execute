import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ragAgent from "@/assets/project-rag-agent.jpg";
import callBooking from "@/assets/project-call-booking.jpg";
import leadGen from "@/assets/project-lead-gen.jpg";

const CaseStudies = () => {
  const navigate = useNavigate();

  const caseStudies = [
    {
      image: ragAgent,
      title: "RAG Agent for Document Analysis",
      client: "TechCorp Solutions",
      challenge: "Needed to process thousands of documents daily with context-aware responses",
      solution: "Built a custom RAG system with vector database integration and GPT-4",
      results: [
        "95% reduction in document processing time",
        "40 hours/week saved in manual review",
        "99.2% accuracy in information retrieval"
      ],
      tags: ["RAG", "Vector DB", "GPT-4", "Email Integration"]
    },
    {
      image: callBooking,
      title: "AI Call Booking Agent",
      client: "Healthcare Network",
      challenge: "Manual scheduling created bottlenecks and missed appointments",
      solution: "Developed voice AI with calendar integration and automated email confirmations",
      results: [
        "78% reduction in no-shows",
        "300+ calls handled daily automatically",
        "24/7 availability with zero downtime"
      ],
      tags: ["Voice AI", "Calendar API", "Email Automation"]
    },
    {
      image: leadGen,
      title: "Lead Generation & Outreach Agent",
      client: "B2B SaaS Startup",
      challenge: "Sales team overwhelmed with lead qualification and follow-ups",
      solution: "Created AI-powered prospect identification with automated personalized outreach",
      results: [
        "5x increase in qualified leads",
        "35 hours/week saved per sales rep",
        "$250K+ in new pipeline generated monthly"
      ],
      tags: ["Lead Gen", "CRM Integration", "Email Campaigns"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-6 py-16">
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

          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses automate and scale with AI.
            </p>
          </div>

          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="rounded-2xl shadow-elegant w-full"
                  />
                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-accent font-medium mb-2">{study.client}</p>
                    <h2 className="text-4xl font-semibold tracking-tight mb-4">
                      {study.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Solution</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how AI automation can transform your business.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="rounded-full px-10 py-6 text-lg group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;
