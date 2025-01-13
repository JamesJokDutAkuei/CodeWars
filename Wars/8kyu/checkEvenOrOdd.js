/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

function evenOrOdd(number) {
  if (number % 2 === 0) {
    // CHECK IF THE NUMBER IS DIVISIBLE TWO, IF SO ITS AN EVEN NUMBER
    return "Even"
  }
  // IF NOT RETURN ODD
    return "Odd"
}
