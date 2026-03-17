import { motion } from 'motion/react';
import { ArrowRight, Check, Zap } from 'lucide-react';

interface PricingProps {
  onOpenProjectModal: () => void;
}

export default function Pricing({ onOpenProjectModal }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[var(--color-primary)] text-sm font-semibold tracking-wide uppercase mb-3">Project Tiers</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transparent pricing for your next project
          </h3>
          <p className="text-xl text-gray-400">
            No hidden fees. No stress. Built with ease and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Base Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/20 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-3xl p-8 flex flex-col transition-colors"
          >
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white mb-4">The Launchpad</h4>
              <p className="text-gray-400 text-sm mb-8 h-10">Perfect for startups needing a high-impact landing page.</p>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-5xl font-bold text-white">$1,200</span>
                <span className="text-[var(--color-primary)] font-bold text-2xl mb-1">+</span>
              </div>
              <p className="text-gray-500 text-sm">Project-based</p>
            </div>

            <div className="flex-1">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Custom Landing Page</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Mobile Responsive</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Basic SEO Setup</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Contact Form Integration</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>1 Week Delivery</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenProjectModal}
              className="w-full bg-white hover:bg-gray-200 text-black py-3 rounded-full font-medium transition-colors"
            >
              START PROJECT
            </button>
          </motion.div>

          {/* Core Plan (Popular) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black/20 backdrop-blur-xl border border-[var(--color-primary)]/50 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-[var(--color-primary)]/10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-primary)] text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Popular
            </div>

            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white mb-4">The Growth Suite</h4>
              <p className="text-gray-400 text-sm mb-8 h-10">Full multi-page site with CMS and SEO integration.</p>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-5xl font-bold text-white">$3,500</span>
                <span className="text-[var(--color-primary)] font-bold text-2xl mb-1">+</span>
              </div>
              <p className="text-gray-500 text-sm">Project-based</p>
            </div>

            <div className="flex-1">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Up to 10 Custom Pages</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Headless CMS Integration</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Advanced SEO Strategy</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Analytics Dashboard</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>3-4 Weeks Delivery</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenProjectModal}
              className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-black py-3 rounded-full font-medium transition-colors"
            >
              START PROJECT
            </button>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black/20 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-3xl p-8 flex flex-col transition-colors"
          >
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white mb-4">The Enterprise</h4>
              <p className="text-gray-400 text-sm mb-8 h-10">Complex web apps and e-commerce solutions.</p>
              <div className="flex items-center justify-center h-16 mb-2">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <p className="text-gray-500 text-sm">Project-based</p>
            </div>

            <div className="flex-1">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Custom Web Applications</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>E-commerce Solutions</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Third-party API Integrations</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>User Authentication & Roles</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Dedicated Project Manager</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-transparent border border-white/20 hover:bg-white/10 text-white py-3 rounded-full font-medium transition-colors">
              TALK TO SALES
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
