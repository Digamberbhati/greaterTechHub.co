import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - GreaterTechHub | Leading IT Solutions Company',
  description: 'Learn about GreaterTechHub, our mission, vision, and the expert team delivering innovative technology solutions worldwide.',
}

export default function About() {
  console.log('About page rendered');

  return (
    <div className="pt-24 min-h-screen">
      <div className="mx-auto max-w-7xl container-padding section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            About <span className="gradient-text">GreaterTechHub</span>
          </h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            We're a leading IT solutions company dedicated to transforming businesses 
            through innovative technology and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Story</h2>
            <p className="text-brand-gray mb-4">
              Founded with a vision to bridge the gap between business needs and technology solutions, 
              GreaterTechHub has grown into a trusted partner for companies worldwide.
            </p>
            <p className="text-brand-gray">
              With over 500 successful projects and a team of expert developers, designers, and 
              strategists, we continue to push the boundaries of what's possible in the digital world.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Mission</h2>
            <p className="text-brand-gray mb-4">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation in the digital age.
            </p>
            <p className="text-brand-gray">
              We believe in creating lasting partnerships with our clients, delivering not just 
              projects, but comprehensive solutions that evolve with their business needs.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-brand-blue mb-4">500+</div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Projects Completed</h3>
              <p className="text-brand-gray">Successfully delivered across various industries</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-brand-blue mb-4">50+</div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Happy Clients</h3>
              <p className="text-brand-gray">Long-term partnerships built on trust</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-brand-blue mb-4">24/7</div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Support Available</h3>
              <p className="text-brand-gray">Round-the-clock assistance when you need it</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}