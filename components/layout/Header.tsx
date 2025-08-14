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
import { 
  Menu, 
  X, 
  ChevronDown,
  Code,
  Smartphone,
  Megaphone,
  Bot,
  Cloud,
  Briefcase,
  Network,
  Film,
  PenTool,
  ClipboardCheck,
  Building2,
  BarChart3,
  Users,
  Headset,
  LayoutGrid
} from 'lucide-react';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

// --- DATA ---

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

const services = [
    {
        icon: Code,
        title: 'Website Development',
        description: 'Modern, responsive websites with cutting-edge tech for optimal performance.',
        href: '/services/website-development'
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile apps for iOS & Android with seamless UX.',
         href: '/services/mobile-app-development',
    },
    {
        icon: Megaphone,
        title: 'Digital Marketing & SEO',
        description: 'Comprehensive strategies to boost your online presence and drive conversions.',
        href: '/services/digital-marketing-seo',
    },
    {
        icon: Bot,
        title: 'AI Agents & ChatBots',
        description: 'Intelligent AI agents and chatbots for enhanced customer interaction and support.',
       href: '/services/chatbot-aiagents',
    },
    {
        icon: Cloud,
        title: 'DevOps & Cloud Solutions',
        description: 'Scalable cloud infrastructure and DevOps automation for reliable operations.',
       href: '/services/devops-cloud-solutions',
    },
    {
        icon: Briefcase,
        title: 'CRM & ERP Systems',
        description: 'Custom business management systems to streamline operations and productivity.',
        href: '/services/crm-erp-systems',
    },
    {
        icon: Network,
        title: 'IT Infrastructure',
        description: 'Robust network and infrastructure solutions for secure, reliable business operations.',
        href: '/services/it-infrastructure-networking',
    },
    {
        icon: Film,
        title: '2D/3D Animation',
        description: 'Professional animation services for marketing, education, and entertainment.',
         href: '/services/2d-3d-animation',
    },
    {
        icon: PenTool,
        title: 'Custom Software Solutions',
        description: 'Bespoke software development tailored to your unique business requirements.',
       href: '/services/custom-software-solutions',
    },
    {
        icon: ClipboardCheck,
        title: 'QA & Software Testing',
        description: 'Comprehensive testing services to ensure software quality and performance.',
        href: '/services/qa-software-testing',
    },
    {
        icon: Building2,
        title: 'Branding & Advertising',
        description: 'Complete brand identity, ad campaigns, and market research to elevate your brand.',
       href: '/services/branding-advertising-market-research',
    },
    {
        icon: BarChart3,
        title: 'Business Strategy',
        description: 'Strategic consulting to drive business growth, innovation, and competitive advantage.',
         href: '/services/business-strategy',
    },
    {
        icon: Users,
        title: 'Recruitment Services',
        description: 'End-to-end recruitment solutions to acquire top tech talent for your organization.',
        href: '/services/recruitment-services',
    },
    {
        icon: Headset,
        title: 'BPO Services',
        description: 'Efficient outsourcing solutions for customer support, operations, and back-office tasks.',
       href: '/services/bpo-services',
    },
    {
        icon: LayoutGrid,
        title: 'System Design',
        description: 'Scalable and robust system designs for efficient and future-proof solutions.',
      href: '/services/system-design-architecture',
    }
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
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50"> 
      <div className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md">
        {/* Top Announcement Bar */}
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

        {/* Main Navigation */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 border-b border-slate-700/80">
          <div className="flex-shrink-0">
            <Link href="/" onClick={handleLinkClick}>
              <Image src="/whitelogo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" priority />
            </Link>
          </div>

          {/* --- Desktop Navigation with Services Dropdown --- */}
          <div className="hidden lg:flex flex-1 justify-center lg:gap-x-8">
            {navigation.map((item) => (
              item.name === 'Services' ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-200 hover:text-white transition-colors duration-200">
                    {item.name}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  
                  <div className="absolute -left-1/2 top-full z-10 mt-3 w-screen max-w-3xl overflow-hidden rounded-lg bg-slate-900/95 shadow-lg ring-1 ring-slate-700/80 backdrop-blur-sm 
                                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100">
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {services.map((service) => (
                        // -- THIS IS THE COMPACTED SERVICE ITEM --
                        <Link key={service.title} href={service.href} className="group/item relative flex items-start gap-x-3 rounded-lg p-3 text-sm hover:bg-slate-800/80 transition-colors duration-200">
                           <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-slate-800 group-hover/item:bg-slate-700">
                             <service.icon className="h-5 w-5 text-sky-400" aria-hidden="true" />
                           </div>
                           <div className="flex-auto">
                             <p className="font-semibold text-white">{service.title}</p>
                             <p className="mt-1 text-slate-400 text-xs">{service.description}</p>
                           </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-slate-200 hover:text-white transition-colors duration-200">
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <div className="flex flex-1 items-center justify-end">
            <div className="hidden lg:flex">
              <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white font-semibold">
                <Link href="/book">Book Appointment</Link>
              </Button>
            </div>
            <button className="lg:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* --- Mobile Menu --- */}
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