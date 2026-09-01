// CSS3 Complete Curriculum Data - 13 Lessons

const cssLessons = [
  {
    id: "introduction",
    title: "CSS Introduction & Syntax",
    what: "CSS (Cascading Style Sheets) is a stylesheet language used to define the visual presentation and layout of HTML documents. It controls typography, colors, margins, grids, and responsive scaling.",
    why: "HTML sets up the content structure, but CSS makes it look professional. It separates design from structure, allowing developers to style thousands of pages by modifying a single CSS file.",
    syntax: `/* CSS Rule Structure */
selector {
  property: value;
}

/* Example styling paragraph text */
p {
  color: #3b82f6;
  font-size: 16px;
}`,
    basicExample: "Applying red text to headings: `h1 { color: red; }`.",
    exampleHTML: `<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: #6366f1;
            font-family: sans-serif;
            border-bottom: 2px solid #6366f1;
        }
        p {
            color: #475569;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>Styling with CSS</h1>
    <p>This layout is styled using internal CSS.</p>
</body>
</html>`,
    expectedOutputDescription: "An indigo heading with an indigo underline, followed by slate-grey text.",
    renderedOutput: `<div style="font-family: sans-serif;">
    <h1 style="color: #6366f1; border-bottom: 2px solid #6366f1; margin: 0 0 8px 0; font-size: 20px;">Styling with CSS</h1>
    <p style="color: #475569; font-size: 15px; margin: 0;">This layout is styled using internal CSS.</p>
</div>`,
    explanation: [
      "h1 { ... }: Selector targeting h1 headings to apply styles.",
      "color: #6366f1: Property-value pair setting the text color.",
      "border-bottom: Adds a border line under the heading content."
    ],
    importantProperties: [
      { name: "color", desc: "Sets the foreground text color." },
      { name: "font-family", desc: "Specifies the font face family (serif, sans-serif, monospace)." },
      { name: "font-size", desc: "Sets the size of the text (in px, rem, em)." }
    ],
    realWorld: "Stylesheets align with corporate branding books, ensuring buttons, headers, and footer elements look identical across all product pages.",
    commonMistakes: [
      "Forgetting the closing semicolon after property values, which breaks the declarations following it.",
      "Overusing inline styles, which are difficult to maintain and override."
    ],
    bestPractices: [
      "Use external stylesheets linked in the head tag to separate design from structure.",
      "Add comments (/* comment */) to group styling rules."
    ],
    practice: {
      question: "Write an internal CSS rule that sets paragraph text color to dark green and increases font size to 18px.",
      objective: "Create basic CSS rule blocks.",
      instructions: "Apply color and font-size selectors within a style block.",
      starterCode: `p {
  /* Write styles here */
}`,
      expectedOutput: "A style rule targeting paragraphs.",
      hint: "Use color: darkgreen; and font-size: 18px;.",
      solution: `p {
  color: darkgreen;
  font-size: 18px;
}`
    },
    interview: {
      question: "What are the three ways to insert CSS, and which has the highest priority?",
      answer: "The three ways are: 1) External stylesheet (linked via <link>), 2) Internal styles (written in <style> tags), and 3) Inline styles (added directly to style attributes). Inline styles have the highest priority and override both internal and external styles.",
      explanation: "Inline styles have the highest specificity score (1000) under the CSS rendering engine.",
      example: "Inline overrides: <p style='color: red;'>Text</p>"
    },
    revision: "CSS styles HTML elements. It can be inline, internal, or external, with inline styles having the highest priority. Declarations consist of property-value pairs inside curly braces."
  },
  {
    id: "selectors",
    title: "CSS Selectors & Specificity",
    what: "CSS selectors are patterns used to target HTML elements for styling. Specificity is a weight calculation system browsers use to determine which style wins when multiple rules target the same element.",
    why: "Selectors allow you to target elements precisely. Instead of writing inline styles, you target elements using class names, ID attributes, structural hierarchies, or states.",
    syntax: `/* Class Selector */
.btn-primary { ... }

/* Descendant Selector */
.card p { ... }

/* Sibling Selector */
h2 + p { ... }`,
    basicExample: "Targeting elements with the 'alert' class: `.alert { background: yellow; }`.",
    exampleHTML: `<div class="card-demo" id="main-card">
    <h3 class="title">Card Title</h3>
    <p>First paragraph.</p>
    <p class="special">Second paragraph.</p>
</div>`,
    exampleCSS: `.card-demo {
    border: 1px solid #cbd5e1;
    padding: 15px;
    border-radius: 6px;
}
.card-demo h3 {
    color: #6366f1;
    margin-top: 0;
}
.card-demo p {
    color: #475569;
}
.card-demo p.special {
    color: #ef4444;
    font-weight: bold;
}
#main-card {
    background-color: #f8fafc;
}`,
    renderedOutput: `<div style="font-family: sans-serif; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; background-color: #f8fafc; max-width: 300px;">
    <h3 style="color: #6366f1; margin: 0 0 6px 0; font-size: 18px;">Card Title</h3>
    <p style="color: #475569; margin: 0 0 6px 0; font-size: 13px;">First paragraph.</p>
    <p style="color: #ef4444; font-weight: bold; margin: 0; font-size: 13px;">Second paragraph.</p>
</div>`,
    explanation: [
      ".card-demo h3: Descendant selector targeting h3 elements inside a card-demo class.",
      "p.special: Targets only paragraph tags that have the 'special' class.",
      "#main-card: ID selector styling the specific container."
    ],
    importantProperties: [
      { name: "Class selector (.)", desc: "Targets all elements with that class attribute. Highly reusable." },
      { name: "ID selector (#)", desc: "Targets a single unique element. Higher specificity than classes." },
      { name: "Universal selector (*)", desc: "Targets all elements in the document." }
    ],
    realWorld: "Frontend developers write class selectors (e.g. .card, .btn) to build reusable components, avoiding ID selectors to prevent specificity conflicts.",
    commonMistakes: [
      "Forgetting the dot (.) prefix for class selectors or the hash (#) prefix for ID selectors in the CSS file.",
      "Using duplicate ID names on a single page."
    ],
    bestPractices: [
      "Style with class selectors to keep specificity scores low, making overrides easier.",
      "Combine selectors to target elements in specific containers (e.g., .nav a)."
    ],
    practice: {
      question: "Write CSS selectors to: 1) Style all elements with class 'alert' with yellow background. 2) Style a unique element with ID 'main-header' with blue text.",
      objective: "Practice class and ID selectors.",
      instructions: "Create .alert and #main-header rule blocks.",
      starterCode: `/* Add selectors */`,
      expectedOutput: "A yellow alert background class and blue text ID rule.",
      hint: "Use dot (.) for classes and hash (#) for IDs.",
      solution: `.alert {
  background-color: yellow;
}
#main-header {
  color: blue;
}`
    },
    interview: {
      question: "What is CSS selector specificity, and what are its weight values?",
      answer: "Specificity is a score the browser calculates to determine which style rule takes priority. The hierarchy of specificity weight, from lowest to highest, is: 1) Universal selector (0,0,0,0), 2) Element and pseudo-element selector (0,0,0,1), 3) Class, attribute, and pseudo-class selector (0,0,1,0), 4) ID selector (0,1,0,0), and 5) Inline style (1,0,0,0).",
      explanation: "Rules with higher specificity override rules with lower specificity, regardless of their order in the stylesheet.",
      example: "h1 (specificity 1) vs .title (specificity 10) vs #header (specificity 100)."
    },
    revision: "Selectors target HTML elements for styling. Specificity is calculated as: Inline style > ID > Class > Element. Avoid using ID selectors for styling to prevent override conflicts."
  },
  {
    id: "pseudo-elements-classes",
    title: "Pseudo-Classes & Pseudo-Elements",
    what: "Pseudo-classes (:hover, :focus, :nth-child) style elements under specific states or structural positions. Pseudo-elements (::before, ::after, ::first-letter) style specific parts of an element's content.",
    why: "These selectors enable state transitions and visual decorations without requiring JavaScript or modifying the HTML structure.",
    syntax: `/* Hover state */
.btn:hover { background: darkblue; }

/* Insert content before an element */
.box::before { content: "★ "; color: gold; }`,
    basicExample: "Changing color on hover: `a:hover { color: red; }`.",
    exampleHTML: `<button class="hover-btn">Hover Me</button>
<ul class="numbered-list">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>`,
    exampleCSS: `.hover-btn {
    background-color: #6366f1;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}
.hover-btn:hover {
    background-color: #4f46e5;
}
.numbered-list li::before {
    content: "✓ ";
    color: #10b981;
    font-weight: bold;
}
.numbered-list li:nth-child(even) {
    background-color: #f1f5f9;
}`,
    renderedOutput: `<div style="font-family: sans-serif; font-size: 14px;">
    <button style="background-color: #6366f1; color: white; padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 10px;">Hover Me (Static Preview)</button>
    <ul style="list-style: none; padding-left: 0; margin: 0;">
        <li><span style="color: #10b981; font-weight: bold;">✓</span> First item</li>
        <li style="background-color: #f1f5f9;"><span style="color: #10b981; font-weight: bold;">✓</span> Second item</li>
        <li><span style="color: #10b981; font-weight: bold;">✓</span> Third item</li>
    </ul>
</div>`,
    explanation: [
      ":hover: Pseudo-class styling an element when hovered by the mouse pointer.",
      "::before: Pseudo-element that inserts content before the element's actual text.",
      ":nth-child(even): Pseudo-class targeting even-numbered elements in a list."
    ],
    importantProperties: [
      { name: "content", desc: "Property used with ::before and ::after to insert text, icons, or empty boxes." },
      { name: "nth-child(n)", desc: "Selects elements based on an algebraic formula or keywords (odd, even)." },
      { name: "focus", desc: "Selects elements (like form inputs) when they are focused by the cursor or keyboard tab." }
    ],
    realWorld: "Forms highlight active inputs with :focus, tables style alternating rows with :nth-child(even), and cards display ribbon badges using ::after overlays.",
    commonMistakes: [
      "Forgetting the content property when using ::before or ::after, which prevents the pseudo-element from rendering.",
      "Confusing the single colon (:) for pseudo-classes with the double colon (::) for pseudo-elements."
    ],
    bestPractices: [
      "Always include focus states alongside hover states to ensure keyboard accessibility.",
      "Use ::before and ::after for decorative elements only, not critical content."
    ],
    practice: {
      question: "Write CSS rules to style odd list items with a background color of '#f8fafc', and append a red asterisk '*' before elements with class '.required'.",
      objective: "Combine pseudo-classes and pseudo-elements.",
      instructions: "Use :nth-child(odd) and ::before with content.",
      starterCode: `/* Style list and required fields */`,
      expectedOutput: "Odd rows styled with light background, required elements prefixed with an asterisk.",
      hint: "Use li:nth-child(odd) and .required::before.",
      solution: `li:nth-child(odd) {
  background-color: #f8fafc;
}
.required::before {
  content: "* ";
  color: red;
}`
    },
    interview: {
      question: "What is the difference between a pseudo-class and a pseudo-element?",
      answer: "A pseudo-class targets a state or relationship in the DOM tree (e.g. :hover, :first-child). A pseudo-element targets a specific part of an element's content (e.g. ::first-letter, ::before, ::after) that doesn't exist in the raw HTML.",
      explanation: "Pseudo-classes use a single colon (:), while pseudo-elements use a double colon (::) in modern CSS.",
      example: "State: a:hover. Section: p::first-line."
    },
    revision: "Pseudo-classes target states and positions using a single colon (:). Pseudo-elements target sub-sections of content using a double colon (::) and require the content property."
  },
  {
    id: "colors",
    title: "Colors & Opacity",
    what: "CSS colors define text and background shades. Colors can be defined using Named colors, HEX codes (#ff0000), RGB/RGBA models (rgb(255,0,0)), or HSL/HSLA models.",
    why: "Colors establish the visual hierarchy, brand identity, and theme of a website. The alpha (A) parameter controls opacity, enabling semi-transparent overlays.",
    syntax: `h1 {
  color: hsla(238, 83%, 60%, 0.9); /* HSLA text color */
}
.card {
  background-color: rgba(99, 102, 241, 0.1); /* RGBA background */
}`,
    basicExample: "A red hex color: `color: #ff0000;`.",
    exampleHTML: `<div class="color-box base">Solid Background</div>
<div class="color-box translucent">Translucent Background</div>`,
    exampleCSS: `.color-box {
    padding: 15px;
    margin-bottom: 10px;
    font-family: sans-serif;
    border-radius: 4px;
    font-weight: bold;
}
.color-box.base {
    background-color: #6366f1;
    color: white;
}
.color-box.translucent {
    background-color: rgba(99, 102, 241, 0.15);
    color: #4f46e5;
    border: 1px solid rgba(99, 102, 241, 0.3);
}`,
    renderedOutput: `<div style="font-family: sans-serif; font-size: 13px;">
    <div style="background-color: #6366f1; color: white; padding: 10px; border-radius: 4px; font-weight: bold; margin-bottom: 8px;">Solid Background</div>
    <div style="background-color: rgba(99, 102, 241, 0.15); color: #4f46e5; padding: 10px; border-radius: 4px; font-weight: bold; border: 1px solid rgba(99, 102, 241, 0.3);">Translucent Background</div>
</div>`,
    explanation: [
      "#6366f1: Hexadecimal representation of brand indigo.",
      "rgba(99, 102, 241, 0.15): RGBA color with a 15% opacity limit, allowing background colors to show through."
    ],
    importantProperties: [
      { name: "color", desc: "Sets the color of the text." },
      { name: "background-color", desc: "Sets the background color of the element box." },
      { name: "opacity", desc: "Sets the opacity level of the entire element (including child nodes) from 0.0 to 1.0." }
    ],
    realWorld: "Design systems define brand palettes using HSL colors, adjusting the lightness percentage to create hover states and borders.",
    commonMistakes: [
      "Using the opacity property (e.g. opacity: 0.5) to fade a background color, which fades all text inside the container as well. Use RGBA or HSLA background colors instead.",
      "Leaving out the '#' prefix when writing hexadecimal codes."
    ],
    bestPractices: [
      "Ensure text-to-background contrast ratios pass accessibility guidelines (minimum 4.5:1 for standard text).",
      "Use CSS variables to store brand colors to support dark mode theme swaps."
    ],
    practice: {
      question: "Write CSS styles to style a card '.card-overlay' with a black background with 50% opacity, and white text.",
      objective: "Work with alpha opacity models.",
      instructions: "Use rgba background colors.",
      starterCode: `.card-overlay {
  /* Add color overrides */
}`,
      expectedOutput: "A translucent dark overlay styling block.",
      hint: "Use background-color: rgba(0, 0, 0, 0.5) and color: white.",
      solution: `.card-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}`
    },
    interview: {
      question: "What is the difference between setting background-color: rgba(...) and setting background-color with opacity?",
      answer: "Setting background-color: rgba(...) sets the background color transparency, leaving the text and other child elements fully opaque. Setting the opacity property on the element sets the transparency of the entire element, including its text, borders, and child elements.",
      explanation: "Opacity inherits down the DOM tree; RGBA applies only to the target property.",
      example: "Opacity 0.5 makes text faded; RGBA background keeps text crisp and readable."
    },
    revision: "CSS supports named, HEX, RGB/RGBA, and HSL/HSLA color models. Use RGBA or HSLA instead of the opacity property to style transparent backgrounds without fading child text."
  },
  {
    id: "backgrounds-borders",
    title: "Backgrounds & Borders",
    what: "Background properties (color, image, position, repeat, size) control element backgrounds. Border properties (width, style, color, radius) style element borders and rounded corners.",
    why: "Background images and rounded borders are the design foundation of modern card-based and grid layouts.",
    syntax: `.card {
  background-image: url('pattern.png');
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
}`,
    basicExample: "Adding a border: `border: 1px solid black;`.",
    exampleHTML: `<div class="decorated-card">
    <h4>Visual Card</h4>
    <p>Rounded borders and background shadows.</p>
</div>`,
    exampleCSS: `.decorated-card {
    background-color: #ffffff;
    border: 2px solid #6366f1;
    border-radius: 12px;
    padding: 20px;
    font-family: sans-serif;
    box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.2);
}
.decorated-card h4 {
    margin-top: 0;
    color: #4f46e5;
}`,
    renderedOutput: `<div style="font-family: sans-serif; display: flex; justify-content: center; padding: 10px;">
    <div style="background-color: #ffffff; border: 2px solid #6366f1; border-radius: 12px; padding: 15px; max-width: 250px; box-shadow: 0 4px 6px -1px rgba(99,102,241,0.2);">
        <h4 style="margin: 0 0 6px 0; color: #4f46e5; font-size: 16px;">Visual Card</h4>
        <p style="margin: 0; font-size: 13px; color: #4b5563;">Rounded borders and background shadows.</p>
    </div>
</div>`,
    explanation: [
      "border-radius: 12px: Curves the card corners smoothly.",
      "box-shadow: Adds a drop shadow with Indigo color weighting.",
      "border: 2px solid #6366f1: A shorthand property setting border-width, style, and color."
    ],
    importantProperties: [
      { name: "background-size", desc: "Controls background image scaling (contain, cover, auto)." },
      { name: "border-radius", desc: "Curves element corners; set to 50% for circles." },
      { name: "outline", desc: "A line drawn outside the border edge, commonly used for keyboard focus indicators." }
    ],
    realWorld: "Product galleries use background-size: cover to scale images, and style card corners with border-radius to create modern card designs.",
    commonMistakes: [
      "Setting background-repeat: repeat by default on page backgrounds, causing background patterns to display as tiled grids.",
      "Forgetting to specify the border-style (e.g. solid) when writing borders, which prevents borders from rendering."
    ],
    bestPractices: [
      "Always set a fallback background-color when using background-images, in case the image fails to load.",
      "Use shorthand property notation (e.g., border: 1px solid red) to keep code clean."
    ],
    practice: {
      question: "Write CSS rules to style a class '.circle-badge' with a width and height of 80px, white background, a red solid border, and rounded corners to form a perfect circle.",
      objective: "Build circular components.",
      instructions: "Set width, height, border, and border-radius properties.",
      starterCode: `.circle-badge {
  /* Add rules */
}`,
      expectedOutput: "A circular badge styling block.",
      hint: "Set border-radius: 50% and matching width and height dimensions.",
      solution: `.circle-badge {
  width: 80px;
  height: 80px;
  background-color: white;
  border: 2px solid red;
  border-radius: 50%;
}`
    },
    interview: {
      question: "What is the difference between border and outline?",
      answer: "The border property sits inside the CSS Box Model, meaning it adds to the element's total width and height. The outline property is drawn outside the border, does not affect the element's Box Model dimensions, and can be non-rectangular.",
      explanation: "Outlines do not trigger layout shifts and are preferred for accessibility focus indicators.",
      example: "Border changes layout sizes: border: 5px solid. Outline overlays without shifting: outline: 3px solid."
    },
    revision: "Use backgrounds with size and position controls. Set border curves using border-radius. Outlines draw outside borders and do not affect Box Model calculations."
  },
  {
    id: "box-model",
    title: "CSS Box Model",
    what: "The CSS Box Model is the foundation of layout design. Every HTML element is modeled as a rectangular box consisting of four nested layers: Content, Padding, Border, and Margin.",
    why: "Understanding the Box Model is critical for controlling element widths, heights, margins, and alignments. Without it, padding and border additions will break your layout grids.",
    syntax: `.box {
  box-sizing: border-box; /* Highly Recommended */
  width: 300px;
  padding: 20px;
  border: 4px solid black;
  margin: 15px;
}`,
    basicExample: "Setting up sizing boundaries: `box-sizing: border-box;`.",
    exampleHTML: `<div class="box-model-demo">
  Box Model Layer
</div>`,
    exampleCSS: `.box-model-demo {
  box-sizing: border-box;
  width: 100%;
  max-width: 250px;
  padding: 20px;
  border: 5px solid #6366f1;
  margin: 15px auto;
  background-color: #e0e7ff;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  color: #4f46e5;
}`,
    renderedOutput: `<div style="font-family: sans-serif; padding: 5px; display: flex; justify-content: center;">
    <div style="box-sizing: border-box; width: 100%; max-width: 200px; padding: 15px; border: 5px solid #6366f1; background-color: #e0e7ff; text-align: center; font-weight: bold; color: #4f46e5;">
        Box Model Layer
    </div>
</div>`,
    explanation: [
      "box-sizing: border-box: Fits padding and borders inside the declared width, preventing layout breakage.",
      "padding: 15px: Adds padding space inside the border, separating text from the borders.",
      "margin: Centered horizontally using auto margins."
    ],
    importantProperties: [
      { name: "padding", desc: "Clear space inside the border, surrounding content." },
      { name: "margin", desc: "Outer space around the border, separating the element from sibling blocks." },
      { name: "box-sizing", desc: "Configures width and height calculations (content-box, border-box)." }
    ],
    realWorld: "Global stylesheets set box-sizing: border-box on all elements to ensure predictable scaling and grid setups.",
    commonMistakes: [
      "Omitting box-sizing: border-box globally. Without it, adding padding to a 100% wide container pushes it wider than the viewport, creating horizontal scrollbars.",
      "Confusing margin (outer space) with padding (inner space)."
    ],
    bestPractices: [
      "Use box-sizing: border-box globally in all your stylesheets: `* { box-sizing: border-box; }`.",
      "Use margin: 0 auto to center block-level elements horizontally."
    ],
    practice: {
      question: "Apply box-sizing: border-box, a width of 350px, padding of 25px, and a margin of 10px to a card element class.",
      objective: "Set core box sizing and properties.",
      instructions: "Apply width, padding, margin, and box-sizing rules.",
      starterCode: `.custom-card {
    /* Style here */
}`,
      expectedOutput: "A predictably dimensioned layout card structure.",
      hint: "Use box-sizing: border-box so the card width remains exactly 350px.",
      solution: `.custom-card {
    box-sizing: border-box;
    width: 350px;
    padding: 25px;
    margin: 10px;
}`
    },
    interview: {
      question: "What is the difference between content-box and border-box?",
      answer: "In content-box (the default), the width and height properties apply only to the content area. Adding padding or borders increases the actual width of the element on screen. In border-box, width and height apply to the entire visible box including content, padding, and borders. Padding and border compress the content space rather than expanding the box.",
      explanation: "Applying border-box makes grid layouts predictable because elements stay at their declared widths.",
      example: "A 100px wide box with 10px padding becomes 120px wide in content-box, but stays exactly 100px wide in border-box."
    },
    revision: "The Box Model consists of content, padding, border, and margin. Always use box-sizing: border-box to prevent padding and borders from expanding elements past their declared widths."
  },
  {
    id: "typography",
    title: "CSS Typography & Fonts",
    what: "Typography properties (font-family, font-size, font-weight, line-height, text-align, text-transform) control font faces, sizes, alignment, and formatting.",
    why: "Readability is critical. Controlling line-height prevents overlapping sentences, and setting font-family defines site readability.",
    syntax: `p {
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
}`,
    basicExample: "Aligning text: `text-align: center;`.",
    exampleHTML: `<div class="typo-block">
    <h3>Typography Rules</h3>
    <p class="summary">This text showcases line-height, letter-spacing, and capital letters overrides.</p>
</div>`,
    exampleCSS: `.typo-block h3 {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;
    color: #1e3a8a;
    margin-top: 0;
}
.typo-block p.summary {
    font-size: 14px;
    line-height: 1.8;
    letter-spacing: 0.5px;
    color: #475569;
}`,
    renderedOutput: `<div style="font-family: sans-serif; text-align: left; padding: 5px;">
    <h3 style="font-size: 18px; font-weight: 800; text-transform: uppercase; color: #1e3a8a; margin: 0 0 6px 0;">Typography Rules</h3>
    <p style="font-size: 13px; line-height: 1.8; letter-spacing: 0.5px; color: #475569; margin: 0;">This text showcases line-height, letter-spacing, and capital letters overrides.</p>
</div>`,
    explanation: [
      "text-transform: uppercase: Converts headings to uppercase dynamically.",
      "line-height: 1.8: Sets line spacing to 1.8 times the font size, boosting readability.",
      "letter-spacing: 0.5px: Adds letter spacing parameters."
    ],
    importantProperties: [
      { name: "font-weight", desc: "Sets font thickness (100 to 900, or normal, bold)." },
      { name: "line-height", desc: "Sets the spacing between lines of text." },
      { name: "text-shadow", desc: "Adds drop shadow offsets and colors behind text characters." }
    ],
    realWorld: "News blogs set font-size to relative rem units and line-height to 1.6 to ensure articles remain readable across mobile and desktop displays.",
    commonMistakes: [
      "Using fixed pixel font-sizes for body copy, which prevents users from adjusting text sizes using browser settings.",
      "Forgetting a fallback generic font category (like sans-serif) when loading custom web fonts."
    ],
    bestPractices: [
      "Use relative units (rem) for font sizes to support browser text resizing.",
      "Limit the number of custom web fonts loaded to maximize page speed."
    ],
    practice: {
      question: "Write CSS rules to style blockquotes '.quote-text' to have font-size 20px, italic styling, line-height 1.7, and centered alignment.",
      objective: "Format text layouts.",
      instructions: "Use font-style, font-size, line-height, and text-align properties.",
      starterCode: `.quote-text {
  /* Add rules */
}`,
      expectedOutput: "An italicized, centered blockquote style rule.",
      hint: "Use font-style: italic and text-align: center.",
      solution: `.quote-text {
  font-size: 20px;
  font-style: italic;
  line-height: 1.7;
  text-align: center;
}`
    },
    interview: {
      question: "What is the difference between px, em, and rem units in font sizing?",
      answer: "px is a static physical pixel measurement. em is a relative unit calculated relative to the parent element's font size. rem (Root EM) is a relative unit calculated relative to the root <html> element's font size (which defaults to 16px in most browsers).",
      explanation: "Using rem units ensures text scales proportionally when users adjust browser settings.",
      example: "1rem = 16px. 2rem = 32px (if root is 16px)."
    },
    revision: "Use relative rem units for typography. Set font-family fallback groups, and configure line-height to around 1.5 to optimize readability."
  },
  {
    id: "display-position",
    title: "Display, Overflow & Positioning",
    what: "Display properties (block, inline, inline-block, none) control how elements layout. Position properties (static, relative, absolute, fixed, sticky) offset elements relative to their containers or page viewports.",
    why: "Controlling layouts is critical. Absolute coordinates overlay menus, sticky positions lock headers during scrolling, and inline blocks place buttons side-by-side.",
    syntax: `.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
}
.popup {
  position: absolute;
  top: 50%;
  left: 50%;
}`,
    basicExample: "Locking header on top: `position: fixed; top: 0;`.",
    exampleHTML: `<div class="container-pos">
    <div class="header-sticky">Sticky Header</div>
    <div class="relative-parent">
        Parent Container
        <div class="absolute-child">Badge</div>
    </div>
</div>`,
    exampleCSS: `.container-pos {
    height: 120px;
    overflow-y: auto;
    border: 1px solid #ccc;
    position: relative;
}
.header-sticky {
    position: sticky;
    top: 0;
    background-color: #6366f1;
    color: white;
    padding: 5px;
    font-weight: bold;
    text-align: center;
}
.relative-parent {
    position: relative;
    background-color: #f1f5f9;
    padding: 15px;
    margin-top: 10px;
    height: 80px;
    font-family: sans-serif;
}
.absolute-child {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #ef4444;
    color: white;
    font-size: 11px;
    padding: 2px 6px;
    border-radius: 4px;
}`,
    renderedOutput: `<div style="font-family: sans-serif; font-size: 13px;">
    <div style="border: 1px solid #cbd5e1; position: relative; height: 100px; overflow-y: auto; background-color: #fff;">
        <div style="position: sticky; top: 0; background-color: #6366f1; color: white; padding: 4px; text-align: center; font-weight: bold;">Sticky Header</div>
        <div style="position: relative; background-color: #f1f5f9; padding: 10px; margin: 8px; height: 50px;">
            Parent Container
            <div style="position: absolute; top: 4px; right: 4px; background-color: #ef4444; color: white; font-size: 10px; padding: 2px 4px; border-radius: 3px;">Badge</div>
        </div>
    </div>
</div>`,
    explanation: [
      "position: sticky: Keeps the header locked to the top when scrolling within the container.",
      "position: relative: Establishes a coordinate boundary for absolute child tags.",
      "position: absolute: Places the badge at the top-right corner of the parent container."
    ],
    importantProperties: [
      { name: "z-index", desc: "Sets layer stack orders; higher values display on top of lower values." },
      { name: "overflow", desc: "Configures scroll behavior when content exceeds element boundaries (visible, hidden, scroll, auto)." },
      { name: "display: none", desc: "Hides the element and removes it from the page layout flow." }
    ],
    realWorld: "E-commerce sites use position: absolute to overlay sales badges on images, and use position: sticky to lock navigation bars to the top when scrolling.",
    commonMistakes: [
      "Using position: absolute without declaring position: relative on the parent container, causing the child to position relative to the root body instead.",
      "Setting high z-index values on unrelated elements, causing display issues with modal layouts."
    ],
    bestPractices: [
      "Avoid hardcoding absolute values when grid or flexbox positioning is better suited.",
      "Use sticky navigation bars to improve website usability."
    ],
    practice: {
      question: "Style a pop-up window '.popup' to have a fixed position, centered in the screen vertically and horizontally with a high stack order.",
      objective: "Work with absolute/fixed coordinates.",
      instructions: "Set position, top, left, transform, and z-index properties.",
      starterCode: `.popup {
  /* Add positioning rules */
}`,
      expectedOutput: "A centered fixed window class.",
      hint: "Use position: fixed, top: 50%, left: 50%, and transform: translate(-50%, -50%).",
      solution: `.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}`
    },
    interview: {
      question: "What is the difference between relative, absolute, and fixed positioning?",
      answer: "Relative positioning offsets the element from its normal document position without affecting surrounding elements. Absolute positioning removes the element from the document flow and positions it relative to its closest positioned ancestor. Fixed positioning removes the element from the flow and positions it relative to the browser viewport, keeping it locked in place during scrolling.",
      explanation: "Position relative anchors absolute child coordinates; fixed anchors elements to the viewport screen.",
      example: "Sticky navbar: sticky or fixed. Card icon overlay: absolute."
    },
    revision: "Use display to set block behaviors. Use relative parent containers to anchor absolute children, and z-index to manage overlapping layers."
  },
  {
    id: "flexbox",
    title: "CSS Flexbox",
    what: "CSS Flexbox (Flexible Box Layout) is a one-dimensional layout model designed for aligning items in columns or rows dynamically. It handles item sizing, justification, and alignment without float positioning.",
    why: "Flexbox resolves scaling and alignment issues. It aligns navbars, centers modal dialogs vertically, scales image grids, and builds responsive card outlines easily.",
    syntax: `.flex-container {
  display: flex;
  flex-direction: row; /* row or column */
  justify-content: space-between; /* horizontal alignment */
  align-items: center; /* vertical alignment */
  gap: 15px; /* space between items */
}`,
    basicExample: "Perfectly centering elements: `display: flex; justify-content: center; align-items: center;`.",
    exampleHTML: `<div class="flex-demo">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>`,
    exampleCSS: `.flex-demo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f5f9;
  padding: 15px;
  border-radius: 8px;
  gap: 10px;
}
.flex-item {
  background-color: #6366f1;
  color: white;
  padding: 15px;
  border-radius: 4px;
  font-weight: bold;
  width: 50px;
  text-align: center;
}`,
    renderedOutput: `<div style="font-family: sans-serif;">
    <div style="display: flex; justify-content: space-around; align-items: center; background-color: #f1f5f9; padding: 10px; border-radius: 8px; gap: 8px;">
        <div style="background-color: #6366f1; color: white; padding: 10px; border-radius: 4px; font-weight: bold; width: 40px; text-align: center; font-size: 12px;">1</div>
        <div style="background-color: #6366f1; color: white; padding: 10px; border-radius: 4px; font-weight: bold; width: 40px; text-align: center; font-size: 12px;">2</div>
        <div style="background-color: #6366f1; color: white; padding: 10px; border-radius: 4px; font-weight: bold; width: 40px; text-align: center; font-size: 12px;">3</div>
    </div>
</div>`,
    explanation: [
      "display: flex: Activates flex layout on the parent container (making child tags flex items).",
      "justify-content: Aligns flex items along the main axis (horizontal by default - start, center, space-between, space-around).",
      "align-items: Aligns flex items along the cross axis (vertical by default - start, center, stretch).",
      "flex-direction: Configures column vertical stacks or row horizontal chains."
    ],
    importantProperties: [
      { name: "flex-direction", desc: "Sets the layout direction of flex items (row, column, row-reverse, column-reverse)." },
      { name: "flex-wrap", desc: "Allows flex items to wrap to a new row when container space runs out (nowrap, wrap)." },
      { name: "flex-grow", desc: "Defines the ability for a flex item to grow and fill available container space." }
    ],
    realWorld: "Navbars (logo on left, links on right), button clusters, sidebar wrappers, and center-aligned form blocks are powered by display: flex.",
    commonMistakes: [
      "Adding justify-content and align-items properties to the child items instead of the parent container.",
      "Trying to use Flexbox to build complex 2D dashboard grids, which are better handled by CSS Grid."
    ],
    bestPractices: [
      "Use the gap property to add space between flex items instead of using margins.",
      "Use flex-wrap: wrap to prevent content overflow on mobile viewports."
    ],
    practice: {
      question: "Create a horizontal flex navigation bar with space-between layout and elements centered vertically.",
      objective: "Configure a horizontal flex bar.",
      instructions: "Apply display, justify-content, and align-items.",
      starterCode: `.nav-flex {
    /* Style here */
}`,
      expectedOutput: "A navigation bar layout splitting items left and right.",
      hint: "Use justify-content: space-between and align-items: center.",
      solution: `.nav-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}`
    },
    interview: {
      question: "What is the difference between justify-content and align-items?",
      answer: "justify-content aligns the flex items along the main axis (which runs horizontally by default if flex-direction is row). align-items aligns the items along the cross axis (which runs vertically by default). If you switch flex-direction to column, the axes switch places.",
      explanation: "Understanding axes is key to centering blocks. To center an item perfectly, apply display: flex, justify-content: center, and align-items: center to the container.",
      example: "Main axis (horizontal): justify-content: center. Cross axis (vertical): align-items: center."
    },
    revision: "Flexbox is a one-dimensional layout system. Apply display: flex to the parent container, and use justify-content and align-items to manage spacing and alignment."
  },
  {
    id: "grid",
    title: "CSS Grid Layout",
    what: "CSS Grid Layout is a two-dimensional layout system for the web. It lets you align content into rows and columns, offering control over complex page grids and card layouts.",
    why: "Grid handles both dimensions simultaneously. You can construct nested dashboard sections, image galleries, and multi-column magazine pages with a fraction of the code required by Flexbox.",
    syntax: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-gap: 20px; /* space between grid cells */
}`,
    basicExample: "A simple two-column grid: `display: grid; grid-template-columns: 1fr 1fr;`.",
    exampleHTML: `<div class="grid-demo">
  <div class="grid-item">A</div>
  <div class="grid-item">B</div>
  <div class="grid-item">C</div>
  <div class="grid-item">D</div>
</div>`,
    exampleCSS: `.grid-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background-color: #f1f5f9;
  padding: 10px;
  border-radius: 8px;
}
.grid-item {
  background-color: #10b981;
  color: white;
  padding: 15px;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
}`,
    renderedOutput: `<div style="font-family: sans-serif;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; background-color: #f1f5f9; padding: 10px; border-radius: 8px;">
        <div style="background-color: #10b981; color: white; padding: 10px; border-radius: 4px; font-weight: bold; text-align: center; font-size: 12px;">A</div>
        <div style="background-color: #10b981; color: white; padding: 10px; border-radius: 4px; font-weight: bold; text-align: center; font-size: 12px;">B</div>
        <div style="background-color: #10b981; color: white; padding: 10px; border-radius: 4px; font-weight: bold; text-align: center; font-size: 12px;">C</div>
        <div style="background-color: #10b981; color: white; padding: 10px; border-radius: 4px; font-weight: bold; text-align: center; font-size: 12px;">D</div>
    </div>
