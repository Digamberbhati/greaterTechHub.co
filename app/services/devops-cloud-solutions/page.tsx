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
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-900/20 text-blue-900 border-blue-900/30">
              Cloud Infrastructure
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              DevOps & <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Cloud Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Transform your infrastructure with modern DevOps practices and cloud technologies. 
              Achieve scalability, reliability, and cost-efficiency with our expert cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
                <Link href="/contact">Get Cloud Assessment</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              >
                View Architecture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Cloud <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Transformation</span> Benefits
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Unlock the full potential of cloud computing for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">DevOps Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end DevOps and cloud infrastructure solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-blue-900/20 shadow-md h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-blue-500/30">
                      <service.icon className={`h-6 w-6 ${index === 0 ? 'text-red-500' : index === 1 ? 'text-green-500' : index === 2 ? 'text-yellow-500' : index === 3 ? 'text-purple-500' : index === 4 ? 'text-pink-500' : 'text-blue-900'}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="border-t border-blue-900/20 pt-4">
                    <h4 className="text-blue-900 font-medium mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="text-sm text-slate-600 flex items-center">
                          <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
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
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Cloud Platforms</span> & Technologies
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert knowledge across all major cloud platforms and DevOps tools
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {cloudProviders.map((provider) => (
              <Badge 
                key={provider}
                variant="outline" 
                className="px-6 py-3 text-blue-900 border-blue-900/30 hover:bg-blue-900 hover:text-white transition-all cursor-pointer"
              >
                {provider}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Implementation Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border-blue-900/20 shadow-md">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-blue-900/20 text-blue-900 border-blue-900/30">
                    Success Story
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                    E-commerce Platform Migration
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Successfully migrated a high-traffic e-commerce platform to AWS, 
                    resulting in 60% cost reduction and 300% performance improvement.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                  >
                    Read Full Case Study
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">60%</div>
                    <div className="text-sm text-slate-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">300%</div>
                    <div className="text-sm text-slate-600">Performance Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">99.9%</div>
                    <div className="text-sm text-slate-600">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">30 Days</div>
                    <div className="text-sm text-slate-600">Migration Time</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Transform Your Infrastructure?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's build a scalable, secure, and cost-effective cloud solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}