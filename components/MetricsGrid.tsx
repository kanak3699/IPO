import type { ReactNode } from "react";

const metrics: {
  tone: string;
  label: string;
  value: string;
  valueCls: string;
  sub: ReactNode;
}[] = [
  {
    tone: "go",
    label: "Revenue (FY 2025)",
    value: "$18.7B",
    valueCls: "green",
    sub: (
      <>
        +33.2% YoY <span className="metric-delta up">↑</span>
      </>
    ),
  },
  {
    tone: "go",
    label: "Adj. EBITDA Margin",
    value: "35.2%",
    valueCls: "green",
    sub: "$6.6B EBITDA (2025)",
  },
  {
    tone: "go",
    label: "Operating Cash Flow",
    value: "$6.8B",
    valueCls: "green",
    sub: "+17.5% YoY (2025)",
  },
  {
    tone: "caution",
    label: "Free Cash Flow",
    value: "−$13.9B",
    valueCls: "red",
    sub: "CapEx: $20.7B in 2025",
  },
  {
    tone: "go",
    label: "Starlink Subscribers",
    value: "10.3M",
    valueCls: "blue",
    sub: "+134% vs. 2023 (2.3M)",
  },
  {
    tone: "go",
    label: "Total Assets (Q1 2026)",
    value: "$102.1B",
    valueCls: "blue",
    sub: "PP&E: $53.9B",
  },
  {
    tone: "caution",
    label: "Net Income (FY 2025)",
    value: "−$4.9B",
    valueCls: "red",
    sub: "AI/xAI losses dominate",
  },
  {
    tone: "caution",
    label: "Customer Concentration",
    value: "20.9%",
    valueCls: "amber",
    sub: "Single customer (govt.)",
  },
];

export default function MetricsGrid() {
  return (
    <div className="metrics-grid">
      {metrics.map((m) => (
        <div className={`metric-card ${m.tone}`} key={m.label}>
          <div className="metric-label">{m.label}</div>
          <div className={`metric-value ${m.valueCls}`}>{m.value}</div>
          <div className="metric-sub">{m.sub}</div>
        </div>
      ))}
    </div>
  );
}
