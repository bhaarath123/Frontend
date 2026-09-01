const numbers = [100, 25, 30, 45, 50, 65]

// 1. .filter() - Loops through and extracts ALL items that match the condition
const greaterThan30 = numbers.filter((num) => num > 30);
console.log("All numbers > 30:", greaterThan30);

// 2. .find() - Loops through and grabs only the FIRST item that matches, then stops
const firstOver40 = numbers.find((num) => num > 40);
console.log("First lone number > 40:", firstOver40);

// 3. .includes() - Returns true if the item lives in the array, false if it doesn't
const hasFifty = numbers.includes(50);
console.log("Does 50 exist in array?:", hasFifty);

// 4. .map() - Loops through, transforms each value, and makes a completely new array
const doubledNumbers = numbers.map((num) => num * 2);
console.log("New Doubled Array:", doubledNumbers);
