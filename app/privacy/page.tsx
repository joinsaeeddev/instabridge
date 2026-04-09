import PageHero from "../components/PageHero";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Instabridge Console & Portal respects your privacy. Here's how we handle your information."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Data Collection</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Instabridge Console & Portal does not collect or store personal user data. All connection data is handled locally on your device.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-5">Third Parties</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We do not share information with third-party services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-5">Permissions</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The app may request Camera access solely for scanning infrastructure QR codes.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-5">Contact</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            For privacy inquiries, contact: <a href="mailto:yusufm56@gmail.com" className="text-blue-600 hover:underline">yusufm56@gmail.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
