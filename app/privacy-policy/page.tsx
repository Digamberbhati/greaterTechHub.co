import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - GreaterTechHub',
  description: 'Privacy Policy for GreaterTechHub. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  console.log('Privacy Policy page rendered');

  return (
    <div className="pt-24 min-h-screen">
      <div className="mx-auto max-w-4xl container-padding section-padding">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-brand-navy mb-8">Privacy Policy</h1>
          
          <p className="text-brand-gray mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8 text-brand-gray">
            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Introduction</h2>
              <p>
                GreaterTechHub ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Information We Collect</h2>
              <p>We may collect information about you in various ways, including:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Personal information you provide directly (name, email, phone number)</li>
                <li>Technical information about your device and usage patterns</li>
                <li>Information collected through cookies and similar technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Ensure the security and integrity of our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
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