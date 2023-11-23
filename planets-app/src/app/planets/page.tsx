"use client";

import SpinLoadingDiv from "@/components/spin-loading";
import { getAllPlanets } from "@/services";
import { useQuery } from "react-query";

export default function Planets() {
  const { isLoading, data } = useQuery("star-wars-all-planets", () =>
    getAllPlanets()
  );

  if (isLoading) {
    return <SpinLoadingDiv />;
  }

  if (!data?.length) {
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

  return <div>{JSON.stringify(data)}</div>;
}
