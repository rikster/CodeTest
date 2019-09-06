function StringReverse2(str) {
  return str.split("").reverse().join("");
}

console.log(StringReverse2("hello"));

module.exports = StringReverse2;
