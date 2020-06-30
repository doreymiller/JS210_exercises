function sum(digits) {
  let numDigits = String(digits).split('').map(strDigit => Number(strDigit));
  return numDigits.reduce((acc, val) => acc + val);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45