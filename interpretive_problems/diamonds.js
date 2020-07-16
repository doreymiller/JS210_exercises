//input - an odd integer n
//output - a diamond made of spaces and * in an n x n grid 
//logged to the console

//data type
//strings - each row is a separate string logged to the console

//abstract
//print out a four pointed diamond in a n x n grid by drawing
//n rows, starting with 1 star and increasing stars until reaching n stars in the middle
//and decreasing back down to 1 star for the last row

//algorithm
//initialize numStars variable to 1
//loop n times
//print out string with numStars star, padded in front with n - numStars spaces
//if rowNum is less than half of n, increase numStars, else decrease numStars

function diamond(n) {
  let numStars = 1;

  for (let currentRow = 1; currentRow <= n; currentRow += 1) {
    console.log(hollowDiamondRow(numStars, n));
    direction = currentRow < Math.ceil(n / 2) ? 1 : -1;
    numStars += (direction * 2);
  }
}

function diamondRow(numStars, n) {
  let diamondStr = "*".repeat(numStars);
  return rowString(diamondStr, numStars, n);
}

function rowString(str, numStars, n) {
  let numSpaces = (n - numStars)/ 2;
  return str.padStart(numStars + numSpaces, " ");
}

function hollowDiamondRow(numStars, n) {
  let diamondStr = function () {
    if (numStars === 1) {
      return "*";
    } else {
      return  "*".concat(" ".repeat(numStars - 2).concat("*"));
    }
  };
  
  return rowString(diamondStr(), numStars, n);
}


//examples
diamond(1);
diamond(5);
diamond(9);
diamond(27);



