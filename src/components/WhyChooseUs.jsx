// src/components/WhyChooseUs.jsx
import { motion } from "framer-motion";

const points = [
  "Fast and Secure Transactions",
  "Trusted by 10,000+ clients",
  "Best Market Price Guaranteed",
  "24/7 Customer Support",
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
      <div className="text-center mx-auto">

      <motion.h2
        className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Us?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {points.map((text, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-4 border rounded shadow bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            {text}
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
