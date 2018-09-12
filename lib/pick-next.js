module.exports = (arr, startItem) => {
  const index = arr.indexOf(startItem);
  return arr[index + 1];
};
