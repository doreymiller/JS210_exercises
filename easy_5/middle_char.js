function centerOf(str) {
  let midIndex = Math.floor(str.length / 2);
  if (str.length % 2 === 1) {
    return str[midIndex];
  } else {
    return str.slice(midIndex - 1, midIndex + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"