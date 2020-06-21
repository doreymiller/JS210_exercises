function wordSizes(str) {
  var returnObj = {};
  var words = str.split(" ");

  for (var i in words) {
    var strLength = words[i].length;

    if (strLength === 0) {
      continue;
    }
    
    returnObj[strLength] = returnObj[strLength] || 0;
    returnObj[strLength] += 1;
  }

  return returnObj;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}