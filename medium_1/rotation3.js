//input a number
//output the number after max rotations have been performed

//data type
//a string of numbers

//abstract
//given a number, perform n rotations where n = number of digits in the input number
//starting with 0, for each rotation, increment the place of the digit, counting from the left,
//that will be rotated by moving it to the last digit place of the number.  return the
//max rotated number

//algorithm
//convert number to string
//initialize rotateDigit to 0
//for loop from 0 to string length
//slice the first part of the string from 0 to rotateDigit
//slice the string at rotateDigit, rotateDigit + 1
//slice the rest of the string at rotateDigit + 1 to end
//set string equal to concat first part, digit, and rest
//return string converted to number

function maxRotation(number) {
  let strNum = String(number);

  for (let rotateDigit = 0; rotateDigit < strNum.length; rotateDigit += 1) {
    let firstPart = strNum.slice(0, rotateDigit);
    let digit = strNum.slice(rotateDigit, rotateDigit + 1);
    let lastPart = strNum.slice(rotateDigit + 1);
    strNum = firstPart.concat(lastPart).concat(digit);
  }

  return Number(strNum);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845