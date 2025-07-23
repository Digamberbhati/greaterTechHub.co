'use client';

import { useEffect, useRef, useState } from 'react';

// Define review type for TypeScript
interface ClientReview {
  name: string;
  role: string;
  review: string;
  rating: number;
  image?: string; // Optional image for reviewer
}

// Define logo type for TypeScript
interface ClientLogo {
  name: string;
  logo: string;
}

// Client reviews data (unchanged, 6 reviews)
const clientReviews: ClientReview[] = [
  {
    name: 'Rahul Rajput',
    role: 'CDT, Vr2020 Dental Designing Solutions & Digital Laboratory Pvt. Ltd',
    review: 'The digital marketing team has done a great job with our social media presence. The content is engaging and reflects our brand well.',
    rating: 4,
  },
  {
    name: 'John Ray',
    role: 'Freelancer',
    review: 'While the IT services are generally good, there have been instances where the response time could have been faster.',
    rating: 3,
  },
  {
    name: 'Vishal',
    role: 'Owner, Refast Company',
    review: 'The IT services team has been instrumental in implementing new technologies that have improved our productivity.',
    rating: 5,
  },
  {
    name: 'Ravi Kumar',
    role: 'Owner, B2B Business',
    review: 'I appreciate the proactive approach of the IT services team. They often identify and address issues before they become major problems.',
    rating: 5,
  },
  {
    name: 'Anil Bhati',
    role: 'Business Manager, Bhati Organisation',
    review: 'GreaterTechHub’s services have been reliable, and their team’s dedication to our projects has significantly improved our operational efficiency.',
    rating: 4,
  },
  {
    name: 'Lokesh Singh Rajput',
    role: 'Mr. World',
    review: 'GreaterTechHub’s innovative solutions and exceptional support have elevated our business to new heights.',
    rating: 5,
  },
];

// Client logos data (15 logos)
const clientLogos: ClientLogo[] = [
  { name: 'Vr2020 Dental', logo: '/logos/vr2020.png' },
  { name: 'Freelancer', logo: '/logos/freelancer.png' },
  { name: 'Refast Company', logo: '/logos/refast.png' },
  { name: 'B2B Business', logo: '/logos/b2b.png' },
  { name: 'Bhati Organisation', logo: '/logos/bhati.png' },
  { name: 'Mr. World', logo: '/logos/mrworld.png' },
  { name: 'Company 7', logo: '/logos/company7.png' },
  { name: 'Company 8', logo: '/logos/company8.png' },
  { name: 'Company 9', logo: '/logos/company9.png' },
  { name: 'Company 10', logo: '/logos/company10.png' },
  { name: 'Company 11', logo: '/logos/company11.png' },
  { name: 'Company 12', logo: '/logos/company12.png' },
  { name: 'Company 13', logo: '/logos/company13.png' },
  { name: 'Company 14', logo: '/logos/company14.png' },
  { name: 'Company 15', logo: '/logos/company15.png' },
];

export default function Reviews() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Marquee animation logic
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return; // Early return if ref is null

    const scrollWidth = marquee.scrollWidth / 2; // Half for duplicated content
    let animationFrame: number;

    const animate = () => {
      if (!isPaused) {
        marquee.scrollLeft += 0.5; // Slower speed for smoother scrolling
        if (marquee.scrollLeft >= scrollWidth) {
          marquee.scrollLeft = 0; // Reset for seamless loop
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="py-12 bg-white w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos Section */}
        <div className="mb-12">
          <h3 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Our Trusted Clients
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-gray-100 rounded-lg p-4 h-24 sm:h-32"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-16 sm:max-h-20 object-contain"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">No Logo</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Hear from our satisfied users who love GreaterTechHub!
          </p>
        </div>

        {/* Marquee Container for Reviews */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)} // Pause on touch for mobile
          onTouchEnd={() => setIsPaused(false)} // Resume on touch release
        >
          <div
            ref={marqueeRef}
            className="flex space-x-4 sm:space-x-6 py-6 overflow-x-auto no-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Duplicate reviews for seamless scrolling */}
            {[...clientReviews, ...clientReviews].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 sm:w-80 bg-gray-50 rounded-lg shadow-md p-5 sm:p-6"
              >
                {/* Star Rating */}
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.27 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
                {/* Review Text */}
                <p className="text-gray-600 mb-3 sm:mb-4 italic text-sm sm:text-base">"{review.review}"</p>
                <div>
                  <p className="text-gray-900 font-semibold text-sm sm:text-base">{review.name}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}