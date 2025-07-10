'use client';

import Image from 'next/image';

// Define logo data with explicit types for clarity (JavaScript with JSDoc)
/** @type {Array<{ src: string, alt: string, width: number, height: number }>} */
const clientLogos = [
  { src: '/clients/bhati orgainsation.png', alt: 'Bhati Organisation', width: 220, height: 110 },
  { src: '/clients/jagat fatilizer.png', alt: 'Jagat Fertilizer', width: 220, height: 110 },
  { src: '/clients/krgroups.png', alt: 'KR Groups', width: 220, height: 110 },
  { src: '/clients/krishi.png', alt: 'Krishi', width: 220, height: 110 },
  { src: '/clients/allaboutfoodist.png', alt: 'All About Foodish', width: 220, height: 110 },
  { src: '/clients/glamvibe.png', alt: 'Glamvibe', width: 220, height: 110 },
  { src: '/clients/lokesh.png', alt: 'Lokesh Enterprises', width: 220, height: 110 },
  { src: '/clients/auto.png', alt: 'Auto Solutions', width: 220, height: 110 },
  { src: '/clients/certificate.png', alt: 'Certificate Academy', width: 220, height: 110 },
  { src: '/clients/ingo.png', alt: 'Ingo Technologies', width: 220, height: 110 },
  { src: '/clients/goprimelink.png', alt: 'Go Prime Link', width: 220, height: 110 },
  { src: '/clients/mamta.png', alt: 'Mamta Industries', width: 220, height: 110 },
  { src: '/clients/phonebaazar.png', alt: 'Phone Baazar', width: 220, height: 110 },
  { src: '/clients/sfci.png', alt: 'SFCI Corporation', width: 220, height: 110 },
  { src: '/clients/sofsecure.png', alt: 'Sofsecure Systems', width: 220, height: 110 },
  { src: '/clients/vrdental.png', alt: 'VR Dental Clinic', width: 220, height: 110 },
  { src: '/clients/kfs.png', alt: 'KFS Services', width: 220, height: 110 },
];

export default function Client() {
  // Duplicate logos for seamless looping
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-20 bg-gray-50" aria-label="Trusted Partners">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16 tracking-tight">
          Our Trusted Partners
        </h2>
        <div className="overflow-hidden">
          <div
            className="flex animate-marquee gap-6" // Increased gap for better spacing
            style={{
              animationDuration: `${10 + clientLogos.length * 0.3}s`, // Slower animation for smoother effect
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex items-center justify-center h-[160px] w-[260px] rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0"
                role="button"
                aria-label={`View ${logo.alt} logo`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transform scale-110 hover:scale-125 transition-all duration-300 max-w-[160px] max-h-[80px]" // Default scale of 1.1 (110%) for slight zoom
                  priority={index < 4} // Prioritize first 4 logos for faster loading
                  quality={85}
                  onError={(e) => {
                    e.currentTarget.src = '/clients/fallback.png';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee linear infinite;
          will-change: transform; /* Optimize animation performance */
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause animation on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-marquee {
            gap: 4px;
          }
          .animate-marquee > div {
            height: 120px;
            width: 180px;
          }
          .animate-marquee img {
            max-width: 120px;
            max-height: 60px;
          }
        }
      `}</style>
    </section>
  );
}