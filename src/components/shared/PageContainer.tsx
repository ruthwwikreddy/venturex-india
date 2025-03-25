import React from 'react';

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`min-h-screen bg-black pt-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  );
}