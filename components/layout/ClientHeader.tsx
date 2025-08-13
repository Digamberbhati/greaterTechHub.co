"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope,
  FaLinkedinIn,
  FaPhoneAlt,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// Navigation data
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

// Social media data
const socialMedia = [
  { name: 'Instagram', href: 'https://instagram.com/greatertechhub', icon: FaInstagram },
  { name: 'Facebook', href: 'https://facebook.com/greatertechhub', icon: FaFacebookF },
  { name: 'YouTube', href: 'https://youtube.com/@greatertechhub', icon: FaYoutube },
  { name: 'X', href: 'https://x.com/greatertechhub', icon: FaXTwitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/greatertechhub', icon: FaLinkedinIn },
  { name: 'WhatsApp', href: 'https://wa.me/919588160069', icon: FaWhatsapp },
  { name: 'Email', href: 'mailto:info@yourcompany.com', icon: FaEnvelope },
  { name: 'Call', href: 'tel:+919588160069', icon: FaPhoneAlt },
];

// Framer Motion variants
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

export default function ClientHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Update current time
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(format(new Date(), 'hh:mm:ss a', { locale: enUS }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle body overflow for mobile menu
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

  return (
    <>
      {/* Time Display for Announcement Bar */}
      <div className="flex items-center">
        <span className="text-sm font-mono text-white flex-shrink-0">{currentTime}</span>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        type="button"
        className="lg:hidden z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <XMarkIcon className="h-7 w-7 text-white" />
        ) : (
          <Bars3Icon className="h-7 w-7 text-white" />
        )}
      </button>

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
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                      Follow Us
                    </h3>
                    <div className="mt-4 space-y-2">
                      {socialMedia.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-200 hover:bg-slate-800 flex items-center"
                        >
                          <item.icon className="h-5 w-5 mr-2" />
                          {item.name}
                        </a>
                      ))}
                    </div>
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
    </>
  );
}