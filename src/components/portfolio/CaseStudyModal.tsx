import React from 'react';
import { X } from 'lucide-react';
import { Button } from '../shared/Button';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: {
    title: string;
    overview: string;
    challenge: string[];
    solution: string[];
    results: string[];
    impact: string;
    links?: {
      website: string | null;
      demo: string | null;
      emergency: string | null;
    };
  };
}

export function CaseStudyModal({ isOpen, onClose, caseStudy }: CaseStudyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-black/90 rounded-2xl border border-white/10">
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{caseStudy.title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="space-y-8">
              <Section title="Overview">
                <p className="text-[#CCCCCC]">{caseStudy.overview}</p>
              </Section>

              <Section title="Challenge">
                <ul className="list-disc list-inside space-y-2">
                  {caseStudy.challenge.map((item, index) => (
                    <li key={index} className="text-[#CCCCCC]">{item}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Solution">
                <ul className="list-disc list-inside space-y-2">
                  {caseStudy.solution.map((item, index) => (
                    <li key={index} className="text-[#CCCCCC]">{item}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Results">
                <ul className="list-disc list-inside space-y-2">
                  {caseStudy.results.map((item, index) => (
                    <li key={index} className="text-[#CCCCCC]">{item}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Impact">
                <p className="text-[#CCCCCC]">{caseStudy.impact}</p>
              </Section>

              {caseStudy.links && (caseStudy.links.website || caseStudy.links.demo || caseStudy.links.emergency) && (
                <Section title="Project Links">
                  <div className="flex flex-wrap gap-4">
                    {caseStudy.links.website && (
                      <Button
                        variant="secondary"
                        onClick={() => window.open(caseStudy.links!.website!, '_blank')}
                      >
                        Visit Website
                      </Button>
                    )}
                    {caseStudy.links.demo && (
                      <Button
                        variant="secondary"
                        onClick={() => window.open(caseStudy.links!.demo!, '_blank')}
                      >
                        View Demo
                      </Button>
                    )}
                    {caseStudy.links.emergency && (
                      <Button
                        variant="secondary"
                        onClick={() => window.open(caseStudy.links!.emergency!, '_blank')}
                      >
                        Emergency Card
                      </Button>
                    )}
                  </div>
                </Section>
              )}
            </div>

            <div className="mt-8 text-center">
              <Button variant="primary" onClick={onClose}>Close Case Study</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <div className="ml-2">{children}</div>
    </div>
  );
}