'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// MODIFIED: Data structure to handle multiple offers
const serviceOffers = [
  {
    serviceName: 'Website Development',
    title: '30% Off on Web Development',
    description: 'Get a stunning, high-performance website tailored for your business. Our experts build responsive, SEO-friendly sites that drive results.',
    image: '/ads/web.png',
    ctaLink: '/services/website-development',
    points: [
      'Modern & Responsive Design',
      'SEO-Optimized from the start',
      'Fast loading speeds for better UX',
      'Custom features to fit your needs',
    ],
  },
  {
    serviceName: 'AI Agents & Chatbots',
    title: '15% Off on AI Solutions',
    description: 'Automate workflows and enhance customer support with our custom AI agents and chatbots. Provide 24/7 service and boost efficiency.',
    image: '/ads/ai.png',
    ctaLink: '/services/ai-solutions',
    points: [
      '24/7 Automated Customer Support',
      'Streamline internal processes',
      'Data-driven insights and analytics',
      'Seamless integration with your systems',
    ],
  },
  {
    serviceName: 'Digital Marketing',
    title: '30% Off on Digital Marketing',
    description: 'Boost your online presence and reach more customers. Our expert digital marketing strategies will help you dominate search rankings.',
    image: '/ads/digital.png',
    ctaLink: '/services/digital-marketing',
    points: [
      'Higher rankings on Google (SEO)',
      'Increased organic website traffic',
      'Effective social media campaigns',
      'Comprehensive performance reports',
    ],
  },
];

export default function WeeklyOffer() {
  // MODIFIED: State now tracks the current offer index
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % serviceOffers.length);
    }, 5000);
  };

  useEffect(() => {
    if (isAutoRotating) {
      startAutoRotation();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoRotating]);

  const handlePrevious = () => {
    setIsAutoRotating(false);
    setCurrentOfferIndex((prevIndex) =>
      prevIndex === 0 ? serviceOffers.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const handleNext = () => {
    setIsAutoRotating(false);
    setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % serviceOffers.length);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  // MODIFIED: Get the current offer based on the index
  const currentOffer = serviceOffers[currentOfferIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* MODIFIED: More general heading */}
          <h2 className="text-4xl font-extrabold text-[#4A78D3] tracking-tight">
            This Week’s Exclusive Offers
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Don’t miss out! Grab these limited-time deals before they’re gone.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center">
          {/* Left: Text Content (Now dynamic) */}
          <div className="md:w-1/2 p-8 lg:p-12 order-2 md:order-1">
            <h3 className="text-3xl font-bold text-[#4A78D3] mb-4">
              {currentOffer.title}
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {currentOffer.description}
            </p>
            <ul className="mb-6 space-y-3">
              {currentOffer.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#4A78D3] mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">{point}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#4A78D3] to-[rgb(37,150,190)] hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={currentOffer.ctaLink}>Claim Offer</Link>
            </Button>
          </div>

          {/* Right: Image Container (Now dynamic) */}
          <div className="md:w-1/2 w-full relative aspect-[3/2] order-1 md:order-2">
            {serviceOffers.map((offer, index) => (
              <Image
                key={offer.serviceName}
                src={offer.image}
                alt={offer.title}
                fill
                className={`object-cover transition-opacity duration-700 ease-in-out ${
                  index === currentOfferIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
           <div className="relative group">
            <Button
              variant="outline"
              size="sm"
              className="border-[#4A78D3] text-[#4A78D3] hover:bg-[#4A78D3] hover:text-white"
              onClick={handlePrevious}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </Button>
             <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white text-[#4A78D3] text-sm px-3 py-1 rounded-md border border-gray-200 shadow-md">
              Previous
            </span>
          </div>
          <div className="relative group">
            <Button
              variant="outline"
              size="sm"
              className="border-[#4A78D3] text-[#4A78D3] hover:bg-[#4A78D3] hover:text-white"
              onClick={handleNext}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
             <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white text-[#4A78D3] text-sm px-3 py-1 rounded-md border border-gray-200 shadow-md">
              Next
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}