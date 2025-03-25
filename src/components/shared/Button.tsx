import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  'aria-label'?: string;
};

export function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  onClick, 
  disabled, 
  href,
  'aria-label': ariaLabel 
}: ButtonProps) {
  const baseStyles = `
    relative px-8 py-3 rounded-full font-medium 
    transition-all duration-500 transform hover:scale-105 
    focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 
    focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed
    btn-hover holographic
  `;
  
  const variants = {
    primary: `
      bg-gradient-to-r from-blue-900 to-blue-800 text-white
      hover:shadow-[0_0_40px_rgba(0,51,102,0.4)]
      before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-blue-800 before:to-blue-900
      before:rounded-full before:opacity-0 before:transition-opacity 
      before:duration-500 hover:before:opacity-100 before:-z-10
      active:transform active:scale-95 neon-text
    `,
    secondary: `
      text-white border-2 border-transparent bg-white/5 backdrop-blur-lg
      hover:bg-white/10 glass
      before:absolute before:inset-0 before:rounded-full before:-z-10
      before:bg-gradient-to-r before:from-blue-900 before:to-blue-800
      before:opacity-0 before:transition-opacity before:duration-500
      hover:before:opacity-10
      active:transform active:scale-95
    `
  };

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault();
      const element = document.getElementById(href.replace('#', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    onClick?.();
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel || typeof children === 'string' ? children : undefined}
      role="button"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-blue-700/20 rounded-full blur-xl" />
      </div>
      {/* Energy pulse effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-700 rounded-full animate-pulse" />
      </div>
    </button>
  );
}