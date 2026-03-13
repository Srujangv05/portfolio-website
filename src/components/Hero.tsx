"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/resume";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-200/40 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-200/40 rounded-full blur-[120px] animate-float [animation-delay:3s]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-sm text-emerald-700">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1
          className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-700 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-slate-800">Hi, I&apos;m </span>
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        {/* Title */}
        <p
          className={`text-xl md:text-2xl text-slate-500 mb-6 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {personalInfo.title}
        </p>

        {/* Summary */}
        <p
          className={`text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-[450ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {personalInfo.summary}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-[600ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#projects"
            className="group px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30"
          >
            View Projects
            <svg
              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-300 hover:border-primary/50 text-slate-600 hover:text-primary rounded-xl font-medium transition-all duration-300 hover:bg-primary/5"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 transition-all duration-700 delay-[800ms] ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-slate-400 rounded-full mt-1.5 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
