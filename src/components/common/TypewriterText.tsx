import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
}

export function TypewriterText({ text, delay = 350, speed = 55 }: TypewriterTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [visibleText, setVisibleText] = useState(prefersReducedMotion ? text : '');

  useEffect(() => {
    if (prefersReducedMotion) return;

    let characterIndex = 0;
    let typingTimer: number | undefined;

    const startTimer = window.setTimeout(() => {
      typingTimer = window.setInterval(() => {
        characterIndex += 1;
        setVisibleText(text.slice(0, characterIndex));

        if (characterIndex >= text.length && typingTimer) {
          window.clearInterval(typingTimer);
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (typingTimer) window.clearInterval(typingTimer);
    };
  }, [delay, prefersReducedMotion, speed, text]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="typewriter-text" data-text={text} aria-hidden="true">
        <span className="typewriter-content">
          {prefersReducedMotion ? text : visibleText}
          <span className="typewriter-cursor" />
        </span>
      </span>
    </>
  );
}
