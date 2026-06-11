import {
  AnalysisBox,
  Card,
  Check,
  ChecklistCol,
  ChecklistGrid,
  RiskBox,
  SectionHeader,
} from "@/components/ui";

export function Section09BalanceSheet() {
  return (
    <>
      <SectionHeader
        num="09"
        title="Balance Sheet Strength"
        badge="⚠ Adequate, Rising Leverage"
        badgeTone="caution"
      />
      <Card>
        <table className="data-table">
          <thead>
            <tr>
              <th>Balance Sheet ($M)</th>
              <th>Dec 2024</th>
              <th>Dec 2025</th>
              <th>Mar 2026</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cash &amp; Equivalents</td>
              <td className="td-green">11,385</td>
              <td className="td-green">24,747</td>
              <td className="td-green">15,852</td>
            </tr>
            <tr>
              <td>Total Current Assets</td>
              <td>16,108</td>
              <td>30,952</td>
              <td>29,732</td>
            </tr>
            <tr>
              <td>PP&amp;E (Net)</td>
              <td>21,147</td>
              <td>42,602</td>
              <td>53,879</td>
            </tr>
            <tr>
              <td>Total Assets</td>
              <td>57,062</td>
              <td className="td-blue">92,079</td>
              <td className="td-blue">102,094</td>
            </tr>
            <tr>
              <td>Total Current Liabilities</td>
              <td className="td-amber">11,791</td>
              <td className="td-amber">21,400</td>
              <td className="td-amber">24,436</td>
            </tr>
            <tr>
              <td>Total Liabilities</td>
              <td className="td-amber">31,258</td>
              <td className="td-amber">50,754</td>
              <td className="td-red">60,512</td>
            </tr>
            <tr>
              <td>Shareholders' Equity (post-IPO basis)</td>
              <td className="td-green">4,863</td>
              <td className="td-green">2,573</td>
              <td className="td-green">34,533</td>
            </tr>
          </tbody>
        </table>
        <AnalysisBox style={{ marginTop: 16 }}>
          <p>
            Post-IPO (assuming preferred stock conversion), shareholders'
            equity is $34.5B (Q1 2026), with cash of $15.9B. PP&amp;E of $53.9B
            reflects the massive physical infrastructure (Starlink
            constellation, Colossus data centers, launch facilities,
            manufacturing). Total liabilities of $60.5B represent a leverage
            ratio that warrants monitoring, though most of this is deferred
            revenue and operational liabilities rather than financial debt. The
            SpaceX Bridge Loan carries a 4.58% effective rate (as of Q1 2026),
            with a $200M annual interest sensitivity to a 100bps rate move —
            manageable but not immaterial at these scales.
          </p>
        </AnalysisBox>
      </Card>
    </>
  );
}

export function Section10Management() {
  return (
    <>
      <SectionHeader
        num="10"
        title="Management Team"
        badge="⚠ Exceptional Founder; Key-Person Risk"
        badgeTone="caution"
      />
      <Card>
        <ChecklistGrid>
          <ChecklistCol title="Leadership Strengths">
            <Check type="pass">
              <strong>Elon Musk (CEO/CTO/Chairman):</strong> Founder since
              2002, arguably the most transformative technology entrepreneur of
              the modern era
            </Check>
            <Check type="pass">
              Track record of achieving the "impossible": first private
              reusable orbital rockets, largest satellite constellation in
              history
            </Check>
            <Check type="pass">
              Deep technical involvement — Musk functions as an engineer, not
              just a capital allocator
            </Check>
            <Check type="pass">
              Senior leadership team includes Bret Johnsen (CFO) and
              experienced aerospace/telecom operators
            </Check>
          </ChecklistCol>
          <ChecklistCol title="Key Risks">
            <Check type="fail">
              <strong>Key-person risk:</strong> Musk is simultaneously CEO of
              Tesla, X/xAI, and SpaceX — unprecedented concentration of
              leadership bandwidth
            </Check>
            <Check type="fail">
              <strong>Political risk:</strong> Musk's public role (DOGE,
              political controversies) creates reputational spillover to SpaceX
              brand and government contract relationships
            </Check>
            <Check type="warn">
              The prospectus acknowledges significant related-party
              transactions with Tesla, X, xAI, and The Boring Company
            </Check>
            <Check type="warn">
              No clear succession plan or named successor disclosed
            </Check>
          </ChecklistCol>
        </ChecklistGrid>
      </Card>
    </>
  );
}

