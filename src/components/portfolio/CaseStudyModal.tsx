import React from 'react';
import { X, ExternalLink } from 'lucide-react';
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
    status: 'Ongoing' | 'Handovered';
    links?: Record<string, string | undefined>;
  };
}

export function CaseStudyModal({ isOpen, onClose, caseStudy }: CaseStudyModalProps) {
  if (!isOpen) return null;

  const renderLinks = () => {
    return Object.entries(caseStudy.links || {}).map(([key, url]) => (
      url && (
        <div className="flex items-center mb-4" key={key}>
          <Button
            variant="secondary"
            onClick={() => window.open(url, '_blank')}
            className="flex items-center transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 px-5 py-3 rounded-lg shadow-lg border border-transparent hover:border-blue-500"
            aria-label={`Open ${formatKey(key)} link`}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            <span className="font-semibold">{formatKey(key)}</span>
          </Button>
        </div>
      )
    ));
  };

  const formatKey = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/\b(v\d+)\b/i, 'V$1').trim();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8 flex justify-center items-center">
        <div className="max-w-4xl w-full bg-black/90 rounded-2xl border border-white/10 shadow-lg">
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

            <div className="mb-4">
              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${caseStudy.status === 'Ongoing' ? 'bg-green-600 text-white' : 'bg-gray-500 text-white'}`}>{caseStudy.status}</span>
            </div>

            <div className="space-y-8">
              <Section title="Overview">
                <p className="text-[#CCCCCC] leading-relaxed">{caseStudy.overview}</p>
              </Section>

              <Section title="Challenge">
                <ul className="list-disc list-inside space-y-2">
                  {caseStudy.challenge.map((item, index) => (
                    <li key={index} className="text-[#CCCCCC] leading-relaxed">{item}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Solution">
                <ul className="list-disc list-inside space-y-2">
                  {caseStudy.solution.map((item, index) => (
                    <li key={index} className="text-[#CCCCCC] leading-relaxed">{item}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Results">
                <ul className="list-disc list-inside space-y-2">
                  {caseStudy.results.map((item, index) => (
                    <li key={index} className="text-[#CCCCCC] leading-relaxed">{item}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Impact">
                <p className="text-[#CCCCCC] leading-relaxed">{caseStudy.impact}</p>
              </Section>

              {caseStudy.links && Object.keys(caseStudy.links).length > 0 && (
                <Section title="Links">
                  <div className="flex flex-wrap gap-2">
                    {renderLinks()}
                  </div>
                </Section>
              )}
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
