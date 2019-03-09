// Question 2: Create “native” methods
//
// Define a repeatify function on the String object.
// The function accepts an integer that specifies how many times the string has to be repeated.
// The function returns the string repeated the number of times specified. For example:
//
//     console.log('hello'.repeatify(3));
//
//     Should print hellohellohello.

String.prototype.repeatify = String.prototype.repeatify || function (times){
    var str = '';

    for(var i=0; i < times; i++ ){
        str = str + this;
    }

    return str;
};

var str = 'hello';
console.log('hello'.repeatify(3));

// The question tests the knowledge of the developer about inheritance in JavaScript and the prototype property.
// It also verifies that the developer is able to extend native data type functionalities (although this should not be done).
//
// Another important point here is to demonstrate that you are aware about how to not override possible already defined functions.
// This is done by testing that the function didn’t exist before defining your own:
//
//     String.prototype.repeatify = String.prototype.repeatify || function(times) {/* code here */};
//
// This technique is particularly useful when you are asked to shim a JavaScript function.

