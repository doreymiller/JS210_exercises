//input - number of switches
//output - array containing the numbers of the switches that are on
// when the toggling has been completed.

//data type
//array

//abstract
//given a number (n), loop through n number of switches n times, each time
//toggling specific switches, at increments of the current index, on/off.
//filter the array of switch states to include only on switches and return the indexes of 
//those switches

//algorithm
//create an array of booleans, length of n, that all have false as the initial value
//loop through the array using forEach, passing index and array
//set currentVal to !currentVal
//initialize toggleIdx to idx
//while toggleIdx < length of array
//  add idx to toggleIdx
//  toggle array[toggleIdx]
//initialize results array
//loop through booleans
//  if element === true then add index + 1 to results array
// return results array



function lightsOn(num) {
  if (num === 0 || num === undefined) return [];

  let switches = Array(num).fill(false);

  for (let i = 0; i < num; i += 1) {
    for (let j = i; j < num; j += i + 1) {
      switches[j] = !switches[j];
    }
  }
  
  return switches.map((val, idx) => val ? idx + 1 : false).filter(val => {
    return val;
  });
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(1)); // [1]
console.log(lightsOn(0)); // []
console.log(lightsOn()); // []