import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import { CaseStudyModal } from './CaseStudyModal';

export function CaseStudyCarousel() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof caseStudies[number] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout>();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  useEffect(() => {
    autoScrollRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(autoScrollRef.current);
  }, []);

  return (
    <div className="relative group w-full max-w-6xl mx-auto">
      <div className="overflow-hidden relative">
        <div 
          ref={carouselRef} 
          className="flex space-x-6 transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className="carousel-item w-1/3 flex-shrink-0 snap-center cursor-pointer"
              onClick={() => setSelectedCaseStudy(study)}
            >
              <div className="relative h-[250px] rounded-xl overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-100 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent opacity-100 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent opacity-100 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-100 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-sm text-white/80">{study.description}</p>
                </div>
                <div className="absolute top-2 right-2 bg-primary/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full shadow-lg">
                  {study.category}
                </div>
                <div className="absolute top-2 left-2 bg-gray-800/80 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                  {study.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCaseStudy && (
        <CaseStudyModal
          isOpen={!!selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          caseStudy={selectedCaseStudy as typeof caseStudies[number]}
        />
      )}
    </div>
  );
}
