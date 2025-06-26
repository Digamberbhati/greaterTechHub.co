import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Support - GreaterTechHub | Get Assistance',
  description: 'Reach out to our dedicated support team for assistance with our IT services. Contact us via email at hr@greatertechhub.com, info@greatertechhub.com, or call us at +91 9588160069.',
}

export default function Support() {
  console.log('Support page rendered')

  return (
    <div className="pt-24 min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 text-shadow-gold">
              <span className="gradient-text">Support</span> When You Need It
            </h1>
            <p className="text-xl text-brand-cream max-w-3xl mx-auto">
              Our dedicated support team is here to assist you with any queries or technical challenges. 
              Reach out to us for prompt, reliable, and professional assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto mt-4">
              We're here to help. Contact us via email, phone, or fill out the form below to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Support Card */}
            <Card className="card-hover h-full border-brand-gold/20 shadow-lg bg-brand-white hover:shadow-brand-gold/10">
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-gold">
                    <EnvelopeIcon className="h-6 w-6 text-brand-black" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-3">Email Us</h3>
                <p className="text-brand-gray mb-4 flex-grow">
                  Reach out to our team for any inquiries or support needs.
                </p>
                <div className="mb-6">
                  <p className="text-sm text-brand-gray">
                    <a href="mailto:hr@greatertechhub.com" className="text-brand-gold hover:underline">hr@greatertechhub.com</a>
                  </p>
                  <p className="text-sm text-brand-gray">
                    <a href="mailto:info@greatertechhub.com" className="text-brand-gold hover:underline">info@greatertechhub.com</a>
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-gradient-gold hover:opacity-90 text-brand-black font-semibold"
                >
                  <a href="mailto:info@greatertechhub.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            {/* Phone Support Card */}
            <Card className="card-hover h-full border-brand-gold/20 shadow-lg bg-brand-white hover:shadow-brand-gold/10">
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-brown">
                    <PhoneIcon className="h-6 w-6 text-brand-black" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-3">Call Us</h3>
                <p className="text-brand-gray mb-4 flex-grow">
                  Speak directly with our support team for immediate assistance.
                </p>
                <div className="mb-6">
                  <p className="text-sm text-brand-gray">
                    <a href="tel:+919588160069" className="text-brand-gold hover:underline">+91 9588160069</a>
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-gradient-brown hover:opacity-90 text-brand-black font-semibold"
                >
                  <a href="tel:+919588160069">Call Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Live Chat Card */}
            <Card className="card-hover h-full border-brand-gold/20 shadow-lg bg-brand-white hover:shadow-brand-gold/10">
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-gold">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-brand-black" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-3">Live Chat</h3>
                <p className="text-brand-gray mb-4 flex-grow">
                  Connect with our team in real-time for quick answers and support.
                </p>
                <div className="mb-6">
                  <p className="text-sm text-brand-gray">
                    Available Monday - Friday, 9 AM - 6 PM IST
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-gradient-gold hover:opacity-90 text-brand-black font-semibold"
                >
                  <Link href="/support/live-chat">Start Chat</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-brown-gold">
        <div className="mx-auto max-w-4xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
              Submit a <span className="text-brand-gold">Support Request</span>
            </h2>
            <p className="text-xl text-brand-cream max-w-2xl mx-auto mt-4">
              Fill out the form below, and our team will get back to you within 24 hours.
            </p>
          </div>

          <Card className="border-brand-gold/20 shadow-lg bg-brand-white">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-black">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-md border-brand-gray/30 shadow-sm focus:border-brand-gold focus:ring-brand-gold sm:text-sm"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-black">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-md border-brand-gray/30 shadow-sm focus:border-brand-gold focus:ring-brand-gold sm:text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-brand-black">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full rounded-md border-brand-gray/30 shadow-sm focus:border-brand-gold focus:ring-brand-gold sm:text-sm"
                    placeholder="What is your query about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-black">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1 block w-full rounded-md border-brand-gray/30 shadow-sm focus:border-brand-gold focus:ring-brand-gold sm:text-sm"
                    placeholder="Describe your issue or question..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-gradient-gold hover:opacity-90 text-brand-black font-semibold px-8 py-3"
                  >
                    Submit Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            Need <span className="text-brand-gold">Immediate Assistance?</span>
          </h2>
          <p className="text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
            Our team is ready to help you with tailored solutions and prompt support. 
            Contact us now to resolve your queries or explore our services.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-white text-brand-black hover:bg-brand-cream font-semibold px-8 py-4 text-lg"
          >
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}