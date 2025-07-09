'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section 
      className="py-12 bg-cover bg-center"
      style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }} // Replace with your image path
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Inline CSS for button styling */}
        <style jsx>{`
          .button-gradient {
            background: linear-gradient(90deg, #FFD700, #8B4513, #000000);
            color: #000000;
            transition: background 0.3s ease, color 0.3s ease;
          }
          .button-gradient:hover {
            background: #8B4513;
            color: #FFD700;
          }
        `}</style>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="button-gradient border-black px-6 py-3 text-base font-semibold"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}