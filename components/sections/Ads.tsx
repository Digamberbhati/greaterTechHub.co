'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Single offer data (replace with actual offer and image URL)
const weeklyOffer = {
  title: '30% Off This Week',
  description: 'Unlock premium features with GreaterTechHub! Get 30% off any annual plan and elevate your experience. Limited time offer!',
  image: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  ctaText: 'Claim Offer Now',
  ctaLink: '/offers/annual',
  // Added four points for the offer
  points: [
    'Access to exclusive premium content',
    'Priority customer support',
    'Ad-free experience',
    'Unlimited downloads and resources',
  ],
};

export default function WeeklyOffer() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Weekly Offer Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            This Week’s Exclusive Offer
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don’t miss out! Grab this limited-time deal before it’s gone.
          </p>
        </div>

        {/* Offer Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center">
          {/* Left: Text Content */}
          <div className="md:w-1/2 p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {weeklyOffer.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {weeklyOffer.description}
            </p>
            {/* Four Points */}
            <ul className="mb-6 space-y-3">
              {weeklyOffer.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0"
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
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <Link href={weeklyOffer.ctaLink}>{weeklyOffer.ctaText}</Link>
            </Button>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2">
            <Image
              src={weeklyOffer.image}
              alt={weeklyOffer.title}
              width={600}
              height={400}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}