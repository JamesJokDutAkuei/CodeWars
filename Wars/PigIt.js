// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 

// Way 1:

let strg = 'i am an guy sir, and my name is james jok';

/*let words = str.split(' ');
let transformedWords = words.map(word => word.slice (1) + word[0] + 'ay');
let result = transformedWords.join(' ');

console.log(result);*/

// Way 2:

function trans(str){
    return str.split(' ').map(word => word.slice(1) + word[0] + 'ay').join(' ');
}
console.log(trans(strg));

// Output "iay maay naay uygay ir,say ndaay ymay amenay siay amesjay okjay"

