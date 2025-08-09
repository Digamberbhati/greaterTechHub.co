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
  'Education', 'Finance', 'Manufacturing', 'Hospitality',
  'Automotive', 'Travel and Tourism', 'Food and Beverage', 
  'Fashion and Apparel', 'Beauty and Cosmetics', 'Fitness and Wellness',
  'Entertainment and Media', 'Gaming', 'Non-Profit and Charity',
  'Legal Services', 'Home Improvement and Decor', 'B2B Services'
];

export default function DigitalMarketingSEO() {
  console.log('Digital Marketing & SEO page rendered');

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-900/20 text-blue-900 border-blue-900/30">
              Digital Growth
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Digital Marketing <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">& SEO</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Amplify your online presence with data-driven digital marketing strategies. 
              We help businesses grow through targeted SEO, social media marketing, and conversion optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
                <Link href="/contact">Get Marketing Audit</Link>
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

      {/* Results Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Proven <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Results</span> That Matter
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our data-driven approach delivers measurable results for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {result.metric}
                </div>
                <div className="text-slate-600 font-medium">
                  {result.label}
                </div>
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
              Comprehensive <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Marketing Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Full-spectrum digital marketing solutions to grow your business online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-blue-900/20 shadow-md h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-blue-500/30">
                      <service.icon className={`h-6 w-6 ${index === 0 ? 'text-red-500' : index === 1 ? 'text-green-500' : index === 2 ? 'text-yellow-500' : index === 3 ? 'text-purple-500' : index === 4 ? 'text-pink-500' : 'text-blue-900'}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="border-t border-blue-900/20 pt-4">
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-blue-900">
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
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Industries</span> We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tailored marketing strategies for diverse industry verticals
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
              Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Marketing Methodology</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
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
            Ready to <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Grow Your Business?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's create a digital marketing strategy that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Link href="/contact">Get Free Marketing Audit</Link>
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