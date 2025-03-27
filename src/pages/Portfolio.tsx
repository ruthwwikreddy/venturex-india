import React, { useState } from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { CaseStudyCard } from '../components/portfolio/CaseStudyCard';
import { CaseStudyModal } from '../components/portfolio/CaseStudyModal';
import { caseStudies } from '../data/caseStudies';

export function Portfolio() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof caseStudies[number] | null>(null);

  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Portfolio</h1>
        <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto">
          Showcasing successful projects and the impact we've made together
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard
            key={caseStudy.id}
            title={caseStudy.title}
            description={caseStudy.description}
            image={caseStudy.image}
            category={caseStudy.category}
            onClick={() => setSelectedCaseStudy(caseStudy)}
          />
        ))}
      </div>

      {selectedCaseStudy && (
        <CaseStudyModal
          isOpen={!!selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          caseStudy={selectedCaseStudy}
        />
      )}
    </PageContainer>
  );
}