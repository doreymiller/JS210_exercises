function halvsies(arr) {
  var returnArr = [[], []];

  if (arr.length === 0) {
    return returnArr;
  }

  for (var i = 0; i < arr.length; i++) {
    if (i < (Math.floor(arr.length / 2)) + (arr.length % 2)) {
      returnArr[0].push(arr[i]);
    } else {
      returnArr[1].push(arr[i]);
    }
  }

  return returnArr;
}



console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]