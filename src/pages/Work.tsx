import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ragAgent from "@/assets/project-rag-agent.jpg";
import callBooking from "@/assets/project-call-booking.jpg";
import leadGen from "@/assets/project-lead-gen.jpg";

const Work = () => {
  const navigate = useNavigate();

  const projects = [
    {
      image: ragAgent,
      title: "RAG Agent",
      description: "Intelligent document retrieval with context-aware responses",
      tags: ["RAG", "Vector DB", "GPT-4"]
    },
    {
      image: callBooking,
      title: "Call Booking Agent",
      description: "Automated scheduling with calendar integration",
      tags: ["Voice AI", "Calendar API"]
    },
    {
      image: leadGen,
      title: "Lead Generation Agent",
      description: "AI-powered prospect identification and outreach",
      tags: ["Lead Gen", "CRM Integration"]
    }
  ];

  const testimonials = [
    {
      quote: "Execute transformed our manual processes into an elegant automated system. The attention to detail and clean execution exceeded expectations.",
      author: "Sarah Chen",
      role: "CTO, TechFlow",
      rating: 5
    },
    {
      quote: "Working with Execute felt like working with Apple's design team. Everything was polished, minimal, and incredibly functional.",
      author: "Marcus Rodriguez",
      role: "Founder, StreamAI",
      rating: 5
    },
    {
      quote: "The AI agents they built save us 40+ hours every week. ROI was immediate and continues to compound.",
      author: "David Kim",
      role: "Operations Director, ScaleUp Inc",
      rating: 5
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
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
              Our Work
            </h1>
            <p className="text-2xl md:text-3xl text-accent font-medium mb-4">
              50+ Projects Successfully Delivered
            </p>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Generating thousands in revenue and saving 30+ hours/week for our clients
            </p>
          </div>

          {/* Projects Grid */}
          <div className="mb-32">
            <h2 className="text-4xl font-semibold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="rounded-2xl overflow-hidden shadow-elegant bg-card border border-border">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/case-studies")}
                className="rounded-full px-8 group"
              >
                View Detailed Case Studies
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="mb-24">
            <h2 className="text-4xl font-semibold mb-12 text-center">Client Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-soft border border-border"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 py-16">
            <h2 className="text-3xl md:text-5xl font-semibold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join 50+ satisfied clients who have transformed their businesses with our AI solutions.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="rounded-full px-10 py-6 text-lg group"
            >
              Let's Connect
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
