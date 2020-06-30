function alphabeticNumberSort(numArray) {
  const numNames = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four',
                    5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
                    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen',
                    14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
                    18: 'eighteen', 19: 'nineteen'};

  let wordSort = function (num1, num2) {
    if (numNames[num1] > numNames[num2]) {
      return 1;
    } else if (numNames[num2] > numNames[num1]) {
      return -1;
    } else {
      return 0;
    }
  };

  return numArray.sort(wordSort);
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]