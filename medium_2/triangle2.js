
//input - three numbers that represent the angles of a triangle
//output - a string that says what kind of triangle the three numbers create (right, accute, obtuse)

//algorithm
//put arguments in an array of angles
//sort array in ascending order
//if array includes 0 OR sum of angles does not equal 180 then return "invalid"
//if last element of array < 90 then return "acute"
//else if last element of array === 90 then return "right"
//else return "obtuse"


function triangle(...args) {
  let angles = [...args].sort((a, b) => a - b);

  if (angles.indexOf(0) !== -1 || !validTriangle(angles)) return "invalid";

  let largestAngle = angles[angles.length - 1];
  
  if (largestAngle < 90) {
    return "acute";
  } else if (largestAngle === 90) {
    return "right";
  } else {
    return "obtuse";
  }
}

function validTriangle(angles) {
  return angles.reduce((sum, num) => sum + num) === 180;
}

// Examples:

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"