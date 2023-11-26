"use client";

import { PlanetsTable } from "@/components";
import { useEffect, useState } from "react";
import { IPlanet } from "@/types";
import useGetAllPlanets from "@/hooks/useGetAllPlanets";

export default function Planets() {
  const [planets, setPlanets] = useState<Array<IPlanet>>([]);

  const { isLoading, isRefetching, data: planetsData } = useGetAllPlanets();

  useEffect(() => {
    if (!planetsData) return;

    setPlanets(planetsData);
  }, [planetsData]);

  if (!planets?.length) {
    return (
      <section
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        No planets found
      </section>
    );
  }

  return (
    <section>
      <h2 style={{ padding: "16px" }}>Planets</h2>
      <PlanetsTable
        isLoadingPlanetsData={isLoading || isRefetching}
        handlePlanetsState={setPlanets}
        planets={planets}
      />
    </section>
  );
}
