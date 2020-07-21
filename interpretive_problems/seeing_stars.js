//input - an odd integer, greater than or equal to 7
//output - an eight pointed star

//rules - a star of size n is made up of the following:
//n rows
//the middle (n / 2 + 1) row has n stars
//every other row has three stars and spaces decrease until center and then increase again
//first row - 
//  spaceBetween = (starWidth - 3) / 2 where starWidth = n
//  (rowNum * space) + star + (spaceBetween * space) + star + (spaceBetween * space)
//next row - 
//  starWidth -= 2

//algorithm
//initialize star width var to n, the size of the star
//initialize direction = 1;
//in a for loop, with rowNum = 1, rowNum <= n, rowNum += 1
//  set space between stars = (starWidth - 3) / 2
//  set space on left = (n - starWidth) / 2
//  draw the row to the console(rowNum, starWidth)
//  log to console the following string:
//    (left * ' ') + '*' + (spaceBetween * ' ') + '*' + (spaceBetween * ' ') + '*'
//  if rowNum equals middle row (n / 2 + 1) then direction = -1
//  decrease starWidth by (2 * direction)
//  

function star(n) {
  if (n % 2 === 0) return undefined;
  if (n < 7) return undefined;

  let rowWidth = n;
  let direction = 1;

  for (let rowNum = 1; rowNum <= n; rowNum += 1) {
    let spaceBetween = (rowWidth - 3) / 2;
    let paddingLeft = (n - rowWidth) / 2;

    if (rowNum === Math.floor(n / 2) + 1) {
      drawMiddle(n);
      direction = -1;
    } else {
      drawRow(paddingLeft, spaceBetween);
    }

    rowWidth -= (2 * direction);
  }
}

function drawMiddle(n) {
  console.log('*'.repeat(n));
}

function drawRow(paddingLeft, spaceBetween) {
  let rowStr = ' '.repeat(paddingLeft) +
                String('*' + ' '.repeat(spaceBetween)).repeat(2) + '*';
  console.log(rowStr);
}

star(7);
star(9);
star(3);

