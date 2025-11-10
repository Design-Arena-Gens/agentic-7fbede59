"use client";

import type { MonthlyMetric } from "@/data/insights";

type PerformanceTableProps = {
  rows: MonthlyMetric[];
};

export function PerformanceTable({ rows }: PerformanceTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 shadow-2xl shadow-slate-900/30 backdrop-blur-xl">
      <div className="border-b border-white/10 bg-white/5 px-6 py-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
          Cohort performance snapshot
        </h3>
      </div>
      <div className="overflow-x-auto px-6">
        <table className="w-full min-w-[640px] table-fixed border-collapse text-left text-sm text-slate-200">
          <thead className="text-xs uppercase tracking-wider text-slate-400">
            <tr className="border-b border-white/5">
              <th className="py-4 font-normal">Month</th>
              <th className="py-4 font-normal">Revenue</th>
              <th className="py-4 font-normal">Conversion</th>
              <th className="py-4 font-normal">Retention</th>
              <th className="py-4 font-normal">Avg order value</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.month}
                className="border-b border-white/5 transition hover:bg-white/5"
              >
                <td className="py-3 text-sm font-medium">{row.month}</td>
                <td className="py-3 text-sm font-semibold text-emerald-300">
                  ${row.revenue.toLocaleString()}
                </td>
                <td className="py-3 text-sm">{row.conversionRate.toFixed(1)}%</td>
                <td className="py-3 text-sm">{row.retention}%</td>
                <td className="py-3 text-sm">${row.avgOrderValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
