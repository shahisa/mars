module.exports = function mars(string) {
  if (typeof string !== "string") throw new TypeError("Mars wants a string!");
  return string.replace(/\s/g, "");
};
