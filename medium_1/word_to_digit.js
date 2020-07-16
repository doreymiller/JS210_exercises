//input - string of one or more words
//output - same string with the number words (0-9) replaced with corresponding digits

//data type
//array of number words

//algorithm
//initalize numberWords array with string numbers
//iterate through numberWords array
//  global replace of current numberWord with index
//return string

function wordToDigit(str) {
  const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                      'eight', 'nine'];
  
  // numberWords.forEach((numberWord, index) => {
  //   let regex = RegExp(`\\b${numberWord}\\b`, 'gi');
  //   str = str.replace(regex, index);
  // });

  // return str;
  let regex = RegExp(`\\b(${numberWords.join('|')})\\b`, 'gi');
  return str.replace(regex, match => String(numberWords.indexOf(match)));
}

//Examples
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."