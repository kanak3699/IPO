const categories = [
  { name: "Business Quality", val: "16 / 20", tone: "go", width: "80%" },
  { name: "Revenue Growth", val: "13 / 15", tone: "go", width: "87%" },
  { name: "Competitive Moat", val: "14 / 15", tone: "go", width: "93%" },
  { name: "Unit Economics", val: "9 / 15", tone: "caution", width: "60%" },
  { name: "Cash Flow", val: "5 / 10", tone: "caution", width: "50%" },
  { name: "Management", val: "7 / 10", tone: "caution", width: "70%" },
  { name: "Balance Sheet", val: "3 / 5", tone: "caution", width: "60%" },
  { name: "Governance", val: "2 / 5", tone: "abort", width: "40%" },
  { name: "Valuation", val: "3 / 5", tone: "caution", width: "60%" },
];

export default function ScorePanel() {
  return (
    <div className="score-panel">
      <div className="score-gauge">
        <div className="score-ring">
          <div className="score-number">72</div>
        </div>
        <div className="score-total">/100</div>
        <div className="score-label" style={{ marginTop: 6 }}>
          Overall Score
        </div>
      </div>
      <div>
        <div className="score-verdict">
          ⚡ Conditional Buy — Extraordinary Franchise, Significant Structural
          Risks
        </div>
        <div className="score-summary">
          SpaceX is a generational asset with an unassailable position in
          orbital launch and a fast-scaling satellite broadband business
          (Starlink) that is already producing substantial operating cash flow.
          However, the xAI/X integration introduces enormous AI capital burn,
          the dual-class share structure effectively removes shareholder
          governance, and IPO pricing will be pivotal — the spread between a
          fair entry point and a speculative one is wide.
        </div>
        <div className="score-breakdown">
          {categories.map((cat) => (
            <div className="score-cat" key={cat.name}>
              <div className="score-cat-name">{cat.name}</div>
              <div
                className="score-cat-val"
                style={{ color: `var(--${cat.tone})` }}
              >
                {cat.val}
              </div>
              <div className="score-cat-bar">
                <div
                  className={`score-cat-fill fill-${cat.tone}`}
                  style={{ width: cat.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
