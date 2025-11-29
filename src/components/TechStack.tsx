import { motion } from 'framer-motion';
import { Code2, Database, Zap, Brain, Palette, Cloud, Lock, Gauge } from 'lucide-react';

const techStack = [
  {
    icon: Brain,
    name: 'AI & Machine Learning',
    tools: ['OpenAI', 'Anthropic', 'LangChain', 'Custom Models'],
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: Code2,
    name: 'Frontend Development',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Database,
    name: 'Backend & Database',
    tools: ['Node.js', 'PostgreSQL', 'Supabase', 'Redis'],
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Zap,
    name: 'Automation & APIs',
    tools: ['Zapier', 'n8n', 'Custom Integrations', 'Webhooks'],
    color: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    icon: Palette,
    name: 'Design Systems',
    tools: ['Figma', 'Framer', 'Radix UI', 'shadcn/ui'],
    color: 'from-pink-500/20 to-rose-500/20'
  },
  {
    icon: Cloud,
    name: 'Cloud & DevOps',
    tools: ['Vercel', 'AWS', 'Docker', 'GitHub Actions'],
    color: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    icon: Lock,
    name: 'Authentication & Security',
    tools: ['Auth.js', 'JWT', 'OAuth', 'Encryption'],
    color: 'from-red-500/20 to-orange-500/20'
  },
  {
    icon: Gauge,
    name: 'Performance & Analytics',
    tools: ['Lighthouse', 'PostHog', 'Sentry', 'Web Vitals'],
    color: 'from-teal-500/20 to-cyan-500/20'
  }
];

export const TechStack = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-grey-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Our Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Building with the most powerful and modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="magnetic-item"
            >
              <div className="relative group cursor-pointer h-full">
                <div className="glass-card rounded-3xl p-8 h-full relative overflow-hidden">
                  {/* Animated gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <tech.icon className="w-7 h-7 text-accent" />
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                      {tech.name}
                    </h3>
                    
                    <div className="space-y-2">
                      {tech.tools.map((tool, idx) => (
                        <motion.div
                          key={tool}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + idx * 0.05 }}
                          className="text-sm text-muted-foreground"
                        >
                          • {tool}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
