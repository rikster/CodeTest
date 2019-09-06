// Explicit Binding

// call
var sayName = function (lang1, lang2, lang3){
  console.log('my name is ' + this.name +
    ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3);
};

var stacey = {
  name: 'Stacey',
  age: 34
};

var languages = ['Javascript', 'Ruby', 'Python'];

// the 1st argument is the 'context'
sayName.call(stacey, languages[0], languages[1], languages[2]);

// apply - you can pass in the array
sayName.apply(stacey, languages);

// bind - return a new function instead of invoking the function
var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
console.log('HERE');
newFn();

