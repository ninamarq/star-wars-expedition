"use client";

import SpinLoadingDiv from "@/components/spin-loading";
import { getAllPlanets } from "@/services";
import { IPlanet } from "@/types";
import { useState } from "react";
import { useQuery } from "react-query";
import { FavoriteStar } from "@/components/favorite-star";

export default function Planets() {
  const [planets, setPlanets] = useState<Array<IPlanet>>([]);
  const { isLoading } = useQuery(
    "star-wars-all-planets",
    () => getAllPlanets(),
    {
      refetchOnMount: "always",
      cacheTime: 3600000,
      staleTime: 3599999,
      onError() {
        setPlanets([]);
      },
      onSuccess(data) {
        setPlanets(data);
      },
    }
  );

  if (isLoading) {
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
          {planets.map((planetElement) => (
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
