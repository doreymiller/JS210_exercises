function union(arr1, arr2) {
  var returnArr = arr1.slice();

  copyNonDups(returnArr, arr1);
  copyNonDups(returnArr, arr2);
  
  return returnArr;
}

function copyNonDups(newArr, arr) {
  for (var i in arr) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]