function computeSum(number) {
  var result = 0;
  var i;

  for (i = 0; i <= number; i++) {
    result += i;
  }

  return result;
}

function computeProduct(number) {
  var result = 1;
  var i;

  for (i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}

function reduceSum(array) {
  var reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer);
}

function reduceProduct(array) {
  var reducer = (accumulator, currentValue) => accumulator * currentValue;
  return array.reduce(reducer);
}

var int = parseInt(prompt("Please enter an integer greater than 0:"), 10);
var operator = prompt('Enter "s" to compute the sum, or "p" to compute the product.');
var result = 1;
var numArray = [];

for (var i = 0; i < int; i++) {
  numArray[i] = i + 1;
}



if (operator === "s") {
  //result = computeSum(int);
  result = reduceSum(numArray);
  console.log("The sum of the integers between 1 and " + int + " is " + result);
} else if (operator === "p") {
  //result = computeProduct(int);
  result = reduceProduct(numArray);
  console.log("The product of the integers between 1 and " + int + " is " + result);
} else {
  console.log("You have entered an invalid operator!");
}

