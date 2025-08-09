import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  BugAntIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'QA & Software Testing - GreaterTechHub | Quality Assurance Services',
  description: 'Comprehensive software testing and QA services to ensure your applications are reliable, secure, and perform optimally.',
}

const testingServices = [
  {
    icon: BugAntIcon,
    title: 'Functional Testing',
    description: 'Comprehensive testing to ensure all features work as intended across different scenarios.',
    types: ['Unit Testing', 'Integration Testing', 'System Testing', 'User Acceptance Testing'],
    benefits: ['Bug Detection', 'Feature Validation', 'User Experience', 'Quality Assurance']
  },
  {
    icon: ChartBarIcon,
    title: 'Performance Testing',
    description: 'Load, stress, and performance testing to ensure optimal application performance.',
    types: ['Load Testing', 'Stress Testing', 'Volume Testing', 'Endurance Testing'],
    benefits: ['Scalability Validation', 'Performance Optimization', 'Bottleneck Identification', 'Capacity Planning']
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security Testing',
    description: 'Comprehensive security testing to identify vulnerabilities and protect against threats.',
    types: ['Penetration Testing', 'Vulnerability Assessment', 'Security Audits', 'Compliance Testing'],
    benefits: ['Threat Protection', 'Data Security', 'Compliance Assurance', 'Risk Mitigation']
  },
  {
    icon: CogIcon,
    title: 'Automation Testing',
    description: 'Automated testing frameworks for efficient, repeatable, and comprehensive testing.',
    types: ['Test Automation', 'CI/CD Integration', 'Regression Testing', 'API Testing'],
    benefits: ['Faster Testing', 'Consistent Results', 'Cost Reduction', 'Continuous Quality']
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Testing',
    description: 'Specialized testing for mobile applications across different devices and platforms.',
    types: ['Device Testing', 'OS Compatibility', 'Performance Testing', 'Usability Testing'],
    benefits: ['Cross-Platform Support', 'Device Compatibility', 'User Experience', 'Performance Optimization']
  },
  {
    icon: GlobeAltIcon,
    title: 'Web Testing',
    description: 'Comprehensive web application testing across browsers, devices, and networks.',
    types: ['Cross-Browser Testing', 'Responsive Testing', 'Accessibility Testing', 'SEO Testing'],
    benefits: ['Browser Compatibility', 'Accessibility Compliance', 'SEO Optimization', 'User Experience']
  }
]

const testingTools = [
  'Selenium', 'Cypress', 'Jest', 'JUnit', 'TestNG', 'Postman',
  'JMeter', 'LoadRunner', 'Appium', 'Playwright', 'K6', 'OWASP ZAP'
]

const methodologies = [
  { name: 'Agile Testing', desc: 'Continuous testing integrated with agile development cycles' },
  { name: 'Risk-Based Testing', desc: 'Prioritizing testing based on risk assessment and business impact' },
  { name: 'Shift-Left Testing', desc: 'Early testing integration in the development lifecycle' },
  { name: 'Exploratory Testing', desc: 'Unscripted testing to discover unexpected issues' }
]

const benefits = [
  { icon: '🎯', title: 'Higher Quality', desc: 'Deliver bug-free, high-quality software' },
  { icon: '⚡', title: 'Faster Delivery', desc: 'Automated testing speeds up release cycles' },
  { icon: '💰', title: 'Cost Savings', desc: 'Early bug detection reduces fixing costs' },
  { icon: '🛡️', title: 'Risk Reduction', desc: 'Minimize business risks from software failures' }
]

export default function QASoftwareTesting() {
  console.log('QA & Software Testing page rendered');

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-900/20 text-blue-900 border-blue-900/30">
              Quality Assurance
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              QA & Software <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Testing</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Ensure your software meets the highest quality standards with our comprehensive testing services. 
              From functional to performance testing, we deliver reliable, secure, and user-friendly applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
                <Link href="/contact">Get Testing Quote</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              >
                View Testing Plans
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
              Why <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Quality Matters</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional testing services that ensure your software exceeds user expectations
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
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Services Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Testing Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Full spectrum of testing services to ensure software quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingServices.map((service, index) => (
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-blue-900 font-medium mb-2">Testing Types:</h4>
                      <ul className="space-y-1">
                        {service.types.map((type, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-center">
                            <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                            {type}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-blue-900 font-medium mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-center">
                            <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
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

      {/* Methodologies Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Testing</span> Methodologies
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Modern testing approaches for efficient and effective quality assurance
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
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Testing Tools</span> & Frameworks
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Industry-leading tools and frameworks for comprehensive testing coverage
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {testingTools.map((tool) => (
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

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Testing <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Excellence</span> in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: '99.5%', label: 'Bug Detection Rate' },
              { metric: '500+', label: 'Projects Tested' },
              { metric: '50%', label: 'Cost Reduction' },
              { metric: '24/7', label: 'Testing Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Ensure Quality?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's discuss your testing requirements and create a comprehensive QA strategy for your software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Link href="/contact">Get Testing Quote</Link>
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