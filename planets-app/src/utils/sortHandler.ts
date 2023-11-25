const handleSortClick = ({
  hasSorted,
  originArr,
  key,
  action,
}: {
  key: string;
  hasSorted: boolean;
  originArr: any[];
  action: (arr: any[]) => void;
}) => {
  const copyPlanets = [...originArr];

  if (hasSorted) {
    const reversedArr = copyPlanets.reverse();
    action(reversedArr);
    return;
  }

  let sortedPlanets = copyPlanets.sort(
    (a, b) => Number(a[key]) - Number(b[key])
  );

  action(sortedPlanets);
};

export { handleSortClick };
