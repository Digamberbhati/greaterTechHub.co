"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Marquee from 'react-fast-marquee';
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
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

// Data (yahan koi badlav nahi)
const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/greatertechhub', icon: FaInstagram },
  { name: 'Facebook', href: 'https://facebook.com/greatertechhub', icon: FaFacebookF },
  { name: 'YouTube', href: 'https://youtube.com/@greatertechhub', icon: FaYoutube },
  { name: 'X', href: 'https://x.com/greatertechhub', icon: FaXTwitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/greatertechhub', icon: FaLinkedinIn },
  { name: 'WhatsApp', href: 'https://wa.me/919588160069', icon: FaWhatsapp },
  { name: 'Email', href: 'mailto:info@yourcompany.com', icon: FaEnvelope },
  { name: 'Call', href: 'tel:+919588160069', icon: FaPhoneAlt },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(format(new Date(), 'hh:mm:ss a', { locale: enUS }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close menu if a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    // Header tag ko relative banana zaroori hai dropdown ke liye
    <header className="relative z-50"> 
      <div className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md">
        {/* Top Announcement Bar (Pehle jaisa) */}
        <div className="bg-sky-500 text-white py-2 px-4 lg:px-8 flex items-center justify-between gap-4">
          <div className="hidden lg:flex items-center flex-wrap gap-x-3 sm:gap-x-4">
            {socialLinks.slice(0, 6).map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-200 transition-colors duration-200" aria-label={social.name}>
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="flex-1 overflow-hidden">
            <Marquee speed={50} pauseOnHover={true} className="text-sm font-medium">
              <span className="mx-12">✨ 20% OFF on select services! Book now and save! ✨</span>
            </Marquee>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-mono text-white flex-shrink-0">{currentTime}</span>
          </div>
        </div>

        {/* Main Navigation (Pehle jaisa) */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 border-b border-slate-700/80">
          <div className="flex-shrink-0">
            <Link href="/" onClick={handleLinkClick}>
              <Image src="/whitelogo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" priority />
            </Link>
          </div>
          <div className="hidden lg:flex flex-1 justify-center lg:gap-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-slate-200 hover:text-white transition-colors duration-200">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 items-center justify-end">
            <div className="hidden lg:flex">
              <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white font-semibold">
                <Link href="/book">Book Appointment</Link>
              </Button>
            </div>
            <button className="lg:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
              {/* Icon badlega jab menu khulega */}
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* --- Mobile Menu (Dropdown Style) --- */}
      <div
        className={`fixed top-[110px] left-0 right-0 lg:hidden bg-slate-900/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="mx-auto max-w-7xl flex flex-col gap-y-4 p-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-100 hover:bg-slate-800"
              onClick={handleLinkClick}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4">
            <Button asChild className="w-full bg-sky-500 hover:bg-sky-600">
              <Link href="/book" onClick={handleLinkClick}>Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}