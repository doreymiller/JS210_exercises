// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

//input - three numbers
//output - a string that says what kind of triangle the three numbers create

//algorithm
//put arguments in an array of sides
//sort array in ascending order
//if array includes 0 OR array[0] + array[1] < array[2] return "invalid"
//initialize empty array
//iterate through sides array and 
// if results array does not include side, add side to results array
//switch results array length
//case 1: return "equilateral"
//case 2: return "isoceles"
//case 3: return "scalene"

function triangle(...args) {
  let sides = [...args].sort((a, b) => a - b);
  if (sides.indexOf(0) !== -1 || invalidTriangle(sides)) return "invalid";

  let uniqueSides = [];
  sides.forEach(side => {
    if (!uniqueSides.includes(side)) uniqueSides.push(side);
  });

  return validTriangleType(uniqueSides);
}

function invalidTriangle(sides) {
  return (sides[0] + sides[1] < sides[2]);
}

function validTriangleType(arrUniqueSides) {
  switch (arrUniqueSides.length) {
    case 1: return "equilateral";
    case 2: return "isoceles";
    case 3: return "scalene"
  }
}

// Examples:

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"