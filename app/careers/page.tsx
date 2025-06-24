import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers - Join GreaterTechHub | IT Jobs & Opportunities',
  description: 'Join our team of innovative technology professionals. Explore career opportunities at GreaterTechHub and help shape the future of IT solutions.',
}

const openPositions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '3-5 years',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    description: 'Join our development team to build cutting-edge web applications and APIs for our clients.',
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    experience: '2-4 years',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
    description: 'Design and implement scalable cloud infrastructure and automation solutions.',
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    experience: '2-3 years',
    skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
    description: 'Drive digital marketing campaigns and strategies for our clients across various industries.',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    experience: '1-3 years',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    description: 'Create beautiful, intuitive user experiences for web and mobile applications.',
  },
]

const benefits = [
  'Competitive Salary & Benefits',
  'Remote Work Flexibility',
  'Professional Development Budget',
  'Health & Wellness Programs',
  'Flexible Time Off',
  'Latest Technology & Tools',
  'Collaborative Team Environment',
  'Career Growth Opportunities',
]

export default function Careers() {
  console.log('Careers page rendered');

  return (
    <div className="pt-24 min-h-screen">
      <div className="mx-auto max-w-7xl container-padding section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Join Our <span className="gradient-text">Amazing Team</span>
          </h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of technology. 
            We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-brand-navy">{benefit}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <h3 className="text-xl font-bold text-brand-navy">
                          {position.title}
                        </h3>
                        <Badge variant="outline" className="text-brand-blue border-brand-blue">
                          {position.type}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-brand-gray mb-4">
                        <span>📍 {position.location}</span>
                        <span>🏢 {position.department}</span>
                        <span>⏰ {position.experience}</span>
                      </div>
                      
                      <p className="text-brand-gray mb-4">
                        {position.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-brand-light text-brand-navy">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <Button 
                        asChild
                        className="bg-gradient-blue hover:opacity-90 text-white px-6 py-2"
                      >
                        <Link href="/contact">Apply Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Position Found */}
        <div className="text-center bg-brand-light p-12 rounded-3xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-brand-gray mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let us know how you can contribute to our mission.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-blue hover:opacity-90 text-white px-8 py-4 text-lg font-semibold"
          >
            <Link href="/contact">Send Your Resume</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}