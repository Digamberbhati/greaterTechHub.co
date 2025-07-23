import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutPreview from '@/components/sections/AboutPreview';
import ContactCTA from '@/components/sections/ContactCTA';
import Ads from '@/components/sections/Ads';
import Reviews from '@/components/sections/Review';
// import Client from '@/components/sections/Client';

export default function Home() {
  console.log('Home page rendered');

  return (
    <>
      <HeroSection />
      <Ads />
      <AboutPreview />
      <ServicesSection />
      {/* <Client /> */}
      <Reviews />
      <ContactCTA />
    </>
  );
}