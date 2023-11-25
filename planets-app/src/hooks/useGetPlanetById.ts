import { getPlanetById } from "@/services/get-planet-by-id";
import { useQuery } from "react-query";

export default function useGetAllPlanets(id: string) {
  return useQuery([`star-wars-planet-id-${id}`], () => getPlanetById(id), {
    // Adding cachetime and stale to control data from 1 hour, after that it will invalidade query, making a refetch
    cacheTime: 3599999,
    staleTime: 3600000,
  });
}
