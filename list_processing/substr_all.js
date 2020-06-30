function substringsAtStart(str) {
  return str.split('').map((char, idx) => {
    return str.slice(0, idx + 1);
  });
}

function substrings(str) {
  return str.split('').map((char, idx, strArr) => {
    return substringsAtStart(str.substring(idx));
  }).reduce((results, substr) => results.concat(substr));
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]