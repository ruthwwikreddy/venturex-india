import React from 'react';
import { Code, Users, Rocket } from 'lucide-react';

export function Hero() {
  const handleStartJourney = () => {
    document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreProjects = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black pt-20">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 animate-[pulse_4s_ease-in-out_infinite]" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0,51,102,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,51,102,0.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800 rounded-full opacity-10 blur-[120px] animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-900 rounded-full opacity-10 blur-[100px] animate-[pulse_4s_ease-in-out_infinite_1s]" />

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-32">
        <div className="text-center space-y-8 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 mb-6 leading-tight">
            Empowering Innovation<br />
            <span className="bg-gradient-to-r from-blue-800 to-blue-900 text-transparent bg-clip-text">
              Through MVPs & Web Design
            </span>
          </h1>
          
          <p className="text-[#CCCCCC] text-lg md:text-xl max-w-2xl mx-auto">
            A dedicated platform for transforming ideas into functional MVPs and high-quality websites, empowering entrepreneurs and businesses to launch with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button 
              onClick={handleStartJourney}
              className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 transition-all duration-300 group-hover:scale-[1.05]" />
              <span className="relative text-white font-medium text-lg">Start Your Journey</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={handleExploreProjects}
              className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/5 transition-all duration-300 group-hover:bg-white/10" />
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-800 to-blue-700 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] -z-10" />
              <span className="relative text-white font-medium text-lg">Explore Projects</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-24">
          {[
            { icon: Code, title: 'MVP Development', desc: 'Turn your ideas into working products with expert guidance', target: 'services' },
            { icon: Users, title: 'Web Design & Development', desc: 'Create professional, modern websites tailored to your needs', target: 'services' },
            { icon: Rocket, title: 'Tech Integration', desc: 'Implement cutting-edge technologies to enhance your digital solutions', target: 'services' }
          ].map(({ icon: Icon, title, desc, target }, index) => (
            <div 
              key={title}
              onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-black/40 backdrop-blur-lg rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-500 border border-white/10 overflow-hidden cursor-pointer"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.5s ease-out forwards'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-r from-blue-800 to-blue-700 p-[1px] group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-blue-500 transition-colors duration-300">{title}</h3>
                <p className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}