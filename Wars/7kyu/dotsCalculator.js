//Dot Calculator


// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""



function dotCalculator(equation) {
    // Split the input into parts: left dots, operator, and right dots
    const [leftDots, operator, rightDots] = equation.split(" ");

    // Calculate the length of the dots (number representation)
    const leftCount = leftDots.length;
    const rightCount = rightDots.length;

    // Perform the operation based on the operator
    let result;
    switch (operator) {
        case "+":
            result = leftCount + rightCount;
            break;
        case "-":
            result = leftCount - rightCount;
            break;
        case "*":
            result = leftCount * rightCount;
            break;
        case "//":
            result = Math.floor(leftCount / rightCount);
            break;
        default:
            throw new Error("Invalid operator");
    }

    // Return the result as a string of dots or an empty string for 0
    return ".".repeat(result);
}
// Examples
console.log(dotCalculator("..... + ...............")); // "...................."
console.log(dotCalculator("..... - ..."));             // ".."
console.log(dotCalculator("..... - ."));               // "...."
console.log(dotCalculator("..... * ..."));             // "..............."
console.log(dotCalculator("..... * .."));              // ".........."
console.log(dotCalculator("..... // .."));             // ".."
console.log(dotCalculator("..... // ."));              // "....."
console.log(dotCalculator(". // .."));                 // ""
console.log(dotCalculator(".. - .."));                 // ""
