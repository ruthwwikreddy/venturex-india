import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  onClick?: () => void;
}

export function CaseStudyCard({ image, title, description, category, onClick }: CaseStudyCardProps) {
  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:transform hover:-translate-y-2"
      onClick={onClick}
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative">
          <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-blue-500 transition-colors duration-300">{title}</h3>
          <p className="text-[#CCCCCC] mb-4 group-hover:text-white transition-colors duration-300">{description}</p>
          <div className="flex items-center text-blue-500 group-hover:translate-x-2 transition-transform duration-300">
            <span className="mr-2">View Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}