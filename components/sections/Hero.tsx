"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import { personalInfo, heroFloatingCards } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

function FloatingMetricCard({
  label,
  value,
  change,
  className,
  delay,
}: {
  label: string;
  value: string;
  change: string;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <GlassCard className="p-3 min-w-[110px]" hover>
          <div className="flex items-center justify-between gap-3">
            <div>
            <p className="text-[9px] font-medium uppercase tracking-wider text-slate-500">
                {label}
              </p>
              <p className="mt-0.5 text-base font-bold text-white">{value}</p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-400">
              {change}
            </span>
          </div>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ delay: delay + 0.5, duration: 1.2 }}
            />
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}

function RoasCounter() {
  const count = useAnimatedCounter(42, 2200, false, true);

  return (
    <span className="bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
      {count}%
    </span>
  );
}

export function Hero() {
  const cardPositions: Record<string, string> = {
    "top-left": "absolute top-56 -left-12 hidden xl:block",
    "bottom-right": "absolute bottom-32 right-4 hidden lg:block",
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-36 pb-16 overflow-hidden"
    >
      {/* Floating analytics cards - desktop */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none hidden lg:block">
        {heroFloatingCards.map((card, i) => (
          <FloatingMetricCard
            key={card.label}
            label={card.label}
            value={card.value}
            change={card.change}
            className={cardPositions[card.position]}
            delay={0.8 + i * 0.15}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Performance Marketing Specialist</span>
          </motion.div>

          {/* Name */}
          <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-tight"
>
  Scale Your Brand with{" "}
  <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
    AI-Powered
  </span>
  <br />
  Performance Marketing
          </motion.h1>  

          {/* Headline */}
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="mt-6 max-w-3xl text-lg text-slate-300 sm:text-xl md:text-2xl leading-relaxed"
>
  Helping brands improve ROAS, reduce CPA, and automate growth
  using Google Ads, Amazon PPC, analytics, and AI-driven systems.
           </motion.p>

     
          
            
            
            
            

            


          {/* ROAS highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-3 backdrop-blur-sm"
          >
            <TrendingUp className="h-5 w-5 text-orange-400" />
            <span className="text-slate-400 text-sm">Average ROAS uplift up to</span>
            <span className="text-2xl font-bold">
              <RoasCounter />
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7 }}
  className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 sm:text-sm"
>
  <span>Google Ads</span>
  <span>•</span>
  <span>Amazon PPC</span>
  <span>•</span>
  <span>GA4 Analytics</span>
  <span>•</span>
  <span>AI Automation</span>
  <span>•</span>
  <span>Performance Marketing</span>
</motion.div>
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="mt-10 flex flex-col sm:flex-row items-center gap-4"
>
  <Button href="#ai-audit" size="lg">
    Get Free AI Growth Audit
    <ArrowRight className="h-4 w-4" />
  </Button>

  <Button href="#case-studies" variant="secondary" size="lg">
    View Case Studies
  </Button>
</motion.div>

          {/* Mobile floating cards grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 gap-3 w-full max-w-md lg:hidden"
          >
            {heroFloatingCards.map((card) => (
              <GlassCard key={card.label} className="p-3 text-left" hover>
                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  {card.label}
                </p>
                <p className="text-base font-bold text-white">{card.value}</p>
                <p className="text-[10px] text-emerald-400 mt-0.5">{card.change}</p>
              </GlassCard>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
