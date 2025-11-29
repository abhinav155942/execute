import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Layers, Clock, DollarSign, Rocket, Mail, Linkedin, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-devices.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import signatureWork from "@/assets/signature-work.jpg";

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        {/* Animated Gradient Glow Background */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 0%, hsl(250 100% 70% / 0.15), transparent 60%)"
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="container mx-auto max-w-7xl relative z-10"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                  <span className="text-sm font-medium text-accent">Execute Agency</span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Building the Future with{" "}
                <span className="bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
                  AI, Automation & Design
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                We craft intelligent systems that work quietly, powerfully, and at scale.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-medium hover-lift group"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See Our Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg font-medium border-2 hover-lift"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Connect
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Right: Hero Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: heroY }}
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src={heroImage} 
                  alt="AI Interface Mockup" 
                  className="w-full h-auto"
                />
              </motion.div>
              {/* Floating glow effect */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-purple-600/20 blur-3xl -z-10"
                animate={{
                  opacity: [0.4, 0.6, 0.4],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
          
          {/* Animated Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={() => document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="flex flex-col items-center gap-2 group">
              <span className="text-sm text-muted-foreground font-light">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
                <motion.div 
                  className="w-1 h-2 bg-muted-foreground/50 rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <ChevronDown className="w-5 h-5 text-muted-foreground/50 group-hover:text-accent transition-colors" />
            </div>
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
                Premium solutions that blend intelligence with elegance
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "AI Automation Systems",
                description: "Intelligent workflows that eliminate repetitive tasks and operate 24/7 with precision."
              },
              {
                icon: Layers,
                title: "SaaS Prototype Development",
                description: "From concept to functional MVP in weeks. Clean code, beautiful interfaces, scalable architecture."
              },
              {
                icon: Zap,
                title: "Premium UI/UX Engineering",
                description: "Apple-inspired designs with meticulous attention to detail, spacing, and user experience."
              }
            ].map((service, i) => (
              <FadeInSection key={i} delay={i * 0.2}>
                <div className="glass-card rounded-3xl p-10 hover-lift group cursor-pointer h-full">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <FadeInSection>
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Past Projects We've Executed</h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                A look at the systems, interfaces, and AI workflows we've built
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: project1,
                title: "Enterprise SaaS Platform",
                outcome: "Reduced manual workload by 60%"
              },
              {
                image: project2,
                title: "AI Agent System",
                outcome: "Response time: 9 min → 18 sec"
              },
              {
                image: project3,
                title: "Mobile App Redesign",
                outcome: "User retention increased 45%"
              }
            ].map((project, i) => (
              <FadeInSection key={i} delay={i * 0.15}>
                <div className="group cursor-pointer overflow-hidden rounded-3xl hover-lift">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm font-light">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          
          <FadeInSection delay={0.5}>
            <div className="text-center mt-12">
              <Button 
                variant="ghost" 
                size="lg"
                className="rounded-full text-lg group"
              >
                Explore Full Case Studies
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Signature Work Showcase */}
      <section className="py-32 px-6 md:px-12 bg-grey-50">
        <div className="container mx-auto max-w-7xl">
          <FadeInSection>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={signatureWork} 
                alt="Signature Work" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-muted-foreground mt-8 text-lg font-light">
              Premium e-commerce platform — Full-stack development with AI-powered recommendations
            </p>
          </FadeInSection>
        </div>
      </section>

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

      {/* How I Can Benefit You */}
      <section className="py-32 px-6 md:px-12 bg-grey-50">
        <div className="container mx-auto max-w-7xl">
          <FadeInSection>
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">How We Bring Real Value to You</h2>
            </div>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Save Time",
                description: "Automation that eliminates repetitive tasks and runs 24×7 without supervision."
              },
              {
                icon: DollarSign,
                title: "Cut Operational Costs",
                description: "Intelligent workflows that replace manual overload and reduce complexity."
              },
              {
                icon: Rocket,
                title: "Build Faster",
                description: "Turn any idea into a functional AI product or clean UI in weeks, not months."
              }
            ].map((benefit, i) => (
              <FadeInSection key={i} delay={i * 0.2}>
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
              </FadeInSection>
            ))}
          </div>
          
          <FadeInSection delay={0.6}>
            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-medium hover-lift group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Build Together
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
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
                Comprehensive solutions for modern businesses
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: "AI Agent Creation", description: "Custom intelligent agents for automation" },
              { icon: Zap, title: "Automation Consulting", description: "Workflow optimization and integration" },
              { icon: Layers, title: "SaaS MVP Development", description: "Rapid prototyping to production" },
              { icon: Rocket, title: "UI Design & System Builds", description: "Premium interfaces with design systems" }
            ].map((service, i) => (
              <FadeInSection key={i} delay={i * 0.15}>
                <div className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-12 bg-grey-50">
        <div className="container mx-auto max-w-5xl">
          <FadeInSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">What Clients Say</h2>
            </div>
          </FadeInSection>
          
          <div className="space-y-12">
            {[
              {
                quote: "Execute transformed our manual processes into an elegant automated system. The attention to detail and clean execution exceeded expectations.",
                author: "Sarah Chen",
                role: "CTO, TechFlow"
              },
              {
                quote: "Working with Execute felt like working with Apple's design team. Everything was polished, minimal, and incredibly functional.",
                author: "Marcus Rodriguez",
                role: "Founder, StreamAI"
              }
            ].map((testimonial, i) => (
              <FadeInSection key={i} delay={i * 0.2}>
                <div className="bg-white rounded-3xl p-12 shadow-soft">
                  <p className="text-2xl font-light leading-relaxed mb-8 text-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-grey-100" />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
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
                className="rounded-full px-8 py-6 text-lg font-medium hover-lift group"
                asChild
              >
                <a href="mailto:hello@execute.agency">
                  <Mail className="mr-2 w-5 h-5" />
                  hello@execute.agency
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg font-medium border-2 border-primary-foreground/20 hover:bg-primary-foreground/10 hover-lift group"
                asChild
              >
                <a href="https://linkedin.com/company/execute" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
            
            <div className="pt-12 border-t border-primary-foreground/10 mt-16">
              <p className="text-sm opacity-60">© 2025 Execute Agency. Building the future with precision.</p>
            </div>
          </div>
        </FadeInSection>
      </footer>
    </div>
  );
};

export default Index;
