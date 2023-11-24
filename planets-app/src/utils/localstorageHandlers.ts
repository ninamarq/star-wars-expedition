const dispatchStorageChangeEvent = () => {
  window.dispatchEvent(new Event("storage"));
};

const parseLocalStorageData = (key: string) => {
  const data = localStorage.getItem(key);

  if (data) {
    const parsedData = JSON.parse(data);
    return parsedData;
  }
  return {};
};

const setItemAsFavoriteOnLocalStorage = (
  itemName: string,
  localStorageKey: string
) => {
  const localData = parseLocalStorageData(localStorageKey);

  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      ...localData,
      [itemName]: localData[itemName] ? undefined : itemName,
    })
  );

  dispatchStorageChangeEvent();
};

const handleStorageChange = (
  setLocalData: Function,
  localStorageKey: string
) => {
  const localData = parseLocalStorageData(localStorageKey);
  setLocalData(localData);
};

export {
  setItemAsFavoriteOnLocalStorage,
  parseLocalStorageData,
  handleStorageChange,
};
