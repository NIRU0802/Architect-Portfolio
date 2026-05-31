// components/motion/FadeUp.tsx
"use client";

import { motion } from "framer-motion";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  /**
   * true  → animates once when scrolled into view (default for most sections)
   * false → animates immediately on mount (hero, above-fold content)
   */
  inView?: boolean;
}

export default function FadeUp({
  children,
  delay = 0,
  inView = false,
}: FadeUpProps) {
  if (inView) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}