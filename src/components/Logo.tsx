import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-3 group">
      <div className="relative h-12 transform group-hover:scale-110 transition-transform duration-500">
        {/* Enhanced animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
        
        {/* VentureX Logo Image */}
        <img 
          src="https://ruthwwikreddy.github.io/venturex-india/assets/images/logo.png" 
          alt="VentureX - Innovate. Launch. Scale." 
          className="h-full w-auto relative"
        />
      </div>
    </div>
  );
}
