export const removeUnderlineUpperFirstLetter = (value: string) => {
  return value.replace(/_/g, " ").replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
};
