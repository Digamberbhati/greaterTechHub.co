'use client';

import { motion } from 'framer-motion';
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
const useCountUp = (end: number, duration: number, isInView: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0); // Reset count when out of view
      return;
    }

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
    const timer = setTimeout(() => requestAnimationFrame(step), 100);
    return () => clearTimeout(timer);
  }, [end, duration, isInView]);

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
  const stats = [
    { value: 5000, label: 'Projects' },
    { value: 350, label: 'Clients' },
    { value: 5, label: 'Years' },
    { value: null, label: 'Support', display: '24/7' },
  ];

  // State to track if stats section is in view
  const [isStatsInView, setIsStatsInView] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }} // Keep once: true for content section
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Why Choose
              <span className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                {' '}GreaterTechHub
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              We're your technology partners, dedicated to transforming your digital vision into reality with innovative solutions and unmatched expertise.
            </p>

            <div className="space-y-6 mb-10">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    className="flex-shrink-0 p-2 rounded-full bg-yellow-100 group-hover:bg-yellow-200 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <highlight.icon className="h-6 w-6 text-yellow-700" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-yellow-700 transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:from-yellow-800 hover:via-yellow-700 hover:to-yellow-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </motion.div>

          {/* Stats Card with Neumorphism */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            onViewportEnter={() => setIsStatsInView(true)} // Trigger when entering viewport
            onViewportLeave={() => setIsStatsInView(false)} // Reset when leaving viewport
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-[8px_8px_16px_rgba(0,0,0,0.05),-8px_-8px_16px_rgba(255,255,255,0.8)]">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
                  >
                    <div className="text-5xl font-extrabold text-yellow-700 mb-2">
                      {stat.value !== null ? (
                        <>
                          {useCountUp(stat.value, 2, isStatsInView)}+
                        </>
                      ) : (
                        stat.display
                      )}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 p-6 bg-yellow-50/50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg text-gray-900 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.
                </p>
              </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}