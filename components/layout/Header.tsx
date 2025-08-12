'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Marquee from 'react-fast-marquee';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
    FaEnvelope,
    FaLinkedinIn,
    FaPhoneAlt // Phone icon imported
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


// --- Data & Configuration ---
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

// --- Social Media Links Updated with Call ---
const socialLinks = [
    
    { name: 'Instagram', href: 'https://instagram.com/greatertechhub', icon: FaInstagram },
    { name: 'Facebook', href: 'https://facebook.com/greatertechhub', icon: FaFacebookF },
    { name: 'YouTube', href: 'https://youtube.com/@greatertechhub', icon: FaYoutube },
    { name: 'X', href: 'https://x.com/greatertechhub', icon: FaXTwitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/greatertechhub', icon: FaLinkedinIn },
    { name: 'WhatsApp', href: 'https://wa.me/919588160069', icon: FaWhatsapp },
    { name: 'Email', href: 'mailto:info@yourcompany.com', icon: FaEnvelope },
    { name: 'Call', href: 'tel:+919588160069', icon: FaPhoneAlt }, // <-- Call link added
];

// --- Framer Motion Variants ---
const menuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'tween', ease: 'circOut' } },
  exit: { x: '100%', opacity: 0, transition: { type: 'tween', ease: 'circIn' } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // --- Logic Hooks ---
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(format(new Date(), 'hh:mm:ss a', { locale: enUS }));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // --- Render ---
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-sky-500 text-white py-2 px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Social Icons */}
        <div className="flex items-center flex-wrap gap-x-3 sm:gap-x-4">
             {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-slate-200 transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
        </div>

        {/* Center: Marquee */}
        <div className="flex-1 overflow-hidden hidden lg:block">
            <Marquee speed={50} pauseOnHover={true} className="text-sm font-medium">
              <span className="mx-12">✨ 20% OFF on select services! Book now and save! ✨</span>
            </Marquee>
        </div>

        {/* Right: Time */}
        <div className="flex items-center">
            <span className="text-sm font-mono text-white flex-shrink-0">{currentTime}</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 border-b border-slate-700/80">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/whitelogo.png"
              alt="GreaterTechHub Logo"
              width={40}
              height={40}
              className="h-10 w-auto flex-shrink-0"
              priority
            />
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-slate-200 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-x-4">
          <div className="hidden lg:flex">
            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white font-semibold">
              <Link href="/book">Book Appointment</Link>
            </Button>
          </div>
          <button
            type="button"
            className="lg:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XMarkIcon className="h-7 w-7 text-white" /> : <Bars3Icon className="h-7 w-7 text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 lg:hidden"
            />
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-slate-900 p-6 lg:hidden"
            >
              <div className="mt-16 flow-root">
                <div className="-my-6 divide-y divide-slate-700">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-200 hover:bg-slate-800"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button
                      asChild
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold"
                    >
                      <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                        Book Appointment
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}