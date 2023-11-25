"use client";

import { useState, useEffect } from "react";
import { IPlanet } from "@/types";
import SpinLoadingDiv from "@/components/spin-loading-div";
import { PlanetsTable } from "@/components/planets-table";
import { useParams } from "next/navigation";
import { useGetAllPlanets, useGetPlanetById } from "@/hooks";
import { styles as s } from "./styles";
import { removeUnderlineUpperFirstLetter } from "@/utils";

export default function PlanetId() {
  const params = useParams();
  const [planets, setPlanets] = useState<Array<IPlanet>>([]);
  const { data: planetsData } = useGetAllPlanets();
  const {
    data: planetByIdData,
    isLoading: isLoadingPlanet,
    isRefetching: isRefetchingPlanet,
  } = useGetPlanetById(params.planetId as string);
  useEffect(() => {
    if (!planetsData) return;

    setPlanets(planetsData as IPlanet[]);
  }, [planetsData]);

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "10fr 1fr",
        height: "100%",
      }}
    >
      <div>
        <h2 style={{ padding: "16px" }}>Planets</h2>
        <PlanetsTable handlePlanetsState={setPlanets} planets={planets} />
      </div>
      <aside
        style={{
          padding: "16px",
        }}
      >
        {isLoadingPlanet || isRefetchingPlanet ? (
          <SpinLoadingDiv />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "var(--grey-color)" }}>
              {planetByIdData?.name}
            </h3>
            <s.PlanetCard>
              {Object.entries(planetByIdData)?.map(([key, characteristics]) => {
                const keysThatDontNeedToRender = [
                  "name",
                  "url",
                  "residents",
                  "films",
                  "created",
                  "edited",
                ];
                if (keysThatDontNeedToRender.includes(key)) return;
                return (
                  <p key={`${key}-${characteristics}`}>
                    {removeUnderlineUpperFirstLetter(key)}:{" "}
                    {characteristics as string}
                  </p>
                );
              })}
            </s.PlanetCard>
          </div>
        )}
      </aside>
    </section>
  );
}
