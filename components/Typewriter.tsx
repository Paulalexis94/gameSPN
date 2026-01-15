import React, { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 30, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const index = useRef(0);
  const timerRef = useRef<number | null>(null);

  // Reset when text changes (new scene)
  useEffect(() => {
    setDisplayedText('');
    index.current = 0;
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      if (index.current < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index.current));
        index.current++;
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [text, speed, onComplete]);

  // Click to skip
  const handleSkip = () => {
    if (index.current < text.length) {
       if (timerRef.current) clearInterval(timerRef.current);
       setDisplayedText(text);
       index.current = text.length;
       if (onComplete) onComplete();
    }
  };

  return (
    <div onClick={handleSkip} className="cursor-pointer min-h-[100px]">
      <p className="whitespace-pre-line">
        {displayedText}
        {index.current < text.length && (
            <span className="inline-block w-2 h-4 bg-blood ml-1 animate-pulse align-middle"></span>
        )}
      </p>
    </div>
  );
};