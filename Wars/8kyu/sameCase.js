function sameCase(char1, char2) {
    // Check if either character is not a letter
    if (!(/[a-zA-Z]/.test(char1) && /[a-zA-Z]/.test(char2))) {
        return -1;
    }
    
    // Check if both characters are the same case
    if ((char1 === char1.toLowerCase() && char2 === char2.toLowerCase()) ||
        (char1 === char1.toUpperCase() && char2 === char2.toUpperCase())) {
        return 1;
    }
    
    // If both are letters but not the same case
    return 0;
}

// Example usage
console.log(sameCase('a', 'g'));  // Output: 1
console.log(sameCase('A', 'C'));  // Output: 1
console.log(sameCase('b', 'G'));  // Output: 0
console.log(sameCase('B', 'g'));  // Output: 0
console.log(sameCase('0', '?'));  // Output: -1

