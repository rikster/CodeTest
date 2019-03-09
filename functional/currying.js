//import _ from 'lodash'
//const _ = require('lodash'); //supports currying w/o ES6

// let dragon = (name, size, element) =>
//     name + ' is a ' +
//     size + ' dragon that breaths ' +
//     element + '!'
//
// console.log(dragon('spike', 'medium', 'ice'))

let dragon =
    name =>
        size =>
            element =>
                name + ' is a ' +
                size + ' dragon that breaths ' +
                element + '!';

console.log(dragon('Brutus')('huge')('fire'));