import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions - GreaterTechHub',
  description: 'Terms and Conditions for GreaterTechHub services. Read our terms of service before using our IT solutions.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsConditions() {
  console.log('Terms & Conditions page rendered');

  return (
    <div className="pt-24 min-h-screen">
      <div className="mx-auto max-w-4xl container-padding section-padding">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-brand-navy mb-8">Terms & Conditions</h1>
          
          <p className="text-brand-gray mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8 text-brand-gray">
            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using GreaterTechHub's services, you accept and agree to be 
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Services</h2>
              <p>
                GreaterTechHub provides comprehensive IT solutions including but not limited to:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Website and mobile application development</li>
                <li>Digital marketing and SEO services</li>
                <li>Cloud solutions and DevOps services</li>
                <li>Custom software development</li>
                <li>IT consulting and support services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Payment Terms</h2>
              <p>
                Payment terms will be specified in individual service agreements. 
                Generally, payments are due within 30 days of invoice date unless 
                otherwise specified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Limitation of Liability</h2>
              <p>
                GreaterTechHub shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages resulting from your use 
                of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Contact Information</h2>
              <p>
                For questions regarding these Terms & Conditions, please contact us:
              </p>
              <div className="mt-4">
                <p>Email: info@greatertechhub.com</p>
                <p>Phone: +1 (234) 567-8900</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}