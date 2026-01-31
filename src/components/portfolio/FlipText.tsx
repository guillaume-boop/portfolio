import { useState, useEffect } from 'react';

interface FlipTextProps {
  text: string;
  className?: string;
}

const FlipText = ({ text, className = '' }: FlipTextProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Show first character immediately
    setDisplayedText(text[0] || '');

    // Wait for card-pop animation (500ms) then start typewriter for remaining text
    const timeout = setTimeout(() => {
      let currentIndex = 1;
      
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 60); // typewriter speed - increased for slower effect

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <span className={className} translate="no">
      {displayedText.split('').map((char, index) => (
        <span
          key={index}
          className="letter-flip inline-block"
          style={{ transitionDelay: `${index * 10}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default FlipText;
