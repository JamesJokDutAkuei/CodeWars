/* Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID" */

function sumMul(n, m) {
    // Initialize an empty array to track the multiples of 'n'
    let trackMul = [];
    
    // Validation: If 'm' or 'n' is zero or negative, return "INVALID"
    if ((m === 0 || m < 0) || (n === 0 || n < 0)) {
        return "INVALID"; // Input must be positive and non-zero
    }

    // Loop through numbers starting from 1 to find multiples of 'n'
    for (let i = 1; i < m; i++) {
        // Check if the multiple of 'n' is less than 'm'
        if (i * n < m) {
            // Add the valid multiple to the tracking array
            trackMul.push(i * n);
        }
    }

    // Calculate the sum of all valid multiples using reduce
    const result = trackMul.reduce((acc, cur) => acc + cur, 0);

    // Return the total sum of multiples
    return result;
}

// Example usage: Testing the function with 'n = 10' and 'm = -30'
console.log(sumMul(10, -30)); // Expected output: "INVALID"

