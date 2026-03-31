"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";

const faqs = [
  {
    q: "What is Instabridge?",
    a: "Instabridge is a private, secure cloud storage service built for South African businesses and individuals. We provide enterprise-grade S3 storage accessible from your browser or mobile app.",
  },
  {
    q: "How is my data secured?",
    a: "All files are encrypted at rest using AES-256 encryption and in transit using TLS. We use enterprise-grade S3 infrastructure with no shared servers — your storage is yours alone.",
  },
  {
    q: "Can I access my files from mobile?",
    a: "Yes! Instabridge is accessible from any device — desktop browser, mobile browser, or our native mobile application.",
  },
  {
    q: "Is there a free trial?",
    a: "We offer a free tier to get started so you can experience Instabridge before committing to a paid plan. No credit card required.",
  },
  {
    q: "Where is my data stored?",
    a: "Your data is stored on secure infrastructure with data residency options suited for South African compliance requirements.",
  },
  {
    q: "Can I integrate with existing tools?",
    a: "Yes. Instabridge provides an S3-compatible API, so you can integrate directly with tools and workflows you already use.",
  },
  {
    q: "How do I get support?",
    a: "Depending on your plan, you have access to email support, priority chat support, or a dedicated account manager. Visit our Support page for more details.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
          {q}
        </span>
        <svg
          className={`w-5 h-5 shrink-0 text-primary transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm sm:text-base text-gray-600 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQsPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers to the most common questions about Instabridge."
      />

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </>
  );
}
