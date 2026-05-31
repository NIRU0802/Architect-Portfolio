// components/motion/TextReveal.tsx
"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function TextReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      y: 100,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}