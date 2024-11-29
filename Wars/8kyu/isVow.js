/*Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array. */

//Way 1

function replaceVowelCodes(arr) {
    // List of vowel character codes
    const vowels = [97, 101, 105, 111, 117];

    return arr.map(num => {
        // Check if the number is one of the vowel character codes
        if (vowels.includes(num)) {
            // Return the corresponding vowel
            return String.fromCharCode(num);
        }
        // Return the number unchanged if it's not a vowel character code
        return num;
    });
}
const array = [97, 100, 105, 110, 111, 120];
const result = replaceVowelCodes(array);
console.log(result);
// Output: ['a', 100, 'i', 110, 'o', 120]


//Way 2


function replaceVowelCodes(arr) {
    // Define a mapping of character codes for lowercase vowels to their respective vowel characters
    const vowelCodes = {
        97: 'a',
        101: 'e',
        105: 'i',
        111: 'o',
        117: 'u'
    };

    // Iterate through the array and replace numbers with the corresponding vowels
    return arr.map(num => {
        // If the number is one of the vowel codes, return the corresponding vowel, otherwise keep the number
        return vowelCodes[num] || num;
    });
}

const array = [97, 100, 105, 110, 111, 120];
const result = replaceVowelCodes(array);
console.log(result);
// Output: ['a', 100, 'i', 110, 'o', 120]

