import { motion } from 'motion/react';

export default function FeatureShowcase() {
  return (
    <section id="approach" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[var(--color-primary)] text-sm font-semibold tracking-wide uppercase mb-3">Our Approach</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical depth meets design
          </h3>
          <p className="text-xl text-gray-400">
            We build robust, scalable architectures that power seamless user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main large card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-black/20 backdrop-blur-xl border border-white/5 hover:border-primary/20 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group"
          >
            <div className="mb-8 bg-black/40 rounded-xl p-6 font-mono text-sm border border-white/10 overflow-x-auto">
              <pre className="text-gray-300">
                <code>
                  <span className="text-pink-500">import</span> {'{'} useState, useEffect {'}'} <span className="text-pink-500">from</span> <span className="text-green-400">'react'</span>;<br/>
                  <span className="text-pink-500">import</span> {'{'} fetchMetrics {'}'} <span className="text-pink-500">from</span> <span className="text-green-400">'@/services/api'</span>;<br/>
                  <br/>
                  <span className="text-pink-500">export function</span> <span className="text-blue-400">useClientDashboard</span>(clientId: <span className="text-yellow-300">string</span>) {'{'}<br/>
                  {'  '}<span className="text-pink-500">const</span> [metrics, setMetrics] = <span className="text-blue-300">useState</span>&lt;<span className="text-yellow-300">Metrics</span> | <span className="text-pink-500">null</span>&gt;(<span className="text-pink-500">null</span>);<br/>
                  {'  '}<span className="text-pink-500">const</span> [isLoading, setIsLoading] = <span className="text-blue-300">useState</span>(<span className="text-pink-500">true</span>);<br/>
                  <br/>
                  {'  '}<span className="text-blue-300">useEffect</span>(() =&gt; {'{'}<br/>
                  {'    '}<span className="text-blue-300">fetchMetrics</span>(clientId)<br/>
                  {'      '}.<span className="text-blue-300">then</span>(data =&gt; setMetrics(data))<br/>
                  {'      '}.<span className="text-blue-300">finally</span>(() =&gt; setIsLoading(<span className="text-pink-500">false</span>));<br/>
                  {'  '}, [clientId]);<br/>
                  <br/>
                  {'  '}<span className="text-pink-500">return</span> {'{'} metrics, isLoading {'}'};<br/>
                  {'}'}
                </code>
              </pre>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-3">Custom Architecture</h4>
              <p className="text-gray-400">
                Clean, modular codebases designed for scalability. We use modern React patterns and custom hooks to build maintainable applications.
              </p>
            </div>
          </motion.div>

          {/* Radar card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black/20 backdrop-blur-xl border border-white/5 hover:border-primary/20 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-[var(--color-primary)] opacity-5 blur-[100px]"></div>
            <div className="flex-1 flex items-center justify-center mb-8 relative">
              <div className="w-48 h-48 rounded-full border border-primary/10 relative">
                <div className="absolute inset-0 rounded-full border border-primary/20 scale-75"></div>
                <div className="absolute inset-0 rounded-full border border-primary/30 scale-50"></div>
                <div className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-primary origin-left animate-[spin_4s_linear_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(46,49,225,0.8)]"></div>
              </div>
            </div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-white mb-3">Performance Monitoring</h4>
              <p className="text-gray-400">
                Continuous optimization to ensure your site loads fast and ranks high.
              </p>
            </div>
          </motion.div>

          {/* Encryption card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black/20 backdrop-blur-xl border border-white/5 hover:border-primary/20 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group"
          >
            <div className="flex-1 flex items-center justify-center mb-8">
              <div className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 font-mono text-sm text-[var(--color-primary)]">
                r9H4DmQj6LVx2C
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-3">Enterprise Security</h4>
              <p className="text-gray-400">
                Best-in-class security practices to keep your data and users safe.
              </p>
            </div>
          </motion.div>

          {/* Integration card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-black/20 backdrop-blur-xl border border-white/5 hover:border-primary/20 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group"
          >
            <div className="flex-1 flex items-center justify-center mb-8">
              <div className="grid grid-cols-3 gap-4 opacity-50">
                {/* Placeholder for integration icons */}
                <div className="w-12 h-12 rounded-full bg-white/10"></div>
                <div className="w-12 h-12 rounded-full bg-white/10"></div>
                <div className="w-12 h-12 rounded-full bg-white/10"></div>
                <div className="w-12 h-12 rounded-full bg-white/10"></div>
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] opacity-100 flex items-center justify-center">
                  <div className="w-6 h-6 bg-black rounded-sm"></div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10"></div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-3">API Integrations</h4>
              <p className="text-gray-400">
                Seamlessly connect your web app with third-party services and tools.
              </p>
            </div>
          </motion.div>

          {/* Access card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-black/20 backdrop-blur-xl border border-white/5 hover:border-primary/20 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group"
          >
            <div className="flex-1 flex items-center justify-center mb-8">
              <div className="w-24 h-32 border-2 border-white/10 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 border-2 border-[var(--color-primary)] rounded-full opacity-50 scale-110"></div>
                <svg className="w-12 h-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-3">Role-Based Access</h4>
              <p className="text-gray-400">
                Complex permission systems tailored to your organizational needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
