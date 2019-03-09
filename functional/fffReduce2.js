//fff functional programming 3
//map, filter, reject, find
//reduce can do all of the above, the multi-tool

var fs = require('fs');
//import fs2 from 'fs';

var output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customer, line) => {
        return customer
    }, {});

console.log(output);

