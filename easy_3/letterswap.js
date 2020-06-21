function swap(str) {
  var words = str.split(" ");

  for (var i in words) {
    words[i] = swapLetters(words[i]);
  }

  return words.join(" ");
}

function swapLetters(str) {

  if (str.length === 1) {
    return str;
  }

  var chars = str.split("");
  chars[0] = str[str.length - 1];
  chars[chars.length - 1] = str[0];

  return chars.join("");
}

function mapSwap(str) {
  var words = str.split(" ");
  var callback = word => word[word.length - 1] + word.slice(1, -1) + word[0];

  return words.map(callback).join(" ");
}

console.log(mapSwap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(mapSwap('Abcde'));                          // "ebcdA"
console.log(mapSwap('a'));                              // "a"
