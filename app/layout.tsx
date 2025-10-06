import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://greatertechhub.com"),
  title: {
    template: "%s | GreaterTechHub",
    default: "GreaterTechHub - Top IT Services & Technology Solutions",
  },
  description:
    "Leading IT company providing web development, apps, digital marketing, cloud solutions, and technology services worldwide.",
  keywords: [
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

    // Digital Marketing & SEO
    'digital marketing services',
    'SEO services',
    'local SEO services',
    'PPC advertising',
    'social media marketing',

    // AI Agents & ChatBot
    'AI scorerbot development',
    'custom AI solutions',
    'AI agents for business',
    'chatbot development services',
    'generative AI solutions',

    // DevOps & Cloud Solutions
    'DevOps consulting services',
    'cloud computing solutions',
    'AWS cloud services',
    'Azure cloud solutions',
    'cloud migration services',

    // CRM & ERP Systems
    'CRM software development',
    'custom ERP solutions',
    'Salesforce consulting',
    'Odoo ERP development',

    // IT Infrastructure & Networking
    'IT infrastructure services',
    'network security solutions',
    'IT managed services',
    'cloud infrastructure management',
    'cybersecurity consulting',

    // 2D/3D Animation
    '2D animation services',
    '3D animation studio',
    'motion graphics design',
    'animation for advertising',
    '3D modeling services',

    // Custom Software Solutions
    'custom software development',
    'enterprise software solutions',
    'SaaS development services',
    'software consulting',
    'bespoke software development',

    // QA & Software Testing
    'software testing services',
    'QA automation testing',
    'mobile app testing',
    'performance testing services',
    'quality assurance consulting',

    // Branding, Advertising & Market Research
    'branding services',
    'digital advertising agency',
    'market research services',
    'brand identity design',
    'PPC campaign management',

    // Business Strategy
    'business strategy consulting',
    'digital transformation services',
    'go-to-market strategy',
    'business process automation',
    'strategic IT consulting',

    // Recruitment Services
    'IT recruitment services',
    'tech talent acquisition',
    'offshore recruitment solutions',
    'IT staffing agency',
    'recruitment process outsourcing',

    // BPO Services
    'business process outsourcing',
    'BPO services for startups',
    'customer support outsourcing',
    'back-office BPO services',
    'offshore BPO solutions',

    // System Design & Architecture
    'system architecture design',
    'IT system integration',
    'microservices architecture',
    'cloud architecture solutions',
    'enterprise system design',
  ],
  authors: [{ name: "GreaterTechHub" }],
  alternates: { canonical: "https://greatertechhub.com" },
  openGraph: {
    title: "GreaterTechHub - Top IT Services & Technology Solutions",
    description:
      "Transform your business with cutting-edge technology solutions from GreaterTechHub.",
    url: "https://greatertechhub.com",
    siteName: "GreaterTechHub",
    images: [
      {
        url: "/blacklogo.png",
        width: 1200,
        height: 630,
        alt: "GreaterTechHub - IT Services & Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreaterTechHub - Top IT Services & Technology Solutions",
    description:
      "Transform your business with our cutting-edge technology solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <head>
        {/* --- SEO Essentials --- */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greatertechhub.com" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* --- Google Tag Manager (HEAD) --- */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WJR9C26Z');
          `}
        </Script>
      </head>

      <body className="antialiased">
        {/* --- Google Tag Manager (BODY) --- */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJR9C26Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* --- Google Analytics --- */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DTG1BKB7TD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DTG1BKB7TD');
          `}
        </Script>

        {/* --- Cloudflare Web Analytics --- */}
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "898db2d1806842948f8a96b2866d90f8"}'
          strategy="afterInteractive"
        />

        {/* --- Layout --- */}
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
