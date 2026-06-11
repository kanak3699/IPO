const meta = [
  { label: "FY 2025 Revenue", value: "$18.7B", cls: "accent" },
  { label: "Rev. CAGR (23–25)", value: "34.1%", cls: "accent" },
  { label: "Adj. EBITDA 2025", value: "$6.6B", cls: "accent" },
  { label: "Starlink Subs (Q1'26)", value: "10.3M", cls: "accent" },
  { label: "Total Assets (Q1'26)", value: "$102.1B", cls: "accent" },
  { label: "IPO Price", value: "TBD", cls: "rocket" },
];

export default function ReportHeader() {
  return (
    <div className="report-header">
      <div className="header-eyebrow">
        IPO Investment Committee Report · S-1 Filed May 20, 2026
      </div>
      <div className="header-title">Space Exploration Technologies Corp.</div>
      <div className="header-sub">
        Ticker: SPCX (Nasdaq) &nbsp;·&nbsp; Class A Common Stock &nbsp;·&nbsp;
        Lead Underwriters: Goldman Sachs &amp; Morgan Stanley
      </div>
      <div className="header-meta">
        {meta.map((item) => (
          <div className="meta-item" key={item.label}>
            <span className="meta-label">{item.label}</span>
            <span className={`meta-value ${item.cls}`}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
