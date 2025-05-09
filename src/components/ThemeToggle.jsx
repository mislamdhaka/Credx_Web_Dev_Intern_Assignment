// src/components/ThemeToggle.jsx
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  // initialize from localStorage or system
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setDark(d => !d)}
        className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
      >
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
}
