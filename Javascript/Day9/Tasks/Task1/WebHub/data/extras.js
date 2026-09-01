// Extra curriculum data structures (quizzes, articles, cheat sheets, interview questions, projects, comparisons, and LinkedIn templates)

const extras = {
  articlesData: [
    {
      id: "html5-explained",
      title: "HTML5 Explained for Beginners",
      category: "HTML",
      desc: "A beginner-friendly guide to understanding the structure of the web, tags, elements, and the features introduced in HTML5.",
      content: `
      <p class="lead">If you are new to web development, HTML5 is the very first thing you need to learn. In this article, we will break down what HTML is, how it works, and why it is the foundation of every website on the internet.</p>
      <h4>What is HTML?</h4>
      <p>HTML stands for <strong>HyperText Markup Language</strong>. It is not a programming language; instead, it is a markup language used to structure the content of a web page.</p>
      <h4>How HTML Works: Tags and Elements</h4>
      <p>HTML uses "tags" to declare what kind of content is on the screen: <code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code>.</p>
      <h4>What's New in HTML5?</h4>
      <ul>
        <li><strong>Semantic tags:</strong> Elements like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;nav&gt;</code>.</li>
        <li><strong>Multimedia:</strong> Native <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> support.</li>
        <li><strong>Form inputs:</strong> New input types like date pickers and color selectors.</li>
      </ul>`
    },
    {
      id: "css-box-model-explained",
      title: "CSS Box Model Explained",
      category: "CSS",
      desc: "Master padding, borders, margins, and content layout to control alignment, sizes, and spacing of HTML elements.",
      content: `
      <p class="lead">The CSS Box Model is the most critical concept in styling. Every HTML element is modeled as a rectangular box.</p>
      <ol>
        <li><strong>Content:</strong> The text, image, or child container.</li>
        <li><strong>Padding:</strong> Inner space surrounding content.</li>
        <li><strong>Border:</strong> Boundary encasing padding and content.</li>
        <li><strong>Margin:</strong> Outer separation separating the element from siblings.</li>
      </ol>
      <p>Always apply <code>* { box-sizing: border-box; }</code> to keep layouts predictable.</p>`
    },
    {
      id: "flexbox-for-beginners",
      title: "Flexbox Explained for Beginners",
      category: "CSS",
      desc: "Learn how to align, space, and stack layout items easily using CSS Flexbox properties.",
      content: `
      <p class="lead">Flexbox simplifies 1-dimensional layout alignment along a single row or column direction.</p>
      <p>Apply <code>display: flex;</code> to a parent container to transform child nodes into flexible items.</p>`
    },
    {
      id: "js-event-loop-explained",
      title: "How the JavaScript Event Loop Works",
      category: "JavaScript",
      desc: "Understand single-threaded asynchronous JavaScript, the Call Stack, Web APIs, Callback Queue, and Microtask Queue.",
      content: `
      <p class="lead">JavaScript is single-threaded, meaning it has only one Call Stack and can execute only one piece of code at a time. So how does it handle asynchronous operations like API calls and timers without freezing?</p>
      <h4>1. The Call Stack</h4>
      <p>The Call Stack is a LIFO (Last In, First Out) data structure that tracks function execution. When a function is called, it is pushed onto the stack. When it returns, it is popped off.</p>
      <h4>2. Web APIs</h4>
      <p>Asynchronous functions like <code>setTimeout()</code>, <code>fetch()</code>, and DOM event listeners are not part of the JS engine itself—they are provided by the browser runtime as Web APIs. The browser runs these in the background.</p>
      <h4>3. The Callback Queue & Microtask Queue</h4>
      <p>When a Web API finishes (e.g. 2-second timer expires), its callback is placed in the Callback Queue (or Microtask Queue for Promises). The <strong>Event Loop</strong> continuously checks if the Call Stack is empty; as soon as it is clear, it pushes the waiting callback onto the Call Stack for execution.</p>`
    },
    {
      id: "js-closures-and-scope",
      title: "Understanding Closures & Scope in JavaScript",
      category: "JavaScript",
      desc: "Master lexical scope, block scope, and closures to write clean, stateful, and encapsulated functions.",
      content: `
      <p class="lead">A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In simple terms, a closure gives an inner function access to an outer function's scope even after the outer function has finished executing.</p>
      <h4>Example of a Closure</h4>
      <pre class="bg-dark text-white p-3 rounded font-monospace small"><code>function createCounter() {
  let count = 0; // Private state
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2</code></pre>
      <p>The variable <code>count</code> cannot be accessed directly from the outside, providing true data encapsulation and privacy!</p>`
    },
    {
      id: "js-dom-manipulation-guide",
      title: "Mastering DOM Manipulation in JavaScript",
      category: "JavaScript",
      desc: "A practical guide to selecting elements, handling events, updating classes, and modifying the DOM efficiently.",
      content: `
      <p class="lead">The DOM (Document Object Model) connects web pages to scripts by representing the structure of a document in memory as a tree of nodes.</p>
      <h4>Best Practices for DOM Manipulation:</h4>
      <ul>
        <li><strong>Use textContent instead of innerHTML:</strong> <code>textContent</code> prevents Cross-Site Scripting (XSS) injection attacks.</li>
        <li><strong>Use Event Delegation:</strong> Attach one listener to a parent list rather than dozens of listeners to individual child items.</li>
        <li><strong>Use classList:</strong> Toggle CSS classes (<code>element.classList.toggle('active')</code>) rather than writing inline styles directly.</li>
      </ul>`
    },
    {
      id: "browser-load-explained",
      title: "How a Browser Loads a Webpage",
      category: "Web Basics",
      desc: "Dive deep into the browser rendering pipeline, exploring DNS lookup, DOM compilation, CSSOM blocks, and painting pixels.",
      content: `
      <p class="lead">When you type a URL like 'weblearnhub.com', the browser resolves the domain via DNS, establishes a TCP connection, sends an HTTP request, parses HTML into the DOM tree, builds the CSSOM, constructs the Render Tree, computes layout coordinates, and paints pixels on screen.</p>`
    }
  ],

  cheatSheetsData: {
    html: [
      { name: "Common Tags", details: "<code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>" },
      { name: "Forms", details: "<code>&lt;form&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;button&gt;</code>" },
      { name: "Tables", details: "<code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>" },
      { name: "Semantic HTML", details: "<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>" }
    ],
    css: [
      { name: "Selectors", details: "<code>.class</code>, <code>#id</code>, <code>tag</code>, <code>:hover</code>, <code>:focus</code>, <code>::before</code>, <code>::after</code>" },
      { name: "Box Model", details: "<code>width</code>, <code>height</code>, <code>padding</code>, <code>border</code>, <code>margin</code>, <code>box-sizing: border-box</code>" },
      { name: "Flexbox", details: "<code>display: flex</code>, <code>justify-content</code>, <code>align-items</code>, <code>flex-direction</code>, <code>gap</code>" },
      { name: "Grid", details: "<code>display: grid</code>, <code>grid-template-columns</code>, <code>gap</code>, <code>grid-column: span X</code>" }
    ],
    bootstrap: [
      { name: "Grid", details: "<code>.container</code>, <code>.row</code>, <code>.col-*</code>, <code>.col-md-6</code>, <code>.g-3</code>" },
      { name: "Components", details: "<code>.btn</code>, <code>.card</code>, <code>.navbar</code>, <code>.alert</code>, <code>.badge</code>, <code>.modal</code>" },
      { name: "Utilities", details: "<code>.p-3</code>, <code>.mb-4</code>, <code>.text-center</code>, <code>.d-flex</code>, <code>.bg-primary</code>" }
    ],
    tailwind: [
      { name: "Layout & Spacing", details: "<code>tw-p-4</code>, <code>tw-m-2</code>, <code>tw-gap-4</code>, <code>tw-flex</code>, <code>tw-grid</code>, <code>tw-grid-cols-3</code>" },
      { name: "Colors & Typography", details: "<code>tw-bg-slate-900</code>, <code>tw-text-white</code>, <code>tw-text-xl</code>, <code>tw-font-bold</code>" },
      { name: "Variants", details: "<code>hover:tw-bg-indigo-600</code>, <code>focus:tw-ring-2</code>, <code>dark:tw-bg-slate-900</code>" }
    ],
    javascript: [
      { name: "Variables & Types", details: "<code>const</code>, <code>let</code>, <code>typeof</code>. Primitives: String, Number, Boolean, BigInt, Undefined, Null, Symbol." },
      { name: "Operators", details: "Strict equality: <code>===</code>, <code>!==</code>. Logical: <code>&&</code>, <code>||</code>, <code>!</code>. Ternary: <code>cond ? a : b</code>." },
      { name: "Array Methods", details: "<code>.push()</code>, <code>.pop()</code>, <code>.slice()</code>, <code>.splice()</code>, <code>.map()</code>, <code>.filter()</code>, <code>.reduce()</code>, <code>.find()</code>, <code>.includes()</code>" },
      { name: "Object Methods", details: "<code>Object.keys()</code>, <code>Object.values()</code>, <code>Object.entries()</code>, <code>JSON.stringify()</code>, <code>JSON.parse()</code>" },
      { name: "DOM Methods", details: "<code>document.getElementById()</code>, <code>document.querySelector()</code>, <code>.textContent</code>, <code>.classList.toggle()</code>, <code>.addEventListener()</code>" },
      { name: "ES6+ Features", details: "Arrow functions <code>() => {}</code>, Destructuring <code>const {a} = obj</code>, Spread <code>[...arr]</code>, Template literals <code>\`\${val}\`</code>, <code>async/await</code>" },
      { name: "Storage & Timing", details: "<code>localStorage.setItem(k, v)</code>, <code>localStorage.getItem(k)</code>, <code>setTimeout(fn, ms)</code>, <code>setInterval(fn, ms)</code>" }
    ]
  },

  interviewData: {
    html: {
      beginner: [
        { q: "What is HTML?", a: "HTML (HyperText Markup Language) is the standard markup language used to structure web pages.", explanation: "Browsers read HTML tags to construct the Document Object Model (DOM).", example: "<p>Paragraph</p>" },
        { q: "What are HTML attributes?", a: "Attributes provide extra configuration details to elements (e.g. href, src, id, class).", explanation: "They are defined in the opening tag.", example: "<a href='index.html'>Home</a>" }
      ],
      intermediate: [
        { q: "Why is Semantic HTML important?", a: "Semantic HTML uses meaningful tags (header, nav, article, main, footer) that clarify structure for screen readers and SEO crawlers.", explanation: "It boosts accessibility (a11y) and search rankings.", example: "<article><h2>Title</h2></article>" }
      ],
      advanced: [
        { q: "How do SVG and Canvas differ?", a: "SVG is vector-based XML in the DOM (CSS styleable, scalable). Canvas is a raster pixel grid drawn with scripts.", explanation: "Use SVG for icons and charts; Canvas for games.", example: "<svg><circle r='10'></svg>" }
      ]
    },
    css: {
      beginner: [
        { q: "What is the CSS Box Model?", a: "The Box Model consists of Content, Padding, Border, and Margin surrounding every element.", explanation: "Always set box-sizing: border-box to keep sizing predictable.", example: "div { padding: 10px; border: 1px solid black; }" }
      ],
      intermediate: [
        { q: "What is the difference between relative, absolute, and fixed position?", a: "Relative offsets from normal flow. Absolute offsets relative to the nearest positioned ancestor. Fixed offsets relative to the browser viewport.", explanation: "Absolute children anchor to relative parents.", example: ".parent { position: relative; } .child { position: absolute; }" }
      ],
      advanced: [
        { q: "How is CSS specificity calculated?", a: "Inline styles (1000) > ID (100) > Class/Attribute/Pseudo-class (10) > Element (1).", explanation: "Higher specificity rules take precedence over lower ones.", example: "#header (100) beats .title (10)." }
      ]
    },
    bootstrap: {
      beginner: [
        { q: "What is the Bootstrap Grid System?", a: "A 12-column mobile-first flexbox grid using containers, rows, and responsive column classes.", explanation: "Columns must be placed inside .row containers.", example: "<div class='row'><div class='col-6'>Half</div></div>" }
      ],
      intermediate: [
        { q: "How do Bootstrap responsive classes work?", a: "Bootstrap uses breakpoint suffixes (sm, md, lg, xl, xxl) based on media query min-widths.", explanation: "col-md-6 takes half width at 768px and above.", example: "<div class='col-12 col-md-6'>...</div>" }
      ],
      advanced: [
        { q: "How do you customize Bootstrap brand colors?", a: "By modifying CSS custom properties (variables) or overriding Sass maps ($primary) before compiling.", explanation: ":root { --bs-primary: #6366f1; }", example: ":root { --bs-primary: #6366f1; }" }
      ]
    },
    tailwind: {
      beginner: [
        { q: "What is utility-first CSS?", a: "Building custom designs by composing low-level utility classes directly in the HTML without writing custom stylesheets.", explanation: "Speeds up development and ensures consistency.", example: "<div class='tw-p-4 tw-bg-blue-600 tw-text-white'>...</div>" }
      ],
      intermediate: [
        { q: "How do hover and focus variants work in Tailwind?", a: "By prefixing utilities with state modifiers like hover: or focus:.", explanation: "hover:tw-bg-blue-700 changes background color on mouseover.", example: "<button class='tw-bg-blue-500 hover:tw-bg-blue-700'>Save</button>" }
      ],
      advanced: [
        { q: "What is Tailwind CSS Purging/Tree-shaking?", a: "The Tailwind compiler scans HTML files and extracts only the classes used, stripping out unused styles to keep the final CSS file tiny.", explanation: "Keeps production CSS file under 10-15KB.", example: "Compiles tw-p-4 if used, drops unused utilities." }
      ]
    },
    javascript: {
      beginner: [
        { q: "What is the difference between `var`, `let`, and `const`?", a: "`var` is function-scoped and hoisted with undefined. `let` is block-scoped and reassignable. `const` is block-scoped and cannot be reassigned.", explanation: "Modern JS uses `const` by default and `let` only when values change.", example: "const PI = 3.14; let counter = 0;" },
        { q: "What is the difference between `==` and `===`?", a: "`==` performs loose equality with type coercion (e.g. 5 == '5' is true). `===` performs strict equality checking both value and data type (5 === '5' is false).", explanation: "Always use strict equality `===` to prevent subtle bugs.", example: "5 === '5' // false, 5 == '5' // true" },
        { q: "What are the 7 primitive data types in JavaScript?", a: "String, Number, BigInt, Boolean, Undefined, Null, and Symbol.", explanation: "Primitives are immutable and passed by value; Objects are mutable and passed by reference.", example: "typeof 'Hello' // 'string', typeof 42 // 'number'" }
      ],
      intermediate: [
        { q: "What is a Closure in JavaScript?", a: "A closure is a function that remembers and accesses variables from its outer (lexical) scope even after the outer function has finished executing.", explanation: "Closures enable private variables and function factories.", example: "function outer() { let x = 10; return () => x; }" },
        { q: "What is Event Delegation?", a: "Attaching a single event listener to a parent container to manage events triggered by its present and future child elements using event bubbling and `e.target`.", explanation: "Saves memory and automatically handles dynamic elements.", example: "parent.addEventListener('click', e => { if (e.target.matches('li')) ... });" },
        { q: "What is the difference between `map()` and `forEach()`?", a: "`map()` transforms elements and returns a new array. `forEach()` iterates over the array for side effects and returns undefined.", explanation: "Use `map` when transforming data; use `forEach` for logging or DOM updates.", example: "const doubled = [1, 2].map(x => x * 2); // [2, 4]" }
      ],
      advanced: [
        { q: "Explain the JavaScript Event Loop.", a: "JavaScript is single-threaded. The Event Loop monitors the Call Stack and task queues. When the Call Stack is empty, it pushes tasks from the Microtask Queue (Promises) first, then tasks from the Callback Queue (setTimeout, DOM events) onto the stack.", explanation: "Microtasks always have higher priority than macrotasks.", example: "Promise.resolve().then(...) runs before setTimeout(..., 0)" },
        { q: "What is the difference between Promise and async/await?", a: "`Promise` is an object representing asynchronous completion handled with `.then()`/`.catch()`. `async/await` is syntactic sugar over Promises that allows writing asynchronous code in a clean, linear, synchronous-looking style with `try/catch`.", explanation: "async functions always return a Promise.", example: "const res = await fetch(url); const data = await res.json();" }
      ]
    }
  },

  examplesData: {
    html: [
      { title: "Basic Webpage", code: "<!DOCTYPE html>\n<html>\n<head><title>My Page</title></head>\n<body>\n    <h1>My Website</h1>\n    <p>A simple structure showing basic webpage outlines.</p>\n</body>\n</html>" },
      { title: "Registration Form", code: "<form action=\"/signup\" method=\"POST\">\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" id=\"name\" required>\n    <button type=\"submit\">Sign Up</button>\n</form>" }
    ],
    css: [
      { title: "Custom Action Button", code: ".custom-btn {\n    background-color: #4f46e5;\n    color: white;\n    padding: 10px 20px;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n}" },
      { title: "Flexbox Centering", code: ".center-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 200px;\n}" }
    ],
    bootstrap: [
      { title: "Bootstrap Product Card", code: "<div class=\"card shadow-sm\" style=\"width: 18rem;\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Product Card</h5>\n        <p class=\"card-text\">Pre-styled Bootstrap component.</p>\n        <button class=\"btn btn-primary btn-sm\">Buy Now</button>\n    </div>\n</div>" }
    ],
    tailwind: [
      { title: "Custom Action Button", code: "<button class=\"tw-bg-indigo-600 hover:tw-bg-indigo-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded\">\n    Action Button\n</button>" }
    ],
    javascript: [
      { title: "Interactive Counter", code: "let count = 0;\nconst display = document.getElementById('count');\ndocument.getElementById('inc').addEventListener('click', () => {\n  count++;\n  display.textContent = count;\n});" },
      { title: "Filter Even Numbers", code: "const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst evens = numbers.filter(num => num % 2 === 0);\nconsole.log(evens); // [2, 4, 6, 8, 10]" },
      { title: "Async Data Fetch Simulation", code: "async function getUserData() {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');\n    const user = await response.json();\n    console.log(`User: ${user.name} (${user.email})`);\n  } catch (error) {\n    console.error('Fetch failed:', error);\n  }\n}" },
      { title: "LocalStorage Theme Saver", code: "function toggleTheme(theme) {\n  localStorage.setItem('theme', theme);\n  document.body.className = theme;\n}\nconst savedTheme = localStorage.getItem('theme') || 'light';\ndocument.body.className = savedTheme;" }
    ]
  },

  practiceData: {
    html: [
      { title: "Add Heading and Paragraph", difficulty: "Beginner", q: "Create an h1 title named 'Tutorials' and a descriptive paragraph under it.", starter: "<!-- Add tags below -->", solution: "<h1>Tutorials</h1>\n<p>Learn core HTML components here.</p>", hint: "Wrap header in <h1> and paragraph in <p>." }
    ],
    css: [
      { title: "Custom Hover Action", difficulty: "Beginner", q: "Create a selector '.link-act' that turns text red on hover.", starter: ".link-act { color: blue; }", solution: ".link-act:hover { color: red; text-decoration: underline; }", hint: "Use pseudo-class :hover." }
    ],
    bootstrap: [
      { title: "Responsive Columns Stack", difficulty: "Intermediate", q: "Create a 2-column grid that stacks on mobile and splits on desktop (md).", starter: "<div class=\"row\"></div>", solution: "<div class=\"row\">\n  <div class=\"col-12 col-md-6\">Col 1</div>\n  <div class=\"col-12 col-md-6\">Col 2</div>\n</div>", hint: "Use col-12 col-md-6." }
    ],
    tailwind: [
      { title: "Hover Button Glow", difficulty: "Intermediate", q: "Apply black background and blue hover background with Tailwind.", starter: "<button class=\"/* classes */\">Apply</button>", solution: "<button class=\"tw-bg-black hover:tw-bg-blue-600 tw-text-white tw-p-2 tw-rounded\">Apply</button>", hint: "Use tw-bg-black hover:tw-bg-blue-600." }
    ],
    javascript: [
      { title: "Check Even or Odd Function", difficulty: "Beginner", q: "Write a function `isEven(n)` that returns true if a number is even, false otherwise.", starter: "function isEven(n) {\n  // Write logic here\n}", solution: "function isEven(n) {\n  return n % 2 === 0;\n}", hint: "Use the modulus operator: `return n % 2 === 0;`." },
      { title: "Find Largest in Array", difficulty: "Intermediate", q: "Write a function `findMax(arr)` that returns the largest number in an array.", starter: "function findMax(arr) {\n  // Write logic here\n}", solution: "function findMax(arr) {\n  return Math.max(...arr);\n}", hint: "Use `Math.max(...arr)` or loop through array elements." },
      { title: "Count Vowels in String", difficulty: "Intermediate", q: "Write a function `countVowels(str)` that counts all vowels (a, e, i, o, u) in a string.", starter: "function countVowels(str) {\n  // Count vowels\n}", solution: "function countVowels(str) {\n  const vowels = 'aeiouAEIOU';\n  return [...str].filter(char => vowels.includes(char)).length;\n}", hint: "Convert string to array and filter with `vowels.includes(char)`." }
    ]
  },

  projectsData: {
    html: [
      { title: "Personal Profile", difficulty: "Beginner", tech: "HTML5", obj: "Create a basic profile outline featuring sections for bio, skills, and contact forms.", req: ["Use header and footer semantics", "Include profile image with alt tag", "Create simple email contact link"], starter: "<!-- Profile template skeleton -->", result: "A clean personal landing layout.", solution: "<!DOCTYPE html>\n<html>\n<head><title>My Profile</title></head>\n<body>\n    <header><h1>John Doe</h1></header>\n    <main><p>Junior Web Developer</p></main>\n    <footer><p>Contact: john@example.com</p></footer>\n</body>\n</html>" }
    ],
    css: [
      { title: "Login Page Layout", difficulty: "Intermediate", tech: "HTML5 / CSS3", obj: "Style a centered login input block with shadows, border-radius, and smooth button transitions.", req: ["Use Box model", "Center vertically and horizontally", "Smooth hover transitions"], starter: "/* Login styling */", result: "A centered responsive login portal.", solution: ".login-wrap {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    background-color: #f1f5f9;\n}" }
    ],
    bootstrap: [
      { title: "Job Portal Dashboard", difficulty: "Advanced", tech: "Bootstrap 5", obj: "Create a job portal homepage with navbars, 12-column grid, search filters, and cards.", req: ["Bootstrap Navbar", "12-column grid", "Badge and alert tags"], starter: "<!-- Dashboard layout -->", result: "A responsive job portal dashboard.", solution: "<div class=\"container mt-4\">\n    <div class=\"row\">\n        <div class=\"col-md-4\"><div class=\"card p-3\">Filter Jobs</div></div>\n        <div class=\"col-md-8\"><div class=\"card p-3\">Job Listings</div></div>\n    </div>\n</div>" }
    ],
    tailwind: [
      { title: "Modern SaaS Landing Page", difficulty: "Advanced", tech: "Tailwind CSS", obj: "Build a modern SaaS landing page with dark mode, features grid, and state variant buttons.", req: ["Tailwind utility classes", "Responsive breakpoints", "Dark mode classes"], starter: "<!-- SaaS template -->", result: "A modern SaaS landing page.", solution: "<div class=\"tw-bg-slate-950 tw-text-white tw-min-h-screen tw-p-8\">\n    <h1 class=\"tw-text-4xl tw-font-bold\">Deploy Instantly</h1>\n</div>" }
    ],
    javascript: [
      { title: "Interactive Calculator", difficulty: "Intermediate", tech: "HTML5 / CSS3 / JavaScript", obj: "Build an interactive digital calculator supporting addition, subtraction, multiplication, division, and clear screen operations.", req: ["Clean button grid layout", "Event listeners for number and operator clicks", "Live calculation display screen"], starter: "<!-- Calculator UI and Script -->", result: "A working interactive calculator component.", solution: "<div id=\"calc\" class=\"p-3 bg-dark text-white rounded\" style=\"max-width: 260px;\">\n  <input type=\"text\" id=\"calc-screen\" class=\"form-control mb-2 text-end\" readonly value=\"0\">\n  <div class=\"d-grid gap-2\" style=\"grid-template-columns: repeat(4, 1fr);\">\n    <button class=\"btn btn-secondary\" onclick=\"press('7')\">7</button>\n    <button class=\"btn btn-secondary\" onclick=\"press('8')\">8</button>\n    <button class=\"btn btn-secondary\" onclick=\"press('9')\">9</button>\n    <button class=\"btn btn-warning\" onclick=\"press('/')\">/</button>\n    <button class=\"btn btn-danger\" onclick=\"clearCalc()\">C</button>\n    <button class=\"btn btn-secondary\" onclick=\"press('0')\">0</button>\n    <button class=\"btn btn-success\" onclick=\"calculate()\">=</button>\n    <button class=\"btn btn-warning\" onclick=\"press('+')\">+</button>\n  </div>\n</div>\n<script>\nlet exp = '';\nfunction press(v) { exp += v; document.getElementById('calc-screen').value = exp; }\nfunction clearCalc() { exp = ''; document.getElementById('calc-screen').value = '0'; }\nfunction calculate() { try { exp = String(eval(exp)); document.getElementById('calc-screen').value = exp; } catch(e) { document.getElementById('calc-screen').value = 'Error'; } }\n</script>" },
      { title: "Dynamic Task Manager (Todo App)", difficulty: "Advanced", tech: "HTML5 / Tailwind / JavaScript", obj: "Build a dynamic task manager where users can add new tasks, toggle task completion with strike-through styling, delete tasks, and persist them in LocalStorage.", req: ["DOM creation and manipulation", "Event delegation for task actions", "LocalStorage JSON persistence"], starter: "<!-- Todo App Container -->", result: "A full persistent todo application.", solution: "<div class=\"tw-max-w-md tw-mx-auto tw-p-6 tw-bg-white tw-rounded-xl tw-shadow-md\">\n  <h3 class=\"tw-text-xl tw-font-bold tw-mb-4\">Task Manager</h3>\n  <div class=\"tw-flex tw-gap-2 tw-mb-4\">\n    <input type=\"text\" id=\"task-in\" class=\"tw-border tw-p-2 tw-flex-1 tw-rounded\" placeholder=\"Add task...\">\n    <button id=\"add-task-btn\" class=\"tw-bg-indigo-600 tw-text-white tw-px-4 tw-rounded tw-font-bold\">Add</button>\n  </div>\n  <ul id=\"task-list\" class=\"tw-space-y-2\"></ul>\n</div>" }
    ]
  },

  quizzesData: {
    html: {
      beginner: [
        { q: "What does HTML stand for?", a: "Hyper Text Markup Language", b: "Home Tool Markup Language", c: "Hyperlinks and Text Markup Language", d: "Hyper Tool Markup Language", correct: "A", explanation: "HTML stands for Hyper Text Markup Language. It is the standard language for structuring web pages.", difficulty: "Beginner" },
        { q: "What is the character encoding standard for HTML5?", a: "UTF-8", b: "UTF-16", c: "ISO-8859-1", d: "ASCII", correct: "A", explanation: "UTF-8 is the default character encoding standard in HTML5, supporting almost all characters in the world.", difficulty: "Beginner" }
      ],
      intermediate: [
        { q: "Which HTML5 element is used to display a self-contained content card like a blog post?", a: "<section>", b: "<article>", c: "<aside>", d: "<div>", correct: "B", explanation: "<article> is used for independent, self-contained compositions.", difficulty: "Intermediate" }
      ],
      advanced: [
        { q: "How do SVG graphics differ from Canvas graphics?", a: "Canvas is vector-based; SVG is raster-based", b: "SVG is XML-based in the DOM; Canvas is a script-drawn raster grid", c: "SVG cannot be styled with CSS", d: "Canvas has better accessibility", correct: "B", explanation: "SVG elements are nodes in the DOM; Canvas is a bitmap pixel surface drawn via JavaScript.", difficulty: "Advanced" }
      ]
    },
    css: {
      beginner: [
        { q: "Which property is used to change the background color in CSS?", a: "color", b: "background-color", c: "bgcolor", d: "canvas-color", correct: "B", explanation: "background-color sets the background color of element boxes.", difficulty: "Beginner" }
      ],
      intermediate: [
        { q: "What is the specificity weight score of a Class selector?", a: "1", b: "10", c: "100", d: "1000", correct: "B", explanation: "In CSS specificity, element tags have weight 1, classes have weight 10, IDs have weight 100, and inline styles have weight 1000.", difficulty: "Intermediate" }
      ],
      advanced: [
        { q: "How do you apply hardware-accelerated animations in CSS?", a: "Use margins and width alterations", b: "Use transform translate and opacity properties", c: "Use !important tags", d: "Use float positions", correct: "B", explanation: "Transforms (translate, scale, rotate) and opacity run in the compositor layer of browser rendering, utilizing GPU hardware acceleration.", difficulty: "Advanced" }
      ]
    },
    bootstrap: [
      { q: "What is the maximum number of grid columns Bootstrap supports per row?", a: "6", b: "10", c: "12", d: "16", correct: "C", explanation: "Bootstrap divides the page width into a 12-column grid row layout.", difficulty: "Standard" }
    ],
    tailwind: [
      { q: "What class variant is used to apply styles in dark mode in Tailwind CSS?", a: "dark-theme:", b: "theme-dark:", c: "dark:", d: "night-mode:", correct: "C", explanation: "Tailwind uses the 'dark:' variant prefix (e.g. dark:tw-bg-slate-900) to apply dark theme styles.", difficulty: "Standard" }
    ],
    javascript: [
      { q: "Which keyword declares a block-scoped variable that CANNOT be reassigned?", a: "var", b: "let", c: "const", d: "static", correct: "C", explanation: "`const` declares a block-scoped constant whose identifier reference cannot be reassigned.", difficulty: "Beginner" },
      { q: "What is the result of `typeof null` in JavaScript?", a: "'null'", b: "'undefined'", c: "'object'", d: "'number'", correct: "C", explanation: "`typeof null` returns `'object'` due to an original legacy implementation in the first version of JavaScript.", difficulty: "Beginner" },
      { q: "What will `5 + '5'` and `5 - '5'` evaluate to in JavaScript?", a: "10 and 0", b: "'55' and 0", c: "'55' and NaN", d: "10 and '55'", correct: "B", explanation: "The `+` operator performs string concatenation when one operand is a string ('55'), while the `-` operator performs numeric subtraction (5 - 5 = 0).", difficulty: "Intermediate" },
      { q: "Which array method creates a NEW array with all elements that pass a test condition?", a: "forEach()", b: "filter()", c: "map()", d: "reduce()", correct: "B", explanation: "`filter()` returns a new array containing all elements for which the callback returns true.", difficulty: "Intermediate" },
      { q: "What does the `JSON.stringify()` method do?", a: "Converts a JSON string to a JS object", b: "Converts a JavaScript object to a JSON string", c: "Validates a JSON schema", d: "Fetches JSON data from a server", correct: "B", explanation: "`JSON.stringify()` serializes a JavaScript object into a JSON formatted string.", difficulty: "Intermediate" },
      { q: "What is the output of `console.log(0.1 + 0.2 === 0.3)` in JavaScript?", a: "true", b: "false", c: "undefined", d: "TypeError", correct: "B", explanation: "Due to IEEE 754 binary floating-point representation, `0.1 + 0.2` equals `0.30000000000000004`, which is not strictly equal to `0.3`.", difficulty: "Advanced" }
    ],
    final: [
      { q: "Which framework uses utility classes like tw-p-4 and tw-bg-blue-500?", a: "Bootstrap 5", b: "Tailwind CSS", c: "Custom CSS3", d: "HTML5 Layouts", correct: "B", explanation: "Tailwind CSS is a utility-first framework that uses single-purpose classes to style elements directly in HTML.", difficulty: "Mixed" },
      { q: "Which method is used to attach an event listener safely in JavaScript?", a: "attachEvent()", b: "addEventListener()", c: "listen()", d: "on()", correct: "B", explanation: "`addEventListener()` attaches an event handler function to an element without overwriting existing handlers.", difficulty: "Mixed" }
    ]
  },

  comparisonData: [
    { term1: "HTML5", term2: "CSS3", purpose: "Structures webpage content vs visual presentation styling", diff: "Easy", advantages: "Semantic markup, accessibility, SEO", limitations: "No visual styling by default", whenToUse: "Always (foundation of every web document)" },
    { term1: "CSS3", term2: "JavaScript", purpose: "Visual styling & animations vs interactive logic & data handling", diff: "Medium", advantages: "Hardware-accelerated CSS rendering vs Turing-complete JS logic", limitations: "CSS cannot handle logic/data; JS has execution overhead", whenToUse: "Use CSS for styles/animations; use JS for interactivity, DOM, and APIs" },
    { term1: "Bootstrap 5", term2: "Tailwind CSS", purpose: "Pre-styled component layouts vs low-level utility composition", diff: "Easy", advantages: "Rapid prototyping with pre-built cards/navbars vs total design freedom", limitations: "Bootstrap sites can look generic; Tailwind HTML can become verbose", whenToUse: "Bootstrap for dashboards/prototypes; Tailwind for custom web apps/SaaS" },
    { term1: "var", term2: "let & const", purpose: "Legacy function-scoped variables vs modern block-scoped bindings", diff: "Easy", advantages: "let/const prevent scope leaking and temporal dead zone bugs", limitations: "var hoists with undefined causing silent bugs", whenToUse: "Always use const by default, let when reassignment is needed; never use var" },
    { term1: "== (Loose)", term2: "=== (Strict)", purpose: "Loose equality with coercion vs strict value and type checking", diff: "Easy", advantages: "=== is predictable, fast, and eliminates unexpected coercion bugs", limitations: "== coerces types leading to counterintuitive truths ('' == 0)", whenToUse: "Always use strict equality (===)" }
  ],

  linkedinTemplates: [
    {
      day: "Day 1 — Web Basics & HTML5",
      title: "Starting the Full Stack Journey 🚀",
      content: `Today I started my Java Full Stack journey! I completed Web Basics and HTML5.

Key Topics:
- Client-Server Architecture (Browser to Server flow)
- Semantic HTML5 structure (<header>, <main>, <footer>)
- Accessible Forms (<label for="id"> and inputs validation)

Key Takeaway:
HTML provides the structural skeleton. Getting accessibility and semantics right is the foundation of clean frontend code.

#HTML5 #WebBasics #FullStack #WebDevelopment #Frontend #LearningJourney`,
      hashtags: "#HTML5 #WebBasics #FullStack #WebDevelopment"
    },
    {
      day: "Day 10 — CSS3 Styling",
      title: "Mastering the CSS Box Model 📦",
      content: `Today I completed CSS3 layouts and styled my first design cards!

Key Topics:
- The CSS Box Model (Content, Padding, Border, Margin)
- Specificity calculations (Tag vs Class vs ID selectors)
- Transitions & Transforms (Smooth hover state animations)

Key Takeaway:
Setting box-sizing: border-box is a life-saver for keeping widths predictable!

#CSS3 #BoxModel #WebDesign #FrontendDevelopment #Coding`,
      hashtags: "#CSS3 #BoxModel #WebDesign"
    },
    {
      day: "Day 20 — Bootstrap & Tailwind CSS",
      title: "Utility-First vs Components 🛠️",
      content: `Today I compared Bootstrap 5 component frameworks and Tailwind CSS utility-first styling!

Key Topics:
- Bootstrap responsive rows (.row, .col-md-6)
- Tailwind utility composition (bg-slate-900 px-4 py-2 rounded)
- Preventing framework conflict using prefixes

Key Takeaway:
Bootstrap is incredibly fast for standard layouts; Tailwind gives absolute design freedom directly in the HTML markup.

#Bootstrap #TailwindCSS #CSSFrameworks #WebDev #UIUX`,
      hashtags: "#Bootstrap #TailwindCSS #CSSFrameworks"
    },
    {
      day: "Day 30 — JavaScript Fundamentals ⚡",
      title: "Diving into Modern JavaScript (ES6+)",
      content: `Today I completed core JavaScript fundamentals and modern ES6+ features!

Key Topics:
- Scope & Variables (var vs let vs const, TDZ, Hoisting)
- Operators & Strict Equality (== vs === deep dive)
- Higher-Order Array Methods (map, filter, reduce)
- DOM Manipulation & Event Listeners

Key Takeaway:
JavaScript turns static web documents into interactive, dynamic applications!

#JavaScript #ES6 #FrontendDevelopment #WebDevelopment #CodingJourney #100DaysOfCode`,
      hashtags: "#JavaScript #ES6 #FrontendDevelopment #WebDevelopment"
    },
    {
      day: "Day 40 — JavaScript Logic & Problem Solving 🧠",
      title: "Solved the Logical 10 JavaScript Problem Suite!",
      content: `Today I built and solved 10 fundamental JavaScript logic problems from scratch!

Top Problems Solved:
1. Palindrome String Verification (Two-pointer O(N))
2. Prime Number Detection (Optimized O(sqrt(N)))
3. Fibonacci Sequence Generation
4. Digit Summation & String Reversals
5. Array Max & Vowel Counter

Key Takeaway:
Breaking down algorithmic problems into step-by-step pseudo-code makes complex logic simple to implement and test.

#JavaScript #DataStructures #Algorithms #ProblemSolving #Coding #LogicBuilding`,
      hashtags: "#JavaScript #DataStructures #Algorithms #ProblemSolving"
    }
  ]
};

module.exports = extras;
