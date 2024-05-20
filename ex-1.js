let words = ["hello", "world"];

function getWordLengths(words) {
   return words.length 
}

let result = words.map(getWordLengths)
// const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
