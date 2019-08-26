function FirstFactorial(num) {
  // edge cases
  if (num === 1 || num === 0){
    return num
  }

  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    // multiply each number between 1 and num
    // factorial = 1 * 1 = 1
    // factorial = 1 * 2 = 2
    // factorial = 2 * 3 = 6
    // factorial = 6 * 4 = 24
    factorial = factorial * i;
  }

  return factorial;
}

// recursion function
function addSubordinates (num){

}

// keep this function call here
console.log(FirstFactorial(4));