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
      <div className="text-xs text-prussian/60 text-center mt-4 mb-8">
        Serving the GTA: Ajax, Oshawa, Whitby, Markham, Toronto, Vaughan, Courtice, Etobicoke, King City, Pickering, North York, Bowmanville, Mississauga, Richmond Hill, East Gwillimbury, and more!
      </div>
    </main>
  );
} 