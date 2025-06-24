import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutPreview from '@/components/sections/AboutPreview'
import ContactCTA from '@/components/sections/ContactCTA'

export default function Home() {
  console.log('Home page rendered');

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
