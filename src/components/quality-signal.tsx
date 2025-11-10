"use client";

import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import type { DataQualitySignal } from "@/data/insights";
import { cn } from "@/lib/utils";

const icons = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  steady: ArrowRight,
} as const;

type QualitySignalProps = DataQualitySignal;

export function QualitySignal({ label, value, trend }: QualitySignalProps) {
  const Icon = icons[trend];

  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-sm text-slate-200 shadow-lg shadow-slate-900/40">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
        <p className="mt-2 text-xl font-semibold">{value}</p>
      </div>
      <span
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
          trend === "up" && "bg-emerald-400/10 text-emerald-300",
          trend === "down" && "bg-rose-400/10 text-rose-300",
          trend === "steady" && "bg-slate-400/10 text-slate-200",
        )}
      >
        <Icon className="h-3.5 w-3.5" aria-hidden />
        {trend === "steady" ? "stable" : trend === "up" ? "improving" : "watch"}
      </span>
    </div>
  );
}
