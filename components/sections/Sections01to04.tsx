import {
  AnalysisBox,
  Card,
  Check,
  ChecklistCol,
  ChecklistGrid,
  SectionHeader,
} from "@/components/ui";

export function Section01BusinessModel() {
  return (
    <>
      <SectionHeader
        num="01"
        title="Business Model & Competitive Position"
        badge="✓ Strong"
        badgeTone="go"
      />
      <Card>
        <ChecklistGrid>
          <ChecklistCol title="Business Model">
            <Check type="pass">
              Revenue model is clear and multi-layered (launch, Starlink
              subscriptions, AI compute, enterprise/gov't contracts)
            </Check>
            <Check type="pass">
              Proven at scale: Falcon 9 operates with airline-like reliability
              (over 99% success rate, &gt;80% of global orbital mass)
            </Check>
            <Check type="pass">
              Starlink solves a real problem: broadband connectivity for 164
              countries, including underserved and remote markets
            </Check>
          </ChecklistCol>
          <ChecklistCol title="Competitive Advantages">
            <Check type="pass">
              <strong>Proprietary tech/IP:</strong> Reusable rocket technology
              — structurally 5–10× cheaper than competitors
            </Check>
            <Check type="pass">
              <strong>Strong brand:</strong> Dominant in consumer perception of
              commercial spaceflight globally
            </Check>
            <Check type="pass">
              <strong>Cost advantage:</strong> Vertical integration from fuel
              to satellite to ground station; no outsourcing
            </Check>
            <Check type="warn" symbol="~">
              <strong>Network effects:</strong> Limited for launch; moderate
              for Starlink (density improves service quality)
            </Check>
            <Check type="warn" symbol="~">
              <strong>High switching costs:</strong> Moderate for Starlink
              terminal hardware; not contractually entrenched at consumer level
            </Check>
          </ChecklistCol>
        </ChecklistGrid>
        <AnalysisBox>
          <p>
            SpaceX operates across three distinct segments —{" "}
            <strong>Space</strong> (launch vehicles, Falcon 9, Falcon Heavy,
            Starship), <strong>Connectivity</strong> (Starlink broadband and
            mobile), and <strong>AI</strong> (xAI, Grok, Colossus compute
            infrastructure, X social platform). The business model is genuinely
            vertically integrated: SpaceX manufactures its own rockets, builds
            its own satellites in-house, and operates the ground
            infrastructure. This is not a typical aerospace contractor — it is
            an end-to-end infrastructure company.
          </p>
          <p>
            The Connectivity segment is the crown jewel. Starlink has scaled
            from 2.3M subscribers in 2023 to 10.3M in Q1 2026, crossing key
            inflection points in enterprise and government adoption.
            Connectivity segment operating income reached{" "}
            <strong>$4.4B in 2025</strong> (120% YoY growth), with Adj. EBITDA
            of $7.2B — a business that would independently command a top-10 US
            telecom valuation.
          </p>
          <p>
            <strong>The AI segment (xAI/Grok/X) is a wildcard.</strong>{" "}
            Acquired in early 2026 under common control with Elon Musk, xAI
            brings Colossus (the world's largest known AI training cluster at
            ~1GW), the Grok frontier model, and X's real-time data advantage.
            The segment is deeply loss-making ($6.4B operating loss in 2025)
            but carries enormous optionality. A disclosed compute agreement
            with Anthropic for <strong>$1.25B/month</strong> through May 2029
            signals meaningful commercial demand for compute-as-a-service.
          </p>
        </AnalysisBox>
      </Card>
    </>
  );
}

export function Section02MarketOpportunity() {
  return (
    <>
      <SectionHeader
        num="02"
        title="Market Opportunity (TAM)"
        badge="⚠ Mixed"
        badgeTone="caution"
      />
      <Card>
        <ChecklistGrid>
          <ChecklistCol title="Market Assessment">
            <Check type="pass">
              Company claims $28.5T total addressable market (Space $370B +
              Connectivity $1.6T + AI $26.5T)
            </Check>
            <Check type="pass">
              Connectivity TAM is well-supported: global broadband
              underpenetration is a documented, measurable gap
            </Check>
            <Check type="pass">
              Space launch market growing structurally; commercial satellite
              deployment is increasing
            </Check>
            <Check type="pass">
              Multiple growth vectors: consumer broadband, enterprise,
              government, maritime, orbital compute
            </Check>
          </ChecklistCol>
          <ChecklistCol title="Red Flags">
            <Check type="warn">
              The $26.5T AI TAM (97% of claimed total) is speculative —
              includes enterprise software markets SpaceX does not yet address
            </Check>
            <Check type="warn">
              The aggregate TAM figure ($28.5T) inflates the opportunity; the
              serviceable addressable market is materially smaller
            </Check>
            <Check type="na">
              AI market faces intense competition from hyperscalers (Microsoft,
              Google, Amazon, Meta)
            </Check>
          </ChecklistCol>
        </ChecklistGrid>
        <AnalysisBox>
          <p>
            The TAM claim requires careful reading. The near-term serviceable
            market is the <strong>$1.6T Connectivity TAM</strong>, which is
            realistic given Starlink's current trajectory. The $370B Space TAM
            is also credible. The $26.5T AI figure includes enterprise software
            markets largely beyond SpaceX's current or planned products — and
            should be discounted heavily in any valuation model. The legitimate
            SAM over a 5-year horizon is more conservatively in the $2–4T
            range, which is still enormous and justifies significant
            investment.
          </p>
        </AnalysisBox>
      </Card>
    </>
  );
}

export function Section03RevenueGrowth() {
  return (
    <>
      <SectionHeader
        num="03"
        title="Revenue Growth"
        badge="✓ Exceptional"
        badgeTone="go"
      />
      <Card>
        <table className="data-table">
          <thead>
            <tr>
              <th>Revenue ($M)</th>
              <th>Q1 2025</th>
              <th>FY 2023</th>
              <th>FY 2024</th>
              <th>FY 2025</th>
              <th>Q1 2026</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Space Segment</td>
              <td>—</td>
              <td>3,557</td>
              <td>3,796</td>
              <td className="td-blue">4,086</td>
              <td>619</td>
            </tr>
            <tr>
              <td>Connectivity (Starlink)</td>
              <td>—</td>
              <td>3,869</td>
              <td>7,599</td>
              <td className="td-green">11,387</td>
              <td className="td-green">3,257</td>
            </tr>
            <tr>
              <td>AI (xAI / X)</td>
              <td>—</td>
              <td>2,961</td>
              <td>2,620</td>
              <td className="td-amber">3,201</td>
              <td>818</td>
            </tr>
            <tr>
              <td>
                <strong>Total Revenue</strong>
              </td>
              <td>4,067</td>
              <td>10,387</td>
              <td>14,015</td>
              <td className="td-green">
                <strong>18,674</strong>
              </td>
              <td className="td-green">
                <strong>4,694</strong>
              </td>
            </tr>
            <tr>
              <td>YoY Growth</td>
              <td>—</td>
              <td>—</td>
              <td className="td-green">+34.9%</td>
              <td className="td-green">+33.2%</td>
              <td className="td-green">+15.4%</td>
            </tr>
          </tbody>
        </table>
        <div className="bar-chart" style={{ marginTop: 20 }}>
          <div className="bar-row">
            <span className="bar-label">2023</span>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{
                  width: "55.6%",
                  background: "linear-gradient(90deg,#1A3D70,#3A86FF)",
                }}
              >
                <span className="bar-fill-text">$10.4B</span>
              </div>
            </div>
          </div>
          <div className="bar-row">
            <span className="bar-label">2024</span>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{
                  width: "75%",
                  background: "linear-gradient(90deg,#1A3D70,#3A86FF)",
                }}
              >
                <span className="bar-fill-text">$14.0B</span>
              </div>
            </div>
          </div>
          <div className="bar-row">
            <span className="bar-label">2025</span>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{
                  width: "100%",
                  background: "linear-gradient(90deg,#005CAF,#00C98D)",
                }}
              >
                <span className="bar-fill-text">$18.7B</span>
              </div>
            </div>
          </div>
          <div className="bar-row">
            <span className="bar-label">Q1'26</span>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{
                  width: "25%",
                  background: "linear-gradient(90deg,#1A3D70,#00C98D)",
                }}
              >
                <span className="bar-fill-text">$4.7B</span>
              </div>
            </div>
          </div>
        </div>
        <AnalysisBox style={{ marginTop: 16 }}>
          <p>
            Revenue has grown at a{" "}
            <strong>34.1% CAGR from 2023 to 2025</strong> — remarkable for a
            company at this scale. The key driver is Starlink: the Connectivity
            segment grew from $3.9B (2023) to $11.4B (2025), a 71.5% CAGR, with
            no sign of saturation. Subscriber count has more than quadrupled in
            two years. Growth is diversified across consumer, enterprise, and
            government verticals and spread geographically across 164
            countries/territories.
          </p>
          <p>
            A modest Q1 2026 deceleration to +15.4% YoY on a standalone
            quarterly basis partially reflects the integration of the xAI/X
            entities (which had lower growth) and the drag of ARPU compression
            (Starlink ARPU declined ~22.9% in Q1 2026 vs. Q1 2025 due to
            international expansion). Connectivity revenue grew 27.7% in Q1
            2026 alone — the underlying engine remains strong.
          </p>
        </AnalysisBox>
      </Card>
    </>
  );
}

