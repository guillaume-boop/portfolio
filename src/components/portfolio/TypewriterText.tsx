import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}

const TypewriterText = ({ 
  text, 
  speed = 30, 
  delay = 0, 
  className = '',
  showCursor = true 
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Show first character immediately
    setDisplayedText(text[0] || '');
    setIsComplete(false);

    // Wait for delay, then start typewriter for remaining text
    const startTimeout = setTimeout(() => {
      let currentIndex = 1;
      
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return (
    <span className={className} translate="no">
      {displayedText}
      {showCursor && !isComplete && <span className="typewriter-cursor" />}
    </span>
  );
};

export default TypewriterText;
