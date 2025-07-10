import Link from 'next/link';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';
import { 
  FaWhatsapp, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaYoutube 
} from 'react-icons/fa';

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
      // { name: 'Support', href: '/support' },
      { name: 'Partnership', href: '/partnership' },
      { name: 'Refer and Earn', href: '/refer-and-earn' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-2xl font-bold tracking-tight text-white">
                Contact
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-md">
              GreaterTechHub (Worldwide with Top-Notch IT Services & BPO Services)
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-brand-blue flex-shrink-0" />
                <a 
                  href="mailto:info@greatertechhub.com" 
                  className="text-gray-300 hover:text-white hover:underline transition-all duration-300 text-sm"
                >
                  info@greatertechhub.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-brand-blue flex-shrink-0" />
                <a 
                  href="tel:+919588160069" 
                  className="text-gray-300 hover:text-white hover:underline transition-all duration-300 text-sm"
                >
                  +91 9588160069
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-brand-blue flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm leading-relaxed">
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
                      className="text-gray-300 hover:text-white hover:underline transition-all duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} GreaterTechHub. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a 
                href="https://wa.me/+919588160069" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/greatertechhub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/@greatertechsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/greatertechhub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
                aria-label="X"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/greatertechhub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@greatertechhub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
