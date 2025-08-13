'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  CheckCircleIcon,
  TrophyIcon,
  UsersIcon,
  GlobeAltIcon,
  ClockIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const highlights = [
  {
    icon: CheckCircleIcon,
    title: 'Proven Excellence',
    description: '600+ successful projects delivered across diverse industries',
  },
  {
    icon: TrophyIcon,
    title: 'Award-Winning Team',
    description: 'Recognized for innovation and outstanding client satisfaction',
  },
  
  {
    icon: ClockIcon,
    title: 'One-Day Delivery',
    description: 'Delivering select services in just one day with precision and quality',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Rapid Project Delivery',
    description: 'Our fastest project delivery is one of our best services, ensuring speed without compromise',
  },
];

export default function AboutPreview() {
  const stats = [
    { value: 600, label: 'Projects' },
    { value: 350, label: 'Clients' },
    { value: 5, label: 'Years' },
    { value: null, label: 'Support', display: '24/7' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#4A78D3] to-[rgb(37,150,190)] bg-clip-text text-transparent">
                Why Choose GreaterTechHub
              </span>
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
              We're your technology partners, dedicated to transforming your digital vision into reality with innovative solutions and unmatched expertise.
            </p>

            <div className="space-y-6 mb-10">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 p-2 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <highlight.icon className="h-6 w-6 text-[#4A78D3]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-1 group-hover:text-[rgb(37,150,190)] transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-700">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-[#4A78D3] hover:bg-black text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-[8px_8px_16px_rgba(0,0,0,0.05),-8px_-8px_16px_rgba(255,255,255,0.8)]">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-5xl font-extrabold text-[#4A78D3] mb-2">
                      {stat.value !== null ? `${stat.value}+` : stat.display}
                    </div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-50/50 rounded-xl">
                <h4 className="font-semibold text-lg text-black mb-2">Our Mission</h4>
                <p className="text-sm text-gray-700">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.
                </p>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}