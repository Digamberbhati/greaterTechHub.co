import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  LightBulbIcon,
  MegaphoneIcon,
  ChartPieIcon,
  PencilSquareIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Branding, Advertising & Market Research - GreaterTechHub | Creative Strategies',
  description: 'Comprehensive branding, advertising, and market research services to elevate your brand and connect with your audience.',
}

const marketingServices = [
  {
    icon: LightBulbIcon,
    title: 'Brand Identity Design',
    description: 'Create a memorable brand identity that resonates with your audience.',
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Canva', 'Brand Guidelines'],
    features: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Typography']
  },
  {
    icon: MegaphoneIcon,
    title: 'Advertising Campaigns',
    description: 'Impactful advertising campaigns across digital and traditional media.',
    tools: ['Google Ads', 'Meta Ads', 'Adobe Premiere', 'After Effects', 'HubSpot'],
    features: ['Multi-Channel Ads', 'Targeted Campaigns', 'Video Ads', 'Performance Tracking']
  },
  {
    icon: ChartPieIcon,
    title: 'Market Research',
    description: 'Data-driven insights to understand your market and customers.',
    tools: ['SurveyMonkey', 'Google Analytics', 'Tableau', 'Qualtrics', 'SPSS'],
    features: ['Customer Surveys', 'Competitor Analysis', 'Data Visualization', 'Trend Analysis']
  },
  {
    icon: PencilSquareIcon,
    title: 'Content Marketing',
    description: 'Engaging content strategies to build brand loyalty and engagement.',
    tools: ['WordPress', 'Hootsuite', 'Canva', 'Mailchimp', 'SEO Tools'],
    features: ['Blog Content', 'Social Media Posts', 'Email Campaigns', 'SEO Optimization']
  },
  {
    icon: GlobeAltIcon,
    title: 'Digital Marketing',
    description: 'Strategic digital campaigns to boost online presence and conversions.',
    tools: ['Google Analytics', 'SEMRush', 'Ahrefs', 'Google Tag Manager', 'Hotjar'],
    features: ['SEO', 'PPC', 'Social Media Marketing', 'Analytics Integration']
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Consumer Behavior Analysis',
    description: 'Deep insights into consumer preferences to inform marketing strategies.',
    tools: ['Google Trends', 'Nielsen', 'Qualtrics', 'Heatmaps', 'CRM Systems'],
    features: ['Behavioral Insights', 'Segmentation', 'Persona Development', 'A/B Testing']
  }
]

const industries = [
  'Retail', 'Healthcare', 'Technology', 'Hospitality', 
  'Fashion', 'Education', 'Food & Beverage', 'Entertainment'
]

const methodologies = [
  { name: 'Customer-Centric Design', desc: 'Crafting brands that resonate with target audiences' },
  { name: 'Data-Driven Strategies', desc: 'Using insights to optimize campaigns' },
  { name: 'Agile Campaign Management', desc: 'Flexible, iterative campaign execution' },
  { name: 'Integrated Marketing', desc: 'Seamless blend of online and offline strategies' }
]

const tools = [
  'Adobe Illustrator', 'Photoshop', 'Figma', 'Canva', 'Google Ads', 
  'Meta Ads', 'Google Analytics', 'SEMRush', 'HubSpot', 'Mailchimp', 
  'Tableau', 'SurveyMonkey', 'Qualtrics', 'Hootsuite', 'Ahrefs'
]

export default function BrandingAdvertisingMarketResearch() {
  console.log('Branding, Advertising & Market Research page rendered');

  return (
    <div className="pt-24 min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center">
            <Badge className="mb-6 bg-brand-gold/20 text-brand-gold border-brand-gold/30">
              Marketing Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 text-shadow-gold">
              Branding, Advertising & <span className="gradient-text">Market Research</span>
            </h1>
            <p className="text-xl text-brand-cream max-w-3xl mx-auto mb-8">
              Elevate your brand with creative branding, targeted advertising, and insightful market research to connect with your audience and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-brand-black font-semibold px-8">
                <Link href="/contact">Start Your Campaign</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Branding & Marketing Section */}
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Why Choose <span className="gradient-text">Branding & Marketing?</span>
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Strategic branding and marketing create lasting connections with your audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🌟', title: 'Brand Recognition', desc: 'Build a memorable brand identity' },
              { icon: '📈', title: 'Audience Engagement', desc: 'Connect with your target market' },
              { icon: '🎯', title: 'Data-Driven Insights', desc: 'Make informed marketing decisions' },
              { icon: '🚀', title: 'Business Growth', desc: 'Drive conversions and loyalty' }
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

      {/* Marketing Services Section */}
      <section className="section-padding bg-brand-charcoal">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Marketing <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-brand-cream max-w-2xl mx-auto">
              Comprehensive solutions for branding, advertising, and market research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => (
              <Card key={index} className="bg-brand-black/50 border-brand-gold/20 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-gold">
                        <service.icon className="h-6 w-6 text-brand-black" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-brand-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-brand-cream mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-brand-gold font-medium mb-2">Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-brand-cream border-brand-gold/30">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-brand-gold font-medium mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.features.map((feature, idx) => (
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
              Our <span className="gradient-text">Marketing</span> Approach
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Proven methodologies for impactful branding and marketing
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

      {/* Tools Section */}
      <section className="section-padding bg-brand-charcoal">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              <span className="gradient-text">Tool</span> Stack
            </h2>
            <p className="text-lg text-brand-cream max-w-2xl mx-auto">
              Industry-standard tools for creating impactful marketing strategies
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <Badge 
                key={tool}
                variant="outline" 
                className="px-4 py-2 text-brand-gold border-brand-gold/30 hover:bg-gradient-gold hover:text-brand-black transition-all cursor-pointer"
              >
                {tool}
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
              Tailored marketing solutions for diverse industries
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
              Marketing <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-brand-cream max-w-2xl mx-auto">
              Structured approach for impactful branding and campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand brand and goals' },
              { step: '02', title: 'Research', desc: 'Analyze market and audience' },
              { step: '03', title: 'Strategy', desc: 'Develop campaign plan' },
              { step: '04', title: 'Design', desc: 'Create visuals and content' },
              { step: '05', title: 'Execution', desc: 'Launch campaigns' },
              { step: '06', title: 'Analysis', desc: 'Measure and optimize' }
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
            Ready to Elevate Your <span className="text-brand-gold">Brand?</span>
          </h2>
          <p className="text-xl text-brand-cream mb-8">
            Let's create impactful branding and marketing strategies to grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-white text-brand-black hover:bg-brand-cream font-semibold px-8">
              <Link href="/contact">Start Your Campaign</Link>
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