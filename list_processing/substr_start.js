function substringsAtStart(str) {
  return str.split('').map((char, idx) => {
    return str.slice(0, idx + 1);
  });
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]