"use client";

import Image from "next/image";
import { useRef } from "react";

import useParallax from "@/hooks/useParallax";

export default function HeroImagePanel() {
  const imageRef = useRef<HTMLDivElement>(null);

  useParallax(imageRef);

  return (
    <div className="relative flex justify-center">
      {/* Glow */}

      <div
        className="
          absolute
          -right-10
          top-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#B89B72]/20
          blur-[120px]
        "
      />

      {/* Main Image */}

      <div
        ref={imageRef}
        className="
          relative
          h-[650px]
          w-full
          max-w-[520px]
          overflow-hidden
          rounded-[32px]
        "
      >
        <Image
          src="/images/hero/hero-1.jpg"
          alt="Luxury Architecture"
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Floating Card */}

      <div
        className="
          absolute
          -bottom-8
          -left-8
          w-[260px]
          rounded-[28px]
          border
          border-white/20
          bg-white/70
          p-6
          backdrop-blur-xl
          shadow-2xl
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-neutral-500
          "
        >
          Featured Project
        </p>

        <h3
          className="mt-3 text-2xl"
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Luxury Villa
        </h3>

        <p className="mt-2 text-sm text-neutral-600">
          Contemporary residence blending
          natural light, modern materials and
          timeless design.
        </p>
      </div>

      {/* Floating Metric */}

      <div
        className="
          absolute
          -right-8
          top-10
          rounded-full
          border
          border-white/20
          bg-white/80
          px-8
          py-4
          backdrop-blur-xl
          shadow-xl
        "
      >
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Completed
        </p>

        <h4 className="mt-1 text-2xl font-semibold">
          150+
        </h4>
      </div>
    </div>
  );
}