//input - array
//output - mutated array with all values sorted inascending order

//algorithm
//initialize sorted variable to true
//do the following while !sorted
//using forEach, iterate through the array
//if element > element at idx + 1 then
//  swap values
// set sorted to false
//return array

function bubbleSort(arr) {
  let sorted;

  do {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  } while (!sorted);
}



const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]