'use client';

import { useEffect, useRef, useState } from 'react';

// Define review type for TypeScript
interface ClientReview {
  name: string;
  role: string;
  review: string;
  rating: number;
  location: string;
  image?: string;
}

// Client reviews data with location
const clientReviews: ClientReview[] = [
  {
    name: 'Rahul Rajput',
    role: 'CDT, Vr2020 Dental Designing Solutions & Digital Laboratory Pvt. Ltd',
    review: 'The digital marketing team has done a great job with our social media presence. The content is engaging and reflects our brand well.',
    rating: 4,
    location: 'Mumbai, India',
  },
  {
    name: 'John Ray',
    role: 'Freelancer',
    review: 'While the IT services are generally good, there have been instances where the response time could have been faster.',
    rating: 3,
    location: 'New York, USA',
  },
  {
    name: 'Vishal',
    role: 'Owner, Refast Company',
    review: 'The IT services team has been instrumental in implementing new technologies that have improved our productivity.',
    rating: 5,
    location: 'Delhi, India',
  },
  {
    name: 'Ravi Kumar',
    role: 'Owner, B2B Business',
    review: 'I appreciate the proactive approach of the IT services team. They often identify and address issues before they become major problems.',
    rating: 5,
    location: 'Bangalore, India',
  },
  {
    name: 'Anil Bhati',
    role: 'Business Manager, Bhati Organisation',
    review: 'GreaterTechHub’s services have been reliable, and their team’s dedication to our projects has significantly improved our operational efficiency.',
    rating: 4,
    location: 'Jaipur, India',
  },
  {
    name: 'Lokesh Singh Rajput',
    role: 'Mr. World',
    review: 'GreaterTechHub’s innovative solutions and exceptional support have elevated our business to new heights.',
    rating: 5,
    location: 'London, UK',
  },
];

// Client logos array with 15 URLs (replace placeholders with actual filenames)
const clientLogos = [
  { url: '/clients/bhati-organisation.png', alt: 'Bhati Organisation' },
  { url: '/clients/krishi.png', alt: 'Certificate' },
  { url: '/clients/allaboutfoodist.png', alt: 'All About Foodist' },
  { url: '/clients/sfci.png', alt: 'SFCI' },
  { url: '/clients/glamvibe.png', alt: 'Glamvibe' },
  { url: '/clients/goprimelink.png', alt: 'Goprimelink' },
  { url: '/clients/lokesh.png', alt: 'Lokesh' },
  { url: '/clients/jagat-fertilizer.png', alt: 'Jagat Fertilizer' },
  { url: '/clients/kfs.png', alt: 'KFS' },
  { url: '/clients/krgroups.png', alt: 'KR Groups' },
  { url: '/clients/vrdental.png', alt: 'VR Dental' },
  { url: '/clients/phonebaazar.png', alt: 'Phone Baazar' },
  { url: '/clients/sofsecure.png', alt: 'Client 13' }, // Placeholder
  { url: '/clients/mamta.png', alt: 'Client 14' }, // Placeholder
  { url: '/clients/auto.png', alt: 'Client 15' }, // Placeholder
];

export default function Reviews() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Marquee animation logic for reviews
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const scrollWidth = marquee.scrollWidth / 2;
    let animationFrame: number;

    const animate = () => {
      if (!isPaused) {
        marquee.scrollLeft += 0.3;
        if (marquee.scrollLeft >= scrollWidth) {
          marquee.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="py-8 bg-white w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Trusted Clients
          </h2>
          <p className="mt-2 text-sm xs:text-base sm:text-lg text-gray-600">
            Proud to work with these amazing companies
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-gray-100 rounded-lg p-4 sm:p-6 h-20 sm:h-24 cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-125"
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="max-h-12 sm:max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-sm xs:text-base sm:text-lg text-gray-600">
            Hear from our satisfied users who love GreaterTechHub!
          </p>
        </div>

        {/* Marquee Container for Reviews */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={marqueeRef}
            className="flex space-x-3 xs:space-x-4 sm:space-x-6 py-4 sm:py-6 overflow-x-auto no-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {[...clientReviews, ...clientReviews].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 xs:w-72 sm:w-80 bg-gray-50 rounded-lg shadow-md p-4 xs:p-5 sm:p-6"
              >
                <div className="flex items-center mb-2 xs:mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 ${
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
                <p className="text-gray-600 mb-2 xs:mb-3 sm:mb-4 italic text-xs xs:text-sm sm:text-base">
                  "{review.review}"
                </p>
                <div>
                  <p className="text-gray-900 font-semibold text-xs xs:text-sm sm:text-base">
                    {review.name}
                  </p>
                  <p className="text-gray-500 text-[10px] xs:text-xs sm:text-sm">
                    {review.role}
                  </p>
                  <p className="text-gray-500 text-[10px] xs:text-xs sm:text-sm">
                    {review.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}