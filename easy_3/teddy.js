function randomBetween(min, max) {
  min + Math.round(Math.random() * (max - min));
}

var age = randomBetween(20, 200);
console.log('Teddy is ' + age + ' years old!');