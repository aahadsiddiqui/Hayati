import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShishaSelection } from './CostCalculator';
import { HEAD_OPTIONS } from './CostCalculator';
import { Calendar } from "../components/ui/calendar";
import { format } from "date-fns";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageSummary: {
    selectedHeads: ShishaSelection[];
    hours: number;
    totalCost: number;
    date?: Date;
  };
}

const BookingModal = ({ isOpen, onClose, packageSummary }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventAddress: '',
    eventDescription: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking submitted:', { ...formData, packageSummary });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-prussian">Complete Your Booking</h3>
                <button onClick={onClose} className="text-prussian/60 hover:text-prussian">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Package Summary */}
              <div className="bg-prussian/5 rounded-lg p-4">
                <h4 className="font-semibold mb-3">Package Summary</h4>
                <div className="space-y-2">
                  {/* Shisha Details */}
                  <div className="flex justify-between text-sm">
                    <span>{packageSummary.selectedHeads[0]?.quantity || 3}x Regular Head</span>
                    <span>${(packageSummary.selectedHeads[0]?.quantity || 3) * 100}</span>
                  </div>
                  
                  {/* Duration */}
                  <div className="flex justify-between text-sm">
                    <span>Duration</span>
                    <span>{packageSummary.hours} hours</span>
                  </div>

                  {/* Extra Hours Charge */}
                  {packageSummary.hours > 3 && (
                    <div className="flex justify-between text-sm text-prussian/70">
                      <span>Extra Hours Charge</span>
                      <span>+${(packageSummary.hours - 3) * 100}</span>
                    </div>
                  )}

                  {/* Event Date if selected */}
                  {packageSummary.date && (
                    <div className="flex justify-between text-sm">
                      <span>Event Date</span>
                      <span>{format(packageSummary.date, 'PPP')}</span>
                    </div>
                  )}

                  {/* Total */}
                  <div className="mt-4 pt-2 border-t border-prussian/10">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${packageSummary.totalCost}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <form 
                onSubmit={handleSubmit} 
                action="https://formspree.io/f/xpwqgvla"
                method="POST"
                className="space-y-4"
              >
                {/* Package Summary as hidden fields */}
                <input type="hidden" name="packageDetails" value={`${packageSummary.selectedHeads[0]?.quantity || 3}x Regular Head`} />
                <input type="hidden" name="duration" value={`${packageSummary.hours} hours`} />
                <input type="hidden" name="totalCost" value={`$${packageSummary.totalCost}`} />

                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full p-3 border border-prussian/20 rounded-lg focus:border-lion
                             focus:outline-none focus:ring-2 focus:ring-lion/50"
                  />
                </div>
                <div>
                  <label className="text-prussian text-sm font-medium mb-1 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="w-full p-3 border border-prussian/20 rounded-lg focus:outline-none focus:border-lion"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-3 border border-prussian/20 rounded-lg focus:border-lion
                             focus:outline-none focus:ring-2 focus:ring-lion/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Event Address</label>
                  <input
                    type="text"
                    name="eventAddress"
                    required
                    value={formData.eventAddress}
                    onChange={e => setFormData(prev => ({ ...prev, eventAddress: e.target.value }))}
                    className="w-full p-3 border border-prussian/20 rounded-lg focus:border-lion
                             focus:outline-none focus:ring-2 focus:ring-lion/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Event Description</label>
                  <textarea
                    name="eventDescription"
                    required
                    value={formData.eventDescription}
                    onChange={e => setFormData(prev => ({ ...prev, eventDescription: e.target.value }))}
                    rows={4}
                    className="w-full p-3 border border-prussian/20 rounded-lg focus:border-lion
                             focus:outline-none focus:ring-2 focus:ring-lion/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Event Date</label>
                  <input
                    type="hidden"
                    name="eventDate"
                    value={packageSummary.date ? format(packageSummary.date, 'PPP') : ''}
                  />
                  <div className="relative">
                    <Calendar
                      selected={packageSummary.date}
                      onChange={(date) => {
                        // Handle date selection if needed
                      }}
                      className="rounded-md border border-prussian/20"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-lion text-white py-4 rounded-lg font-medium
                           hover:bg-lion/90 transition-all duration-300"
                >
                  Confirm Booking
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal; 