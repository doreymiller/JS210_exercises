function letterCaseCount(str) {
  let lowercaseLetters = str.match(/[a-z]/g);
  let uppercaseLetters = str.match(/[A-Z]/g);
  let neitherLetters =  str.match(/[^a-z]/gi);

  return {
    lowercase: lowercaseLetters ? lowercaseLetters.length : 0,
    uppercase: uppercaseLetters ? uppercaseLetters.length : 0,
    neither: neitherLetters ? neitherLetters.length : 0,
  };
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }