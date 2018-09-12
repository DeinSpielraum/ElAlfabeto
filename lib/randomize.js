module.exports = function (variants) {
  const index = Math.floor(Math.random() * variants.length);
  return variants[index];
}
