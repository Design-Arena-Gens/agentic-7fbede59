'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { MonthlyMetric } from "@/data/insights";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
);

type TrendChartProps = {
  data: MonthlyMetric[];
};

export function TrendChart({ data }: TrendChartProps) {
  const labels = data.map((point) => point.month);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: data.map((point) => point.revenue),
        tension: 0.4,
        borderColor: "rgb(59 130 246)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        yAxisID: "y",
        pointRadius: 3,
        pointHoverRadius: 6,
      },
      {
        label: "Conversion Rate",
        data: data.map((point) => point.conversionRate * 100),
        tension: 0.35,
        borderColor: "rgb(16 185 129)",
        borderDash: [6, 6],
        fill: false,
        yAxisID: "y1",
        pointRadius: 0,
        pointHoverRadius: 3,
      },
    ],
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/75 p-6 shadow-xl shadow-blue-500/5 backdrop-blur-sm dark:border-white/5 dark:bg-slate-900/80">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Growth performance
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Revenue and conversion rate with 12-month trailing window.
          </p>
        </div>
        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-300">
          Live dataset
        </span>
      </div>
      <div className="mt-6">
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 900,
              easing: "easeOutQuart",
            },
            plugins: {
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  color: "#cbd5f5",
                  usePointStyle: true,
                  pointStyleWidth: 12,
                },
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const label = context.dataset.label ?? "";
                    const value = context.parsed.y;
                    if (label.includes("Conversion")) {
                      return `${label}: ${(value as number).toFixed(1)}%`;
                    }
                    return `${label}: $${(value as number).toLocaleString()}`;
                  },
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  color: "#cbd5f5",
                },
                grid: {
                  color: "rgba(148, 163, 184, 0.15)",
                },
              },
              y: {
                position: "left",
                ticks: {
                  callback: (value) => `$${Number(value).toLocaleString()}`,
                  color: "#cbd5f5",
                },
                grid: {
                  color: "rgba(148, 163, 184, 0.1)",
                },
              },
              y1: {
                position: "right",
                ticks: {
                  callback: (value) => `${value}%`,
                  color: "#cbd5f5",
                },
                grid: {
                  drawOnChartArea: false,
                },
              },
            },
          }}
          height={320}
        />
      </div>
    </div>
  );
}
