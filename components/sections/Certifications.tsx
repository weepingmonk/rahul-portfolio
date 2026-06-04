"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Certifications() {
return ( <section id="certifications" className="relative py-24 md:py-32"> <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />

```
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionHeading
      eyebrow="Certifications"
      title="Industry-Recognized Credentials"
      description="Validated expertise across HubSpot, Google Analytics, and Amazon Ads."
    />

    <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
      {certifications.map((cert, i) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          {cert.credentialUrl ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <GlassCard
                className="group cursor-pointer p-8"
                hover
                glow
              >
                <div className="flex items-start gap-5">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br from-orange-500/20 to-blue-500/20">
                    <Award className="h-7 w-7 text-orange-400" />

                    <span className="absolute -bottom-1 -right-1 rounded-md border border-white/10 bg-[#060b14] px-1.5 py-0.5 text-[9px] font-bold text-orange-300">
                      {cert.badge}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold leading-snug text-white">
                        {cert.title}
                      </h3>

                      <ExternalLink className="h-4 w-4 shrink-0 text-orange-400" />
                    </div>

                    <p className="mt-1 text-sm text-orange-400/80">
                      {cert.issuer} · {cert.year}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {cert.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3,
                      }}
                    />
                  </div>

                  <span className="text-xs font-medium text-emerald-400">
                    Verified
                  </span>
                </div>
              </GlassCard>
            </a>
          ) : (
            <GlassCard className="group p-8" hover glow>
              <div className="flex items-start gap-5">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br from-orange-500/20 to-blue-500/20">
                  <Award className="h-7 w-7 text-orange-400" />

                  <span className="absolute -bottom-1 -right-1 rounded-md border border-white/10 bg-[#060b14] px-1.5 py-0.5 text-[9px] font-bold text-orange-300">
                    {cert.badge}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold leading-snug text-white">
                      {cert.title}
                    </h3>

                    <ExternalLink className="h-4 w-4 shrink-0 text-slate-600 opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-orange-400" />
                  </div>

                  <p className="mt-1 text-sm text-orange-400/80">
                    {cert.issuer} · {cert.year}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {cert.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3,
                    }}
                  />
                </div>

                <span className="text-xs font-medium text-emerald-400">
                  Verified
                </span>
              </div>
            </GlassCard>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>

);
}
