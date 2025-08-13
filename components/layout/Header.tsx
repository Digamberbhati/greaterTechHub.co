import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Marquee from 'react-fast-marquee';
import ClientHeader from './ClientHeader';
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

// Social Media Links
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

// Navigation data
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-sky-500 text-white py-2 px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Social Icons (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center flex-wrap gap-x-3 sm:gap-x-4">
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

        {/* Center: Marquee (Visible on all screens) */}
        <div className="flex-1 overflow-hidden">
          <Marquee speed={50} pauseOnHover={true} className="text-sm font-medium">
            <span className="mx-12">✨ 20% OFF on select services! Book now and save! ✨</span>
          </Marquee>
        </div>

        {/* Right: Time and Mobile Menu Toggle (from ClientHeader) */}
        <ClientHeader />
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
          {/* Mobile Menu Toggle is handled by ClientHeader in the announcement bar */}
        </div>
      </nav>
    </header>
  );
}