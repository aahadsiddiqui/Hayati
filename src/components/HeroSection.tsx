import React from 'react';
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
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover"
          style={{ 
            objectPosition: 'center',
            WebkitTransform: 'translateZ(0)' // Hardware acceleration
          }}
        >
          <source 
            src="/videos/smoke.mp4" 
            type="video/mp4"
          />
        </video>
        {/* Darker overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-platinum"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hayati Shisha
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-platinum/90">
            Toronto's Premier Shisha Catering Service
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('calculator-section')}
            className="bg-lion text-white px-8 py-4 rounded-lg text-lg font-medium
                     hover:bg-lion/90 transition-all duration-300"
          >
            Book Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 