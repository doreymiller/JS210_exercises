//input - string with values and operations
//output - number which is the result of calculating input values and operations

//data type
//array - stack
//number (integer) - register

//abstract
//given a string with values and operations, split string into array of operations and numbers
//iterate through array and perform action for each item, adding to the stack array when the
//element in the operations array is a number, popping the last element from the stack array
//using it as an argument to the operation (along with the register), when the element is a 
//string operation.  Operation results are stored in the register variable.

//algorithm
//split string into array using " " as delimiter
//initialize register as 0
//initialize stack as []

//iterate through array of operations
//if value is a number string (check that converstion to number is not NaN)
//  set register equal to number value
//else
//  switch value
// case "PUSH" then push register value to stack
// case "ADD" then pop last val from stack and add to register, set register to sum
// case "SUB" pop last val from stack and subtract from register, set register to answer
// case "MULT" pop last val from stack and multiply with register, set register to product
// case "DIV" pop last val from stack and divide from register, set register to answer
// case "MOD" pop value from stack and divide from register, store integer remainder in register
// case "POP" pop value from stack and set register to value
// case "PRINT" log register to console

function minilang(str) {
  let operations = str.split(" ");
  let register = 0;
  let stack = [];

  operations.forEach(operation => {
    if (isNumber(operation)) {
      register = Number(operation);
    } else {
      switch (operation) {
        case "PUSH":
          stack.push(register);
          break;
        case "ADD":
          register += stack.pop();
          break;
        case "SUB":
          register -= stack.pop();
          break;
        case "MULT":
          register *= stack.pop();
          break;
        case "DIV":
          register = Math.floor(register / stack.pop());
          break;
        case "MOD":
          register %= stack.pop();
          break;
        case "POP":
          register = stack.pop();
          break;
        case "PRINT":
          console.log(register);
          break;
      }
    }
  });
}

function isNumber(str) {
  return !Number.isNaN(Number(str));
}

//EXAMPLES
console.log(minilang('PRINT'));
// 0

console.log(minilang('5 PUSH 3 MULT PRINT'));
// 15

console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// 5
// 3
// 8

console.log(minilang('5 PUSH POP PRINT'));
// 5

console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// 5
// 10
// 4
// 7

console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// 6

console.log(minilang('4 PUSH PUSH 7 MOD MULT PRINT'));
// 12

console.log(minilang('-3 PUSH 5 SUB PRINT'));
// 8

console.log(minilang('6 PUSH'));
// (nothing is printed because the `program` argument has no `PRINT` commands)