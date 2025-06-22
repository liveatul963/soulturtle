import React from 'react';

const ParallaxVisual: React.FC = () => {
  return (
    <section className="relative py-12 bg-gradient-to-b from-[#EAE6FB] via-[#DDEDE3] to-[#FAFAF8] overflow-hidden">
      {/* Enhanced background elements with subtle animations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#FAD6CF]/30 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-[#DDEDE3]/40 rounded-full blur-xl animate-float-gentle"></div>
        
        {/* Additional subtle floating orbs */}
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-[#EAE6FB]/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-[#FAFAF8]/30 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Central Content */}
      <div className="flex items-center justify-center py-12">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="text-5xl md:text-6xl mb-6 opacity-60 animate-float-gentle">🧘</div>
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 mb-4 leading-relaxed italic">
            "Before you ask... feel who's listening."
          </blockquote>
          <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-white/50 to-transparent border border-white/30 flex items-center justify-center animate-pulse-slow">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FAFAF8] to-[#DDEDE3] animate-glow-pulse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements with staggered animations */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 text-3xl animate-float-gentle" style={{ animationDelay: '0.5s' }}>🐢</div>
        <div className="absolute bottom-20 right-10 text-2xl animate-bounce-gentle" style={{ animationDelay: '1.5s' }}>✨</div>
        <div className="absolute top-1/2 left-5 text-2xl animate-float" style={{ animationDelay: '2.5s' }}>🌙</div>
        <div className="absolute bottom-1/3 right-1/3 text-2xl animate-pulse-slow" style={{ animationDelay: '3s' }}>🪞</div>
        
        {/* Additional subtle elements */}
        <div className="absolute top-20 right-20 text-xl animate-float-gentle opacity-60" style={{ animationDelay: '4s' }}>💫</div>
        <div className="absolute bottom-10 left-20 text-xl animate-bounce-gentle opacity-50" style={{ animationDelay: '0.8s' }}>🌌</div>
      </div>
    </section>
  );
};

export default ParallaxVisual;