import React, { useState } from 'react';
import { Button } from '../shared/Button';
import { useContact } from '../../hooks/useContact';

interface IdeaFormData {
  name: string;
  email: string;
  ideaTitle: string;
  description: string;
  problemSolved: string;
  targetAudience: string;
  technologyNeeded: string;
}

export function IdeaSubmissionForm() {
  const { submitContact, loading, error } = useContact();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<IdeaFormData>({
    name: '',
    email: '',
    ideaTitle: '',
    description: '',
    problemSolved: '',
    targetAudience: '',
    technologyNeeded: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitContact({
      name: formData.name,
      email: formData.email,
      message: `
Idea Title: ${formData.ideaTitle}
Description: ${formData.description}
Problem Solved: ${formData.problemSolved}
Target Audience: ${formData.targetAudience}
Technology Needed: ${formData.technologyNeeded}
      `.trim()
    });
    
    if (result) {
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        ideaTitle: '',
        description: '',
        problemSolved: '',
        targetAudience: '',
        technologyNeeded: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-[#CCCCCC]">We'll review your idea and get back to you soon.</p>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-2 rounded-lg bg-white/10 border border-red-500/20 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300";

  return (
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
            className={inputClasses}
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
            className={inputClasses}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="ideaTitle" className="block text-white mb-2">Idea Title</label>
        <input
          type="text"
          id="ideaTitle"
          name="ideaTitle"
          value={formData.ideaTitle}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-white mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={`${inputClasses} h-32`}
          required
        />
      </div>

      <div>
        <label htmlFor="problemSolved" className="block text-white mb-2">Problem Solved</label>
        <textarea
          id="problemSolved"
          name="problemSolved"
          value={formData.problemSolved}
          onChange={handleChange}
          className={`${inputClasses} h-24`}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="targetAudience" className="block text-white mb-2">Target Audience</label>
          <input
            type="text"
            id="targetAudience"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        <div>
          <label htmlFor="technologyNeeded" className="block text-white mb-2">Technology Needed</label>
          <input
            type="text"
            id="technologyNeeded"
            name="technologyNeeded"
            value={formData.technologyNeeded}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>
      </div>

      <Button
        variant="primary"
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Idea'}
      </Button>
    </form>
  );
}