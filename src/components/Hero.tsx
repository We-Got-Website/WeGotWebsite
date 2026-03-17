import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onOpenProjectModal: () => void;
}

export default function Hero({ onOpenProjectModal }: HeroProps) {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
              Watch our event
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              We Build Websites<br />
              That Actually <span className="text-[var(--color-primary)]">Work</span><span className="animate-pulse">.</span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Focus on bespoke design, high-performance code, and conversion-driven results.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={onOpenProjectModal}
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors"
                >
                START YOUR PROJECT
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                VIEW OUR WORK
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[var(--color-primary)] opacity-20 blur-[100px] rounded-full"></div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl relative z-10">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/40">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex gap-4 ml-4 text-xs text-gray-500 font-mono">
                  <span className="text-white">useClientDashboard.ts</span>
                  <span>api.ts</span>
                  <span>types.ts</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto">
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
              <div className="px-4 py-2 border-t border-white/10 bg-black/40 flex justify-between items-center text-xs text-gray-400">
                <span>Documentation &gt;</span>
                <Play className="w-3 h-3" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
