"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";

const categories = [
  {
    title: "Getting Started",
    articles: [
      "Creating your account",
      "Setting up your first bucket",
      "Uploading your first files",
      "Understanding your dashboard",
    ],
  },
  {
    title: "Account & Billing",
    articles: [
      "Managing your subscription",
      "Updating payment methods",
      "Understanding your invoice",
      "Cancelling your plan",
    ],
  },
  {
    title: "Security & Privacy",
    articles: [
      "How your data is encrypted",
      "Two-factor authentication",
      "Managing access permissions",
      "Data residency information",
    ],
  },
  {
    title: "API & Integrations",
    articles: [
      "S3-compatible API overview",
      "Generating API keys",
      "Using the REST API",
      "Third-party integrations",
    ],
  },
];

export default function HelpCenterPage() {
  return (
    <>
      <PageHero
        title="Help Center"
        subtitle="Find guides, tutorials, and answers to help you get the most out of Instabridge."
      />

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-gray-200 p-6 sm:p-8"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-5">
                  {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.articles.map((article) => (
                    <li key={article}>
                      <Link
                        href="#"
                        className="text-sm text-primary hover:underline"
                      >
                        {article}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
