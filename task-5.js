// Task 5

let word = "fridge";

console.log(`Does the word ${word} contain the letter "q"? ${word.includes("q")}`);

console.log(`Does the word ${word} contain the string "id"? ${word.includes("id")}`);

const startsWithVowel = /^[aeiou]/i.test(word);
console.log(`Does the word ${word} start with a vowel? ${startsWithVowel}`);




// includes metod gibt true oder false
