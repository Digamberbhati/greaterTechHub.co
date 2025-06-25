'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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
    title: 'Digital Marketing & SEO',
    description: 'Strategies to boost your online presence and search rankings.',
    icon: MegaphoneIcon,
    href: '/services/digital-marketing-seo',
  },
  {
    title: 'DevOps & Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps automation.',
    icon: CloudIcon,
    href: '/services/devops-cloud-solutions',
  },
  {
    title: 'CRM & ERP Systems',
    description: 'Custom systems to streamline business operations.',
    icon: CogIcon,
    href: '/services/crm-erp-systems',
  },
  {
    title: 'IT Infrastructure',
    description: 'Robust network and infrastructure solutions.',
    icon: ServerIcon,
    href: '/services/it-infrastructure-networking',
  },
  {
    title: '2D/3D Animation',
    description: 'Creative animations for marketing and entertainment.',
    icon: FilmIcon,
    href: '/services/2d-3d-animation',
  },
  {
    title: 'Branding, Advertising & Market Research',
    description: 'Complete brand identity, advertising campaigns, and market insights.',
    icon: PaintBrushIcon,
    href: '/services/branding-advertising-market-research',
  },
  {
    title: 'QA & Software Testing',
    description: 'Comprehensive quality assurance and testing services.',
    icon: BugAntIcon,
    href: '/services/qa-software-testing',
  },
  {
    title: 'Custom Software',
    description: 'Tailored software for unique business needs.',
    icon: CommandLineIcon,
    href: '/services/custom-software-solutions',
  },
  {
    title: 'Business Strategy',
    description: 'Strategic consulting for business growth and innovation.',
    icon: ChartBarIcon,
    href: '/services/business-strategy',
  },
  {
    title: 'Recruitment Services',
    description: 'End-to-end recruitment for top tech talent acquisition.',
    icon: UserGroupIcon,
    href: '/services/recruitment-services',
  },
  {
    title: 'BPO Services',
    description: 'Efficient outsourcing solutions for customer support and operations.',
    icon: BriefcaseIcon,
    href: '/services/bpo-services',
  },
  {
    title: 'System Design & Architecture',
    description: 'Scalable system designs for robust and efficient solutions.',
    icon: CubeIcon,
    href: '/services/system-design-architecture',
  },
  {
    title: 'IT Asset Management',
    description: 'Efficient tracking and management of IT assets for optimization.',
    icon: DocumentTextIcon,
    href: '/services/it-asset-management',
  },
];

export default function ServicesSection() {
  console.log('ServicesSection component rendered');

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Inline CSS for gradients */}
        <style jsx>{`
          .gold-black-brown-gradient {
            background: linear-gradient(90deg, #FFD700, #8B4513, #000000);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          .yellow-gradient {
            background: linear-gradient(90deg, #B45309, #D97706, #F59E0B);
          }
          .yellow-gradient-text {
            background: linear-gradient(90deg, #B45309, #D97706, #F59E0B);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          .yellow-gradient:hover {
            opacity: 0.9;
          }
        `}</style>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Our <span className="gold-black-brown-gradient">Technology Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            IT solutions to drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="h-full border-0 shadow-md bg-white hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl yellow-gradient">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold yellow-gradient-text mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <Button
                  asChild
                  className="w-full yellow-gradient text-white text-base font-semibold"
                >
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="yellow-gradient text-white px-6 py-3 text-base font-semibold"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}