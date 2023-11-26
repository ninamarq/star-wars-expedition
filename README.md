# Star Wars Expedition 🪐

Welcome to the Star Wars Expedition project! 🚀

## Description

This repository explores techniques for developing a data management system using the [Star Wars API](https://swapi.dev/). The application is built using TypeScript, Next.js (leveraging app routes), and Styled Components.

To ensure a consistent and visually appealing user interface, the project design aligns with the proposal available on [Figma](https://www.figma.com/file/LUmB3DVIrCS5zVME8zfeQu/Front-technical-challenge?type=design&node-id=1-8)

<img src="./planets-app/src/assets/preview-figma-img.png" />

## Demonstration 🎬

Here we have the results obtained by page.

`/planets`

<img src="./planets-app/src/assets/planets-page.png" />

`/planets/[planetId]`

<img src="./planets-app/src/assets/planet-id-page.png" />

`/favorites`

<img src="./planets-app/src/assets/favorites-page.png" />

## Development and technologies

For this project, the technologies used were:

- [React icons](https://react-icons.github.io/react-icons/)
  - This library was used with the only purpose to get the best SVGs for the projec
- [React query (Tanstack query)](https://tanstack.com/query/v3/):
  - React query was used to cache the results from Star Wars API. The purpose was to avoid rerenders or refetching without necessity, resulting on better performance and clean async data management.
- [Next.js](https://nextjs.org/)

  - The choose of Next was based on better routes performance, using the [App route](https://nextjs.org/docs/app/building-your-application/routing) architecture. The structure is built according to directories created inside `/app`. Each directory inside app means a page/route to the project. This method provides performable page routing and pushing, and params management as well.

  <img src="./planets-app/src/assets/app-route.png" />

## What would I do different?

- Testing
  - As testing gets time to be built and performed well to cover the majority files and functionalities of the project. Probably, writing tests that cover at least 80% of the projects will provide safety use for our users.
- Zustand or Valtio
  - For scalability and better management from states and data, I would like to use some of these twos libraries to improve the performance and amount of data controlled. Using these would allow security and safety for both users and developers who will maintain or design new features for PlanetsApp, providing easier and faster development of data use.
- Responsivity with MaterialUI displays

## Instructions 📑

To run the app, follow these steps:

- First, clone the repository

```
git clone git@github.com:ninamarq/star-wars-test-expedition.git
```

- After clonning the project, open it on VSCode or another code editor. Then, open the project and get into client-app for running it

```
cd star-wars-client-app
```

- Install dependencies

```
npm install
```

- Run the project

```
npm run dev
```

- Now, access the link on you terminal, or just try accessing `http://localhost:3000`

### Thank you for being here!

## Created by me [@ninamarq](https://www.github.com/ninamarq) 🚀✨
