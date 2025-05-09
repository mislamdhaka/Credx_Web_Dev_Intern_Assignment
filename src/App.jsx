// src/App.jsx
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import ThemeToggle from './components/ThemeToggle'; // dark/light mode button

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen font-sans text-center">
      {/* Dark Mode Toggle Button */}
      <div className="w-full flex justify-end p-4">
        <ThemeToggle />
      </div>

      {/* Centered content container */}
      <main className="max-w-7xl mx-auto text-center px-4">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>

      {/* Optional Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;
