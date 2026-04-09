"use client";

import { motion } from "framer-motion";
import PackageCards from "./PackageCards";

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

        <PackageCards />
      </div>
    </section>
  );
}
