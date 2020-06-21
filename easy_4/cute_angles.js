var MINUTES_PER_DEGREE = 60;
var SECONDS_PER_MINUTE = 60;
var SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;
var DEGREE_ASCII = 176;

function dms(angle) {
  var degree = Math.floor(angle);
  var remainder = angle - degree;
  var minutes = Math.floor(remainder * MINUTES_PER_DEGREE);
  var seconds = Math.floor((remainder - (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE);

  return String(degree) + String.fromCharCode(DEGREE_ASCII) + 
         String(minutes).padStart(2, '0') + "'" + 
         String(seconds).padStart(2, '0') + "\"\"";
}

console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"