export function Section04GrossMargins() {
  return (
    <>
      <SectionHeader
        num="04"
        title="Gross Margins"
        badge="⚠ Mixed by Segment"
        badgeTone="caution"
      />
      <Card>
        <table className="data-table">
          <thead>
            <tr>
              <th>Segment Profitability ($M)</th>
              <th>FY 2023</th>
              <th>FY 2024</th>
              <th>FY 2025</th>
              <th>Q1 2026</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Connectivity — Operating Income</td>
              <td className="td-green">469</td>
              <td className="td-green">2,006</td>
              <td className="td-green">4,423</td>
              <td className="td-green">1,188</td>
            </tr>
            <tr>
              <td>Connectivity — Adj. EBITDA</td>
              <td className="td-green">1,602</td>
              <td className="td-green">3,849</td>
              <td className="td-green">7,168</td>
              <td className="td-green">2,087</td>
            </tr>
            <tr>
              <td>Connectivity EBITDA Margin</td>
              <td className="td-green">41.4%</td>
              <td className="td-green">50.7%</td>
              <td className="td-green">62.9%</td>
              <td className="td-green">64.1%</td>
            </tr>
            <tr>
              <td>Space — Operating Income (Loss)</td>
              <td className="td-amber">(1)</td>
              <td className="td-amber">21</td>
              <td className="td-red">(657)</td>
              <td className="td-red">(662)</td>
            </tr>
            <tr>
              <td>AI Segment — Operating Loss</td>
              <td className="td-red">(3,973)</td>
              <td className="td-red">(1,561)</td>
              <td className="td-red">(6,355)</td>
              <td className="td-red">(2,469)</td>
            </tr>
            <tr>
              <td>
                <strong>Consolidated Operating Income (Loss)</strong>
              </td>
              <td className="td-red">
                <strong>(3,505)</strong>
              </td>
              <td className="td-green">
                <strong>466</strong>
              </td>
              <td className="td-red">
                <strong>(2,589)</strong>
              </td>
              <td className="td-red">
                <strong>(1,943)</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <AnalysisBox style={{ marginTop: 16 }}>
          <p>
            The Connectivity segment is a <strong>margin powerhouse</strong>:
            Adj. EBITDA margin expanded from 41.4% (2023) to 62.9% (2025) as
            fixed satellite infrastructure cost is amortized over a rapidly
            growing subscriber base. Scale economics are clearly visible and
            accelerating. This is one of the most impressive margin expansion
            stories in recent IPO history.
          </p>
          <p>
            The Space segment is absorbing ~$3B/year in Starship R&amp;D, which
            suppresses margins structurally but is an investment, not a cost
            problem. The AI segment is the consolidated margin drag: $6.4B in
            operating losses in 2025, driven by massive Colossus data center
            CapEx, training costs, and X platform losses. Consolidated gross
            margins are difficult to assess precisely without a clean
            cost-of-revenue line, but the Adj. EBITDA margin of 35.2% signals
            healthy underlying economics when R&amp;D and D&amp;A are excluded.
          </p>
        </AnalysisBox>
      </Card>
    </>
  );
}
