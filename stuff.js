// WAY OF EXPORT MODULES

let num1 = 5;
let num2 = 5;

let total = (a, b) => {
  return `The total is ${a + b}`;
};

module.exports.num2 = num2;
module.exports.num1 = num1;
module.exports.total = total;

//EASY WAY

module.exports.num1 = 5;
module.exports.num2 = 5;

module.exports.total = (a, b) => {
  return `The total is ${a + b}`;
};

//ANOTHER WAY

let num1 = 2;
let num2 = 5;

let total = (a, b) => {
  return `The total is ${a + b}`;
};

module.exports = {
  num1,
  num2,
  total,
};
