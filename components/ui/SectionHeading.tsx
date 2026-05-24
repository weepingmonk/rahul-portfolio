"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-2xl",
        align === "left" && "text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-orange-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-300",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
