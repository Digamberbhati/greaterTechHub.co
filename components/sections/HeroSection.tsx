'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  RocketLaunchIcon, 
  CpuChipIcon, 
  CloudIcon 
} from '@heroicons/react/24/outline';

const floatingIcons = [
  { Icon: RocketLaunchIcon, delay: 0, x: 100, y: 50 },
  { Icon: CpuChipIcon, delay: 0.5, x: -80, y: 80 },
  { Icon: CloudIcon, delay: 1, x: 120, y: -40 },
];

export default function HeroSection() {
  console.log('HeroSection component rendered');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10"
            style={{
              left: `${50 + item.x}px`,
              top: `${50 + item.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.Icon className="h-24 w-24 text-white" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl container-padding">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Empowering Your
              <span className="block gradient-text">
                Digital Future
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your business with cutting-edge technology solutions. 
            From web development to cloud infrastructure, we deliver innovation 
            that drives growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              asChild
              size="lg"
              className="bg-gradient-blue hover:opacity-90 text-white px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4 text-lg font-semibold"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '50+', label: 'Happy Clients' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}