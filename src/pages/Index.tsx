import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Layers, Clock, DollarSign, Rocket, Linkedin, Gem, RefreshCw, Check, X } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MagneticCursor } from "@/components/MagneticCursor";
import { TechStack } from "@/components/TechStack";
import { FloatingNav } from "@/components/FloatingNav";
import ChatWizard from "@/components/ChatWizard";
import { ProjectInterface } from "@/components/ProjectInterface";
const FadeInSection = ({
  children,
  delay = 0
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 50
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 50
  }} transition={{
    duration: 0.8,
    delay,
    ease: [0.22, 1, 0.36, 1]
  }}>
      {children}
    </motion.div>;
};
const Index = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Prevent auto-scrolling on page load
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return <div className="min-h-screen bg-background text-foreground font-inter cursor-none">
      <MagneticCursor />
      <FloatingNav />
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        {/* Animated Gradient Glow Background */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(circle at 50% 0%, hsl(250 100% 70% / 0.15), transparent 60%)"
      }} animate={{
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.7, 0.5]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        
        <motion.div className="container mx-auto max-w-6xl relative z-10" style={{
        opacity: heroOpacity,
        scale: heroScale
      }}>
          <motion.div className="text-center space-y-12" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
                Building the Future with{" "}
                <motion.span 
                  className="bg-gradient-to-r from-accent via-purple-600 to-accent bg-clip-text text-transparent inline-block" 
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }} 
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }} 
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  AI & Automation
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-2xl md:text-4xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We craft intelligent systems that work quietly, powerfully, and at scale.
              </motion.p>

              <motion.p 
                className="text-xl md:text-2xl text-foreground/80 font-light max-w-3xl mx-auto" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Transforming businesses through AI agents, custom RAG assistants, and full-stack web applications
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-6 justify-center pt-8" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="magnetic-item bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-12 py-7 text-xl font-medium group shadow-elegant" 
                  onClick={() => navigate('/work')}
                >
                  See Our Work
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="magnetic-item rounded-full px-12 py-7 text-xl font-medium border-2" 
                  onClick={() => navigate('/contact')}
                >
                  Let's Connect
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
        </motion.div>
      </section>

      {/* What I Do Section */}
      <section id="what-we-do" className="py-32 px-6 md:px-12 bg-grey-50">
        <div className="container mx-auto max-w-7xl">
          <FadeInSection>
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">What We Do</h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                Powerful AI solutions that automate, scale, and transform your business
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: Sparkles,
            title: "AI Agents to Automate Anything",
            description: "Build intelligent AI agents that automate any business process or workflow, operating 24/7 with precision."
          }, {
            icon: Layers,
            title: "Custom RAG Assistant Development",
            description: "Create specialized retrieval-augmented generation systems that leverage your data for intelligent responses."
          }, {
            icon: Zap,
            title: "Full Stack Web Apps Creation",
            description: "Develop complete web applications from beautiful frontend interfaces to robust backend systems."
          }].map((service, i) => <FadeInSection key={i} delay={i * 0.2}>
                <motion.div className="magnetic-item glass-card rounded-3xl p-10 group cursor-pointer h-full relative overflow-hidden" whileHover={{
              y: -8
            }} transition={{
              duration: 0.3
            }}>
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10" transition={{
                duration: 0.5
              }} />
                  <div className="relative z-10">
                  <motion.div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-8 h-8 text-accent" />
                  </motion.div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              </FadeInSection>)}
          </div>
        </div>
      </section>

      {/* Past Projects Section - Grid Layout */}
      <section id="projects" className="py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <FadeInSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Past Projects We've Executed</h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                AI agents built with cutting-edge technology. All our agents come with email sending functionality by default.
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[{
              type: "rag" as const,
              title: "RAG Agent",
              outcome: "Intelligent document retrieval with context-aware responses",
              tags: ["RAG", "Vector DB", "GPT-4"]
            }, {
              type: "call-booking" as const,
              title: "Call Booking Agent",
              outcome: "Automated scheduling with calendar integration",
              tags: ["Voice AI", "Calendar API"]
            }, {
              type: "lead-gen" as const,
              title: "Lead Generation Agent",
              outcome: "AI-powered prospect identification and outreach",
              tags: ["Lead Gen", "CRM Integration"]
            }].map((project, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <motion.div 
                  className="magnetic-item group h-full" 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-elegant h-full bg-card border border-border">
                    <ProjectInterface type={project.type} className="w-full" />
                    <div className="p-4 sm:p-6 space-y-3">
                      <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
          
          <FadeInSection>
            <div className="text-center">
              <Button 
                variant="ghost" 
                size="lg" 
                className="magnetic-item rounded-full text-lg group"
                onClick={() => navigate('/case-studies')}
              >
                Explore Full Case Studies
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Chat Wizard Section */}
      <section className="py-32 px-6 md:px-12 bg-grey-50">
        <div className="container mx-auto max-w-7xl">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Have Questions? Ask Our AI Assistant</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Get instant answers about our services, pricing, and process. No sales calls needed.</p>
            </div>
            <ChatWizard />
          </FadeInSection>
        </div>
      </section>

      {/* Tech Stack Section */}
      <div id="tech-stack">
        <TechStack />
      </div>

      {/* About Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <FadeInSection>
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">About Execute</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                <p>
                  <strong className="text-foreground font-semibold">Execute</strong> is an agency that builds systems that think, automate, and scale.
                </p>
                <p>
                  Our focus is on creating <strong className="text-foreground font-semibold">AI-powered solutions</strong> that eliminate complexity and reduce operational overhead — whether that's through intelligent automation, beautiful user interfaces, or seamless SaaS platforms.
                </p>
                <p>
                  We believe in <strong className="text-foreground font-semibold">minimalism with purpose</strong>. Every line of code, every pixel, every interaction is designed with Apple-like precision — not for aesthetics alone, but to create experiences that feel effortless.
                </p>
                <p>
                  If you're looking to build something meaningful, fast, and beautiful — let's talk.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Differentiator / Offer Section */}
      <FadeInSection>
        <section id="differentiator" className="py-32 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">What Makes Us Different</h2>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                Risk-free testing, cutting-edge AI, and flexible pricing designed for your success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1
            }} className="glass-card magnetic-item p-8 text-center hover-lift">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Rocket className="w-8 h-8 text-primary" style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Unlimited 24hr Demos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Test drive any of our AI agents for 24 hours. No commitment required. Only purchase if you love it.
                </p>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }} className="glass-card magnetic-item p-8 text-center hover-lift">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <RefreshCw className="w-8 h-8 text-accent" style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Always Up-to-Date</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get instant access to new AI models and system updates with our premium subscription. Never fall behind.
                </p>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3
            }} className="glass-card magnetic-item p-8 text-center hover-lift">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-primary/20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Gem className="w-8 h-8 text-purple-500" style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Flexible Pricing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Choose between our $49/month premium subscription or pay once for lifetime access. Your choice, your terms.
                </p>
              </motion.div>
            </div>

            <motion.div className="glass-card p-12 text-center glow-accent space-y-6">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Experience the Difference?</h3>
              <p className="text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                Start your free 24-hour demo today. No credit card required.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="magnetic-item px-10 py-6 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:shadow-elegant transition-all"
                    onClick={() => navigate('/book-demo')}
                  >
                    Start Free Demo
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="magnetic-item px-10 py-6 rounded-full font-medium text-lg border-2"
                    onClick={() => navigate('/contact')}
                  >
                    View Pricing
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </FadeInSection>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 md:px-12 bg-grey-50">
        <div className="container mx-auto max-w-7xl">
          <FadeInSection>
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Pricing Plans</h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                Choose the plan that fits your needs. Both options include all features and premium support.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Premium Subscription */}
            <FadeInSection delay={0.1}>
              <motion.div className="glass-card magnetic-item rounded-3xl p-10 relative overflow-hidden group" whileHover={{
              y: -8,
              scale: 1.02
            }} transition={{
              duration: 0.3
            }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      Most Popular
                    </div>
                    <h3 className="text-3xl font-semibold mb-2">Premium Subscription</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-5xl font-bold">$49</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground">Perfect for businesses that want to stay ahead</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {["Access to all AI agents", "Email functionality included", "Instant updates to new AI models", "Priority support (24/7)", "Monthly system improvements", "Cancel anytime", "Unlimited 24hr demos"].map((feature, idx) => <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>)}
                  </div>

                   <Button 
                     size="lg" 
                     className="w-full rounded-full text-lg py-6 group-hover:shadow-elegant transition-all"
                     onClick={() => navigate('/book-demo')}
                   >
                     Start Subscription
                     <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </Button>
                </div>
              </motion.div>
            </FadeInSection>

            {/* Lifetime Access */}
            <FadeInSection delay={0.2}>
              <motion.div className="glass-card magnetic-item rounded-3xl p-10 relative overflow-hidden group" whileHover={{
              y: -8,
              scale: 1.02
            }} transition={{
              duration: 0.3
            }}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                      One-Time Payment
                    </div>
                    <h3 className="text-3xl font-semibold mb-2">Lifetime Access</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-5xl font-bold">Custom</span>
                      <span className="text-muted-foreground">pricing</span>
                    </div>
                    <p className="text-muted-foreground">Pay once, own it forever</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[{
                    text: "Access to all AI agents",
                    included: true
                  }, {
                    text: "Email functionality included",
                    included: true
                  }, {
                    text: "Instant updates to new AI models",
                    included: false
                  }, {
                    text: "Priority support (24/7)",
                    included: true
                  }, {
                    text: "One-time purchase",
                    included: true
                  }, {
                    text: "No recurring fees",
                    included: true
                  }, {
                    text: "Unlimited 24hr demos",
                    included: true
                  }].map((feature, idx) => <div key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${feature.included ? 'bg-accent/10' : 'bg-muted'}`}>
                          {feature.included ? <Check className="w-3 h-3 text-accent" /> : <X className="w-3 h-3 text-muted-foreground" />}
                        </div>
                        <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                          {feature.text}
                        </span>
                      </div>)}
                  </div>

                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full rounded-full text-lg py-6 border-2 group-hover:shadow-elegant transition-all"
                    onClick={() => navigate('/contact')}
                  >
                    Contact for Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.3}>
            <div className="text-center mt-12">
               <p className="text-muted-foreground text-lg">
                 Not sure which plan? <button onClick={() => navigate('/book-demo')} className="text-primary font-medium hover:underline">Start a free 24hr demo</button>
               </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* How I Can Benefit You */}
      <section className="py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <FadeInSection>
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">How We Bring Real Value to You</h2>
            </div>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: Clock,
            title: "Save Time",
            description: "Automation that eliminates repetitive tasks and runs 24×7 without supervision."
          }, {
            icon: DollarSign,
            title: "Cut Operational Costs",
            description: "Intelligent workflows that replace manual overload and reduce complexity."
          }, {
            icon: Rocket,
            title: "Build Faster",
            description: "Turn any idea into a functional AI product or clean UI in weeks, not months."
          }].map((benefit, i) => <FadeInSection key={i} delay={i * 0.2}>
                <div className="relative group">
                  <div className="glass-card rounded-3xl p-10 hover-lift cursor-pointer relative overflow-hidden h-full">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/10 group-hover:to-accent/5 transition-all duration-500 rounded-3xl" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                        <benefit.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>)}
          </div>
          
          <FadeInSection delay={0.6}>
            <div className="text-center mt-12">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button size="lg" className="magnetic-item bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-medium group shadow-elegant" onClick={() => navigate('/contact')}>
                  Let's Build Together
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <FadeInSection>
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Services</h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                End-to-end AI automation and development services
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: Sparkles,
            title: "AI Agents to Automate Anything",
            description: "Intelligent agents for any automation need"
          }, {
            icon: Layers,
            title: "Custom RAG Assistant Development",
            description: "Specialized AI assistants with your data"
          }, {
            icon: Zap,
            title: "Full Stack Web Apps",
            description: "Complete web application development"
          }].map((service, i) => <FadeInSection key={i} delay={i * 0.15}>
                <motion.div className="magnetic-item glass-card rounded-2xl p-8 group cursor-pointer text-center h-full" whileHover={{
              y: -8
            }} transition={{
              duration: 0.3
            }}>
                <motion.div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              </FadeInSection>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-12 bg-grey-50">
        <div className="container mx-auto max-w-6xl">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">What Clients Say</h2>
              <p className="text-xl text-muted-foreground">Real feedback from people who use our automation</p>
            </div>
          </FadeInSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Michael", text: "They built my chatbot in like 3 days. Now I don't have to answer the same questions over and over." },
              { name: "Sarah", text: "I was spending 6 hours a day doing data entry. Now it takes 10 minutes. This is crazy good." },
              { name: "David", text: "My assistant can handle appointments now without me. Saves me probably 15 hours a week." },
              { name: "Jessica", text: "I didn't know you could automate WhatsApp like this. Game changer for my business." },
              { name: "Robert", text: "The AI reads all my emails and tells me what's important. I actually have free time now." },
              { name: "Emily", text: "They made a system that finds leads for me while I sleep. Best investment I ever made." }
            ].map((testimonial, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <motion.div 
                  className="bg-card border border-border rounded-2xl p-6 space-y-4 h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <p className="text-base text-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">— {testimonial.name}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground py-24 px-6 md:px-12">
        <FadeInSection>
          <div className="container mx-auto max-w-5xl text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Let's Work Together</h2>
            <p className="text-xl font-light opacity-80 max-w-2xl mx-auto">
              Building something ambitious? Let's discuss how AI and automation can transform your vision into reality.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <Button 
                size="lg" 
                variant="secondary" 
                className="rounded-full px-8 py-6 text-lg font-medium hover-lift group bg-[#0077B5] hover:bg-[#006399] text-white border-0" 
                onClick={() => navigate('/contact')}
              >
                <Linkedin className="mr-2 w-5 h-5" />
                Connect on LinkedIn
              </Button>
            </div>
            
            <div className="pt-12 border-t border-primary-foreground/10 mt-16 space-y-4">
              <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
                <button 
                  onClick={() => navigate('/privacy')} 
                  className="hover:opacity-100 transition-opacity underline"
                >
                  Privacy Policy
                </button>
                <span>•</span>
                <button 
                  onClick={() => navigate('/terms')} 
                  className="hover:opacity-100 transition-opacity underline"
                >
                  Terms & Conditions
                </button>
                <span>•</span>
                <button 
                  onClick={() => navigate('/work')} 
                  className="hover:opacity-100 transition-opacity underline"
                >
                  Our Work
                </button>
                <span>•</span>
                <button 
                  onClick={() => navigate('/case-studies')} 
                  className="hover:opacity-100 transition-opacity underline"
                >
                  Case Studies
                </button>
              </div>
              <p className="text-sm opacity-60">© 2025 Execute Agency. Building the future with precision.</p>
            </div>
          </div>
        </FadeInSection>
      </footer>
    </div>;
};
export default Index;