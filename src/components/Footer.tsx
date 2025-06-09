import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-platinum text-prussian py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <Image
              src="/images/logo.jpg"
              alt="Hayati Shisha Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
            <p className="text-prussian/80">
              Toronto's Premier Shisha Catering Service, bringing premium hookah experiences to your events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('calculator-section')}
                  className="text-prussian/80 hover:text-lion transition-colors"
                >
                  🎯 Catering Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact-section')}
                  className="text-prussian/80 hover:text-lion transition-colors"
                >
                  📝 Request a Quote
                </button>
              </li>
              <li>
                <a href="/privacy-policy" className="text-prussian/80 hover:text-lion transition-colors">
                  🔒 Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-prussian/80">
              <li>📍 Greater Toronto Area</li>
              <li>
                <a 
                  href="tel:+16478359672" 
                  className="hover:text-lion transition-colors flex items-center gap-2"
                >
                  📞 +1 (647)-835-9672
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@hayaticatering.com" 
                  className="hover:text-lion transition-colors flex items-center gap-2"
                >
                  ✉️ info@hayaticatering.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <a
              href="https://www.instagram.com/hayatishishacatering/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-prussian/80 hover:text-lion transition-colors"
            >
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @hayatishishacatering
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-prussian/20 mt-12 pt-8 text-center text-prussian/60">
          <p>© {new Date().getFullYear()} Hayati Shisha Catering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 