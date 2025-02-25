import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full h-20 z-50 bg-[#E0E7E2]" // Platinum color
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="h-full">
          <Image
            src="/images/logo.jpg"
            alt="Hayati Shisha Logo"
            width={80}
            height={80}
            className="h-full w-auto"
            priority
          />
        </Link>

        {/* Navigation */}
        <motion.button
          onClick={scrollToContact}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#B68D40] text-white px-6 py-2 rounded-md font-medium 
                   hover:bg-[#C69D50] transition-all duration-300"
        >
          Contact
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar; 