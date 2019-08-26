//https://www.sitepoint.com/5-typical-javascript-interview-exercises/

//Question 1: Scope
//
//What will be printed on the console?

// (function () {
//     // 'use strict';
//     var a = b = 5;
// })();
//
// console.log(a);
// console.log(b);

// The trick of this question is that in the IIFE there are two assignments but the variable a is declared using the keyword var.
// What this means is that a is a local variable of the function. On the contrary, b is assigned to the global scope.
// The other trick of this question is that it doesn’t use strict mode ('use strict';) inside the function.
// If strict mode was enabled, the code would raise the error Uncaught ReferenceError: b is not defined.
// Remember that strict mode requires you to explicitly reference to the global scope if this was the intended behavior.
// So, you should write:

(function() {
    'use strict';
    var a = global.b = 5;
})();

console.log(b);
