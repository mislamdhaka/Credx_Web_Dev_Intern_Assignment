// src/components/Testimonials.jsx
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Alex J.",
    role: "IT Head",
    company: "GlobalSoft",
    text: "SoftSell helped us liquidate old licenses effortlessly. Smooth process!",
  },
  {
    name: "Meera P.",
    role: "Operations Manager",
    company: "NetSystems",
    text: "Their valuation was accurate, and the payout was fast. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800 text-center">
      <div className="text-center mx-auto">

      <motion.h2
        className="text-2xl font-semibold mb-10 text-gray-800 dark:text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        What Our Clients Say
      </motion.h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        {reviews.map((r, i) => (
          <motion.blockquote
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-6 border rounded shadow bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            <p className="italic text-lg">"{r.text}"</p>
            <footer className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              {r.name}, {r.role} @ <span className="font-medium">{r.company}</span>
            </footer>
          </motion.blockquote>
        ))}
        </div>
      </div>
    </section>
  );
}
