import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  CloudIcon,
  CogIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BoltIcon,
  ServerIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'DevOps & Cloud Solutions - GreaterTechHub | AWS, Azure, GCP',
  description: 'Professional DevOps and cloud infrastructure services. Scalable, secure, and automated solutions for modern businesses.',
}

const cloudProviders = [
  'Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform', 
  'DigitalOcean', 'Linode', 'Kubernetes', 'Docker', 'Terraform'
]

const services = [
  {
    icon: CloudIcon,
    title: 'Cloud Migration',
    description: 'Seamless migration of your applications and data to cloud platforms with zero downtime.',
    benefits: ['Cost Reduction', 'Improved Scalability', 'Enhanced Security', 'Better Performance']
  },
  {
    icon: CogIcon,
    title: 'CI/CD Pipelines',
    description: 'Automated deployment pipelines for faster, more reliable software delivery.',
    benefits: ['Faster Deployments', 'Reduced Errors', 'Automated Testing', 'Version Control']
  },
  {
    icon: ShieldCheckIcon,
    title: 'Infrastructure Security',
    description: 'Comprehensive security measures to protect your cloud infrastructure and data.',
    benefits: ['Data Encryption', 'Access Control', 'Compliance', 'Threat Monitoring']
  },
  {
    icon: ChartBarIcon,
    title: 'Monitoring & Analytics',
    description: 'Real-time monitoring and analytics for optimal performance and uptime.',
    benefits: ['24/7 Monitoring', 'Performance Insights', 'Alerting Systems', 'Resource Optimization']
  },
  {
    icon: BoltIcon,
    title: 'Automation',
    description: 'Infrastructure as Code and process automation for efficient operations.',
    benefits: ['Reduced Manual Work', 'Consistent Deployments', 'Cost Optimization', 'Faster Recovery']
  },
  {
    icon: ServerIcon,
    title: 'Container Orchestration',
    description: 'Kubernetes and Docker solutions for scalable containerized applications.',
    benefits: ['Easy Scaling', 'Resource Efficiency', 'High Availability', 'Microservices Support']
  }
]

const benefits = [
  { title: 'Cost Savings', description: 'Up to 40% reduction in infrastructure costs', icon: '💰' },
  { title: 'Scalability', description: 'Auto-scaling to handle traffic spikes', icon: '📈' },
  { title: 'Reliability', description: '99.9% uptime with redundant systems', icon: '🛡️' },
  { title: 'Speed', description: '10x faster deployment cycles', icon: '⚡' }
]

export default function DevOpsCloudSolutions() {
  console.log('DevOps & Cloud Solutions page rendered');

  return (
    <div className="pt-24 min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center">
            <Badge className="mb-6 bg-brand-gold/20 text-brand-gold border-brand-gold/30">
              Cloud Infrastructure
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 text-shadow-gold">
              DevOps & <span className="gradient-text">Cloud Solutions</span>
            </h1>
            <p className="text-xl text-brand-cream max-w-3xl mx-auto mb-8">
              Transform your infrastructure with modern DevOps practices and cloud technologies. 
              Achieve scalability, reliability, and cost-efficiency with our expert cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-brand-black font-semibold px-8">
                <Link href="/contact">Get Cloud Assessment</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black"
              >
                View Architecture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Cloud <span className="gradient-text">Transformation</span> Benefits
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Unlock the full potential of cloud computing for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-brand-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-brand-gray">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-brand-charcoal">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Comprehensive <span className="gradient-text">DevOps Services</span>
            </h2>
            <p className="text-lg text-brand-cream max-w-2xl mx-auto">
              End-to-end DevOps and cloud infrastructure solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-brand-black/50 border-brand-gold/20 card-hover h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-gold">
                      <service.icon className="h-6 w-6 text-brand-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-cream mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="border-t border-brand-gold/20 pt-4">
                    <h4 className="text-brand-gold font-medium mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="text-sm text-brand-cream flex items-center">
                          <span className="w-2 h-2 bg-brand-gold rounded-full mr-2"></span>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              <span className="gradient-text">Cloud Platforms</span> & Technologies
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Expert knowledge across all major cloud platforms and DevOps tools
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {cloudProviders.map((provider) => (
              <Badge 
                key={provider}
                variant="outline" 
                className="px-6 py-3 text-brand-brown border-brand-brown/30 hover:bg-gradient-brown hover:text-white transition-all cursor-pointer"
              >
                {provider}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-brand-charcoal">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Our <span className="gradient-text">Implementation Process</span>
            </h2>
            <p className="text-lg text-brand-cream max-w-2xl mx-auto">
              Structured approach to cloud transformation and DevOps implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Assessment', desc: 'Current infrastructure analysis and requirements gathering' },
              { step: '02', title: 'Planning', desc: 'Cloud architecture design and migration strategy' },
              { step: '03', title: 'Implementation', desc: 'Phased migration and DevOps pipeline setup' },
              { step: '04', title: 'Optimization', desc: 'Performance tuning and cost optimization' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-gold flex items-center justify-center text-brand-black font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-brand-white mb-2">{item.title}</h3>
                <p className="text-brand-cream text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <Card className="bg-gradient-brown-gold border-0 text-white">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-brand-white/20 text-white border-white/30">
                    Success Story
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    E-commerce Platform Migration
                  </h3>
                  <p className="text-lg text-brand-cream mb-6">
                    Successfully migrated a high-traffic e-commerce platform to AWS, 
                    resulting in 60% cost reduction and 300% performance improvement.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-white text-black hover:bg-white hover:text-brand-black"
                  >
                    Read Full Case Study
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-gold">60%</div>
                    <div className="text-sm">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-gold">300%</div>
                    <div className="text-sm">Performance Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-gold">99.9%</div>
                    <div className="text-sm">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-gold">30 Days</div>
                    <div className="text-sm">Migration Time</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            Ready to <span className="text-brand-gold">Transform Your Infrastructure?</span>
          </h2>
          <p className="text-xl text-brand-cream mb-8">
            Let's build a scalable, secure, and cost-effective cloud solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-brand-black font-semibold px-8">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}