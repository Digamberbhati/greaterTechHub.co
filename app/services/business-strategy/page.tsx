import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  LightBulbIcon,
  ChartBarIcon,
  GlobeAltIcon,
  UsersIcon,
  DocumentMagnifyingGlassIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Business Strategy Services - GreaterTechHub | Strategic Growth',
  description: 'Expert business strategy services to drive growth, optimize operations, and achieve your business goals.',
}

const strategyServices = [
  {
    icon: LightBulbIcon,
    title: 'Strategic Planning',
    description: 'Develop long-term strategies to align with your business vision and goals.',
    tools: ['SWOT Analysis', 'PESTLE Analysis', 'Balanced Scorecard', 'Trello', 'Asana'],
    features: ['Vision Alignment', 'Goal Setting', 'Roadmap Development', 'Performance Metrics']
  },
  {
    icon: ChartBarIcon,
    title: 'Market Analysis',
    description: 'In-depth analysis to identify market opportunities and competitive positioning.',
    tools: ['Tableau', 'Power BI', 'Google Analytics', 'SEMRush', 'Market Research Platforms'],
    features: ['Competitor Analysis', 'Market Trends', 'Customer Segmentation', 'Opportunity Mapping']
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Expansion',
    description: 'Strategies to enter new markets and scale internationally.',
    tools: ['Market Entry Frameworks', 'Localization Tools', 'Trade Analytics', 'CRM Systems'],
    features: ['Market Entry Plans', 'Cultural Adaptation', 'Regulatory Compliance', 'Global Branding']
  },
  {
    icon: UsersIcon,
    title: 'Organizational Strategy',
    description: 'Optimize team structures and processes for efficiency and growth.',
    tools: ['Org Chart Tools', 'Jira', 'Monday.com', 'Change Management Frameworks'],
    features: ['Team Alignment', 'Process Optimization', 'Change Management', 'Leadership Training']
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    title: 'Financial Strategy',
    description: 'Financial planning and forecasting to ensure sustainable growth.',
    tools: ['QuickBooks', 'Xero', 'Excel', 'SAP', 'Financial Modeling Tools'],
    features: ['Budget Planning', 'Revenue Forecasting', 'Cost Optimization', 'Investment Analysis']
  },
  {
    icon: RocketLaunchIcon,
    title: 'Innovation Strategy',
    description: 'Foster innovation to stay ahead in competitive markets.',
    tools: ['Design Thinking', 'Lean Canvas', 'Miro', 'Innovation Frameworks', 'R&D Tools'],
    features: ['Product Innovation', 'Process Innovation', 'Idea Generation', 'Prototyping']
  }
]

const industries = [
  'Technology', 'Finance', 'Healthcare', 'Retail', 
  'Manufacturing', 'Education', 'Hospitality', 'Energy'
]

const methodologies = [
  { name: 'Data-Driven Decision Making', desc: 'Leverage analytics for informed strategies' },
  { name: 'Agile Strategy Development', desc: 'Iterative planning with flexibility' },
  { name: 'Stakeholder Collaboration', desc: 'Align strategies with key stakeholders' },
  { name: 'Continuous Improvement', desc: 'Ongoing refinement of strategies' }
]

const tools = [
  'SWOT Analysis', 'PESTLE Analysis', 'Tableau', 'Power BI', 'Google Analytics', 
  'SEMRush', 'Trello', 'Asana', 'QuickBooks', 'Xero', 'Miro', 'Jira', 
  'Monday.com', 'SAP', 'Lean Canvas'
]

export default function BusinessStrategy() {
  console.log('Business Strategy page rendered');

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-900/20 text-blue-900 border-blue-900/30">
              Business Strategy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Business <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Strategy</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Transform your business with strategic planning, market insights, and innovative solutions to achieve sustainable growth and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
                <Link href="/contact">Start Your Strategy</Link>
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

      {/* Why Business Strategy Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Business Strategy?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Strategic planning drives growth and competitive advantage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: 'Clear Direction', desc: 'Align goals with actionable plans' },
              { icon: '📈', title: 'Market Advantage', desc: 'Stay ahead of competitors' },
              { icon: '💡', title: 'Innovation', desc: 'Drive creative solutions' },
              { icon: '🚀', title: 'Sustainable Growth', desc: 'Build long-term success' }
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

      {/* Strategy Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Strategy <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions for strategic business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategyServices.map((service, index) => (
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
              Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Strategy</span> Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proven methodologies for effective business strategy
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
              Industry-standard tools for strategic planning and analysis
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
              Tailored strategies for diverse industries
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
              Strategy <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Structured approach for developing effective strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand business goals' },
              { step: '02', title: 'Analysis', desc: 'Assess market and data' },
              { step: '03', title: 'Planning', desc: 'Develop strategic roadmap' },
              { step: '04', title: 'Execution', desc: 'Implement strategies' },
              { step: '05', title: 'Monitoring', desc: 'Track performance' },
              { step: '06', title: 'Optimization', desc: 'Refine and improve' }
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
            Ready to Shape Your <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Strategy?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's craft a business strategy to drive growth and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Link href="/contact">Start Your Strategy</Link>
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