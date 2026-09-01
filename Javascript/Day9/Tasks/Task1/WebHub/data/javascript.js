// JavaScript Complete Curriculum Data - 10 Comprehensive Topics

const javascriptLessons = [
  {
    id: "introduction",
    title: "JavaScript Introduction & How It Works",
    what: "JavaScript is a high-level, interpreted (JIT-compiled), dynamic programming language that powers the interactive behavior of web pages. Together with HTML and CSS, it is one of the core technologies of the World Wide Web.",
    why: "HTML structures the page and CSS provides styling, but JavaScript brings web pages to life with user interactivity, form validation, dynamic data fetching, animations, and complex web applications.",
    syntax: `// 1. Internal JavaScript inside HTML
<script>
  console.log("Hello, WebLearn Hub!");
</script>

// 2. External JavaScript link in HTML
<script src="app.js"></script>`,
    basicExample: "Logging to the console and displaying an alert: `console.log('Welcome to JS!'); alert('Hello World');`",
    exampleHTML: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Introduction Demo</title>
</head>
<body>
  <h2 id="heading">Hello World</h2>
  <button id="btn" class="btn btn-primary" onclick="changeGreeting()">Click Me</button>
  <p id="output" class="mt-2 text-muted">Click the button to run JavaScript.</p>

  <script>
    function changeGreeting() {
      document.getElementById('heading').innerText = "Welcome to JavaScript!";
      document.getElementById('output').innerText = "JavaScript executed successfully in your browser!";
    }
  </script>
</body>
</html>`,
    expectedOutputDescription: "A heading and button. When clicked, JavaScript changes the heading text to 'Welcome to JavaScript!' and updates the paragraph message dynamically.",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px;">
  <h4 id="js-intro-head" style="color: #1e3a8a; margin: 0 0 8px 0;">Hello World</h4>
  <button type="button" style="background-color: #6366f1; color: white; border: none; padding: 6px 14px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 13px;" onclick="document.getElementById('js-intro-head').innerText = 'Welcome to JavaScript!'; document.getElementById('js-intro-out').innerText = 'JavaScript executed successfully in your browser!';">Click Me</button>
  <p id="js-intro-out" style="color: #64748b; font-size: 13px; margin: 8px 0 0 0;">Click the button to run JavaScript.</p>
</div>`,
    explanation: [
      "JavaScript was created in 1995 by Brendan Eich in 10 days at Netscape, standardized as ECMAScript.",
      "JavaScript vs Java: JavaScript is an interpreted, dynamically typed scripting language for browsers and Node.js. Java is a compiled, statically typed, class-based language for enterprise backend and Android.",
      "How JS runs in Browser: The browser's JS Engine (e.g. V8 in Chrome, SpiderMonkey in Firefox) parses source code into an Abstract Syntax Tree (AST), generates bytecode, and executes it on a single-threaded Call Stack with Just-In-Time (JIT) optimization.",
      "Inline JS: Added directly in HTML event attributes (`onclick='...'`). Not recommended for large apps.",
      "Internal JS: Written between `<script>...</script>` tags inside HTML.",
      "External JS: Stored in `.js` files and loaded via `<script src='filename.js'></script>` (Best practice)."
    ],
    importantProperties: [
      { name: "<script>", desc: "HTML element used to embed or reference executable JavaScript code." },
      { name: "console.log()", desc: "Prints informational messages and debugging data to the browser developer console." },
      { name: "defer", desc: "Attribute on <script> that executes the external script after HTML parsing completes." },
      { name: "async", desc: "Attribute on <script> that loads the script asynchronously and executes as soon as ready." }
    ],
    realWorld: "Every major website (Google, YouTube, Amazon, GitHub) uses JavaScript to handle clicks, search auto-complete, infinite scrolling, interactive modals, and real-time updates.",
    commonMistakes: [
      "Confusing Java with JavaScript (they are completely different languages with different syntax and runtimes).",
      "Placing script tags at the top of the `<head>` without `defer`, causing errors because elements in the DOM have not loaded yet."
    ],
    bestPractices: [
      "Keep JavaScript in separate external `.js` files for maintainability and browser caching.",
      "Use `defer` when linking external scripts in `<head>`, or place `<script>` just before the closing `</body>` tag."
    ],
    practice: {
      question: "Write an external script tag linking a file called 'main.js' with the defer attribute.",
      objective: "Understand how to include external JavaScript cleanly.",
      instructions: "Create a `<script>` tag with `src` and `defer` attributes.",
      starterCode: `<!-- Link external JavaScript file here -->`,
      expectedOutput: "A valid script reference to main.js.",
      hint: "Use `<script src=\"main.js\" defer></script>`.",
      solution: `<script src="main.js" defer></script>`
    },
    interview: {
      question: "What is the difference between JavaScript and Java?",
      answer: "Java is an OOP programming language compiled to bytecode that runs on the Java Virtual Machine (JVM). It is statically typed and widely used for enterprise backends. JavaScript is a lightweight, dynamically typed scripting language that runs in browser engines and Node.js. Aside from their names and some C-style syntax similarities, they are completely independent technologies.",
      explanation: "Java requires compilation (javac); JavaScript uses Just-In-Time (JIT) compilation inside browser engines.",
      example: "Java: int num = 10; vs JavaScript: let num = 10;"
    },
    revision: "JavaScript is the programming language of the web. It runs inside browser engines (like V8) to add interactivity and dynamic behavior. Load external scripts using `<script src='app.js' defer></script>`."
  },
  {
    id: "variables-datatypes",
    title: "Variables and Data Types",
    what: "Variables are named containers used to store data values in memory. JavaScript provides three declaration keywords (`var`, `let`, `const`) and supports primitive data types (String, Number, BigInt, Boolean, Undefined, Null, Symbol) along with non-primitive Objects.",
    why: "Every application needs to store, update, and manipulate information such as usernames, counter values, product prices, and user settings.",
    syntax: `// Variable declarations
let username = "Aarav";       // Block-scoped, reassignable
const PI = 3.14159;           // Block-scoped, cannot be reassigned
var legacyScore = 100;        // Function-scoped (Avoid in modern JS)

// Checking types
console.log(typeof username); // "string"
console.log(typeof PI);       // "number"`,
    basicExample: "Declaring variables: `let age = 21; const country = 'India'; let isStudent = true;`",
    exampleHTML: `<!DOCTYPE html>
<html>
<body>
  <h4>Variable Scope & Types Demo</h4>
  <button class="btn btn-sm btn-outline-primary" onclick="runTypesDemo()">Inspect Types</button>
  <pre id="types-out" class="bg-dark text-white p-3 rounded mt-2 font-monospace small"></pre>

  <script>
    function runTypesDemo() {
      let str = "WebLearn Hub";
      let num = 42;
      let isEnrolled = true;
      let unassigned;
      let emptyVal = null;
      let person = { name: "Bhaarath", role: "Developer" };

      let output = "str: " + typeof str + "\\n" +
                   "num: " + typeof num + "\\n" +
                   "isEnrolled: " + typeof isEnrolled + "\\n" +
                   "unassigned: " + typeof unassigned + "\\n" +
                   "emptyVal: " + typeof emptyVal + " (historical JS bug)\\n" +
                   "person: " + typeof person;
      document.getElementById('types-out').innerText = output;
    }
  </script>
</body>
</html>`,
    expectedOutputDescription: "Displays the data types of various variables: string, number, boolean, undefined, object (for null and person object).",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px;">
  <button type="button" style="background-color: #6366f1; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;" onclick="document.getElementById('live-types-out').innerText = 'str: string\\nnum: number\\nisEnrolled: boolean\\nunassigned: undefined\\nemptyVal: object (historical JS bug)\\nperson: object';">Run Types Demo</button>
  <pre id="live-types-out" style="background-color: #0f172a; color: #38bdf8; padding: 10px; border-radius: 4px; font-size: 12px; margin-top: 8px; font-family: monospace;">Click button to view data types.</pre>
</div>`,
    explanation: [
      "let vs const vs var: `let` is block-scoped and allows reassignment. `const` is block-scoped and prevents reassignment of the variable identifier. `var` is function-scoped and hoisted with `undefined`, leading to bugs.",
      "Primitive Data Types (immutable, passed by value): String, Number, BigInt, Boolean, Undefined, Null, Symbol.",
      "Non-Primitive Types (mutable, passed by reference): Objects, Arrays, Functions.",
      "Type Conversion (Explicit): `Number('123')` -> `123`, `String(100)` -> `'100'`, `Boolean(0)` -> `false`.",
      "Type Coercion (Implicit): `'5' + 2 = '52'` (string concatenation wins with `+`), `'5' - 2 = 3` (mathematical subtraction converts `'5'` to number)."
    ],
    importantProperties: [
      { name: "let", desc: "Declares a block-scoped local variable, optionally initializing it to a value." },
      { name: "const", desc: "Declares a block-scoped constant whose reference cannot be reassigned." },
      { name: "typeof", desc: "Unary operator that returns a string indicating the type of the unevaluated operand." },
      { name: "null vs undefined", desc: "undefined means a variable has been declared but not assigned. null is an explicit assignment of 'no value'." }
    ],
    realWorld: "E-commerce stores use `const` for fixed product IDs and API endpoints, and `let` for shopping cart counts and active page numbers.",
    commonMistakes: [
      "Using `var` in modern applications, which leaks variables outside `if` and `for` blocks.",
      "Attempting to reassign a `const` variable (`const x = 5; x = 10; // TypeError: Assignment to constant variable`).",
      "Confusing `null` and `undefined`. Note that `typeof null` returns `'object'` due to an original JavaScript implementation quirk."
    ],
    bestPractices: [
      "Use `const` by default for all variable declarations. Only use `let` when you know the value will change.",
      "Never use `var` in modern JavaScript code.",
      "Use meaningful camelCase identifiers (e.g. `studentName`, `totalPrice`)."
    ],
    practice: {
      question: "Declare a constant named `MAX_LOGIN_ATTEMPTS` with value 5, and a variable named `currentAttempt` with value 1.",
      objective: "Practice using const and let correctly.",
      instructions: "Write the two variable declarations using appropriate keywords.",
      starterCode: `// Write variable declarations here`,
      expectedOutput: "Two variables defined with const and let.",
      hint: "Use const for MAX_LOGIN_ATTEMPTS and let for currentAttempt.",
      solution: `const MAX_LOGIN_ATTEMPTS = 5;
let currentAttempt = 1;`
    },
    interview: {
      question: "What is the difference between `var`, `let`, and `const`?",
      answer: "`var` is function-scoped, can be re-declared and updated, and is hoisted to the top of its scope initialized as undefined. `let` is block-scoped, can be updated but not re-declared in the same scope, and is hoisted in the Temporal Dead Zone (TDZ). `const` is block-scoped, cannot be re-declared or reassigned, and must be initialized during declaration.",
      explanation: "Block scope means the variable exists only within the `{ ... }` curly braces where it was defined.",
      example: "if (true) { let x = 10; } console.log(x); // ReferenceError"
    },
    revision: "Use `const` for immutable variables and `let` for variables that change. JavaScript has 7 primitive types plus Object. `typeof null` is `'object'` and `typeof undefined` is `'undefined'`."
  },
  {
    id: "operators",
    title: "JavaScript Operators",
    what: "Operators are special symbols used to perform operations on operands (values and variables). JavaScript includes Arithmetic, Assignment, Comparison, Logical, and Ternary operators.",
    why: "Operators enable mathematical calculations, comparisons between values, logical decision-making, and compact conditional expressions.",
    syntax: `// Arithmetic & Assignment
let x = 10;
x += 5; // x = 15

// Comparison: == vs ===
console.log(5 == "5");   // true (Loose equality: coerces types)
console.log(5 === "5");  // false (Strict equality: checks value AND type)

// Logical & Ternary
let canVote = (age >= 18) && hasVoterID;
let status = (score >= 40) ? "Pass" : "Fail";`,
    basicExample: "Strict equality check: `(5 === 5) // true`, `('hello' === 'hello') // true`",
    exampleHTML: `<!DOCTYPE html>
<html>
<body>
  <h4>Equality Operators Test</h4>
  <p>Compare <code>5 == "5"</code> vs <code>5 === "5"</code></p>
  <button class="btn btn-sm btn-primary" onclick="testEquality()">Compare</button>
  <div id="op-out" class="alert alert-info mt-2 small"></div>

  <script>
    function testEquality() {
      let loose = (5 == "5");
      let strict = (5 === "5");
      document.getElementById('op-out').innerHTML = 
        "<strong>Loose (==):</strong> " + loose + " (converts '5' to 5)<br>" +
        "<strong>Strict (===):</strong> " + strict + " (different data types: number vs string)";
    }
  </script>
</body>
</html>`,
    expectedOutputDescription: "Shows that 5 == '5' evaluates to true due to type coercion, whereas 5 === '5' evaluates to false because their types differ.",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px;">
  <button type="button" style="background-color: #6366f1; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;" onclick="document.getElementById('op-live-out').innerHTML = '<strong>Loose (==):</strong> true (coerced)<br><strong>Strict (===):</strong> false (number vs string)';">Compare 5 == '5' vs 5 === '5'</button>
  <div id="op-live-out" style="background-color: #f1f5f9; border-left: 4px solid #6366f1; padding: 8px 12px; margin-top: 8px; font-size: 13px; color: #1e293b;">Click button to evaluate comparison.</div>
</div>`,
    explanation: [
      "Arithmetic Operators: `+` (add), `-` (subtract), `*` (multiply), `/` (divide), `%` (modulus / remainder), `**` (exponentiation), `++` (increment), `--` (decrement).",
      "Assignment Operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`.",
      "Comparison Operators: `==` (loose equal), `===` (strict equal - ALWAYS prefer this!), `!=` (loose not equal), `!==` (strict not equal), `>`, `<`, `>=`, `<=`.",
      "Logical Operators: `&&` (AND - all must be true), `||` (OR - at least one true), `!` (NOT - inverts boolean).",
      "Ternary Operator: Compact one-line conditional: `condition ? valueIfTrue : valueIfFalse`."
    ],
    importantProperties: [
      { name: "===", desc: "Strict equality operator. Checks both value and data type without type conversion." },
      { name: "==", desc: "Loose equality operator. Converts operands to the same type before comparison." },
      { name: "&& (Logical AND)", desc: "Returns true only if both operands evaluate to truthy." },
      { name: "|| (Logical OR)", desc: "Returns true if at least one operand evaluates to truthy." },
      { name: "? : (Ternary)", desc: "Shorthand syntax for an if-else statement returning an expression." }
    ],
    realWorld: "Form validators check if `password.length >= 8 && hasSpecialChar === true` before enabling the submit button.",
    commonMistakes: [
      "Using single `=` (assignment) instead of `===` (comparison) inside an `if` condition (e.g. `if (x = 5)` assigns 5 to x and always evaluates to true!).",
      "Using `==` instead of `===`, which can cause unexpected bugs (e.g. `0 == ''` is true, `false == '0'` is true!)."
    ],
    bestPractices: [
      "Always use strict equality (`===` and `!==`) instead of loose equality (`==` and `!=`).",
      "Use parentheses in complex logical expressions to make evaluation order clear (`(a && b) || c`)."
    ],
    practice: {
      question: "Write a ternary expression that assigns 'Adult' to `category` if `age >= 18`, otherwise 'Minor'.",
      objective: "Practice writing compact ternary expressions.",
      instructions: "Use the condition ? true : false syntax.",
      starterCode: `let age = 20;
let category = /* Write ternary here */;`,
      expectedOutput: "category is assigned 'Adult'.",
      hint: "Syntax: let category = age >= 18 ? 'Adult' : 'Minor';",
      solution: `let age = 20;
let category = age >= 18 ? "Adult" : "Minor";`
    },
    interview: {
      question: "Why should you always use `===` instead of `==` in JavaScript?",
      answer: "`==` (loose equality) performs implicit type coercion before comparing, which leads to strange, counterintuitive results (e.g. `'' == 0` is true, `null == undefined` is true, and `[0] == 0` is true). `===` (strict equality) compares both the value and the data type without type coercion, making code predictable, safe, and bug-free.",
      explanation: "Strict equality ensures no hidden type conversion happens behind your back.",
      example: "0 === false // false (number vs boolean), 0 == false // true"
    },
    revision: "Use arithmetic operators for calculations, logical operators (`&&`, `||`, `!`) for conditions, and ALWAYS use strict equality `===` instead of `==` to prevent type coercion bugs."
  },
  {
    id: "conditionals",
    title: "Conditional Statements",
    what: "Conditional statements are used to perform different actions based on different logical conditions. JavaScript supports `if`, `if-else`, `else if` ladders, nested `if`, and `switch` statements.",
    why: "Programs need decision-making logic. Conditionals allow websites to show personalized greetings, calculate grades, validate passwords, and control application flow.",
    syntax: `// if - else if - else
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

// switch statement
switch (dayNumber) {
  case 1: dayName = "Monday"; break;
  case 2: dayName = "Tuesday"; break;
  default: dayName = "Other Day";
}`,
    basicExample: "Even or odd check: `if (num % 2 === 0) { console.log('Even'); } else { console.log('Odd'); }`",
    exampleHTML: `<!DOCTYPE html>
<html>
<body>
  <h4>Grade Calculator</h4>
  <input type="number" id="marks-input" class="form-control mb-2" placeholder="Enter score (0-100)" style="max-width: 200px;">
  <button class="btn btn-primary btn-sm" onclick="calculateGrade()">Calculate Grade</button>
  <div id="grade-out" class="mt-2 fw-bold text-indigo"></div>

  <script>
    function calculateGrade() {
      let score = Number(document.getElementById('marks-input').value);
      let grade = "";
      if (score >= 90) {
        grade = "Grade A+ (Outstanding!)";
      } else if (score >= 75) {
        grade = "Grade B (Very Good)";
      } else if (score >= 50) {
        grade = "Grade C (Pass)";
      } else {
        grade = "Grade F (Needs Improvement)";
      }
      document.getElementById('grade-out').innerText = "Result: " + grade;
    }
  </script>
</body>
</html>`,
    expectedOutputDescription: "Entering a number like 85 and clicking Calculate outputs 'Result: Grade B (Very Good)'.",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px;">
  <div style="display: flex; gap: 8px; align-items: center;">
    <input type="number" id="live-marks" placeholder="Enter 85" style="padding: 4px 8px; border: 1px solid #cbd5e1; border-radius: 4px; width: 120px; font-size: 13px;" value="85">
    <button type="button" style="background-color: #6366f1; color: white; border: none; padding: 5px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;" onclick="let s = Number(document.getElementById('live-marks').value); let g = s >= 90 ? 'Grade A+' : (s >= 75 ? 'Grade B' : (s >= 50 ? 'Grade C' : 'Grade F')); document.getElementById('live-grade-res').innerText = 'Result: ' + g;">Calculate</button>
  </div>
  <p id="live-grade-res" style="color: #4f46e5; font-weight: bold; margin-top: 8px; font-size: 13px;">Result: Grade B</p>
</div>`,
    explanation: [
      "`if (condition)` executes the block if the condition evaluates to truthy.",
      "`else if (condition)` tests a secondary condition if the previous condition was falsy.",
      "`else` executes when all preceding conditions are falsy.",
      "`switch (expression)` compares the expression against multiple `case` values using strict equality (`===`).",
      "`break` statement inside a switch terminates the switch block, preventing 'fall-through' execution into subsequent cases.",
      "`default` specifies the fallback code to run if no case matches."
    ],
    importantProperties: [
      { name: "if...else", desc: "Primary conditional branch structure in JavaScript." },
      { name: "switch", desc: "Multi-branch statement best suited when comparing one variable against multiple exact values." },
      { name: "break", desc: "Jumps out of the switch block to prevent fall-through." },
      { name: "default", desc: "Default fallback block in a switch statement if no cases match." }
    ],
    realWorld: "Authentication middlewares check `if (!user.isLoggedIn) { redirectToLogin(); }` to protect dashboard pages.",
    commonMistakes: [
      "Forgetting `break` in a `switch` statement, which causes the browser to execute all subsequent cases regardless of their condition (fall-through).",
      "Using assignment (`=`) instead of comparison (`===`) in the `if` condition."
    ],
    bestPractices: [
      "Use `if-else` for range checks (`score >= 80`) and `switch` for specific discrete values (e.g. `status === 'PENDING'`, `'ACTIVE'`, `'CANCELLED'`).",
      "Keep nested `if` statements shallow (max 2 levels) to maintain code readability."
    ],
    practice: {
      question: "Write an if-else statement that checks if a number `num` is positive, negative, or zero.",
      objective: "Practice building multi-branch conditional ladders.",
      instructions: "Handle all three cases: num > 0, num < 0, and num === 0.",
      starterCode: `let num = -7;
// Write condition ladder here`,
      expectedOutput: "Logs 'Negative'.",
      hint: "Use `if (num > 0)`, `else if (num < 0)`, and `else`.",
      solution: `let num = -7;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}`
    },
    interview: {
      question: "When should you use `switch` instead of `if-else`?",
      answer: "Use `switch` when you are evaluating a single variable against multiple discrete, constant values (like menu options, status codes, or days of the week). Use `if-else` when you are evaluating boolean conditions, ranges (e.g., `x > 10 && x < 20`), or multiple different variables.",
      explanation: "Switch statements use strict comparison (`===`) and make multi-value branching cleaner to read.",
      example: "switch (action) { case 'ADD': ... break; case 'DELETE': ... break; }"
    },
    revision: "Use `if`, `else if`, and `else` for condition branching. Use `switch` for multi-value discrete matching with `break` to prevent fall-through."
  },
  {
    id: "loops",
    title: "Loops and Iteration",
    what: "Loops are control structures used to repeat a block of code multiple times until a specified condition is met. JavaScript provides `for`, `while`, `do-while`, `for...of`, and `for...in` loops.",
    why: "Without loops, you would have to write repetitive code. Loops automate tasks like iterating through array items, generating tables, printing star patterns, and processing data collections.",
    syntax: `// Standard for loop (Initialization; Condition; Update)
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// while loop
let count = 1;
while (count <= 3) {
  count++;
}

// do-while loop (Runs AT LEAST ONCE)
let n = 10;
do {
  console.log(n);
} while (n < 5);`,
    basicExample: "Printing numbers 1 to 5: `for (let i = 1; i <= 5; i++) { console.log(i); }`",
    exampleHTML: `<!DOCTYPE html>
<html>
<body>
  <h4>Multiplication Table Generator</h4>
  <input type="number" id="table-num" class="form-control mb-2" value="5" style="max-width: 150px;">
  <button class="btn btn-sm btn-primary" onclick="generateTable()">Generate Table</button>
  <pre id="table-out" class="bg-dark text-white p-3 rounded mt-2 font-monospace small"></pre>

  <script>
    function generateTable() {
      let num = Number(document.getElementById('table-num').value);
      let res = "";
      for (let i = 1; i <= 10; i++) {
        res += num + " x " + i + " = " + (num * i) + "\\n";
      }
      document.getElementById('table-out').innerText = res;
    }
  </script>
</body>
</html>`,
    expectedOutputDescription: "Generates the multiplication table for 5 from 5 x 1 = 5 up to 5 x 10 = 50 in a preformatted code box.",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px;">
  <div style="display: flex; gap: 8px; align-items: center;">
    <input type="number" id="live-loop-num" value="5" style="padding: 4px 8px; border: 1px solid #cbd5e1; border-radius: 4px; width: 80px; font-size: 13px;">
    <button type="button" style="background-color: #6366f1; color: white; border: none; padding: 5px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;" onclick="let n = Number(document.getElementById('live-loop-num').value); let t = ''; for(let i=1; i<=5; i++) { t += n + ' x ' + i + ' = ' + (n*i) + '\\n'; } document.getElementById('live-loop-res').innerText = t;">Generate 5 Rows</button>
  </div>
  <pre id="live-loop-res" style="background-color: #0f172a; color: #a5b4fc; padding: 8px; border-radius: 4px; font-size: 12px; margin-top: 8px; font-family: monospace;">5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25</pre>
</div>`,
    explanation: [
      "`for (init; condition; update)`: Best when the number of iterations is known in advance.",
      "`while (condition)`: Evaluates the condition first; runs as long as the condition remains true.",
      "`do...while (condition)`: Executes the body first, then checks the condition. Guarantees at least one execution.",
      "`break`: Immediately terminates the loop and moves execution to the next statement outside.",
      "`continue`: Skips the remainder of the current iteration and jumps directly to the next iteration step.",
      "Nested Loops: A loop inside another loop (e.g. for generating 2D grids, matrix calculations, and patterns)."
    ],
    importantProperties: [
      { name: "for", desc: "Loop with counter initialization, condition check, and increment/decrement step." },
      { name: "while", desc: "Loop that runs as long as the test condition evaluates to true." },
      { name: "do...while", desc: "Post-test loop that executes at least once regardless of condition." },
      { name: "break", desc: "Keywords that exits the nearest enclosing loop immediately." },
      { name: "continue", desc: "Skips the current loop step and proceeds to the next iteration." }
    ],
    realWorld: "Iterating through an array of products returned from an API to create HTML cards dynamically.",
    commonMistakes: [
      "Creating an infinite loop by forgetting to increment the counter variable (e.g. `while(i < 10)` without `i++`), freezing the browser tab.",
      "Off-by-one errors (using `<` instead of `<=` or starting at index 1 instead of 0)."
    ],
    bestPractices: [
      "Always ensure loop termination conditions are reachable.",
      "Use `let` (not `var`) for the loop counter variable to preserve block-scoped binding."
    ],
    practice: {
      question: "Write a for loop that calculates the sum of all numbers from 1 to 10.",
      objective: "Practice accumulating values using a loop.",
      instructions: "Initialize sum = 0 and loop from i = 1 to 10.",
      starterCode: `let sum = 0;
// Write loop here
console.log(sum);`,
      expectedOutput: "55 (1+2+3+4+5+6+7+8+9+10)",
      hint: "Use `for (let i = 1; i <= 10; i++) { sum += i; }`.",
      solution: `let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum); // 55`
    },
    interview: {
      question: "What is the key difference between a `while` loop and a `do-while` loop?",
      answer: "A `while` loop is an entry-controlled loop where the condition is evaluated before executing the loop body (if false initially, it runs 0 times). A `do-while` loop is an exit-controlled loop where the body is executed first before checking the condition, guaranteeing that the code executes at least once.",
      explanation: "Use `do-while` when an initial action is required before asking for user input or validating a state.",
      example: "let x = 10; while(x < 5) // 0 times. do { ... } while(x < 5); // 1 time."
    },
    revision: "Use `for` when iteration count is known, `while` when looping depends on an external condition, and `do-while` when the loop must run at least once. Use `break` to stop and `continue` to skip."
  },
  {
    id: "functions",
    title: "JavaScript Functions",
    what: "A function is a reusable block of code designed to perform a specific task. Functions take parameters (inputs), execute statements, and return a result.",
    why: "Functions promote the DRY (Don't Repeat Yourself) principle, modularize complex logic, make code reusable, testable, and clean.",
    syntax: `// 1. Function Declaration
function add(a, b) {
  return a + b;
}

// 2. Function Expression
const multiply = function(a, b) {
  return a * b;
};

// 3. Arrow Function (ES6)
const divide = (a, b) => a / b;

// Default Parameters
function greet(name = "Guest") {
  return "Hello, " + name;
}`,
    basicExample: "Defining and calling an arrow function: `const square = x => x * x; console.log(square(5)); // 25`",
    exampleHTML: `<!DOCTYPE html>
<html>
<body>
  <h4>Area of Rectangle Calculator</h4>
  <div class="d-flex gap-2 mb-2">
    <input type="number" id="rect-w" class="form-control" placeholder="Width" value="10" style="max-width: 100px;">
    <input type="number" id="rect-h" class="form-control" placeholder="Height" value="5" style="max-width: 100px;">
  </div>
  <button class="btn btn-sm btn-primary" onclick="showArea()">Calculate Area</button>
  <p id="area-res" class="mt-2 text-indigo fw-bold"></p>

  <script>
    // Pure function to calculate area
    const calcArea = (width, height) => width * height;

    function showArea() {
      let w = Number(document.getElementById('rect-w').value);
      let h = Number(document.getElementById('rect-h').value);
      let area = calcArea(w, h);
      document.getElementById('area-res').innerText = "Area = " + area + " sq units";
    }
  </script>
</body>
</html>`,
    expectedOutputDescription: "Computes area by passing inputs into an arrow function: 10 * 5 = 50 sq units.",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px;">
  <button type="button" style="background-color: #6366f1; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;" onclick="const calc = (w, h) => w * h; document.getElementById('live-func-res').innerText = 'Area of 10 x 5 = ' + calc(10, 5) + ' sq units';">Run Function (10 x 5)</button>
  <p id="live-func-res" style="color: #4f46e5; font-weight: bold; margin-top: 8px; font-size: 13px;">Area of 10 x 5 = 50 sq units</p>
</div>`,
    explanation: [
      "Function Declaration: Defined using `function name() {}`. Hoisted to the top of its scope, so it can be called before its definition.",
      "Function Expression: Storing an anonymous function inside a variable (`const fn = function() {}`). Not hoisted before declaration.",
      "Arrow Functions (`=>`): Modern ES6 concise syntax. Does not bind its own `this`, `arguments`, or `super`.",
      "Parameters: Variable names listed in function definition. Arguments: Real values passed when invoking.",
      "Return Statement: Specifies the value to be returned to the caller and stops function execution immediately.",
      "Default Parameters: Allows formal parameters to be initialized with default values if no value or `undefined` is passed."
    ],
    importantProperties: [
      { name: "return", desc: "Stops function execution and returns a value to the function caller." },
      { name: "() => {}", desc: "Arrow function syntax offering shorter syntax and lexical `this` binding." },
      { name: "arguments", desc: "Array-like object accessible inside non-arrow functions containing all passed parameters." },
      { name: "Callback Function", desc: "A function passed into another function as an argument to be executed later." }
    ],
    realWorld: "Utility functions like formatting currency (`formatCurrency(amount)`), calculating tax, or handling button clicks.",
    commonMistakes: [
      "Forgetting the `return` keyword, which causes the function to return `undefined` by default.",
      "Confusing parameters (placeholders in function definition) with arguments (actual values passed during call)."
    ],
    bestPractices: [
      "Keep functions focused on a single responsibility (do one thing well).",
      "Use descriptive verb-based names (e.g. `calculateTotal`, `fetchUserData`, `validateEmail`).",
      "Use arrow functions for callbacks and simple transformations."
    ],
    practice: {
      question: "Write an arrow function called `isEven` that takes a number `n` and returns `true` if even, otherwise `false`.",
      objective: "Practice writing arrow functions with boolean returns.",
      instructions: "Use modulo operator `% 2 === 0` inside the arrow function.",
      starterCode: `// Write isEven arrow function here`,
      expectedOutput: "isEven(4) returns true; isEven(7) returns false.",
      hint: "const isEven = n => n % 2 === 0;",
      solution: `const isEven = n => n % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(7)); // false`
    },
    interview: {
      question: "What is the difference between regular functions and arrow functions?",
      answer: "1) Syntax: Arrow functions provide a cleaner, more concise syntax. 2) `this` binding: Regular functions have their own dynamic `this` context based on how they are called. Arrow functions do NOT bind their own `this`; they lexically inherit `this` from the enclosing scope. 3) Constructors: Regular functions can be used as constructors with `new`; arrow functions cannot. 4) Arguments object: Regular functions have an `arguments` object; arrow functions do not.",
      explanation: "Lexical `this` makes arrow functions ideal for callbacks and event handlers inside objects or classes.",
      example: "const greet = () => 'Hello'; vs function greet() { return 'Hello'; }"
    },
    revision: "Functions encapsulate reusable logic. Use function declarations for top-level hoisted functions, and arrow functions `() => {}` for callbacks and compact expressions."
  },
  {
    id: "arrays-objects",
    title: "Arrays and Objects",
    what: "Arrays are ordered lists of values indexed by numbers starting at 0. Objects are unordered collections of key-value pairs used to represent real-world entities with properties and methods.",
    why: "Arrays and Objects are the primary data structures in JavaScript. Almost all API data, database records, product lists, and user profiles are modeled using objects and arrays of objects.",
    syntax: `// Array creation and methods
const fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango"); // Adds to end
const upperFruits = fruits.map(f => f.toUpperCase());

// Object creation and access
const student = {
  name: "Sneha",
  age: 20,
  course: "BCA",
  greet() {
    return "Hi, I am " + this.name;
  }
};
console.log(student.name);     // Dot notation
console.log(student["course"]); // Bracket notation`,
    basicExample: "Array mapping: `[1, 2, 3].map(x => x * 2) // [2, 4, 6]`",
    exampleHTML: `<!DOCTYPE html>
<html>
<body>
  <h4>Array & Object Explorer</h4>
  <button class="btn btn-sm btn-primary" onclick="runArrayDemo()">Process Student Array</button>
  <pre id="arr-out" class="bg-dark text-white p-3 rounded mt-2 font-monospace small"></pre>

  <script>
    function runArrayDemo() {
      const students = [
        { name: "Rahul", score: 85 },
        { name: "Priya", score: 92 },
        { name: "Amit", score: 64 }
      ];

      // filter students with score >= 80 and map their names
      const topStudents = students
        .filter(s => s.score >= 80)
        .map(s => s.name + " (" + s.score + ")");

      document.getElementById('arr-out').innerText = "Top Scorers (>=80):\\n" + topStudents.join("\\n");
    }
  </script>
</body>
</html>`,
    expectedOutputDescription: "Filters and maps array of student objects to display Rahul (85) and Priya (92).",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px;">
  <button type="button" style="background-color: #6366f1; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;" onclick="const students = [{ name: 'Rahul', score: 85 }, { name: 'Priya', score: 92 }]; document.getElementById('live-arr-res').innerText = 'Top Students:\\n' + students.map(s => s.name + ' (' + s.score + ')').join('\\n');">Run Array Filter/Map</button>
  <pre id="live-arr-res" style="background-color: #0f172a; color: #38bdf8; padding: 8px; border-radius: 4px; font-size: 12px; margin-top: 8px; font-family: monospace;">Top Students:\nRahul (85)\nPriya (92)</pre>
</div>`,
    explanation: [
      "Array Methods (Mutating): `push()` (add end), `pop()` (remove end), `unshift()` (add start), `shift()` (remove start), `splice()` (add/remove at index).",
      "Array Methods (Non-Mutating): `slice()` (copy portion), `indexOf()`, `includes()`, `join()`, `concat()`.",
      "Higher-Order Array Methods: `map()` (transforms every item), `filter()` (returns subset matching condition), `reduce()` (accumulates array into single value), `forEach()` (iterates items), `find()` (returns first match).",
      "Object Properties: Stored as `key: value` pairs. Access via dot notation (`obj.prop`) or bracket notation (`obj['prop']`).",
      "Object Static Methods: `Object.keys(obj)` (array of keys), `Object.values(obj)` (array of values), `Object.entries(obj)` (array of `[key, value]` pairs)."
    ],
    importantProperties: [
      { name: ".length", desc: "Returns the number of elements in an array." },
      { name: ".map()", desc: "Creates a new array populated with the results of calling a provided function on every element." },
      { name: ".filter()", desc: "Creates a new array with all elements that pass the test implemented by the provided function." },
      { name: ".reduce()", desc: "Executes a reducer function on each element, resulting in a single output value." },
      { name: "Object.keys()", desc: "Returns an array of a given object's own enumerable property names." }
    ],
    realWorld: "Fetching an array of products from an e-commerce API, filtering by price, sorting by rating, and mapping to HTML cards.",
    commonMistakes: [
      "Confusing `slice()` (immutable, extracts slice) with `splice()` (mutates original array).",
      "Using `for...in` on arrays (intended for object keys; use `for...of` or `forEach` for arrays)."
    ],
    bestPractices: [
      "Prefer non-mutating functional methods (`map`, `filter`, `reduce`) over manual `for` loops.",
      "Use `const` for array and object declarations to protect the reference."
    ],
    practice: {
      question: "Given `const numbers = [1, 2, 3, 4, 5]`, use `.filter()` to get only even numbers.",
      objective: "Practice using array filter method.",
      instructions: "Filter numbers where num % 2 === 0.",
      starterCode: `const numbers = [1, 2, 3, 4, 5];
// const evens = ...`,
      expectedOutput: "[2, 4]",
      hint: "Use `numbers.filter(n => n % 2 === 0)`.",
      solution: `const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]`
    },
    interview: {
      question: "What is the difference between `map()` and `forEach()` on an array?",
      answer: "`map()` transforms every element and returns a **new array** containing the results without mutating the original array. `forEach()` iterates over the array executing a callback for each item, but returns **undefined** (it cannot be chained with other array methods and is used primarily for side effects like logging or updating the DOM).",
      explanation: "Use `map` when you need a transformed array; use `forEach` when you just want to loop for side-effects.",
      example: "const doubled = arr.map(x => x * 2); vs arr.forEach(x => console.log(x));"
    },
    revision: "Arrays store ordered lists (`[1, 2]`) with methods like `.push()`, `.map()`, `.filter()`. Objects store key-value entities (`{ name: 'John' }`). Access keys with dot or bracket notation."
  },
  {
    id: "strings-numbers-math",
    title: "Strings, Numbers, Date and Math",
    what: "JavaScript provides comprehensive built-in standard objects for string manipulation, numerical parsing, mathematical calculations (`Math`), and dates handling (`Date`).",
    why: "Real applications constantly format names, calculate totals, generate random numbers, format dates, and parse numerical inputs from form fields.",
    syntax: `// Template Literals & Strings
const user = "Bhaarath";
console.log(\`Hello \${user}, length: \${user.length}\`);

// Number parsing & Math
let price = parseFloat("49.99");
let randomNum = Math.floor(Math.random() * 100) + 1; // 1 to 100

// Date API
const now = new Date();
console.log(now.getFullYear()); // e.g. 2026`,
    basicExample: "Template literal interpolation: `const msg = \`Total is: $\${10 * 5}\`; // 'Total is: $50'`",
    exampleHTML: `<!DOCTYPE html>
<html>
<body>
  <h4>Date & Math Utility Tester</h4>
  <button class="btn btn-sm btn-primary" onclick="runBuiltins()">Show Time & Random Number</button>
  <div id="builtins-out" class="alert alert-secondary mt-2 small font-monospace"></div>

  <script>
    function runBuiltins() {
      const now = new Date();
      const dateStr = now.toLocaleDateString() + " " + now.toLocaleTimeString();
      const diceRoll = Math.floor(Math.random() * 6) + 1;
      const text = "   weblearn hub   ".trim().toUpperCase();

      document.getElementById('builtins-out').innerHTML = 
        "<strong>Current Time:</strong> " + dateStr + "<br>" +
        "<strong>Dice Roll (1-6):</strong> " + diceRoll + "<br>" +
        "<strong>Formatted Text:</strong> " + text;
    }
  </script>
</body>
</html>`,
    expectedOutputDescription: "Generates formatted current date/time, a random dice roll number between 1 and 6, and trimmed uppercase text 'WEBLEARN HUB'.",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px;">
  <button type="button" style="background-color: #6366f1; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;" onclick="const d = new Date(); const roll = Math.floor(Math.random() * 6) + 1; document.getElementById('live-built-res').innerHTML = '<strong>Time:</strong> ' + d.toLocaleTimeString() + '<br><strong>Dice Roll (1-6):</strong> ' + roll + '<br><strong>String:</strong> ' + '  javascript  '.trim().toUpperCase();">Test Math & Date</button>
  <div id="live-built-res" style="background-color: #f8fafc; border: 1px solid #cbd5e1; padding: 8px; border-radius: 4px; font-size: 12px; margin-top: 8px; color: #1e293b;">Click button to execute.</div>
</div>`,
    explanation: [
      "String Methods: `length` (property), `toUpperCase()`, `toLowerCase()`, `trim()`, `charAt(index)`, `indexOf()`, `includes()`, `slice(start, end)`, `replace(search, replaceWith)`, `split(delimiter)`.",
      "Template Literals: Defined using backticks (`` ` ``). Supports multiline strings and `${expression}` interpolation.",
      "Number Methods: `parseInt('10')`, `parseFloat('3.14')`, `Number('50')`, `isNaN()`, `num.toFixed(2)` (formats fixed decimals).",
      "Math Object: `Math.round()` (nearest integer), `Math.floor()` (round down), `Math.ceil()` (round up), `Math.random()` (float 0 to 1), `Math.max()`, `Math.min()`, `Math.pow(base, exp)`.",
      "Date Object: `new Date()`, `.getFullYear()`, `.getMonth()` (0 = Jan, 11 = Dec!), `.getDate()`, `.getHours()`, `.getMinutes()`, `.toLocaleDateString()`."
    ],
    importantProperties: [
      { name: "Math.random()", desc: "Returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive)." },
      { name: "parseInt() / parseFloat()", desc: "Parses a string argument and returns an integer or floating point number." },
      { name: "Template Literals (`...${}`) ", desc: "String literals allowing embedded expressions and multiline formatting." },
      { name: "Date.now()", desc: "Returns the number of milliseconds elapsed since January 1, 1970 UTC." }
    ],
    realWorld: "Generating random OTP codes (`Math.floor(1000 + Math.random() * 9000)`), parsing user price inputs, and displaying copyright year dynamically (`new Date().getFullYear()`).",
    commonMistakes: [
      "Forgetting that `Date.getMonth()` is zero-indexed (0 is January, 11 is December).",
      "Confusing `parseInt` with `Number()` (e.g. `parseInt('10px')` returns `10`, whereas `Number('10px')` returns `NaN`)."
    ],
    bestPractices: [
      "Use template literals (backticks) instead of string concatenation with `+`.",
      "Always validate numerical inputs using `isNaN()` before performing math operations."
    ],
    practice: {
      question: "Write a function that generates a random integer between a `min` and `max` value (inclusive).",
      objective: "Master Math.random() and Math.floor().",
      instructions: "Formula: Math.floor(Math.random() * (max - min + 1)) + min.",
      starterCode: `function getRandomInt(min, max) {
  // Write formula here
}`,
      expectedOutput: "getRandomInt(1, 10) returns an integer between 1 and 10.",
      hint: "Use `return Math.floor(Math.random() * (max - min + 1)) + min;`.",
      solution: `function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));`
    },
    interview: {
      question: "What is `NaN` in JavaScript, and how do you test for it?",
      answer: "`NaN` stands for 'Not-a-Number'. It is a special numeric value produced when an arithmetic operation cannot produce a meaningful number (e.g. `'hello' / 2`). Crucially, `NaN === NaN` evaluates to `false` in JavaScript. To test if a value is NaN, you must use `Number.isNaN(value)` or `isNaN(value)`.",
      explanation: "NaN is the only value in JavaScript that is not equal to itself.",
      example: "typeof NaN // 'number', Number.isNaN(0 / 0) // true"
    },
    revision: "Use backticks for template literals, `Math.floor(Math.random() * N)` for random numbers, `parseInt()` / `parseFloat()` for number parsing, and `new Date()` for date-time handling."
  },
  {
    id: "dom-events",
    title: "DOM Manipulation and Events",
    what: "The Document Object Model (DOM) is an object-oriented representation of the web page. JavaScript uses DOM methods to select, create, modify, and delete HTML elements, styles, and listen to user events (clicks, keypresses, submits).",
    why: "DOM manipulation allows web pages to react to user actions in real time—adding items to a cart, toggling dark mode, validating forms as you type, and building dynamic single-page applications.",
    syntax: `// Selecting elements
const btn = document.getElementById('submit-btn');
const card = document.querySelector('.user-card');

// Modifying element content and classes
card.textContent = "Updated Content";
card.classList.toggle('active');

// Listening for events
btn.addEventListener('click', function(e) {
  console.log("Button was clicked!");
});`,
    basicExample: "Adding a click listener: `document.querySelector('button').addEventListener('click', () => alert('Clicked!'))`",
    exampleHTML: `<!DOCTYPE html>
<html>
<body>
  <h4>Interactive Counter Component</h4>
  <div class="d-flex align-items-center gap-3">
    <button id="dec-btn" class="btn btn-danger btn-sm">-</button>
    <span id="counter-val" class="fs-4 fw-bold text-slate-800">0</span>
    <button id="inc-btn" class="btn btn-success btn-sm">+</button>
  </div>

  <script>
    let count = 0;
    const countDisplay = document.getElementById('counter-val');
    const incBtn = document.getElementById('inc-btn');
    const decBtn = document.getElementById('dec-btn');

    incBtn.addEventListener('click', () => {
      count++;
      countDisplay.textContent = count;
      countDisplay.style.color = count > 0 ? '#10b981' : (count < 0 ? '#ef4444' : '#1e293b');
    });

    decBtn.addEventListener('click', () => {
      count--;
      countDisplay.textContent = count;
      countDisplay.style.color = count > 0 ? '#10b981' : (count < 0 ? '#ef4444' : '#1e293b');
    });
  </script>
</body>
</html>`,
    expectedOutputDescription: "An interactive counter with '+' and '-' buttons. Clicking updates the number dynamically and changes the color to green (positive), red (negative), or slate (zero).",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <button type="button" style="background-color: #ef4444; color: white; border: none; width: 30px; height: 30px; border-radius: 4px; font-weight: bold; cursor: pointer;" onclick="let el = document.getElementById('live-cnt'); let v = Number(el.innerText) - 1; el.innerText = v; el.style.color = v > 0 ? '#10b981' : (v < 0 ? '#ef4444' : '#1e293b');">-</button>
    <span id="live-cnt" style="font-size: 20px; font-weight: bold; color: #1e293b; min-width: 30px; text-align: center;">0</span>
    <button type="button" style="background-color: #10b981; color: white; border: none; width: 30px; height: 30px; border-radius: 4px; font-weight: bold; cursor: pointer;" onclick="let el = document.getElementById('live-cnt'); let v = Number(el.innerText) + 1; el.innerText = v; el.style.color = v > 0 ? '#10b981' : (v < 0 ? '#ef4444' : '#1e293b');">+</button>
  </div>
</div>`,
    explanation: [
      "DOM Selection: `getElementById('id')`, `querySelector('.class' or '#id')`, `querySelectorAll('tag')` (returns NodeList).",
      "Content Manipulation: `textContent` (sets plain text, safe), `innerHTML` (parses HTML tags, careful with XSS), `value` (for `<input>` fields).",
      "Class Manipulation: `element.classList.add('cls')`, `remove('cls')`, `toggle('cls')`, `contains('cls')`.",
      "Creating Elements: `const el = document.createElement('div'); parent.appendChild(el);`.",
      "Event Listener: `element.addEventListener(eventName, handlerFunction)`.",
      "Common Events: `click`, `input`, `change`, `submit`, `keydown`, `keyup`, `mouseover`, `mouseout`.",
      "Event Object (`e`): `e.preventDefault()` (stops default actions like form submissions reloading the page), `e.target` (the element that triggered the event)."
    ],
    importantProperties: [
      { name: "querySelector()", desc: "Returns the first element within the document that matches the specified CSS selector." },
      { name: "addEventListener()", desc: "Attaches an event handler function to an element without overwriting existing handlers." },
      { name: "classList", desc: "Read-only property that returns a live DOMTokenList collection of the class attributes." },
      { name: "preventDefault()", desc: "Method on Event object that cancels the event if it is cancelable (e.g. form submit reload)." }
    ],
    realWorld: "Todo lists adding/removing task items, dark mode theme toggle switches, modal dialog open/close triggers, and instant search filter bars.",
    commonMistakes: [
      "Using `innerHTML` with unsanitized user inputs, which exposes the app to Cross-Site Scripting (XSS) attacks. Use `textContent` instead.",
      "Forgetting `e.preventDefault()` on form submit event listeners, causing the browser to reload the page and wipe JavaScript state."
    ],
    bestPractices: [
      "Use `addEventListener` instead of inline HTML event handlers (e.g. `onclick='...'`).",
      "Use `classList.toggle()` for clean styling transitions."
    ],
    practice: {
      question: "Write JavaScript to select a button with ID 'theme-btn' and toggle the class 'dark-theme' on document.body on click.",
      objective: "Practice DOM event attachment and classList manipulation.",
      instructions: "Use document.getElementById and addEventListener with classList.toggle.",
      starterCode: `// Select theme-btn and add click event listener`,
      expectedOutput: "Toggles dark-theme class on body when button is clicked.",
      hint: "document.getElementById('theme-btn').addEventListener('click', () => document.body.classList.toggle('dark-theme'));",
      solution: `const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});`
    },
    interview: {
      question: "What is Event Bubbling vs Event Capturing, and what is Event Delegation?",
      answer: "When an event occurs on an element, it first travels down from the window to the target element (Capturing Phase), and then bubbles back up from the target element to the window (Bubbling Phase - default in addEventListener). **Event Delegation** is a technique where you attach a single event listener to a parent container to handle events from its current and future child elements by checking `e.target`, saving memory and handling dynamically created elements.",
      explanation: "Event delegation avoids adding hundreds of event listeners to individual list items.",
      example: "list.addEventListener('click', e => { if (e.target.tagName === 'LI') ... });"
    },
    revision: "Select elements with `querySelector()` or `getElementById()`. Modify text with `textContent` and styles with `classList`. Listen for user interaction using `addEventListener('click', handler)`."
  },
  {
    id: "modern-javascript",
    title: "Modern JavaScript & Browser Features",
    what: "Modern JavaScript (ES6 and beyond) introduces clean language features (Destructuring, Spread/Rest operators, Modules, Arrow functions) alongside powerful browser APIs including JSON parsing, LocalStorage for persistent client data, Error Handling (`try-catch`), and Asynchronous programming (`Promises`, `async/await`, `fetch`).",
    why: "Modern features make code concise, expressive, and robust. LocalStorage saves user preferences across browser sessions, and Async JavaScript allows fetching data from APIs without freezing the user interface.",
    syntax: `// 1. Destructuring & Spread
const user = { name: "Aditi", role: "Admin", city: "Bangalore" };
const { name, role } = user;
const updatedUser = { ...user, role: "SuperAdmin" };

// 2. LocalStorage & JSON
localStorage.setItem('userPrefs', JSON.stringify({ theme: 'dark' }));
const prefs = JSON.parse(localStorage.getItem('userPrefs'));

// 3. Error Handling
try {
  // risky code
} catch (error) {
  console.error("Caught error:", error.message);
} finally {
  console.log("Cleanup executed.");
}

// 4. Async / Await & Fetch
async function getGithubUser(username) {
  try {
    const res = await fetch(\`https://api.github.com/users/\${username}\`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}`,
    basicExample: "Object destructuring and spread: `const { x, y } = point; const newObj = { ...oldObj, status: 'Active' };`",
    exampleHTML: `<!DOCTYPE html>
<html>
<body>
  <h4>LocalStorage Theme Saver</h4>
  <p>Select preference to persist in browser LocalStorage:</p>
  <button class="btn btn-sm btn-dark" onclick="saveTheme('dark')">Save Dark</button>
  <button class="btn btn-sm btn-light border" onclick="saveTheme('light')">Save Light</button>
  <button class="btn btn-sm btn-outline-danger" onclick="clearTheme()">Clear</button>
  <div id="storage-status" class="mt-2 small text-muted"></div>

  <script>
    function saveTheme(theme) {
      localStorage.setItem('weblearn_theme', theme);
      document.getElementById('storage-status').innerText = "Saved: " + theme + " (Persists on reload)";
    }
    function clearTheme() {
      localStorage.removeItem('weblearn_theme');
      document.getElementById('storage-status').innerText = "LocalStorage cleared.";
    }
  </script>
</body>
</html>`,
    expectedOutputDescription: "Demonstrates saving and removing key-value items in browser LocalStorage.",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px;">
  <div style="display: flex; gap: 8px;">
    <button type="button" style="background-color: #0f172a; color: white; border: none; padding: 5px 10px; border-radius: 4px; font-size: 12px; cursor: pointer;" onclick="document.getElementById('live-ls-status').innerText = 'Saved theme: dark in localStorage';">Save Dark</button>
    <button type="button" style="background-color: #f1f5f9; color: #0f172a; border: 1px solid #cbd5e1; padding: 5px 10px; border-radius: 4px; font-size: 12px; cursor: pointer;" onclick="document.getElementById('live-ls-status').innerText = 'Saved theme: light in localStorage';">Save Light</button>
  </div>
  <p id="live-ls-status" style="color: #475569; font-size: 12px; margin-top: 8px;">Click a button to test client-side storage.</p>
</div>`,
    explanation: [
      "Destructuring: Unpacking values from arrays (`const [first, second] = arr`) or properties from objects (`const { name, age } = user`) into distinct variables.",
      "Spread Operator (`...`): Expands an iterable into individual elements (`const copy = [...arr, 99]`).",
      "Rest Parameter (`...args`): Condenses multiple function arguments into a single array parameter (`function sum(...nums)`).",
      "JSON (JavaScript Object Notation): Universal data exchange format. `JSON.stringify(obj)` converts JS object to JSON string; `JSON.parse(str)` converts JSON string back into a JS object.",
      "LocalStorage: Persistent key-value web storage that remains saved even when browser is closed and reopened (`localStorage.setItem`, `getItem`, `removeItem`, `clear`).",
      "Error Handling: `try { ... } catch(err) { ... } finally { ... }` catches runtime exceptions gracefully and prevents page crashes.",
      "Asynchronous JS: JavaScript runs synchronously on a single thread. Asynchronous APIs (Promises, `async/await`, `fetch`, `setTimeout`) delegate background tasks to browser Web APIs and execute handlers when results resolve."
    ],
    importantProperties: [
      { name: "localStorage", desc: "Read-only property of the window object that allows saving key-value data with no expiration time." },
      { name: "JSON.stringify()", desc: "Converts a JavaScript object or value to a JSON string." },
      { name: "JSON.parse()", desc: "Parses a JSON string, constructing the JavaScript value or object described by the string." },
      { name: "async / await", desc: "Syntactic sugar built on top of Promises for writing asynchronous code that looks and behaves synchronously." }
    ],
    realWorld: "Saving shopping cart contents to LocalStorage, sending REST API queries with `fetch()`, and destructuring API responses for display.",
    commonMistakes: [
      "Attempting to store raw JavaScript objects directly into LocalStorage without `JSON.stringify()`, resulting in `'[object Object]'` string storage.",
      "Forgetting the `await` keyword before a Promise, resulting in receiving an unresolved Promise object instead of the data."
    ],
    bestPractices: [
      "Always wrap asynchronous `fetch()` calls in `try...catch` blocks to handle network failure gracefully.",
      "Store only serializable string data in LocalStorage (keep sensitive credentials in secure HTTP-only cookies)."
    ],
    practice: {
      question: "Write code to save an object `{ name: 'John', score: 100 }` to localStorage under key 'userData', and then read and parse it back.",
      objective: "Practice using JSON.stringify and JSON.parse with LocalStorage.",
      instructions: "Use localStorage.setItem with JSON.stringify, and localStorage.getItem with JSON.parse.",
      starterCode: `const userObj = { name: 'John', score: 100 };
// 1. Save to localStorage
// 2. Retrieve and parse back`,
      expectedOutput: "Retrieved object matching the original userObj.",
      hint: "localStorage.setItem('userData', JSON.stringify(userObj)); const saved = JSON.parse(localStorage.getItem('userData'));",
      solution: `const userObj = { name: 'John', score: 100 };
localStorage.setItem('userData', JSON.stringify(userObj));

const retrievedUser = JSON.parse(localStorage.getItem('userData'));
console.log(retrievedUser.name); // 'John'
console.log(retrievedUser.score); // 100`
    },
    interview: {
      question: "What is the difference between `Promise` and `async/await` in JavaScript?",
      answer: "`Promise` is an object representing the eventual completion or failure of an asynchronous operation (handled with `.then()` and `.catch()` callback chains). `async/await` is modern syntactic sugar built on top of Promises that allows you to write asynchronous code in a linear, synchronous-looking style without chaining, making code much easier to read and debug using standard `try...catch` blocks.",
      explanation: "Functions marked `async` always return a Promise, and `await` pauses execution until the Promise settles.",
      example: "const data = await fetch(url).then(r => r.json()); vs const res = await fetch(url); const data = await res.json();"
    },
    revision: "Use destructuring and spread `...` for clean data handling. Store client state in `localStorage` with `JSON.stringify()`. Handle errors with `try/catch` and async tasks with `async/await`."
  }
];

module.exports = javascriptLessons;
