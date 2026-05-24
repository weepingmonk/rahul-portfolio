"use client";

import { motion } from "framer-motion";
import {
  Target,
  ShoppingCart,
  Radio,
  BarChart3,
  Bot,
  Crosshair,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const iconMap: Record<string, LucideIcon> = {
  Target,
  ShoppingCart,
  Radio,
  BarChart3,
  Bot,
  Crosshair,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.02] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Full-Stack Performance Marketing"
          description="From campaign management to analytics automation — everything you need to scale profitably."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Target;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlassCard className="group p-6 md:p-8 h-full flex flex-col" hover glow>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 text-orange-400 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">
                      0{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white group-hover:text-orange-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-slate-500"
                      >
                        <span className="h-1 w-1 rounded-full bg-orange-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
