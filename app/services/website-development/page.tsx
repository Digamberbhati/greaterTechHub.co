import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  CheckCircleIcon,
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  BugAntIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Website Development Services - GreaterTechHub | Modern Web Solutions',
  description: 'Professional website development services. Custom, responsive, and SEO-optimized websites built with cutting-edge technologies. Get your dream website today.',
};

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface WebsiteType {
  title: string;
  description: string;
}

interface DevelopmentStep {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Technology {
  name: string;
  logo: string; // Path to logo in public/assets/tech-logos/
}

const features: Feature[] = [
  {
    icon: DevicePhoneMobileIcon,
    title: 'Responsive Design',
    description: 'Websites that look perfect on all devices - desktop, tablet, and mobile.',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Fast Performance',
    description: 'Optimized for speed with loading times under 3 seconds.',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'SEO Optimized',
    description: 'Built with SEO best practices to rank higher in search results.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee.',
  },
];

const technologies: Technology[] = [
  { name: 'React', logo: '/assets/tech-logos/react.svg' },
  { name: 'Next.js', logo: '/assets/tech-logos/nextjs.svg' },
  { name: 'Vue.js', logo: '/assets/tech-logos/vuejs.svg' },
  { name: 'Angular', logo: '/assets/tech-logos/angular.svg' },
  { name: 'TypeScript', logo: '/assets/tech-logos/typescript.svg' },
  { name: 'Node.js', logo: '/assets/tech-logos/nodejs.svg' },
  { name: 'Python', logo: '/assets/tech-logos/python.svg' },
  { name: 'PHP', logo: '/assets/tech-logos/php.svg' },
  { name: 'WordPress', logo: '/assets/tech-logos/wordpress.svg' },
  { name: 'Shopify', logo: '/assets/tech-logos/shopify.svg' },
  { name: 'Webflow', logo: '/assets/tech-logos/webflow.svg' },
  { name: 'Tailwind CSS', logo: '/assets/tech-logos/tailwindcss.svg' },
];

const websiteTypes: WebsiteType[] = [
  {
    title: 'E-commerce Websites',
    description: 'Build robust online stores with secure payment gateways, product catalogs, and user-friendly shopping experiences.',
  },
  {
    title: 'Portfolio Websites',
    description: 'Showcase your creative work or services with visually appealing, responsive designs tailored to your brand.',
  },
  {
    title: 'Corporate Websites',
    description: 'Establish a professional online presence with custom websites for businesses, highlighting your mission and services.',
  },
  {
    title: 'Blog Websites',
    description: 'Create engaging platforms for content creators with easy-to-manage content systems and SEO optimization.',
  },
  {
    title: 'Educational Websites',
    description: 'Develop e-learning platforms or institutional portals with interactive features and scalable architecture.',
  },
  {
    title: 'Nonprofit Websites',
    description: 'Craft impactful websites for charities and organizations, with donation systems and community engagement tools.',
  },
];

const developmentSteps: DevelopmentStep[] = [
  {
    icon: ClipboardDocumentListIcon,
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, define goals, and create a detailed project roadmap.',
  },
  {
    icon: PaintBrushIcon,
    title: 'Design & Prototyping',
    description: 'Our team crafts responsive, user-friendly designs and interactive prototypes.',
  },
  {
    icon: CodeBracketIcon,
    title: 'Development',
    description: 'We build your website using modern technologies, ensuring performance and scalability.',
  },
  {
    icon: BugAntIcon,
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures your website is bug-free, secure, and optimized.',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Launch & Support',
    description: 'We deploy your website and provide ongoing maintenance and support.',
  },
];

export default function WebsiteDevelopment() {
  console.log('Website Development service page rendered');

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Professional{' '}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#8B4513] to-black bg-clip-text text-transparent">
              Website Development
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your online presence with modern, responsive websites that drive results. From concept to launch, we create digital experiences that engage and grow your business.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-full"
          >
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Why Choose Our Website Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 mb-4 bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 rounded-xl">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="p-3 bg-gray-100 rounded-xl mb-2">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-black font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Our Website Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 rounded-xl">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Types of Websites */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Types of Websites We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 p-10 rounded-2xl">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let’s discuss your project and create a website that represents your brand and drives growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}