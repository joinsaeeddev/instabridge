"use client";

import { motion } from "framer-motion";
import PageHero from "../components/PageHero";

const features = [
  {
    title: "AES-256 Encryption at Rest",
    description: "Every file stored on Instabridge is encrypted using AES-256, the same standard used by banks and governments.",
  },
  {
    title: "TLS Encryption in Transit",
    description: "All data transfers between your device and our servers are protected with TLS encryption.",
  },
  {
    title: "Private Buckets",
    description: "No shared servers. Your storage is isolated in your own private S3 bucket with no cross-tenant access.",
  },
  {
    title: "Two-Factor Authentication",
    description: "Add an extra layer of security to your account with TOTP-based two-factor authentication.",
  },
  {
    title: "Access Controls",
    description: "Fine-grained permission controls let you decide who can access, view, or modify your files and folders.",
  },
  {
    title: "Audit Logs",
    description: "Track all access and changes to your storage with detailed audit logs available in your dashboard.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        title="Security"
        subtitle="Security isn't an afterthought — it's the foundation of everything we build."
      />

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-gray-200 p-6 sm:p-8"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
