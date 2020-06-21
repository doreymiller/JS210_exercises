function showMultiplicativeAverage(arr) {
  var reducer = (accumulator, element) => accumulator * element;
  var product = arr.reduce(reducer);

  return String((product / arr.length).toFixed(3));
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"