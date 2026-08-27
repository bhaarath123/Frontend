// --- 1. Function Declaration Hoisting ---
// Standard functions are fully hoisted. You can call them before they are written.
sayHello(); 

function sayHello() {
    console.log("Hello from a hoisted function!");
}

// --- 2. var Hoisting ---
// Variables declared with var are hoisted but initialized as 'undefined'
console.log("var value before declaration: " + myVar); 
var myVar = "Data";

// --- 3. let and const Hoisting (Temporal Dead Zone) ---
// Trying to access let or const variables before their line throws a ReferenceError.
// They exist in memory but cannot be accessed until initialized.

try {
    console.log(myLet); 
} catch (error) {
    console.log("let Error: Cannot access before initialization");
}

try {
    console.log(myConst);
} catch (error) {
    console.log("const Error: Cannot access before initialization");
}

let myLet = "Let Value";
const myConst = "Const Value";
