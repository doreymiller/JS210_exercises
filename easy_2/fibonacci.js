function findFibonacciIndexByLength(number) {
  var fibArr = [1, 1];
  var fibIndexCount = fibArr.length;
  var sum;

  while (String(fibArr[1]).length < number) {
    sum = fibArr[0] + fibArr[1];

    fibArr.shift();
    fibArr.push(sum);
    fibIndexCount += 1;
  }

  return fibIndexCount;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74