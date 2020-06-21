function stringy(number) {
  var count = 1;
  var returnStr = '';

  while (count < number) {
    returnStr += String(count % 2);
    count += 1;
  }

  return returnStr;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"