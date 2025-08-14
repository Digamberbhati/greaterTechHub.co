'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming shadcn/ui or similar

const taglines = [
  'Innovate with GreaterTechHub',
  'Empower Your Future with GreaterTechHub',
  'Build Tomorrow with GreaterTechHub',
  'Unleash Possibilities with GreaterTechHub',
];

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);

  // Hook for cycling taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000); // Change tagline every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen flex items-start justify-center px-4 pt-24 bg-white text-gray-800 font-sans overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(74,120,211,0.15)_0%,rgba(37,150,190,0)_70%)] animate-[rotate_20s_linear_infinite]" />

      <div className="relative z-10 max-w-3xl text-center mt-12 animate-[fadeIn_1s_ease-in-out]">
        {/* Tagline */}
        <div className="h-[32px] mb-6">
          <span
            key={currentTagline}
            className="text-[#4A78D3] text-xl md:text-2xl font-semibold animate-[fadeInOut_3s_infinite]"
          >
            {taglines[currentTagline]}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 bg-gradient-to-r from-[#4A78D3] to-[rgb(37,150,190)] bg-clip-text text-transparent">
          Tech Solutions for Tomorrow's Success
        </h1>

        {/* Description */}
        <p className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed text-gray-700">
          Get projects delivered at lightning speed. We complete services in just 1 day, powered by AI for faster development and exceptional results.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-16 flex-col sm:flex-row">
          <Button
            asChild
            className="px-10 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-[#4A78D3] to-[rgb(37,150,190)] hover:from-[#3b62b0] hover:to-[rgb(30,120,152)] text-white border-none shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/book">Join Us</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-10 py-4 text-lg font-semibold rounded-full border-2 border-[#4A78D3] text-[#4A78D3] hover:bg-[#4A78D3] hover:text-white transition-all duration-300"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center gap-8 flex-wrap">
          {/* Stat Item 1: Project Delivery */}
          <div className="bg-white p-6 rounded-2xl flex items-center gap-4 min-w-[220px] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-[#4A78D3]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-10 h-10">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm font-medium text-gray-600">Project Delivery</div>
            </div>
          </div>

          {/* Stat Item 2: Active Projects */}
          <div className="bg-white p-6 rounded-2xl flex items-center gap-4 min-w-[220px] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-[#4A78D3]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-10 h-10">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-gray-900">150+</div>
              <div className="text-sm font-medium text-gray-600">Active Projects</div>
            </div>
          </div>

          {/* Stat Item 3: Uptime */}
          <div className="bg-white p-6 rounded-2xl flex items-center gap-4 min-w-[220px] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-[#4A78D3]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-10 h-10">
                <path d="M5.086 1.136A.5.5 0 0 1 5.586 1h4.828a.5.5 0 0 1 .5.364L11 2.382V13.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V2.382l.086-.882zM6 2v1h4V2H6zm-1 2v9.5A1.5 1.5 0 0 0 6.5 15h3A1.5 1.5 0 0 0 11 13.5V4H5z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm font-medium text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Define keyframes for animations */}
      <style jsx global>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0;
            transform: translateY(10px);
          }
          10%, 90% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Apply the new font stack globally */
        .font-sans {
          font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }

        /* Smooth transitions for text */
        h1, p, span {
          transition: color 0.3s ease, transform 0.3s ease;
        }
      `}</style>
    </main>
  );
}