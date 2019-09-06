function StringReverse1(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray; // "olleh"
}

// console.log(StringReverse1("hello"));

module.exports = StringReverse1;
