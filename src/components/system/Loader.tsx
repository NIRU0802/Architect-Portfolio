// components/ui/Loader.tsx
"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // After fade-out transition completes, remove from DOM entirely
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setHidden(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (hidden) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        bg-black text-white
        transition-opacity duration-1000
        ${progress === 100 ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      <h1
        className="text-6xl md:text-8xl"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        STUDIO
      </h1>

      <div className="mt-10 h-px w-48 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-6 text-sm tracking-[0.4em]">{progress}%</p>
    </div>
  );
}