import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  FilmIcon,
  CubeTransparentIcon,
  SparklesIcon,
  VideoCameraIcon,
  PaintBrushIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '2D/3D Animation Services - GreaterTechHub | Creative Animation',
  description: 'Professional 2D and 3D animation services to bring your ideas to life with stunning visuals and immersive storytelling.',
}

const animationServices = [
  {
    icon: FilmIcon,
    title: '2D Animation',
    description: 'Engaging 2D animations for explainer videos, marketing, and entertainment.',
    technologies: ['Adobe Animate', 'Toon Boom', 'After Effects', 'Illustrator', 'Photoshop'],
    features: ['Character Animation', 'Motion Graphics', 'Frame-by-Frame', 'Vector-Based']
  },
  {
    icon: CubeTransparentIcon,
    title: '3D Animation',
    description: 'High-quality 3D animations for films, games, and product visualizations.',
    technologies: ['Blender', 'Autodesk Maya', '3ds Max', 'ZBrush', 'Cinema 4D'],
    features: ['Realistic Rendering', 'Character Rigging', 'Environment Design', 'Physics Simulation']
  },
  {
    icon: SparklesIcon,
    title: 'Motion Graphics',
    description: 'Dynamic motion graphics for branding, advertisements, and social media.',
    technologies: ['After Effects', 'Premiere Pro', 'Cinema 4D', 'Illustrator', 'Photoshop'],
    features: ['Animated Logos', 'Typography Animation', 'Transitions', 'Visual Effects']
  },
  {
    icon: VideoCameraIcon,
    title: 'VFX & Compositing',
    description: 'Seamless visual effects and compositing for films and commercials.',
    technologies: ['Nuke', 'After Effects', 'Houdini', 'Fusion', 'Blender'],
    features: ['Green Screen', 'Particle Effects', 'Color Grading', 'Scene Integration']
  },
  {
    icon: PaintBrushIcon,
    title: 'Character Design',
    description: 'Unique character creation for animations, games, and storytelling.',
    technologies: ['ZBrush', 'Blender', 'Photoshop', 'Illustrator', 'Procreate'],
    features: ['Custom Characters', 'Rigging', 'Texturing', 'Concept Art']
  },
  {
    icon: GlobeAltIcon,
    title: 'AR/VR Animation',
    description: 'Immersive animations for augmented and virtual reality experiences.',
    technologies: ['Unity', 'Unreal Engine', 'Blender', 'C4D', 'ARCore'],
    features: ['Interactive Animations', '360° Experiences', 'Real-time Rendering', 'VR Integration']
  }
]

const industries = [
  'Entertainment', 'Gaming', 'Advertising', 'Education', 
  'Healthcare', 'Architecture', 'E-commerce', 'Film Production'
]

const methodologies = [
  { name: 'Storyboarding', desc: 'Visual planning for cohesive storytelling' },
  { name: 'Iterative Design', desc: 'Refining animations with client feedback' },
  { name: 'Performance Optimization', desc: 'Efficient rendering for smooth playback' },
  { name: 'Collaborative Workflow', desc: 'Seamless teamwork with artists and developers' }
]

const technologies = [
  'Blender', 'Autodesk Maya', '3ds Max', 'Cinema 4D', 'ZBrush', 
  'Adobe After Effects', 'Adobe Animate', 'Toon Boom', 'Nuke', 
  'Houdini', 'Unity', 'Unreal Engine', 'Photoshop', 'Illustrator'
]

export default function AnimationServices() {
  console.log('Animation Services page rendered');

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-900/20 text-blue-900 border-blue-900/30">
              Animation Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              2D/3D <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Animation</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Bring your stories and ideas to life with our professional 2D and 3D animation services, 
              crafted to captivate audiences and elevate your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
                <Link href="/contact">Start Your Animation</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              >
                View Showreel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Animation Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Animation?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Animation creates engaging, memorable experiences that stand out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎥', title: 'Engaging Visuals', desc: 'Captivate audiences with stunning animations' },
              { icon: '🌟', title: 'Brand Storytelling', desc: 'Communicate your message creatively' },
              { icon: '🎮', title: 'Versatile Applications', desc: 'From games to marketing and beyond' },
              { icon: '🚀', title: 'Memorable Impact', desc: 'Create lasting impressions with motion' }
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

      {/* Animation Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Animation <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive 2D and 3D animation services for all your creative needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {animationServices.map((service, index) => (
              <Card key={index} className="bg-white border-blue-900/20 hover:shadow-lg transition-shadow">
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
                          <Badge key={idx} variant="outline" className="text-xs text-blue-900 border-blue-900/30 hover:bg-blue-900 hover:text-white">
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
              Our <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Animation</span> Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proven methodologies for delivering high-quality animations
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

      /* Technologies Section */
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Technology</span> Stack
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Industry-standard tools for creating stunning animations
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

      /* Industries Section */
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Industries</span> We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tailored animation solutions for diverse industries
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

      /* Process Section */
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Animation <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Structured approach from concept to final render
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: '01', title: 'Concept', desc: 'Story and style development' },
              { step: '02', title: 'Storyboarding', desc: 'Visual planning and sketches' },
              { step: '03', title: 'Design', desc: 'Asset creation and modeling' },
              { step: '04', title: 'Animation', desc: 'Bringing scenes to life' },
              { step: '05', title: 'Rendering', desc: 'High-quality output' },
              { step: '06', title: 'Post-Production', desc: 'Editing and final touches' }
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

      /* CTA Section */
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to Create Your <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Animation?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's bring your vision to life with captivating 2D and 3D animations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full">
              <Link href="/contact">Start Your Animation</Link>
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