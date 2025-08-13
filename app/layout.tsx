import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://greatertechhub.com'),
  title: {
    template: '%s | GreaterTechHub',
    default: 'GreaterTechHub - Top IT Services & Technology Solutions',
  },
  description:
    'Leading IT company providing web development, assumirapps, digital marketing, cloud solutions, and comprehensive technology services worldwide.',
  keywords: [
    // Website Development
    'web development services',
    'custom website development',
    'website design and development',
    'responsive web design',
    'e-commerce website development',
    'web development company in Mumbai',
    'web design company in Dubai',
    'web development services in London',
    'web development in New York',
    'web design in Sydney',
    'web development in Moscow',
    'best web development company in Bangalore',
    'affordable web development services in Delhi',
    'e-commerce website development in Riyadh',
    'responsive web design in San Francisco',

    // Mobile App Development
    'mobile app development company',
    'custom mobile app development',
    'android app development',
    'iOS app development',
    'cross-platform app development',
    'mobile app development in Delhi',
    'mobile app development company in Abu Dhabi',
    'mobile app development in Paris',
    'mobile app development in Toronto',
    'mobile app development in Brisbane',
    'mobile app development in Russia',
    'custom mobile app development in Hyderabad',
    'android app development in Qatar',
    'iOS app development in Melbourne',
    'cross-platform app development in St. Petersburg',

    // Digital Marketing & SEO
    'digital marketing services',
    'SEO services',
    'local SEO services',
    'PPC advertising',
    'social media marketing',
    'SEO services in Bangalore',
    'digital marketing agency in Pune',
    'SEO agency in Riyadh',
    'digital marketing services in Berlin',
    'PPC advertising in Chicago',
    'social media marketing in Perth',
    'local SEO services in Moscow',
    'best SEO agency in Mumbai',
    'digital marketing for startups in Dubai',
    'PPC campaign management in London',

    // AI Agents & ChatBot
    'AI scorerbot development',
    'custom AI solutions',
    'AI agents for business',
    'chatbot development services',
    'generative AI solutions',
    'AI chatbot development in Kolkata',
    'AI solutions in Dubai',
    'AI chatbot solutions in Madrid',
    'AI agents for businesses in Los Angeles',
    'chatbot development in Sydney',
    'generative AI solutions in Moscow',
    'custom AI chatbot development in Chennai',
    'AI-powered chatbots in Abu Dhabi',
    'AI solutions for e-commerce in Amsterdam',
    'business chatbot development in New York',

    // DevOps & Cloud Solutions
    'DevOps consulting services',
    'cloud computing solutions',
    'AWS cloud services',
    'Azure cloud solutions',
    'cloud migration services',
    'DevOps consulting in Gujarat',
    'cloud solutions in Hyderabad',
    'AWS cloud services in Qatar',
    'cloud computing solutions in Amsterdam',
    'cloud migration services in Toronto',
    'DevOps solutions in Melbourne',
    'cloud computing in Novosibirsk',
    'best DevOps consulting in Bangalore',
    'Azure cloud solutions in Dubai',
    'cloud migration for enterprises in London',

    // CRM & ERP Systems
    'CRM software development',
    'custom ERP solutions',
    'Salesforce consulting',
    'Odoo ERP development',
    'CRM integration services',
    'CRM software development in Chennai',
    'ERP solutions in Oman',
    'Salesforce consulting in Germany',
    'custom ERP development in New York',
    'CRM integration in Sydney',
    'Odoo ERP development in Moscow',
    'CRM software for startups in Mumbai',
    'ERP solutions for businesses in Riyadh',
    'Salesforce consulting in San Francisco',
    'custom CRM development in Brisbane',

    // IT Infrastructure & Networking
    'IT infrastructure services',
    'network security solutions',
    'IT managed services',
    'cloud infrastructure management',
    'cybersecurity consulting',
    'IT infrastructure services in Ahmedabad',
    'network security in Doha',
    'IT managed services in Spain',
    'cloud infrastructure in Chicago',
    'cybersecurity consulting in Perth',
    'IT infrastructure in Moscow',
    'IT infrastructure solutions in Delhi',
    'network security services in Dubai',
    'IT managed services in London',
    'cybersecurity solutions in Toronto',

    // 2D/3D Animation
    '2D animation services',
    '3D animation studio',
    'motion graphics design',
    'animation for advertising',
    '3D modeling services',
    '2D animation services in Pune',
    '3D animation studio in Muscat',
    'motion graphics design in France',
    'animation for advertising in Los Angeles',
    '3D modeling services in Sydney',
    '2D animation in Novosibirsk',
    '3D animation services in Bangalore',
    'motion graphics for ads in Dubai',
    'animation studio in Berlin',
    '3D modeling for businesses in Melbourne',

    // Custom Software Solutions
    'custom software development',
    'enterprise software solutions',
    'SaaS development services',
    'software consulting',
    'bespoke software development',
    'custom software development in Mumbai',
    'enterprise software in Bahrain',
    'SaaS development in Italy',
    'software consulting in San Francisco',
    'bespoke software in Brisbane',
    'custom software solutions in Russia',
    'custom software for startups in Hyderabad',
    'enterprise software development in Dubai',
    'SaaS solutions in London',
    'bespoke software development in Chicago',

    // QA & Software Testing
    'software testing services',
    'QA automation testing',
    'mobile app testing',
    'performance testing services',
    'quality assurance consulting',
    'software testing in Chennai',
    'QA automation in Kuwait',
    'mobile app testing in Netherlands',
    'performance testing in New York',
    'QA consulting in Perth',
    'software testing services in Moscow',
    'QA automation testing in Bangalore',
    'mobile app testing in Riyadh',
    'performance testing services in Paris',
    'quality assurance in Sydney',

    // Branding, Advertising & Market Research
    'branding services',
    'digital advertising agency',
    'market research services',
    'brand identity design',
    'PPC campaign management',
    'branding services in Kolkata',
    'digital advertising in Saudi Arabia',
    'market research in France',
    'brand identity design in Chicago',
    'PPC campaign management in Melbourne',
    'branding services in Novosibirsk',
    'digital advertising agency in Mumbai',
    'market research services in Dubai',
    'brand identity in Berlin',
    'PPC advertising in Toronto',

    // Business Strategy
    'business strategy consulting',
    'digital transformation services',
    'go-to-market strategy',
    'business process automation',
    'strategic IT consulting',
    'business strategy consulting in Delhi',
    'digital transformation in Oman',
    'go-to-market strategy in Spain',
    'business process automation in Los Angeles',
    'strategic IT consulting in Sydney',
    'business strategy in Moscow',
    'digital transformation services in Bangalore',
    'go-to-market strategy in Dubai',
    'business automation in London',
    'strategic consulting in New York',

    // Recruitment Services
    'IT recruitment services',
    'tech talent acquisition',
    'offshore recruitment solutions',
    'IT staffing agency',
    'recruitment process outsourcing',
    'IT recruitment in Hyderabad',
    'tech talent acquisition in Qatar',
    'offshore recruitment in Germany',
    'IT staffing in San Francisco',
    'recruitment outsourcing in Brisbane',
    'IT recruitment services in Russia',
    'tech hiring in Mumbai',
    'offshore recruitment in Dubai',
    'IT staffing agency in Paris',
    'recruitment services in Melbourne',

    // BPO Services
    'business process outsourcing',
    'BPO services for startups',
    'customer support outsourcing',
    'back-office BPO services',
    'offshore BPO solutions',
    'BPO services in Chennai',
    'customer support outsourcing in Bahrain',
    'back-office BPO in Italy',
    'offshore BPO in Chicago',
    'BPO for startups in Perth',
    'BPO services in Moscow',
    'customer support BPO in Bangalore',
    'offshore BPO solutions in Dubai',
    'back-office outsourcing in London',
    'BPO services in Toronto',

    // System Design & Architecture
    'system architecture design',
    'IT system integration',
    'microservices architecture',
    'cloud architecture solutions',
    'enterprise system design',
    'system architecture in Ahmedabad',
    'IT system integration in Muscat',
    'microservices architecture in Netherlands',
    'cloud architecture in New York',
    'enterprise system design in Sydney',
    'system architecture in Russia',
    'IT system integration in Mumbai',
    'cloud architecture solutions in Dubai',
    'microservices design in Berlin',
    'enterprise system solutions in Melbourne',
  ],
  authors: [{ name: 'GreaterTechHub' }],
  alternates: {
    canonical: 'https://greatertechhub.com',
  },
  openGraph: {
    title: 'GreaterTechHub - Top IT Services & Technology Solutions',
    description:
      'Transform your business with our cutting-edge technology solutions. From web development to cloud infrastructure, we deliver innovation that drives growth.',
    url: 'https://greatertechhub.com',
    siteName: 'GreaterTechHub',
    images: [
      {
        url: '/blacklogo.png',
        width: 1200,
        height: 630,
        alt: 'GreaterTechHub - IT Services & Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GreaterTechHub - Top IT Services & Technology Solutions',
    description: 'Transform your business with our cutting-edge technology solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico', // Use a dedicated favicon file
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // Use a dedicated Apple touch icon
    other: [
      {
        rel: 'icon',
        url: '/blacklogo.png', // Fallback for other cases
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}