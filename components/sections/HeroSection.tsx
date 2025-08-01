'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const taglines = [
  'Innovate with GreaterTechHub',
  'Empower Your Future with GreaterTechHub',
  'Build Tomorrow with GreaterTechHub',
  'Unleash Possibilities with GreaterTechHub',
];

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="relative min-h-screen flex items-center px-4 sm:px-12 lg:px-24 py-32 sm:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1C1917 30%, #D4AF37 100%)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/70 z-[1]" />

      <div className="relative z-10 max-w-[650px] text-center sm:text-left">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentTagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wide block mb-4"
          >
            {taglines[currentTagline]}
          </motion.span>
        </AnimatePresence>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold leading-tight mb-6 bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent"
        >
          Transform Your
          <br />
          Financial Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#94a3b8] mb-10 max-w-[580px] mx-auto sm:mx-0"
        >
          Unlock the power of next-generation payment solutions. Experience seamless transactions,
          advanced analytics, and enterprise-grade security.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start mb-16"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:from-yellow-800 hover:via-yellow-700 hover:to-yellow-600 text-white font-semibold text-base sm:text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/book">Book Appointment</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-transparent border border-yellow-600 text-white font-semibold text-base sm:text-lg px-8 py-3 rounded-full hover:bg-gradient-to-r hover:from-yellow-800 hover:via-yellow-700 hover:to-yellow-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </motion.div>

        {/* Stats Container */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center sm:justify-start mt-8">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">100%</span>
            <span className="text-base text-[#94a3b8] font-medium">Project Delivery</span>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">150</span>
            <span className="text-base text-[#94a3b8] font-medium">Active Projects – July</span>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">99.9%</span>
            <span className="text-base text-[#94a3b8] font-medium">Uptime</span>
          </div>
        </div>
      </div>

      {/* Hero Graphics */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full sm:w-1/2 h-full z-[1] hidden sm:block">
        <div
          className="absolute w-[800px] h-[800px] right-[-200px] top-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.1) 25%, rgba(212, 175, 55, 0) 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div className="relative w-full h-full">
          <motion.div
            className="absolute w-[300px] h-[200px] top-[20%] right-[20%] bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-2xl border border-[rgba(255,255,255,0.2)] shadow-2xl overflow-hidden"
            style={{ transform: 'rotate(-15deg)' }}
            animate={{ y: [-20, 0, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/hero/2.jpg"
              alt="Financial solution card 1"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute w-[250px] h-[150px] top-[40%] right-[40%] bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-2xl border border-[rgba(255,255,255,0.2)] shadow-2xl overflow-hidden"
            style={{ transform: 'rotate(10deg)' }}
            animate={{ y: [-20, 0, -20] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/hero/1.jpg"
              alt="Financial solution card 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute w-[200px] h-[120px] top-[60%] right-[30%] bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-2xl border border-[rgba(255,255,255,0.2)] shadow-2xl overflow-hidden"
            style={{ transform: 'rotate(-5deg)' }}
            animate={{ y: [-20, 0, -20] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/hero/3.jpg"
              alt="Financial solution card 3"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}