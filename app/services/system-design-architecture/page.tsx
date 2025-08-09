import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  CubeIcon,
  CloudIcon,
  ChartBarIcon,
  LockClosedIcon,
  ArrowsPointingOutIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'System Design & Architecture - GreaterTechHub | Scalable Solutions',
  description: 'Expert system design and architecture services to build scalable, secure, and efficient systems tailored to your business needs.',
}

const designServices = [
  {
    icon: CubeIcon,
    title: 'Microservices Architecture',
    description: 'Modular, scalable systems designed for flexibility and independent deployment.',
    technologies: ['Docker', 'Kubernetes', 'Spring Boot', 'Node.js', 'gRPC', 'REST APIs'],
    features: ['Independent Services', 'Scalability', 'Fault Isolation', 'Continuous Deployment'],
  },
  {
    icon: CloudIcon,
    title: 'Cloud-Native Design',
    description: 'Architectures optimized for cloud environments to maximize performance and cost-efficiency.',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Serverless', 'Terraform', 'CloudFormation'],
    features: ['Auto-Scaling', 'Cost Optimization', 'High Availability', 'Multi-Cloud Support'],
  },
  {
    icon: ChartBarIcon,
    title: 'Distributed Systems',
    description: 'Robust systems for high-throughput, fault-tolerant distributed computing.',
    technologies: ['Kafka', 'RabbitMQ', 'Hadoop', 'Spark', 'Redis', 'Cassandra'],
    features: ['Event-Driven', 'Data Consistency', 'Low Latency', 'Fault Tolerance'],
  },
  {
    icon: LockClosedIcon,
    title: 'Security Architecture',
    description: 'Secure system designs to protect data and ensure compliance.',
    technologies: ['OAuth 2.0', 'OpenID Connect', 'IAM', 'Encryption', 'Zero Trust', 'Penetration Testing'],
    features: ['Data Encryption', 'Access Control', 'Audit Trails', 'Compliance Support'],
  },
  {
    icon: ArrowsPointingOutIcon,
    title: 'Scalable Infrastructure',
    description: 'Infrastructure designs to handle growth and high traffic efficiently.',
    technologies: ['NGINX', 'HAProxy', 'Elastic Load Balancer', 'CDN', 'Redis', 'Memcached'],
    features: ['Load Balancing', 'Caching', 'High Availability', 'Global Distribution'],
  },
  {
    icon: DocumentTextIcon,
    title: 'System Modeling & Documentation',
    description: 'Comprehensive system modeling and documentation for clarity and maintainability.',
    technologies: ['UML', 'ArchiMate', 'BPMN', 'Confluence', 'Lucidchart', 'Draw.io'],
    features: ['System Diagrams', 'Architecture Docs', 'Process Flows', 'Stakeholder Clarity'],
  },
]

const industries = [
  'Finance', 'Healthcare', 'E-commerce', 'Logistics', 
  'Telecommunications', 'Gaming', 'Education', 'Government'
]

const methodologies = [
  { name: 'Domain-Driven Design', desc: 'Align systems with business domains for clarity' },
  { name: 'Agile Architecture', desc: 'Iterative design with continuous stakeholder feedback' },
  { name: 'CI/CD Integration', desc: 'Automated pipelines for rapid, reliable deployments' },
  { name: 'Performance Optimization', desc: 'Proactive tuning for efficiency and scalability' }
]

const technologies = [
  'AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 
  'Kafka', 'RabbitMQ', 'Spring Boot', 'Node.js', 'Redis', 'Cassandra', 
  'NGINX', 'HAProxy', 'UML', 'ArchiMate', 'GraphQL', 'gRPC'
]

export default function SystemDesignArchitecture() {
  console.log('System Design & Architecture page rendered');

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-900/20 text-blue-900 border-blue-900/30">
              System Design
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              System Design & <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Architecture</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Build robust, scalable, and secure systems tailored to your business needs with our expert system design and architecture services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
                <Link href="/contact">Start Your Project</Link>
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

      {/* Why System Design Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">System Design?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Custom system architectures ensure scalability, reliability, and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🚀', title: 'Scalability', desc: 'Systems that grow with your business' },
              { icon: '🛡️', title: 'Reliability', desc: 'Fault-tolerant and resilient designs' },
              { icon: '⚡', title: 'Performance', desc: 'Optimized for speed and efficiency' },
              { icon: '🔒', title: 'Security', desc: 'Built-in protection and compliance' }
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

      {/* Design Services Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              System Design <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions for building robust and scalable systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
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
                      <h4 className="text-blue-900 font-medium mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-blue-900 border-blue-900/30">
                            {tech}
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
              Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Design</span> Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proven methodologies for effective system design and architecture
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

      {/* Technologies Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Technology</span> Stack
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Cutting-edge technologies for robust system architectures
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <Badge 
                key={tech}
                variant="outline" 
                className="px-4 py-2 text-blue-900 border-blue-900/30 hover:bg-blue-900 hover:text-white transition-all cursor-pointer"
              >
                {tech}
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
              Tailored system designs for diverse industry needs
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
              Design <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Structured approach for architecting robust systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: '01', title: 'Requirements', desc: 'Analyze business needs' },
              { step: '02', title: 'Modeling', desc: 'Create system blueprints' },
              { step: '03', title: 'Design', desc: 'Architect the solution' },
              { step: '04', title: 'Validation', desc: 'Test design feasibility' },
              { step: '05', title: 'Implementation', desc: 'Build and deploy' },
              { step: '06', title: 'Optimization', desc: 'Monitor and refine' }
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
            Ready to Architect Your <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">System?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's design a scalable, secure, and efficient system for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Link href="/contact">Start Your Project</Link>
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