//input a number n
//output the nth Fibonacci number

//algorithm
//if n is 1 or 2, return 1
//else
//  return fibonacci (n - 1) + fibonacci (n - 2)

function fibonacci(n) {
  let [first, second] = [1, 1];
  for (let count = 3; count <= n; count += 1) {
    let next = first + second;
    [first, second] = [second, next];
  }
  return second;
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050