// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-100 dark:bg-gray-900">
      <div className="text-center mx-auto">

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <img src="/logo.svg" alt="SoftSell Logo" className="w-20 h-20 mx-auto mb-6" />
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-4xl font-bold mb-4 text-gray-800 dark:text-white"
        >
          Sell Unused Software Licenses
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Get instant valuation and turn unused licenses into cash.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
        >
          Get a Quote
        </motion.button>
      </motion.div>
      </div>
    </section>
  );
}
