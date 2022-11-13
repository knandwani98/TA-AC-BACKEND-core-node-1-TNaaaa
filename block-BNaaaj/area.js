//   3. In area.js write functions to calculate area of square, rectangle and circle and export them using module.exports

module.exports = {
  square: (side) => {
    return side * side;
  },

  rectangle: (l, b) => {
    return l * b;
  },

  circle: (r) => {
    return 3.14 * r * r;
  },
};
