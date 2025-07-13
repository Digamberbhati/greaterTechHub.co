// app/refer-and-earn/page.tsx
"use client";

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GiftIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function ReferAndEarn() {
  console.log('Refer and Earn page rendered')

  // State for form submission feedback
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)

  // List of services for the dropdown, based on the Services page
  const services = [
    'Website Development',
    'Mobile App Development',
    'Digital Marketing & SEO',
    'DevOps & Cloud Solutions',
    'CRM & ERP Systems',
    'IT Infrastructure & Networking',
    '2D/3D Animation',
    'Custom Software Solutions',
    'QA & Software Testing',
    'Branding, Advertising & Market Research',
    'Business Strategy',
    'Recruitment Services',
    'BPO Services',
    'System Design & Architecture',
    'IT Asset Management',
  ]

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus(null) // Reset status

    const form = e.currentTarget
    const formData = new FormData(form)

    // Add the Web3Forms access key to the form data
    formData.append('access_key', '8739b33b-939a-4751-ad7b-f09ad3a1c955')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('Thank you! Your referral has been submitted successfully.')
        form.reset() // Reset the form after successful submission
      } else {
        setSubmitStatus('Submission failed. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('An error occurred. Please try again later.')
    }
  }

  return (
    <div className="pt-24 min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 text-shadow-gold">
              <span className="gold-black-brown-gradient">Refer and Earn</span> Rewards
            </h1>
            <p className="text-xl text-brand-cream max-w-3xl mx-auto">
              Refer client projects or deals to GreaterTechHub and earn exciting rewards. Let’s grow together through your referrals.
            </p>
          </div>
        </div>
      </section>

      {/* Refer and Earn Benefits Section */}
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
              Why <span className="gold-black-brown-gradient">Refer Us?</span>
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto mt-4">
              Refer projects or deals to unlock rewards and contribute to innovative IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1: Earn Rewards */}
            <Card className="card-hover h-full border-brand-gold/20 shadow-lg bg-brand-white hover:shadow-brand-gold/10">
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500">
                    <GiftIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-3">
                  Earn Exciting Rewards
                </h3>
                <p className="text-brand-gray mb-4 flex-grow">
                  Receive tailored rewards based on the projects or deals you refer.
                </p>
                <div className="mb-6">
                  <ul className="text-sm text-brand-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Cash Incentives
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Gift Vouchers
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Exclusive Benefits
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Benefit 2: Build Connections */}
            <Card className="card-hover h-full border-brand-gold/20 shadow-lg bg-brand-white hover:shadow-brand-gold/10">
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500">
                    <GiftIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-3">
                  Build Connections
                </h3>
                <p className="text-brand-gray mb-4 flex-grow">
                  Strengthen your network by connecting clients with our expert services.
                </p>
                <div className="mb-6">
                  <ul className="text-sm text-brand-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Expand Your Network
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Strategic Alliances
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Collaborative Opportunities
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Benefit 3: Support Innovation */}
            <Card className="card-hover h-full border-brand-gold/20 shadow-lg bg-brand-white hover:shadow-brand-gold/10">
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500">
                    <GiftIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-3">
                  Support Innovation
                </h3>
                <p className="text-brand-gray mb-4 flex-grow">
                  Help clients achieve their goals by referring them to our innovative solutions.
                </p>
                <div className="mb-6">
                  <ul className="text-sm text-brand-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Cutting-Edge Solutions
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Client Success
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Industry Impact
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section className="section-padding bg-gradient-brown-gold">
        <div className="mx-auto max-w-4xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
              Submit Your <span className="gold-black-brown-gradient">Referral</span>
            </h2>
            <p className="text-xl text-brand-cream max-w-2xl mx-auto mt-4">
              Refer a client project or deal and earn rewards. A meeting will be scheduled to discuss the number of gifts based on the project or deal.
            </p>
          </div>

          <Card className="border-brand-gold/20 shadow-lg bg-brand-white rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-1">
                      Full Name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="block w-full rounded-lg border-brand-gray/30 shadow-sm focus:border-brand-gold focus:ring-brand-gold sm:text-sm py-3 px-4 bg-brand-white/5 transition-all duration-300"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-brand-black mb-1">
                      Contact Information <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      required
                      className="block w-full rounded-lg border-brand-gray/30 shadow-sm focus:border-brand-gold focus:ring-brand-gold sm:text-sm py-3 px-4 bg-brand-white/5 transition-all duration-300"
                      placeholder="Email or Phone Number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-brand-black mb-1">
                    Preferred Date for Discussion <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="block w-full rounded-lg border-brand-gray/30 shadow-sm focus:border-brand-gold focus:ring-brand-gold sm:text-sm py-3 px-4 bg-brand-white/5 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-brand-black mb-1">
                    Project Name <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="project"
                    name="project"
                    required
                    className="block w-full rounded-lg border-brand-gray/30 shadow-sm focus:border-brand-gold focus:ring-brand-gold sm:text-sm py-3 px-4 bg-brand-white/5 transition-all duration-300"
                    placeholder="Name of the Project or Deal"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-brand-black mb-1">
                    Service for Referral <span className="text-brand-gold">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="block w-full rounded-lg border-brand-gray/30 shadow-sm focus:border-brand-gold focus:ring-brand-gold sm:text-sm py-3 px-4 bg-brand-white/5 transition-all duration-300"
                  >
                    <option value="" disabled selected>
                      Select a Service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-1">
                    Project or Deal Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="block w-full rounded-lg border-brand-gray/30 shadow-sm focus:border-brand-gold focus:ring-brand-gold sm:text-sm py-3 px-4 bg-brand-white/5 transition-all duration-300"
                    placeholder="Describe the client project or deal you are referring..."
                  ></textarea>
                </div>
                {submitStatus && (
                  <div className={`text-center text-sm ${submitStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                    {submitStatus}
                  </div>
                )}
                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Submit Referral
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
            Ready to <span className="gold-black-brown-gradient">Earn Rewards?</span>
          </h2>
          <p className="text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
            Refer clients to GreaterTechHub and unlock exciting rewards for successful projects or deals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:opacity-90 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}