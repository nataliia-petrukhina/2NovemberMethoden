

let word = "JavaScript";
// metod startsWith()
console.log(`Does the word ${word} start with the letter "c"?`, word.toLowerCase().startsWith("c"));
console.log(`Does the word ${word} start with the letter "j"?`, word.toLowerCase().startsWith("j"));

// metod  endsWith()
console.log(`Does the word ${word} end with the letter "y"?`, word.toLowerCase().endsWith("y"));
console.log(`Does the word ${word} end with the letter "t"?`, word.toLowerCase().endsWith("t"));

// Sie können die Methode slice(0, 4) verwenden, um die ersten 4 Zeichen zu extrahieren, und diese dann vergleichen:
console.log(`Are the first 4 letters in the word ${word} equal to "abcd"?`, word.toLowerCase().slice(0, 4) === "abcd");
console.log(`Are the first 4 letters in the word ${word} equal to "java"?`, word.toLowerCase().slice(0, 4) === "java");


//In diesem Fall gibt slice(-5) die letzten 5 Zeichen der Zeichenkette zurück, beginnend mit dem fünften Zeichen vom Ende und bis zum Ende der Zeichenkette.
console.log(`Are the last 5 letters in the word ${word} equal to "cript"?`, word.toLowerCase().slice(-5) === "cript");


//In JavaScript verwenden wir die Punktnotation, um eine Methode für ein Objekt oder einen String aufzurufen. Zum Beispiel bedeutet word.toLowerCase(), dass wir die Methode toLowerCase() auf den Wert der Variablen word anwenden.

//В JavaScript, чтобы вызвать метод у объекта или строки, мы используем точечную нотацию. Например, word.toLowerCase() означает, что мы применяем метод toLowerCase() к значению переменной word.