"use client";

import { motion } from "framer-motion";
import PageHero from "../components/PageHero";

const services = [
  { name: "S3 Storage API", status: "Operational" },
  { name: "Web Portal", status: "Operational" },
  { name: "Mobile App", status: "Operational" },
  { name: "Authentication", status: "Operational" },
  { name: "File Upload/Download", status: "Operational" },
  { name: "Billing & Payments", status: "Operational" },
];

export default function SystemStatusPage() {
  return (
    <>
      <PageHero
        title="System Status"
        subtitle="Real-time status of all Instabridge services."
      />

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-green-50 border border-green-200 p-6 mb-10 text-center"
          >
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-lg font-bold text-green-800">
                All Systems Operational
              </span>
            </div>
            <p className="text-sm text-green-700">
              Last checked: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          <div className="space-y-4">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between rounded-lg border border-gray-200 px-5 py-4"
              >
                <span className="text-sm font-medium text-gray-900">
                  {service.name}
                </span>
                <span className="flex items-center gap-1.5 text-sm font-medium text-green-600">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  {service.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
