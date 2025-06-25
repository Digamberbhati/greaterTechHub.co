'use client';

import { useEffect, useRef, useState } from 'react';

// Define review type for TypeScript
interface ClientReview {
  name: string;
  role: string;
  review: string;
  rating: number;
  image?: string; // Optional image for reviewer (if needed)
}

// Updated client reviews data
const clientReviews: ClientReview[] = [
  {
    name: 'Amit Sharma',
    role: 'Founder, EduTech Startup (India)',
    review: 'GreaterTechHub built our e-learning website with seamless functionality and a modern design. Their team delivered on time and exceeded our expectations!',
    rating: 5,
  },
  {
    name: 'Priya Malhotra',
    role: 'Marketing Head, Retail Chain (India)',
    review: 'Their social media branding strategy boosted our online presence significantly. GreaterTechHub’s creativity and analytics-driven approach are unmatched.',
    rating: 4,
  },
  {
    name: 'Rahul Desai',
    role: 'CTO, FinTech Company (India)',
    review: 'GreaterTechHub’s DevOps services streamlined our deployment process. Their expertise in CI/CD pipelines saved us time and resources.',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    role: 'Operations Manager, BPO Firm (India)',
    review: 'Their BPO services helped us scale customer support efficiently. GreaterTechHub’s team is professional and responsive, making our operations smoother.',
    rating: 4,
  },
  {
    name: 'Vikram Singh',
    role: 'CEO, Content Agency (India)',
    review: 'As a third-party content provider, we rely on GreaterTechHub for tech support. Their platform integration and priority support are game-changers.',
    rating: 5,
  },
  {
    name: 'Emma Wilson',
    role: 'Product Lead, HealthTech Startup (USA)',
    review: 'GreaterTechHub developed our mobile app with a user-friendly interface and robust features. Their attention to detail made our launch a success!',
    rating: 5,
  },
  {
    name: 'Liam Carter',
    role: 'Marketing Director, E-commerce Brand (UK)',
    review: 'Their digital marketing campaigns drove impressive ROI for our brand. GreaterTechHub’s global expertise helped us reach new audiences effectively.',
    rating: 4,
  },
  {
    name: 'Sophie Dubois',
    role: 'IT Manager, Logistics Firm (France)',
    review: 'GreaterTechHub’s BPO and IT support services optimized our operations. Their team’s professionalism and quick response times are highly commendable.',
    rating: 5,
  },
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
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Hear from our satisfied users who love GreaterTechHub!
          </p>
        </div>

        {/* Marquee Container */}
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