import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isWinking, setIsWinking] = useState(false);
  const [isIdleWinking, setIsIdleWinking] = useState(false);

  useEffect(() => {
    // Set up periodic idle winking
    const idleWinkInterval = setInterval(() => {
      if (!isWinking) { // Only wink if not already winking from hover
        setIsIdleWinking(true);
        setTimeout(() => {
          setIsIdleWinking(false);
        }, 800); // Wink duration
      }
    }, 6000); // Wink every 6 seconds

    return () => clearInterval(idleWinkInterval);
  }, [isWinking]); // Add isWinking to dependency array

  const handleScrollToNext = () => {
    // Use browser's native smooth scrolling
    const nextSection = document.querySelector('#categories');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTurtleHover = () => {
    setIsWinking(true);
    setIsIdleWinking(false); // Stop idle winking when hovering
  };

  const handleTurtleLeave = () => {
    setIsWinking(false);
  };

  // Determine which image to show
  const shouldShowWink = isWinking || isIdleWinking;

  return (
    <section className="hero-section relative min-h-screen pt-16 bg-gradient-to-br from-[#F3E8FF] to-[#E0F7FA] overflow-hidden">
      {/* Optimized floating elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-20 left-10 text-3xl animate-float-gentle">🐢</div>
        <div className="absolute top-40 right-20 text-2xl animate-bounce-gentle" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}>🌌</div>
        <div className="absolute top-60 right-10 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>🪞</div>
        <div className="absolute bottom-60 right-1/3 text-xl animate-drift" style={{ animationDelay: '3s' }}>💫</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-12 leading-tight">
            <span className="text-gray-800">Real Guides.</span>
            <br />
            <span className="text-gray-800">With a </span>
            <span className="animate-text-shimmer">Wink</span>
          </h1>
          
          {/* Levitating Turtle Mascot - Optimized with dual images */}
          <div className="mb-8">
            <div 
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto animate-levitate cursor-pointer transition-all duration-300 hover:scale-105"
              onMouseEnter={handleTurtleHover}
              onMouseLeave={handleTurtleLeave}
            >
              {/* Open eyes image */}
              <img
                src="/st-openeyes.png"
                alt="SoulTurtle - Open Eyes"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
                  shouldShowWink ? 'opacity-0' : 'opacity-100'
                }`}
                loading="eager"
                aria-hidden={shouldShowWink}
              />

              {/* Wink eyes image */}
              <img
                src="/st-winkeyes.png"
                alt="SoulTurtle - Winking"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
                  shouldShowWink ? 'opacity-100' : 'opacity-0'
                }`}
                loading="eager"
                aria-hidden={!shouldShowWink}
              />
            </div>
          </div>

          {/* Subheadline - positioned after mascot */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
            You already know… but ask anyway.
          </p>
          
          <button className="group px-12 py-6 bg-white/90 text-gray-800 font-semibold rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] relative overflow-hidden border border-white/70">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EAE6FB] to-[#FAD6CF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
            <span className="relative z-10 font-semibold text-gray-800">Reveal My Guide</span>
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator with native scrolling */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="group relative cursor-pointer" onClick={handleScrollToNext}>
          {/* Outer breathing ring */}
          <div className="absolute inset-0 w-12 h-12 rounded-full border border-gray-300/30 animate-ping opacity-20 group-hover:opacity-40 group-hover:border-gray-400/50 transition-all duration-500"></div>
          
          {/* Middle pulsing ring */}
          <div className="absolute inset-1 w-10 h-10 rounded-full border border-gray-400/40 animate-pulse group-hover:border-gray-500/60 group-hover:scale-110 transition-all duration-500"></div>
          
          {/* Main circle with enhanced hover */}
          <div className="relative w-12 h-12 rounded-full border-2 border-gray-400/50 flex items-center justify-center bg-white/10 backdrop-blur-sm animate-float-gentle group-hover:border-gray-500/70 group-hover:bg-white/25 group-hover:scale-125 group-hover:shadow-2xl transition-all duration-700 group-hover:backdrop-blur-md">
            {/* Inner glow effect */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent animate-pulse-slow group-hover:from-white/40 group-hover:to-white/10 transition-all duration-500"></div>
            
            {/* Down arrow with enhanced bounce and hover */}
            <ChevronDown className="w-5 h-5 text-gray-600 animate-bounce-gentle relative z-10 group-hover:text-gray-700 group-hover:scale-110 transition-all duration-300" />
          </div>
          
          {/* Enhanced shimmer effect on hover */}
          <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer-slow group-hover:via-white/30 transition-all duration-500"></div>
          
          {/* Hover glow */}
          <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/30 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md"></div>

          {/* Hover hint text */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
            <p className="text-xs text-gray-500 whitespace-nowrap bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 shadow-lg font-normal">
              Scroll to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;