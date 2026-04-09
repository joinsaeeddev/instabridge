import PageHero from "../components/PageHero";

export default function SupportPage() {
  return (
    <>
      <PageHero
        title="Support"
        subtitle="We're here to help. Get in touch with our support team for assistance."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 leading-relaxed mb-6">
            For technical assistance or inquiries regarding the Instabridge Console & Portal, please contact our support team:
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-5">Email</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            <a href="mailto:yusufm56@gmail.com" className="text-blue-600 hover:underline">yusufm56@gmail.com</a>
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-5">Response Time</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We aim to respond to all queries within 24-48 hours.
          </p>
        </div>
      </section>
    </>
  );
}
