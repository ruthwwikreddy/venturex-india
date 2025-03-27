import React, { useState } from 'react';

// FAQ type
type FAQ = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

const faqsData: FAQ[] = [
    {
      id: 'what-is',
      question: 'What is VentureX?',
      answer: 'VentureX is an MVP development and web design agency that helps startups and businesses bring their ideas to life with high-quality, cost-effective, and scalable solutions.'
    },
    {
      id: 'services',
      question: 'What services does VentureX offer?',
      answer: (
        <div className="space-y-2">
          <p>We specialize in:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>MVP Development – Rapid prototyping and development of Minimum Viable Products.</li>
            <li>Web Design & Development – Stunning, responsive, and conversion-optimized websites.</li>
            <li>UI/UX Design – Intuitive and engaging user interfaces.</li>
            <li>Tech Consultation – Guidance on product strategy, features, and scalability.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'who-benefits',
      question: 'Who can benefit from VentureX?',
      answer: (
        <ul className="list-disc list-inside space-y-1">
          <li>Startups looking to launch their first product.</li>
          <li>Entrepreneurs with an idea but no technical team.</li>
          <li>Businesses needing professional web design and development.</li>
          <li>Investors & innovators testing new market ideas.</li>
        </ul>
      )
    },
    {
      id: 'timeline',
      question: 'How long does it take to build an MVP?',
      answer: "The timeline depends on the project's complexity, but a basic MVP can be developed within 4-8 weeks. We focus on rapid iteration to get your product in front of users as quickly as possible."
    },
    {
      id: 'industries',
      question: 'What industries does VentureX serve?',
      answer: (
        <div className="space-y-2">
          <p>We work with a variety of industries, including:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Healthcare 🏥</li>
            <li>E-commerce 🛒</li>
            <li>Legal Tech ⚖️</li>
            <li>EdTech 📚</li>
            <li>FinTech 💳</li>
            <li>SaaS & AI-based platforms 🤖</li>
          </ul>
        </div>
      )
    },
    {
      id: 'cost',
      question: 'How much does an MVP or website cost?',
      answer: "Pricing varies based on the project's scope and complexity. We offer flexible, budget-friendly packages to suit different business needs. Contact us for a custom quote."
    },
    {
      id: 'support',
      question: 'Do you provide post-launch support?',
      answer: 'Yes! We offer maintenance and support packages to ensure your product runs smoothly after launch.'
    },
    {
      id: 'scale',
      question: 'Can you help scale my MVP into a full-fledged product?',
      answer: 'Absolutely! We specialize in building scalable solutions that grow with your business. As your user base increases, we can enhance your MVP with new features and optimizations.'
    },
    {
      id: 'get-started',
      question: 'How do I get started with VentureX?',
      answer: "Simply contact us, share your idea, and we'll guide you through the next steps!"
    }
  ];
  
  const FAQs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <section id="faqs" className="section-padding bg-[#050505] text-white">
        <div className="container max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-heading-2 font-bold text-white mb-4 glow-text">
              FAQs <span className="text-[#10B981]">🚀</span>
            </h2>
            <p className="text-lg text-blue-100/70 max-w-3xl mx-auto">
              Answers to common questions about VentureX and our services
            </p>
            <div className="w-40 h-1 bg-[#003366] glow-line mx-auto mt-8"></div>
          </div>
          
          {/* FAQs Collapsible Sections */}
          <div className="bg-[#0a0a0a] border border-[#003366]/30 rounded-xl p-6 md:p-8 shadow-lg shadow-[#003366]/10">
            {faqsData.map((faq, index) => (
              <div key={faq.id} className="mb-4">
                <div 
                  className={`cursor-pointer text-white hover:text-[#10B981] transition-colors font-medium flex justify-between items-center p-4 rounded-lg border border-transparent hover:border-[#003366] ${openIndex === index ? 'bg-[#1a1a1a]' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
                {openIndex === index && (
                  <div className="text-blue-100/70 pt-2 transition-all duration-300 ease-in-out transform opacity-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-blue-100/70 mb-6">Still have questions? We're here to help!</p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-[#003366] text-white rounded-lg font-medium hover:bg-[#003366]/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQs;