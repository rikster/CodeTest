function capitaliseText(string) {
  let words0 = string.toLowerCase();
  let words1 = words0.split(" ");
  let wordsCapitalised = "";
  for (var i = 0; i < words1.length; i++) {
    wordsCapitalised +=
      words1[i].charAt(0).toUpperCase() + words1[i].slice(1) + " ";
  }
  return wordsCapitalised;
}

console.log(capitaliseText("CHATSWOOD TOYOTA"));

function sentenceText(string) {
  const wordsLower = string.toLowerCase();
  const wordsArray = wordsLower.split(" ");
  let firstWord, sentence = "";
  if (wordsArray.length > 0) {
    firstWord = wordsArray[0].charAt(0).toUpperCase() + wordsArray[0].slice(1);
    for (let i = 1; i < wordsArray.length; i++) {
      sentence +=
        `${wordsArray[i].charAt(0).toLowerCase() + wordsArray[i].slice(1)} `;
    }
  }
  return `${firstWord  } ${  sentence}`;
}


console.log(sentenceText("CHATSWOOD TOYOTA foRever"));
