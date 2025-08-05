"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GiftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          ? "bg-green-100 text-green-800 border border-green-300"
          : "bg-red-100 text-red-800 border border-red-300"
      }`}
    >
      {message}
    </motion.div>
  );
};

export default function ReferAndEarn() {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;
      if (!apiKey) {
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

      if (result.success) {
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
      setSubmitStatus({
        message: "Failed to submit referral. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[#2596BE]">Refer and Earn</span> Rewards
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Refer client projects or deals to GreaterTechHub and earn exciting rewards.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Why <span className="text-[#2596BE]">Refer Us?</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto mt-4">
              Refer projects or deals to unlock rewards and contribute to innovative IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card
                key={i}
                className="h-full border-gray-200 shadow-md bg-white hover:shadow-lg transition"
              >
                <CardContent className="p-6 h-full flex flex-col items-center text-center">
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-[#4A78D3]">
                      <GiftIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#2596BE] mb-3">
                    {["Earn Exciting Rewards", "Build Connections", "Support Innovation"][i]}
                  </h3>
                  <p className="text-black mb-4 flex-grow">
                    {[
                      "Receive tailored rewards based on the projects or deals you refer.",
                      "Strengthen your network by connecting clients with our expert services.",
                      "Help clients achieve their goals by referring them to our innovative solutions.",
                    ][i]}
                  </p>
                  <ul className="text-sm text-black space-y-1">
                    {[
                      ["Cash Incentives", "Gift Vouchers", "Exclusive Benefits"],
                      ["Expand Your Network", "Strategic Alliances", "Collaborative Opportunities"],
                      ["Cutting-Edge Solutions", "Client Success", "Industry Impact"],
                    ][i].map((item) => (
                      <li key={item} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#4A78D3] rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="section-padding bg-[#f7f7f7]">
        <div className="mx-auto max-w-4xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Submit Your <span className="text-[#2596BE]">Referral</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto mt-4">
              Refer a client project or deal and earn rewards. A meeting will be scheduled to
              discuss the number of gifts based on the project or deal.
            </p>
          </div>

          <Card className="border-gray-200 shadow-md bg-white rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name <span className="text-[#4A78D3]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#4A78D3] focus:border-[#4A78D3]"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium mb-1">
                      Contact Information <span className="text-[#4A78D3]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#4A78D3] focus:border-[#4A78D3]"
                      placeholder="Email or Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-1">
                    Preferred Date for Discussion <span className="text-[#4A78D3]">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#4A78D3] focus:border-[#4A78D3]"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-1">
                    Project Name <span className="text-[#4A78D3]">*</span>
                  </label>
                  <input
                    type="text"
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#4A78D3] focus:border-[#4A78D3]"
                    placeholder="Name of the Project or Deal"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1">
                    Service for Referral <span className="text-[#4A78D3]">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#4A78D3] focus:border-[#4A78D3]"
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
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Project or Deal Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#4A78D3] focus:border-[#4A78D3]"
                    placeholder="Describe the client project or deal you are referring..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-[#4A78D3] hover:bg-black text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 ${
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

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-[#2596BE]">Earn Rewards?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Refer clients to GreaterTechHub and unlock exciting rewards for successful projects or
            deals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#4A78D3] hover:bg-black text-white font-semibold px-8 py-4 rounded-lg shadow-md transition-all duration-300"
          >
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
