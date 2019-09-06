// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

// Input:"hello*3"
// Output:Ifmmp*3

function LetterChanges(str) {
  // create an array or object literal of the alphabet to parse
  const arrayAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];

  // split str into an array
  const arrayStr = str.split("");

  // for each str in the array, find it in the alphabet,
  let found = [];
  for (let s = 0; s <= arrayStr.length - 1; s++) {
    for (let i = 0; arrayAlphabet.length - 1; i++) {
      if (arrayAlphabet[i] === arrayStr[s]) {
        found.push(arrayAlphabet[i + 1]);
        break;
      }
    }
  }

  console.log(found);

  // check each letter in found, if Vowel, capitalise it
  const arrayVowels = ["a", "e", "i", "o", "u"];

  found.map(c => c)

  // let foundCapitalizedVowels = [];
  //   for(let v= 0; v <= arrayVowels.length -1; v++){
  //     for (let f= 0; f <= found.length - 1; f++ ){
  //     console.log(found[f] + ' <-> '+ arrayVowels[v]);
  //     if (found[f] === arrayVowels[v]){
  //       foundCapitalizedVowels.push(found[f].toUpperCase());
  //       break;
  //     }
  //     else if (found[f] !== arrayVowels[v]){
  //       foundCapitalizedVowels.push(found[f]);
  //       break;
  //     }
  //   }
  // }

  return foundCapitalizedVowels;
}

// keep this function call here
console.log(LetterChanges("hello"));
