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
  {
    title: 'IT Asset Management',
    description: 'Efficient tracking and management of IT assets to optimize resources and reduce costs.',
    icon: DocumentTextIcon,
    href: '/services/it-asset-management',
    features: ['Asset Tracking', 'Inventory Management', 'Cost Optimization', 'Compliance Audits'],
  },
];

export default function Services() {
  console.log('Services component rendered');

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span style={{ color: 'rgb(37,150,190)' }}>Technology Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth
              and digital transformation journey with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="h-full border border-gray-200/80 shadow-lg bg-white hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div
                      className="inline-flex p-3 rounded-xl"
                      style={{ backgroundColor: 'rgba(37,150,190,0.1)' }}
                    >
                      <service.icon className="h-6 w-6" style={{ color: 'rgb(37,150,190)' }} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>

                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span
                            className="w-1.5 h-1.5 rounded-full mr-2"
                            style={{ backgroundColor: 'rgb(37,150,190)' }}
                          ></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    asChild
                    className="w-full text-white py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl"
                    style={{
                      backgroundColor: 'rgb(37,150,190)',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgb(25,100,130)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgb(37,150,190)')}
                  >
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need a <span style={{ color: 'rgb(37,150,190)' }}>Custom Solution?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can create a tailored
            technology solution that perfectly fits your needs and drives growth.
          </p>
          <Button
            asChild
            size="lg"
            className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl"
            style={{
              backgroundColor: 'rgb(37,150,190)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgb(25,100,130)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgb(37,150,190)')}
          >
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}