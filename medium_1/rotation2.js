//input - a number to be rotated and another number that marks the digit to rotate
//        counting from the right.  
//output - the new rotated number

//data 
//array of digits for the rotation number

//abstract
//given two numbers, the first is the number to be rotated and the second is the place of the
//digit to rotate, counting left from the rightmost digit, move the digit at n place
//to the end of the number and return the new number

//algorithm
//convert first number into a string and split into an array of digits
//splice the element at array length - n
//push spliced element to end of array
//join array to a string and convert to a number
//return new number

function rotateRightmostDigits(rotationNum, digitPlace) {
  let digits = String(rotationNum).split('');
  let rotateDigit = digits.splice(digits.length - digitPlace, 1);

  digits.push(rotateDigit);
  
  return Number(digits.join(''));
}

//Examples
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(321, 4)); // 321
console.log(rotateRightmostDigits(321, 0)); // 321
console.log(rotateRightmostDigits(21, 2)); // 12
