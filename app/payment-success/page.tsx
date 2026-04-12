"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string; trxref?: string; email?: string }>;
}) {
  const params = use(searchParams);
  // Paystack redirect sends both `reference` and `trxref` as query params
  const reference = params.reference || params.trxref;
  const email = params.email;

  return (
    <section className="min-h-[70vh] bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-white p-8 sm:p-12 shadow-lg text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15, type: "spring" }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light"
          >
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl font-black text-dark mb-4">
            Payment Successful
          </h1>
          <p className="text-base text-muted leading-relaxed mb-6">
            Thank you for your purchase! Your payment has been processed
            successfully.
          </p>

          {(reference || email) && (
            <div className="rounded-lg bg-primary-light/50 p-5 text-left mb-6 space-y-2">
              {reference && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Reference
                  </p>
                  <p className="text-sm font-mono text-dark break-all">
                    {reference}
                  </p>
                </div>
              )}
              {email && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Confirmation sent to
                  </p>
                  <p className="text-sm text-dark break-all">{email}</p>
                </div>
              )}
            </div>
          )}

          <p className="text-sm text-muted mb-8">
            We&apos;ll email your login credentials
            {email ? <> to <span className="font-semibold text-dark">{email}</span></> : null}{" "}
            within 24 hours.
          </p>

          <Link
            href="/"
            className="inline-block rounded-lg bg-primary px-8 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
