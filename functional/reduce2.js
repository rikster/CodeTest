//fff functional programming 3
//map, filter, reject, find
//reduce can do all of the above, the multi-tool
//https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84

var fs = require('fs');
//import fs2 from 'fs';

var output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    //.split('\r\n') //carriage return & new line
    .split(/\r?\n|\r/) //regex split on cr and nl
    .map((line) => line.split(','))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            product: line[1],
            price: line[2],
            amount: line[3]
        });
        return customers
    }, {}); 

console.log(JSON.stringify(output, null, 2));