</div>`,
    explanation: [
      "display: grid: Declares a grid container node.",
      "grid-template-columns: Defines column metrics (e.g. using fractional units '1fr 2fr' or 'repeat(3, 1fr)').",
      "gap (grid-gap): Sets space between cells without adding margin spacing to the outer edges."
    ],
    importantProperties: [
      { name: "grid-template-columns", desc: "Defines the width of grid columns." },
      { name: "grid-column", desc: "Controls cell spanning across columns (e.g. grid-column: span 2)." },
      { name: "repeat()", desc: "A utility function to define recurring column tracks with minimal code." }
    ],
    realWorld: "SaaS dashboards (sidebar, top bar, widgets grid) and product image galleries utilize CSS Grid.",
    commonMistakes: [
      "Using CSS Grid for simple layout lines where Flexbox would require less code and scale items more easily.",
      "Confusing grid lines with grid tracks, causing off-by-one errors when setting column-span values."
    ],
    bestPractices: [
      "Use repeat(auto-fit, minmax(...)) to create responsive layouts that wrap dynamically without media queries.",
      "Set consistent gap spacings across all grid containers."
    ],
    practice: {
      question: "Configure a grid container with 3 equal columns (fraction units) and a cell gap of 25px.",
      objective: "Define columns and spacing on grid containers.",
      instructions: "Apply grid settings with template columns.",
      starterCode: `.three-column-grid {
    /* Style here */
}`,
      expectedOutput: "A structural template mapping elements across three columns.",
      hint: "Use grid-template-columns: repeat(3, 1fr) and gap: 25px.",
      solution: `.three-column-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}`
    },
    interview: {
      question: "What is the difference between auto-fit and auto-fill in CSS Grid?",
      answer: "Both keywords calculate how many columns can fit in a row. When there are too few columns to fill the row: auto-fit collapses empty column tracks and stretches active cells to fill the row width. auto-fill preserves empty tracks as blank spaces, preventing active cells from stretching.",
      explanation: "auto-fit stretches active elements; auto-fill leaves empty space on the right.",
      example: "3 columns in wide container: auto-fit expands them; auto-fill keeps them small and adds blank space."
    },
    revision: "CSS Grid is a two-dimensional layout system. Use grid-template-columns to define columns, gap to add spacing, and grid-column to merge adjacent cells."
  },
  {
    id: "transitions-transforms",
    title: "Transitions & Transforms",
    what: "Transitions define property changes over a duration. Transforms modify elements in 2D or 3D space, enabling rotations, scales, translations, and skews.",
    why: "Static layouts feel rigid. Transitioning hover states and scaling buttons on click makes user interfaces feel polished.",
    syntax: `.btn {
  transition: transform 0.2s ease, background-color 0.2s;
}
.btn:hover {
  transform: scale(1.05);
  background-color: #4f46e5;
}`,
    basicExample: "Rotating an element: `transform: rotate(45deg);`.",
    exampleHTML: `<button class="transform-btn">Scale on Hover</button>`,
    exampleCSS: `.transform-btn {
    background-color: #6366f1;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s;
}
.transform-btn:hover {
    transform: scale(1.1) rotate(2deg);
    background-color: #4f46e5;
}`,
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px; text-align: center;">
    <button style="background-color: #6366f1; color: white; padding: 8px 16px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; transition: transform 0.2s;">Transform Button</button>
</div>`,
    explanation: [
      "transition: Handles transition parameters for property changes.",
      "transform: scale(1.1): Grows the element to 1.1 times its original size on hover.",
      "rotate(2deg): Rotates the element slightly."
    ],
    importantProperties: [
      { name: "transition-duration", desc: "How long the animation takes (e.g. 0.3s)." },
      { name: "transform: translate()", desc: "Moves the element vertically or horizontally from its baseline position." },
      { name: "transform-origin", desc: "Sets the pivot point for rotations and scaling offsets." }
    ],
    realWorld: "E-commerce sites use scale transforms to zoom product images slightly on hover, and use transitions to fade menu dropdowns in and out.",
    commonMistakes: [
      "Animating properties like height or margins, which forces browsers to recalculate page layouts on every frame, causing lag. Use transform and opacity instead.",
      "Setting transition durations too long, making the interface feel sluggish."
    ],
    bestPractices: [
      "Use transform and opacity for hardware-accelerated, high-performance transitions.",
      "Stick to standard easing timing functions (like ease-in-out) for smooth, natural motions."
    ],
    practice: {
      question: "Create a hover rule that transitions the opacity of an image from 1 to 0.7 over 0.4 seconds.",
      objective: "Set up states and transition speeds.",
      instructions: "Apply transitions on hover elements.",
      starterCode: `.hover-fade {
    /* Style here */
}`,
      expectedOutput: "An image that dims slightly and smoothly when hovered.",
      hint: "Use transition: opacity 0.4s and .hover-fade:hover { opacity: 0.7 }.",
      solution: `.hover-fade {
    transition: opacity 0.4s ease;
}
.hover-fade:hover {
    opacity: 0.7;
}`
    },
    interview: {
      question: "Why are transform animations better for performance than animating width or top properties?",
      answer: "Modifying width or top properties triggers browser layout recalculations and repaint passes, which are slow. Transforms run in the Compositing stage, utilizing the GPU (hardware acceleration). This runs animations at 60fps without triggering layout recalculations.",
      explanation: "GPU-accelerated transformations keep animations smooth and performant.",
      example: "Translate is faster than top/left margins. Scale is faster than changing width/height."
    },
    revision: "Transforms change an element's scale, rotation, or position. Transitions animate these modifications over a duration. Always prioritize transform and opacity properties for smooth animations."
  },
  {
    id: "animations",
    title: "Keyframe Animations",
    what: "CSS animations build complex, looping motion paths. Unlike transitions, animations run automatically, loop indefinitely, and can move through multiple keyframe steps defined with `@keyframes`.",
    why: "Transitions require a hover or focus trigger. Animations run automatically on page load, powering loading spinners and alerts indicators.",
    syntax: `/* Define keyframes */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Attach to element */
.badge-alert {
  animation: pulse 2s infinite ease-in-out;
}`,
    basicExample: "A looping spin animation: `animation: spin 1s infinite linear;`.",
    exampleHTML: `<div class="spinner-demo"></div>`,
    exampleCSS: `.spinner-demo {
    width: 35px;
    height: 35px;
    border: 4px solid #e2e8f0;
    border-top: 4px solid #6366f1;
    border-radius: 50%;
    animation: rotate 1.2s linear infinite;
}
@keyframes rotate {
    to { transform: rotate(360deg); }
}`,
    renderedOutput: `<div style="font-family: sans-serif; display: flex; justify-content: center; padding: 10px;">
    <div style="width: 30px; height: 30px; border: 4px solid #e2e8f0; border-top: 4px solid #6366f1; border-radius: 50%; animation: rotate_anim 1s linear infinite;"></div>
    <style>
    @keyframes rotate_anim {
        to { transform: rotate(360deg); }
    }
    </style>
</div>`,
    explanation: [
      "@keyframes rotate: Declares animation stages. 'to' is equivalent to 100%.",
      "animation: rotate 1.2s: Attaches the animation, setting the duration to 1.2 seconds.",
      "infinite linear: Loops the animation indefinitely with a constant speed profile."
    ],
    importantProperties: [
      { name: "animation-iteration-count", desc: "Sets how many times the animation loops (number or infinite)." },
      { name: "animation-fill-mode", desc: "Configures how styles are applied before and after the animation runs (forwards, backwards)." },
      { name: "animation-delay", desc: "Sets a delay time before the animation starts running." }
    ],
    realWorld: "SaaS dashboards use animations to pulse notification dots, slide toast banners into view, and spin loading indicators.",
    commonMistakes: [
      "Forgetting to match the animation-name property with the name declared in the @keyframes block.",
      "Using complex, flashing animations that can trigger seizures or distract users."
    ],
    bestPractices: [
      "Respect user preferences by wrapping animations in media queries that check for reduced motion: `@media (prefers-reduced-motion)`.",
      "Use simple, subtle keyframes to enhance the user interface without distracting."
    ],
    practice: {
      question: "Write an animation keyframe block 'fade-in' that animates opacity from 0 to 1, and attach it to a class with a duration of 1s.",
      objective: "Define and attach custom keyframe sets.",
      instructions: "Combine @keyframes with the animation shorthand property.",
      starterCode: `/* Add keyframes and class */`,
      expectedOutput: "A fade-in animation ruleset.",
      hint: "Use @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }.",
      solution: `@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.faded-box {
  animation: fade-in 1s forwards;
}`
    },
    interview: {
      question: "What is animation-fill-mode: forwards and why is it used?",
      answer: "By default, when a CSS animation finishes, the element snaps back to its original pre-animation styles. Setting animation-fill-mode: forwards tells the browser to keep the styles of the final keyframe (100%) active on the element after the animation finishes.",
      explanation: "This allows slide-in or fade-in elements to remain visible after animating.",
      example: "Fade out box and keep it invisible: animation: fade 1s forwards."
    },
    interview2: {
      question: "What is the difference between a CSS Transition and a CSS Animation?",
      answer: "A transition requires a trigger (like hover, focus, or a class change) to move from an initial state to a final state. An animation runs automatically when the page loads, can loop indefinitely, and can move through multiple complex keyframe stages using @keyframes.",
      explanation: "Use transitions for simple state changes, and animations for complex loading states or continuous loops.",
      example: "Hover button grow: Transition. Rotating loading wheel: Animation."
    },
    revision: "Define multi-step animations using @keyframes. Attach them to elements using properties like duration, ease, iteration-count, and fill-mode to control behavior."
  },
  {
    id: "advanced-css",
    title: "Advanced CSS: Variables, calc() & clamp()",
    what: "Advanced CSS incorporates CSS variables (custom properties), mathematical functions (calc, clamp, min, max), and structural hierarchy controls (inheritance, cascade specificity).",
    why: "Websites need consistent scaling and values. Variables manage branding colors in one place, calc() solves mixed-unit math, and clamp() builds responsive typography without media queries.",
    syntax: `:root {
  --primary-color: #6366f1;
}
.box {
  width: calc(100% - 40px);
  background-color: var(--primary-color);
}`,
    basicExample: "A basic variable call: `color: var(--primary-color);`.",
    exampleHTML: `<div class="adv-card">
    <h4>Advanced CSS Sizing</h4>
    <p>Using calc limits and custom properties.</p>
</div>`,
    exampleCSS: `:root {
    --brand-indigo: #6366f1;
    --card-padding: 20px;
}
.adv-card {
    background-color: #f8fafc;
    border-left: 5px solid var(--brand-indigo);
    padding: var(--card-padding);
    width: calc(100% - 10px);
    font-size: clamp(14px, 2vw, 18px);
    font-family: sans-serif;
    color: #334155;
    border-radius: 4px;
}`,
    renderedOutput: `<div style="font-family: sans-serif; background-color: #f8fafc; border-left: 5px solid #6366f1; padding: 15px; border-radius: 4px; color: #334155;">
    <h4 style="margin: 0 0 4px 0; font-size: clamp(14px, 2vw, 18px);">Advanced CSS Sizing</h4>
    <p style="margin: 0; font-size: 13px;">Using calc limits and custom properties.</p>
</div>`,
    explanation: [
      "--brand-indigo: Declares a global custom property (CSS Variable) accessible anywhere in the stylesheet.",
      "calc(100% - 10px): Subtracts 10px from 100% container width, solving margin math.",
      "clamp(14px, 2vw, 18px): Fluidly scales text size between a minimum of 14px and a maximum of 18px."
    ],
    importantProperties: [
      { name: "var()", desc: "Retrieves the value of a CSS custom property." },
      { name: "calc()", desc: "Performs mathematical operations (+, -, *, /) directly in CSS." },
      { name: "clamp()", desc: "Clamps a value between an upper and lower bound based on a preferred value." }
    ],
    realWorld: "Modern dashboards define theme palettes using variables, and update colors globally across dark themes by adding a single selector class (e.g. .dark) to the HTML root.",
    commonMistakes: [
      "Forgetting the required spaces around operators inside calc() (e.g. writing calc(100%-10px) instead of calc(100% - 10px)), which syntax-breaks the calculation.",
      "Declaring custom variables without the double-dash prefix (e.g. brand-color: blue instead of --brand-color: blue)."
    ],
    bestPractices: [
      "Use CSS variables for colors, spacing values, and font families to maintain consistency.",
      "Use clamp() for responsive typography to reduce the number of media queries."
    ],
    practice: {
      question: "Declare a local variable '--text-size' with value '22px' inside a '.large-text' class, and apply it to the font-size of that selector.",
      objective: "Declare and load local CSS custom properties.",
      instructions: "Apply local variable declaration and var load.",
      starterCode: `.large-text {
    /* Style here */
}`,
      expectedOutput: "A text class configured via local font-size variables.",
      hint: "Use --text-size: 22px; and font-size: var(--text-size);.",
      solution: `.large-text {
    --text-size: 22px;
    font-size: var(--text-size);
}`
    },
    interview: {
      question: "How do CSS Custom Properties differ from preprocessor variables (like Sass)?",
      answer: "CSS Custom Properties (CSS variables) are native browser properties. They are dynamic, meaning they can change in the browser (e.g., inside media queries or theme overrides) and can be accessed by scripts. Preprocessor variables (like Sass or Less) are compiled into static CSS values before shipping to the browser, meaning they do not exist in runtime.",
      explanation: "Native CSS variables are much more powerful for building run-time themes like Dark Mode.",
      example: "Sass: $color: red; (outputs 'color: red' to browser). Native: --color: red; (retains var reference in browser stylesheet)."
    },
    revision: "CSS Variables declare reusable custom properties prefixed with '--' and loaded using var(). Use calc() for mixed-unit math and clamp() for fluid, responsive typography."
  }
];

module.exports = cssLessons;
