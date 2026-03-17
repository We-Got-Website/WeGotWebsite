import React from 'react';
import { motion } from 'motion/react';

interface TextPageProps {
  title: string;
  children: React.ReactNode;
}

export default function TextPage({ title, children }: TextPageProps) {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
            {title}
          </h1>
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
