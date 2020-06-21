var numbers = [];
var rounds = 6;
var strPrefixes = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
var i = 0;
var compareVal = 25;

function isGreater(element) {
  return element > compareVal;
}

do {
  var nextNum = prompt("Enter the " + strPrefixes[i] + " number:");
  numbers.push(nextNum);
  i += 1;
} while (i < rounds);

var lastNum = numbers[numbers.length - 1];
var firstFive = numbers.slice(0, 4)
var qualStr = firstFive.includes(lastNum) ? "appears" : "does not appear";

console.log("The number " + lastNum + " " + qualStr + " in " + "[" + numbers + "]");

qualStr = numbers.some(isGreater) ? "does contain" : "does not contain";

console.log("The array " + qualStr + " numbers that are greater than " + compareVal);