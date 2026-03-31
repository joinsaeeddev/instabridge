"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Sign up in minutes with just your email. No credit card required to get started.",
  },
  {
    number: "02",
    title: "Set up your storage",
    description:
      "Choose your plan and configure your secure S3 bucket. We handle all the technical setup.",
  },
  {
    number: "03",
    title: "Start uploading",
    description:
      "Access your storage via browser, mobile app, or API. Your files are encrypted and always available.",
  },
];

export default function Steps() {
  return (
    <section className="bg-surface py-10 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-xl px-6 py-4 sm:px-8 sm:py-5 mb-10 sm:mb-12 inline-block"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            Get started in 3 simple steps
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative"
            >
              <span className="text-4xl sm:text-5xl font-black text-primary-light leading-none">
                {step.number}
              </span>
              <h3 className="mt-3 text-base sm:text-lg font-bold text-dark">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
