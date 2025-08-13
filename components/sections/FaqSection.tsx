// app/components/sections/FaqSection.tsx
"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
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

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer border border-blue-900/20"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">{faq.question}</h3>
                <span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-900" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-900" />
                  )}
                </span>
              </div>
              {openFaq === index && (
                <div className="mt-4 text-base text-slate-600 leading-relaxed animate-in fade-in duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}