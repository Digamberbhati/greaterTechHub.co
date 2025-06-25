'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    description: 'Response within 24 hours',
    action: 'Send Email',
    href: 'mailto:info@greatertechhub.com',
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    description: 'Speak with our team',
    action: 'Call Now',
    href: 'tel:+1234567890',
  },
];

export default function ContactCTA() {
  console.log('ContactCTA component rendered');

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Inline CSS for gold-black-brown gradient */}
        <style jsx>{`
          .gold-black-brown-gradient {
            background: linear-gradient(90deg, #FFD700, #8B4513, #000000);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          .button-gradient {
            background: linear-gradient(90deg, #FFD700, #8B4513, #000000);
            color: #000000;
            transition: background 0.3s ease, color 0.3s ease;
          }
          .button-gradient:hover {
            background: #8B4513;
            color: #FFD700;
          }
        `}</style>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black gold-black-brown-gradient">
            Connect with GreaterTechHub
          </h2>
          <p className="text-lg text-black mt-2">
            Let’s discuss your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="inline-flex p-3 mb-3 bg-black/5 rounded-xl">
                <method.icon className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black">
                {method.title}
              </h3>
              <p className="text-black text-sm">
                {method.description}
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-4 button-gradient border-black px-6 py-2 text-base font-semibold"
              >
                <a href={method.href} target="_blank" rel="noopener noreferrer">
                  {method.action}
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="button-gradient border-black px-6 py-3 text-base font-semibold"
          >
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}