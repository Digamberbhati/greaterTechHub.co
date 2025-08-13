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
  CubeIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'IT Infrastructure & Networking - GreaterTechHub | Network & Asset Solutions',
  description: 'Professional IT infrastructure, networking, and asset management services. Secure, scalable, and reliable solutions for modern businesses.',
}

const networkingServices = [
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

const assetManagementServices = [
  {
    icon: CubeIcon,
    title: 'Hardware Asset Management',
    description: 'Track and manage physical IT assets to ensure optimal utilization.',
    features: ['Asset Tracking', 'Lifecycle Management', 'Maintenance Scheduling', 'Inventory Audits'],
    tools: ['ServiceNow', 'Lansweeper', 'SolarWinds', 'Asset Panda']
  },
  {
    icon: CubeIcon,
    title: 'Software Asset Management',
    description: 'Optimize software licenses and ensure compliance with regulations.',
    features: ['License Optimization', 'Compliance Audits', 'Software Inventory', 'Cost Tracking'],
    tools: ['Snow Software', 'Flexera', 'Ivanti', 'Microsoft SCCM']
  },
  {
    icon: CloudIcon,
    title: 'Cloud Asset Management',
    description: 'Manage cloud resources for cost efficiency and performance.',
    features: ['Cost Optimization', 'Resource Monitoring', 'Cloud Governance', 'Usage Analytics'],
    tools: ['AWS Cost Explorer', 'Azure Cost Management', 'Google Cloud Billing', 'CloudHealth']
  },
  {
    icon: ShieldCheckIcon,
    title: 'IT Security & Compliance',
    description: 'Secure IT assets and ensure compliance with industry standards.',
    features: ['Security Audits', 'Risk Assessment', 'Compliance Reporting', 'Data Protection'],
    tools: ['Tenable', 'Qualys', 'CrowdStrike', 'ISO 27001 Frameworks']
  },
  {
    icon: CubeIcon,
    title: 'Asset Analytics & Reporting',
    description: 'Data-driven insights for informed IT asset management decisions.',
    features: ['Performance Dashboards', 'Usage Reports', 'Cost Analysis', 'Predictive Insights'],
    tools: ['Tableau', 'Power BI', 'ServiceNow Analytics', 'Splunk']
  },
  {
    icon: CubeIcon,
    title: 'Global Asset Management',
    description: 'Manage IT assets across multiple locations and regions.',
    features: ['Centralized Management', 'Multi-Site Tracking', 'Global Compliance', 'Asset Standardization'],
    tools: ['ServiceNow', 'CMDB Systems', 'Jira Asset Management', 'ERP Systems']
  }
]

const technologies = [
  'Cisco Systems', 'Juniper Networks', 'Fortinet', 'Palo Alto Networks',
  'VMware NSX', 'Aruba Networks', 'SonicWall', 'Ubiquiti',
  'ServiceNow', 'Snow Software', 'Flexera', 'AWS Cost Explorer'
]

const networkingBenefits = [
  { icon: '🚀', title: 'Performance', value: '300%', desc: 'Faster network speeds' },
  { icon: '🛡️', title: 'Security', value: '99.8%', desc: 'Threat prevention rate' },
  { icon: '💰', title: 'Cost Savings', value: '40%', desc: 'Reduced IT costs' },
  { icon: '⚡', title: 'Uptime', value: '99.9%', desc: 'Network availability' }
]

const assetManagementBenefits = [
  { icon: '💰', title: 'Cost Savings', value: 'Optimize', desc: 'Asset utilization' },
  { icon: '🔒', title: 'Security', value: 'Protect', desc: 'Assets from threats' },
  { icon: '📈', title: 'Efficiency', value: 'Streamline', desc: 'IT operations' },
  { icon: '✅', title: 'Compliance', value: 'Meet', desc: 'Regulatory standards' }
]

export default function ITInfrastructureNetworking() {
  console.log('IT Infrastructure, Networking & Asset Management page rendered');

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-900/20 text-blue-900 border-blue-900/30">
              Network & Asset Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              IT Infrastructure, Networking & <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Asset Management</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Build a robust, secure, and scalable IT infrastructure with comprehensive networking and asset management services to support your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
                <Link href="/contact">Get Assessment</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Networking Benefits Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Network <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Performance</span> Metrics
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Measurable improvements in network performance and business operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkingBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {benefit.value}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Networking Services Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Complete <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Networking Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end IT infrastructure solutions for modern businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {networkingServices.map((service, index) => (
              <Card key={index} className="bg-white border-blue-900/20 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="inline-flex p-3 rounded-xl bg-blue-500/30">
                        <service.icon className={`h-6 w-6 ${index === 0 ? 'text-red-500' : index === 1 ? 'text-green-500' : index === 2 ? 'text-yellow-500' : index === 3 ? 'text-purple-500' : index === 4 ? 'text-pink-500' : 'text-blue-900'}`} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4">{service.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-blue-900 font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-center">
                            <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-blue-900 font-medium mb-2">Performance:</h4>
                      <div className="space-y-1">
                        {Object.entries(service.metrics).map(([key, value], idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-slate-600 capitalize">{key}:</span>
                            <span className="text-blue-900 font-medium">{value}</span>
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

      {/* Asset Management Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">IT Asset Management?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Maximize efficiency and compliance with expert asset management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assetManagementBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {benefit.value}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Management Services Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">IT Asset Management Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Optimize your IT assets with our comprehensive management services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assetManagementServices.map((service, index) => (
              <Card key={index} className="bg-white border-blue-900/20 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="inline-flex p-3 rounded-xl bg-blue-500/30">
                        <service.icon className={`h-6 w-6 ${index === 0 ? 'text-red-500' : index === 1 ? 'text-green-500' : index === 2 ? 'text-yellow-500' : index === 3 ? 'text-purple-500' : index === 4 ? 'text-pink-500' : 'text-blue-900'}`} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4">{service.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-blue-900 font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-center">
                            <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-blue-900 font-medium mb-2">Tools:</h4>
                      <div className="space-y-1">
                        {service.tools.map((tool, idx) => (
                          <div key={idx} className="text-sm text-blue-900 font-medium">{tool}</div>
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
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Enterprise-Grade</span> Technologies
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Partnering with leading technology vendors for reliable solutions
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <Badge 
                key={tech}
                variant="outline" 
                className="px-6 py-3 text-blue-900 border-blue-900/30 hover:bg-blue-900 hover:text-white transition-all cursor-pointer"
              >
                {tech}
              </Badge>
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
                    Manufacturing Company Network & Asset Upgrade
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Complete network and asset management overhaul for a 500-employee manufacturing facility, 
                    resulting in 400% performance improvement, optimized asset utilization, and 99.9% uptime.
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
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">400%</div>
                    <div className="text-sm text-slate-600">Speed Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">99.9%</div>
                    <div className="text-sm text-slate-600">Network Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">50%</div>
                    <div className="text-sm text-slate-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">30 Days</div>
                    <div className="text-sm text-slate-600">Implementation</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">24/7</span> Network & Asset Support
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Comprehensive support services to keep your network and assets running smoothly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Proactive Monitoring', desc: 'Real-time network and asset monitoring with instant alerts', icon: '📊' },
              { title: 'Rapid Response', desc: 'Average response time under 30 minutes', icon: '⚡' },
              { title: 'Preventive Maintenance', desc: 'Scheduled maintenance to prevent issues', icon: '🔧' },
              { title: 'Performance Optimization', desc: 'Continuous tuning for optimal performance', icon: '🚀' },
              { title: 'Security Updates', desc: 'Regular security patches and updates', icon: '🛡️' },
              { title: 'Asset Documentation', desc: 'Complete asset documentation and reports', icon: '📋' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Upgrade Your Infrastructure?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's design and build a network and asset management system that supports your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Link href="/contact">Schedule Assessment</Link>
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