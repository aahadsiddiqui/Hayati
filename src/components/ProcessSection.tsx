import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Submit an Online Inquiry",
    description: "Get started by filling out our inquiry form or call us at +1 (647)-835-9672 or +1 (647)-571-3507",
    icon: "📝"
  },
  {
    title: "Prep",
    description: "We'll arrive 30 minutes before your event starts to set everything up perfectly",
    icon: "⏰"
  },
  {
    title: "Service",
    description: "We'll prepare your guests with premium flavours and exceptional service",
    icon: "🌟"
  },
  {
    title: "Clean Up",
    description: "We'll handle all the necessary clean up after the event",
    icon: "✨"
  }
];

const ProcessSection = () => {
  return (
    <section className="bg-prussian text-platinum py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How Does It Operate?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-prussian-dark p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-platinum/80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 