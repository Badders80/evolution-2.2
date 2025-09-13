"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  duration?: number;
  className?: string;
  filter?: boolean;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  duration = 2.5,
  className,
  filter = true,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedText(prev => prev + words[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        },
        (duration * 1000) / words.length
      );

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, words, duration]);

  return (
    <div className="relative">
      <div
        className={cn(
          "font-medium transition-all duration-300",
          className,
          filter && !isComplete && "blur-sm",
          isComplete && "blur-none"
        )}
      >
        {displayedText}
        {!isComplete && <span className="animate-blink text-gold">|</span>}
      </div>
    </div>
  );
};
