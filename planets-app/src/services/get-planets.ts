import { TPlanetsResponse } from "@/types";

async function getAllPlanets() {
  try {
    const response = await fetch("https://swapi.dev/api/planets");
    const responseJson: TPlanetsResponse = await response.json();
    return responseJson.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { getAllPlanets };
