'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  MegaphoneIcon,
  CloudIcon,
  PaintBrushIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const services: Service[] = [
  {
    title: 'Website Development',
    description: 'Modern, responsive websites built with cutting-edge technologies.',
    icon: GlobeAltIcon,
    href: '/services/website-development',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    icon: DevicePhoneMobileIcon,
    href: '/services/mobile-app-development',
  },
  {
    title: 'Branding & Advertising',
    description: 'Complete brand identity, advertising campaigns, and market insights.',
    icon: PaintBrushIcon,
    href: '/services/branding-advertising-market-research',
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Strategies to boost your online presence and search rankings.',
    icon: MegaphoneIcon,
    href: '/services/digital-marketing-seo',
  },
  {
    title: 'Chatbot & AI Agents',
    description: 'Intelligent chatbots and AI agents for enhanced customer interaction.',
    icon: DocumentTextIcon,
    href: '/services/chatbot-aiagents',
  },
  {
    title: 'DevOps & Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps automation.',
    icon: CloudIcon,
    href: '/services/devops-cloud-solutions',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-24">
      <style jsx>{`
        .blue-gradient {
          background: linear-gradient(90deg, #7C3AED, #4F46E5, #2563EB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .card-3d {
          perspective: 1000px;
        }
        .card-3d:hover .card-inner {
          transform: rotateY(10deg) rotateX(10deg) scale(1.05);
        }
        .card-inner {
          transition: transform 0.4s ease;
        }
        .icon-3d {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-900">Our Services</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
            <span className="blue-gradient">Innovative IT Solutions</span> to Empower Your Business
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            Discover our core services designed to drive your business forward with cutting-edge technology and creative solutions.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="h-full card-3d"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl border border-blue-900/10 overflow-hidden">
                <CardContent className="p-8 flex flex-col h-full card-inner">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-900/20 icon-3d mx-auto">
                    <service.icon
                      className={`h-8 w-8 ${
                        index === 0
                          ? 'text-blue-600'
                          : index === 1
                          ? 'text-green-600'
                          : index === 2
                          ? 'text-purple-600'
                          : index === 3
                          ? 'text-yellow-600'
                          : index === 4
                          ? 'text-pink-600'
                          : 'text-blue-900'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 text-center">{service.title}</h3>
                  <p className="mt-3 text-base text-slate-600 text-center flex-grow">{service.description}</p>
                  <Button
                    asChild
                    className="mt-6 w-full group bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-800 hover:via-blue-700 hover:to-blue-600 text-white py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-800 hover:via-blue-700 hover:to-blue-600 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/services">
              Explore All Our Services
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}