import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, Pointer } from 'lucide-react';
import TypewriterText from './TypewriterText';

// Random interval constants (in milliseconds)
const MIN_IDLE_WINK_INTERVAL = 5000; // 5 seconds
const MAX_IDLE_WINK_INTERVAL = 10000; // 10 seconds
const IDLE_WINK_DURATION = 800;    // 800ms

const Hero: React.FC = () => {
  const [isWinking, setIsWinking] = useState(false);
  const [isIdleWinking, setIsIdleWinking] = useState(false);
  
  // Refs to manage timers
  const idleWinkTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const idleWinkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Helper function to get random interval
  const getRandomInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Clear all timers
  const clearAllTimers = () => {
    if (idleWinkTimeoutRef.current) clearTimeout(idleWinkTimeoutRef.current);
    if (idleWinkIntervalRef.current) clearTimeout(idleWinkIntervalRef.current);
  };

  // Setup random idle wink interval
  const setupIdleWinkInterval = () => {
    if (isWinking) return;
    
    const randomInterval = getRandomInterval(MIN_IDLE_WINK_INTERVAL, MAX_IDLE_WINK_INTERVAL);
    
    idleWinkIntervalRef.current = setTimeout(() => {
      if (!isWinking) {
        setIsIdleWinking(true);
        idleWinkTimeoutRef.current = setTimeout(() => {
          setIsIdleWinking(false);
          setupIdleWinkInterval(); // Schedule next idle wink
        }, IDLE_WINK_DURATION);
      } else {
        setupIdleWinkInterval(); // Try again if conditions aren't met
      }
    }, randomInterval);
  };

  // Initialize intervals on mount
  useEffect(() => {
    // Start with a small delay to avoid immediate animations
    const initTimer = setTimeout(() => {
      setupIdleWinkInterval();
    }, 1000);

    return () => {
      clearTimeout(initTimer);
      clearAllTimers();
    };
  }, []);

  // Restart intervals when winking state changes
  useEffect(() => {
    if (!isWinking) {
      setupIdleWinkInterval();
    }
  }, [isWinking]);

  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#categories');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTurtleHover = () => {
    // Clear all timers and set winking state
    clearAllTimers();
    setIsWinking(true);
    setIsIdleWinking(false);
  };

  const handleTurtleLeave = () => {
    setIsWinking(false);
    // Restart intervals after a brief delay
    setTimeout(() => {
      setupIdleWinkInterval();
    }, 300);
  };

  // Determine which image to show: Wink or Open
  let mascotImg = '/st-openeyes.png';
  if (isWinking || isIdleWinking) {
    mascotImg = '/st-winkeyes.png';
  }

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
            <span className="text-gray-800">Soul Guides.</span>
            <br />
            <span className="text-gray-800">With a </span>
            <span className="animate-text-shimmer">Wink</span>
          </h1>
          
          {/* Pure frame-swap mascot - single image element without hover enlargement */}
          <div className="mb-8">
            <div
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto animate-levitate cursor-pointer transition-all duration-300"
              onMouseEnter={handleTurtleHover}
              onMouseLeave={handleTurtleLeave}
              style={{ 
                filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))',
                animationDelay: '0.5s'
              }}
            >
              <img
                src={mascotImg}
                alt="SoulTurtle mascot"
                className="w-full h-full object-contain"
                loading="eager"
                draggable={false}
              />
            </div>
          </div>

          {/* Typing effect text below mascot */}
          <div className="mb-12">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
              Let your voice guide you...
            </p>
          </div>
          
          {/* Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            {/* Reveal My Guide Button - Peach to Pink Gradient */}
            <button className="group px-10 py-4 bg-gradient-to-r from-[#FAD6CF] to-[#EAE6FB] text-gray-800 font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] relative overflow-hidden border border-white/50">
              <span className="flex items-center justify-center">
                <Pointer className="w-5 h-5 mr-2" />
                Reveal My Guide
              </span>
            </button>

            {/* Explore Guides Button - White with Gray Border */}
            <button className="group px-10 py-4 bg-white text-gray-700 font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] border-2 border-gray-200 hover:border-gray-300">
              <span className="flex items-center justify-center">
                <Search className="w-5 h-5 mr-2" />
                Explore Guides
              </span>
            </button>
          </div>
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