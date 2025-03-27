import React, { useState } from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { Button } from '../components/shared/Button';
import { useContact } from '../hooks/useContact';

type FormType = 'idea' | 'service';

export function GetStarted() {
  const [activeForm, setActiveForm] = useState<FormType>('idea');
  const { submitContact, loading, error } = useContact();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitContact({
      name: formData.name,
      email: formData.email,
      message: `
Project Type: ${formData.projectType}
Description: ${formData.description}
Form Type: ${activeForm === 'idea' ? 'Submit an Idea' : 'Request a Service'}
      `.trim()
    });
    
    if (result) {
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        projectType: '',
        description: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get Started</h1>
          <p className="text-[#CCCCCC] text-lg">
            Choose the option that best matches your needs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeForm === 'idea' ? 'primary' : 'secondary'}
            onClick={() => setActiveForm('idea')}
          >
            Submit an Idea
          </Button>
          <Button
            variant={activeForm === 'service' ? 'primary' : 'secondary'}
            onClick={() => setActiveForm('service')}
          >
            Request a Service
          </Button>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
          {success ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
              <p className="text-[#CCCCCC]">We'll review your submission and get back to you soon.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-white mb-6">
                {activeForm === 'idea' ? 'Submit Your Idea' : 'Request Our Services'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-red-500/20 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-red-500/20 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-white mb-2">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-red-500/20 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="MVP Development">MVP Development</option>
                    <option value="Website Design">Website Design</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Custom Tech Solution">Custom Tech Solution</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-white mb-2">Project Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-red-500/20 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300 h-32"
                    placeholder={activeForm === 'idea' ? "Tell us about your idea..." : "Tell us about the service you need..."}
                    required
                  ></textarea>
                </div>

                <Button
                  variant="primary"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </PageContainer>
  );
}