//fff functional programming 3
//map, filter, reject, find
//reduce can do all of the above, the multi-tool
// https://www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3l

var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

var totalAmount = orders.reduce(function(sum, order) {
  return sum + order.amount;
}, 0);

var totalAmount2 = 0;
for (var i = 0; i < orders.length; i++) {
  totalAmount2 += orders[i].amount;
}

console.log(totalAmount);
