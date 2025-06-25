import HeroSection from '@/components/sections/HeroSection'
import Client from "@/components/sections/Client"
import ServicesSection from '@/components/sections/ServicesSection'
import AboutPreview from '@/components/sections/AboutPreview'
import ContactCTA from '@/components/sections/ContactCTA'
import Ads from '@/components/sections/Ads'
import Reviews from '@/components/sections/Review'

export default function Home() {
  console.log('Home page rendered');

  return (
    <>
      <HeroSection />
      <Ads />
      <ServicesSection />
      <AboutPreview />
      <Client />
      <Reviews />
      <ContactCTA />
    </>
  );
}
