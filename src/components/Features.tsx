import { motion } from 'motion/react';
import { Code, Layout, Search, Server } from 'lucide-react';

const features = [
  {
    icon: <Code className="w-6 h-6 text-[var(--color-primary)]" />,
    title: "Bespoke Development",
    description: "High-performance, custom-coded web apps."
  },
  {
    icon: <Layout className="w-6 h-6 text-[var(--color-primary)]" />,
    title: "UI/UX Strategy",
    description: "User-first design that converts visitors into customers."
  },
  {
    icon: <Search className="w-6 h-6 text-[var(--color-primary)]" />,
    title: "SEO & Optimization",
    description: "Lighting-fast load speeds and top-tier search rankings."
  },
  {
    icon: <Server className="w-6 h-6 text-[var(--color-primary)]" />,
    title: "Managed Hosting",
    description: "Zero-stress maintenance and 24/7 security."
  }
];

export default function Features() {
  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[var(--color-primary)] text-sm font-semibold tracking-wide uppercase mb-3">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Everything you need to succeed online
            </h3>
            <p className="text-xl text-gray-400">
              We don't just build websites; we build digital experiences that drive growth and deliver measurable results.
            </p>
          </div>
          <button className="flex-shrink-0 border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors">
            VIEW ALL SERVICES
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="w-12 h-12 rounded-lg bg-black/20 backdrop-blur-sm border border-white/5 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
