import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProcessSection from '../components/ProcessSection';
import CostCalculator from '../components/CostCalculator';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <CostCalculator />
      <ContactForm />
      <Footer />
    </main>
  );
} 