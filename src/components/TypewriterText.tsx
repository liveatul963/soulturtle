import React, { useState, useEffect, useMemo } from 'react';

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
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const PAUSE_MARKER = '@@PAUSE@@';
  const PAUSE_DURATION = 500;

  // Split text into segments separated by pause markers
  const textSegments = useMemo(() => text.split(PAUSE_MARKER), [text]);
  const totalSegments = textSegments.length;

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || isPaused) return;

    // Check if we've finished all segments
    if (currentSegmentIndex >= totalSegments) {
      if (onComplete) onComplete();
      
      if (loop) {
        setShowCursor(false);
        const loopTimer = setTimeout(() => {
          setDisplayedText('');
          setCurrentSegmentIndex(0);
          setCurrentCharIndex(0);
          setShowCursor(true);
        }, loopDelay);
        return () => clearTimeout(loopTimer);
      } else {
        const cursorTimer = setTimeout(() => {
          setShowCursor(false);
        }, 1000);
        return () => clearTimeout(cursorTimer);
      }
      return;
    }

    const currentSegment = textSegments[currentSegmentIndex];
    
    // Check if we've finished the current segment
    if (currentCharIndex >= currentSegment.length) {
      // If this isn't the last segment, pause before moving to next
      if (currentSegmentIndex < totalSegments - 1) {
        setIsPaused(true);
        
        const pauseTimer = setTimeout(() => {
          setIsPaused(false);
          setCurrentSegmentIndex(currentSegmentIndex + 1);
          setCurrentCharIndex(0);
        }, PAUSE_DURATION);
        
        return () => clearTimeout(pauseTimer);
      } else {
        // Move to next segment (this will trigger completion logic above)
        setCurrentSegmentIndex(currentSegmentIndex + 1);
        return;
      }
    }

    // Type the next character
    const timer = setTimeout(() => {
      const newDisplayedText = textSegments
        .slice(0, currentSegmentIndex + 1)
        .map((segment, index) => {
          if (index < currentSegmentIndex) {
            return segment; // Full segment
          } else {
            return segment.slice(0, currentCharIndex + 1); // Partial current segment
          }
        })
        .join('');
      
      setDisplayedText(newDisplayedText);
      setCurrentCharIndex(currentCharIndex + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentSegmentIndex, currentCharIndex, isTyping, isPaused, textSegments, totalSegments, speed, onComplete, loop, loopDelay]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && isTyping && (
        <span className="animate-pulse text-gray-400 ml-1">|</span>
      )}
    </span>
  );
};

export default TypewriterText;