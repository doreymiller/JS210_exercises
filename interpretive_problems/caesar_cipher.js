//input - a string and a key number value
//output - the string with each letter value shifted to the right by the key value

//rules
//encrypts only letters - other chars left as is
//letters stay in same case as in original string
//if key value exceeds length of alphabet, it wraps around from beginning

//mental model
//iterate through the lower case and upper case alphabet.  replace each letter found in the string with the 
//letter offset by the key value. return the string

//alphabet
//initialize an alphabet array with lower case letters
//if key is greater than alphabet size, then set key to key mod alphabet size
//iterate through input string
//  if char is letter, replace letter with cypher letter
//return string

function caesarEncrypt(str, keyVal) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let resultStr = '';

  if (keyVal > alphabet.length) keyVal = keyVal % alphabet.length;

  let cypherLetter = function(letter) {
    let letterIdx = alphabet.indexOf(letter.toLowerCase());
    let newIdx = (letterIdx + keyVal) % alphabet.length;
    let cypherLetter = alphabet[newIdx];
    return /[A-Z]/.test(letter) ? cypherLetter.toUpperCase() : cypherLetter;
  };

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    if (/[a-z]/i.test(char)) char = cypherLetter(char);
    resultStr += char;
  }

  return resultStr;
}

// simple shift
// console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"