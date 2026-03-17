import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToTop } from '../utils/scroll';

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-transparent border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                scrollToTop();
              }
            }} className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="WGW Logo" className="h-30 object-contain" />
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm">
              Our framework component is built to handle scaling demands with agility. Lightning-fast performance is our promise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/we-got-website" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Nadeem-Vibes" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/wegotwebsite/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/#services" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/#approach" className="text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
              <li><Link to="/#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} We Got Websites. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span>Made with <span className="text-[var(--color-primary)]">♥</span> for developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
