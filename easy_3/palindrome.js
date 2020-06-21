function isPalindrome(str) {
  var left = str.slice(0, str.length / 2);
  var right = str.slice(str.length / 2 + str.length % 2);

  for (var i = 0, length = left.length; i < length; i += 1) {
    if (left[i] !== right[length - 1 - i]) {
      return false
    }
  }

  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
