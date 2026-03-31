"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* Blue hero top */}
      <section className="bg-primary text-white">
        <div className="mx-auto text-center max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl mx-auto sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight max-w-4xl"
          >
            Your Files. Secured.
            <br />
            Accessible. Yours.
          </motion.h1>
        </div>
      </section>
    </>
  );
}
