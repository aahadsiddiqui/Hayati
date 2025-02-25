import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover opacity-80"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="/videos/smoke.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/logo.jpg"
              alt="Hayati Shisha Logo"
              width={120}
              height={120}
              className="mx-auto"
              priority
            />
          </motion.div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-wider">
            HAYATI SHISHA
          </h1>
          
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl text-white/90 uppercase tracking-[0.2em]">
              Premium Shisha Experience
            </p>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Elevate Your Events with Toronto's Premier Shisha Catering Service
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('calculator-section')}
              className="bg-[#B68D40] text-white px-10 py-4 rounded-sm font-medium 
                       hover:bg-[#C69D50] transition-all duration-300 uppercase tracking-wider
                       min-w-[200px]"
            >
              Catering Packages
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact-section')}
              className="border-2 border-white text-white px-10 py-4 rounded-sm font-medium 
                       hover:bg-white/10 transition-all duration-300 uppercase tracking-wider
                       min-w-[200px]"
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection; 