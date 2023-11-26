import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { styles as s } from "./styles";
import { IPlanet } from "@/types";
import { handleSortClick } from "@/utils";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FavoriteStar } from "../favorite-star";
import { SpinLoadingDiv } from "..";
import { useGetAllPlanets } from "@/hooks";

export const PlanetsTable: React.FC = () => {
  const { push } = useRouter();
  const [planets, setPlanets] = useState<Array<IPlanet>>([]);

  const { isLoading, isRefetching, data: planetsData } = useGetAllPlanets();

  useEffect(() => {
    if (!planetsData) return;

    setPlanets(planetsData);
  }, [planetsData]);

  const [hasSortedByKey, setHasSortedByKey] = useState<{
    diameter: boolean;
    population: boolean;
  }>({ diameter: false, population: false });
  const handleClickOnPlanetRow = (urlToRedirect: string) => {
    const planetId = urlToRedirect.charAt(urlToRedirect.length - 2);
    push(`/planets/${planetId}`);
  };

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
    <s.PlanetsTable className="sortable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() =>
              handleSortClick({
                key: "diameter",
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
                key: "population",
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
  );
};
