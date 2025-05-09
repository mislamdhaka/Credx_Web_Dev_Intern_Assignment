// src/components/ContactForm.jsx
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="text-center mx-auto">
      <motion.form
        className="space-y-4 max-w-xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-center text-2xl mb-4 text-gray-800 dark:text-white">Contact Us</h2>
        <input
          required
          placeholder="Name"
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white"
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white"
        />
        <input
          required
          placeholder="Company"
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white"
        />
        <select
          required
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white"
        >
          <option value="">Select License Type</option>
          <option>Microsoft</option>
          <option>Adobe</option>
          <option>Other</option>
        </select>
        <textarea
          required
          placeholder="Message"
          className="w-full p-3 border rounded h-28 bg-white dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </motion.form>
      </div>
    </section>
  );
}
