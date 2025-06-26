import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
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
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Our Services - GreaterTechHub | Complete IT Solutions',
  description: 'Comprehensive IT services including web development, mobile apps, digital marketing, cloud solutions, DevOps, and more. Transform your business today.',
}

const services = [
  {
    title: 'Website Development',
    description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.',
    icon: GlobeAltIcon,
    href: '/services/website-development',
    color: 'gradient-gold',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX']
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
    icon: DevicePhoneMobileIcon,
    href: '/services/mobile-app-development',
    color: 'gradient-brown',
    features: ['Native iOS/Android', 'Cross-platform', 'App Store Optimization', 'Push Notifications']
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Comprehensive digital marketing strategies to boost your online presence and drive conversions.',
    icon: MegaphoneIcon,
    href: '/services/digital-marketing-seo',
    color: 'gradient-gold',
    features: ['SEO Strategy', 'Social Media Marketing', 'Content Marketing', 'PPC Campaigns']
  },
  {
    title: 'DevOps & Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps automation services for reliable, efficient operations.',
    icon: CloudIcon,
    href: '/services/devops-cloud-solutions',
    color: 'gradient-brown',
    features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerts']
  },
  {
    title: 'CRM & ERP Systems',
    description: 'Custom business management systems to streamline operations and improve productivity.',
    icon: CogIcon,
    href: '/services/crm-erp-systems',
    color: 'gradient-gold',
    features: ['Custom CRM', 'ERP Solutions', 'Data Integration', 'Process Automation']
  },
  {
    title: 'IT Infrastructure & Networking',
    description: 'Robust network and infrastructure solutions for secure, reliable business operations.',
    icon: ServerIcon,
    href: '/services/it-infrastructure-networking',
    color: 'gradient-brown',
    features: ['Network Design', 'Security Solutions', 'Server Management', '24/7 Monitoring']
  },
  {
    title: '2D/3D Animation',
    description: 'Professional animation services for marketing, education, and entertainment content.',
    icon: FilmIcon,
    href: '/services/2d-3d-animation',
    color: 'gradient-gold',
    features: ['2D Animation', '3D Modeling', 'Motion Graphics', 'Video Production']
  },
  {
    title: 'Custom Software Solutions',
    description: 'Bespoke software development tailored to your unique business requirements and workflows.',
    icon: CommandLineIcon,
    href: '/services/custom-software-solutions',
    color: 'gradient-brown',
    features: ['Web Applications', 'Enterprise Software', 'API Development', 'Database Design']
  },
  {
    title: 'QA & Software Testing',
    description: 'Comprehensive testing services to ensure software quality, performance, and reliability.',
    icon: BugAntIcon,
    href: '/services/qa-software-testing',
    color: 'gradient-gold',
    features: ['Automated Testing', 'Performance Testing', 'Security Testing', 'User Acceptance Testing']
  },
  {
    title: 'Branding, Advertising & Market Research',
    description: 'Complete brand identity, advertising campaigns, and market insights to elevate your brand.',
    icon: PaintBrushIcon,
    href: '/services/branding-advertising-market-research',
    color: 'gradient-brown',
    features: ['Brand Identity Design', 'Advertising Campaigns', 'Market Analysis', 'Consumer Insights']
  },
  {
    title: 'Business Strategy',
    description: 'Strategic consulting to drive business growth, innovation, and competitive advantage.',
    icon: ChartBarIcon,
    href: '/services/business-strategy',
    color: 'gradient-gold',
    features: ['Growth Planning', 'Market Expansion', 'Innovation Strategy', 'Competitive Analysis']
  },
  {
    title: 'Recruitment Services',
    description: 'End-to-end recruitment solutions to acquire top tech talent for your organization.',
    icon: UserGroupIcon,
    href: '/services/recruitment-services',
    color: 'gradient-brown',
    features: ['Talent Sourcing', 'Candidate Screening', 'Tech Recruitment', 'Onboarding Support']
  },
  {
    title: 'BPO Services',
    description: 'Efficient outsourcing solutions for customer support, operations, and back-office tasks.',
    icon: BriefcaseIcon,
    href: '/services/bpo-services',
    color: 'gradient-gold',
    features: ['Customer Support', 'Data Entry', 'Process Outsourcing', 'Call Center Services']
  },
  {
    title: 'System Design & Architecture',
    description: 'Scalable and robust system designs for efficient and future-proof solutions.',
    icon: CubeIcon,
    href: '/services/system-design-architecture',
    color: 'gradient-brown',
    features: ['Microservices Architecture', 'System Scalability', 'Database Design', 'Cloud Integration']
  },
  {
    title: 'IT Asset Management',
    description: 'Efficient tracking and management of IT assets to optimize resources and reduce costs.',
    icon: DocumentTextIcon,
    href: '/services/it-asset-management',
    color: 'gradient-gold',
    features: ['Asset Tracking', 'Inventory Management', 'Cost Optimization', 'Compliance Audits']
  }
]

export default function Services() {
  console.log('Services page rendered');

  return (
    <div className="pt-24 min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 text-shadow-gold">
              Our <span className="gradient-text">Technology Services</span>
            </h1>
            <p className="text-xl text-brand-cream max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth 
              and digital transformation journey with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="card-hover h-full border-brand-gold/20 shadow-lg bg-brand-white hover:shadow-brand-gold/10">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-${service.color}`}>
                      <service.icon className="h-6 w-6 text-brand-black" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-brand-black mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-brand-gray mb-4 flex-grow">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-medium text-brand-black mb-2">Key Features:</h4>
                    <ul className="text-sm text-brand-gray space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full bg-gradient-gold hover:opacity-90 text-brand-black font-semibold"
                  >
                    <Link href={service.href}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-brown-gold">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            Need a <span className="text-brand-gold">Custom Solution?</span>
          </h2>
          <p className="text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can create a tailored 
            technology solution that perfectly fits your needs and drives growth.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-brand-white text-brand-black hover:bg-brand-cream font-semibold px-8 py-4 text-lg"
          >
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}