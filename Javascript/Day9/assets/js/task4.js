// --- 1. REST PARAMETER (...) ---
// It gathers separate individual numbers and bundles them into an array named 'allNumbers'
function calculateTotal(...allNumbers) {
    let sum = 0;
    // Loop through the newly created array to add the numbers up
    for (let i = 0; i < allNumbers.length; i++) {
        sum = sum + allNumbers[i];
    }
    return sum;
}
// Passing 4 individual arguments into the function
const totalResult = calculateTotal(10, 20, 30, 40);
console.log("Rest Parameter Total Sum:", totalResult);


// --- 2. SPREAD SYNTAX (...) ---
// It takes items OUT of an existing array and unpacks them
const laptopBrands = ["Dell", "HP"];
// We unpack laptopBrands inside a new array, alongside new items
const allBrands = [...laptopBrands, "Apple", "Lenovo"];

console.log("Spread Syntax Combined Array:", allBrands);
