'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  RocketLaunchIcon, 
  CpuChipIcon, 
  CloudIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

// Floating icons configuration
const floatingIcons = [
  { Icon: RocketLaunchIcon, delay: 0, x: 100, y: 50, size: 24 },
  { Icon: CpuChipIcon, delay: 0.5, x: -80, y: 80, size: 20 },
  { Icon: CloudIcon, delay: 1, x: 120, y: -40, size: 28 },
  { Icon: SparklesIcon, delay: 1.5, x: -100, y: -20, size: 16 },
];

// Rotating taglines with GreaterTechHub integration
const taglines = [
  "Innovate with GreaterTechHub",
  "Empower Your Future with GreaterTechHub",
  "Build Tomorrow with GreaterTechHub",
  "Unleash Possibilities with GreaterTechHub",
];

export default function HeroSection() {
  console.log('HeroSection component rendered');

  // State for rotating taglines
  const [currentTagline, setCurrentTagline] = useState(0);

  // Rotate taglines every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effect using scroll
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Original Background Gradient with Parallax */}
      <motion.div
        className="absolute inset-0 hero-gradient"
        style={{ y: yBackground }}
      />

      {/* Floating Background Elements with Subtle Glow */}
      <div className="absolute inset-0">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-20"
            style={{
              left: `${50 + item.x}px`,
              top: `${50 + item.y}%`,
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <item.Icon className={`h-${item.size} w-${item.size} text-white`} />
          </motion.div>
        ))}
      </div>

      {/* Inline CSS for gold-white-grey-black gradient */}
      <style jsx>{`
        .gold-white-grey-black-gradient {
          background: linear-gradient(90deg, #FFD700, #FFFFFF, #808080, #000000);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl container-padding px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Animated Tagline Rotator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-white text-xl md:text-2xl font-bold tracking-wide">
              {taglines[currentTagline]}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Smart Tech, Bright Futures
              <span className="block gold-white-grey-black-gradient text-4xl md:text-6xl lg:text-5xl">
                GreaterTechHub
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Discover cutting-edge tech solutions with GreaterTechHub, designed to propel your success into the future. Let’s innovate together!
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <Button 
              asChild
              size="lg"
              className="bg-gradient-blue hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform"
            >
              <Link href="/contact">Join GreaterTechHub Today</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}