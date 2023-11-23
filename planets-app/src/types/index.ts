interface IPlanet {
  climate: string;
  created: Date | string;
  diameter: string;
  edited: Date | string;
  films: Array<string>;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: Array<string>;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

type TPlanetsResponse = {
  count: number;
  next: string;
  previous: any;
  results: Array<IPlanet>;
};

export type { IPlanet, TPlanetsResponse };
