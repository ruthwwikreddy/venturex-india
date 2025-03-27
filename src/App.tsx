import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './pages/AboutUs';
import { Story } from './pages/Story';
import { Services } from './pages/Services';
import { ProjectShowcase } from './pages/ProjectShowcase';
import FAQs from './components/FAQs';
import { Contact } from './pages/Contact';
import { GetStarted } from './pages/GetStarted';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about-us">
          <AboutUs />
        </div>
        <div id="our-story">
          <Story />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="portfolio">
          <ProjectShowcase />
        </div>
        <div id="faqs">
          <FAQs />
        </div>
        <div id="get-started">
          <GetStarted />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}