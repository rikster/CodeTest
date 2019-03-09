/*
Map - like filter a Higher Order function takes other functions as Params/args
*/

var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursala', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
];

//return a transformed array, a subset of the array object
//let names = animals.map((animal)  => animal.name + ' is a ' + animal.species);
let names = animals.map((x)  => x.name + ' is a ' + x.species);

// let names = [];
// for (var i = 0, len = animals.length; i < len; i++) {
//     var animal = animals[i];
//     names.push(animal.name);
// }

console.log(names);
