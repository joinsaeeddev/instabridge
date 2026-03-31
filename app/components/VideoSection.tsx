"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="relative">
      <video
        className="block w-full h-auto"
        src="https://framerusercontent.com/assets/B5tIjHj97dorI5a88zhbom1t9Q.mp4"
        loop
        muted
        playsInline
        autoPlay
        preload="auto"
      />
      {/* <div className="absolute inset-0 bg-dark/60" /> */}

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
          <div className="flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-block rounded bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-primary-dark transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
    </section>
  );
}
