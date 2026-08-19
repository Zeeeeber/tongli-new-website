"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<"loading" | "splash" | "transition" | "done">("loading");

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("tongli-splash")) {
      setPhase("done");
      return;
    }

    // Show splash
    const splashTimer = setTimeout(() => {
      setPhase("splash");
    }, 50);

    // Start transition
    const transitionTimer = setTimeout(() => {
      setPhase("transition");
      localStorage.setItem("tongli-splash", "1");
    }, 2200);

    // Done
    const doneTimer = setTimeout(() => {
      setPhase("done");
    }, 2600);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(transitionTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  const isSplash = phase === "loading" || phase === "splash";
  const isTransitioning = phase === "transition";
  const isDone = phase === "done";

  return (
    <>
      {/* Splash Screen */}
      <div
        className={`
          fixed inset-0 z-[99999] flex flex-col items-center justify-center
          transition-all duration-1000 ease-out
          ${isSplash ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"}
        `}
        style={{
          background: "linear-gradient(135deg, #0F5C33 0%, #1A7A4A 50%, #2D9465 100%)",
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute rounded-full animate-splash-pulse"
            style={{
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div 
            className="absolute rounded-full animate-splash-pulse"
            style={{
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animationDelay: "0.5s",
            }}
          />
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <Image
            src="/images/tongli-logo-new.png"
            alt="Tongli Timber"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
        </div>

        {/* Brand name */}
        <div className="mt-6 text-center relative z-10">
          <p className="text-white/90 text-sm font-extralight tracking-[0.4em]">
            TONGLI TIMBER
          </p>
          <div className="w-10 h-px bg-white/60 mx-auto mt-3" />
        </div>
      </div>

      {/* Main content with smooth fade */}
      <div
        className={`
          min-h-screen flex flex-col bg-ivory font-sans antialiased
          transition-opacity duration-1000 ease-out
          ${isDone ? "opacity-100" : isTransitioning ? "opacity-100" : "opacity-0"}
        `}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
