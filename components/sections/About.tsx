"use client";

import { motion } from "framer-motion";
import { BarChart2, Zap, Target, LineChart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const highlights = [
  {
    icon: Target,
    title: "Performance-First",
    description:
      "Every campaign decision backed by ROAS, CPA, and ACOS targets — not vanity metrics.",
  },
  {
    icon: BarChart2,
    title: "Analytics-Driven",
    description:
      "GA4, SQL, and custom dashboards turn raw data into actionable growth strategies.",
  },
  {
    icon: Zap,
    title: "AI-Powered Ops",
    description:
      "40% reporting automation through Python pipelines and ChatGPT-powered insights.",
  },
  {
    icon: LineChart,
    title: "Full-Funnel Growth",
    description:
      "Google Ads to Amazon PPC — unified performance marketing across every channel.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Turning Ad Spend Into Measurable Growth"
          description="I'm a Performance Marketing & Growth Analytics Specialist who helps brands scale profitably across Google Ads, Amazon, and analytics platforms."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 md:p-10" glow>
              <div className="space-y-5 text-slate-300 leading-relaxed">
                <p>
                  With hands-on experience managing{" "}
                  <span className="text-orange-400 font-semibold">₹1L–5L monthly ad budgets</span>,
                  I specialize in scaling ROAS by 20–40% while driving CPA down and keeping Amazon
                  ACOS under 20%.
                </p>
                <p>
                  My approach blends platform expertise — Google Ads, Amazon PPC & DSP, GA4 — with
                  technical skills in SQL, Python, and BI tools to build reporting systems that
                  save time and surface insights faster.
                </p>
                <p>
                  From keyword strategy to conversion tracking architecture, I deliver end-to-end
                  performance marketing that brands can measure, trust, and scale.
                </p>
              </div>

              {/* Dashboard-style mini stats */}
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-8">
                {[
                  { label: "Platforms", value: "5+" },
                  { label: "Campaigns", value: "50+" },
                  { label: "Automation", value: "40%" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-orange-400">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-6 h-full" hover>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
