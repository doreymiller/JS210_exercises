function triangle(number) {
  var lineText = '';
  for (var i = 1; i <= number; i++) {
    lineText = '*'.repeat(i);
    console.log(lineText.padStart(number));
  }
}

triangle(5);