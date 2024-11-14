/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

    Note: input will never be an empty string */

// Way 1

function fakeBinary(x) {
    return x.split('').map(str => {
        if (str >= '5') {
            return '1';
        } else {
            return '0';
        }
    }).join('');
}

let numStr = '45385593107843568'
console.log(fakeBinary(numStr)) // Output 01011110001100111

// Way 2

/*function fakeBinary(numDigits) {
    return numStr.split('').map(digit => digit < '5' ? '0' : '1').join('');
}

let numDigits = '45385593107843568'
console.log(fakeBinary(numDigits))*/

