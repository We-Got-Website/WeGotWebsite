import { CheckCircle2, ChevronDown, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'motion/react';

interface ContactFormProps {
  onSuccessCallback?: () => void;
}

export default function ContactForm({ onSuccessCallback }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        if (onSuccessCallback) {
          setTimeout(() => {
            setIsSuccess(false);
            onSuccessCallback();
          }, 3000);
        }
      } else {
        console.error("Error", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-12 flex flex-col items-center text-center rotate-0"
      >
        <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400">Thank you for reaching out. We'll get back to you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
          <input 
            type="text" 
            name="name"
            required 
            placeholder="John Doe"
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
          <input 
            type="email" 
            name="email"
            required 
            placeholder="john@example.com"
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
          <input 
            type="tel" 
            name="phone"
            required 
            placeholder="+1 (555) 000-0000"
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Company / Organisation</label>
          <input 
            type="text" 
            name="company"
            placeholder="Optional"
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Industry *</label>
        <div className="relative">
          <select 
            name="industry"
            required 
            defaultValue=""
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all appearance-none"
          >
            <option value="" disabled>Select Industry</option>
            <option value="logistics">Logistics and Supply Chain</option>
            <option value="ecommerce">E-commerce</option>
            <option value="tech-saas">Technology and SaaS</option>
            <option value="consulting">Consulting</option>
            <option value="realestate">Real Estate</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="personal">Personal Brand / Professional</option>
            <option value="other">Other</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Type of Website Required *</label>
        <div className="relative">
          <select 
            name="website_type"
            required 
            defaultValue=""
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all appearance-none"
          >
            <option value="" disabled>Select type</option>
            <option value="personal">Personal Website</option>
            <option value="business">Business Website</option>
            <option value="company">Company Website</option>
            <option value="ecommerce">E-commerce Website</option>
            <option value="portfolio">Portfolio Website</option>
            <option value="not-sure">Not Sure Yet</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Project Timeline *</label>
        <div className="relative">
          <select 
            name="timeline"
            required 
            defaultValue=""
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all appearance-none"
          >
            <option value="" disabled>Select timeline</option>
            <option value="asp">As soon as possible</option>
            <option value="2-4weeks">Within 2–4 weeks</option>
            <option value="1-2months">Within 1–2 months</option>
            <option value="flexible">Flexible timeline</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
        <textarea 
          name="details"
          required 
          rows={4}
          placeholder="Tell us what you're looking to build..."
          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none"
        />
      </div>
      
      <div className="pt-4">
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-3 md:py-4 rounded-lg transition-colors flex justify-center items-center text-base md:text-lg gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit Project Enquiry"
          )}
        </button>
      </div>
    </form>
  );
}
