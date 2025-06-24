import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  MegaphoneIcon,
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  BoltIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Digital Marketing & SEO - GreaterTechHub | Boost Online Presence',
  description: 'Comprehensive digital marketing and SEO services to increase visibility, drive traffic, and grow your business online.',
}

const services = [
  {
    icon: GlobeAltIcon,
    title: 'Search Engine Optimization',
    description: 'Comprehensive SEO strategies to improve search rankings and organic traffic.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
  },
  {
    icon: UserGroupIcon,
    title: 'Social Media Marketing',
    description: 'Engaging social media campaigns across all major platforms.',
    features: ['Content Creation', 'Community Management', 'Social Advertising', 'Influencer Marketing']
  },
  {
    icon: MegaphoneIcon,
    title: 'Pay-Per-Click Advertising',
    description: 'Strategic PPC campaigns for maximum ROI and immediate results.',
    features: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Campaign Optimization']
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to optimize performance and track success.',
    features: ['Google Analytics', 'Conversion Tracking', 'Performance Reports', 'ROI Analysis']
  },
  {
    icon: BoltIcon,
    title: 'Content Marketing',
    description: 'Strategic content creation that engages audiences and drives conversions.',
    features: ['Blog Writing', 'Video Content', 'Infographics', 'Email Marketing']
  },
  {
    icon: TrophyIcon,
    title: 'Brand Management',
    description: 'Building and maintaining a strong online brand presence.',
    features: ['Brand Strategy', 'Reputation Management', 'Online Reviews', 'Brand Monitoring']
  }
]

const results = [
  { metric: '300%', label: 'Average Traffic Increase' },
  { metric: '450%', label: 'ROI Improvement' },
  { metric: '200+', label: 'Successful Campaigns' },
  { metric: '98%', label: 'Client Satisfaction' }
]

const industries = [
  'E-commerce', 'Healthcare', 'Technology', 'Real Estate', 
  'Education', 'Finance', 'Manufacturing', 'Hospitality'
]

export default function DigitalMarketingSEO() {
  console.log('Digital Marketing & SEO page rendered');

  return (
    <div className="pt-24 min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center">
            <Badge className="mb-6 bg-brand-gold/20 text-brand-gold border-brand-gold/30">
              Digital Growth
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 text-shadow-gold">
              Digital Marketing <span className="gradient-text">& SEO</span>
            </h1>
            <p className="text-xl text-brand-cream max-w-3xl mx-auto mb-8">
              Amplify your online presence with data-driven digital marketing strategies. 
              We help businesses grow through targeted SEO, social media marketing, and conversion optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-brand-black font-semibold px-8">
                <Link href="/contact">Get Marketing Audit</Link>
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

      {/* Results Section */}
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Proven <span className="gradient-text">Results</span> That Matter
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Our data-driven approach delivers measurable results for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {result.metric}
                </div>
                <div className="text-brand-gray font-medium">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-brand-charcoal">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Comprehensive <span className="gradient-text">Marketing Services</span>
            </h2>
            <p className="text-lg text-brand-cream max-w-2xl mx-auto">
              Full-spectrum digital marketing solutions to grow your business online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-brand-black/50 border-brand-gold/20 card-hover h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-gold">
                      <service.icon className="h-6 w-6 text-brand-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-cream mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="border-t border-brand-gold/20 pt-4">
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-brand-gold">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              Tailored marketing strategies for diverse industry verticals
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
              Our <span className="gradient-text">Marketing Methodology</span>
            </h2>
            <p className="text-lg text-brand-cream max-w-2xl mx-auto">
              A systematic approach to digital marketing success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Analysis', desc: 'Market research and competitor analysis' },
              { step: '02', title: 'Strategy', desc: 'Custom marketing strategy development' },
              { step: '03', title: 'Execute', desc: 'Campaign implementation and optimization' },
              { step: '04', title: 'Scale', desc: 'Performance tracking and scaling' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-gold flex items-center justify-center text-brand-black font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-brand-white mb-2">{item.title}</h3>
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
            Ready to <span className="text-brand-gold">Grow Your Business?</span>
          </h2>
          <p className="text-xl text-brand-cream mb-8">
            Let's create a digital marketing strategy that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-white text-brand-black hover:bg-brand-cream font-semibold px-8">
              <Link href="/contact">Get Free Marketing Audit</Link>
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