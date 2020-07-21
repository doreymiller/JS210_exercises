//input - a string to be encrypted and a string keyword used with ecnryption
//output - the encrypted string

//rules
//encrypts only letters - other chars left as is
//use the keyword to encrypt the string
//  the index of the current keyword letter becomes the key value for the current letter to ecrypt
//  the index of the keyword does not increment when encrypting non alphabet characters
//  non alphabet characters are kept the same during encryption
//letters stay in same case as in original string
//if key value exceeds length of alphabet, it wraps around from beginning

//mental model
//convert the keyword into an array of alphabet index values for each letter.  convert the input string into an array of chars.
//map the input string to a new array of chars, using the caesar cypher for each char.  The caesar cypher
//will take the arguments of the letter and the offset value, and the value of the current index of the
//keyword array which incremenets each iteration and loops back to the beginning.

//alphabet
//initialize an alphabet array with lower case letters
//split string into array of chars
//split keyword into array of letters and map to array of index values within alphabet array
//declare variable for counting letters
//map input chars to result array
//  if char is a letter,
//    set letterCount to += 1 || 0
//    return caesar cypher of char using keyword[letterCount % keyword length] as key value
//  else
//   return char
//join and return chars

//Example
// plaintext: Pineapples don't go on pizzas!
// keyword: meat
//result: Bmnxmtpeqw dhz'x gh ar pbldal!

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

function vigenereEncrypt(str, keyword) {
  let letterCount;
  let cypherKey = keyword.split('').map(char => ALPHABET.indexOf(char.toLowerCase()));

  return str.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      letterCount = letterCount + 1 || 0;
      return caesarEncryptLetter(char, cypherKey[letterCount % cypherKey.length]);
    } else {
      return char;
    }
  }).join('');
}

function caesarEncryptLetter(letter, keyVal) {
  let letterIdx = ALPHABET.indexOf(letter.toLowerCase());
  let newIdx = (letterIdx + keyVal) % ALPHABET.length;
  let cypherLetter = ALPHABET[newIdx];
  
  return /[A-Z]/.test(letter) ? cypherLetter.toUpperCase() : cypherLetter;
}

let plainText = "Pineapples don't go on pizzas!";
let keyword = "meat";

console.log(vigenereEncrypt(plainText, keyword));


