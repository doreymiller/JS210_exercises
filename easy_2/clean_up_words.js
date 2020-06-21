function cleanUp(string) {
  var resultStr = string.replace(/[^A-Za-z]+/g, ' ');
  return resultStr;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "