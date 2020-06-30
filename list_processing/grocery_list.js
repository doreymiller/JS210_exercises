function buyFruit(groceries) {
  return groceries.flatMap(item => {
    return repeatFruit(item);
  });
}

function repeatFruit(item) {
  let arr = [];
  arr.length = item[1];
  return arr.fill(item[0]);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]