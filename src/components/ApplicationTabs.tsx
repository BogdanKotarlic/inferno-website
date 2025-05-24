import React, { useState } from "react";
import AgencyApplicationCTA from "./AgencyApplicationCTA";
import CreatorApplicationCTA from "./CreatorApplicationCTA";

const ApplicationTabs: React.FC = () => {
  const [tab, setTab] = useState<"creator" | "agency">("creator");

  return (
    <>
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setTab("creator")}
          className={tab === "creator" ? "btn-primary" : "btn-secondary"}
        >
          Creator
        </button>
        <button
          onClick={() => setTab("agency")}
          className={tab === "agency" ? "btn-primary" : "btn-secondary"}
        >
          Agency
        </button>
      </div>

      {tab === "creator" ? <CreatorApplicationCTA /> : <AgencyApplicationCTA />}
    </>
  );
};

export default ApplicationTabs;
