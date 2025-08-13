import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutPreview from '@/components/sections/AboutPreview';
import ContactCTA from '@/components/sections/ContactCTA';
import Ads from '@/components/sections/Ads';
import Reviews from '@/components/sections/Review';

export const metadata: Metadata = {
  title: 'Home | GreaterTechHub',
  description: 'Welcome to GreaterTechHub, your trusted partner for IT services and technology solutions.',
  alternates: {
    canonical: 'https://greatertechhub.com',
  },
  openGraph: {
    title: 'Home | GreaterTechHub',
    description: 'Welcome to GreaterTechHub, your trusted partner for IT services and technology solutions.',
    images: ['/Blacklogo.png'],
  },
};

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <Ads />
      <AboutPreview />
      <ServicesSection />
      <Reviews />
      <ContactCTA />
    </div>
  );
}