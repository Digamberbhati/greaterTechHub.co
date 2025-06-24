'use client';

import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  TrophyIcon, 
  UsersIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

// Custom hook for counting animation
const useCountUp = (end: number, duration: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // Assuming 60 FPS
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    const timer = setTimeout(() => requestAnimationFrame(step), 100); // Slight delay to ensure visibility
    return () => clearTimeout(timer);
  }, [end, duration]);

  return count;
};

const highlights = [
  {
    icon: CheckCircleIcon,
    title: 'Proven Excellence',
    description: '5000+ successful projects delivered across diverse industries',
  },
  {
    icon: TrophyIcon,
    title: 'Award-Winning Team',
    description: 'Recognized for innovation and outstanding client satisfaction',
  },
  {
    icon: UsersIcon,
    title: 'Expert Developers',
    description: 'Skilled professionals with 5+ years of combined experience',
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Reach',
    description: 'Serving clients worldwide with 24/7 support and maintenance',
  },
];

export default function AboutPreview() {
  // Stats data with target values
  const stats = [
    { value: 5000, label: 'Projects' },
    { value: 350, label: 'Clients' },
    { value: 5, label: 'Years' },
    { value: null, label: 'Support', display: '24/7' }, // Non-numeric for "24/7"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-black via-gold-600 to-yellow-700 bg-clip-text text-transparent">
                {' '}GreaterTechHub
              </span>
            </h2>

            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              We're not just another IT company. We're your technology partners,
              committed to transforming your digital vision into reality with
              innovative solutions and unmatched expertise.
            </p>

            <div className="space-y-6 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <highlight.icon className="h-6 w-6 text-yellow-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-800">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:opacity-90 text-white px-8 py-4 text-lg font-semibold"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>

          {/* Visual Element with Countdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-yellow-700 via-yellow-600 to-yellow-500 rounded-3xl p-8 text-white shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <motion.div
                      className="text-4xl font-bold mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {stat.value !== null ? (
                        <>
                          {useCountUp(stat.value, 2)}+
                        </>
                      ) : (
                        stat.display
                      )}
                    </motion.div>
                    <div className="text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/20 rounded-xl">
                <h4 className="font-semibold mb-2 text-white">Our Mission</h4>
                <p className="text-sm text-white/90">
                  To empower businesses with innovative technology solutions that
                  drive growth, efficiency, and digital transformation.
                </p>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-600/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-500/30 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}