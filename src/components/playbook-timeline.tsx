"use client";

import { motion } from "framer-motion";
import { Play, Rocket, Sparkles, Workflow } from "lucide-react";
import type { PlaybookStep } from "@/data/insights";

const icons = [Sparkles, Workflow, Rocket, Play];

type PlaybookTimelineProps = {
  steps: PlaybookStep[];
};

export function PlaybookTimeline({ steps }: PlaybookTimelineProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/70 p-8 shadow-xl shadow-slate-900/10 backdrop-blur-sm dark:border-white/5 dark:bg-slate-900/80">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          5-day launch playbook
        </h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Ship your data science initiative from concept to production-ready in a single sprint.
        </p>
      </div>
      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = icons[index] ?? Sparkles;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 rounded-2xl border border-slate-200/40 bg-white/80 p-4 shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/80"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 text-white shadow-lg shadow-blue-500/30">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
                  {step.duration}
                </p>
                <h4 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
