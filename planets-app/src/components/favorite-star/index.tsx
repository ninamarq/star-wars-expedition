import React, { useEffect, useState } from "react";
import { handleStorageChange, setItemAsFavoriteOnLocalStorage } from "@/utils";
import { FaRegStar, FaStar } from "react-icons/fa";

interface IFavoriteStarProps {
  itemName: string;
  localStorageKey: string;
}

export const FavoriteStar: React.FC<IFavoriteStarProps> = (
  props: IFavoriteStarProps
) => {
  const [favoritesList, setFavoritesList] = useState<{ [key: string]: string }>(
    {}
  );
  const isItemFavorite = (name: string) => {
    return Object.keys(favoritesList).some(
      (favorite: string) => name === favorite
    );
  };

  useEffect(() => {
    handleStorageChange(setFavoritesList, props.localStorageKey);

    window.addEventListener("storage", () =>
      handleStorageChange(setFavoritesList, props.localStorageKey)
    );
    return () => {
      window.removeEventListener("storage", () =>
        handleStorageChange(setFavoritesList, props.localStorageKey)
      );
    };
  }, []);

  return (
    <div
      onClick={() =>
        setItemAsFavoriteOnLocalStorage(props.itemName, props.localStorageKey)
      }
      style={{ cursor: "pointer" }}
    >
      {isItemFavorite(props.itemName) ? (
        <FaStar
          style={{
            color: "var(--favorite-color)",
          }}
        />
      ) : (
        <FaRegStar
          style={{
            color: "var(--favorite-color)",
          }}
        />
      )}
    </div>
  );
};
