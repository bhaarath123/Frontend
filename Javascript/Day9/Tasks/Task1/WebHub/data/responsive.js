// Responsive Design Module Curriculum

const responsiveLessons = [
  {
    id: "mobile-first",
    title: "Mobile-First Design",
    what: "Mobile-First Design is a design philosophy and development strategy where you create the default layout for the smallest screen size (mobile phones) first, and then layer on styling enhancements as the viewport gets wider (using min-width media queries).",
    why: "Mobile traffic represents over 50% of web visits. Coding mobile layouts as the default yields cleaner code, faster page loads on mobile networks, and prevents complex desktop-style overrides.",
    syntax: `/* Mobile Default Styles (No Media Query) */
.element {
  width: 100%;
}

/* Tablet/Desktop Overrides */
@media (min-width: 768px) {
  .element {
    width: 50%;
  }
}`,
    exampleHTML: `<div class="responsive-box">
  <p>Default: Full-width on mobile. Enhanced: Columns on desktop.</p>
</div>`,
    exampleCSS: `.responsive-box {
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.375rem;
  width: 100%; /* Mobile default */
}
@media (min-width: 768px) {
  .responsive-box {
    width: 50%; /* Tablet/Desktop sizing */
    margin: 0 auto;
  }
}`,
    renderedOutput: `<div style="font-family: sans-serif; padding: 1rem; background-color: #f3f4f6; border-radius: 0.375rem; max-width: 320px; margin: 0 auto; text-align: center;">
  <p style="margin: 0; font-size: 13px; color: #4b5563;">Mobile Default: Full-width box</p>
</div>`,
    explanation: [
      "width: 100%: The default width for mobile displays, ensuring content stays within the viewport.",
      "@media (min-width: 768px): The media query trigger that activates on viewports 768px and wider.",
      "width: 50%: The layout refinement for desktop viewports, restricting width to prevent text from stretching too wide."
    ],
    importantPoints: [
      "Mobile-First CSS utilizes min-width media queries.",
      "Desktop-First CSS utilizes max-width media queries (not recommended as standard).",
      "Mobile layouts are simpler; starting simple yields fewer lines of layout code."
    ],
    commonMistakes: [
      "Designing for desktop first and writing complex max-width overrides, leading to convoluted and buggy CSS files.",
      "Forgetting the viewport meta tag, which prevents mobile browsers from executing media queries."
    ],
    bestPractices: [
      "Prioritize essential content on mobile screens; hide non-essential elements using display utilities.",
      "Use fluid grids (percentages, fr units) instead of hardcoded pixels for width."
    ],
    realWorld: "Production frameworks (like Tailwind CSS and Bootstrap) use mobile-first rules. In Tailwind, writing 'tw-w-full md:tw-w-1/2' translates directly to mobile-first styles.",
    practice: {
      question: "Write mobile-first CSS rules for a class '.menu-item' so it displays stacked in column block on mobile, but turns into a row list on viewports 992px and wider.",
      objective: "Apply min-width responsive overrides.",
      instructions: "Use flex layout with direction properties inside media queries.",
      starterCode: `.menu-item {
  display: flex;
  /* Mobile default stack */
}`,
      expectedOutput: "A responsive flex container that transitions direction on desktop.",
      hint: "Use flex-direction: column as mobile default, and flex-direction: row inside @media (min-width: 992px).",
      solution: `.menu-item {
  display: flex;
  flex-direction: column;
}
@media (min-width: 992px) {
  .menu-item {
    flex-direction: row;
  }
}`
    },
    interview: {
      question: "Why are min-width media queries preferred over max-width in responsive design?",
      answer: "Min-width media queries align with the mobile-first strategy. Since mobile styles are simpler, writing them as the default reduces the need to override styles. Using max-width queries forces the browser to load desktop styles first and then override/cancel them for mobile, creating bloated and harder-to-maintain CSS stylesheets.",
      explanation: "Min-width builds up layouts from simple to complex; max-width strips down complex layouts to fit small screens.",
      example: "Min-width: simple defaults, clean scale-up. Max-width: complex defaults, messy overrides."
    },
    revision: "Mobile-First design builds the core page styles for mobile viewports as the base, and refines them for larger screens using min-width media queries."
  },
  {
    id: "responsive-layouts",
    title: "Responsive Layout Systems",
    what: "Responsive Layout Systems organize columns and containers fluidly on the page. Using Flexbox, CSS Grid, and fluid percentage widths, layouts shift columns depending on the available screen space.",
    why: "Fixed layouts break on different monitors. A responsive layout system ensures that a 4-column product grid adapts to 2 columns on tablets and a single column on phones.",
    syntax: `/* Responsive Grid Layout */
.grid-container {
  display: grid;
  grid-template-columns: 1fr; /* 1 col on mobile */
  gap: 16px;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* 2 cols on tablet */
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr); /* 4 cols on desktop */
  }
}`,
    exampleHTML: `<div class="responsive-grid">
  <div class="grid-card">Item A</div>
  <div class="grid-card">Item B</div>
</div>`,
    exampleCSS: `.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: 1fr 1fr;
  }
}
.grid-card {
  background: #6366f1;
  color: white;
  padding: 15px;
  text-align: center;
  border-radius: 4px;
}`,
    renderedOutput: `<div style="font-family: sans-serif; display: grid; grid-template-columns: 1fr; gap: 8px;">
  <div style="background: #6366f1; color: white; padding: 8px; border-radius: 4px; text-align: center; font-size: 12px; font-weight: bold;">Grid Item 1</div>
  <div style="background: #6366f1; color: white; padding: 8px; border-radius: 4px; text-align: center; font-size: 12px; font-weight: bold;">Grid Item 2</div>
</div>`,
    explanation: [
      "grid-template-columns: 1fr: Default layout configuration, displaying a single column.",
      "grid-template-columns: repeat(2, 1fr): Splitting the grid evenly when the media query triggers on tablets."
    ],
    importantPoints: [
      "Use CSS Grid for page frameworks and product card grids.",
      "Use Flexbox for one-dimensional components (navbars, list tabs).",
      "Avoid using hardcoded float properties for layouts."
    ],
    commonMistakes: [
      "Setting fixed pixel heights on grid cards, which causes text overflow when content wraps on small screens.",
      "Mixing Flexbox and Grid rules on the same container node."
    ],
    bestPractices: [
      "Use the 'fr' (fractional) unit or percentages for fluid column sizing.",
      "Combine grid with auto-fit/minmax parameters for container layouts without media queries."
    ],
    realWorld: "E-commerce sites display catalog grids (image, name, cost) that automatically scale columns from 1 (mobile) to 4 (wide screen) to fit the customer's display.",
    practice: {
      question: "Write CSS Grid rules using minmax parameters so that columns adjust automatically without media queries, keeping a minimum cell width of 250px.",
      objective: "Create media-query-free grids.",
      instructions: "Combine repeat, auto-fit, and minmax.",
      starterCode: `.auto-grid {
  display: grid;
  /* Add rules */
}`,
      expectedOutput: "A responsive grid system that wraps cells dynamically.",
      hint: "Use grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)).",
      solution: `.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}`
    },
    interview: {
      question: "How does repeat(auto-fit, minmax(200px, 1fr)) work in CSS Grid?",
      answer: "This class instructs the grid to create columns automatically. It calculates how many columns of at least 200px width can fit inside the container. If there is extra space, it distributes it equally among the columns (using 1fr). If space drops, it wraps columns to a new row.",
      explanation: "This allows responsive columns to wrap naturally without using media queries.",
      example: "Container 600px wide fits 3 columns (200px each). Container 400px wide wraps to 2 columns."
    },
    revision: "Responsive layouts utilize CSS Grid and Flexbox with fractional sizing to adjust columns dynamically across mobile, tablet, and desktop viewports."
  },
  {
    id: "media-queries",
    title: "Media Queries & Breakpoints",
    what: "Media Queries are CSS3 rules that let you apply styles only when conditions like screen width match. Breakpoints are the specific screen width thresholds where layout configurations shift.",
    why: "Different devices have different dimensions. Breakpoints specify where navigation links hide into hamburgers or cards change dimensions to maintain usability.",
    syntax: `/* Common Media Queries Structure */
@media (min-width: 576px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 992px) { /* lg */ }
@media (min-width: 1200px) { /* xl */ }`,
    exampleHTML: `<div class="breakpoint-indicator">
  <span class="d-mobile">Mobile View</span>
  <span class="d-desktop">Desktop View</span>
</div>`,
    exampleCSS: `.d-desktop { display: none; }
.d-mobile { display: inline; }

@media (min-width: 768px) {
  .d-desktop { display: inline; }
  .d-mobile { display: none; }
}`,
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px; background-color: #ffe4e6; text-align: center; border-radius: 4px;">
  <span style="color: #9f1239; font-weight: bold; font-size: 13px;">Breakpoint Indicator (Resizes fluidly)</span>
</div>`,
    explanation: [
      "display: none: Hides the targeted element in default (mobile) viewports.",
      "@media (min-width: 768px): The breakpoint boundary representing tablet screens.",
      "display: inline: Displays the desktop element and overrides the previous display settings."
    ],
    importantPoints: [
      "Always include `only screen` or media criteria parameters where appropriate.",
      "Standard breakpoints are based on popular device viewport categories (Mobile, Tablet, Laptop, Desktop).",
      "CSS rules inside media queries inherit properties from the parent styles unless overridden."
    ],
    commonMistakes: [
      "Using custom, arbitrary breakpoints (like 743px) on every class instead of adhering to a consistent framework system (like 768px, 992px).",
      "Using conflicting max-width and min-width rules that overlap, causing styling bugs."
    ],
    bestPractices: [
      "Stick to standard framework breakpoints to keep your codebase consistent.",
      "Ensure color contrast and layout spacing adjustments are checked on all breakpoints."
    ],
    realWorld: "Common CSS frameworks (Bootstrap, Tailwind) define standard breakpoints (sm: 640px, md: 768px, lg: 1024px) that developers use globally to coordinate layout reflows.",
    practice: {
      question: "Write CSS rules to display a warning box class '.warning' with red text by default, but change text color to green on screens 1200px wide and wider.",
      objective: "Set media query boundaries.",
      instructions: "Write a min-width media query override.",
      starterCode: `.warning {
  color: red;
}`,
      expectedOutput: "A text block that transitions colors on large screens.",
      hint: "Use @media (min-width: 1200px) and override color.",
      solution: `.warning {
  color: red;
}
@media (min-width: 1200px) {
  .warning {
    color: green;
  }
}`
    },
    interview: {
      question: "What are breakpoints in responsive design and how do you choose them?",
      answer: "Breakpoints are the screen width thresholds where layout styles change. Instead of targeting specific device models (like iPhone 13), best practice is to choose breakpoints based on standard screen ranges: Mobile (under 768px), Tablet (768px to 992px), and Laptop/Desktop (above 992px).",
      explanation: "This device-agnostic approach ensures your site renders correctly on all viewports, including future devices.",
      example: "Bootstrap breakpoints: 576px (sm), 768px (md), 992px (lg), 1200px (xl)."
    },
    revision: "Media queries use screen width parameters to apply specific CSS rules at viewport thresholds called breakpoints."
  },
  {
    id: "responsive-media-typography",
    title: "Responsive Media & Typography",
    what: "Responsive Media and Typography ensures that images scale within their containers and text sizing remains readable on both phone screens and large desktop monitors.",
    why: "Unresponsive images overflow layouts, creating horizontal scrollbars. Desktop-sized headings (like 48px) look too large on phone screens, pushing content off the page.",
    syntax: `/* Fluid Responsive Image */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Responsive Typography using clamp */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}`,
    exampleHTML: `<div style="max-width: 150px;">
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=150" alt="Laptop" class="fluid-img">
</div>`,
    exampleCSS: `.fluid-img {
  max-width: 100%;
  height: auto;
  display: block;
}`,
    renderedOutput: `<div style="font-family: sans-serif; text-align: center;">
  <div style="max-width: 100px; margin: 0 auto; border: 1px solid #ccc; padding: 4px;">
    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=100" alt="Laptop" style="max-width: 100%; height: auto; display: block;">
  </div>
  <p style="font-size: clamp(11px, 2vw, 14px); margin-top: 4px; color: #4b5563;">Fluid image and text scale</p>
</div>`,
    explanation: [
      "max-width: 100%: Prevents images from growing wider than their parent container.",
      "height: auto: Scales height proportionally to width to prevent image distortion.",
      "clamp(min, preferred, max): Dynamically calculates font size based on viewport width (vw), keeping it within boundaries."
    ],
    importantPoints: [
      "Never use hardcoded pixel widths on image tags (like width='600px') in HTML.",
      "Use 'rem' or 'em' units for font sizes instead of pixels.",
      "Responsive tables require a parent wrapper with overflow-x: auto to support mobile scrolling."
    ],
    commonMistakes: [
      "Forgetting max-width: 100% on images, causing them to break container boundaries.",
      "Setting static text sizes that force users to pinch-zoom on mobile screens."
    ],
    bestPractices: [
      "Wrap wide tables in an overflow container: `<div style='overflow-x: auto;'><table>...</table></div>`.",
      "Use fluid typography units like rem and viewport width (vw) configurations."
    ],
    realWorld: "News portals use fluid typography to scale article headings smoothly from mobile (20px) to desktop (40px) without jagged layout reflows.",
    practice: {
      question: "Write CSS rules to make all video tags fluid and responsive, ensuring they fit their containers.",
      objective: "Apply responsive sizing to media elements.",
      instructions: "Use max-width and height properties.",
      starterCode: `video {
  /* Style here */
}`,
      expectedOutput: "A responsive video container block.",
      hint: "Use max-width: 100% and height: auto.",
      solution: `video {
  max-width: 100%;
  height: auto;
  display: block;
}`
    },
    interview: {
      question: "How does the CSS clamp() function work for responsive typography?",
      answer: "The clamp() function takes three arguments: a minimum value, a preferred value (usually viewport units like 4vw), and a maximum value. The browser calculates the preferred value dynamically. If it drops below the minimum, the browser locks it to the minimum; if it exceeds the maximum, it locks it to the maximum.",
      explanation: "This allows font sizes to scale smoothly with screen width without needing media queries.",
      example: "font-size: clamp(1rem, 3vw, 2.5rem) (ranges from 16px to 40px depending on screen width)."
    },
    revision: "Responsive media uses max-width and auto height limits. Typography uses relative sizing units (rem, vw) or clamp() to adapt text sizing to screen width."
  },
  {
    id: "responsive-forms-testing",
    title: "Responsive Forms & Viewport Testing",
    what: "Responsive Forms layout inputs, labels, and buttons cleanly across all device viewports. Viewport testing is the process of validating your layouts across screen sizes (from 320px mobile to 1440px+ monitors).",
    why: "Forms are critical interaction blocks. If text inputs are too small or buttons overlap on mobile, users will abandon your forms.",
    syntax: `/* Multi-column form on desktop, single-column on mobile */
.form-row {
  display: flex;
  flex-direction: column; /* Stack on mobile */
  gap: 12px;
}

@media (min-width: 768px) {
  .form-row {
    flex-direction: row; /* Align side-by-side on desktop */
  }
}`,
    exampleHTML: `<form class="resp-form">
  <div class="form-row">
    <input type="text" placeholder="First Name">
    <input type="text" placeholder="Last Name">
  </div>
</form>`,
    exampleCSS: `.form-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
@media (min-width: 768px) {
  .form-row {
    flex-direction: row;
  }
  .form-row input {
    flex: 1;
  }
}`,
    renderedOutput: `<div style="font-family: sans-serif; max-width: 300px; margin: 0 auto; padding: 10px; border: 1px solid #e2e8f0; background: white;">
  <div style="display: flex; flex-direction: column; gap: 6px;">
    <input type="text" placeholder="First Name" style="font-size: 12px; padding: 4px; border: 1px solid #ccc; width: 100%; box-sizing: border-box;">
    <input type="text" placeholder="Last Name" style="font-size: 12px; padding: 4px; border: 1px solid #ccc; width: 100%; box-sizing: border-box;">
  </div>
</div>`,
    explanation: [
      "flex-direction: column: Default stack for mobile viewports, giving inputs full-width usability.",
      "flex-direction: row: Shifts inputs side-by-side when screen space is available.",
      "flex: 1: Instructs input elements to distribute parent width equally."
    ],
    importantPoints: [
      "Make sure inputs have large, accessible tap targets on mobile (at least 44px height).",
      "Labels should sit above inputs on mobile to maximize horizontal spacing.",
      "Test layouts at: 320px (SE), 375px (iPhone), 768px (iPad), 1024px (Tablet Pro), 1440px (Laptop)."
    ],
    commonMistakes: [
      "Using absolute positioning on form elements, which breaks layout flows on mobile screens.",
      "Forgetting to wrap forms in responsive grid layout rows, causing elements to overflow."
    ],
    bestPractices: [
      "Use Chrome DevTools device mode to verify layouts at all major resolution breakpoints.",
      "Keep forms simple: use single-column layouts for mobile to improve completion rates."
    ],
    realWorld: "Customer checkout screens stack billing and shipping inputs vertically on mobile to prevent horizontal scrolling, but align them side-by-side on wide screens.",
    practice: {
      question: "Write CSS rules to style a form checkbox row class '.checkbox-row' to have display flex with 12px gap, and align items vertically centered.",
      objective: "Build accessible checkbox layout properties.",
      instructions: "Apply display, gap, and align-items properties.",
      starterCode: `.checkbox-row {
  /* Style here */
}`,
      expectedOutput: "A cleanly centered checkbox element row.",
      hint: "Use display: flex, gap: 12px, and align-items: center.",
      solution: `.checkbox-row {
  display: flex;
  align-items: center;
  gap: 12px;
}`
    },
    interview: {
      question: "How do you test if your website is responsive?",
      answer: "You can test responsiveness by: 1) Using browser Developer Tools (F12) and enabling Device Mode to simulate viewport sizes (from 320px mobile to wide desktop), 2) Resizing the browser window to check for content wrapping and overflows, and 3) Testing on actual mobile devices.",
      explanation: "Testing validates breakpoints and catches issues like horizontal scrollbars.",
      example: "Simulate iPhone SE (320px) to verify that text fits without clipping."
    },
    revision: "Responsive forms stack inputs vertically on mobile for easier tapping, and align them in rows on desktop. Layouts are validated by testing viewports from 320px to 1440px."
  }
];

module.exports = responsiveLessons;
