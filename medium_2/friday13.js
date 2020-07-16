//input - number year
//output - number of times friday 13th occurred that year

//data type
//date object

//algorithm
//initialize const number of months per year
//initialize numMatches to 0
//initialize a date object
//in for loop, that iterates from 1 to 12
//set date to the 13th of index month
//get the day and if it's friday then increment numMatches by 1
//return numMatches

function fridayThe13ths(year) {
  const monthsPerYear = 12;
  const [numDate, weekday] = [13, 5];
  let numMatches = 0;
  let testDate = new Date();
  
  testDate.setFullYear(year);

  for (let month = 1; month <= monthsPerYear; month += 1) {
    testDate.setMonth(month, numDate);
    if (testDate.getDay() === weekday) numMatches += 1; 
  }

  return numMatches;
}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
