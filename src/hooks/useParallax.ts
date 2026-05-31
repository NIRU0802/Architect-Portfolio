"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useParallax(
  ref: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!ref.current) return;

    const animation = gsap.to(ref.current, {
      y: 120,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, [ref]);
}