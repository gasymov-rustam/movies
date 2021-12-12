export const sortingMap = {
  titleToEnd: "original_title.asc",
  titleToStart: "original_title.desc",
  ratingFromZero: "vote_count.asc",
  ratingToZero: "vote_count.desc",
};

export const sortingOptions = [
  { value: sortingMap.titleToEnd, label: "By Name A-Z" },
  { value: sortingMap.titleToStart, label: "By Name Z-A" },
  { value: sortingMap.ratingFromZero, label: "By Rating from lowest" },
  { value: sortingMap.ratingToZero, label: "By Rating from highest" },
];
