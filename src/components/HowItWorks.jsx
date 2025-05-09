// src/components/HowItWorks.jsx
import { motion } from "framer-motion";

const steps = [
  { title: "Upload License", icon: "📤" },
  { title: "Get Valuation", icon: "📈" },
  { title: "Get Paid", icon: "💸" },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800 text-center">
      <div className="text-center mx-auto">

      <motion.h2
        className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        How It Works
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="w-52 p-6 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded shadow"
          >
            <div className="text-4xl mb-2">{step.icon}</div>
            <p className="font-medium">{step.title}</p>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
