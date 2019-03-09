const someOrder = {
    items: [
        {name: 'Dragon Food', price: 8},
        {name: 'Dragon cage (small', price: 800}
    ]
};

//es5
const orderTotalOld = function orderTotal(order) {
    return order.items.reduce(function (total, cur) {
        return total + cur.price;
    }, 0);
};

//es6
const orderTotal = order => order.items.reduce((total, cur) => total + cur.price, 0);


result = orderTotal(someOrder);
console.log(result);
