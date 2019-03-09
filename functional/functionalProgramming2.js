/*
Map - like filter a Higher Order function
*/

var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', 'species': 'dog'},
    {'name': 'Hamilton', 'species': 'dog'},
    {'name': 'Harold', species: 'fish'},
    {'name': 'Ursala', 'species': 'cat'},
    {'name': 'Jimmy', 'species': 'fish'}
];

let names = [];
//try a for loop 1s

/**
 * @desc: try a for loop
 * @param i
 * @param: animals 
 * @param: animal
 */
for (var i = 0, len = animals.length; i < len; i++) {
    var animal = animals[i];
    names.push(animal.name);
}

console.log(names);


