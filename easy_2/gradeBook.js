var GRADE_A = 90;
var GRADE_B = 80;
var GRADE_C = 70;
var GRADE_D = 60;

function getGrade(grade1, grade2, grade3) {
  var average = averageScore([grade1, grade2, grade3]);
  var letterGrade = '';

  if (average >= GRADE_A) {
    letterGrade = 'A';
  } else if (average >= GRADE_B) {
    letterGrade = 'B';
  } else if (average >= GRADE_C) {
    letterGrade = 'C';
  } else if (average >= GRADE_D) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  return letterGrade;
}

function averageScore(scores) {
  var reducer = (accumulator, currentValue) => accumulator + currentValue;
  var sum = scores.reduce(reducer);
  return sum / scores.length;
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"