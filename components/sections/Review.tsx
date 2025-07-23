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

// Client reviews data
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

// Client logos data (corrected paths to /client/)
const clientLogos: ClientLogo[] = [
  { name: 'Vr2020 Dental', logo: 'https://www.bhatiorganisation.com/translogo.svg' },
  { name: 'Freelancer', logo: 'https://jagatfertilizer.in/logo.svg' },
  { name: 'Refast Company', logo: 'https://certificationsmaster.com/assets/images/logo/CF%20logo%20light.svg' },
  { name: 'B2B Business', logo: 'https://scontent.fdel61-1.fna.fbcdn.net/v/t39.30808-1/516799190_1254203600050216_1592938486368369034_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=EOAa7kG_7AUQ7kNvwHCTPZN&_nc_oc=Adm5TDKryhfzdHZhGvb0oPyfr3HyNaPdltmITpObgh4hGlGInEvgE7lqtNGuHodIjMQ&_nc_zt=24&_nc_ht=scontent.fdel61-1.fna&_nc_gid=zSPxdLy0F0lJ9YoFfbDSnw&oh=00_AfQ_tzawXiVKtsLtrr2xrQSeCn9DEiluhFR8k2t8oqyAUg&oe=688650B6' },
  { name: 'Bhati Organisation', logo: 'https://glamvibesaloon.com/images/glamvibe.svg' },
  { name: 'Mr. World', logo: 'https://www.goprimelink.com/images/FullLogo-removebg-preview-removebg-preview.png' },
  { name: 'Company 7', logo: 'https://www.krishisparsh.com/src/LOGO1%20(6).png' },
  { name: 'Company 8', logo: 'https://kfsfitness.com/assets/logo-Dfdg4uAr.png' },
  { name: 'Company 9', logo: 'https://www.krgroupsindia.com/assets/img/logo.png' },
  { name: 'Company 10', logo: 'https://www.saifloorcoatingindia.com/assets/img/Logo%20.png' },
  { name: 'Company 11', logo: 'https://www.shriradheautomobileindustries.com/assets/img/logo%20(7).png' },
  { name: 'Company 12', logo: 'https://phonebaazar.com/cdn/shop/files/WhatsApp_Image_2024-11-26_at_14.29.49_c7c1248a_ae894409-3539-413e-9d5d-cf22d93877c1.jpg?v=1734784252&width=180' },
  { name: 'Company 13', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBWZapsD10zdERWOOUwSN2IeRjgYuH_0jKg&s' },
  { name: 'Company 14', logo: 'data:image/png;base64,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' },
  { name: 'Company 15', logo: 'https://www.akshatphotography.com/logo.png' },
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
                    onError={(e) => {
                      e.currentTarget.src = '/client/fallback.png'; // Fallback image
                      console.error(`Failed to load image: ${client.logo}`);
                    }}
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
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
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