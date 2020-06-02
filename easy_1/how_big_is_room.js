var SQMETER_SQFT_CONVERSION = 10.7639;
var sqMeters;
var sqFt;

var unitType = prompt("Please enter either 'meters' or 'feet': ");
var roomLength = parseInt(prompt("Enter the length of the room in " + unitType + ":", 10));
var roomWidth = parseInt(prompt("Enter the width of the room in " + unitType + ":", 10));

if (unitType === "meters") {
  sqMeters = roomLength * roomWidth;
  sqFt = sqMeters * SQMETER_SQFT_CONVERSION;
} else {
  sqFt = roomLength * roomWidth;
  sqMeters = sqFt / SQMETER_SQFT_CONVERSION;
}

console.log("The area of the room is " + sqMeters.toFixed(2) + " square meters (" + sqFt.toFixed(2) + " square feet).");