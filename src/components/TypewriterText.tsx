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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const PAUSE_MARKER = '@@PAUSE@@';
  const PAUSE_DURATION = 1200; // Increased for more breathing room
  const SPACE_AFTER_PAUSE = ' '; // Add space after pause

  // Process text to handle pause markers with spaces
  const processedText = useMemo(() => {
    // Replace pause markers with space + pause indicator
    const textWithSpaces = text.replace(/@@PAUSE@@/g, ' @@PAUSE@@');
    const parts = textWithSpaces.split('@@PAUSE@@');
    const result: Array<{ text: string; isPause: boolean }> = [];
    
    parts.forEach((part, index) => {
      if (part) {
        result.push({ text: part, isPause: false });
      }
      if (index < parts.length - 1) {
        result.push({ text: '', isPause: true });
      }
    });
    
    return result;
  }, [text]);

  // Calculate total character count for completion check
  const totalChars = useMemo(() => {
    return processedText.reduce((acc, part) => acc + part.text.length, 0);
  }, [processedText]);

  // Start typing after initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Main typing effect
  useEffect(() => {
    if (!isActive) return;

    // Check if we've completed all text
    if (currentIndex >= totalChars) {
      if (onComplete) onComplete();
      
      if (loop) {
        const loopTimer = setTimeout(() => {
          setDisplayedText('');
          setCurrentIndex(0);
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

    // Find current position in processed text
    let charCount = 0;
    let currentPartIndex = 0;
    let charInPart = 0;

    for (let i = 0; i < processedText.length; i++) {
      const part = processedText[i];
      if (part.isPause) {
        if (charCount === currentIndex) {
          // We're at a pause marker - longer pause for breathing
          const pauseTimer = setTimeout(() => {
            setCurrentIndex(prev => prev + 1);
          }, PAUSE_DURATION);
          
          return () => clearTimeout(pauseTimer);
        }
        charCount++;
      } else {
        if (currentIndex < charCount + part.text.length) {
          currentPartIndex = i;
          charInPart = currentIndex - charCount;
          break;
        }
        charCount += part.text.length;
      }
    }

    // Build display text
    let newDisplayText = '';
    let processedChars = 0;

    for (let i = 0; i < processedText.length; i++) {
      const part = processedText[i];
      if (part.isPause) {
        processedChars++;
        continue;
      }

      if (i < currentPartIndex) {
        newDisplayText += part.text;
        processedChars += part.text.length;
      } else if (i === currentPartIndex) {
        newDisplayText += part.text.slice(0, charInPart + 1);
        break;
      }
    }

    setDisplayedText(newDisplayText);

    // Schedule next character
    const timer = setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isActive, processedText, totalChars, speed, onComplete, loop, loopDelay]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span className="animate-cursor-blink text-gray-400 ml-1">|</span>
      )}
    </span>
  );
};

export default TypewriterText;