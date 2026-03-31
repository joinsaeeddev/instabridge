"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WhatIs() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-primary p-6 sm:p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                  What is
                  <br />
                  Instabridge
                </h2>
                <Link
                  href="/contact"
                  className="hidden sm:inline-block shrink-0 rounded bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary-light transition-colors"
                >
                  Get Started
                </Link>
              </div>

              <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
                Instabridge gives you a private, secure cloud storage space
                accessible from your browser or mobile app. Store, organise and
                access your files from anywhere. No complicated setup. No shared
                servers. Just your storage, your way.
              </p>

              <Link
                href="/contact"
                className="sm:hidden mt-4 inline-block rounded bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary-light transition-colors"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Right - Cloud Storage Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="text-center bg-white rounded-xl p-6 sm:p-8">
                <div className="mx-auto mb-4 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-primary-lighter">
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                    />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                  Instabridge
                </span>

                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1.5">
                  <div className="h-2 w-2 rounded-full bg-success" />
                  <span className="text-xs font-medium text-body">
                    Secure S3 Storage
                  </span>
                </div>

                <h3 className="mt-5 text-lg sm:text-xl font-bold text-dark">
                  Secure Cloud
                  <br />
                  Storage
                </h3>
                <p className="mt-3 text-xs text-muted max-w-xs mx-auto leading-relaxed">
                  Enterprise-grade file storage. Keep your data safe, accessible,
                  and organized.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
