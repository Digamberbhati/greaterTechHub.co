import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  PhoneIcon,
  UserGroupIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'BPO Services - GreaterTechHub | Business Process Outsourcing',
  description: 'Comprehensive BPO services to streamline your business operations, reduce costs, and enhance efficiency with tailored outsourcing solutions.',
  keywords: ['BPO services', 'business process outsourcing', 'call center services', 'customer support outsourcing', 'back-office outsourcing', 'GreaterTechHub', 'Noida', 'Delhi', 'India', 'global outsourcing'],
}

const bpoServices = [
  {
    icon: PhoneIcon,
    title: 'Customer Support',
    description: 'High-quality customer service through multi-channel support to enhance satisfaction.',
    tools: ['Zendesk', 'Freshdesk', 'Salesforce', 'LiveAgent', 'VoIP Systems'],
    features: ['24/7 Support', 'Multi-Channel', 'Ticket Management', 'Customer Feedback']
  },
  {
    icon: UserGroupIcon,
    title: 'Technical Support',
    description: 'Expert technical assistance to resolve customer issues and maintain satisfaction.',
    tools: ['TeamViewer', 'Jira Service Desk', 'SolarWinds', 'Zendesk', 'Remote Desktop'],
    features: ['Issue Resolution', 'Helpdesk Support', 'SLA Compliance', 'Technical Training']
  },
  {
    icon: DocumentTextIcon,
    title: 'Back-Office Support',
    description: 'Efficient handling of administrative and data-related tasks to support operations.',
    tools: ['Microsoft Office', 'Google Workspace', 'SAP', 'QuickBooks', 'Data Entry Tools'],
    features: ['Data Processing', 'Document Management', 'Payroll Processing', 'Record Keeping']
  },
  {
    icon: GlobeAltIcon,
    title: 'Multilingual Services',
    description: 'Global support with multilingual teams to cater to diverse markets.',
    tools: ['Translation Software', 'CRM Platforms', 'LanguageLine', 'VoIP', 'Localization Tools'],
    features: ['Multilingual Support', 'Cultural Sensitivity', 'Global Reach', 'Localization']
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Finance & Accounting',
    description: 'Streamlined financial processes for accurate and compliant operations.',
    tools: ['QuickBooks', 'Xero', 'SAP ERP', 'Tally', 'Excel'],
    features: ['Bookkeeping', 'Accounts Payable/Receivable', 'Financial Reporting', 'Tax Compliance']
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to optimize processes and improve decision-making.',
    tools: ['Tableau', 'Power BI', 'Google Analytics', 'Excel', 'CRM Analytics'],
    features: ['Performance Dashboards', 'KPI Tracking', 'Data Analysis', 'Custom Reports']
  }
]

const industries = [
  'Healthcare', 'Finance', 'Retail', 'Telecommunications', 
  'E-commerce', 'Insurance', 'Travel & Hospitality', 'Technology'
]

const methodologies = [
  { name: 'Process Optimization', desc: 'Streamlining operations for efficiency' },
  { name: 'Quality Assurance', desc: 'Ensuring high standards in service delivery' },
  { name: 'Scalable Operations', desc: 'Flexible solutions to meet growing needs' },
  { name: 'Client-Centric Approach', desc: 'Tailoring services to client goals' }
]

const tools = [
  'Zendesk', 'Freshdesk', 'Salesforce', 'QuickBooks', 'Xero', 
  'SAP', 'Tableau', 'Power BI', 'Google Analytics', 'TeamViewer', 
  'Jira Service Desk', 'Microsoft Office', 'Google Workspace', 'VoIP'
]

export default function BPOServices() {
  console.log('BPO Services page rendered');

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-900/20 text-blue-900 border-blue-900/30">
              BPO Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Business Process <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Outsourcing</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Optimize your operations with our expert BPO services, delivering cost-effective, scalable, and high-quality solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
                <Link href="/contact">Start Outsourcing</Link>
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

      {/* Why BPO Services Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">BPO Services?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Outsource smarter to boost efficiency and focus on core business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💰', title: 'Cost Efficiency', desc: 'Reduce operational costs' },
              { icon: '🚀', title: 'Scalability', desc: 'Adapt to changing demands' },
              { icon: '🌟', title: 'Quality Service', desc: 'Deliver exceptional results' },
              { icon: '⏱️', title: 'Time Savings', desc: 'Focus on strategic priorities' }
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

      {/* BPO Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              BPO <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive outsourcing solutions to streamline your operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bpoServices.map((service, index) => (
              <Card key={index} className="bg-white border-blue-900/20 hover:shadow-lg transition-shadow">
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
              Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">BPO</span> Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proven methodologies for efficient outsourcing
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
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Tool</span> Stack
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Industry-standard tools for seamless BPO operations
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
              Tailored BPO solutions for diverse industries
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
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              BPO <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Structured approach for seamless outsourcing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: '01', title: 'Needs Analysis', desc: 'Understand business requirements' },
              { step: '02', title: 'Process Design', desc: 'Tailor outsourcing solutions' },
              { step: '03', title: 'Team Setup', desc: 'Assign skilled professionals' },
              { step: '04', title: 'Implementation', desc: 'Launch operations' },
              { step: '05', title: 'Monitoring', desc: 'Track performance metrics' },
              { step: '06', title: 'Optimization', desc: 'Continuous improvement' }
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
            Ready to Optimize with <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">BPO?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's streamline your operations with tailored outsourcing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Link href="/contact">Start Outsourcing</Link>
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