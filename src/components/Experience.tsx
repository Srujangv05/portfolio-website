"use client";

import { experiences } from "@/data/resume";
import { useReveal } from "./useReveal";

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="py-24 relative bg-slate-50">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded mb-10" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`relative pl-12 md:pl-20 transition-all duration-500 ${
                    visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + i * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full border-2 bg-white border-accent transition-all duration-300" />

                  {/* Card */}
                  <div className="group glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:ring-1 hover:ring-primary/20">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-slate-800">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 text-sm shrink-0">
                          <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-400 mb-4">
                        {exp.location}
                      </p>

                      <div className="border-t border-slate-200 pt-4 space-y-3">
                        {exp.highlights.map((h, j) => (
                          <div
                            key={j}
                            className="flex gap-3 text-sm text-slate-600 transition-colors duration-200 group-hover:text-slate-700"
                          >
                            <span className="text-accent mt-1.5 shrink-0 transition-transform duration-200 group-hover:scale-110">
                              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                                <circle cx="6" cy="6" r="3" />
                              </svg>
                            </span>
                            <span className="leading-relaxed">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
