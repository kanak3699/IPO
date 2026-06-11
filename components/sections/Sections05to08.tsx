import {
  AnalysisBox,
  Card,
  Check,
  ChecklistCol,
  ChecklistGrid,
  RiskBox,
  SectionHeader,
} from "@/components/ui";

export function Section05UnitEconomics() {
  return (
    <>
      <SectionHeader
        num="05"
        title="Unit Economics"
        badge="⚠ Positive Connectivity, Negative AI"
        badgeTone="caution"
      />
      <Card>
        <ChecklistGrid>
          <ChecklistCol title="Starlink (Connectivity)">
            <Check type="pass">
              Subscriber growth: 2.3M → 10.3M (+348%) in ~3 years; strong CAC
              management
            </Check>
            <Check type="pass">
              Each incremental subscriber has near-zero marginal cost
              (satellite already launched)
            </Check>
            <Check type="pass">
              Adj. EBITDA per subscriber improving as fixed costs are amortized
            </Check>
            <Check type="warn">
              ARPU declined 22.9% YoY (Q1'26 vs Q1'25) due to international
              expansion with lower-priced plans; volume offsets this
            </Check>
          </ChecklistCol>
          <ChecklistCol title="AI Segment (xAI / X)">
            <Check type="fail">
              AI segment operating loss: $(6.4B) in 2025 on $3.2B revenue —
              deeply negative unit economics in current phase
            </Check>
            <Check type="fail">
              AI CapEx: $12.7B in 2025, $7.7B in Q1 2026 alone — runway of
              losses is enormous
            </Check>
            <Check type="warn">
              Compute-as-a-service contracts emerging ($1.25B/month Anthropic
              deal) — potential path to monetization
            </Check>
            <Check type="warn">
              X advertising revenue has declined from $2.3B (2023) to $1.8B
              (2025); recovery uncertain
            </Check>
          </ChecklistCol>
        </ChecklistGrid>
        <AnalysisBox>
          <p>
            The Starlink unit economics are among the best in telecom: a
            globally ubiquitous satellite network with dramatically declining
            per-unit infrastructure cost as more satellites are launched and
            the backlog of ground terminals is cleared. As international
            markets scale, ARPU compression will persist, but the volume curve
            more than compensates.
          </p>
          <p>
            The AI segment is in the "build" phase with minimal regard for
            short-term unit economics — a deliberate strategy mirroring AWS in
            2006 or Meta's Reality Labs investment cycle. The key question is
            whether Grok achieves frontier-level differentiation and whether
            Colossus compute can be monetized externally at scale. The
            Anthropic compute contract — structured at{" "}
            <strong>$1.25B per month through May 2029</strong> — is a potential
            step-change signal for the AI compute business, though the
            durability of such arrangements depends on Anthropic's own success
            and strategic flexibility.
          </p>
        </AnalysisBox>
      </Card>
    </>
  );
}

export function Section06CustomerAnalysis() {
  return (
    <>
      <SectionHeader
        num="06"
        title="Customer Analysis"
        badge="⚠ Concentration Risk"
        badgeTone="caution"
      />
      <Card>
        <ChecklistGrid>
          <ChecklistCol title="Customer Quality">
            <Check type="pass">
              Starlink subscriber base: highly diversified across 164
              countries/territories, millions of end customers
            </Check>
            <Check type="pass">
              Enterprise and government adoption growing fastest — stickier,
              higher-ARPU customers
            </Check>
            <Check type="pass">
              Backlog of $28.4B as of Dec 31, 2025 (includes deferred revenue
              of $12.1B) — strong forward visibility
            </Check>
            <Check type="warn">
              Consumer Starlink churn data not explicitly disclosed; subscriber
              ARPU declining with international mix
            </Check>
          </ChecklistCol>
          <ChecklistCol title="Concentration Risk">
            <Check type="fail">
              <strong>"Customer A"</strong> = 20.9% of FY 2025 consolidated
              revenue ($3.9B) — a material concentration risk trigger
            </Check>
            <Check type="warn">
              Customer A was 24.2% in 2024 and 25.2% in 2023 — declining but
              still above 20% threshold
            </Check>
            <Check type="pass">
              No other single customer exceeds 10% of consolidated revenue
            </Check>
            <Check type="warn">
              Customer A likely US government (NASA/DoD/NRO) — politically
              durable but subject to budget cycles and administration changes
            </Check>
          </ChecklistCol>
        </ChecklistGrid>
        <RiskBox
          title="⚠ Concentration Red Flag"
          items={[
            "Customer A represents 20.9% of 2025 revenue, exceeding the 20% threshold. If this is a US government counterparty, shifts in administration priorities, budget sequestration, or contract re-competition could materially impact revenue.",
            "The prospectus does not name Customer A, which limits investor ability to independently assess counterparty risk.",
          ]}
        />
      </Card>
    </>
  );
}

