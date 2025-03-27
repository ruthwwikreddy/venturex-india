import React, { useState } from 'react';
import { Button } from '../shared/Button';
import { useContact } from '../../hooks/useContact';

interface ServiceFormData {
  name: string;
  email: string;
  serviceType: string;
  budget: string;
  timeline: string;
  ideaOverview: string;
  existingProgress: string;
}

const SERVICE_TYPES = [
  'MVP Development',
  'UI/UX Design',
  'Technical Consulting',
  'Product Strategy',
  'Other'
] as const;

export function ServiceRequestForm() {
  const { submitContact, loading, error } = useContact();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<ServiceFormData>({
    name: '',
    email: '',
    serviceType: '',
    budget: '',
    timeline: '',
    ideaOverview: '',
    existingProgress: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitContact({
      name: formData.name,
      email: formData.email,
      message: `
Service Type: ${formData.serviceType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Idea Overview: ${formData.ideaOverview}
Existing Progress: ${formData.existingProgress}
      `.trim()
    });
    
    if (result) {
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        serviceType: '',
        budget: '',
        timeline: '',
        ideaOverview: '',
        existingProgress: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-[#CCCCCC]">We'll review your request and get back to you soon.</p>
      </div>
    );
  }

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
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#6D5DFB]"
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
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#6D5DFB]"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-white mb-2">Service Required</label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#6D5DFB]"
          required
        >
          <option value="">Select a service</option>
          {SERVICE_TYPES.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-white mb-2">Budget Range</label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="e.g., $5,000 - $10,000"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#6D5DFB]"
            required
          />
        </div>

        <div>
          <label htmlFor="timeline" className="block text-white mb-2">Timeline</label>
          <input
            type="text"
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            placeholder="e.g., 2-3 months"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#6D5DFB]"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="ideaOverview" className="block text-white mb-2">Idea Overview</label>
        <textarea
          id="ideaOverview"
          name="ideaOverview"
          value={formData.ideaOverview}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#6D5DFB] h-32"
          required
        />
      </div>

      <div>
        <label htmlFor="existingProgress" className="block text-white mb-2">Existing Progress (if any)</label>
        <textarea
          id="existingProgress"
          name="existingProgress"
          value={formData.existingProgress}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#6D5DFB] h-24"
        />
      </div>

      <Button
        variant="primary"
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Request'}
      </Button>
    </form>
  );
}