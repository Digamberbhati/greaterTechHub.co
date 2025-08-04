// app/partnership/page.tsx
"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UsersIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Partnership() {
  console.log("Partnership page rendered");

  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;
    if (!apiKey) {
      setSubmitStatus("Configuration error: API key is missing. Please contact support.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus("Thank you! Your proposal has been submitted successfully.");
        form.reset();
      } else {
        setSubmitStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build <span className="text-[#2596BE]">Partnerships</span> for Success
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-[#4A78D3]">
            Collaborate with GreaterTechHub on client projects or strategic deals to deliver cutting-edge IT solutions and achieve mutual growth.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="text-[#2596BE]">Partner with Us?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Partner with us to work on client projects or deals, leveraging our expertise for shared success.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Propose a <span className="text-[#2596BE]">Partnership</span>
          </h2>
          <p className="text-xl text-[#4A78D3] max-w-2xl mx-auto mt-4">
            Submit your proposal for client projects or strategic deals.
          </p>

          <Card className="mt-8 bg-white border border-gray-200">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" placeholder="Your Full Name" required className="w-full p-3 border rounded text-black" />
                  <input type="text" name="contact" placeholder="Email or Phone" required className="w-full p-3 border rounded text-black" />
                </div>
                <input type="date" name="date" required className="w-full p-3 border rounded text-black" />
                <input type="text" name="project" placeholder="Project Name" required className="w-full p-3 border rounded text-black" />
                <select name="service" required className="w-full p-3 border rounded text-black">
                  <option value="" disabled>Select a Service</option>
                  {services.map(service => <option key={service}>{service}</option>)}
                </select>
                <textarea name="message" rows={4} placeholder="Project or Deal Details" className="w-full p-3 border rounded text-black" />

                {submitStatus && (
                  <div className={`text-center text-sm ${submitStatus.includes("successfully") ? "text-green-600" : "text-red-600"}`}>{submitStatus}</div>
                )}

                <div className="text-center">
                  <Button type="submit" className="bg-[#4A78D3] hover:bg-black text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                    Submit Proposal
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-[#2596BE]">Collaborate?</span>
          </h2>
          <p className="text-xl text-[#4A78D3] mb-8 max-w-2xl mx-auto">
            Let’s work together on client projects or strategic deals.
          </p>
          <Button asChild size="lg" className="bg-[#4A78D3] hover:bg-black text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
