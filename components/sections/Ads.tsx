'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Offer data with multiple images
const weeklyOffer = {
  title: '30% Off This Week',
  description: 'Unlock premium features with GreaterTechHub! Get 30% off any annual plan and elevate your experience. Limited time offer!',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Technology offer 1',
    },
    {
      url: 'https://images.unsplash.com/photo-1516321310762-479437144403?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Technology offer 2',
    },
    {
      url: 'https://images.unsplash.com/photo-1593642634367-d91a5d8e3527?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Technology offer 3',
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Technology offer 4',
    },
  ],
  ctaText: 'Claim Offer Now',
  ctaLink: '/offers/annual',
  points: [
    'Access to exclusive premium content',
    'Priority customer support',
    'Ad-free experience',
    'Unlimited downloads and resources',
  ],
};

export default function WeeklyOffer() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to start or restart auto-rotation
  const startAutoRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % weeklyOffer.images.length
      );
    }, 5000); // Change every 5 seconds
  };

  // Start auto-rotation on mount
  useEffect(() => {
    if (isAutoRotating) {
      startAutoRotation();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoRotating]);

  // Handle manual image navigation
  const handlePrevious = () => {
    setIsAutoRotating(false); // Pause auto-rotation
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? weeklyOffer.images.length - 1 : prevIndex - 1
    );
    // Resume auto-rotation after 10 seconds
    setTimeout(() => {
      setIsAutoRotating(true);
    }, 10000);
  };

  const handleNext = () => {
    setIsAutoRotating(false); // Pause auto-rotation
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % weeklyOffer.images.length
    );
    // Resume auto-rotation after 10 seconds
    setTimeout(() => {
      setIsAutoRotating(true);
    }, 10000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Weekly Offer Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight">
            This Week’s Exclusive Offer
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Don’t miss out! Grab this limited-time deal before it’s gone.
          </p>
        </div>

        {/* Offer Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center">
          {/* Left: Text Content */}
          <div className="md:w-1/2 p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              {weeklyOffer.title}
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {weeklyOffer.description}
            </p>
            {/* Four Points */}
            <ul className="mb-6 space-y-3">
              {weeklyOffer.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-900 mr-2 flex-shrink-0"
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
              className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={weeklyOffer.ctaLink}>{weeklyOffer.ctaText}</Link>
            </Button>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 relative">
            {weeklyOffer.images.map((image, index) => (
              <Image
                key={index}
                src={image.url}
                alt={image.alt}
                width={600}
                height={400}
                className={`w-full h-64 md:h-96 object-cover transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute'
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
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              onClick={handlePrevious}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </Button>
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white text-blue-900 text-sm px-3 py-1 rounded-md border border-blue-900/20 shadow-md transition-opacity duration-200">
              Offer Previous
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-900/20"></span>
            </span>
          </div>
          <div className="relative group">
            <Button
              variant="outline"
              size="sm"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              onClick={handleNext}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white text-blue-900 text-sm px-3 py-1 rounded-md border border-blue-900/20 shadow-md transition-opacity duration-200">
              Offer Next
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-900/20"></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}