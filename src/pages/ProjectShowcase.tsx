import React from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { CaseStudyCarousel } from '../components/portfolio/CaseStudyCarousel';

export function ProjectShowcase() {
  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Work</h1>
        <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto">
          Explore our portfolio of successful projects and their impact
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <CaseStudyCarousel />
      </div>
    </PageContainer>
  );
}