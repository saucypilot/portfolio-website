"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  speedMs?: number;
  startDelayMs?: number;
};

export default function TypewriterText({
  text,
  className,
  speedMs = 75,
  startDelayMs = 800,
}: TypewriterTextProps) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    setVisibleCharacters(0);
    let typingTimer: number | undefined;

    const startTimer = window.setTimeout(() => {
      typingTimer = window.setInterval(() => {
        setVisibleCharacters((current) => {
          if (current >= text.length) {
            window.clearInterval(typingTimer);
            return current;
          }

          return current + 1;
        });
      }, speedMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(startTimer);
      if (typingTimer !== undefined) {
        window.clearInterval(typingTimer);
      }
    };
  }, [startDelayMs, speedMs, text]);

  return (
    <span className={className}>
      {text.slice(0, visibleCharacters)}
      <span className="typewriterCursor" aria-hidden="true" />
    </span>
  );
}
