const handleSortClick = ({
  hasSorted,
  originArr,
  action,
}: {
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
    (a, b) => Number(a.diameter) - Number(b.diameter)
  );

  action(sortedPlanets);
};

export { handleSortClick };
