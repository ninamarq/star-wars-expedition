import { useState } from "react";
import { useRouter } from "next/navigation";
import { styles as s } from "./styles";
import { IPlanet } from "@/types";
import { handleSortClick } from "@/utils";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FavoriteStar } from "../favorite-star";

interface IPlanetsTableProps {
  planets: Array<IPlanet>;
  handlePlanetsState: (planets: Array<IPlanet>) => void;
}
export const PlanetsTable: React.FC<IPlanetsTableProps> = (
  props: IPlanetsTableProps
) => {
  const { push } = useRouter();
  const [hasSortedByKey, setHasSortedByKey] = useState<{
    diameter: boolean;
    population: boolean;
  }>({ diameter: false, population: false });
  const handleClickOnPlanetRow = (urlToRedirect: string) => {
    const planetId = urlToRedirect.charAt(urlToRedirect.length - 2);
    push(`/planets/${planetId}`);
  };

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
                originArr: props.planets,
                action: (newPlanets) => {
                  props.handlePlanetsState(newPlanets);
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
                originArr: props.planets,
                action: (newPlanets) => {
                  props.handlePlanetsState(newPlanets);
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
        {props.planets?.map((planetElement) => (
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
