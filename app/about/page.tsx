import type { Metadata } from 'next';
import AboutPreview from '@/components/sections/AboutPreview';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'About GreaterTechHub | AI-Powered IT Solutions Startup',
  description:
    'Discover GreaterTechHub, a dynamic startup revolutionizing businesses with AI-driven IT solutions and modern technology for a smarter future.',
  keywords: ['GreaterTechHub', 'AI solutions', 'IT startup', 'modern technology', 'innovation'],
  openGraph: {
    title: 'About GreaterTechHub',
    description: 'Learn how we empower businesses with AI and cutting-edge tech.',
    url: 'https://www.greatertechhub.com/about',
    type: 'website',
  },
};

export default function About() {
  console.log('About page rendered');

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-amber-900 text-white pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-600">GreaterTechHub</span>
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-90">
              A visionary startup crafting AI-powered solutions to shape the future of business.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white rounded-t-[40px]"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Who We Are</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              GreaterTechHub is an innovative startup driven by a passion for transforming businesses through <span className="font-semibold text-amber-600">AI-driven solutions</span> and modern technology. Founded with a mission to bridge the gap between business challenges and digital innovation, our team of expert developers, AI specialists, and strategists delivers cutting-edge solutions that empower our clients to thrive in a competitive world.
            </p>
          </div>
        </div>
      </section>

      {/* Story and Mission Section */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Our Story */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">Our Story</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Launched in 2023, GreaterTechHub started as a small team with big dreams. Today, we’re a global leader in AI innovation, having delivered over <span className="font-semibold text-amber-600">700 impactful projects</span> using advanced AI and modern tech stacks, transforming businesses worldwide.
              </p>
            </div>
            {/* Our Mission */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We aim to redefine business success by delivering <span className="font-semibold text-amber-600">AI-powered</span>, scalable, and future-ready solutions. Our commitment to innovation and excellence drives us to create technology that accelerates growth and unlocks new possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-12">Why Partner with GreaterTechHub</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-amber-600">
              <div className="text-4xl sm:text-5xl font-extrabold text-amber-600 mb-4">700+</div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">Projects Delivered</h3>
              <p className="text-base text-gray-700">Innovative solutions for global industries.</p>
            </div>
            {/* Card 2 */}
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-amber-600">
              <div className="text-4xl sm:text-5xl font-extrabold text-amber-600 mb-4">99%</div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">Client Satisfaction</h3>
              <p className="text-base text-gray-700">Trusted partnerships built on excellence.</p>
            </div>
            {/* Card 3 */}
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-amber-600">
              <div className="text-4xl sm:text-5xl font-extrabold text-amber-600 mb-4">24/7</div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">Global Support</h3>
              <p className="text-base text-gray-700">Always ready to support your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Component */}
      <AboutPreview />

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-black to-amber-900 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Shape the Future with Us</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Join GreaterTechHub to unlock the potential of AI and modern technology. Let’s build a smarter, brighter future together.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 sm:px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-300"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
}