//input - number
//output - the next featured number

//featured number:
//multiple of 7
//odd
//digits are all unique

//largest possible featured number is 9876543201

//algorithm
//set const maxNum to 9876543201
//if input larger than maxNum, return maxNum
//initialize var for starting search for featured number
//  equal to input / 7
//declare resultNum as undefined
//while !resultNum
//increment testNum by 7
//test if testNum is odd AND all digits are unique
//resultNum = testNum
//return resultNum

//is odd
//num mod 2 is not equal to zero

//digits unique
//convert num to string and split into array of chars
//create Set from array and if Set.size() equal to string.length then digits unique

function featured(num) {
  const maxNum = 9876543201;

  if (num >= maxNum) return "There is no next featured number.";

  let testNum = nextOddMultipleOf7(num);
  let resultNum;

  while (!resultNum) {
    if (hasUniqueDigits(testNum)) {
      resultNum = testNum;
    } else {
      testNum += 14;
    }
  }

  return resultNum;
}

function nextOddMultipleOf7(num) {
  num = num - (num % 7);
  return isOdd(num) ? num : num + 7;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function hasUniqueDigits(num) {
  let numStr = String(num);
  let digitSet = new Set(numStr.split(''));
  return digitSet.size === numStr.length;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9976543201));   // 9876543201
