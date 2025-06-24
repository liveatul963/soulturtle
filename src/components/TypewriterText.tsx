import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  loopDelay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  delay = 0,
  loop = false,
  loopDelay = 3000,
  className = '',
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Pause marker and duration
  const PAUSE_MARKER = '@@PAUSE@@';
  const PAUSE_DURATION = 500; // 500ms pause

  useEffect(() => {
    // Start typing after delay
    const startTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || isPaused) return;

    if (currentIndex >= text.length) {
      // Typing is complete
      if (onComplete) {
        onComplete();
      }

      if (loop) {
        // Hide cursor briefly, then restart after loopDelay
        setShowCursor(false);
        const loopTimer = setTimeout(() => {
          setDisplayedText('');
          setCurrentIndex(0);
          setShowCursor(true);
        }, loopDelay);

        return () => clearTimeout(loopTimer);
      } else {
        // Hide cursor after typing is complete
        const cursorTimer = setTimeout(() => {
          setShowCursor(false);
        }, 1000);

        return () => clearTimeout(cursorTimer);
      }
    } else {
      // Check if we've reached a pause marker
      const remainingText = text.slice(currentIndex);
      if (remainingText.startsWith(PAUSE_MARKER)) {
        // We've hit a pause marker
        setIsPaused(true);
        setShowCursor(false);
        
        const pauseTimer = setTimeout(() => {
          setIsPaused(false);
          setShowCursor(true);
          // Skip past the pause marker
          setCurrentIndex(currentIndex + PAUSE_MARKER.length);
        }, PAUSE_DURATION);

        return () => clearTimeout(pauseTimer);
      } else {
        // Continue typing normally
        const timer = setTimeout(() => {
          setDisplayedText(text.slice(0, currentIndex + 1).replace(new RegExp(PAUSE_MARKER, 'g'), ''));
          setCurrentIndex(currentIndex + 1);
        }, speed);

        return () => clearTimeout(timer);
      }
    }
  }, [currentIndex, text, speed, isTyping, onComplete, loop, loopDelay, isPaused]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && isTyping && !isPaused && (
        <span className="animate-pulse text-gray-400 ml-1">|</span>
      )}
    </span>
  );
};

export default TypewriterText;