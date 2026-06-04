"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tools = [
  "Google Ads",
  "Meta Ads",
  "Amazon PPC",
  "GA4",
  "Looker Studio",
  "Google Tag Manager",
  "OpenAI",
  "Claude",
  "Groq",
  "Notion",
  "AI Automation",
];

export function Tools() {
  return (
    <section id="tools" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Tools & Platforms"
          title="Built Using Industry-Leading Platforms"
          description="The tools, platforms and AI systems I use to scale businesses efficiently."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.05,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white backdrop-blur-sm"
            >
              {tool}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}