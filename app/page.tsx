import ReportHeader from "@/components/ReportHeader";
import NewsSection from "@/components/NewsSection";
import ScorePanel from "@/components/ScorePanel";
import MetricsGrid from "@/components/MetricsGrid";
import {
  Section01BusinessModel,
  Section02MarketOpportunity,
  Section03RevenueGrowth,
  Section04GrossMargins,
} from "@/components/sections/Sections01to04";
import {
  Section05UnitEconomics,
  Section06CustomerAnalysis,
  Section07Profitability,
  Section08CashFlow,
} from "@/components/sections/Sections05to08";
import {
  Section09BalanceSheet,
  Section10Management,
  Section11InsiderSelling,
  Section12Governance,
} from "@/components/sections/Sections09to12";
import {
  Section13UseOfProceeds,
  Section14RiskFactors,
  Section15Valuation,
  Section16CommitteeQA,
} from "@/components/sections/Sections13to16";
import VerdictPanel from "@/components/VerdictPanel";
import Footnote from "@/components/Footnote";

export default function Home() {
  return (
    <div className="page-wrapper">
      <ReportHeader />
      <NewsSection />
      <ScorePanel />
      <MetricsGrid />
      <Section01BusinessModel />
      <Section02MarketOpportunity />
      <Section03RevenueGrowth />
      <Section04GrossMargins />
      <Section05UnitEconomics />
      <Section06CustomerAnalysis />
      <Section07Profitability />
      <Section08CashFlow />
      <Section09BalanceSheet />
      <Section10Management />
      <Section11InsiderSelling />
      <Section12Governance />
      <Section13UseOfProceeds />
      <Section14RiskFactors />
      <Section15Valuation />
      <Section16CommitteeQA />
      <VerdictPanel />
      <Footnote />
    </div>
  );
}
