function twice(number) {
  var stringNum = String(number);
  var result;

  if (stringNum.length % 2 !== 0) {
    result = number * 2;
  } else {
    var midPoint = stringNum.length / 2;
    var str1;
    var str2;

    str1 = stringNum.substring(0, midPoint);
    str2 = stringNum.substring(midPoint);
    
    if (str1 === str2) {
      result = number;
    } else {
      result = number * 2;
    }
  }

  return result;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676