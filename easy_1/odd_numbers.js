for (var i = 1; i <= 99; i += 2) {
  console.log(i);
}

function logOddNumbers(start, end) {
  var currentNum = start;
  if (currentNum % 2 === 0) {
    currentNum += 1;
  }

  while (currentNum < end) {
    console.log(currentNum);
    currentNum += 2;
  }
}

var startNum = Number(prompt("Enter a starting number:"));
var endNum = Number(prompt("Enter an ending number:"));

logOddNumbers(startNum, endNum);