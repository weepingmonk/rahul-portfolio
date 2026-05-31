"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function CaseStudies() {
return ( <section id="case-studies" className="relative py-24 md:py-32"> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <SectionHeading
       eyebrow="Case Studies"
       title="Growth Stories Backed by Data"
       description="From ROAS improvements to CPA reductions, these campaigns demonstrate how strategic optimization translated into measurable business outcomes."
     />

```
    <div className="grid gap-8 lg:grid-cols-3">
      {caseStudies.map((study, i) => (
        <motion.div
          key={study.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
        >
          <GlassCard
            className="group flex h-full flex-col overflow-hidden"
            hover
            glow
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
                  <TrendingUp className="h-4 w-4 text-orange-400" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Client
                  </p>

                  <p className="text-sm font-medium text-white">
                    {study.client}
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-medium text-blue-300">
                {study.platform}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-white group-hover:text-orange-100 transition-colors">
                {study.title}
              </h3>

              {/* Before / After */}
              <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-xl border border-red-500/10 bg-red-500/5 p-3">
                  <p className="text-xs text-slate-500">
                    Before
                  </p>

                  {study.before &&
                    Object.entries(study.before).map(([key, value]) => (
                      <p
                        key={key}
                        className="mt-1 text-sm text-white"
                      >
                        {key.toUpperCase()}: {value}
                      </p>
                    ))}
                </div>

                <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-3">
                  <p className="text-xs text-slate-500">
                    After
                  </p>

                  {study.after &&
                    Object.entries(study.after).map(([key, value]) => (
                      <p
                        key={key}
                        className="mt-1 text-sm font-semibold text-emerald-400"
                      >
                        {key.toUpperCase()}: {value}
                      </p>
                    ))}
                </div>

              </div>

              {/* Strategy */}
              <div className="mt-5">
                <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
                  Strategy Used
                </p>

                <div className="flex flex-wrap gap-2">
                  {study.strategy.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-orange-500/10 px-2 py-1 text-xs text-orange-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <ul className="mt-5 flex-1 space-y-3">
                {study.results.map((result) => (
                  <li
                    key={result}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-300" />
                    {result}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-1 text-sm font-medium text-orange-400 opacity-0 transition-opacity group-hover:opacity-100">
                Growth Breakdown
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  </div>
</section>
);
}

