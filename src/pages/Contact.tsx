import React from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { Mail, MessageSquare, Clock } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-[#CCCCCC] text-lg mb-8">
            Have a project in mind? We'd love to hear about it. Reach out to us and let's make it happen.
          </p>

          <div className="space-y-6">
            {/* Contact info items remain the same */}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
          <ContactForm />
        </div>
      </div>

    </PageContainer>
  );
}