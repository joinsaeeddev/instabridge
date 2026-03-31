"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    features: ["Standard security", "Email support"],
    cta: "Choose Basic",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Pro",
    features: ["Enterprise-grade security", "Priority chat support"],
    cta: "Choose Pro",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    features: ["Zero-trust security", "Dedicated account manager"],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-black text-dark">
            Flexible. Transparent. Pro.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-xl border p-6 sm:p-8 flex flex-col ${
                plan.highlighted
                  ? "border-primary shadow-lg"
                  : "border-border"
              }`}
            >
              <h3 className="text-lg font-bold text-dark mb-5">
                {plan.name}
              </h3>
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <svg
                      className="w-4 h-4 text-primary mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`mt-6 block rounded-lg py-2.5 text-center text-sm font-bold transition-colors ${
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-primary-light text-primary hover:bg-primary-lighter"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
