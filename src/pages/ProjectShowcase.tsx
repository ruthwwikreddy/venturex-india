import React, { useState } from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { Button } from '../components/shared/Button';
import { caseStudies } from '../data/caseStudies';

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<typeof caseStudies[number] | null>(null);

  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Work</h1>
        <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto">
          Explore our portfolio of successful projects and their impact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((project) => (
          <div key={project.id} className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
                  <p className="text-[#CCCCCC] mb-6">{project.description}</p>
                  <div className="space-y-4">
                    {project.links?.website && (
                      <Button
                        variant="secondary"
                        onClick={() => window.open(project.links!.website!, '_blank')}
                        className="w-full"
                      >
                        Visit Website
                      </Button>
                    )}
                    {project.links?.demo && (
                      <Button
                        variant="secondary"
                        onClick={() => window.open(project.links!.demo!, '_blank')}
                        className="w-full"
                      >
                        View Demo
                      </Button>
                    )}
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    variant="primary"
                    onClick={() => setSelectedProject(project)}
                    className="w-full"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="max-w-4xl mx-auto bg-black/90 rounded-2xl border border-white/10 p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <p className="text-[#CCCCCC]">{selectedProject.overview}</p>
              </div>

              <div className="space-y-8">
                <Section title="Challenge">
                  <ul className="list-disc list-inside space-y-2">
                    {selectedProject.challenge.map((item, index) => (
                      <li key={index} className="text-[#CCCCCC]">{item}</li>
                    ))}
                  </ul>
                </Section>

                <Section title="Solution">
                  <ul className="list-disc list-inside space-y-2">
                    {selectedProject.solution.map((item, index) => (
                      <li key={index} className="text-[#CCCCCC]">{item}</li>
                    ))}
                  </ul>
                </Section>

                <Section title="Results">
                  <ul className="list-disc list-inside space-y-2">
                    {selectedProject.results.map((item, index) => (
                      <li key={index} className="text-[#CCCCCC]">{item}</li>
                    ))}
                  </ul>
                </Section>

                <Section title="Impact">
                  <p className="text-[#CCCCCC]">{selectedProject.impact}</p>
                </Section>
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="primary" onClick={() => setSelectedProject(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
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