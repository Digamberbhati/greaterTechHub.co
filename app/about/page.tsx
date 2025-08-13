import type { Metadata } from 'next';
import AboutPreview from '@/components/sections/AboutPreview';
import FaqSection from '@/components/sections/FaqSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | GreaterTechHub',
  description: 'Learn more about GreaterTechHub, a leading IT company delivering innovative technology solutions.',
  alternates: {
    canonical: 'https://greatertechhub.com/about',
  },
  openGraph: {
    title: 'About | GreaterTechHub',
    description: 'Learn more about GreaterTechHub, a leading IT company delivering innovative technology solutions.',
    images: ['/Blacklogo.png'],
  },
};

export default function About() {
  return (
    <div className="bg-white min-h-screen font-sans text-black">
      {/* Hero Section */}
      <section className="relative bg-gray-50 pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4A78D3] to-[rgb(37,150,190)]">
                About GreaterTechHub
              </span>
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto text-slate-600">
              A visionary startup crafting AI-powered solutions to shape the future of business.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white rounded-t-[40px]" />
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-900">Who We Are</h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              GreaterTechHub is an innovative startup driven by a passion for transforming businesses
              through <span className="font-semibold text-blue-900">AI-driven solutions</span> and
              modern technology. Founded with a mission to bridge the gap between business challenges
              and digital innovation, our team of expert developers, AI specialists, and strategists
              delivers cutting-edge solutions that empower our clients to thrive in a competitive
              world.
            </p>
          </div>
        </div>
      </section>

      {/* Story and Mission Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900">Our Story</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Launched in 2023, GreaterTechHub started as a small team with big dreams. Today, we’re
                a global leader in AI innovation, having delivered over{' '}
                <span className="font-semibold text-blue-900">700 impactful projects</span> using
                advanced AI and modern tech stacks, transforming businesses worldwide.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900">Our Mission</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                We aim to redefine business success by delivering{' '}
                <span className="font-semibold text-blue-900">AI-powered</span>, scalable, and
                future-ready solutions. Our commitment to innovation and excellence drives us to
                create technology that accelerates growth and unlocks new possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-900">
            Why Partner with GreaterTechHub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-blue-900">
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4">700+</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-900">Projects Delivered</h3>
              <p className="text-base text-slate-600">Innovative solutions for global industries.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-blue-900">
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4">99%</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-900">Client Satisfaction</h3>
              <p className="text-base text-slate-600">Trusted partnerships built on excellence.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-blue-900">
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4">24/7</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-900">Global Support</h3>
              <p className="text-base text-slate-600">Always ready to support your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <AboutPreview />

      {/* FAQ Section */}
      <FaqSection />

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-900">Shape the Future with Us</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-slate-600">
            Join GreaterTechHub to unlock the potential of AI and modern technology. Let’s build a
            smarter, brighter future together.
          </p>
          <Button
            asChild
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/contact">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}