import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  DevicePhoneMobileIcon,
  CogIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Mobile App Development - GreaterTechHub | iOS & Android Apps',
  description: 'Professional mobile app development services for iOS and Android. Native and cross-platform solutions with exceptional user experience.',
}

const technologies = [
  'React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)', 
  'Xamarin', 'Ionic', 'Firebase', 'AWS Mobile Hub'
]

const features = [
  {
    icon: DevicePhoneMobileIcon,
    title: 'Cross-Platform Development',
    description: 'Build once, deploy everywhere with React Native and Flutter for maximum reach and cost efficiency.'
  },
  {
    icon: CogIcon,
    title: 'Native Performance',
    description: 'Optimized native code ensures smooth performance and seamless integration with device features.'
  },
  {
    icon: CloudIcon,
    title: 'Cloud Integration',
    description: 'Robust backend services with real-time synchronization and scalable cloud architecture.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security First',
    description: 'Advanced encryption, secure authentication, and compliance with industry security standards.'
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics & Insights',
    description: 'Comprehensive user analytics and performance monitoring for data-driven decisions.'
  },
  {
    icon: SparklesIcon,
    title: 'UI/UX Excellence',
    description: 'Intuitive designs following platform guidelines for exceptional user experiences.'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'iOS App Development',
    description: 'Custom native iOS apps built with Swift, optimized for performance, and designed to meet Apple’s Human Interface Guidelines.'
  },
  {
    icon: CogIcon,
    title: 'Android App Development',
    description: 'High-performance Android apps developed using Kotlin, tailored to Google’s Material Design standards for seamless user experiences.'
  },
  {
    icon: SparklesIcon,
    title: 'Game Development for iOS & Android',
    description: 'Engaging mobile games built with Unity or native tools for iOS and Android, delivering immersive experiences and high performance.'
  }
]

const deliveryProcess = [
  { step: '01', title: 'Discovery & Planning', description: 'Requirements analysis, market research, and technical architecture planning.' },
  { step: '02', title: 'Design & Prototyping', description: 'UI/UX design, interactive prototypes, and user journey mapping.' },
  { step: '03', title: 'Development', description: 'Agile development with regular updates and milestone deliveries.' },
  { step: '04', title: 'Testing & QA', description: 'Comprehensive testing across devices, platforms, and user scenarios.' },
  { step: '05', title: 'Deployment', description: 'App store submission, optimization, and launch support.' },
  { step: '06', title: 'Support & Maintenance', description: 'Ongoing updates, bug fixes, and feature enhancements.' }
]

export default function MobileAppDevelopment() {
  console.log('Mobile App Development page rendered');

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-900/20 text-blue-900 border-blue-900/30">
              Mobile Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Mobile App <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Transform your ideas into powerful mobile applications with our expert development team. 
              We create native and cross-platform apps that deliver exceptional user experiences and drive business growth.
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
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Technologies</span> We Master
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to build robust, scalable mobile applications
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="px-4 py-2 text-blue-900 border-blue-900/30 hover:bg-blue-900 hover:text-white transition-all"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Mobile Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive mobile app development services that ensure your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-blue-900/20 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-blue-500/30">
                      <feature.icon className={`h-6 w-6 ${index === 0 ? 'text-red-500' : index === 1 ? 'text-green-500' : index === 2 ? 'text-yellow-500' : index === 3 ? 'text-purple-500' : index === 4 ? 'text-pink-500' : index === 5 ? 'text-blue-900' : index === 6 ? 'text-red-500' : index === 7 ? 'text-green-500' : 'text-yellow-500'}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Development Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliveryProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white font-bold text-lg">
                      {process.step}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      {process.title}
                    </h3>
                    <p className="text-slate-600">
                      {process.description}
                    </p>
                  </div>
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
            Ready to Build Your <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Mobile App?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's discuss your mobile app idea and create a solution that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Link href="/contact">Get Free Consultation</Link>
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