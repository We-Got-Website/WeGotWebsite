import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { scrollToSection, scrollToTop } from '../utils/scroll';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      scrollToSection(id);
    }
  };

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToTop(e);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" onClick={(e) => {
              if (location.pathname === '/') handleScrollToTop(e);
            }} className="flex items-center gap-3 cursor-pointer">
              <img src={logo} alt="WGW Logo" className="h-30 object-contain" />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => handleScrollToSection('services')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</button>
              <button onClick={() => handleScrollToSection('approach')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Approach</button>
              <button onClick={() => handleScrollToSection('pricing')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</button>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
              GET TEMPLATE
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/40 backdrop-blur-md border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => handleScrollToSection('services')} className="text-gray-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium">Our services</button>
            <button onClick={() => handleScrollToSection('approach')} className="text-gray-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium">Our Approach</button>
            <button onClick={() => handleScrollToSection('pricing')} className="text-gray-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium">Pricing</button>
            <button className="w-full text-left bg-white text-black px-3 py-2 rounded-md text-base font-medium mt-4">
              GET TEMPLATE
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
