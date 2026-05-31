// app/layout.tsx
import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import GridBackground from "@/components/ui/GridBackground";
import CustomCursor from "@/components/ui/CustomCursor";
import Loader from "@/components/system/Loader";
import PageTransition from "@/components/motion/PageTransition";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Studio — Architecture & Interior Design",
  description:
    "Crafting timeless architecture and interior spaces that inspire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="antialiased">
        {/* Global overlays */}
        <Loader />
        <CustomCursor />
        <GridBackground />

        {/* Smooth scrolling wrapper */}
        <SmoothScroll>
          <Navbar />

          {/* Page transition wrapper */}
          <PageTransition>
            <main>{children}</main>
          </PageTransition>

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}