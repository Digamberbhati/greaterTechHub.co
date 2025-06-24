'use client';

import type { Metadata } from 'next'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline'

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    details: 'info@greatertechhub.com',
    description: 'Send us an email and we\'ll respond within 24 hours',
    action: 'mailto:info@greatertechhub.com',
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    details: '+1 (234) 567-8900',
    description: 'Speak directly with our experts during business hours',
    action: 'tel:+1234567890',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'WhatsApp',
    details: 'Quick Chat Available',
    description: 'Get immediate assistance via WhatsApp',
    action: 'https://wa.me/1234567890',
  },
  {
    icon: MapPinIcon,
    title: 'Office',
    details: 'Global IT Solutions Hub',
    description: 'Serving clients worldwide with remote and on-site support',
    action: null,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  console.log('Contact page rendered');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission (replace with actual form handler)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', formData)
      
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
      })
      
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      })
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: 'Error',
        description: 'There was a problem sending your message. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="pt-24 min-h-screen">
      <div className="mx-auto max-w-7xl container-padding section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our technology 
            solutions can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Your full name"
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
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                      <option value="">Select a service</option>
                      <option value="website-development">Website Development</option>
                      <option value="mobile-app-development">Mobile App Development</option>
                      <option value="digital-marketing">Digital Marketing & SEO</option>
                      <option value="cloud-solutions">DevOps & Cloud Solutions</option>
                      <option value="crm-erp">CRM & ERP Systems</option>
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
                      className="mt-1"
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-blue hover:opacity-90 text-white py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-6">
                Contact Information
              </h2>
              <p className="text-brand-gray mb-8">
                Choose the most convenient way to reach us. We're here to help 
                you succeed with the right technology solutions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-gradient-blue rounded-lg">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-brand-navy mb-1">
                          {info.title}
                        </h3>
                        <p className="text-brand-blue font-medium mb-2">
                          {info.details}
                        </p>
                        <p className="text-brand-gray text-sm mb-3">
                          {info.description}
                        </p>
                        {info.action && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                          >
                            <a 
                              href={info.action} 
                              target={info.action.startsWith('http') ? '_blank' : '_self'}
                              rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              Contact Now
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}