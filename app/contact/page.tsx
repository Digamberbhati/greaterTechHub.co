'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { EnvelopeIcon, PhoneIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: 'Direct Contact',
    details: '+91 9588160069',
    description: 'Send us an email and we\'ll respond within 1 Min',
    socialMedia: [
      { platform: 'LinkedIn', link: 'https://linkedin.com/company/greatertechhub', icon: FaLinkedin },
      { platform: 'Facebook', link: 'https://facebook.com/greatertechhub', icon: FaFacebook },
      { platform: 'Instagram', link: 'https://instagram.com/greatertechhub', icon: FaInstagram },
      { platform: 'X', link: 'https://x.com/greatertechhub', icon: FaTwitter },
      { platform: 'YouTube', link: 'https://youtube.com/@greatertechhub', icon: FaYoutube },
      { platform: 'WhatsApp', link: 'https://wa.me/9588160069', icon: FaWhatsapp },
    ],
  },
  {
    icon: PhoneIcon,
    title: 'Post & Mail',
    details: 'info@greatertechhub.com',
    address: 'Plot No 1, GreaterTechHub Office, Near Padam Chowk, Mohna Road, V.P.O Chhainsa',
    description: 'Speak directly with our experts during business hours',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  console.log('Contact page rendered');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '8739b33b-939a-4751-ad7b-f09ad3a1c955', // Web3Forms API key
          ...formData, // Spread the form data
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log('Form submitted successfully:', formData);
        toast({
          title: 'Message Sent!',
          description: 'Thank you for contacting us. We\'ll get back to you within 1 min.',
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: '',
        });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: 'Error',
        description: 'There was a problem sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      <style jsx>{`
        select.text-sm option {
          font-size: 0.875rem; /* Smaller font size for options (14px) */
          padding: 0.5rem; /* Reduced padding for options */
        }
        @media (max-width: 640px) {
          select.text-sm {
            font-size: 0.75rem; /* Even smaller font for mobile */
            padding: 0.5rem; /* Reduced padding for mobile */
          }
          select.text-sm option {
            font-size: 0.75rem; /* Match mobile font size */
          }
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4 sm:mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-brand-gray max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our technology
            solutions can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div>
            <Card className="shadow-lg border-0">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4 sm:mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 text-sm sm:text-base"
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
                        className="mt-1 text-sm sm:text-base"
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
                      className="mt-1 text-sm sm:text-base"
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
                      className="mt-1 w-full p-2 sm:p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="website-development">Website Development</option>
                      <option value="mobile-app-development">Mobile App Development</option>
                      <option value="digital-marketing">Digital Marketing & SEO</option>
                      <option value="cloud-solutions">DevOps & Cloud Solutions</option>
                      <option value="crm-erp">CRM & ERP Systems</option>
                      <option value="it-infrastructure">IT Infrastructure</option>
                      <option value="2d-3d-animation">2D/3D Animation</option>
                      <option value="branding-advertising">Branding & Advertising</option>
                      <option value="qa-software-testing">QA & Software Testing</option>
                      <option value="custom-software">Custom Software</option>
                      <option value="business-strategy">Business Strategy</option>
                      <option value="recruitment-services">Recruitment Services</option>
                      <option value="bpo-services">BPO Services</option>
                      <option value="system-design-architecture">System Design & Architecture</option>
                      <option value="it-asset-management">IT Asset Management</option>
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
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:from-yellow-800 hover:via-yellow-700 hover:to-yellow-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <PaperAirplaneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4 sm:mb-6">
                Contact Information
              </h2>
              <p className="text-sm sm:text-base text-brand-gray mb-6 sm:mb-8">
                Choose the most convenient way to reach us. We're here to help
                you succeed with the right technology solutions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-2 sm:p-3 bg-gradient-blue rounded-lg">
                          {info.icon ? (
                            <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          ) : (
                            <span>Icon Missing</span>
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-brand-navy mb-1">
                          {info.title}
                        </h3>
                        <p className="text-brand-blue font-medium text-sm sm:text-base mb-2">
                          {info.details}
                        </p>
                        {info.address && (
                          <p className="text-brand-blue font-medium text-sm sm:text-base mb-2">
                            {info.address}
                          </p>
                        )}
                        {info.socialMedia && (
                          <div className="flex flex-wrap gap-3 sm:gap-4 mb-2">
                            {info.socialMedia.map((social, idx) => (
                              <a
                                key={idx}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-blue hover:text-brand-navy"
                                title={social.platform}
                              >
                                {social.icon ? (
                                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                ) : (
                                  <span>{social.platform}</span>
                                )}
                              </a>
                            ))}
                          </div>
                        )}
                        <p className="text-brand-gray text-xs sm:text-sm mb-3">
                          {info.description}
                        </p>
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