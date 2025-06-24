'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';

const contactMethods = [
  {
    icon: EnvelopeIcon, // Use the imported component
    title: 'Email Us',
    description: 'Get a detailed response within 24 hours',
    action: 'Send Email',
    href: 'mailto:info@greatertechhub.com',
  },
  {
    icon: PhoneIcon, // Use the imported component
    title: 'Call Us',
    description: 'Speak directly with our experts',
    action: 'Call Now',
    href: 'tel:+1234567890',
  },
  {
    icon: ChatBubbleLeftRightIcon, // Use the imported component
    title: 'WhatsApp',
    description: 'Quick chat for immediate assistance',
    action: 'Chat Now',
    href: 'https://wa.me/1234567890',
  },
];

export default function ContactCTA() {
  console.log('ContactCTA component rendered');

  return (
    <section className="section-padding bg-gradient-to-r from-[#FFD700] via-[#8B4513] to-[#000000]">
      <div className="mx-auto max-w-7xl container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Let's discuss how our technology solutions can accelerate your growth 
            and drive digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 mb-4 bg-black/10 rounded-2xl">
                <method.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {method.title}
              </h3>
              <p className="text-black mb-4">
                {method.description}
              </p>
              <Button 
                asChild
                variant="outline" 
                className="border-black text-black hover:bg-black hover:text-[#FFD700]"
              >
                <a href={method.href} target="_blank" rel="noopener noreferrer">
                  {method.action}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-black text-[#FFD700] hover:bg-[#8B4513] px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg" 
              className="border-black text-black hover:bg-black hover:text-[#FFD700] px-8 py-4 text-lg font-semibold"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}