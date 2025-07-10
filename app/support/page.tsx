"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FormEvent } from 'react'

export default function SupportForm() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()
      if (result.success) {
        alert('Form submitted successfully!')
        form.reset()
      } else {
        alert('There was an error submitting the form. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('An error occurred. Please try again later.')
    }
  }

  return (
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
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="801d207e-97cf-4b31-8871-e5ffe85a0f06"
              />
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
  )
}