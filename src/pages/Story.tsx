import React from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { StorySection } from '../components/story/StorySection';
import { ImpactSection } from '../components/story/ImpactSection';
import { TimelineCard } from '../components/story/TimelineCard';
import { Rocket, Lightbulb, Users, Code, Monitor, LineChart, BarChart3, Zap } from 'lucide-react';

export function Story() {
  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h1>
        <p className="text-[#CCCCCC] text-lg max-w-3xl mx-auto">
          From a simple observation to a platform that empowers innovation—discover how VentureX came to be and where we're headed.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <StorySection />
        
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Journey</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-800/50 to-blue-900/20 h-full hidden md:block"></div>
            
            <TimelineCard
              year="Mid-2024"
              title="The Idea & Early Development"
              description="Conceptualized the idea of VentureX, initially as a platform for startups with features like crowdfunding, a marketplace, and Pitch House."
              icon={<Lightbulb className="text-white" />}
              isLeft={false}
            />
            
            <TimelineCard
              year="Late 2024"
              title="Concept Refinement"
              description="Started refining the concept, exploring how to create a space for MVP development."
              icon={<Monitor className="text-white" />}
              isLeft={true}
            />
            
            <TimelineCard
              year="February 4, 2025"
              title="Early Pivot to an MVP Agency"
              description="Defined VentureX as a community working messaging app with real-time communication, file sharing, and project tracking."
              icon={<Code className="text-white" />}
              isLeft={false}
            />
            
            <TimelineCard
              year="February 14, 2025"
              title="Strategic Pivot"
              description="Pivoted VentureX into a dedicated MVP development & web design agency, removing features like crowdfunding & marketplace. Focus shifted entirely to building functional prototypes for startups."
              icon={<Rocket className="text-white" />}
              isLeft={true}
            />
            
            <TimelineCard
              year="March 2025"
              title="Growth & Expansion"
              description="Began developing the first client MVPs and refining service offerings."
              icon={<LineChart className="text-white" />}
              isLeft={false}
            />
            
            <TimelineCard
              year="April 2025"
              title="Scaling Operations"
              description="Started scaling operations with more clients and building a team for development & design."
              icon={<Users className="text-white" />}
              isLeft={true}
            />
            
            <TimelineCard
              year="May 2025"
              title="Brand Expansion"
              description="Building case studies to attract high-value startups and marketing the brand on LinkedIn & other platforms."
              icon={<BarChart3 className="text-white" />}
              isLeft={false}
            />
            
            <TimelineCard
              year="2025 & Beyond"
              title="The Future"
              description="Continuing to innovate and expand our services while maintaining our commitment to quality and client satisfaction."
              icon={<Zap className="text-white" />}
              isLeft={true}
            />
          </div>
        </div>
        
        <ImpactSection />
      </div>
    </PageContainer>
  );
}