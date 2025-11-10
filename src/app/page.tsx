import { MetricCard } from "@/components/metric-card";
import { PerformanceTable } from "@/components/performance-table";
import { PlaybookTimeline } from "@/components/playbook-timeline";
import { QualitySignal } from "@/components/quality-signal";
import { TrendChart } from "@/components/trend-chart";
import {
  dataQualitySignals,
  insightHighlights,
  monthlyPerformance,
  playbookSteps,
} from "@/data/insights";
import { HighlightCard } from "@/components/highlight-card";
import { Sparkles } from "lucide-react";

export default function Home() {
  const latest = monthlyPerformance.at(-1)!;
  const first = monthlyPerformance[0];
  const avgConversion =
    monthlyPerformance.reduce((acc, item) => acc + item.conversionRate, 0) /
    monthlyPerformance.length;
  const totalRevenue = monthlyPerformance.reduce(
    (acc, item) => acc + item.revenue,
    0,
  );
  const yoyRevenueGrowth =
    ((latest.revenue - first.revenue) / first.revenue) * 100;

  const metricCards = [
    {
      label: "Trailing 12M revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      trend: "up" as const,
      helper: "Compound 8.3% month-over-month growth across omnichannel cohorts.",
    },
    {
      label: "Conversion rate",
      value: `${avgConversion.toFixed(1)}%`,
      trend: "up" as const,
      helper: "Personalized promotions introduced in October pushed conversion above 3%.",
    },
    {
      label: "Retention",
      value: `${latest.retention}%`,
      trend: "steady" as const,
      helper: "NPS monitoring shows churn containment steady across premium tiers.",
    },
    {
      label: "YoY revenue delta",
      value: `${yoyRevenueGrowth.toFixed(1)}%`,
      trend: "up" as const,
      helper: "Lifecycle automation unlocked the largest YoY acceleration to date.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_55%)]" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 sm:px-10 lg:px-16">
        <header className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              <Sparkles className="h-4 w-4 text-emerald-400" aria-hidden />
              Data Science Control Tower
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Launch predictive commerce insights in one sprint.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-200">
              DS is your opinionated playbook for data science teams that want to move
              from raw telemetry to production-grade intelligence without slowdown.
              Connect sources, orchestrate experiments, and deploy outcomes with a
              living, breathing source of truth.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#playbook"
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Explore rapid launch plan
              </a>
              <a
                href="#metrics"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200"
              >
                Review live metrics
              </a>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3" id="metrics">
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Ship-ready models
                </dt>
                <dd className="mt-2 text-2xl font-semibold">12</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Experiments tracked
                </dt>
                <dd className="mt-2 text-2xl font-semibold">64</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Production sources
                </dt>
                <dd className="mt-2 text-2xl font-semibold">18</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-blue-500/20 backdrop-blur-xl">
            <TrendChart data={monthlyPerformance} />
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {metricCards.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]" id="quality">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  Observatory-grade data quality
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Streamed metrics monitored around the clock with automated drift detection
                  and lineage aware alerts.
                </p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                24/7 watch
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {dataQualitySignals.map((signal) => (
                <QualitySignal key={signal.label} {...signal} />
              ))}
            </div>
            <PerformanceTable rows={monthlyPerformance.slice(-6)} />
          </div>
          <aside
            id="playbook"
            className="sticky top-20 h-max rounded-[32px] border border-white/10 bg-white/5 p-1.5 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl"
          >
            <PlaybookTimeline steps={playbookSteps} />
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {insightHighlights.map((highlight, index) => (
            <HighlightCard key={highlight.title} index={index} {...highlight} />
          ))}
        </section>

        <section className="rounded-[32px] border border-emerald-400/40 bg-gradient-to-br from-emerald-400/10 via-slate-900 to-slate-950 p-10 shadow-2xl shadow-emerald-500/20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Ready to transform your telemetry into decisions?
              </h2>
              <p className="mt-4 max-w-2xl text-base text-slate-200">
                Plug DS into your stack, sync your warehouse within minutes, and give teams a
                workspace that captures the entire lifecycle—from data contracts to experiment
                rollout. Everything is production ready and deployable on Vercel in under 5 minutes.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:team@datascience-controltower.dev"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  Book a working session
                </a>
                <a
                  href="#metrics"
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200"
                >
                  View documentation
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-300 shadow-xl shadow-slate-900/30 backdrop-blur-md">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                What you unlock
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>• Opinionated pipelines for feature engineering and validation.</li>
                <li>• Edge deployment adapters for inference on Vercel and serverless runtimes.</li>
                <li>• Integrated governance with lineage, approvals, and incident response.</li>
                <li>• Observability dashboards powered by streaming event logs.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