export function Section07Profitability() {
  return (
    <>
      <SectionHeader
        num="07"
        title="Profitability"
        badge="⚠ EBITDA Positive, GAAP Negative"
        badgeTone="caution"
      />
      <Card>
        <table className="data-table">
          <thead>
            <tr>
              <th>P&amp;L Summary ($M)</th>
              <th>FY 2023</th>
              <th>FY 2024</th>
              <th>FY 2025</th>
              <th>Q1 2026</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revenue</td>
              <td>10,387</td>
              <td>14,015</td>
              <td className="td-green">18,674</td>
              <td className="td-green">4,694</td>
            </tr>
            <tr>
              <td>Total Costs &amp; Expenses</td>
              <td>13,892</td>
              <td>13,549</td>
              <td className="td-red">21,263</td>
              <td className="td-red">6,637</td>
            </tr>
            <tr>
              <td>Operating Income (Loss)</td>
              <td className="td-red">(3,505)</td>
              <td className="td-green">466</td>
              <td className="td-red">(2,589)</td>
              <td className="td-red">(1,943)</td>
            </tr>
            <tr>
              <td>Net Income (Loss)</td>
              <td className="td-red">(4,628)</td>
              <td className="td-green">791</td>
              <td className="td-red">(4,937)</td>
              <td className="td-red">(4,276)</td>
            </tr>
            <tr>
              <td>Adj. EBITDA (Consolidated)</td>
              <td>—</td>
              <td>—</td>
              <td className="td-green">6,584</td>
              <td className="td-green">1,127</td>
            </tr>
          </tbody>
        </table>
        <AnalysisBox style={{ marginTop: 16 }}>
          <p>
            SpaceX is{" "}
            <strong>
              Adj. EBITDA positive and cash-flow-positive from operations
            </strong>
            , which distinguishes it from many growth-stage IPOs. The GAAP net
            loss in 2025 ($4.9B) and Q1 2026 ($4.3B) is driven by three
            factors: (1) Starship R&amp;D expense ($3.0B in 2025), (2) AI
            segment losses ($6.4B in 2025), and (3) xAI/X integration costs.
            The company was briefly GAAP-profitable in 2024 ($791M net income),
            demonstrating that the core launch + Starlink business can generate
            real earnings when AI investments are excluded. The Connectivity
            segment alone produced $4.4B in operating income in 2025.
          </p>
          <p>
            The path to GAAP profitability requires: (a) Starship development
            reaching commercial scale, (b) AI segment achieving monetization,
            or (c) management constraining AI CapEx. None of these are
            near-term. Investors should value SpaceX on Adj. EBITDA and
            operating cash flow, not GAAP earnings — at least for the next 2–3
            years.
          </p>
        </AnalysisBox>
      </Card>
    </>
  );
}

export function Section08CashFlow() {
  return (
    <>
      <SectionHeader
        num="08"
        title="Cash Flow"
        badge="⚠ OCF Strong; FCF Deeply Negative"
        badgeTone="caution"
      />
      <Card>
        <table className="data-table">
          <thead>
            <tr>
              <th>Cash Flow ($M)</th>
              <th>FY 2023</th>
              <th>FY 2024</th>
              <th>FY 2025</th>
              <th>Q1 2026</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Operating Cash Flow</td>
              <td className="td-green">4,520</td>
              <td className="td-green">5,776</td>
              <td className="td-green">6,785</td>
              <td className="td-green">1,047</td>
            </tr>
            <tr>
              <td>Capital Expenditures</td>
              <td className="td-red">(4,415)</td>
              <td className="td-red">(11,163)</td>
              <td className="td-red">(20,737)</td>
              <td className="td-red">(10,107)</td>
            </tr>
            <tr>
              <td>Free Cash Flow (implied)</td>
              <td className="td-amber">105</td>
              <td className="td-red">(5,387)</td>
              <td className="td-red">(13,952)</td>
              <td className="td-red">(9,060)</td>
            </tr>
            <tr>
              <td>Financing Cash Flow</td>
              <td className="td-blue">422</td>
              <td className="td-blue">11,830</td>
              <td className="td-blue">26,350</td>
              <td className="td-blue">7,125</td>
            </tr>
          </tbody>
        </table>
        <RiskBox
          title="⚠ Critical: CapEx vs. OCF Mismatch"
          items={[
            "CapEx grew from $4.4B (2023) to $20.7B (2025) — a 370% increase in two years, overwhelmingly driven by AI compute infrastructure (Colossus I & II).",
            "Q1 2026 CapEx alone was $10.1B ($7.7B AI, $1.3B Connectivity, $1.1B Space) — annualizing to ~$40B, which would be among the largest capital programs of any company globally.",
            "Persistent free cash flow deficit requires ongoing external financing. $26.4B in financing cash inflows in 2025 underscores dependence on capital markets or private debt.",
          ]}
        />
        <AnalysisBox style={{ marginTop: 12 }}>
          <p>
            Operating cash flow is consistently growing ($4.5B → $5.8B → $6.8B)
            and is real — driven by Starlink subscription cash collections and
            launch deposits. The FCF problem is entirely a function of the AI
            capex bet. If xAI CapEx is excluded, the core Space + Connectivity
            business is generating strongly positive FCF. Investors must decide
            whether the AI infrastructure build is a value-creating investment
            or a capital misallocation at scale.
          </p>
        </AnalysisBox>
      </Card>
    </>
  );
}
