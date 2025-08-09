import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  CogIcon,
  UserGroupIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BanknotesIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'CRM & ERP Systems - GreaterTechHub | Business Management Solutions',
  description: 'Custom CRM and ERP systems to streamline business operations, improve efficiency, and drive growth.',
}

const systems = [
  {
    icon: UserGroupIcon,
    title: 'Customer Relationship Management',
    description: 'Comprehensive CRM solutions to manage customer interactions and drive sales growth.',
    features: ['Lead Management', 'Sales Pipeline', 'Customer Support', 'Marketing Automation'],
    benefits: ['Increased Sales', 'Better Customer Service', 'Improved Retention', 'Data-Driven Insights']
  },
  {
    icon: CogIcon,
    title: 'Enterprise Resource Planning',
    description: 'Integrated ERP systems to manage all aspects of your business operations.',
    features: ['Inventory Management', 'Financial Reporting', 'HR Management', 'Supply Chain'],
    benefits: ['Operational Efficiency', 'Cost Reduction', 'Better Planning', 'Compliance Management']
  },
  {
    icon: ChartBarIcon,
    title: 'Business Intelligence',
    description: 'Advanced analytics and reporting tools for data-driven decision making.',
    features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Predictive Analytics'],
    benefits: ['Better Decisions', 'Market Insights', 'Performance Tracking', 'Risk Management']
  },
  {
    icon: DocumentTextIcon,
    title: 'Document Management',
    description: 'Digital document management systems for efficient information handling.',
    features: ['Document Storage', 'Version Control', 'Workflow Automation', 'Access Control'],
    benefits: ['Reduced Paperwork', 'Faster Processes', 'Better Compliance', 'Improved Collaboration']
  },
  {
    icon: BanknotesIcon,
    title: 'Financial Management',
    description: 'Comprehensive financial management modules for accurate accounting and reporting.',
    features: ['Accounting', 'Budgeting', 'Tax Management', 'Financial Reporting'],
    benefits: ['Accurate Books', 'Tax Compliance', 'Cost Control', 'Financial Insights']
  },
  {
    icon: TruckIcon,
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain solutions for optimal inventory and logistics management.',
    features: ['Procurement', 'Inventory Tracking', 'Supplier Management', 'Logistics'],
    benefits: ['Reduced Costs', 'Better Inventory', 'Supplier Relations', 'Delivery Optimization']
  }
]

const industries = [
  'Manufacturing', 'Retail', 'Healthcare', 'Professional Services',
  'Real Estate', 'Construction', 'Education', 'Non-Profit'
]

const implementations = [
  { phase: 'Discovery', duration: '2-3 weeks', description: 'Business analysis and requirements gathering' },
  { phase: 'Design', duration: '3-4 weeks', description: 'System architecture and UI/UX design' },
  { phase: 'Development', duration: '8-12 weeks', description: 'Custom development and integration' },
  { phase: 'Testing', duration: '2-3 weeks', description: 'Quality assurance and user acceptance testing' },
  { phase: 'Deployment', duration: '1-2 weeks', description: 'System deployment and go-live support' },
  { phase: 'Support', duration: 'Ongoing', description: 'Training, maintenance, and continuous support' }
]

export default function CRMERPSystems() {
  console.log('CRM & ERP Systems page rendered');

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-900/20 text-blue-900 border-blue-900/30">
              Business Systems
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              CRM & <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">ERP Systems</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Streamline your business operations with custom CRM and ERP solutions. 
              Integrate all aspects of your business for maximum efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
                <Link href="/contact">Get System Demo</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              >
                View Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Custom Systems?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Off-the-shelf solutions don't always fit. Our custom systems are built for your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Tailored Solutions', desc: 'Built specifically for your business processes and workflows', icon: '🎯' },
              { title: 'Scalable Architecture', desc: 'Grows with your business without performance degradation', icon: '📈' },
              { title: 'Integration Ready', desc: 'Seamlessly connects with your existing tools and systems', icon: '🔗' },
              { title: 'Cost Effective', desc: 'Lower total cost of ownership compared to multiple licensed systems', icon: '💰' },
              { title: 'Full Control', desc: 'Complete ownership and control over your business data', icon: '🔐' },
              { title: 'Ongoing Support', desc: 'Dedicated support team for maintenance and enhancements', icon: '🛠️' }
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

      {/* Systems Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Business Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Integrated systems that cover all aspects of your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systems.map((system, index) => (
              <Card key={index} className="bg-white border-blue-900/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="inline-flex p-3 rounded-xl bg-blue-500/30">
                        <system.icon className={`h-6 w-6 ${index === 0 ? 'text-red-500' : index === 1 ? 'text-green-500' : index === 2 ? 'text-yellow-500' : index === 3 ? 'text-purple-500' : index === 4 ? 'text-pink-500' : 'text-blue-900'}`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        {system.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {system.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-blue-900 font-medium mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {system.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-center">
                            <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-blue-900 font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {system.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-center">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Implementation Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Structured approach ensuring successful system delivery and adoption
            </p>
          </div>

          <div className="space-y-8">
            {implementations.map((impl, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-24">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow ml-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        {impl.phase}
                      </h3>
                      <p className="text-slate-600">
                        {impl.description}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge variant="outline" className="text-blue-900 border-blue-900/30 hover:bg-blue-900 hover:text-white">
                        {impl.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Industries</span> We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized solutions for diverse industry requirements
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

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Streamline Your Business?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's build a custom CRM or ERP system that transforms your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Link href="/contact">Request Consultation</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
            >
              <Link href="/services">Explore More Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}