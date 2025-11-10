export type MonthlyMetric = {
  month: string;
  revenue: number;
  conversionRate: number;
  retention: number;
  avgOrderValue: number;
};

export type DataQualitySignal = {
  label: string;
  value: string;
  trend: "up" | "down" | "steady";
};

export type PlaybookStep = {
  title: string;
  description: string;
  duration: string;
};

export type InsightHighlight = {
  title: string;
  detail: string;
};

export const monthlyPerformance: MonthlyMetric[] = [
  {
    month: "Apr",
    revenue: 42000,
    conversionRate: 1.4,
    retention: 64,
    avgOrderValue: 76,
  },
  {
    month: "May",
    revenue: 46000,
    conversionRate: 1.6,
    retention: 66,
    avgOrderValue: 79,
  },
  {
    month: "Jun",
    revenue: 51000,
    conversionRate: 1.8,
    retention: 68,
    avgOrderValue: 82,
  },
  {
    month: "Jul",
    revenue: 56500,
    conversionRate: 2.1,
    retention: 70,
    avgOrderValue: 84,
  },
  {
    month: "Aug",
    revenue: 59000,
    conversionRate: 2.3,
    retention: 71,
    avgOrderValue: 88,
  },
  {
    month: "Sep",
    revenue: 63000,
    conversionRate: 2.6,
    retention: 73,
    avgOrderValue: 91,
  },
  {
    month: "Oct",
    revenue: 67600,
    conversionRate: 2.9,
    retention: 74,
    avgOrderValue: 95,
  },
  {
    month: "Nov",
    revenue: 70200,
    conversionRate: 3.1,
    retention: 76,
    avgOrderValue: 98,
  },
  {
    month: "Dec",
    revenue: 75100,
    conversionRate: 3.4,
    retention: 79,
    avgOrderValue: 102,
  },
  {
    month: "Jan",
    revenue: 78200,
    conversionRate: 3.5,
    retention: 80,
    avgOrderValue: 104,
  },
  {
    month: "Feb",
    revenue: 81500,
    conversionRate: 3.7,
    retention: 82,
    avgOrderValue: 107,
  },
  {
    month: "Mar",
    revenue: 84500,
    conversionRate: 3.9,
    retention: 83,
    avgOrderValue: 111,
  },
];

export const dataQualitySignals: DataQualitySignal[] = [
  { label: "Freshness SLA", value: "99.2%", trend: "up" },
  { label: "Missing Values", value: "0.8%", trend: "down" },
  { label: "Schema Drift", value: "0 alerts", trend: "steady" },
];

export const playbookSteps: PlaybookStep[] = [
  {
    title: "Acquire & Profile",
    description:
      "Connect raw sources, run automated profiling, and map data trust indicators in under 30 minutes.",
    duration: "Day 1",
  },
  {
    title: "Model & Validate",
    description:
      "Experiment with baseline models, log experiments, and track validation curves with guardrails.",
    duration: "Days 2-3",
  },
  {
    title: "Deploy & Monitor",
    description:
      "Deploy to production with real-time monitoring, anomaly detection, and rollout automation.",
    duration: "Day 4",
  },
  {
    title: "Iterate & Scale",
    description:
      "Automate retraining, schedule governance reviews, and scale to new segments confidently.",
    duration: "Day 5+",
  },
];

export const insightHighlights: InsightHighlight[] = [
  {
    title: "82% retention milestone unlocked",
    detail:
      "Loyalty segmentation uplift combined with personalized offers helped retention climb 8% since Q3.",
  },
  {
    title: "LTV grew 14% quarter-over-quarter",
    detail:
      "Average order value and conversion gains contributed to the largest sustained revenue streak to date.",
  },
  {
    title: "Zero-drift deployment streak",
    detail:
      "Real-time observability prevented shipping regressions across 12 consecutive weekly releases.",
  },
];
