import PageHero from "../components/PageHero";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We collect information you provide when creating an account (name, email, payment details) and technical information such as IP address and device type for service operation and security purposes.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-5">How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Your information is used solely to provide, maintain, and improve our services. We do not sell your personal data to third parties. We may use anonymised, aggregated data for analytics purposes.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-5">Data Security</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            All data is encrypted at rest (AES-256) and in transit (TLS). We implement industry-standard security measures to protect against unauthorised access, alteration, or destruction.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-5">Your Rights</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Under the Protection of Personal Information Act (POPIA), you have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-5">Contact</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            For privacy-related enquiries, contact us at privacy@instabridge.co.za.
          </p>

          <p className="text-sm text-gray-400 mt-12">Last updated: March 2025</p>
        </div>
      </section>
    </>
  );
}
