import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ComputerDesktopIcon,
  DocumentCheckIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'IT Asset Management Services - GreaterTechHub | Asset Optimization',
  description: 'Comprehensive IT asset management services to optimize, track, and secure your IT assets for maximum efficiency and compliance.',
  keywords: ['IT asset management', 'asset tracking', 'IT lifecycle management', 'hardware management', 'software asset management', 'GreaterTechHub', 'Noida', 'Delhi', 'India', 'IT optimization'],
}

const assetManagementServices = [
  {
    icon: ComputerDesktopIcon,
    title: 'Hardware Asset Management',
    description: 'Track and manage physical IT assets to ensure optimal utilization.',
    tools: ['ServiceNow', 'Lansweeper', 'SolarWinds', 'Asset Panda', 'Inventory Systems'],
    features: ['Asset Tracking', 'Lifecycle Management', 'Maintenance Scheduling', 'Inventory Audits']
  },
  {
    icon: DocumentCheckIcon,
    title: 'Software Asset Management',
    description: 'Optimize software licenses and ensure compliance with regulations.',
    tools: ['Snow Software', 'Flexera', 'Ivanti', 'Microsoft SCCM', 'License Dashboard'],
    features: ['License Optimization', 'Compliance Audits', 'Software Inventory', 'Cost Tracking']
  },
  {
    icon: CloudIcon,
    title: 'Cloud Asset Management',
    description: 'Manage cloud resources for cost efficiency and performance.',
    tools: ['AWS Cost Explorer', 'Azure Cost Management', 'Google Cloud Billing', 'CloudHealth', 'Turbonomic'],
    features: ['Cost Optimization', 'Resource Monitoring', 'Cloud Governance', 'Usage Analytics']
  },
  {
    icon: ShieldCheckIcon,
    title: 'IT Security & Compliance',
    description: 'Secure IT assets and ensure compliance with industry standards.',
    tools: ['Tenable', 'Qualys', 'CrowdStrike', 'ISO 27001 Frameworks', 'GDPR Tools'],
    features: ['Security Audits', 'Risk Assessment', 'Compliance Reporting', 'Data Protection']
  },
  {
    icon: ChartBarIcon,
    title: 'Asset Analytics & Reporting',
    description: 'Data-driven insights for informed IT asset management decisions.',
    tools: ['Tableau', 'Power BI', 'ServiceNow Analytics', 'Excel', 'Splunk'],
    features: ['Performance Dashboards', 'Usage Reports', 'Cost Analysis', 'Predictive Insights']
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Asset Management',
    description: 'Manage IT assets across multiple locations and regions.',
    tools: ['ServiceNow', 'CMDB Systems', 'Jira Asset Management', 'Global Inventory Tools', 'ERP Systems'],
    features: ['Centralized Management', 'Multi-Site Tracking', 'Global Compliance', 'Asset Standardization']
  }
]

const industries = [
  'Technology', 'Finance', 'Healthcare', 'Manufacturing', 
  'Retail', 'Education', 'Government', 'Telecommunications'
]

const methodologies = [
  { name: 'Lifecycle Management', desc: 'Managing assets from procurement to disposal' },
  { name: 'Data-Driven Optimization', desc: 'Using analytics to enhance asset efficiency' },
  { name: 'Proactive Maintenance', desc: 'Preventive strategies to reduce downtime' },
  { name: 'Compliance Focus', desc: 'Ensuring adherence to industry regulations' }
]

const tools = [
  'ServiceNow', 'Lansweeper', 'SolarWinds', 'Snow Software', 'Flexera', 
  'AWS Cost Explorer', 'Azure Cost Management', 'Tableau', 'Power BI', 
  'Tenable', 'Qualys', 'Microsoft SCCM', 'Asset Panda', 'Splunk'
]

export default function ITAssetManagement() {
  console.log('IT Asset Management page rendered');

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-900/20 text-blue-900 border-blue-900/30">
              IT Asset Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              IT Asset <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Management</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Optimize your IT assets with our comprehensive management services, ensuring efficiency, security, and compliance across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
                <Link href="/contact">Start Managing Assets</Link>
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

      {/* Why IT Asset Management Section */}
      <section className="py-12 bg-white">
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
            {[
              { icon: '💰', title: 'Cost Savings', desc: 'Optimize asset utilization' },
              { icon: '🔒', title: 'Security', desc: 'Protect assets from threats' },
              { icon: '📈', title: 'Efficiency', desc: 'Streamline IT operations' },
              { icon: '✅', title: 'Compliance', desc: 'Meet regulatory standards' }
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

      {/* Asset Management Services Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              IT Asset Management <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions to manage your IT assets effectively
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
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-blue-900 font-medium mb-2">Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-blue-900 border-blue-900/30 hover:bg-blue-900 hover:text-white">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-blue-900 font-medium mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="text-sm text-slate-600 flex items-center">
                            <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                            {feature}
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

      {/* Methodologies Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Asset Management</span> Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proven methodologies for effective IT asset management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodologies.map((method, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {method.name}
                  </h3>
                  <p className="text-slate-600">
                    {method.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Tool</span> Stack
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Industry-standard tools for efficient IT asset management
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <Badge 
                key={tool}
                variant="outline" 
                className="px-4 py-2 text-blue-900 border-blue-900/30 hover:bg-blue-900 hover:text-white transition-all cursor-pointer"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Industries</span> We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tailored IT asset management for diverse industries
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <Badge 
                key={industry}
                variant="outline" 
                className="px-6 py-3 text-blue-900 border-blue-900/30 hover:bg-blue-900 hover:text-white transition-all cursor-pointer"
              >
                {industry}
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
              Asset Management <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Structured approach for seamless IT asset management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Assess asset inventory' },
              { step: '02', title: 'Planning', desc: 'Design management strategy' },
              { step: '03', title: 'Tracking', desc: 'Implement tracking systems' },
              { step: '04', title: 'Optimization', desc: 'Enhance asset efficiency' },
              { step: '05', title: 'Compliance', desc: 'Ensure regulatory adherence' },
              { step: '06', title: 'Reporting', desc: 'Generate insights and reports' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to Optimize Your <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">IT Assets?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's streamline your IT asset management for efficiency and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Link href="/contact">Start Managing Assets</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}