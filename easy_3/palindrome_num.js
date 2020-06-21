
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isPalindromicNumber(num) {
  var stringNum = num.toString();
  return isPalindrome(stringNum);
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true