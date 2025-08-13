import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  UserGroupIcon,
  CogIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Chatbots & AI Agents - GreaterTechHub | AI-Powered Solutions',
  description: 'Transform customer engagement and business efficiency with our advanced chatbot and AI agent solutions. Scalable, intelligent, and secure.',
}

const aiAgentServices = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Customer Support Chatbots',
    description: '24/7 automated customer support to resolve queries and enhance user satisfaction.',
    features: ['Ticket Resolution', 'FAQ Automation', 'Multi-Channel Support', 'Sentiment Analysis'],
    metrics: { resolution: '85%', availability: '24/7', channels: '5+' }
  },
  {
    icon: SparklesIcon,
    title: 'Conversational AI Agents',
    description: 'Intelligent agents that understand natural language and provide personalized interactions.',
    features: ['NLP Integration', 'Context Awareness', 'Multi-Language Support', 'Personalization'],
    metrics: { accuracy: '95%', languages: '20+', response: '<2s' }
  },
  {
    icon: UserGroupIcon,
    title: 'Sales & Lead Generation Bots',
    description: 'AI-driven bots to qualify leads, nurture prospects, and boost conversions.',
    features: ['Lead Scoring', 'CRM Integration', 'Automated Follow-Ups', 'Analytics Dashboard'],
    metrics: { conversion: '30%+', leads: '500+', automation: '80%' }
  },
  {
    icon: CogIcon,
    title: 'Workflow Automation Agents',
    description: 'Automate repetitive tasks and streamline business processes with AI agents.',
    features: ['Task Automation', 'API Integration', 'Workflow Orchestration', 'Error Handling'],
    metrics: { efficiency: '60%+', tasks: '1000+', uptime: '99.9%' }
  },
  {
    icon: RocketLaunchIcon,
    title: 'E-Commerce AI Assistants',
    description: 'Enhance online shopping with personalized product recommendations and support.',
    features: ['Product Search', 'Recommendation Engine', 'Cart Recovery', 'Order Tracking'],
    metrics: { sales: '25%+', recovery: '40%', satisfaction: '90%' }
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security & Compliance Bots',
    description: 'AI agents to monitor, secure, and ensure compliance in your digital ecosystem.',
    features: ['Threat Detection', 'Compliance Monitoring', 'Audit Logs', 'Data Encryption'],
    metrics: { security: '99.9%', compliance: '100%', alerts: 'Real-time' }
  }
]

const technologies = [
  'Dialogflow', 'Microsoft Bot Framework', 'Rasa', 'Amazon Lex',
  'IBM Watson', 'Google Cloud AI', 'OpenAI', 'Hugging Face'
]

const benefits = [
  { icon: '⚡', title: 'Efficiency', value: '70%', desc: 'Reduce operational costs' },
  { icon: '😊', title: 'Satisfaction', value: '90%+', desc: 'Improved customer experience' },
  { icon: '🚀', title: 'Scalability', value: '100x', desc: 'Handle thousands of queries' },
  { icon: '🛡️', title: 'Security', value: '99.9%', desc: 'Secure interactions' }
]

export default function ChatbotsAIAgents() {
  console.log('Chatbots & AI Agents page rendered');

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-900/20 text-blue-900 border-blue-900/30">
              AI-Powered Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Chatbots & <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">AI Agents</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Transform customer engagement and business efficiency with intelligent, scalable, and secure chatbot and AI agent solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
                <Link href="/contact">Get AI Consultation</Link>
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

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              AI-Powered <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Performance</span> Metrics
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Measurable improvements in customer engagement and operational efficiency
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">AI Agent Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end chatbot and AI agent services for modern businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiAgentServices.map((service, index) => (
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

      {/* Technologies Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Cutting-Edge</span> AI Technologies
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Leveraging industry-leading platforms for intelligent AI solutions
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
                    E-Commerce AI Chatbot Implementation
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Deployed a conversational AI assistant for a global e-commerce platform, 
                    boosting sales by 25% and improving customer satisfaction by 90%.
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
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">25%</div>
                    <div className="text-sm text-slate-600">Sales Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">90%</div>
                    <div className="text-sm text-slate-600">Customer Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">40%</div>
                    <div className="text-sm text-slate-600">Cart Recovery Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">20 Days</div>
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
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">24/7</span> AI Support
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Dedicated support to ensure your AI agents and chatbots perform optimally
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Proactive Monitoring', desc: 'Real-time monitoring of AI agent performance', icon: '📊' },
              { title: 'Rapid Response', desc: 'Average response time under 30 minutes', icon: '⚡' },
              { title: 'Continuous Training', desc: 'Regular updates to AI models and datasets', icon: '🧠' },
              { title: 'Performance Optimization', desc: 'Ongoing tuning for maximum efficiency', icon: '🚀' },
              { title: 'Security Updates', desc: 'Regular patches to ensure secure interactions', icon: '🛡️' },
              { title: 'Analytics Reporting', desc: 'Detailed insights into bot performance', icon: '📋' }
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
            Ready to <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Transform with AI?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Deploy intelligent chatbots and AI agents to elevate your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Link href="/contact">Schedule AI Consultation</Link>
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