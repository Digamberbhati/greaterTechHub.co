'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Website Development', href: '/services/website-development' },
      { name: 'Mobile App Development', href: '/services/mobile-app-development' },
      { name: 'Digital Marketing & SEO', href: '/services/digital-marketing-seo' },
      { name: 'DevOps & Cloud Solutions', href: '/services/devops-cloud-solutions' },
      { name: 'CRM & ERP Systems', href: '/services/crm-erp-systems' },
      { name: 'View All Services', href: '/services' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-[#111827] border-b border-gray-800 transition-all duration-300"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between container-padding py-4 lg:py-6">
        {/* Logo with Image */}
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/whitelogo.png" 
            alt="GreaterTechHub Logo" 
            width={40} 
            height={40} 
            className="h-10 w-auto"
            priority
          />
         
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
              >
                {item.name}
                {item.submenu && (
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                )}
              </Link>

              {item.submenu && (
                <AnimatePresence>
                  {activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full mt-2 w-64 rounded-lg bg-white shadow-lg border border-gray-200 py-2"
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:text-brand-blue hover:bg-gray-100 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Button 
            asChild
            className="bg-gradient-blue hover:opacity-90 text-white font-medium"
          >
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#111827] border-t border-gray-800"
          >
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-300 hover:text-white font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.slice(0, -1).map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-1 text-sm text-gray-400 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button 
                  asChild
                  className="w-full bg-gradient-blue hover:opacity-90 text-white"
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
