//fun fun function - video 1
//https://youtu.be/BMUiFMZr7vk?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84

//why?
//Less bugs, easier to reason about
//Less time; re-use more code

//higher order functions
//functions are values

// an anon func w/ a value
let triple = function () {
    return x * 3;
};

let waffle = triple;

//composition - take one func and put it into another
//put allot of samller uncs in to bigger ones
let x = 30;
console.log(waffle());


//example: filter
var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', 'species': 'dog'},
    {'name': 'Harold', 'species': 'fish'},
    {'name': 'Ursala', 'species': 'cat'},
    {'name': 'Jimmy', 'species': 'fish'}
];

// var dogs = [];
// for (var i = 0; i < animals.length; i++) {
//     if (animals[i].species === 'dog') {
//         dogs.push(animals[i]);
//     }
// }

//we use less code - functions become "composed" together
//we can reuse the functions
//filter handles the for loop
const dogs = animals.filter(
    //callback - executed on each item
    function (animal) {
        return animal.species === 'dog'
    }
);

console.log(dogs);







