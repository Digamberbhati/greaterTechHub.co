import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ServerIcon,
  ShieldCheckIcon,
  CloudIcon,
  CogIcon,
  SignalIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'IT Infrastructure & Networking - GreaterTechHub | Network Solutions',
  description: 'Professional IT infrastructure and networking services. Secure, scalable, and reliable network solutions for modern businesses.',
}

const services = [
  {
    icon: ServerIcon,
    title: 'Network Design & Setup',
    description: 'Custom network architecture designed for optimal performance and scalability.',
    features: ['Network Planning', 'Hardware Selection', 'Installation', 'Configuration'],
    metrics: { performance: '99.9%', speed: '10Gbps', coverage: '100%' }
  },
  {
    icon: ShieldCheckIcon,
    title: 'Network Security',
    description: 'Comprehensive security solutions to protect your network from threats.',
    features: ['Firewall Management', 'Intrusion Detection', 'VPN Setup', 'Security Audits'],
    metrics: { threats: '99.8%', compliance: '100%', monitoring: '24/7' }
  },
  {
    icon: CloudIcon,
    title: 'Hybrid Cloud Networks',
    description: 'Seamless integration between on-premises and cloud infrastructure.',
    features: ['Cloud Connectivity', 'SD-WAN', 'Multi-Cloud', 'Disaster Recovery'],
    metrics: { uptime: '99.99%', latency: '<10ms', scaling: 'Auto' }
  },
  {
    icon: CogIcon,
    title: 'Network Management',
    description: 'Proactive monitoring and management of your entire network infrastructure.',
    features: ['24/7 Monitoring', 'Performance Optimization', 'Maintenance', 'Support'],
    metrics: { response: '<30min', availability: '99.9%', support: '24/7' }
  },
  {
    icon: SignalIcon,
    title: 'Wireless Solutions',
    description: 'Enterprise-grade wireless networks for seamless connectivity.',
    features: ['WiFi 6/6E', 'Coverage Planning', 'Access Control', 'Guest Networks'],
    metrics: { coverage: '100%', speed: '1Gbps+', devices: '1000+' }
  },
  {
    icon: LockClosedIcon,
    title: 'Data Center Solutions',
    description: 'Robust data center infrastructure for mission-critical applications.',
    features: ['Server Hosting', 'Backup Systems', 'Redundancy', 'Climate Control'],
    metrics: { uptime: '99.999%', backup: 'Real-time', security: 'Tier-3' }
  }
]

const technologies = [
  'Cisco Systems', 'Juniper Networks', 'Fortinet', 'Palo Alto Networks',
  'VMware NSX', 'Aruba Networks', 'SonicWall', 'Ubiquiti'
]

const benefits = [
  { icon: '🚀', title: 'Performance', value: '300%', desc: 'Faster network speeds' },
  { icon: '🛡️', title: 'Security', value: '99.8%', desc: 'Threat prevention rate' },
  { icon: '💰', title: 'Cost Savings', value: '40%', desc: 'Reduced IT costs' },
  { icon: '⚡', title: 'Uptime', value: '99.9%', desc: 'Network availability' }
]

export default function ITInfrastructureNetworking() {
  console.log('IT Infrastructure & Networking page rendered');

  return (
    <div className="pt-24 min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center">
            <Badge className="mb-6 bg-brand-gold/20 text-brand-gold border-brand-gold/30">
              Network Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 text-shadow-gold">
              IT Infrastructure & <span className="gradient-text">Networking</span>
            </h1>
            <p className="text-xl text-brand-cream max-w-3xl mx-auto mb-8">
              Build a robust, secure, and scalable IT infrastructure that supports your business growth. 
              Expert network design, implementation, and management services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-brand-black font-semibold px-8">
                <Link href="/contact">Get Network Assessment</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black"
              >
                View Case Studies
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
              Network <span className="gradient-text">Performance</span> Metrics
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Measurable improvements in network performance and business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {benefit.value}
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-brand-gray">
                  {benefit.desc}
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
              Complete <span className="gradient-text">Infrastructure Services</span>
            </h2>
            <p className="text-lg text-brand-cream max-w-2xl mx-auto">
              End-to-end IT infrastructure solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-brand-black/50 border-brand-gold/20 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-gold">
                        <service.icon className="h-6 w-6 text-brand-black" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-brand-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-brand-cream mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-brand-gold font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-brand-cream flex items-center">
                            <span className="w-2 h-2 bg-brand-gold rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-brand-gold font-medium mb-2">Performance:</h4>
                      <div className="space-y-1">
                        {Object.entries(service.metrics).map(([key, value], idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-brand-cream capitalize">{key}:</span>
                            <span className="text-brand-gold font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
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
              <span className="gradient-text">Enterprise-Grade</span> Technologies
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Partnering with leading technology vendors for reliable solutions
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <Badge 
                key={tech}
                variant="outline" 
                className="px-6 py-3 text-brand-brown border-brand-brown/30 hover:bg-gradient-brown hover:text-white transition-all cursor-pointer"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-padding bg-brand-charcoal">
        <div className="mx-auto max-w-7xl container-padding">
          <Card className="bg-gradient-brown-gold border-0 text-white">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-brand-white/20 text-white border-white/30">
                    Success Story
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Manufacturing Company Network Upgrade
                  </h3>
                  <p className="text-lg text-brand-cream mb-6">
                    Complete network infrastructure overhaul for a 500-employee manufacturing facility, 
                    resulting in 400% performance improvement and 99.9% uptime.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-brand-black"
                  >
                    Read Full Case Study
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-gold">400%</div>
                    <div className="text-sm">Speed Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-gold">99.9%</div>
                    <div className="text-sm">Network Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-gold">50%</div>
                    <div className="text-sm">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-gold">30 Days</div>
                    <div className="text-sm">Implementation</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              <span className="gradient-text">24/7</span> Network Support
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto mb-8">
              Comprehensive support services to keep your network running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Proactive Monitoring', desc: 'Real-time network monitoring with instant alerts', icon: '📊' },
              { title: 'Rapid Response', desc: 'Average response time under 30 minutes', icon: '⚡' },
              { title: 'Preventive Maintenance', desc: 'Scheduled maintenance to prevent issues', icon: '🔧' },
              { title: 'Performance Optimization', desc: 'Continuous tuning for optimal performance', icon: '🚀' },
              { title: 'Security Updates', desc: 'Regular security patches and updates', icon: '🛡️' },
              { title: 'Documentation', desc: 'Complete network documentation and reports', icon: '📋' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-brand-black mb-3">{item.title}</h3>
                <p className="text-brand-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            Ready to <span className="text-brand-gold">Upgrade Your Network?</span>
          </h2>
          <p className="text-xl text-brand-cream mb-8">
            Let's design and build a network infrastructure that supports your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-brand-black font-semibold px-8">
              <Link href="/contact">Schedule Assessment</Link>
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