function runningTotal(arr) {
  var returnArr = [];

  for (var i = 0; i < arr.length; i++) {
    returnArr[i] = i > 0 ? arr[i] + returnArr[i - 1] : arr[i];
  }

  return returnArr;
}

function mapRunningTotal(arr) {
  var sum = 0;

  return arr.map(element => sum += element);
}


console.log(mapRunningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []