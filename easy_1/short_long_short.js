function shortLongShort(str1, str2) {

  if (str1.length > str2.length) {
    result = str2 + str1 + str2;
  } else {
    result = str1 + str2 + str1;
  }

  return result;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"