import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StoryCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

export function StoryCard({ icon: Icon, title, content }: StoryCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group">
      <div className="flex items-start space-x-6">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">{title}</h3>
          <p className="text-[#CCCCCC] leading-relaxed group-hover:text-white transition-colors duration-300">{content}</p>
        </div>
      </div>
    </div>
  );
}