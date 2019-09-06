// Explicit Binding

// call
var sayName = function (){
  console.log('my name is ' + this.name);
};

var stacey = {
  name: 'Stacey',
  age: 34
};

// the 1st argument is the 'context'
sayName.call(stacey);