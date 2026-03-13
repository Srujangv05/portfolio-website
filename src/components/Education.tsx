"use client";

import { education } from "@/data/resume";
import { useReveal } from "./useReveal";

export default function Education() {
  const { ref, visible } = useReveal();

  return (
    <section id="education" className="py-24 relative bg-slate-50">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded mb-10" />

          <div className="glass-card rounded-2xl p-8 glow-hover transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-primary text-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">
                      {education.institution}
                    </h3>
                    <p className="text-primary font-medium">
                      {education.degree}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  {education.period}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500">
                    {education.location}
                  </span>
                </div>
              </div>
            </div>

            {/* CGPA highlight */}
            <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-4">
              <div className="px-4 py-3 rounded-xl bg-cyan-50 border border-cyan-200">
                <div className="text-2xl font-bold text-accent">
                  {education.cgpa}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">CGPA</div>
              </div>
              <div className="text-sm text-slate-500">
                Graduated with strong academic performance in Information Science & Engineering.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
