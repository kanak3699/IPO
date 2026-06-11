import type { CSSProperties, ReactNode } from "react";

type Tone = "go" | "caution" | "abort";
type CheckType = "pass" | "warn" | "fail" | "na";

const checkSymbols: Record<CheckType, string> = {
  pass: "✓",
  warn: "⚠",
  fail: "✗",
  na: "–",
};

export function SectionHeader({
  num,
  title,
  badge,
  badgeTone,
}: {
  num: string;
  title: string;
  badge?: string;
  badgeTone?: Tone;
}) {
  return (
    <div className="section-header">
      <span className="section-number">{num}</span>
      <span className="section-title">{title}</span>
      <div className="section-line" />
      {badge && badgeTone && (
        <span className={`status-badge badge-${badgeTone}`}>{badge}</span>
      )}
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="analysis-card">
      <div className="card-inner">{children}</div>
    </div>
  );
}

export function ChecklistGrid({ children }: { children: ReactNode }) {
  return <div className="checklist-grid">{children}</div>;
}

export function ChecklistCol({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="checklist-col">
      <h4>{title}</h4>
      {children}
    </div>
  );
}

export function Check({
  type,
  symbol,
  children,
}: {
  type: CheckType;
  symbol?: string;
  children: ReactNode;
}) {
  return (
    <div className="check-item">
      <div className={`check-icon icon-${type}`}>{symbol ?? checkSymbols[type]}</div>{" "}
      {children}
    </div>
  );
}

export function AnalysisBox({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div className="analysis-box" style={style}>
      {children}
    </div>
  );
}

export function RiskBox({
  title,
  items,
}: {
  title: string;
  items: ReactNode[];
}) {
  return (
    <div className="risk-box">
      <div className="risk-box-title">{title}</div>
      {items.map((item, i) => (
        <div className="risk-item" key={i}>
          · {item}
        </div>
      ))}
    </div>
  );
}
