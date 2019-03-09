//more on closure - https://medium.com/written-in-code/practical-uses-for-closures-c65640ae7304
//Function factories
function dwightJob(title) {
    return function(prefix) {
        return prefix + ' ' + title;
    };
}

var sales = dwightJob('Salesman');
var manager = dwightJob('Manager');

console.log(sales('Top'));  // Top Salesman
console.log(manager('Assistant to the Regional')); // Assistant to the Regional Manager
console.log(manager('Regional')); // Regional Manager