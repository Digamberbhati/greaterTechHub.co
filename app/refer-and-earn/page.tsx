"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GiftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // For animations

// Reusable Notification Component
const Notification = ({ message, type }: { message: string; type: "success" | "error" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.3 }}
      className={`text-sm font-medium px-4 py-2 rounded-lg inline-flex items-center ${
        type === "success"
          ? "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300"
          : "bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-300"
      }`}
    >
      {message}
    </motion.div>
  );
};

export default function ReferAndEarn() {
  console.log("Refer and Earn page rendered");

  // State for form data, submission feedback, and loading
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
    project: "",
    service: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    "BPO-Services",
    "System Design & Architecture",
    "IT Asset Management",
  ];

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;
      if (!apiKey) {
        console.error("Web3Forms API key is missing");
        setSubmitStatus({
          message: "Configuration error. Please contact support.",
          type: "error",
        });
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          ...formData,
        }),
      });

      const result = await response.json();
      console.log("Web3Forms API response:", result);

      if (result.success) {
        console.log("Form submitted successfully:", formData);
        setFormData({
          name: "",
          contact: "",
          date: "",
          project: "",
          service: "",
          message: "",
        });
        setSubmitStatus({
          message: "Referral submitted successfully!",
          type: "success",
        });
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error: any) {
      console.error("Form submission error:", error.message, error.stack);
      setSubmitStatus({
        message: "Failed to submit referral. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-black-gold">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 text-shadow-gold">
              <span className="gold-black-brown-gradient">Refer and Earn</span>{" "}
              Rewards
            </h1>
            <p className="text-xl text-brand-cream max-w-3xl mx-auto">
              Refer client projects or deals to GreaterTechHub and earn exciting
              rewards. Let’s grow together through your referrals.
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
              Refer projects or deals to unlock rewards and contribute to
              innovative IT solutions.
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
                  Receive tailored rewards based on the projects or deals you
                  refer.
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
                  Strengthen your network by connecting clients with our expert
                  services.
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
                  Help clients achieve their goals by referring them to our innovative
                  solutions.
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
              Submit Your{" "}
              <span className="gold-black-brown-gradient">Referral</span>
            </h2>
            <p className="text-xl text-brand-cream max-w-2xl mx-auto mt-4">
              Refer a client project or deal and earn rewards. A meeting will be
              scheduled to discuss the number of gifts based on the project or
              deal.
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
                      value={formData.name}
                      onChange={handleChange}
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
                      Contact Information{" "}
                      <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
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
                    Preferred Date for Discussion{" "}
                    <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
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
                    value={formData.project}
                    onChange={handleChange}
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
                    Service for Referral{" "}
                    <span className="text-brand-gold">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border-brand-gray/30 shadow-sm focus:border-brand-gold focus:ring-brand-gold sm:text-sm py-3 px-4 bg-brand-white/5 transition-all duration-300"
                  >
                    <option value="" disabled>
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
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="block w-full rounded-lg border-brand-gray/30 shadow-sm focus:border-brand-gold focus:ring-brand-gold sm:text-sm py-3 px-4 bg-brand-white/5 transition-all duration-300"
                    placeholder="Describe the client project or deal you are referring..."
                  ></textarea>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Referral"}
                  </Button>
                  <AnimatePresence>
                    {submitStatus && (
                      <Notification
                        message={submitStatus.message}
                        type={submitStatus.type}
                      />
                    )}
                  </AnimatePresence>
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
            Refer clients to GreaterTechHub and unlock exciting rewards for
            successful projects or deals.
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