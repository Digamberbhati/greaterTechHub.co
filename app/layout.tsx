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
    'Leading IT company providing web development, mobile apps, digital marketing, cloud solutions, and comprehensive technology services worldwide.',
  keywords:
    'IT services, web development, mobile app development, digital marketing, SEO, cloud solutions, DevOps, CRM, ERP, software development',
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
        url: '/Blacklogo.png',
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