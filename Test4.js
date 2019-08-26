// Question 4: How this works in JavaScript
// What is the result of the following code? Explain your answer.

var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test);

//Answer is wrong on web site
//https://www.sitepoint.com/5-typical-javascript-interview-exercises/

//Question 5: call() and apply()
//Fix the previous question’s issue so that the last console.log() prints Aurelio De Rosa.

//Answer
//The issue can be fixed by forcing the context of the function using either the call() or the apply() function.
//If you don’t know them and their difference, I suggest you to read the article What’s the difference between function.call and function.apply?.
//In the code below I’ll use call() but in this case apply() would produce the same result:

console.log(test.call(obj.prop)); //comma delimited prams
console.log(test.apply(obj.prop)); //can pass in an array of params
console.log(test.bind(obj.prop)); // returns the function
console.log(test.bind(obj.prop)()); //returns and executes the function

// //bind function to var then execute that var
var testObj = test.bind(obj.prop);
console.log(testObj());
