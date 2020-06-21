function countOccurrences(arr) {
  var resultObj = {};

  for (var i = 0; i < arr.length; i++) {
    resultObj[arr[i]] = (resultObj[arr[i]] || 0);
    resultObj[arr[i]] += 1;
  }

  for (var i in resultObj) {
    console.log(i + " => " + resultObj[i]);
  }
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2