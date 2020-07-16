//input a number n
//output the nth Fibonacci number

//algorithm
//if n is 1 or 2, return 1
//else
//  return fibonacci (n - 1) + fibonacci (n - 2)

function fibonacci(n) {
  let memo = {};
  if (n <= 2) {
    return 1;
  } else {
    memo[n - 1] = memo[n - 1] || fibonacci(n - 1);
    memo[n - 2] = memo[n - 2] || fibonacci(n - 2);
    return memo[n - 1] + memo[n - 2];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765