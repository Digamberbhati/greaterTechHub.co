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
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:from-yellow-800 hover:via-yellow-700 hover:to-yellow-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}