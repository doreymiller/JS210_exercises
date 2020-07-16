//input - a string of at least one character
//output - an object that contains properties for "lowercase", "uppercase" and "neither"
//         with values that are the percentage of that type of letter occurring in the string

//data type
//object {lowercase: , uppercase: , neither: };

//algorithm
//initialize object with undefined values
//set object lowercase value to 
//number of matches of lowercase letters in the string / total string chars
//multipled by 100 and converted to 2 decimal (toFixed(2))
//set object uppercase value to percentage of occurrences in string
//set neither to 100 - lowercase - uppercase
//return object



function letterPercentages(str) {
  return {
      lowercase: String(percentageCharMatch(/[a-z]/g, str)),
      uppercase: String(percentageCharMatch(/[A-Z]/g, str)),
      neither: String(percentageCharMatch(/[^a-z]/gi, str))
  };
}

function percentageCharMatch(regex, str) {
  let matches = str.match(regex);
  if (matches === null) return (0).toFixed(2);
  return ((matches.length / str.length) * 100).toFixed(2);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }