import React, { useState } from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { IdeaSubmissionForm } from '../components/forms/IdeaSubmissionForm';
import { ServiceRequestForm } from '../components/forms/ServiceRequestForm';
import { MentorshipForm } from '../components/forms/MentorshipForm';
import { Button } from '../components/shared/Button';

type FormType = 'idea' | 'service' | 'mentor';

export function Forms() {
  const [activeForm, setActiveForm] = useState<FormType>('idea');

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get Started</h1>
          <p className="text-[#CCCCCC] text-lg">
            Choose the form that best matches your needs
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
            Request Service
          </Button>
          <Button
            variant={activeForm === 'mentor' ? 'primary' : 'secondary'}
            onClick={() => setActiveForm('mentor')}
          >
            Become a Mentor
          </Button>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
          {activeForm === 'idea' && (
            <>
              <h2 className="text-2xl font-bold text-white mb-6">Submit Your Idea</h2>
              <IdeaSubmissionForm />
            </>
          )}
          {activeForm === 'service' && (
            <>
              <h2 className="text-2xl font-bold text-white mb-6">Request Our Services</h2>
              <ServiceRequestForm />
            </>
          )}
          {activeForm === 'mentor' && (
            <>
              <h2 className="text-2xl font-bold text-white mb-6">Join Our Mentor Network</h2>
              <MentorshipForm />
            </>
          )}
        </div>
      </div>
    </PageContainer>
  );
}