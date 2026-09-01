// --- OLD ES5 WAY ---
// var legacyName = "Ravi";
// var legacyAge = 25;
// var legacyStudent = { name: legacyName, age: legacyAge };
// var legacyGreet = function(name) { return "Hello " + name; };


// --- MODERN ES6+ REWRITE ---
const name = "Ravi";
const age = 25;

// Object Shorthand: Because the key name and variable name match, we only write it once!
const student = { name, age };

// Arrow Function and Template Literal rewrite
const greet = (studentName) => `Hello ${studentName}`;

// Testing the outputs
console.log(greet(name));
console.log("Shorthand Object:", student);
