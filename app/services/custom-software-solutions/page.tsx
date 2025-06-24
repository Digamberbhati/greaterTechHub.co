import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  CodeBracketIcon,
  CubeIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Custom Software Solutions - GreaterTechHub | Bespoke Development',
  description: 'Custom software development services tailored to your unique business needs. From web applications to enterprise systems.',
}

const solutions = [
  {
    icon: CodeBracketIcon,
    title: 'Web Applications',
    description: 'Modern, responsive web applications built with cutting-edge technologies.',
    technologies: ['React/Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP'],
    features: ['Responsive Design', 'Real-time Features', 'API Integration', 'Progressive Web App']
  },
  {
    icon: CubeIcon,
    title: 'Enterprise Software',
    description: 'Scalable enterprise solutions for complex business processes and workflows.',
    technologies: ['.NET Core', 'Java Spring', 'Python Django', 'Microservices', 'REST APIs', 'GraphQL'],
    features: ['High Performance', 'Scalable Architecture', 'Enterprise Security', 'Integration Ready']
  },
  {
    icon: RocketLaunchIcon,
    title: 'SaaS Platforms',
    description: 'Multi-tenant SaaS applications with subscription management and analytics.',
    technologies: ['Cloud Native', 'Kubernetes', 'Docker', 'AWS/Azure', 'Stripe API', 'Analytics'],
    features: ['Multi-tenancy', 'Billing Integration', 'User Analytics', 'Auto-scaling']
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security Solutions',
    description: 'Custom security applications and tools for data protection and compliance.',
    technologies: ['OAuth 2.0', 'JWT', 'Encryption', 'LDAP/AD', 'Two-Factor Auth', 'Compliance'],
    features: ['Data Encryption', 'Access Control', 'Audit Logging', 'Compliance Ready']
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics Platforms',
    description: 'Custom analytics and reporting solutions for data-driven decision making.',
    technologies: ['Python', 'R', 'Power BI', 'Tableau', 'Machine Learning', 'Big Data'],
    features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'ML Integration']
  },
  {
    icon: UserGroupIcon,
    title: 'Collaboration Tools',
    description: 'Custom team collaboration and project management applications.',
    technologies: ['Real-time Sync', 'WebRTC', 'Socket.io', 'File Storage', 'Notifications', 'Mobile Apps'],
    features: ['Real-time Collaboration', 'File Sharing', 'Video Conferencing', 'Mobile Support']
  }
]

const industries = [
  'Healthcare', 'Finance', 'Education', 'E-commerce', 
  'Manufacturing', 'Real Estate', 'Logistics', 'Entertainment'
]

const methodologies = [
  { name: 'Agile Development', desc: 'Iterative development with regular client feedback' },
  { name: 'DevOps Integration', desc: 'Continuous integration and deployment practices' },
  { name: 'Test-Driven Development', desc: 'Quality assurance through comprehensive testing' },
  { name: 'Code Review Process', desc: 'Peer review for code quality and best practices' }
]

const technologies = [
  'React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python', 
  'Django', 'Flask', 'Java', 'Spring Boot', '.NET Core', 'PHP',
  'Laravel', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Azure'
]

export default function CustomSoftwareSolutions() {
  console.log('Custom Software Solutions page rendered');

  return (
    <div className="pt-24 min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center">
            <Badge className="mb-6 bg-brand-gold/20 text-brand-gold border-brand-gold/30">
              Custom Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 text-shadow-gold">
              Custom Software <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-brand-cream max-w-3xl mx-auto mb-8">
              Transform your unique business requirements into powerful software solutions. 
              We build custom applications that perfectly fit your workflow and scale with your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-brand-black font-semibold px-8">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Custom Section */}
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Why Choose <span className="gradient-text">Custom Software?</span>
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Off-the-shelf solutions can't address every unique business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: 'Perfect Fit', desc: 'Designed specifically for your business processes' },
              { icon: '📈', title: 'Scalable', desc: 'Grows with your business without limitations' },
              { icon: '🔧', title: 'Full Control', desc: 'Complete ownership and customization rights' },
              { icon: '💰', title: 'Cost Effective', desc: 'Lower long-term costs than licensing fees' }
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

      {/* Solutions Section */}
      <section className="section-padding bg-brand-charcoal">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Custom <span className="gradient-text">Development Services</span>
            </h2>
            <p className="text-lg text-brand-cream max-w-2xl mx-auto">
              Comprehensive software development across all platforms and technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-brand-black/50 border-brand-gold/20 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-gold">
                        <solution.icon className="h-6 w-6 text-brand-black" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-brand-white mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-brand-cream mb-4">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-brand-gold font-medium mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-brand-cream border-brand-gold/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-brand-gold font-medium mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="text-sm text-brand-cream flex items-center">
                            <span className="w-2 h-2 bg-brand-gold rounded-full mr-2"></span>
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
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Our <span className="gradient-text">Development</span> Approach
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Proven methodologies for successful software delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodologies.map((method, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-brand-black font-bold mr-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-black mb-2">
                    {method.name}
                  </h3>
                  <p className="text-brand-gray">
                    {method.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-brand-charcoal">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              <span className="gradient-text">Technology</span> Stack
            </h2>
            <p className="text-lg text-brand-cream max-w-2xl mx-auto">
              Modern technologies for robust, scalable solutions
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <Badge 
                key={tech}
                variant="outline" 
                className="px-4 py-2 text-brand-gold border-brand-gold/30 hover:bg-gradient-gold hover:text-brand-black transition-all cursor-pointer"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              <span className="gradient-text">Industries</span> We Serve
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Custom solutions across diverse industry verticals
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <Badge 
                key={industry}
                variant="outline" 
                className="px-6 py-3 text-brand-brown border-brand-brown/30 hover:bg-gradient-brown hover:text-white transition-all cursor-pointer"
              >
                {industry}
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
              Development <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-brand-cream max-w-2xl mx-auto">
              Structured approach from concept to deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Requirements analysis' },
              { step: '02', title: 'Design', desc: 'UI/UX and architecture' },
              { step: '03', title: 'Development', desc: 'Code implementation' },
              { step: '04', title: 'Testing', desc: 'Quality assurance' },
              { step: '05', title: 'Deployment', desc: 'Go-live support' },
              { step: '06', title: 'Maintenance', desc: 'Ongoing support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-gold flex items-center justify-center text-brand-black font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-brand-white mb-2">{item.title}</h3>
                <p className="text-brand-cream text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-brown-gold">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            Ready to Build Your <span className="text-brand-gold">Custom Solution?</span>
          </h2>
          <p className="text-xl text-brand-cream mb-8">
            Let's discuss your unique requirements and create software that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-white text-brand-black hover:bg-brand-cream font-semibold px-8">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black"
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}