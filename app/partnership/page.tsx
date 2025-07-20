// app/partnership/page.tsx
"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UsersIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Partnership() {
  console.log("Partnership page rendered");

  // State for form submission feedback
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  // List of services for the dropdown
  const services = [
    "Website Development",
    "Mobile App Development",
    "Digital Marketing & SEO",
    "DevOps & Cloud Solutions",
    "CRM & ERP Systems",
    "IT Infrastructure & Networking",
    "2D/3D Animation",
    "Custom Software Solutions",
    "QA & Software Testing",
    "Branding, Advertising & Market Research",
    "Business Strategy",
    "Recruitment Services",
    "BPO Services",
    "System Design & Architecture",
    "IT Asset Management",
  ];

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null); // Reset status

    // Check for API key
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;
    if (!apiKey) {
      setSubmitStatus("Configuration error: API key is missing. Please contact support.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add the Web3Forms access key from environment variable
    formData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("Thank you! Your proposal has been submitted successfully.");
        form.reset(); // Reset the form after successful submission
      } else {
        setSubmitStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 text-shadow-gold">
              Build <span className="gold-black-brown-gradient">Partnerships</span> for Success
            </h1>
            <p className="text-xl text-brand-cream max-w-3xl mx-auto">
              Collaborate with GreaterTechHub on client projects or strategic deals to deliver
              cutting-edge IT solutions and achieve mutual growth.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="section-padding bg-brand-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
              Why <span className="gold-black-brown-gradient">Partner with Us?</span>
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto mt-4">
              Partner with us to work on client projects or deals, leveraging our expertise for shared
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1: Innovation */}
            <Card className="card-hover h-full border-brand-gold/20 shadow-lg bg-brand-white hover:shadow-brand-gold/10">
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500">
                    <UsersIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-3">
                  Innovation-Driven
                </h3>
                <p className="text-brand-gray mb-4 flex-grow">
                  Collaborate on client projects using advanced technologies to deliver innovative
                  solutions.
                </p>
                <div className="mb-6">
                  <ul className="text-sm text-brand-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Cutting-Edge Tech Stack
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Collaborative R&D
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Agile Development
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Benefit 2: Scalability */}
            <Card className="card-hover h-full border-brand-gold/20 shadow-lg bg-brand-white hover:shadow-brand-gold/10">
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500">
                    <UsersIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-3">
                  Scalable Solutions
                </h3>
                <p className="text-brand-gray mb-4 flex-grow">
                  Deliver scalable IT solutions for client projects and deals, tailored to evolving
                  needs.
                </p>
                <div className="mb-6">
                  <ul className="text-sm text-brand-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Cloud-Based Infrastructure
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Flexible Scalability
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Rapid Deployment
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Benefit 3: Mutual Growth */}
            <Card className="card-hover h-full border-brand-gold/20 shadow-lg bg-brand-white hover:shadow-brand-gold/10">
              <CardContent className="p-6 h-full flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500">
                    <UsersIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-3">
                  Mutual Growth
                </h3>
                <p className="text-brand-gray mb-4 flex-grow">
                  Achieve shared success through strategic partnerships on projects and deals.
                </p>
                <div className="mb-6">
                  <ul className="text-sm text-brand-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Joint Ventures
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Co-Marketing Opportunities
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      Revenue Sharing
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Form Section */}
      <section className="section-padding bg-gradient-brown-gold">
        <div className="mx-auto max-w-4xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
              Propose a <span className="gold-black-brown-gradient">Partnership</span>
            </h2>
            <p className="text-xl text-brand-cream max-w-2xl mx-auto mt-4">
              Submit your proposal for client projects or strategic deals. A meeting will be scheduled
              to discuss partnership terms based on the project or deal.
            </p>
          </div>

          <Card className="border-brand-gold/20 shadow-lg bg-brand-white rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-brand-black mb-1"
                    >
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
                    <label
                      htmlFor="contact"
                      className="block text-sm font-medium text-brand-black mb-1"
                    >
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
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-brand-black mb-1"
                  >
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
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-brand-black mb-1"
                  >
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
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-brand-black mb-1"
                  >
                    Service for Partnership <span className="text-brand-gold">*</span>
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-black mb-1"
                  >
                    Project or Deal Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="block w-full rounded-lg border-brand-gray/30 shadow-sm focus:border-brand-gold focus:ring-brand-gold sm:text-sm py-3 px-4 bg-brand-white/5 transition-all duration-300"
                    placeholder="Describe your client project or deal proposal..."
                  />
                </div>
                {submitStatus && (
                  <div
                    className={`text-center text-sm ${
                      submitStatus.includes("successfully") ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {submitStatus}
                  </div>
                )}
                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Submit Proposal
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
            Ready to <span className="gold-black-brown-gradient">Collaborate?</span>
          </h2>
          <p className="text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
            Let’s work together on client projects or strategic deals to create innovative solutions
            and drive success.
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
  );
}