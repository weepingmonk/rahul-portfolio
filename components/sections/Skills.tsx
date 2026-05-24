"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const categories = [...new Set(skills.map((s) => s.category))];

const categoryColors: Record<string, string> = {
  Advertising: "from-orange-500 to-orange-400",
  Analytics: "from-blue-500 to-cyan-400",
  Data: "from-violet-500 to-purple-400",
  Visualization: "from-emerald-500 to-teal-400",
  AI: "from-amber-500 to-yellow-400",
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Tech Stack"
          title="Tools That Power Growth"
          description="A full-stack toolkit spanning advertising platforms, analytics, data engineering, and AI automation."
        />

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-slate-400"
            >
              {cat}
            </span>
          ))}
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <GlassCard className="p-5" hover>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-xs font-bold text-orange-400">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </span>
                    <div>
                      <p className="font-medium text-white text-sm">{skill.name}</p>
                      <p className="text-[10px] text-slate-500">{skill.category}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-orange-400">{skill.level}%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category] ?? "from-orange-500 to-orange-400"}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Tech stack dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <GlassCard className="p-6 md:p-8" glow>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/60" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <span className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs font-mono text-slate-500">growth_stack.config</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {skills.map((skill) => (
                <div
                  key={`pill-${skill.name}`}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-3 text-center transition-colors hover:border-orange-500/20 hover:bg-orange-500/5"
                >
                  <p className="text-xs font-semibold text-white">{skill.name}</p>
                  <p className="text-[10px] text-slate-600 mt-0.5">{skill.category}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
