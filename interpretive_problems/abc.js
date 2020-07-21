//input - word as a string 
//output - boolean, true if the word can be spelled with the blocks, false if not


//rules
//If the word uses the same letter block more than once, return false
//ignore case when applying block rules

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

//data type
//array of subarrays for each block

//algorithm
//declare letter blocks lookup array
//convert input string to all caps
//initialize empty results array
//iterate through the chars of the string
//  if results array contains char
//    return false
//  else
//    loop through letter blocks lookup
//      if subarray contains letter, add subarray letters to results
//retiurn true



// function isBlockWord(word) {
//   const letterBlocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'],
//                         ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], 
//                         ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'],
//                         ['Z', 'M']];
//   let results = [];

//   chars = word.toUpperCase().split('');
  
//   for (let j = 0; j < chars.length; j += 1) {
//     if (results.includes(chars[j])) {
//       return false;
//     } else {
//       for (let i = 0; i < letterBlocks.length; i += 1) {
//         if (letterBlocks[i].includes(chars[j])) {
//           results = results.concat(letterBlocks.splice(i, 1)[0]);
//           break;
//         }
//       }
//     }
//   }

//   return true;
// }

//alternative solution
//declare letter blocks lookup array of pairs (e.g. 'B:O')
//map to array of regex patterns
  //replace semicolon with OR symbol '|'
//filter regex patterns to results array if word match with regex pattern < 2
//return true of every pattern filtered to array, false if not

function isBlockWord(word) {
  const letterBlocks = ['B:O', 'X:K', 'D:Q', 'C:P', 'N:A', 'G:T', 'R:E', 'F:S',
                        'J:W', 'H:U', 'V:I', 'L:Y', 'Z:M'];
  
  let blockRegexps = letterBlocks.map(letterBlock => {
    return new RegExp(letterBlock.replace(':', '|'), 'gi');
  });

  return blockRegexps.every(blockRegexp => (word.match(blockRegexp) || []).length < 2);
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true