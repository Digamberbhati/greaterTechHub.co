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
            className="flex animate-marquee gap-4"
            style={{
              // Adjust animation duration based on number of logos
              animationDuration: `${5 + clientLogos.length * 0.2}s`,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex items-center justify-center h-[140px] w-[240px] rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0"
                role="button"
                aria-label={`View ${logo.alt} logo`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain opacity-90 hover:opacity-100 hover:scale-125 transition-all duration-300 max-w-[140px] max-h-[70px]"
                  priority={index < 4} // Prioritize first 4 logos
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
      `}</style>
    </section>
  );
}