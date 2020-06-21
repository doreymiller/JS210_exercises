function century(year) {
  var centuryNum = Math.ceil(year / 100);
  var centuryStr = String(centuryNum);
  var suffix = 'th';
  var lastChar = centuryStr.charAt(centuryStr.length - 1);

  if (centuryNum % 100 <= 10 || centuryNum % 100 >= 20) {
    switch (lastChar) {
      case '1':
        return centuryStr + 'st';
      case '3':
        return centuryStr + 'rd';
      case '2':
        return centuryStr + 'nd';
    }
  }

  return centuryStr + suffix;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"