export function Section11InsiderSelling() {
  return (
    <>
      <SectionHeader
        num="11"
        title="Insider Selling"
        badge="✓ No Material Sell-Down"
        badgeTone="go"
      />
      <Card>
        <ChecklistGrid>
          <ChecklistCol title="Positive Indicators">
            <Check type="pass">
              This is a primary offering — all proceeds go to SpaceX, not
              insider sellers
            </Check>
            <Check type="pass">
              Elon Musk is retaining the substantial majority of his economic
              and voting interest
            </Check>
            <Check type="pass">
              No aggressive PE/VC sponsor exit — SpaceX has remained private
              for 24 years; institutional shareholders are long-term oriented
            </Check>
          </ChecklistCol>
          <ChecklistCol title="Observations">
            <Check type="warn">
              Exact insider post-IPO ownership percentages are not disclosed in
              the preliminary prospectus (price range TBD)
            </Check>
            <Check type="pass">
              A directed share program reserves a portion of shares for SpaceX
              employees — positive alignment signal
            </Check>
          </ChecklistCol>
        </ChecklistGrid>
        <AnalysisBox>
          <p>
            The IPO is structured as a primary offering, with proceeds going to
            fund SpaceX's growth strategy (AI compute, launch infrastructure,
            satellite constellation expansion). This is a strong positive
            signal — no insiders are using the IPO as an exit vehicle. Musk
            retains effective control through Class B shares with 10× voting
            rights, meaning public shareholders are co-investors in his vision,
            not principals with governance authority.
          </p>
        </AnalysisBox>
      </Card>
    </>
  );
}

export function Section12Governance() {
  return (
    <>
      <SectionHeader
        num="12"
        title="Capital Structure & Governance"
        badge="✗ Extreme Dual-Class"
        badgeTone="abort"
      />
      <Card>
        <ChecklistGrid>
          <ChecklistCol title="Share Structure">
            <Check type="fail">
              <strong>Dual-class structure:</strong> Class A (1 vote/share),
              Class B (10 votes/share). Class B shareholders elect a majority
              of the board
            </Check>
            <Check type="fail">
              Public shareholders (Class A) have virtually no governance rights
              — cannot independently elect directors or influence major
              decisions
            </Check>
            <Check type="warn">
              SpaceX will rely on the "Controlled Company" exemption from
              Nasdaq governance requirements
            </Check>
            <Check type="warn">
              No sunset provision disclosed for the dual-class structure
            </Check>
            <Check type="warn">
              Preferred shares converting at IPO; fully diluted share count and
              option pool size not yet disclosed in preliminary form
            </Check>
          </ChecklistCol>
          <ChecklistCol title="Governance Risk Context">
            <Check type="warn">
              Related-party transactions are extensive: Tesla, X/xAI, The
              Boring Company, Neuralink — all Musk-controlled
            </Check>
            <Check type="fail">
              As a Controlled Company, SpaceX may opt out of standard
              independent director requirements, compensation committee
              independence, and nominating committee requirements
            </Check>
            <Check type="pass">
              PricewaterhouseCoopers serves as auditor — credible independent
              attestation
            </Check>
            <Check type="pass">
              A clawback policy will be adopted at IPO (Nasdaq-compliant)
            </Check>
          </ChecklistCol>
        </ChecklistGrid>
        <RiskBox
          title="✗ Governance Red Flag — Extreme Dual-Class"
          items={[
            "This is among the most concentrated governance structures in any major IPO. Class A shareholders are purchasing economic exposure with minimal ability to influence management decisions, capital allocation, or strategic direction.",
            "Investors accept that Elon Musk will govern SpaceX indefinitely, including decisions about AI investment levels, related-party transactions, and potential future strategic pivots — all without minority shareholder approval.",
            "The absence of a dual-class sunset clause is a significant institutional governance concern. Many major index providers (FTSE Russell, S&P) may restrict inclusion due to the voting structure.",
          ]}
        />
      </Card>
    </>
  );
}
