"use client";

import { useQuery } from "react-query";
import { getAllPlanets } from "@/services";

export default function PlanetId() {
  const { data } = useQuery("star-wars-all-planets", () => getAllPlanets());

  return <p>{JSON.stringify(data)}</p>;
}
