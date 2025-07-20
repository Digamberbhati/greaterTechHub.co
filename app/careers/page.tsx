'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Mail } from 'lucide-react';

const openPositions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '3-5 years',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    description:
      'Join our engineering team to build scalable, high-performance web applications and APIs for global clients using modern tech stacks.',
  },
  {
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '2-4 years',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    description:
      'Craft visually stunning and responsive user interfaces for web applications, focusing on performance and user experience.',
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    experience: '2-3 years',
    skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics', 'Content Marketing'],
    description:
      'Lead digital marketing campaigns, optimize SEO, and drive engagement across platforms to grow our brand and client reach.',
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    experience: '2-4 years',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD'],
    description:
      'Design and manage scalable cloud infrastructure, automate deployments, and ensure seamless operations for our solutions.',
  },
];

const benefits = [
  'Competitive Salary & Benefits',
  'Remote Work Flexibility',
  'Professional Development Budget',
  'Health & Wellness Programs',
  'Flexible Time Off',
  'Latest Technology & Tools',
  'Collaborative Team Environment',
  'Career Growth Opportunities',
];

export default function CareersClient() {
  console.log('Careers page rendered');

  // State for popup form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({
    message: '',
    type: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      setFormStatus({ message: 'Please enter your name', type: 'error' });
      return;
    }
    if (!formData.email.includes('@')) {
      setFormStatus({ message: 'Please enter a valid email', type: 'error' });
      return;
    }

    // Prepare form data for Web3Forms
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('subject', 'New Career Application');
    formDataToSend.append('from_name', 'GreaterTechHub Careers');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus({ message: 'Application submitted successfully!', type: 'success' });
        setIsModalOpen(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setFormStatus({ message: 'Submission failed. Please try again.', type: 'error' });
      }
    } catch (error) {
      setFormStatus({ message: 'An error occurred. Please try again later.', type: 'error' });
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-600">
              Amazing Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Be part of a dynamic team that's shaping the future of technology. We're looking for
            passionate individuals who want to make a difference.
          </p>
          <Card className="border-2 border-amber-600 bg-amber-50 max-w-md mx-auto p-4">
            <div className="flex justify-center items-center gap-3">
              <Mail className="w-6 h-6 text-amber-600" />
              <a
                href="mailto:hr@greatertechhub.com"
                className="text-amber-600 hover:text-amber-800 font-semibold text-lg"
              >
                hr@greatertechhub.com
              </a>
            </div>
          </Card>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{benefit}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                        <Badge variant="outline" className="text-amber-600 border-amber-600">
                          {position.type}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <span>📍 {position.location}</span>
                        <span>🏢 {position.department}</span>
                        <span>⏰ {position.experience}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-amber-100 text-amber-800"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <Button
                        className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:from-yellow-800 hover:via-yellow-700 hover:to-yellow-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Position Found */}
        <div className="text-center bg-amber-50 p-12 rounded-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your details and
            let us know how you can contribute to our mission.
          </p>
          <div className="flex justify-center items-center gap-3 mb-6">
            <Mail className="w-5 h-5 text-amber-600" />
            <a
              href="mailto:hr@greatertechhub.com"
              className="text-amber-600 hover:text-amber-800 font-semibold"
            >
              hr@greatertechhub.com
            </a>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:from-yellow-800 hover:via-yellow-700 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Send Your Details
          </Button>
        </div>
      </div>

      {/* Popup Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply Now</h2>
            {formStatus.message && (
              <div
                className={`mb-4 p-3 rounded-md ${
                  formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {formStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="hidden"
                name="access_key"
                value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ''}
              />
              <input type="hidden" name="subject" value="New Career Application" />
              <input type="hidden" name="from_name" value="GreaterTechHub Careers" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600"
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:from-yellow-800 hover:via-yellow-700 hover:to-yellow-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}