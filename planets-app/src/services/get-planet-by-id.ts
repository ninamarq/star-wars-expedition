async function getPlanetById(id: string) {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/${id}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { getPlanetById };
