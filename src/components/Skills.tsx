"use client";

import { useState } from "react";
import { skills, skillCategories, type Skill } from "@/data/resume";
import { useReveal } from "./useReveal";

const categoryMeta: Record<
  Skill["category"],
  {
    gradient: string;
    bg: string;
    border: string;
    text: string;
    tagBg: string;
    tagText: string;
    icon: React.ReactNode;
    description: string;
  }
> = {
  language: {
    gradient: "from-indigo-500 to-violet-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    text: "text-indigo-600",
    tagBg: "bg-indigo-50 hover:bg-indigo-100",
    tagText: "text-indigo-700",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    description: "Core programming languages",
  },
  framework: {
    gradient: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    text: "text-cyan-600",
    tagBg: "bg-cyan-50 hover:bg-cyan-100",
    tagText: "text-cyan-700",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L12 16.5l-5.571-2.25m11.142 0L21.75 16.5 12 21.75 2.25 16.5l4.179-2.25" />
      </svg>
    ),
    description: "Frameworks & cloud platforms",
  },
  database: {
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-600",
    tagBg: "bg-emerald-50 hover:bg-emerald-100",
    tagText: "text-emerald-700",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    description: "Database & caching systems",
  },
  tool: {
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-600",
    tagBg: "bg-amber-50 hover:bg-amber-100",
    tagText: "text-amber-700",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-5.1a2.121 2.121 0 113-3l5.1 5.1m0 0L18.36 5.23a2.121 2.121 0 113 3l-6.94 6.94m0 0L21.75 22.5m-7.5-7.5L6.75 22.5m4.5-16.5v.75m0 3.75v.75m3-3h.75m-7.5 0H7.5" />
      </svg>
    ),
    description: "Development & design tools",
  },
};

const categoryOrder: Skill["category"][] = ["language", "framework", "database", "tool"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Skill["category"] | null>(null);
  const { ref, visible } = useReveal();

  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    meta: categoryMeta[cat],
    items: skills.filter((s) => s.category === cat),
  }));

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded mb-3" />
          <p className="text-slate-400 mb-10 max-w-lg text-sm">
            {skills.length} technologies across {categoryOrder.length} categories — hover over a category to explore.
          </p>

          {/* Category cards grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {grouped.map(({ category, meta, items }, i) => {
              const isActive = activeCategory === category;
              return (
                <div
                  key={category}
                  className={`relative rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  } ${
                    isActive
                      ? `${meta.border} shadow-lg ring-1 ring-offset-1 ring-${category === "language" ? "indigo" : category === "framework" ? "cyan" : category === "database" ? "emerald" : "amber"}-200`
                      : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                  }`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                  onMouseEnter={() => setActiveCategory(category)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {/* Gradient top bar */}
                  <div className={`h-1 bg-gradient-to-r ${meta.gradient}`} />

                  <div className="p-6">
                    {/* Category header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl ${meta.bg} ${meta.border} border flex items-center justify-center ${meta.text} transition-transform duration-300 ${
                            isActive ? "scale-110" : ""
                          }`}
                        >
                          {meta.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 text-sm">
                            {skillCategories.find((c) => c.key === category)?.label}
                          </h3>
                          <p className="text-xs text-slate-400">
                            {meta.description}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${meta.bg} ${meta.text}`}
                      >
                        {items.length}
                      </span>
                    </div>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, j) => (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-300 ${meta.tagBg} ${meta.tagText} ${meta.border} ${
                            isActive
                              ? "opacity-100 translate-y-0"
                              : "opacity-90"
                          }`}
                          style={{
                            transitionDelay: isActive
                              ? `${j * 40}ms`
                              : "0ms",
                          }}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${meta.gradient} ${
                              isActive ? "animate-pulse" : ""
                            }`}
                          />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom summary bar */}
          <div
            className={`mt-8 flex flex-wrap items-center justify-center gap-6 py-4 px-6 rounded-xl bg-slate-50 border border-slate-100 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            {grouped.map(({ category, meta, items }) => (
              <div
                key={category}
                className="flex items-center gap-2 text-sm"
              >
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${meta.gradient}`}
                />
                <span className="text-slate-500">
                  {skillCategories.find((c) => c.key === category)?.label}
                </span>
                <span className={`font-semibold ${meta.text}`}>
                  {items.length}
                </span>
              </div>
            ))}
            <div className="hidden sm:block h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-500">Total</span>
              <span className="font-bold gradient-text">{skills.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
