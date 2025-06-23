import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isWinking, setIsWinking] = useState(false);
  const [isIdleWinking, setIsIdleWinking] = useState(false);
  const [isBlinkAnimationActive, setIsBlinkAnimationActive] = useState(false); // NOTE: false by default
  const initialMount = useRef(true);

  // On mount: enable blink after a tick, never on first frame
  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      const timer = setTimeout(() => setIsBlinkAnimationActive(true), 80); // 80ms = enough for browsers
      return () => clearTimeout(timer);
    }
  }, []);

  // Idle winking logic
  useEffect(() => {
    const idleWinkInterval = setInterval(() => {
      if (!isWinking) {
        setIsBlinkAnimationActive(false); // PAUSE blink BEFORE wink
        setIsIdleWinking(true);
        setTimeout(() => {
          setIsIdleWinking(false);
          setTimeout(() => setIsBlinkAnimationActive(true), 320); // matches fade-out duration
        }, 800); // Wink duration
      }
    }, 6000);
    return () => clearInterval(idleWinkInterval);
  }, [isWinking]);

  const handleTurtleHover = () => {
    setIsBlinkAnimationActive(false);
    setIsWinking(true);
    setIsIdleWinking(false);
  };

  const handleTurtleLeave = () => {
    setIsWinking(false);
    setTimeout(() => setIsBlinkAnimationActive(true), 320); // matches transition
  };

  const shouldShowWink = isWinking || isIdleWinking;

  return (
    <section className="hero-section relative min-h-screen pt-16 bg-gradient-to-br from-[#F3E8FF] to-[#E0F7FA] overflow-hidden">
      {/* ...floating elements... */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-12 leading-tight">
            <span className="text-gray-800">Real Guides.</span>
            <br />
            <span className="text-gray-800">With a </span>
            <span className="animate-text-shimmer">Wink</span>
          </h1>

          {/* Mascot wrapper */}
          <div className="mb-8">
            <div
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto animate-levitate cursor-pointer transition-all duration-300 hover:scale-105"
              onMouseEnter={handleTurtleHover}
              onMouseLeave={handleTurtleLeave}
            >
              {/* Open-eyes wrapper */}
              <div className={`absolute inset-0 transition-opacity duration-300 ${shouldShowWink ? 'opacity-0' : 'opacity-100'}`}>
                <img
                  src="/st-openeyes.png"
                  alt="SoulTurtle mascot – eyes open"
                  loading="eager"
                  aria-hidden={shouldShowWink}
                  className="w-full h-full object-contain animate-blink-slow"
                  style={{ animationPlayState: isBlinkAnimationActive ? 'running' : 'paused' }}
                />
              </div>
              {/* Wink wrapper */}
              <div className={`absolute inset-0 transition-opacity duration-300 ${shouldShowWink ? 'opacity-100' : 'opacity-0'}`}>
                <img
                  src="/st-winkeyes.png"
                  alt="SoulTurtle mascot – winking"
                  loading="eager"
                  aria-hidden={!shouldShowWink}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          {/* ...rest unchanged */}
        </div>
      </div>
      {/* ...rest unchanged */}
    </section>
  );
};

export default Hero;
