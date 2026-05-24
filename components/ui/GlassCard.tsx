"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -4,
              transition: { duration: 0.25 },
            }
          : undefined
      }
      className={cn(
        "relative rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        hover &&
          "transition-shadow duration-300 hover:border-orange-500/20 hover:shadow-[0_8px_40px_rgba(249,115,22,0.12)]",
        glow && "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-orange-500/5 before:to-transparent before:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
