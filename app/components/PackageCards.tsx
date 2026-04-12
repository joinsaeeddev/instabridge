"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export type Plan = {
  name: string;
  /** Display string shown on the card. */
  price: string;
  /** Numeric amount in major currency units (e.g. 99 for R99 / $99). */
  amount: number;
  /**
   * Currency code passed to Paystack. Default is ZAR for South African
   * merchants. Switch to "USD" if you've enabled USD on your Paystack account
   * and want to charge international cards in dollars.
   */
  currency: "ZAR" | "USD" | "NGN" | "GHS" | "KES";
  features: string[];
  highlighted: boolean;
};

export const plans: Plan[] = [
  {
    name: "2TB",
    price: "$99/year",
    amount: 99,
    currency: "ZAR",
    features: [
      "2TB storage",
      "Standard security",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "10TB",
    price: "$495/year",
    amount: 495,
    currency: "ZAR",
    features: [
      "10TB storage",
      "Enterprise-grade security",
      "Priority chat support",
    ],
    highlighted: true,
  },
  {
    name: "50TB",
    price: "$2457/year",
    amount: 2457,
    currency: "ZAR",
    features: [
      "50TB storage",
      "Zero-trust security",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
];

export default function PackageCards() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function openEmailModal(plan: Plan) {
    setSelectedPlan(plan);
    setEmail("");
    setError("");
  }

  function closeEmailModal() {
    if (submitting) return;
    setSelectedPlan(null);
    setEmail("");
    setError("");
  }

  async function startPaystackCheckout(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedPlan) return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          amount: selectedPlan.amount,
          currency: selectedPlan.currency,
          metadata: {
            plan_name: selectedPlan.name,
            plan_price: selectedPlan.price,
            custom_fields: [
              {
                display_name: "Plan",
                variable_name: "plan_name",
                value: selectedPlan.name,
              },
              {
                display_name: "Plan Price",
                variable_name: "plan_price",
                value: selectedPlan.price,
              },
              {
                display_name: "Customer Email",
                variable_name: "customer_email",
                value: email,
              },
            ],
          },
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.authorization_url) {
        setError(data.error || "Failed to initialize payment. Please try again.");
        setSubmitting(false);
        return;
      }

      // Redirect the user to Paystack's hosted checkout page.
      // No iframes, no popups — just a full-page redirect.
      window.location.href = data.authorization_url;
    } catch (err) {
      console.error("[Paystack] Failed to initialize checkout", err);
      setError(
        "Could not connect to the payment server. Please check your connection and try again."
      );
      setSubmitting(false);
    }
  }

  return (
    <>

      <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`rounded-xl border bg-white p-6 sm:p-8 flex flex-col ${
              plan.highlighted ? "border-primary shadow-lg" : "border-border"
            }`}
          >
            <h3 className="text-lg font-bold text-dark mb-5">{plan.name}</h3>
            <p className="text-2xl sm:text-3xl font-extrabold text-primary mt-2 mb-5">
              {plan.price}
            </p>
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
            <button
              type="button"
              onClick={() => openEmailModal(plan)}
              className={`mt-6 block w-full cursor-pointer rounded-lg py-2.5 text-center text-sm font-bold transition-colors ${
                plan.highlighted
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "bg-primary-light text-primary hover:bg-primary-lighter"
              }`}
            >
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>

      {/* Email capture modal — required so we can pass an email to Paystack
          and so the admin knows where to send credentials after payment. */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={closeEmailModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="paystack-modal-title"
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  id="paystack-modal-title"
                  className="text-xl font-bold text-dark"
                >
                  Continue to Payment
                </h3>
                <p className="text-sm text-muted mt-1">
                  {selectedPlan.name} — {selectedPlan.price}
                </p>
              </div>
              <button
                type="button"
                onClick={closeEmailModal}
                className="text-muted hover:text-dark shrink-0"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <p className="mt-4 text-sm text-muted">
              Please enter your email address. We&apos;ll use it to send your
              login credentials within 24 hours of a successful payment.
            </p>

            <form onSubmit={startPaystackCheckout} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="paystack-email"
                  className="block text-sm font-semibold text-dark mb-1"
                >
                  Email address
                </label>
                <input
                  id="paystack-email"
                  type="email"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {error && (
                  <p className="mt-2 text-xs text-red-600">{error}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg cursor-pointer bg-primary py-2.5 text-sm font-bold text-white hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting
                  ? "Redirecting to Paystack…"
                  : `Pay ${selectedPlan.price} with Paystack`}
              </button>

              <p className="text-xs text-muted text-center">
                You&apos;ll be taken to Paystack&apos;s secure checkout. Your
                card details never touch our servers.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
