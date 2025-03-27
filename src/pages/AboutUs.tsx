import React from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { Card } from '../components/shared/Card';
import { Target, Heart, Zap, Code, Lightbulb, Rocket } from 'lucide-react';
import { Button } from '../components/shared/Button';

export function AboutUs() {
  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About VentureX</h1>
        <p className="text-[#CCCCCC] text-lg max-w-3xl mx-auto">
          VentureX is committed to helping entrepreneurs and businesses develop Minimum Viable Products (MVPs) and professional websites. We provide essential tools, expert support, and innovative design solutions to help bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card
          icon={Target}
          title="Our Mission"
          description="To simplify the MVP development and web design process, enabling startups and businesses to launch faster and more effectively."
        />
        <Card
          icon={Heart}
          title="Our Values"
          description="Innovation – Crafting solutions that push creative boundaries. Efficiency – Delivering high-quality products in minimal time. Collaboration – Partnering with clients to create impactful digital solutions."
        />
        <Card
          icon={Zap}
          title="Our Impact"
          description="VentureX has helped startups and businesses bring their ideas to reality through efficient MVP creation and web design."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group">
          <h2 className="text-2xl font-bold text-white mb-6">Core Services</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 group/item hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold group-hover/item:text-blue-500 transition-colors duration-300">MVP Development</h3>
                <p className="text-[#CCCCCC] group-hover/item:text-white transition-colors duration-300">Transforming concepts into market-ready prototypes</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group/item hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold group-hover/item:text-blue-500 transition-colors duration-300">Web Design & Development</h3>
                <p className="text-[#CCCCCC] group-hover/item:text-white transition-colors duration-300">Building visually appealing and functional websites</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group/item hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold group-hover/item:text-blue-500 transition-colors duration-300">UI/UX Prototyping</h3>
                <p className="text-[#CCCCCC] group-hover/item:text-white transition-colors duration-300">Designing intuitive user experiences</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group">
          <h2 className="text-2xl font-bold text-white mb-6">Our Process</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-2 group/item hover:transform hover:translate-x-2 transition-all duration-300">
              <span className="text-blue-500 text-2xl">1.</span>
              <span className="text-[#CCCCCC] group-hover/item:text-white transition-colors duration-300">Idea Consultation – Discuss your vision and requirements</span>
            </li>
            <li className="flex items-start space-x-2 group/item hover:transform hover:translate-x-2 transition-all duration-300">
              <span className="text-blue-500 text-2xl">2.</span>
              <span className="text-[#CCCCCC] group-hover/item:text-white transition-colors duration-300">Rapid Prototyping – Develop a functional prototype or website</span>
            </li>
            <li className="flex items-start space-x-2 group/item hover:transform hover:translate-x-2 transition-all duration-300">
              <span className="text-blue-500 text-2xl">3.</span>
              <span className="text-[#CCCCCC] group-hover/item:text-white transition-colors duration-300">Iteration & Refinement – Optimize based on user feedback</span>
            </li>
            <li className="flex items-start space-x-2 group/item hover:transform hover:translate-x-2 transition-all duration-300">
              <span className="text-blue-500 text-2xl">4.</span>
              <span className="text-[#CCCCCC] group-hover/item:text-white transition-colors duration-300">Deployment & Support – Launch with ongoing assistance</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <Button 
          variant="primary"
          onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started Now
        </Button>
      </div>
    </PageContainer>
  );
}