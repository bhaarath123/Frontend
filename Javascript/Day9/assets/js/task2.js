// --- THE ADD FUNCTION ---

// 1. Explicit Return: Uses curly braces {} and requires the word 'return'
const addExplicit = (a, b) => {
    return a + b;
};

// 2. Implicit Return: Shorter version. No curly braces, 'return' is automatic
const addImplicit = (a, b) => a + b;


// --- THE SQUARE FUNCTION ---

// 1. Explicit Return
const squareExplicit = (n) => {
    return n * n;
};

// 2. Implicit Return
const squareImplicit = (n) => n * n;


// Testing our functions to make sure they work
console.log("Add (Explicit):", addExplicit(5, 10));
console.log("Add (Implicit):", addImplicit(20, 30));
console.log("Square (Explicit):", squareExplicit(4));
console.log("Square (Implicit):", squareImplicit(5));
