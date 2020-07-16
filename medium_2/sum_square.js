//index - number
//output - number (the difference between the square of the sum of the first n positive integers
//                 and the sum of the squares of the first n positive integers)

//data 
//arrays - reduce for the square of sums and map for the sum of squares

//algorithm
//create a new Array of size n
//map empty array to array of numbers using index + 1 as value
//return square of sums - sum of squares

//square of sums
//reduce array argument to sum of elements and return value squared

//sum of squares
//map array argument replacing num with num**2

function sumSquareDifference(num) {
  let nums = new Array(num).fill(0).map((_, idx) => idx + 1);
  return squareOfSums(nums) - sumOfSquares(nums);
}

function squareOfSums(arr) {
  return (arr.reduce(sum))**2;
}

function sum(total, val) {
  return total + val;
}

function sumOfSquares(arr) {
  return arr.map(val => val**2).reduce(sum);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150