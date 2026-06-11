import {
  AnalysisBox,
  Card,
  Check,
  ChecklistCol,
  ChecklistGrid,
  SectionHeader,
} from "@/components/ui";

export function Section13UseOfProceeds() {
  return (
    <>
      <SectionHeader
        num="13"
        title="Use of IPO Proceeds"
        badge="✓ Growth-Oriented"
        badgeTone="go"
      />
      <Card>
        <ChecklistGrid>
          <ChecklistCol title="Disclosed Use of Proceeds">
            <Check type="pass">
              AI compute infrastructure expansion (Colossus III+, orbital data
              centers)
            </Check>
            <Check type="pass">
              Launch infrastructure enhancement and Starship commercialization
            </Check>
            <Check type="pass">
              Satellite constellation scaling (additional Starlink generations)
            </Check>
            <Check type="pass">General corporate purposes</Check>
          </ChecklistCol>
          <ChecklistCol title="Observations">
            <Check type="pass">
              No insider liquidity — all proceeds to company; aligned with
              public investors
            </Check>
            <Check type="pass">
              Proceeds address the CapEx gap between OCF ($6.8B) and total
              investment needs (~$35–40B annually)
            </Check>
            <Check type="warn">
              No cash dividends intended in the foreseeable future; covenants
              restrict dividends
            </Check>
            <Check type="warn">
              Proceeds allocation is general — no specific dollar breakdown
              disclosed at this stage
            </Check>
          </ChecklistCol>
        </ChecklistGrid>
      </Card>
    </>
  );
}

export function Section14RiskFactors() {
  return (
    <>
      <SectionHeader
        num="14"
        title="Risk Factors"
        badge="⚠ Material Risks"
        badgeTone="caution"
      />
      <Card>
        <ChecklistGrid>
          <ChecklistCol title="Key Risks Disclosed">
            <Check type="fail">
              <strong>Customer concentration:</strong> Customer A = 20.9% of
              revenue; government customer with political/budget sensitivity
            </Check>
            <Check type="fail">
              <strong>Elon Musk key-person:</strong> Loss or distraction of
              Musk would be severely adverse
            </Check>
            <Check type="warn">
              <strong>Regulatory:</strong> Spectrum licenses (ITU), FCC
              approvals, export controls (ITAR), government launch approvals
              are all critical dependencies
            </Check>
            <Check type="warn">
              <strong>Technology:</strong> Starship remains in development;
              commercial operations are not yet proven at scale
            </Check>
            <Check type="warn">
              <strong>Cybersecurity:</strong> Nation-state-level threats to
              satellite infrastructure, AI systems, and government data
            </Check>
          </ChecklistCol>
          <ChecklistCol title="Additional Risk Areas">
            <Check type="warn">
              <strong>xAI/X integration risk:</strong> Cultural, operational,
              and financial integration of a social media platform with a
              space company is unprecedented
            </Check>
            <Check type="warn">
              <strong>Orbital debris/regulatory:</strong> Growing satellite
              constellation faces ITU coordination, debris liability, and
              spectrum interference risks
            </Check>
            <Check type="warn">
              <strong>AI competition:</strong> Google, Microsoft, Amazon, Meta
              are investing tens of billions; Grok must maintain frontier
              status
            </Check>
            <Check type="warn">
              <strong>Capital market dependency:</strong> $26.4B financing cash
              inflows in 2025 signal heavy reliance on external capital for the
              AI build
            </Check>
            <Check type="pass">
              <strong>Risk disclosure quality:</strong> Risk factors are
              detailed and specific (not boilerplate); major risks are
              disclosed prominently
            </Check>
          </ChecklistCol>
        </ChecklistGrid>
      </Card>
    </>
  );
}

