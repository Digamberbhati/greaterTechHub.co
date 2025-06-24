import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { 
  CheckCircleIcon, 
  RocketLaunchIcon, 
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Website Development Services - GreaterTechHub | Modern Web Solutions',
  description: 'Professional website development services. Custom, responsive, and SEO-optimized websites built with cutting-edge technologies. Get your dream website today.',
}

const features = [
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
]

const technologies = [
  'React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Node.js', 
  'Python', 'PHP', 'WordPress', 'Shopify', 'Webflow', 'Tailwind CSS'
]

const packages = [
  {
    name: 'Starter Website',
    price: '$2,999',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO setup',
      'Contact form',
      '3 months support',
      'Mobile optimization',
    ],
    recommended: false,
  },
  {
    name: 'Business Website',
    price: '$5,999',
    features: [
      'Up to 15 pages',
      'Custom design',
      'Advanced SEO',
      'Content management',
      '6 months support',
      'Analytics integration',
      'Social media integration',
      'Blog functionality',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise Website',
    price: '$12,999',
    features: [
      'Unlimited pages',
      'Custom functionality',
      'E-commerce ready',
      'Advanced integrations',
      '12 months support',
      'Performance optimization',
      'Security features',
      'Multi-language support',
    ],
    recommended: false,
  },
]

export default function WebsiteDevelopment() {
  console.log('Website Development service page rendered');

  return (
    <div className="pt-24 min-h-screen">
      <div className="mx-auto max-w-7xl container-padding section-padding">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Professional <span className="gradient-text">Website Development</span>
          </h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto mb-8">
            Transform your online presence with modern, responsive websites that 
            drive results. From concept to launch, we create digital experiences 
            that engage your audience and grow your business.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-blue hover:opacity-90 text-white px-8 py-4 text-lg font-semibold"
          >
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">
            Why Choose Our Website Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 mb-4 bg-gradient-blue rounded-xl">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-brand-gray text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-8">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-brand-blue border-brand-blue">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">
            Website Development Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`border-0 shadow-lg relative ${pkg.recommended ? 'ring-2 ring-brand-blue' : ''}`}>
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-blue text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-brand-navy mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-3xl font-bold text-brand-blue mb-2">
                      {pkg.price}
                    </div>
                    <p className="text-sm text-brand-gray">One-time payment</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-brand-green mr-3" />
                        <span className="text-brand-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild
                    className={`w-full ${pkg.recommended ? 'bg-gradient-blue hover:opacity-90 text-white' : 'border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'}`}
                    variant={pkg.recommended ? 'default' : 'outline'}
                  >
                    <Link href="/contact">Choose This Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-tech text-white p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a website that 
            perfectly represents your brand and drives business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-brand-navy hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4 text-lg font-semibold"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}