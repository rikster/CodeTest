function FirstFactorial(num) {
  // our factorial function
  function factorial(n) {
    // terminate the recursion once we hit zero
    if (n === 0) {
      return 1;
    }

    // otherwise keep calling the function recursively
    else {
      return factorial(n - 1) * n;
    }
  }

  return factorial(num);
}

FirstFactorial(4);
