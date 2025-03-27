import React from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { Card } from '../components/shared/Card';
import { Code, Rocket, Smartphone, Brain, Users, Lightbulb } from 'lucide-react';
import { Button } from '../components/shared/Button';

export function Services() {
  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto">
          Comprehensive solutions to bring your innovative ideas to life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card
          icon={Code}
          title="MVP Development"
          description="Quick turnaround on minimum viable products with modern tech stack integration"
          onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
        />
        <Card
          icon={Smartphone}
          title="Web Design & Development"
          description="Create engaging user experiences for web and mobile applications"
          onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
        />
        <Card
          icon={Brain}
          title="UI/UX Prototyping"
          description="Design intuitive user experiences that delight your customers"
          onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
        />
        <Card
          icon={Rocket}
          title="Custom Tech Solutions"
          description="Integrate AI, automation, and digital tools into your business"
          onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
        />
        <Card
          icon={Lightbulb}
          title="Startup Consulting"
          description="Strategic guidance for product development and launch strategies"
          onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
        />
        <Card
          icon={Users}
          title="Tech Integration"
          description="Implement cutting-edge technologies to enhance your digital solutions"
          onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Build the Future?</h2>
        <p className="text-[#CCCCCC] mb-8">
          Join us on our journey as we build the future, one MVP at a time
        </p>
        <Button 
          variant="primary"
          onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Schedule a Free Consultation
        </Button>
      </div>
    </PageContainer>
  );
}