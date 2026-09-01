// Script to build data/extras.js by combining old content and new V1 requirements
const fs = require('fs');
const path = require('path');
const oldContent = require('./content.js');

// 1. Define New Quizzes Data
const quizzesData = {
  html: {
    beginner: [
      { q: "What does HTML stand for?", a: "Hyper Text Markup Language", b: "Home Tool Markup Language", c: "Hyperlinks and Text Markup Language", d: "Hyper Tool Markup Language", correct: "A", explanation: "HTML stands for Hyper Text Markup Language. It is the standard language for structuring web pages.", difficulty: "Beginner" },
      { q: "Who is the character encoding standard for HTML5?", a: "UTF-8", b: "UTF-16", c: "ISO-8859-1", d: "ASCII", correct: "A", explanation: "UTF-8 is the default character encoding standard in HTML5, supporting almost all characters in the world.", difficulty: "Beginner" }
    ],
    intermediate: [
      { q: "Which HTML5 element is used to display a self-contained content card like a blog post?", a: "<section>", b: "<article>", c: "<aside>", d: "<div>", correct: "B", explanation: "<article> is used for independent, self-contained compositions that can be distributed or reused dynamically.", difficulty: "Intermediate" }
    ],
    advanced: [
      { q: "How do SVG graphics differ from Canvas graphics?", a: "Canvas is vector-based; SVG is raster-based", b: "SVG is XML-based and part of the DOM; Canvas is a script-drawn raster grid", c: "SVG cannot be styled with CSS", d: "Canvas has better accessibility", correct: "B", explanation: "SVG is vector-based XML, so every circle or path is a DOM node. Canvas is a blank pixel grid drawn using programming scripts.", difficulty: "Advanced" }
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
      { q: "How do you apply hardware-accelerated animations in CSS?", a: "Use margins and width alterations", b: "Use transform translate and opacity properties", c: "Use !important tags", d: "Use float positions", correct: "B", explanation: "Transforms (translate, scale, rotate) and opacity run in the compositor layer of browser rendering, utilizing GPU hardware acceleration for smooth 60fps animations.", difficulty: "Advanced" }
    ]
  },
  bootstrap: [
    { q: "What is the maximum number of grid columns Bootstrap supports per row?", a: "6", b: "10", c: "12", d: "16", correct: "C", explanation: "Bootstrap divides the page width into a 12-column grid row layout.", difficulty: "Standard" }
  ],
  tailwind: [
    { q: "What class variant is used to apply styles in dark mode in Tailwind CSS?", a: "dark-theme:", b: "theme-dark:", c: "dark:", d: "night-mode:", correct: "C", explanation: "Tailwind uses the 'dark:' variant prefix (e.g. dark:tw-bg-slate-900) to apply dark theme styles.", difficulty: "Standard" }
  ],
  final: [
    { q: "Which framework uses utility classes like tw-p-4 and tw-bg-blue-500?", a: "Bootstrap 5", b: "Tailwind CSS", c: "Custom CSS3", d: "HTML5 Layouts", correct: "B", explanation: "Tailwind CSS is a utility-first framework that uses single-purpose classes to style elements directly in HTML.", difficulty: "Mixed" }
  ]
};

// 2. Define Comparison Data
const comparisonData = [
  { term1: "HTML5", term2: "CSS3", purpose: "Structures webpage content and semantic outlines", diff: "Easy", advantages: "Search engine friendly, standardized, native media support", limitations: "No visual styling, dry look by default", whenToUse: "Always (defines the document layout base)" },
  { term1: "CSS3", term2: "Bootstrap 5", purpose: "Custom styling, animations, and typography control", diff: "Medium", advantages: "100% design control, small files sizes, cached sheets", limitations: "Requires writing styles from scratch, layout bugs on cross-browser sizes", whenToUse: "Custom UI projects and unique portfolios" },
  { term1: "Bootstrap 5", term2: "Tailwind CSS", purpose: "Pre-styled component responsive layouts", diff: "Easy", advantages: "Fast prototyping, pre-styled buttons/cards, active drawer systems", limitations: "Harder to customize, creates standard templates that look similar", whenToUse: "Admin panels and rapid prototypes" },
  { term1: "Tailwind CSS", term2: "Custom CSS3", purpose: "Utility-first CSS styling inside markup tags", diff: "Medium", advantages: "No custom class naming, compile-time purging, unique look", limitations: "Cluttered HTML, steeper initial learning curves", whenToUse: "SaaS projects and modern responsive web layouts" }
];

// 3. Define LinkedIn Learning Post Templates
const linkedinTemplates = [
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
  }
];

// 4. Extract and expand Articles (add 15th article: "How a Browser Loads a Webpage")
const articles = [...oldContent.articlesData];
if (!articles.some(a => a.id === "browser-load-explained")) {
  articles.push({
    id: "browser-load-explained",
    title: "How a Browser Loads a Webpage",
    category: "Web Basics",
    desc: "Dive deep into the browser rendering pipeline, exploring DNS lookup, DOM compilation, CSSOM blocks, and painting pixels.",
    content: `
      <p class="lead">Have you ever wondered what happens behind the scenes when you type a URL like 'weblearnhub.com' in your browser? Let's trace the journey from key press to painted screen.</p>
      
      <h4>1. The DNS Lookup</h4>
      <p>Computers locate each other using numbers called IP addresses. Since humans cannot remember numbers like <code>142.250.190.46</code>, we use domain names (like <code>google.com</code>). The browser queries a <strong>Domain Name System (DNS)</strong> server to translate the domain into the target IP address.</p>
      
      <h4>2. The TCP Handshake and HTTP Request</h4>
      <p>Once the IP is resolved, the browser establishes a secure connection with the server (TCP handshake) and transmits an <strong>HTTP GET Request</strong>, asking for the website files.</p>
      
      <h4>3. Parsing the HTML (DOM Tree)</h4>
      <p>The server sends back the HTML document. The browser reads the markup top-down, parsing tags and assembling them into a hierarchical tree structure called the <strong>Document Object Model (DOM)</strong>.</p>
      
      <h4>4. Parsing Styles (CSSOM Tree)</h4>
      <p>When the parser encounters link tags, it downloads stylesheet files. The browser parses CSS declarations to construct the <strong>CSS Object Model (CSSOM)</strong> tree.</p>
      
      <h4>5. Drawing (The Paint stage)</h4>
      <p>The browser combines the DOM and CSSOM trees into a <strong>Render Tree</strong>. It calculates positions for all visible nodes, and paints the final pixels on your viewport screen.</p>
    `
  });
}

// 5. Combine and Write to data/extras.js
const extrasData = {
  articlesData: articles,
  cheatSheetsData: oldContent.cheatSheetsData,
  interviewData: oldContent.interviewData,
  examplesData: oldContent.examplesData,
  practiceData: oldContent.practiceData,
  projectsData: oldContent.projectsData,
  quizzesData,
  comparisonData,
  linkedinTemplates
};

const fileCode = `// Extra curriculum data structures (quizzes, articles, etc.)
const extras = ${JSON.stringify(extrasData, null, 2)};

module.exports = extras;
`;

fs.writeFileSync(path.join(__dirname, 'data', 'extras.js'), fileCode);
console.log("Extras file compiled successfully at data/extras.js!");
