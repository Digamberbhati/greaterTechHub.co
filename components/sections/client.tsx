'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';

// Client logos data (replace src with actual logo URLs)
const clientLogos = [
  { src: 'https://cdn.worldvectorlogo.com/logos/adobe.svg', alt: 'Adobe', width: 120, height: 60 },
  { src: 'https://cdn.worldvectorlogo.com/logos/microsoft-6.svg', alt: 'Microsoft', width: 120, height: 60 },
  { src: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg', alt: 'Google', width: 120, height: 60 },
  { src: 'https://cdn.worldvectorlogo.com/logos/amazon-2.svg', alt: 'Amazon', width: 120, height: 60 },
  { src: 'https://cdn.worldvectorlogo.com/logos/ibm.svg', alt: 'IBM', width: 120, height: 60 },
  { src: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg', alt: 'Oracle', width: 120, height: 60 },
  { src: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg', alt: 'Salesforce', width: 120, height: 60 },
];

export default function Client() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
          Our Trusted Partners
        </h2>
        <Marquee
          pauseOnHover={true}
          speed={50}
          gradient={false}
          className="overflow-hidden"
        >
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="mx-8 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}