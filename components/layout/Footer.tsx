import Link from 'next/link';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';
import { 
  FaWhatsapp, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// --- Data for Links ---
const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms-conditions' },
      { name: 'Partnership', href: '/partnership' },
      { name: 'Refer and Earn', href: '/refer-and-earn' },
    ],
  },
];

const socialLinks = [
    { name: 'WhatsApp', href: 'https://wa.me/919588160069', icon: FaWhatsapp },
    { name: 'Facebook', href: 'https://facebook.com/greatertechhub', icon: FaFacebookF },
    { name: 'Instagram', href: 'https://instagram.com/greatertechhub', icon: FaInstagram },
    { name: 'X', href: 'https://x.com/greatertechhub', icon: FaXTwitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/greatertechhub', icon: FaLinkedinIn },
    { name: 'YouTube', href: 'https://youtube.com/@greatertechhub', icon: FaYoutube },
];

export default function Footer() {
  return (
    // Changed bg-slate-900 to bg-slate-800 to make it less dark
    <footer className="bg-slate-800">
      {/* --- Main Footer Content --- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight text-white mb-6">
              Contact
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-md">
              GreaterTechHub (Worldwide with Top-Notch IT Services & BPO Services)
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-sky-500 flex-shrink-0" />
                <a 
                  href="mailto:info@greatertechhub.com" 
                  className="text-slate-300 hover:text-sky-400 transition-colors duration-300 text-sm"
                >
                  info@greatertechhub.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-sky-500 flex-shrink-0" />
                <a 
                  href="tel:+919588160069" 
                  className="text-slate-300 hover:text-sky-400 transition-colors duration-300 text-sm"
                >
                  +91 9588160069
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-sky-500 flex-shrink-0 mt-1" />
                <div className="text-slate-300 text-sm leading-relaxed">
                  <p>
                    3rd Floor, Krishna Palace, Ajronda Rd, Krishna Nagar, Chowk, Sector 20B, Faridabad, Haryana 121001
                  </p>
                  <p className="mt-2">
                    Plot No 1, GreaterTechHub Office, Near Padam Chowk, Mohna Road, V.P.O Chhainsa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-sky-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* --- Bottom Bar with sky-500 Background Color --- */}
      <div className="bg-sky-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-4">
                <p className="text-white text-sm">
                  © {new Date().getFullYear()} GreaterTechHub. All rights reserved.
                </p>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                     <a 
                      key={social.name}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-slate-200 transform hover:scale-110 transition-all duration-300"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}