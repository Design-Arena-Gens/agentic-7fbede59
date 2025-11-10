"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import type { InsightHighlight } from "@/data/insights";

type HighlightCardProps = InsightHighlight & { index: number };

export function HighlightCard({ title, detail, index }: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-lg shadow-blue-500/10 backdrop-blur-md"
    >
      <div className="flex items-center gap-3 text-emerald-300">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10">
          <Flame className="h-5 w-5" aria-hidden />
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
          Signal
        </p>
      </div>
      <h4 className="mt-4 text-lg font-semibold leading-tight text-white">{title}</h4>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{detail}</p>
    </motion.div>
  );
}
