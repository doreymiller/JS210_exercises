function transactionsFor(idNum, list) {
  return list.filter(item => item.id === idNum);
}

function isItemAvailable(idNum, list) {
  let sumQuantity = function (total, item) {
    if (item.movement === "in") {
      return total + item.quantity;
    } else {
      return total - item.quantity;
    }
  };

  return transactionsFor(idNum, list).reduce(sumQuantity, 0) > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));

// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true