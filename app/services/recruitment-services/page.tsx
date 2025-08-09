import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  UsersIcon,
  BriefcaseIcon,
  MagnifyingGlassIcon,
  DocumentCheckIcon,
  UserPlusIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Recruitment Services - GreaterTechHub | Talent Acquisition',
  description: 'Expert recruitment services to find, attract, and hire top talent for your organization, tailored to your unique needs.',
  keywords: ['recruitment services', 'talent acquisition', 'hiring solutions', 'executive search', 'staffing', 'GreaterTechHub', 'Noida', 'Delhi', 'India', 'global hiring'],
}

const recruitmentServices = [
  {
    icon: UsersIcon,
    title: 'Talent Sourcing',
    description: 'Identify and attract top talent through targeted sourcing strategies.',
    tools: ['LinkedIn Recruiter', 'Indeed', 'Naukri', 'Job Boards', 'Social Media'],
    features: ['Candidate Sourcing', 'Talent Pipeline', 'Employer Branding', 'Diverse Hiring']
  },
  {
    icon: BriefcaseIcon,
    title: 'Executive Search',
    description: 'Specialized recruitment for leadership and executive roles.',
    tools: ['Heidrick & Struggles', 'Korn Ferry', 'LinkedIn', 'CRM Systems', 'ATS Platforms'],
    features: ['C-Level Recruitment', 'Confidential Search', 'Leadership Assessment', 'Market Mapping']
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Candidate Screening',
    description: 'Thorough screening to ensure the best fit for your organization.',
    tools: ['ATS (Workable)', 'HireVue', 'Resume Parser', 'Skill Assessment Tools', 'Reference Checks'],
    features: ['Resume Screening', 'Skill Testing', 'Cultural Fit', 'Background Verification']
  },
  {
    icon: DocumentCheckIcon,
    title: 'Recruitment Process Outsourcing',
    description: 'End-to-end recruitment solutions to streamline your hiring process.',
    tools: ['Greenhouse', 'BambooHR', 'Zoho Recruit', 'Trello', 'Slack'],
    features: ['Full-Cycle Hiring', 'Process Automation', 'Scalable Recruitment', 'Reporting']
  },
  {
    icon: UserPlusIcon,
    title: 'Diversity & Inclusion Hiring',
    description: 'Strategies to build diverse and inclusive teams.',
    tools: ['Diversity Job Boards', 'Textio', 'LinkedIn Analytics', 'Inclusion Metrics', 'CRM'],
    features: ['Diversity Recruitment', 'Inclusion Training', 'Bias-Free Hiring', 'Outreach Programs']
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Recruitment',
    description: 'Hire top talent from across the globe with localized strategies.',
    tools: ['Remote', 'Upwork', 'Global ATS', 'Localization Tools', 'Visa Compliance'],
    features: ['International Hiring', 'Visa Support', 'Cultural Adaptation', 'Global Talent Pools']
  }
]

const industries = [
  'Technology', 'Finance', 'Healthcare', 'Manufacturing', 
  'Retail', 'Education', 'Hospitality', 'Telecommunications'
]

const methodologies = [
  { name: 'Candidate-Centric Approach', desc: 'Prioritizing candidate experience and fit' },
  { name: 'Data-Driven Recruitment', desc: 'Using analytics to optimize hiring' },
  { name: 'Agile Hiring Process', desc: 'Flexible and iterative recruitment strategies' },
  { name: 'Employer Branding', desc: 'Building a strong employer reputation' }
]

const tools = [
  'LinkedIn Recruiter', 'Indeed', 'Naukri', 'Workable', 'Greenhouse', 
  'BambooHR', 'Zoho Recruit', 'HireVue', 'Textio', 'Trello', 
  'Slack', 'Job Boards', 'CRM Systems', 'ATS Platforms'
]

export default function RecruitmentServices() {
  console.log('Recruitment Services page rendered');

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-900/20 text-blue-900 border-blue-900/30">
              Recruitment Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Recruitment <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Build your dream team with our expert recruitment services, designed to find and attract top talent tailored to your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
                <Link href="/contact">Start Hiring</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              >
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Recruitment Services Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Recruitment Services?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Streamlined hiring to find the right talent for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: 'Targeted Hiring', desc: 'Find candidates who fit your needs' },
              { icon: '🚀', title: 'Fast Recruitment', desc: 'Reduce time-to-hire' },
              { icon: '🌟', title: 'Quality Talent', desc: 'Access top-tier professionals' },
              { icon: '🤝', title: 'Cultural Fit', desc: 'Build cohesive teams' }
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

      {/* Recruitment Services Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Recruitment <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions to build your perfect team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recruitmentServices.map((service, index) => (
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
                          <Badge key={idx} variant="outline" className="text-xs text-blue-900 border-blue-900/30">
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
              Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Recruitment</span> Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proven methodologies for effective talent acquisition
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
              Industry-standard tools for efficient recruitment
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
              Tailored recruitment solutions for diverse industries
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
              Recruitment <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Structured approach for seamless hiring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: '01', title: 'Needs Assessment', desc: 'Understand hiring needs' },
              { step: '02', title: 'Sourcing', desc: 'Identify top candidates' },
              { step: '03', title: 'Screening', desc: 'Evaluate qualifications' },
              { step: '04', title: 'Interviews', desc: 'Conduct candidate interviews' },
              { step: '05', title: 'Selection', desc: 'Choose the best fit' },
              { step: '06', title: 'Onboarding', desc: 'Support integration' }
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
            Ready to Build Your <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Team?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's find the perfect talent to drive your organization forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Link href="/contact">Start Hiring</Link>
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