export function Section15Valuation() {
  return (
    <>
      <SectionHeader
        num="15"
        title="Valuation"
        badge="⚠ Price TBD — Framework Below"
        badgeTone="caution"
      />
      <Card>
        <AnalysisBox>
          <p>
            The IPO price range has not been set in this preliminary
            prospectus. However, the company has reportedly been valued at{" "}
            <strong>~$350B pre-IPO</strong> in recent secondary transactions.
            The following framework applies based on disclosed financials:
          </p>
        </AnalysisBox>
        <table className="data-table" style={{ marginTop: 12 }}>
          <thead>
            <tr>
              <th>Valuation Metric</th>
              <th>SpaceX (FY 2025)</th>
              <th>Peer Benchmark</th>
              <th>Implied Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EV / Revenue (FY 2025)</td>
              <td className="td-amber">~19×</td>
              <td>SaaS infra: 8–15×; Telecom: 2–5×</td>
              <td className="td-amber">Premium justified by growth</td>
            </tr>
            <tr>
              <td>EV / Adj. EBITDA (FY 2025)</td>
              <td className="td-amber">~53×</td>
              <td>Growth infra: 25–60×</td>
              <td className="td-amber">High end of range</td>
            </tr>
            <tr>
              <td>EV / Revenue (Connectivity only)</td>
              <td className="td-green">~31×</td>
              <td>Starlink closest peer: none; LEO broadband is new</td>
              <td className="td-amber">Requires DCF approach</td>
            </tr>
            <tr>
              <td>EV / Connectivity EBITDA</td>
              <td className="td-green">~49×</td>
              <td>High-growth satellite operators</td>
              <td className="td-amber">Premium but defensible</td>
            </tr>
            <tr>
              <td>P/E (GAAP)</td>
              <td className="td-red">N/M (loss)</td>
              <td>N/A</td>
              <td className="td-red">Not applicable</td>
            </tr>
          </tbody>
        </table>
        <AnalysisBox style={{ marginTop: 16 }}>
          <p>
            <strong>Framework:</strong> The cleanest valuation approach is a
            sum-of-the-parts: (1) Connectivity/Starlink as a standalone
            satellite broadband business using a DCF based on growing
            subscribers, (2) Space/Launch as a defense/government services
            business on revenue multiples, and (3) AI/xAI as a venture-stage
            option (minimal premium given losses, large optionality).
          </p>
          <p>
            At a ~$350B enterprise value and $18.7B revenue, the blended
            EV/Revenue multiple of ~19× demands continued high growth. If
            Starlink scales to 30–50M subscribers over 5 years at $60–80/month
            ARPU, Connectivity revenue alone could reach $25–40B with 65%+
            EBITDA margins, supporting the valuation. The AI bet adds
            optionality but also dilutes near-term cash metrics.{" "}
            <strong>Entry price discipline is critical</strong> — there is a
            significant difference between a fair valuation and a speculative
            one at these multiples.
          </p>
        </AnalysisBox>
      </Card>
    </>
  );
}

const committeeQA = [
  {
    q: "Why does this company win?",
    a: "SpaceX has a 15-year head start in reusable rocketry. No competitor has demonstrated comparable economics or cadence (170 launches in Q1 2026). Starlink's satellite constellation (9,600 satellites) creates an infrastructure moat that takes 5–10 years and $30B+ to replicate. Amazon's Kuiper is the nearest threat but remains years behind in deployment.",
  },
  {
    q: "What is the moat?",
    a: "In Space: reusable rockets + vertical manufacturing = structural 5–10× launch cost advantage over ULA, Arianespace, and new entrants. In Connectivity: satellite density + first-mover network effects create a quality floor incumbents cannot match. In AI: unclear — Grok must maintain frontier status against Google, Anthropic, Meta, and OpenAI.",
  },
  {
    q: "Can revenue double in 3–5 years?",
    a: "Yes — highly probable. Connectivity alone projects to $20–25B by 2028 at current subscriber growth. Starship commercialization would add significant launch capacity revenue. AI compute monetization (Anthropic-scale contracts) could add $15–20B annually. Doubling from $18.7B to $37B by 2028–2029 is achievable but not guaranteed.",
  },
  {
    q: "Are unit economics attractive? Can margins expand?",
    a: "Starlink unit economics are excellent and improving: Connectivity Adj. EBITDA margin expanded from 41% to 63% in two years. The constraint is AI dilution — if xAI investment peaks and monetization scales, consolidated margins could normalize significantly. The core business (Space + Connectivity) would be ~35–40% EBITDA margin as a standalone.",
  },
  {
    q: "What could permanently impair value?",
    a: "A major Starlink satellite collision event triggering orbital debris cascades (Kessler syndrome); loss of key government contracts (Customer A); Elon Musk health or departure; catastrophic Starship failure destroying the Starbase launch complex; or a regulatory restriction on spectrum access for Starlink. These are low-probability but high-impact tail risks.",
  },
  {
    q: "What is the bear case?",
    a: "AI CapEx continues at $40B/year without meaningful monetization; Amazon Kuiper achieves competitive subscriber scale (2029+) compressing Starlink ARPU further; Starship development delays push mass-market deployment to 2030+; Customer A contract not renewed; governance failure as related-party conflicts escalate post-IPO.",
  },
  {
    q: "Are management incentives aligned?",
    a: "Partially. Musk retains controlling interest through Class B shares — his personal incentive is SpaceX mission success, not quarterly EPS. Stock options with EBITDA-based vesting milestones were not earned in 2025 (below threshold), suggesting compensation is genuinely performance-linked. A clawback policy will be adopted at IPO.",
  },
  {
    q: "Would I buy this business outright at this valuation?",
    a: "At ~$350B enterprise value: the Connectivity segment alone could be worth $200–300B in a 5-year DCF. The Space segment adds $50–100B. AI is a free option at this price. If IPO pricing is at or below this level, the risk/reward is compelling. Above $400–450B, the risk-adjusted return narrows considerably given governance and CapEx risks.",
  },
];

export function Section16CommitteeQA() {
  return (
    <>
      <SectionHeader num="16" title="IPO Investment Committee Questions" />
      <Card>
        <div className="qa-grid">
          {committeeQA.map((item) => (
            <div className="qa-item" key={item.q}>
              <div className="qa-q">{item.q}</div>
              <div className="qa-a">{item.a}</div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
