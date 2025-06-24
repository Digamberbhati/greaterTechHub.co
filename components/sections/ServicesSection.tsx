'use client';

import { motion } from 'framer-motion';
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
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Website Development',
    description: 'Modern, responsive websites built with cutting-edge technologies',
    icon: GlobeAltIcon,
    href: '/services/website-development',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    icon: DevicePhoneMobileIcon,
    href: '/services/mobile-app-development',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Comprehensive digital marketing strategies to boost your online presence',
    icon: MegaphoneIcon,
    href: '/services/digital-marketing-seo',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'DevOps & Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps automation services',
    icon: CloudIcon,
    href: '/services/devops-cloud-solutions',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'CRM & ERP Systems',
    description: 'Custom business management systems to streamline operations',
    icon: CogIcon,
    href: '/services/crm-erp-systems',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'IT Infrastructure',
    description: 'Robust network and infrastructure solutions for your business',
    icon: ServerIcon,
    href: '/services/it-infrastructure-networking',
    color: 'from-teal-500 to-green-500',
  },
  {
    title: '2D/3D Animation',
    description: 'Creative animation services for marketing and entertainment',
    icon: FilmIcon,
    href: '/services/2d-3d-animation',
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Branding & Advertising',
    description: 'Complete brand identity and advertising campaign development',
    icon: PaintBrushIcon,
    href: '/services/branding-advertising',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'QA & Software Testing',
    description: 'Comprehensive quality assurance and testing services',
    icon: BugAntIcon,
    href: '/services/qa-software-testing',
    color: 'from-red-500 to-pink-500',
  },
  {
    title: 'Custom Software',
    description: 'Tailored software solutions for unique business requirements',
    icon: CommandLineIcon,
    href: '/services/custom-software-solutions',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Business Strategy',
    description: 'Strategic consulting and market research for business growth',
    icon: ChartBarIcon,
    href: '/services/business-strategy-market-research',
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Recruitment Services',
    description: 'End-to-end recruitment solutions for tech talent acquisition',
    icon: UserGroupIcon,
    href: '/services/end-to-end-recruitment',
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function ServicesSection() {
  console.log('ServicesSection component rendered');

  return (
    <section className="section-padding bg-brand-light">
      <div className="mx-auto max-w-7xl container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            Our <span className="gradient-text">Technology Services</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full border-0 shadow-lg bg-white">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-brand-gray mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            asChild
            size="lg"
            className="bg-gradient-blue hover:opacity-90 text-white px-8 py-4 text-lg font-semibold"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}