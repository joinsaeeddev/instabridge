import PageHero from "../components/PageHero";

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-gray prose-sm sm:prose-base max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            By accessing or using Instabridge services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-5">2. Description of Service</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Instabridge provides enterprise-grade S3 cloud storage services for businesses and individuals. Our services include secure file storage, organisation, sharing, and access via web and mobile platforms.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-5">3. User Accounts</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorised use.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-5">4. Data & Privacy</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Your data remains yours. We do not access, share, or sell your files. Please refer to our Privacy Policy for detailed information about how we handle your data.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-5">5. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Instabridge shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, to the maximum extent permitted by South African law.
          </p>

          <p className="text-sm text-gray-400 mt-12">Last updated: March 2025</p>
        </div>
      </section>
    </>
  );
}
