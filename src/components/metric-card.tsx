'use client';

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const trendIcons = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  steady: ArrowRight,
} as const;

type TrendDirection = keyof typeof trendIcons;

type MetricCardProps = {
  label: string;
  value: string;
  trend: TrendDirection;
  helper?: string;
};

export function MetricCard({ label, value, trend, helper }: MetricCardProps) {
  const Icon = trendIcons[trend];

  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-white/80 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-sm dark:border-white/5 dark:bg-slate-900/80"
    >
      <div className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-slate-900 dark:text-white">
          {value}
        </span>
        <span
          className={cn("flex items-center gap-1 text-sm font-medium", {
            "text-emerald-500": trend === "up",
            "text-rose-500": trend === "down",
            "text-slate-500": trend === "steady",
          })}
        >
          <Icon className="h-4 w-4" aria-hidden />
          {trend === "steady" ? "steady" : trend === "up" ? "growing" : "cooldown"}
        </span>
      </div>
      {helper ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {helper}
        </p>
      ) : null}
    </motion.div>
  );
}
