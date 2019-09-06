/**
 * @return {number}
 */
function SimpleAdd1(num) {

  let sum = 0;
  for (let i=1; i <= num; i++){
    sum += i
  }

  return sum;

}

// keep this function call here
// console.log(SimpleAdding(10));

module.exports = SimpleAdd1;