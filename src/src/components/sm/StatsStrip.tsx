import React from "react";
import { CountUp } from "./CountUp";

/* Trust stats strip (Peplink pattern). Every figure and caption below is copied from
   copy that already exists on the site (SignalSection / SolutionsSection data). */
const STATS = [
  { prefix: "+", value: 65, suffix: "%", label: "Gain", caption: ">65% higher forward gain compared to standard omni arrays" },
  { prefix: "+", value: 42, suffix: "%", label: "Range", caption: "Verified 42% farther tower connection reach in rural field tests" },
  { prefix: ">", value: 80, suffix: "%", label: "Eff.", caption: ">80% average radiation efficiency across entire Sub-6 spectrum" },
  { prefix: "", value: 512, suffix: "", label: "Clients/Node", caption: "Active Concurrency" },
];

export const StatsStrip: React.FC = () => (
  <div className="sm-stats" role="list" aria-label="Key figures">
    {STATS.map((s) => (
      <div key={s.label} role="listitem" className="sm-stat sm-spot">
        <div className="sm-stat-num"><CountUp prefix={s.prefix} value={s.value} suffix={s.suffix} /></div>
        <div className="sm-stat-label">{s.label}</div>
        <p className="sm-stat-cap">{s.caption}</p>
      </div>
    ))}
  </div>
);
