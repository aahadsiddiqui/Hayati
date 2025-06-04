import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from './BookingModal';
import { Calendar } from "../components/ui/calendar";
import { format } from "date-fns";

type HeadType = 'regular' | 'fruit' | 'half';

interface HeadOption {
  type: HeadType;
  name: string;
  price: number;
  description: string;
}

export interface ShishaSelection {
  type: HeadType;
  quantity: number;
}

export const HEAD_OPTIONS: HeadOption[] = [
  {
    type: 'regular',
    name: 'Regular Head',
    price: 150,
    description: 'Classic shisha experience'
  },
  {
    type: 'fruit',
    name: 'Fruit Head',
    price: 160,
    description: 'Premium fruit-topped experience'
  },
  {
    type: 'half',
    name: 'Half & Half',
    price: 155,
    description: 'Best of both worlds'
  }
];

const CostCalculator = () => {
  const [selectedHeadType, setSelectedHeadType] = useState<HeadType>('regular');
  const [shishaQuantity, setShishaQuantity] = useState<number>(3);
  const [hours, setHours] = useState<number>(3);
  const [guestCount, setGuestCount] = useState<number>(1);
  const [showError, setShowError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState<Date>();

  // Function to get recommended shishas based on guest count
  const getRecommendedShishas = (guests: number) => {
    if (guests <= 10) return 3;
    if (guests <= 19) return 4;
    if (guests <= 29) return 5;
    return Math.ceil(guests / 10);
  };

  // Update hours slider to go up to 10
  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHours(parseInt(e.target.value));
  };

  // Handle head type selection (single choice)
  const handleHeadSelection = (type: HeadType) => {
    setSelectedHeadType(type);
  };

  // Calculate total cost
  const calculateTotal = () => {
    if (!selectedHeadType || shishaQuantity < 1) {
      return {
        subtotal: 0,
        tax: 0,
        total: 0
      };
    }
    const headOption = HEAD_OPTIONS.find(h => h.type === selectedHeadType);
    const basePrice = (headOption?.price || 0) * shishaQuantity;
    const extraHours = Math.max(0, hours - 3);
    const extraHoursCost = extraHours * 150;
    const subtotal = basePrice + extraHoursCost;
    const tax = subtotal * 0.13;
    return {
      subtotal,
      tax,
      total: subtotal + tax
    };
  };

  useEffect(() => {
    if (shishaQuantity < 3) {
      setShowError('Minimum 3 Shishas for Bookings');
    } else {
      setShowError('');
    }
  }, [shishaQuantity]);

  return (
    <section id="calculator-section" className="bg-gradient-to-b from-platinum to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-prussian mb-4">
            Calculate Your Catering Cost
          </h2>
          <p className="text-lg text-prussian/70">
            Customize your shisha experience
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Configuration Panel */}
          <div className="space-y-12">
            {/* Head Type Selection */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Choose Your Head Type</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {HEAD_OPTIONS.map((option) => (
                  <motion.button
                    key={option.type}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 flex flex-col items-center
                      ${selectedHeadType === option.type 
                        ? 'border-lion bg-lion/10 text-prussian shadow-lg' 
                        : 'border-prussian/20 hover:border-lion/50'}`}
                    onClick={() => handleHeadSelection(option.type)}
                  >
                    <span className="font-semibold mb-2">{option.name}</span>
                    <span className="text-2xl font-bold mb-2">${option.price}</span>
                    <span className="text-sm text-prussian/60">{option.description}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Hours Selection */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Hours of Service</h3>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <input
                  type="range"
                  min="3"
                  max="10"
                  value={hours}
                  onChange={handleHoursChange}
                  className="w-full h-2 bg-prussian/20 rounded-lg appearance-none cursor-pointer
                           accent-lion focus:outline-none focus:ring-2 focus:ring-lion/50"
                />
                <div className="flex justify-between mt-4">
                  <span className="text-prussian/60">3 hours</span>
                  <span className="text-2xl font-bold text-prussian">{hours} hours</span>
                  <span className="text-prussian/60">10 hours</span>
                </div>
              </div>
            </div>

            {/* Guest Count & Shisha Selection */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Party Size</h3>
              <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
                <div>
                  <label className="text-lg mb-2 block">Number of Guests</label>
                  <input
                    type="number"
                    min="1"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full p-3 border-2 border-prussian/20 rounded-lg focus:border-lion
                             focus:outline-none focus:ring-2 focus:ring-lion/50"
                  />
                </div>

                <div>
                  <label className="text-lg mb-2 block">Number of Shishas</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 w-full">
                      <input
                        type="number"
                        min="3"
                        value={shishaQuantity}
                        onChange={(e) => {
                          const numValue = parseInt(e.target.value);
                          setShishaQuantity(isNaN(numValue) ? 3 : numValue);
                        }}
                        className="w-full p-3 border-2 border-prussian/20 rounded-lg focus:border-lion
                                 focus:outline-none focus:ring-2 focus:ring-lion/50"
                      />
                    </div>
                    {showError && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="text-sm text-amber-600 bg-amber-50 px-4 py-2 rounded-lg whitespace-nowrap"
                      >
                        {showError}
                      </motion.div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-lg mb-2 block">Event Date</label>
                  <Calendar
                    selected={date}
                    onChange={setDate}
                    className="rounded-md border border-prussian/20"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cost Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-prussian text-platinum p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-8">Your Package Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span>{HEAD_OPTIONS.find(h => h.type === selectedHeadType)?.name}</span>
                  <span className="font-semibold">x{shishaQuantity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Duration</span>
                  <span className="font-semibold">{hours} hours</span>
                </div>
                {hours > 3 && (
                  <div className="flex justify-between items-center text-sm text-platinum/80">
                    <span>Extra Hours Charge</span>
                    <span>+${(hours - 3) * 150}</span>
                  </div>
                )}
                <div className="border-t border-platinum/20 pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span className="font-semibold">${calculateTotal().subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-platinum/80">
                    <span>Tax (13%)</span>
                    <span>${calculateTotal().tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-platinum/20">
                    <span className="text-xl">Total Cost</span>
                    <span className="text-3xl font-bold">${calculateTotal().total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-platinum/80">
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-lion" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Professional Setup
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-lion" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Premium Flavours
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-lion" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Expert Service
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-lion" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Complete Cleanup
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (shishaQuantity >= 3) {
                    setIsModalOpen(true);
                  }
                }}
                className="w-full mt-8 bg-lion text-white py-4 rounded-lg font-medium
                         hover:bg-lion/90 transition-all duration-300"
                disabled={shishaQuantity < 3}
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageSummary={{
          selectedHeads: [{ 
            type: selectedHeadType, 
            quantity: shishaQuantity 
          }],
          hours,
          totalCost: calculateTotal(),
          date
        }}
      />
    </section>
  );
};

export default CostCalculator; 