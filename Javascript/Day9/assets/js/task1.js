// --- 1. HOISTING TEST ---
// 'var' can be used before its declaration line. It won't crash, it just says 'undefined'.
console.log("var before declaration:", initialVar); 
var initialVar = "Hello Var";

// 'let' and 'const' cannot be accessed before their lines. If you uncomment the line below, it crashes.
// console.log(initialLet); 
let initialLet = "Hello Let";


// --- 2. SCOPE TEST ---
if (true) {
    var insideBlockVar = "I can leak outside the block!";
    let insideBlockLet = "I am trapped inside this block!";
    const insideBlockConst = "I am also trapped inside this block!";
}
// This works because 'var' ignores block curly braces {}
console.log("var outside its block:", insideBlockVar); 

// These would cause a crash because 'let' and 'const' only live inside their blocks!
// console.log(insideBlockLet);
// console.log(insideBlockConst);


// --- 3. REASSIGNMENT TEST ---
var score = 10;
score = 20; // Allowed! 'var' can change its value.

let lives = 3;
lives = 2; // Allowed! 'let' can change its value.

const pi = 3.14;
// pi = 3.15; // NOT ALLOWED! 'const' is locked and will cause an error if changed.
console.log("Final values:", score, lives, pi);
