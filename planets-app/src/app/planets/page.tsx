"use client";

import SpinLoadingDiv from "@/components/spin-loading";
import { getAllPlanets } from "@/services";
import { useQuery } from "react-query";
import { FavoriteStar } from "@/components/favorite-star";

export default function Planets() {
  const {
    isLoading,
    isRefetching,
    data: planetsData,
  } = useQuery("star-wars-all-planets", () => getAllPlanets(), {
    // Adding cachetime and stale to control data from 1 hour, after that it will invalidade query, making a refetch
    cacheTime: 3599999,
    staleTime: 3600000,
  });

  if (isLoading || isRefetching) {
    return <SpinLoadingDiv />;
  }

  if (!planetsData?.length) {
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
      <h2>Planets</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Diameter</th>
            <th>Population</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {planetsData?.map((planetElement) => (
            <tr key={planetElement.name}>
              <td>{planetElement.name}</td>
              <td>{planetElement.climate}</td>
              <td>{planetElement.diameter}</td>
              <td>{planetElement.population}</td>
              <td>
                <FavoriteStar
                  itemName={planetElement.name}
                  localStorageKey="planets-app-favorites"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
