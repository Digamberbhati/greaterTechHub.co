// components/ClientLogos.tsx
'use client';

import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';

// Define types for logo data
interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const LOGOS: Logo[] = [
  { src: '/clients/bhati-organisation.png', alt: 'Bhati Organisation', width: 220, height: 110 },
  { src: '/clients/jagat-fertilizer.png', alt: 'Jagat Fertilizer', width: 220, height: 110 },
  { src: '/clients/krgroups.png', alt: 'KR Groups', width: 220, height: 110 },
  { src: '/clients/krishi.png', alt: 'Krishi', width: 220, height: 110 },
  { src: '/clients/allaboutFoodist.png', alt: 'all', width: 220, height: 110 },
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

// Component to render individual logo
const LogoItem: FC<{ logo: Logo; index: number }> = ({ logo, index }) => (
  <div
    className="flex items-center justify-center h-[140px] w-[240px] rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 flex-shrink-0"
    aria-label={`Client logo: ${logo.alt}`}
  >
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      className="object-contain max-w-[160px] max-h-[80px]"
      priority={index < 4}
      quality={75}
      onError={(e) => {
        e.currentTarget.src = '/clients/fallback.png';
      }}
    />
  </div>
);

// Main Client Logos component
const Client: FC = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedLogos = [...LOGOS, ...LOGOS];

  // Marquee animation logic
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const scrollWidth = marquee.scrollWidth / 2; // Half for duplicated content
    let animationFrame: number;

    const animate = () => {
      if (!isPaused) {
        marquee.scrollLeft += 0.5; // Slower speed for smooth scrolling
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
    <section className="py-16 bg-gray-100" aria-label="Trusted Partners">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Trusted Partners
        </h2>
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={marqueeRef}
            className="flex gap-4 sm:gap-6 py-6 overflow-x-auto no-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {duplicatedLogos.map((logo, index) => (
              <LogoItem key={`${logo.alt}-${index}`} logo={logo} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;