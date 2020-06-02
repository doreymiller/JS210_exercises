// function crunch(str) {
//   var lastChar;
//   var i;
//   var resultStr = '';

//   for (i = 0; i < str.length; i++) {
//     if (lastChar !== str[i]) {
//       lastChar = str[i];
//       resultStr += lastChar;
//     }
//   }

//   return resultStr;
// }

function crunch(str) {
  return str.replace(/(\w)\1+/g, '$1');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""