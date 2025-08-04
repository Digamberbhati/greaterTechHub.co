// app/about/AboutClient.tsx
'use client';

import AboutPreview from '@/components/sections/AboutPreview';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutClient() {
  console.log('About page rendered');

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is GreaterTechHub’s primary focus?',
      answer:
        'GreaterTechHub specializes in delivering AI-powered IT solutions to transform businesses, focusing on scalability, innovation, and modern technology stacks to drive growth.',
    },
    {
      question: 'When was GreaterTechHub founded?',
      answer:
        'We were founded in 2023 with a vision to bridge business challenges with cutting-edge digital solutions, and we’ve since grown into a global leader in AI innovation.',
    },
    {
      question: 'What types of industries do you serve?',
      answer:
        'We serve a wide range of industries, including finance, healthcare, e-commerce, logistics, and more, providing tailored AI and tech solutions to meet unique needs.',
    },
    {
      question: 'How does GreaterTechHub ensure project quality?',
      answer:
        'Our team follows rigorous quality assurance processes, leveraging advanced AI tools and industry best practices to ensure 100% project delivery satisfaction.',
    },
    {
      question: 'What makes your AI solutions unique?',
      answer:
        'Our AI solutions are customized, scalable, and built with modern tech stacks, ensuring they are future-ready and aligned with your business goals.',
    },
    {
      question: 'Do you offer support after project completion?',
      answer:
        'Yes, we provide 24/7 global support to ensure your solutions run smoothly and evolve with your business needs.',
    },
    {
      question: 'How do you handle data security?',
      answer:
        'We prioritize enterprise-grade security, implementing robust encryption, compliance with global standards, and regular audits to protect your data.',
    },
    {
      question: 'Can you work with startups and small businesses?',
      answer:
        'Absolutely! We tailor our solutions to fit businesses of all sizes, from startups to enterprises, ensuring cost-effective and impactful results.',
    },
    {
      question: 'What is the typical timeline for a project?',
      answer:
        'Project timelines vary based on complexity, but we work closely with clients to set clear milestones and deliver efficiently, often within 3-6 months for standard projects.',
    },
    {
      question: 'How can I get started with GreaterTechHub?',
      answer:
        'Simply contact us through our website or book an appointment to discuss your needs. We’ll create a customized plan to drive your business forward.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-amber-900 text-white pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              About{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4A78D3] to-[#2596BE]">
                GreaterTechHub
              </span>
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-90">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              GreaterTechHub is an innovative startup driven by a passion for transforming businesses
              through{' '}
              <span className="font-semibold text-[#4A78D3]">AI-driven solutions</span> and
              modern technology. Founded with a mission to bridge the gap between business challenges
              and digital innovation, our team of expert developers, AI specialists, and strategists
              delivers cutting-edge solutions that empower our clients to thrive in a competitive
              world.
            </p>
          </div>
        </div>
      </section>

      {/* Story and Mission Section */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Story</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Launched in 2023, GreaterTechHub started as a small team with big dreams. Today, we’re
                a global leader in AI innovation, having delivered over{' '}
                <span className="font-semibold text-[#4A78D3]">700 impactful projects</span> using
                advanced AI and modern tech stacks, transforming businesses worldwide.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We aim to redefine business success by delivering{' '}
                <span className="font-semibold text-[#4A78D3]">AI-powered</span>, scalable, and
                future-ready solutions. Our commitment to innovation and excellence drives us to
                create technology that accelerates growth and unlocks new possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Why Partner with GreaterTechHub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-[#4A78D3]">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#4A78D3] mb-4">700+</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Projects Delivered</h3>
              <p className="text-base text-gray-700">Innovative solutions for global industries.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-[#4A78D3]">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#4A78D3] mb-4">99%</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-base text-gray-700">Trusted partnerships built on excellence.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-[#4A78D3]">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#4A78D3] mb-4">24/7</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Global Support</h3>
              <p className="text-base text-gray-700">Always ready to support your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <AboutPreview />

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl font-semibold">{faq.question}</h3>
                  <span>
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-[#4A78D3]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#4A78D3]" />
                    )}
                  </span>
                </div>
                {openFaq === index && (
                  <div className="mt-4 text-base text-gray-700 leading-relaxed animate-in fade-in duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-black to-amber-900 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Shape the Future with Us</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Join GreaterTechHub to unlock the potential of AI and modern technology. Let’s build a
            smarter, brighter future together.
          </p>
          <Button
            asChild
            className="inline-block px-8 py-3 bg-[#4A78D3] hover:bg-black text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/contact">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
