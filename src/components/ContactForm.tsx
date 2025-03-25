import React, { useState } from 'react';
import { Button } from './shared/Button';
import { useContact } from '../hooks/useContact';
import { Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const { submitContact, loading, error } = useContact();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitContact(formData);
    if (success) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-blue-700 rounded-full mx-auto flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
        <p className="text-[#CCCCCC] mb-6">Thank you for reaching out. We'll get back to you as soon as possible.</p>
        <Button 
          variant="secondary" 
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="relative">
        <label 
          htmlFor="name" 
          className={`form-label transition-all duration-300 ${focused === 'name' ? 'text-blue-500' : ''}`}
        >
          Your Name
        </label>
        <input 
          type="text" 
          id="name" 
          name="name"
          className="form-input" 
          placeholder="John Doe"
          required
          value={formData.name}
          onChange={handleChange}
          onFocus={() => handleFocus('name')}
          onBlur={handleBlur}
        />
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-700 transition-all duration-300 ${focused === 'name' ? 'w-full' : 'w-0'}`}></div>
      </div>
      
      <div className="relative">
        <label 
          htmlFor="email" 
          className={`form-label transition-all duration-300 ${focused === 'email' ? 'text-blue-500' : ''}`}
        >
          Your Email
        </label>
        <input 
          type="email" 
          id="email" 
          name="email"
          className="form-input" 
          placeholder="john@example.com"
          required
          value={formData.email}
          onChange={handleChange}
          onFocus={() => handleFocus('email')}
          onBlur={handleBlur}
        />
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-700 transition-all duration-300 ${focused === 'email' ? 'w-full' : 'w-0'}`}></div>
      </div>
      
      <div className="relative">
        <label 
          htmlFor="message" 
          className={`form-label transition-all duration-300 ${focused === 'message' ? 'text-blue-500' : ''}`}
        >
          Your Message
        </label>
        <textarea 
          id="message" 
          name="message"
          rows={4} 
          className="form-textarea" 
          placeholder="Tell us about your project..."
          required
          value={formData.message}
          onChange={handleChange}
          onFocus={() => handleFocus('message')}
          onBlur={handleBlur}
        ></textarea>
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-700 transition-all duration-300 ${focused === 'message' ? 'w-full' : 'w-0'}`}></div>
      </div>
      
      {error && (
        <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-3 flex items-start">
          <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-blue-500 text-sm">{error}</p>
        </div>
      )}
      
      <Button 
        variant="primary"
        disabled={loading}
        className="w-full"
        type="submit"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </Button>
      
      <p className="text-[#CCCCCC] text-sm text-center">
        By submitting this form, you agree to our <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
      </p>
    </form>
  );
}