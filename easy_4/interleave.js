function interleave(arr1, arr2) {
  var returnArr = new Array();

  for (var i = 0; i < arr1.length; i++) {
    returnArr.push(arr1[i]);
    returnArr.push(arr2[i]);
  }

  return returnArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]