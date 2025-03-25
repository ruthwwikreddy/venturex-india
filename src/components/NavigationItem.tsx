import React from 'react';

interface NavigationItemProps {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}

export function NavigationItem({ children, href, isActive = false }: NavigationItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
        isActive 
          ? 'text-white' 
          : 'text-[#CCCCCC] hover:text-white'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
      
      {/* Active indicator */}
      {isActive && (
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-800 to-blue-700 opacity-10"></span>
      )}
      
      {/* Hover effect */}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-800 to-blue-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </a>
  );
}