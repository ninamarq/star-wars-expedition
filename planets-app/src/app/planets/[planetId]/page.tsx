"use client";

import { SpinLoadingDiv, PlanetsTable } from "@/components";
import { useParams } from "next/navigation";
import { useGetPlanetById } from "@/hooks";
import { styles as s } from "./styles";
import { removeUnderlineUpperFirstLetter } from "@/utils";

export default function PlanetId() {
  const params = useParams();
  const {
    data: planetByIdData,
    isLoading: isLoadingPlanet,
    isRefetching: isRefetchingPlanet,
  } = useGetPlanetById(params.planetId as string);

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
        <PlanetsTable />
      </div>
      <aside
        style={{
          padding: "16px",
        }}
      >
        {Boolean(isLoadingPlanet || isRefetchingPlanet) ? (
          <SpinLoadingDiv $isBorderWhite />
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
