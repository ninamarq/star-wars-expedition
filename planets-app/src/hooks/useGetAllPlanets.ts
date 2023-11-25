import { getAllPlanets } from "@/services";
import { useQuery } from "react-query";

export default function useGetAllPlanets() {
  return useQuery(["star-wars-all-planets"], () => getAllPlanets(), {
    // Adding cachetime and stale to control data from 1 hour, after that it will invalidade query, making a refetch
    cacheTime: 3599999,
    staleTime: 3600000,
  });
}
