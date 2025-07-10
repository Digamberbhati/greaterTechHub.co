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
              <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Terms</h2>
              <p>
                By accessing this Website, accessible from <a href="https://greatertechhub.com/" className="text-brand-navy hover:underline">https://greatertechhub.com/</a>, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trademark law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on GreaterTechHub's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display;</li>
                <li>attempt to reverse engineer any software contained on GreaterTechHub's Website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p className="mt-4">
                This will let GreaterTechHub terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated, and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service have been created with the help of the Terms Of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Disclaimer</h2>
              <p>
                All the materials on GreaterTechHub's Website are provided "as is". GreaterTechHub makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, GreaterTechHub does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Limitations</h2>
              <p>
                GreaterTechHub or its suppliers will not be held accountable for any damages that will arise with the use or inability to use the materials on GreaterTechHub's Website, even if GreaterTechHub or an authorized representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdictions do not allow limitations on implied warranties or limitations of liability for incidental damages, so these limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Revisions and Errata</h2>
              <p>
                The materials appearing on GreaterTechHub's Website may include technical, typographical, or photographic errors. GreaterTechHub will not promise that any of the materials in this Website are accurate, complete, or current. GreaterTechHub may change the materials contained on its Website at any time without notice. GreaterTechHub does not make any commitment to update the materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Links</h2>
              <p>
                GreaterTechHub has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by GreaterTechHub of the site. The use of any linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Site Terms of Use Modifications</h2>
              <p>
                GreaterTechHub may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Your Privacy</h2>
              <p>
                Please read our <a href="/privacy-policy" className="text-brand-navy hover:underline">Privacy Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Governing Law</h2>
              <p>
                Any claim related to GreaterTechHub's Website shall be governed by the laws without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Payment Terms</h2>
              <p>
                Payment terms will be specified in individual service agreements. A 50% advance payment is required before project commencement. The remaining balance is due within 30 days of the invoice date unless otherwise specified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Project Delivery</h2>
              <p>
                The project delivered will strictly adhere to the specifications and decisions finalized during project meetings with the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Limitation of Liability</h2>
              <p>
                GreaterTechHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Contact Information</h2>
              <p>
                For questions regarding these Terms & Conditions, please contact us:
              </p>
              <div className="mt-4">
                <p><strong>Email:</strong> info@greatertechhub.com</p>
                <p><strong>Phone:</strong> +91 9588160069</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}