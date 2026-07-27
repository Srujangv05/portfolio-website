"use client";

import { projects } from "@/data/resume";
import { useReveal } from "./useReveal";

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded mb-10" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`group glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:ring-1 hover:ring-primary/20 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {project.title}
                  </h3>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-mono border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* All highlights always visible */}
                  <div className="space-y-2.5">
                    {project.highlights.map((h, j) => (
                      <div
                        key={j}
                        className="flex gap-2.5 text-sm text-slate-500 transition-colors duration-200 group-hover:text-slate-600"
                      >
                        <span className="text-accent mt-1 shrink-0 transition-transform duration-200 group-hover:scale-110">
                          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                            <path d="M10.28 2.28a.75.75 0 00-1.06-1.06L4.5 5.94 2.78 4.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l5.25-5.25z" />
                          </svg>
                        </span>
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
