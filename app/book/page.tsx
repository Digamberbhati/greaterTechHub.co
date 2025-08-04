'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    date: '',
    time: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '801d207e-97cf-4b31-8871-e5ffe85a0f06',
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Appointment Booked!',
          description: "Thank you for your request. We'll confirm your appointment within 24 hours.",
        });
        setFormData({
          firstName: '',
          email: '',
          date: '',
          time: '',
          inquiryType: '',
          message: '',
        });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: 'Error',
        description: 'There was a problem booking your appointment. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col text-black">
      {/* Header */}
      <header className="bg-brand-navy text-white py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold">
            <Link href="/" className="hover:text-[rgb(37,150,190)]">
              GreaterTechHub
            </Link>
          </div>
          <nav className="flex space-x-4 sm:space-x-6">
            <Link href="/" className="text-sm sm:text-base hover:text-[rgb(37,150,190)]">Home</Link>
            <Link href="/services" className="text-sm sm:text-base hover:text-[rgb(37,150,190)]">Services</Link>
            <Link href="/about" className="text-sm sm:text-base hover:text-[rgb(37,150,190)]">About</Link>
            <Link href="/book" className="text-sm sm:text-base hover:text-[rgb(37,150,190)]">Book Appointment</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <style jsx>{`
          select.text-sm option {
            font-size: 0.875rem;
            padding: 0.5rem;
          }
          @media (max-width: 640px) {
            select.text-sm {
              font-size: 0.75rem;
              padding: 0.5rem;
            }
            select.text-sm option {
              font-size: 0.75rem;
            }
          }
        `}</style>

        <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
              Book an <span className="text-[#4A78D3]">Appointment</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Schedule a consultation with our <span className="text-[rgb(37,150,190)] font-medium">experts</span> to discuss your business needs.
            </p>
          </div>

          <Card className="shadow-lg border-0">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">
                Appointment Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 text-sm sm:text-base"
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-1 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="mt-1 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="inquiryType">Inquiry Type *</Label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 sm:p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A78D3] text-sm"
                    required
                  >
                    <option value="">Select an inquiry type</option>
                    <option value="consultation">Consultation</option>
                    <option value="follow-up">Follow-up</option>
                    <option value="project-discussion">Project Discussion</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 text-sm sm:text-base"
                    rows={4}
                    placeholder="Tell us about your appointment needs..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center bg-[#4A78D3] hover:bg-black text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <PaperAirplaneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm sm:text-base">© 2025 GreaterTechHub. All rights reserved.</p>
            <nav className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-0">
              <Link href="/privacy" className="text-sm sm:text-base hover:text-[rgb(37,150,190)]">Privacy Policy</Link>
              <Link href="/terms" className="text-sm sm:text-base hover:text-[rgb(37,150,190)]">Terms of Service</Link>
              <Link href="/contact" className="text-sm sm:text-base hover:text-[rgb(37,150,190)]">Contact</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
