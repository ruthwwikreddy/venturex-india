import React from 'react';
import { StoryCard } from './StoryCard';
import { Lightbulb, Target, Rocket } from 'lucide-react';

export function StorySection() {
  return (
    <div className="space-y-12">
      <StoryCard
        icon={Lightbulb}
        title="The Problem"
        content="Entrepreneurs and businesses often struggle to transform their ideas into functional products due to high development costs and technical barriers. Many great ideas remain untested, never reaching their true potential."
      />
      
      <StoryCard
        icon={Target}
        title="The Spark"
        content="What if we could create a space where people could bring their ideas to life without worrying about high costs and long timelines? This spark led to VentureX—a platform focused on building MVPs and websites to help businesses launch quickly and efficiently."
      />
      
      <StoryCard
        icon={Rocket}
        title="The Solution"
        content="VentureX was born to provide creative solutions for innovators and businesses. We focus on delivering MVPs and professional websites that showcase the core of any idea, allowing clients to test, iterate, and improve while saving time and money."
      />
    </div>
  );
}