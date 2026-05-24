"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#060b14]">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#060b14] to-[#040810]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]"
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[140px]"
        animate={{
          x: [0, -60, 0],
          y: [0, 80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-48 left-1/3 h-[450px] w-[450px] rounded-full bg-orange-600/10 blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#060b14_75%)]" />
    </div>
  );
}
