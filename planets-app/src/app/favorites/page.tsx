"use client";

import { IPlanet } from "@/types";
import {
  parseLocalStorageData,
  setItemAsFavoriteOnLocalStorage,
} from "@/utils";
import { useEffect, useState, BaseSyntheticEvent } from "react";
import { styles as s } from "./styles";
import { ModalDelete, SpinLoadingDiv } from "@/components";

export default function Favorites() {
  const [favoritesList, setFavoritesList] = useState<Array<IPlanet>>([]);
  const [isLoadingFavorites, setIsLoadingFavorites] = useState<boolean>(true);
  const [showDeleteModal, setShowDeleteModal] = useState<{
    show: boolean;
    currentPlanet?: IPlanet;
  }>({ show: false });

  useEffect(() => {
    const localFavorites = parseLocalStorageData("planets-app-favorites");
    setFavoritesList(Object.values(localFavorites));
    setIsLoadingFavorites(false);

    window.addEventListener("storage", () => {
      const localFavorites = parseLocalStorageData("planets-app-favorites");
      setFavoritesList(Object.values(localFavorites));
    });
    return () => {
      window.removeEventListener("storage", () => {
        const localFavorites = parseLocalStorageData("planets-app-favorites");
        setFavoritesList(Object.values(localFavorites));
      });
    };
  }, []);

  if (isLoadingFavorites) {
    return <SpinLoadingDiv />;
  }

  if (!favoritesList?.length) {
    return (
      <section
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        No favorites
      </section>
    );
  }

  return (
    <section style={{ padding: "8px" }}>
      <h2>Favorites</h2>
      <div
        style={{
          display: "flex",
          gap: "32px",
          marginTop: "16px",
          flexWrap: "wrap",
        }}
      >
        {showDeleteModal.show && (
          <ModalDelete
            handleClose={() => setShowDeleteModal({ show: false })}
            handleDelete={(event: BaseSyntheticEvent) =>
              setItemAsFavoriteOnLocalStorage(
                showDeleteModal.currentPlanet,
                "planets-app-favorites",
                event
              )
            }
          />
        )}
        {favoritesList?.map((planet) => (
          <s.FavoriteCard key={planet.name}>
            <header>
              <div>
                <h3>{planet.name}</h3>
                <p>{planet.terrain}</p>
              </div>
              <p
                onClick={() =>
                  setShowDeleteModal({ show: true, currentPlanet: planet })
                }
                id="remove-favorite"
              >
                x
              </p>
            </header>
            <img
              width={300}
              height={200}
              alt={`image-of-${planet.name}`}
              src="https://galacticsabers.co/wp-content/uploads/2023/07/mattgallodesigns_planets_in_space_inspired_by_star_wars_hyper_r_52d158e5-0fc1-4d86-8ecd-6d58ecbf3a69.png"
            />
            <footer>
              <p>Climate: {planet.climate}</p>
              <p>Gravity: {planet.gravity}</p>
            </footer>
          </s.FavoriteCard>
        ))}
      </div>
    </section>
  );
}
