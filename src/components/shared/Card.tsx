import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

type CardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
};

export function Card({ icon: Icon, title, description, onClick }: CardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-white/5 backdrop-blur-lg rounded-xl p-8 
        transition-all duration-500 hover:transform hover:-translate-y-2 
        overflow-hidden hover-card glass holographic cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`${title} - ${description}`}
    >
      {/* Enhanced gradient border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-800 to-blue-700 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      
      {/* Enhanced animated background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

      {/* Energy flow effect */}
      <div className="absolute inset-0 energy-flow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        {/* Enhanced icon container with hover effect */}
        <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-r from-blue-800 to-blue-700 p-[1px] group-hover:scale-110 transition-transform duration-500">
          <div className="w-full h-full rounded-xl bg-black flex items-center justify-center overflow-hidden">
            <Icon className="w-8 h-8 text-white transform group-hover:rotate-12 transition-transform duration-500" />
          </div>
        </div>

        {/* Enhanced content with hover animations */}
        <h3 className="text-white font-semibold text-xl mb-3 transform group-hover:translate-x-1 transition-transform duration-500 group-hover:text-blue-500 neon-text">
          {title}
        </h3>
        <p className="text-[#CCCCCC] leading-relaxed transform group-hover:translate-x-1 transition-transform duration-500 delay-75 group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
}