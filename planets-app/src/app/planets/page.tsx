"use client";

import SpinLoadingDiv from "@/components/spin-loading-div";
import { useEffect, useState } from "react";
import { IPlanet } from "@/types";
import { PlanetsTable } from "@/components/planets-table";
import useGetAllPlanets from "@/hooks/useGetAllPlanets";

export default function Planets() {
  const [planets, setPlanets] = useState<Array<IPlanet>>([]);

  const { isLoading, isRefetching, data: planetsData } = useGetAllPlanets();

  useEffect(() => {
    if (!planetsData) return;

    setPlanets(planetsData);
  }, [planetsData]);

  if (isLoading || isRefetching) {
    return <SpinLoadingDiv />;
  }

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
      <PlanetsTable handlePlanetsState={setPlanets} planets={planets} />
    </section>
  );
}
