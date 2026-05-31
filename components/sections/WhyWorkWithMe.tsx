"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Bot,
  Target,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const reasons = [
  {
    icon: TrendingUp,
    title: "Performance Driven",
    description:
      "Every campaign is optimized for measurable business outcomes such as ROAS, CPA, CAC and revenue growth.",
  },

  {
    icon: BarChart3,
    title: "Analytics First",
    description:
      "Decisions are backed by GA4, attribution data, reporting dashboards and conversion tracking.",
  },

  {
    icon: Bot,
    title: "AI Automation",
    description:
      "I leverage AI systems and automation workflows to reduce manual effort and improve scalability.",
  },

  {
    icon: Target,
    title: "Full-Funnel Growth",
    description:
      "From traffic acquisition to conversion optimization, every stage of the customer journey is considered.",
  },
];

export function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Why Work With Me"
          title="Built For Performance, Not Vanity Metrics"
          description="A combination of paid media, analytics, AI automation and growth strategy focused on real business results."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
              >
                <GlassCard className="h-full p-6" hover glow>

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                    <Icon className="h-6 w-6 text-orange-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {reason.description}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}