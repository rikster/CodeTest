// Question #2: Using a closure within a loop
//
// Closures are sometimes brought up in an interview so that the interviewer can gauge how familiar you are with the language, and whether you know when to implement a closure.
// A closure is basically when an inner function has access to variables outside of its scope.
// Closures can be used for things like implementing privacy and creating function factories. A common interview question regarding the use of closures is something like this:
// Write a function that will loop through a list of integers and print the index of each element after a 3 second delay.
// A common (incorrect) implementation I’ve seen for this problem looks something like this:

const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('The index of this number is: ' + i);
    }, 3000);
}

// If you run this you’ll see that you actually get the 4 printed out every time instead of the expected 0, 1, 2, 3 after a 3 second delay.
// To correctly identify why this is happening it would be useful to have an understanding of why this happens in JavaScript, which is exactly what the interviewer is trying to test.
// The reason for this is because the setTimeout function creates a function (the closure) that has access to its outer scope,
// which is the loop that contains the index i. After 3 seconds go by, the function is executed and it prints out the value of i,
// which at the end of the loop is at 4 because it cycles through 0, 1, 2, 3, 4 and the loop finally stops at 4.
// There are actually a few ways of correctly writing the function for this problem. Here are two of them:


for (var i = 0; i < arr.length; i++) {
    // pass in the variable i so that each function
    // has access to the correct index
    setTimeout(function (i_local) {
        return function () {
            console.log('The index of this number is: ' + i_local);
        }
    }(i), 3000);
}

for (let i = 0; i < arr.length; i++) {
    // using the ES6 let syntax, it creates a new binding
    // every single time the function is called
    // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
    setTimeout(function() {
        console.log('The index of this number is: ' + i);
    }, 3000);
}


