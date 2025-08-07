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
  ArrowRightIcon,
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
    title: 'Branding & Advertising',
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
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7" style={{ color: 'rgb(37,150,190)' }}>
            Our Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span style={{ color: 'rgb(37,150,190)' }}>Innovative IT Solutions</span> to Empower Your Business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From strategy to execution, we deliver tailored technology services that drive results.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="h-full">
              <Card className="flex h-full flex-col rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-200/80">
                <CardContent className="p-8 flex flex-col h-full">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: 'rgba(37,150,190,0.1)' }}
                  >
                    <service.icon
                      className="h-7 w-7"
                      style={{ color: 'rgb(37,150,190)' }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">{service.title}</h3>
                  <p className="mt-3 text-base text-slate-600 flex-grow">{service.description}</p>
                  <Button
                    asChild
                    className="mt-8 w-full group text-white py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
                    style={{
                      backgroundColor: 'rgb(37,150,190)',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgb(25,100,130)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgb(37,150,190)')}
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            className="px-8 py-3 text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{
              backgroundColor: 'rgb(37,150,190)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgb(25,100,130)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgb(37,150,190)')}
          >
            <Link href="/services">Explore All Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}