var tipPct;
var bill;
var tip;
var total;

bill = parseFloat(prompt("What is the bill?"), 10);
tipPct = parseFloat(prompt("What is the tip percentage?"), 10);

tip = (bill * (tipPct/100));
total = bill + tip;

console.log("The tip is $" + tip.toFixed(2));
console.log("The total is $" + total.toFixed(2));