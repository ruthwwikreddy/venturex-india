import { ReactNode } from 'react';

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  icon?: ReactNode;
  isLeft?: boolean;
}

export const TimelineCard = ({ year, title, description, icon, isLeft = false }: TimelineCardProps) => {
  return (
    <div 
      className={`flex ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-16 group`}
    >
      <div className={`hidden md:block w-5/12 ${isLeft ? 'text-left' : 'text-right'} pr-8`}>
        <div className={`bg-white/5 backdrop-blur-lg p-8 rounded-xl ${isLeft ? 'ml-auto mr-0' : 'ml-0 mr-auto'} max-w-lg transition-all duration-500 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-900/20 group-hover:translate-y-[-5px]`}>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-800/30 text-blue-400 text-sm font-medium mb-3">
            {year}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">{title}</h3>
          <p className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">{description}</p>
        </div>
      </div>
      
      <div className="relative flex flex-col items-center">
        <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r ${isLeft ? 'from-blue-600 to-blue-800 right-14' : 'from-blue-800 to-blue-600 left-14'} w-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-900/30">
          {icon}
        </div>
      </div>
      
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:hidden' : ''} pl-8`}>
        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl md:hidden transition-all duration-500 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-900/20 group-hover:translate-y-[-5px]">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-800/30 text-blue-400 text-sm font-medium mb-3">
            {year}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">{title}</h3>
          <p className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">{description}</p>
        </div>
      </div>
    </div>
  );
}; 