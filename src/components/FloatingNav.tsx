import React from 'react';
import { useInView } from 'react-intersection-observer';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQs', href: '#faqs' },
];

export function FloatingNav() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
      <div ref={ref} className="h-1" /> {/* Observer element */}
      <nav className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        !inView ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}>
        <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-white/20">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white hover:text-[#6D5DFB] transition-colors duration-300 text-sm font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}