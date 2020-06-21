
var currentAge = parseInt(prompt("What is your age?"), 10);
var retirementAge = parseInt(prompt("At what age would you like to retire?"));

var today = new Date();

var currentYear = today.getFullYear();
var workLeft = retirementAge - currentAge;
var retirementYear = currentYear + workLeft;

console.log("It's " + currentYear + ".  You will retire in " +
            retirementYear + ".  You only have " + workLeft + 
            " years of work to go!");
