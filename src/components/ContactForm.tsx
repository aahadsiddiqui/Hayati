import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from "./ui/calendar";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventAddress: '',
    eventDescription: '',
  });
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, date });
    // Handle form submission
  };

  return (
    <section id="contact-section" className="bg-prussian text-platinum py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Request a Quote
          </h2>
          <p className="text-platinum/80">
            Let us know about your event and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block text-lg mb-2">Name</label>
            <input
              type="text"
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-4 bg-prussian-dark/20 border border-platinum/20 rounded-lg
                       placeholder:text-platinum/50 focus:outline-none focus:border-lion"
            />
          </div>

          <div>
            <label className="text-lg mb-2 block">Phone Number</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter your phone number"
              className="w-full p-3 border-2 border-prussian/20 rounded-lg bg-transparent
                       text-platinum placeholder:text-platinum/50 focus:outline-none focus:border-lion"
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Event Address</label>
            <input
              type="text"
              required
              placeholder="Where will the event take place?"
              value={formData.eventAddress}
              onChange={e => setFormData(prev => ({ ...prev, eventAddress: e.target.value }))}
              className="w-full p-4 bg-prussian-dark/20 border border-platinum/20 rounded-lg
                       placeholder:text-platinum/50 focus:outline-none focus:border-lion"
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Event Date</label>
            <Calendar
              selected={date}
              onChange={setDate}
              className="bg-prussian-dark/20 border border-platinum/20 rounded-lg text-platinum"
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Event Description</label>
            <textarea
              required
              placeholder="Tell us about your event (type, number of guests, special requests...)"
              value={formData.eventDescription}
              onChange={e => setFormData(prev => ({ ...prev, eventDescription: e.target.value }))}
              rows={5}
              className="w-full p-4 bg-prussian-dark/20 border border-platinum/20 rounded-lg
                       placeholder:text-platinum/50 focus:outline-none focus:border-lion"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-lion text-white py-4 rounded-lg font-medium
                     hover:bg-lion/90 transition-all duration-300 mt-8"
          >
            Submit Request
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm; 