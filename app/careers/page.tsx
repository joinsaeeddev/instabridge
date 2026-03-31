"use client";

import { motion } from "framer-motion";
import PageHero from "../components/PageHero";

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Join our team and help build the future of cloud storage in South Africa."
      />

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              We&apos;re Growing
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10">
              We&apos;re always looking for talented people who are passionate
              about security, infrastructure, and building great products.
            </p>
            <div className="rounded-xl border border-gray-200 p-8 sm:p-12 bg-gray-50">
              <p className="text-gray-500">
                No open positions at the moment. Check back soon or send your CV
                to{" "}
                <a
                  href="mailto:careers@instabridge.co.za"
                  className="text-primary font-medium hover:underline"
                >
                  careers@instabridge.co.za
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
