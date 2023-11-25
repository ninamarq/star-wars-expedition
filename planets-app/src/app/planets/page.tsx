"use client";

import SpinLoadingDiv from "@/components/spin-loading-div";
import { getAllPlanets } from "@/services";
import { useQuery } from "react-query";
import { FavoriteStar } from "@/components/favorite-star";
import { styles as s } from "./styles";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IPlanet } from "@/types";
import { handleSortClick } from "@/utils";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function Planets() {
  const { push } = useRouter();
  const [planets, setPlanets] = useState<Array<IPlanet>>([]);
  const [hasSortedByKey, setHasSortedByKey] = useState<{
    diameter: boolean;
    population: boolean;
  }>({ diameter: false, population: false });

  const {
    isLoading,
    isRefetching,
    data: planetsData,
  } = useQuery("star-wars-all-planets", () => getAllPlanets(), {
    // Adding cachetime and stale to control data from 1 hour, after that it will invalidade query, making a refetch
    cacheTime: 3599999,
    staleTime: 3600000,
  });

  const handleClickOnPlanetRow = (urlToRedirect: string) => {
    const planetId = urlToRedirect.charAt(urlToRedirect.length - 2);
    push(`/planets/${planetId}`);
  };

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
      <s.PlanetsTable className="sortable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() =>
                handleSortClick({
                  hasSorted: hasSortedByKey.diameter,
                  originArr: planets,
                  action: (newPlanets) => {
                    setPlanets(newPlanets);
                    setHasSortedByKey((prevState) => ({
                      ...prevState,
                      diameter: !prevState.diameter,
                    }));
                  },
                })
              }
            >
              Diameter
              {hasSortedByKey.diameter ? (
                <FaArrowDown style={{ margin: "0 8px" }} />
              ) : (
                <FaArrowUp style={{ margin: "0 8px" }} />
              )}
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() =>
                handleSortClick({
                  hasSorted: hasSortedByKey.population,
                  originArr: planets,
                  action: (newPlanets) => {
                    setPlanets(newPlanets);
                    setHasSortedByKey((prevState) => ({
                      ...prevState,
                      population: !prevState.population,
                    }));
                  },
                })
              }
            >
              Population
              {hasSortedByKey.population ? (
                <FaArrowDown style={{ margin: "0 8px" }} />
              ) : (
                <FaArrowUp style={{ margin: "0 8px" }} />
              )}
            </th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {planets?.map((planetElement) => (
            <tr
              key={planetElement.name}
              onClick={() => handleClickOnPlanetRow(planetElement.url)}
            >
              <td>{planetElement.name}</td>
              <td>{planetElement.climate}</td>
              <td>{planetElement.diameter}</td>
              <td>{planetElement.population}</td>
              <td>
                <FavoriteStar
                  item={planetElement}
                  localStorageKey="planets-app-favorites"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </s.PlanetsTable>
    </section>
  );
}
