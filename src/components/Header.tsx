import React, { useState, useEffect } from 'react';
import { NavigationItem } from './NavigationItem';
import { Logo } from './Logo';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-7xl rounded-2xl ${
        isScrolled 
          ? 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="px-6 py-3 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <Logo />
        
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavigationItem
              key={item.label}
              href={item.href}
              isActive={activeSection === item.href.substring(1)}
            >
              {item.label}
            </NavigationItem>
          ))}
        </div>
    
        <button 
          onClick={handleGetStarted}
          className="bg-gradient-to-r from-blue-800 to-blue-700 text-white px-5 py-2 rounded-xl text-sm font-medium hover:shadow-[0_0_20px_rgba(0,51,102,0.5)] transition-all duration-300 transform hover:scale-105"
          aria-label="Get Started - Open registration form"
        >
          Get Started
        </button>
      </nav>
    </header>
  );
}