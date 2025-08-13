'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  MegaphoneIcon,
  CloudIcon,
  CogIcon,
  ServerIcon,
  FilmIcon,
  PaintBrushIcon,
  BugAntIcon,
  CommandLineIcon,
  ChartBarIcon,
  UserGroupIcon,
  BriefcaseIcon,
  CubeIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Website Development',
    description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.',
    icon: GlobeAltIcon,
    href: '/services/website-development',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
    icon: DevicePhoneMobileIcon,
    href: '/services/mobile-app-development',
    features: ['Native iOS/Android', 'Cross-platform', 'App Store Optimization', 'Push Notifications'],
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Comprehensive digital marketing strategies to boost your online presence and drive conversions.',
    icon: MegaphoneIcon,
    href: '/services/digital-marketing-seo',
    features: ['SEO Strategy', 'Social Media Marketing', 'Content Marketing', 'PPC Campaigns'],
  },
  {
    title: 'Ai Agents & ChatBot',
    description: 'Intelligent chatbots and AI agents for enhanced customer interaction and support.',
    icon: DocumentTextIcon,
    href: '/services/chatbot-aiagents',
    features: ['Natural Language Processing', 'Customer Support Bots', 'AI Integration', 'Analytics & Insights'],
  },
  {
    title: 'DevOps & Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps automation services for reliable, efficient operations.',
    icon: CloudIcon,
    href: '/services/devops-cloud-solutions',
    features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerts'],
  },
  {
    title: 'CRM & ERP Systems',
    description: 'Custom business management systems to streamline operations and improve productivity.',
    icon: CogIcon,
    href: '/services/crm-erp-systems',
    features: ['Custom CRM', 'ERP Solutions', 'Data Integration', 'Process Automation'],
  },
  {
    title: 'IT Infrastructure & Networking',
    description: 'Robust network and infrastructure solutions for secure, reliable business operations.',
    icon: ServerIcon,
    href: '/services/it-infrastructure-networking',
    features: ['Network Design', 'Security Solutions', 'Server Management', '24/7 Monitoring'],
  },
  {
    title: '2D/3D Animation',
    description: 'Professional animation services for marketing, education, and entertainment content.',
    icon: FilmIcon,
    href: '/services/2d-3d-animation',
    features: ['2D Animation', '3D Modeling', 'Motion Graphics', 'Video Production'],
  },
  {
    title: 'Custom Software Solutions',
    description: 'Bespoke software development tailored to your unique business requirements and workflows.',
    icon: CommandLineIcon,
    href: '/services/custom-software-solutions',
    features: ['Web Applications', 'Enterprise Software', 'API Development', 'Database Design'],
  },
  {
    title: 'QA & Software Testing',
    description: 'Comprehensive testing services to ensure software quality, performance, and reliability.',
    icon: BugAntIcon,
    href: '/services/qa-software-testing',
    features: ['Automated Testing', 'Performance Testing', 'Security Testing', 'User Acceptance Testing'],
  },
  {
    title: 'Branding, Advertising & Market Research',
    description: 'Complete brand identity, advertising campaigns, and market insights to elevate your brand.',
    icon: PaintBrushIcon,
    href: '/services/branding-advertising-market-research',
    features: ['Brand Identity Design', 'Advertising Campaigns', 'Market Analysis', 'Consumer Insights'],
  },
  {
    title: 'Business Strategy',
    description: 'Strategic consulting to drive business growth, innovation, and competitive advantage.',
    icon: ChartBarIcon,
    href: '/services/business-strategy',
    features: ['Growth Planning', 'Market Expansion', 'Innovation Strategy', 'Competitive Analysis'],
  },
  {
    title: 'Recruitment Services',
    description: 'End-to-end recruitment solutions to acquire top tech talent for your organization.',
    icon: UserGroupIcon,
    href: '/services/recruitment-services',
    features: ['Talent Sourcing', 'Candidate Screening', 'Tech Recruitment', 'Onboarding Support'],
  },
  {
    title: 'BPO Services',
    description: 'Efficient outsourcing solutions for customer support, operations, and back-office tasks.',
    icon: BriefcaseIcon,
    href: '/services/bpo-services',
    features: ['Customer Support', 'Data Entry', 'Process Outsourcing', 'Call Center Services'],
  },
  {
    title: 'System Design & Architecture',
    description: 'Scalable and robust system designs for efficient and future-proof solutions.',
    icon: CubeIcon,
    href: '/services/system-design-architecture',
    features: ['Microservices Architecture', 'System Scalability', 'Database Design', 'Cloud Integration'],
  },
  
];

export default function Services() {
  console.log('Services page rendered');

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
          transform: rotateY(8deg) rotateX(8deg) scale(1.03);
        }
        .card-inner {
          transition: transform 0.4s ease;
        }
        .icon-3d {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
          transition: transform 0.3s ease;
        }
        .card-3d:hover .icon-3d {
          transform: scale(1.2);
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="blue-gradient">Our Technology Services</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey with cutting-edge technology.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="h-full card-3d"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-blue-900/10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6 h-full flex flex-col card-inner">
                    <div className="mb-4 flex justify-center">
                      <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-900/20 icon-3d">
                        <service.icon
                          className={`h-8 w-8 ${
                            index === 0 ? 'text-blue-600' :
                            index === 1 ? 'text-green-600' :
                            index === 2 ? 'text-yellow-600' :
                            index === 3 ? 'text-purple-600' :
                            index === 4 ? 'text-pink-600' :
                            index === 5 ? 'text-blue-900' :
                            index === 6 ? 'text-red-600' :
                            index === 7 ? 'text-green-600' :
                            index === 8 ? 'text-yellow-600' :
                            index === 9 ? 'text-purple-600' :
                            index === 10 ? 'text-pink-600' :
                            index === 11 ? 'text-blue-900' :
                            index === 12 ? 'text-red-600' :
                            index === 13 ? 'text-green-600' :
                            'text-yellow-600'
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3 text-center">{service.title}</h3>
                    <p className="text-slate-600 mb-4 text-center flex-grow">{service.description}</p>
                    <div className="mb-6">
                      <h4 className="font-medium text-blue-900 mb-2 text-center">Key Features:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      asChild
                      className="w-full group bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-800 hover:via-blue-700 hover:to-blue-600 text-white font-semibold rounded-full py-3 transition-all duration-300"
                    >
                      <Link href={service.href}>
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Need a <span className="blue-gradient">Custom Solution?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can create a tailored technology solution that perfectly fits your needs and drives growth.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-800 hover:via-blue-700 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}