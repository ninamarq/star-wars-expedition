"use client";

import SpinLoadingDiv from "@/components/spin-loading-div";
import { getAllPlanets } from "@/services";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { IPlanet } from "@/types";
import { PlanetsTable } from "@/components/planets-table";

export default function Planets() {
  const [planets, setPlanets] = useState<Array<IPlanet>>([]);

  const {
    isLoading,
    isRefetching,
    data: planetsData,
  } = useQuery("star-wars-all-planets", () => getAllPlanets(), {
    // Adding cachetime and stale to control data from 1 hour, after that it will invalidade query, making a refetch
    cacheTime: 3599999,
    staleTime: 3600000,
  });

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
