// Part 1: Increment & Decrement
let count = 10;

count++;
console.log("After first count++:", count);

count++;
console.log("After second count++:", count);

count--;
console.log("After first count--:", count);

count--;
console.log("After second count--:", count);


// Part 2: BONUS (Even or Odd check)
let number = 10;

// If a number divided by 2 has a remainder strictly equal to 0, it is true (EVEN)
let isEven = (number % 2 === 0);

console.log("Is the number even?", isEven);
