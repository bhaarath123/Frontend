const fruits = ["Apple", "Mango", "Orange"];
const vegetables = ["Carrot", "Potato"];

fruits.push("Banana");

fruits.pop();

fruits.unshift("Grapes");

fruits.shift();

const currentLength = fruits.length;

const combinedResult = fruits.concat(vegetables);

console.log("Length of fruits array: " + currentLength);
console.log(combinedResult);
