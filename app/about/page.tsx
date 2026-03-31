"use client";

import { motion } from "framer-motion";
import PageHero from "../components/PageHero";

const values = [
  {
    title: "Security First",
    description:
      "Every file is encrypted at rest and in transit. We use enterprise-grade S3 infrastructure to keep your data safe.",
  },
  {
    title: "South African Built",
    description:
      "Designed and operated for South African businesses with local compliance and data residency in mind.",
  },
  {
    title: "Simplicity",
    description:
      "No complicated setups. No shared servers. Just private, secure storage accessible from any device.",
  },
  {
    title: "Transparency",
    description:
      "Clear pricing, no hidden fees. You always know what you're paying for and what you're getting.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Instabridge"
        subtitle="We're on a mission to give South African businesses and individuals secure, reliable cloud storage they can trust."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
              Instabridge was founded with a simple idea: cloud storage should be
              private, secure, and accessible to everyone — not just big
              corporations with dedicated IT teams.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We saw South African businesses struggling with expensive
              international providers, complicated setups, and concerns about data
              sovereignty. So we built something better — enterprise-grade S3
              storage that&apos;s simple to use, transparent in pricing, and built
              for the South African market.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 sm:mb-14">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
