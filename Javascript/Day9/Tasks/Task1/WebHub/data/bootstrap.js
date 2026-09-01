// Bootstrap 5 Complete Curriculum Data - 9 Lessons

const bootstrapLessons = [
  {
    id: "introduction",
    title: "Bootstrap Introduction & Setup",
    what: "Bootstrap 5 is the world's most popular open-source frontend toolkit. It provides pre-styled UI components, a responsive grid system, and typography layout styles to accelerate web design.",
    why: "Bootstrap saves development time. Instead of coding buttons, navigation bars, grids, modals, and input fields from scratch, you assemble pages by applying pre-styled class names to your HTML markup.",
    syntax: `<!-- Link Bootstrap CSS in head -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">`,
    basicExample: "A styled Bootstrap button: `<button class=\"btn btn-primary\">Primary Button</button>`.",
    exampleHTML: `<!DOCTYPE html>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3 bg-light">
    <div class="card p-3 shadow-sm" style="max-width: 320px;">
        <h4 class="text-primary fw-bold">Ready Component</h4>
        <p class="text-muted small">This card and text are styled instantly using Bootstrap classes.</p>
        <button class="btn btn-success w-100 font-weight-bold">Start Lesson</button>
    </div>
</body>
</html>`,
    expectedOutputDescription: "A styled card on a grey background, containing a blue title, muted grey text, and a green button stretching across the card width.",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px; background-color: #f8fafc;">
    <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; background: white; max-width: 280px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <h5 style="color: #0d6efd; font-weight: bold; margin: 0 0 6px 0; font-size: 16px;">Ready Component</h5>
        <p style="color: #6c757d; font-size: 12px; margin-bottom: 12px;">This card and text are styled instantly using Bootstrap classes.</p>
        <button style="background-color: #198754; color: white; border: none; padding: 6px 12px; border-radius: 4px; width: 100%; font-weight: bold; font-size: 12px; cursor: pointer;">Start Lesson</button>
    </div>
</div>`,
    explanation: [
      "card: Applies a white background, thin border, and rounded corners.",
      "p-3: Spacing utility adding padding to all sides.",
      "text-primary: Sets the title text to the default primary color (blue).",
      "btn-success: Styles the button into a green action button."
    ],
    importantProperties: [
      { name: "btn", desc: "Base class that resets default button styling and sets padding." },
      { name: "w-100", desc: "Forces elements to expand to 100% width of their parent container." },
      { name: "shadow-sm", desc: "Adds a subtle box-shadow effect to containers." }
    ],
    realWorld: "Fast prototypes, admin dashboards, backoffice panels, and landing pages are built using Bootstrap templates to achieve cohesive responsive grids rapidly.",
    commonMistakes: [
      "Omitting the primary .btn base class and writing only color modifiers (e.g. class='btn-primary'), which removes padding and layouts.",
      "Forgetting to load Bootstrap's CSS stylesheet in the page header."
    ],
    bestPractices: [
      "Load the CSS in the head and the JS bundle before the closing body tag.",
      "Do not modify Bootstrap's CSS files directly; write custom overrides in a separate stylesheet."
    ],
    practice: {
      question: "Write an HTML block using Bootstrap classes to create an alert container styled with red 'danger' styling and containing the text 'Failed!'.",
      objective: "Leverage standard Bootstrap component classes.",
      instructions: "Create a div element with alert and alert-danger classes.",
      starterCode: `<!-- Write Bootstrap alert -->`,
      expectedOutput: "A red alert banner representing failure.",
      hint: "Use classes class='alert alert-danger'.",
      solution: `<div class="alert alert-danger" role="alert">
    Failed! Please check your parameters.
</div>`
    },
    interview: {
      question: "What is Bootstrap 5 and how does it differ from custom CSS?",
      answer: "Bootstrap 5 is an open-source frontend framework that provides pre-styled UI components and helper utilities. Instead of writing custom properties (like border, padding, color) from scratch in a CSS file, you apply utility class names (like .card, .p-3, .text-primary) directly to HTML tags, speeding up development and maintaining responsive alignments.",
      explanation: "Bootstrap handles cross-browser bugs and responsive adjustments automatically.",
      example: "Bootstrap: <div class='card p-3'>. Custom CSS: div { border: 1px solid #ccc; padding: 15px; border-radius: 4px; }."
    },
    revision: "Bootstrap 5 is a mobile-first component and utility framework. Load its CDN in the head, and apply classes like .btn, .card, and utility modifiers directly to structure layouts."
  },
  {
    id: "containers-breakpoints",
    title: "Containers & Breakpoints",
    what: "Containers are the basic layout element in Bootstrap and are required when using the grid system. Bootstrap provides fixed-width containers (.container) and full-bleed fluid containers (.container-fluid).",
    why: "Containers hold, center, and pad your page contents. On large monitors, they prevent paragraphs from stretching raw margins from edge to edge by setting width limits.",
    syntax: `<div class="container">
  <!-- Centered fixed content -->
</div>
<div class="container-fluid">
  <!-- Full-width fluid content -->
</div>`,
    basicExample: "A fixed container: `<div class=\"container bg-light\">Centered Box</div>`.",
    exampleHTML: `<div class="container-fluid bg-secondary text-white p-2 mb-2">
    Fluid Container (100% wide)
</div>
<div class="container bg-primary text-white p-2">
    Fixed Container (Centered)
</div>`,
    expectedOutputDescription: "A full-width grey strip at the top, followed by a centered blue container with empty spacing margins on the left and right.",
    renderedOutput: `<div style="font-family: sans-serif; font-size: 13px; color: white;">
    <div style="background-color: #6c757d; padding: 8px; width: 100%; margin-bottom: 6px;">
        Fluid Container (100% wide)
    </div>
    <div style="background-color: #0d6efd; padding: 8px; max-width: 90%; margin: 0 auto; border-radius: 4px; text-align: center;">
        Fixed Container (Centered)
    </div>
</div>`,
    explanation: [
      "container-fluid: Spans the full width of the screen at all times.",
      "container: Sets max-widths matching screen sizes (e.g. 540px, 720px, 960px) and centers content.",
      "bg-primary: Applies Bootstrap's brand blue background color."
    ],
    importantProperties: [
      { name: "container-sm", desc: "Stays 100% fluid on mobile, and locks into fixed width at the sm breakpoint (576px) and wider." },
      { name: "container-lg", desc: "Stays fluid until the lg breakpoint (992px) before locking into fixed width." },
      { name: "breakpoints", desc: "Bootstrap's responsive width boundaries: sm (576px), md (768px), lg (992px), xl (1200px), xxl (1400px)." }
    ],
    realWorld: "Websites use standard centered containers (.container) for main content bodies, while landing headers and maps might use full-width fluid layouts (.container-fluid).",
    commonMistakes: [
      "Nesting containers inside other containers, which stacks padding and distorts horizontal alignment.",
      "Placing grid column elements directly outside container roots, causing screen overflows."
    ],
    bestPractices: [
      "Always wrap your rows and columns inside a container to prevent padding glitches.",
      "Use regular containers for readable articles, and fluid containers for dashboards."
    ],
    practice: {
      question: "Create a container layout that is always full-width (fluid) and has green background styling (bg-success) and white text.",
      objective: "Define fluid grid containers.",
      instructions: "Apply container-fluid, bg-success, and text-white classes to a div.",
      starterCode: `<!-- Write fluid div wrapper -->`,
      expectedOutput: "A full-width green layout row.",
      hint: "Use class='container-fluid bg-success text-white'.",
      solution: `<div class="container-fluid bg-success text-white p-3">
    Fluid Success Block
</div>`
    },
    interview: {
      question: "What is the difference between .container and .container-fluid?",
      answer: "The .container class is a fixed-width container. Its max-width adjusts at specific breakpoints (e.g., locks at 960px width on desktop) and centers content in the middle of the screen. The .container-fluid class is a full-width container, stretching across 100% of the viewport width at all times.",
      explanation: "Containers are the responsive anchors. Fluid is for dashboards and full-bleed graphics; regular container is for readable articles.",
      example: "Fluid: 100% width on mobile and desktop. Fixed: 100% on mobile, centered block on desktop."
    },
    revision: "Use .container for centered page outlines that lock width on desktop. Use .container-fluid for full-width components and dashboard layouts."
  },
  {
    id: "grid",
    title: "Grid System (row & col)",
    what: "The Bootstrap grid system is a mobile-first flexbox grid. It uses containers, rows, and columns to organize content, dividing the page width into up to 12 responsive columns per row.",
    why: "Grids divide your screen. You can set columns to display full-width (col-12) on mobile, but align side-by-side as four boxes (col-md-3) on desktop resolutions.",
    syntax: `<div class="row">
  <div class="col-md-4">Col A</div>
  <div class="col-md-8">Col B</div>
</div>`,
    basicExample: "Splitting a row into two equal halves on desktop: `<div class=\"row\"><div class=\"col-md-6\">Left</div><div class=\"col-md-6\">Right</div></div>`.",
    exampleHTML: `<div class="container-fluid text-center">
    <div class="row g-2">
        <div class="col-6 col-md-3"><div class="bg-primary text-white p-3 rounded">Column 1</div></div>
        <div class="col-6 col-md-3"><div class="bg-primary text-white p-3 rounded">Column 2</div></div>
        <div class="col-6 col-md-3"><div class="bg-primary text-white p-3 rounded">Column 3</div></div>
        <div class="col-6 col-md-3"><div class="bg-primary text-white p-3 rounded">Column 4</div></div>
    </div>
</div>`,
    expectedOutputDescription: "Four equally spaced blue boxes in a single horizontal row on desktop. On mobile, they reflow into two rows of two boxes each.",
    renderedOutput: `<div style="font-family: sans-serif; font-size: 13px;">
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; text-align: center; color: white;">
        <div style="background-color: #0d6efd; padding: 10px; border-radius: 4px;">Column 1</div>
        <div style="background-color: #0d6efd; padding: 10px; border-radius: 4px;">Column 2</div>
        <div style="background-color: #0d6efd; padding: 10px; border-radius: 4px;">Column 3</div>
        <div style="background-color: #0d6efd; padding: 10px; border-radius: 4px;">Column 4</div>
    </div>
</div>`,
    explanation: [
      "row: The parent wrapper flex line that handles column wrapping.",
      "col-6: Displays each column at 50% width (6/12 units) by default on mobile.",
      "col-md-3: Shrinks columns to 25% width (3/12 units) on tablets and desktops (>=768px).",
      "g-2: Sets a small gutter spacing gap between the columns."
    ],
    importantProperties: [
      { name: "row", desc: "Flex container holding grid columns, canceling outer padding with negative margins." },
      { name: "col-X", desc: "Sets a column width to span X units out of the 12-column grid." },
      { name: "g-*", desc: "Gutter spacing utility controlling gaps between grid columns." }
    ],
    realWorld: "E-commerce grids, product lists, dashboard metrics cards, and article feeds use grid columns to reflow content across different resolutions.",
    commonMistakes: [
      "Placing column classes (.col-*) directly inside container nodes without a .row parent wrapper.",
      "Summing column spans past 12 in a single row without intending to wrap items."
    ],
    bestPractices: [
      "Use responsive column classes (col-md-*, col-lg-*) to build clean mobile-first grids.",
      "Use auto-width columns (.col) to distribute space equally among elements."
    ],
    practice: {
      question: "Write an HTML block that creates a two-column grid. On small screens, both columns should stack (full-width), but on medium screens (md) and wider, they should take equal half-widths.",
      objective: "Utilize responsive column prefixes.",
      instructions: "Create a row containing two divs with col-12 col-md-6 classes.",
      starterCode: `<div class="row">
    <!-- Columns here -->
</div>`,
      expectedOutput: "A responsive grid stack that splits side-by-side on desktop.",
      hint: "Use class='col-12 col-md-6' on both column elements.",
      solution: `<div class="row">
    <div class="col-12 col-md-6">Left Column</div>
    <div class="col-12 col-md-6">Right Column</div>
</div>`
    },
    interview: {
      question: "How does the Bootstrap grid system calculate column sizes?",
      answer: "The Bootstrap grid system is based on a 12-column layout. A column class specifies how many of these 12 tracks to occupy. For example, .col-6 occupies 6 out of 12 tracks (50% width), .col-4 occupies 4 out of 12 tracks (33.3% width), and .col-12 occupies the full width (100% width).",
      explanation: "This 12-factor layout makes it easy to split rows into halves (6+6), thirds (4+4+4), quarters (3+3+3+3), or asymmetric structures (8+4).",
      example: "col-md-8 + col-md-4 = 12 total units."
    },
    revision: "The Bootstrap grid uses rows and columns inside containers. It splits the screen into 12 column units, letting you define responsive column spans using breakpoints (sm, md, lg)."
  },
  {
    id: "typography-colors",
    title: "Typography & Colors",
    what: "Bootstrap typography styles standard text tags natively. Colors are applied to text and backgrounds using brand color names (primary, secondary, success, danger, warning, info, light, dark).",
    why: "Bootstrap standardizes font families, lead paragraphs, margins, and headings. Utility colors allow developers to style warnings, text, and backgrounds instantly.",
    syntax: `<p class="lead text-muted bg-light p-2">
  Styled lead text on a light background.
</p>`,
    basicExample: "Applying primary color: `<span class=\"text-primary\">Blue Text</span>`.",
    exampleHTML: `<div class="p-3">
    <h2 class="display-6 text-primary">Heading Display</h2>
    <p class="lead">This paragraph uses the lead class for emphasis.</p>
    <p class="text-success bg-success-subtle p-2 rounded border border-success">Status: Operation Successful.</p>
</div>`,
    expectedOutputDescription: "A large heading, a large-format lead paragraph, and a green status alert block with a thin green border.",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px;">
    <h3 style="color: #0d6efd; margin: 0 0 4px 0; font-size: 22px; font-weight: 300;">Heading Display</h3>
    <p style="font-size: 15px; color: #334155; margin-bottom: 8px;">This paragraph uses the lead class for emphasis.</p>
    <div style="background-color: #d1fae5; color: #065f46; border: 1px solid #34d399; padding: 8px; border-radius: 4px; font-size: 13px; font-weight: bold;">Status: Operation Successful.</div>
</div>`,
    explanation: [
      "display-6: Applies a large, light-weight display heading style.",
      "lead: Increases font size and line height for text presentation.",
      "text-success: Applies green text coloring indicating success."
    ],
    importantProperties: [
      { name: "lead", desc: "Increases paragraph text size and spacing." },
      { name: "text-muted", desc: "Mutes text color, rendering it in a soft grey shade." },
      { name: "bg-*", desc: "Sets background colors using brand naming (bg-primary, bg-danger)." }
    ],
    realWorld: "Websites use display classes to create large hero headings, lead classes for introductory paragraphs, and color classes to highlight alerts and alerts states.",
    commonMistakes: [
      "Confusing text-color classes (e.g. text-success) with background color classes (e.g. bg-success).",
      "Using headings for visual sizing instead of using heading hierarchy tags (h1-h6) or display classes."
    ],
    bestPractices: [
      "Use text-muted for secondary details to establish visual hierarchy.",
      "Use light background colors (.bg-*-subtle) combined with dark text colors to ensure high contrast accessibility."
    ],
    practice: {
      question: "Create a paragraph using Bootstrap classes to display white text (text-white) on a red background (bg-danger) with a padding of 3.",
      objective: "Combine color and spacing classes.",
      instructions: "Apply bg-danger, text-white, and p-3 classes to a paragraph.",
      starterCode: `<p class="/* Add classes */">Critical Failure</p>`,
      expectedOutput: "A red alert box displaying white text.",
      hint: "Use classes class='bg-danger text-white p-3'.",
      solution: `<p class="bg-danger text-white p-3">Critical Failure</p>`
    },
    interview: {
      question: "How do subtle background classes (like .bg-success-subtle) differ from standard background classes (like .bg-success)?",
      answer: "Standard background classes (.bg-success) apply a solid, saturated brand color (e.g. dark green) with white text. Subtle classes (.bg-success-subtle) apply a light tint of the color (e.g. light green), which is designed to be paired with dark text to ensure high contrast accessibility.",
      explanation: "Subtle classes prevent interfaces from looking overly saturated.",
      example: "Alert backgrounds: bg-danger-subtle (light red) with text-danger (dark red text)."
    },
    revision: "Use display-* and lead classes for text formatting. Use text-* and bg-* classes to apply brand colors (primary, success, danger) to text and backgrounds."
  },
  {
    id: "buttons-cards",
    title: "Buttons & Cards",
    what: "Buttons (.btn) trigger actions. Cards (.card) wrap related content, providing structures for header titles, bodies, and footer buttons.",
    why: "Buttons and cards are the basic building blocks of modern user interfaces. Having pre-styled elements for cards and actions speeds up development.",
    syntax: `<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Card content details.</p>
    <button class="btn btn-primary">Action</button>
  </div>
</div>`,
    basicExample: "A styled Bootstrap button: `<button class=\"btn btn-primary\">Primary Button</button>`.",
    exampleHTML: `<div class="card" style="max-width: 300px;">
    <div class="card-header bg-dark text-white fw-bold">Featured Topic</div>
    <div class="card-body">
        <h5 class="card-title fw-bold text-slate-900">Learning Cards</h5>
        <p class="card-text text-muted small">Cards coordinate content blocks cleanly.</p>
        <a href="#" class="btn btn-primary btn-sm w-100">Select Item</a>
    </div>
</div>`,
    expectedOutputDescription: "A card with a dark header bar, containing a card body with a bold title, description text, and a blue button stretching across the card width.",
    renderedOutput: `<div style="font-family: sans-serif; display: flex; justify-content: center; padding: 10px;">
    <div style="border: 1px solid #cbd5e1; border-radius: 6px; overflow: hidden; background: white; max-width: 250px; width: 100%;">
        <div style="background-color: #212529; color: white; padding: 8px 12px; font-weight: bold; font-size: 13px;">Featured Topic</div>
        <div style="padding: 15px;">
            <h5 style="margin: 0 0 6px 0; font-size: 15px; font-weight: bold; color: #1e3a8a;">Learning Cards</h5>
            <p style="color: #6c757d; font-size: 12px; margin-bottom: 12px;">Cards coordinate content blocks cleanly.</p>
            <button style="background-color: #0d6efd; color: white; border: none; padding: 6px 12px; border-radius: 4px; width: 100%; font-size: 12px; cursor: pointer; font-weight: bold;">Select Item</button>
        </div>
    </div>
</div>`,
    explanation: [
      "card-header: Adds a header bar at the top of the card.",
      "card-body: Adds padding inside the card container.",
      "btn-sm: Reduces the button size."
    ],
    importantProperties: [
      { name: "card-title", desc: "Styles headings inside a card body." },
      { name: "btn-outline-*", desc: "Styles buttons with borders and transparent backgrounds." },
      { name: "card-group", desc: "Groups multiple cards together into a single card container." }
    ],
    realWorld: "E-commerce sites display product catalogs as grids of cards containing photos, pricing, and purchase buttons.",
    commonMistakes: [
      "Forgetting to wrap text nodes inside the .card-body container, which results in text touching the card borders with zero padding.",
      "Applying button classes to elements without including the primary .btn base class."
    ],
    bestPractices: [
      "Control card widths by wrapping them in responsive grid columns.",
      "Apply role='button' when styling anchor links as buttons."
    ],
    practice: {
      question: "Build a bootstrap card with header text 'Notice', body text 'Maintenance is scheduled today', and a footer text 'Admin Panel'.",
      objective: "Use header, body, and footer card components.",
      instructions: "Combine card, card-header, card-body, and card-footer classes.",
      starterCode: `<!-- Write card layout here -->`,
      expectedOutput: "A structured card divided into three horizontal panels.",
      hint: "Create an outer div.card, and child divs with card-header, card-body, and card-footer classes.",
      solution: `<div class="card">
    <div class="card-header">Notice</div>
    <div class="card-body">
        <p class="card-text">Maintenance is scheduled today.</p>
    </div>
    <div class="card-footer text-muted">Admin Panel</div>
</div>`
    },
    interview: {
      question: "Which HTML elements can you style using Bootstrap button classes?",
      answer: "You can apply button classes (.btn, .btn-*) to <button> elements, <a> (anchor) elements, and <input> tags (like input type='submit'). When styling an anchor <a> as a button, you must add role='button' to tell screen readers that the link behaves like a button.",
      explanation: "This ensures the elements pass accessibility standards.",
      example: "<a href='#' class='btn btn-success' role='button'>Save</a>"
    },
    revision: "Cards (.card) organize content layouts. Buttons (.btn) style trigger actions. Wrap card text inside the .card-body container to ensure proper padding."
  },
  {
    id: "navbar",
    title: "Responsive Navbar",
    what: "The Bootstrap Navbar is a responsive navigation header. It provides brand logos, navigation links, and dropdown lists, collapsing into a mobile hamburger menu on small screens.",
    why: "Creating responsive navbars from scratch is difficult. Bootstrap's navbar collapses links into a mobile toggle menu automatically.",
    syntax: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>`,
    basicExample: "A basic navbar shell: `<nav class=\"navbar navbar-dark bg-dark\"></nav>`.",
    exampleHTML: `<nav class="navbar navbar-expand bg-primary navbar-dark rounded p-2">
  <div class="container-fluid">
    <span class="navbar-brand fw-bold">WebLearn</span>
    <div class="navbar-nav gap-2">
        <a class="nav-link active text-white" href="#">Home</a>
        <a class="nav-link text-white-50" href="#">About</a>
    </div>
  </div>
</nav>`,
    expectedOutputDescription: "A blue navigation header bar with 'WebLearn' on the left and 'Home' and 'About' links on the right.",
    renderedOutput: `<div style="font-family: sans-serif; font-size: 13px;">
    <nav style="background-color: #0d6efd; padding: 8px 12px; border-radius: 4px; display: flex; align-items: center; justify-content: space-between; color: white;">
        <span style="font-size: 16px; font-weight: bold;">WebLearn</span>
        <div style="display: flex; gap: 12px;">
            <a href="#" style="color: white; text-decoration: none; font-weight: bold;">Home</a>
            <a href="#" style="color: rgba(255, 255, 255, 0.7); text-decoration: none;">About</a>
        </div>
    </nav>
</div>`,
    renderedOutput: `<div style="font-family: sans-serif; font-size: 13px;">
    <nav style="background-color: #0d6efd; padding: 8px 12px; border-radius: 4px; display: flex; align-items: center; justify-content: space-between; color: white;">
        <span style="font-size: 16px; font-weight: bold;">WebLearn</span>
        <div style="display: flex; gap: 12px;">
            <a href="#" style="color: white; text-decoration: none; font-weight: bold;">Home</a>
            <a href="#" style="color: rgba(255, 255, 255, 0.7); text-decoration: none;">About</a>
        </div>
    </nav>
</div>`,
    explanation: [
      "navbar: Base navbar container tag.",
      "navbar-expand: Prevents the navbar from collapsing, keeping items visible.",
      "navbar-brand: Pre-styled block for brand titles or logo images."
    ],
    importantProperties: [
      { name: "navbar-expand-lg", desc: "Collapses navigation links into a hamburger menu on viewport screens narrower than lg (992px)." },
      { name: "navbar-toggler", desc: "The hamburger button that toggles collapsed links in mobile views." },
      { name: "navbar-nav", desc: "Formats links list alignment and spacing." }
    ],
    realWorld: "Commercial portals and portfolios use navbars to organize top-level page routes.",
    commonMistakes: [
      "Forgetting to load Bootstrap's JavaScript bundle, which prevents mobile toggle menus from opening when clicked.",
      "Forgetting to match the data-bs-target ID with the collapsible container ID."
    ],
    bestPractices: [
      "Use data-bs-theme='dark' to easily configure dark background themes.",
      "Set sticky-top on navbars to keep headers locked to the top when scrolling."
    ],
    practice: {
      question: "Write an HTML navbar styled with dark background settings (navbar-dark bg-dark) containing a single brand logo named 'Brand'.",
      objective: "Set up the navbar shell and brand block.",
      instructions: "Create nav element with navbar classes and navbar-brand link.",
      starterCode: `<!-- Create dark navbar logo -->`,
      expectedOutput: "A dark heading navigation strip featuring a single branding text.",
      hint: "Use classes class='navbar navbar-dark bg-dark' and anchor class='navbar-brand'.",
      solution: `<nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand</a>
    </div>
</nav>`
    },
    interview: {
      question: "How does the Bootstrap navbar collapse and expand on mobile screens?",
      answer: "The navbar uses .navbar-expand-* classes. When screen width drops below the breakpoint threshold (e.g. lg, 992px), the container collapses the child menu (.navbar-collapse) and displays the toggler button (.navbar-toggler). When the toggler is clicked, Bootstrap's JS toggles the .show class on the collapsed menu.",
      explanation: "This enables smooth responsive transformations using CSS media queries and JS event bindings.",
      example: "navbar-expand-md collapses on screens smaller than 768px wide."
    },
    revision: "Bootstrap's navbar collapses navigation links into hamburger toggles on mobile. Ensure you load the Bootstrap JS bundle to enable toggle functionality."
  },
  {
    id: "alerts-components",
    title: "Alerts & Core Components",
    what: "Bootstrap components are pre-styled elements. Alerts (.alert) display contextual notifications, badges (.badge) display counts, and breadcrumbs (.breadcrumb) indicate page hierarchy.",
    why: "Pre-styled warning boxes and notifications save time. Instead of coding spacing and borders, you apply alert classes to elements.",
    syntax: `<div class="alert alert-warning" role="alert">
  Warning notification message!
</div>`,
    basicExample: "A warning alert box: `<div class=\"alert alert-warning\">Notice</div>`.",
    exampleHTML: `<div class="p-2">
    <div class="alert alert-info mb-2" role="alert">
        Information alert with a <a href="#" class="alert-link">hyperlink</a> inside.
    </div>
    <span class="badge bg-secondary">New update</span>
</div>`,
    expectedOutputDescription: "A blue alert box with a highlighted link, followed by a grey badge badge tag below.",
    renderedOutput: `<div style="font-family: sans-serif; font-size: 13px;">
    <div style="background-color: #cff4fc; color: #055160; border: 1px solid #b6effb; padding: 10px; border-radius: 4px; margin-bottom: 6px;">
        Information alert with a <a href="#" style="color: #04414d; font-weight: bold; text-decoration: underline;">hyperlink</a> inside.
    </div>
    <span style="background-color: #6c757d; color: white; padding: 3px 6px; border-radius: 4px; font-size: 10px; font-weight: bold;">New update</span>
</div>`,
    explanation: [
      "alert-info: Applies light blue styling indicating information.",
      "alert-link: Styles links inside the alert to match the alert's text color.",
      "badge bg-secondary: Styles text into a small pill-shaped badge with a grey background."
    ],
    importantProperties: [
      { name: "alert", desc: "Base alert box class that sets padding and border-radius." },
      { name: "alert-link", desc: "Aligns colors of links inside alerts with the alert text." },
      { name: "badge", desc: "Styles text into small badge labels, commonly used for notifications or counts." }
    ],
    realWorld: "Websites use alerts to display status messages (like 'Profile Saved' or 'Validation Failed') at the top of forms.",
    commonMistakes: [
      "Forgetting to add role='alert' to alert containers, which prevents screen readers from announcing warning messages to users.",
      "Using alerts for layout containers."
    ],
    bestPractices: [
      "Use appropriate contextual classes (danger, warning, success) matching status updates.",
      "Use dismissible alert configurations so users can dismiss notifications."
    ],
    practice: {
      question: "Create a warning alert box (alert-warning) that is dismissible, containing text 'Unsaved shifts'.",
      objective: "Build dismissible alerts.",
      instructions: "Combine alert-dismissible and alert-warning classes.",
      starterCode: `<!-- Write warning alert -->`,
      expectedOutput: "A yellow alert box displaying a close button.",
      hint: "Use classes class='alert alert-warning alert-dismissible fade show' and include a close button.",
      solution: `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    Unsaved shifts.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
    },
    interview: {
      question: "Why should you add role='alert' to an alert box container?",
      answer: "The role='alert' attribute is an ARIA accessibility configuration. It tells the browser that the container holds a critical warning message. When the alert appears on screen, the screen reader will interrupt its current announcement to read the alert text aloud to the user.",
      explanation: "This ensures that dynamic error notifications are announced to visually impaired users.",
      example: "<div class='alert alert-danger' role='alert'>Invalid Login!</div>"
    },
    revision: "Alerts (.alert) display warnings. Badges (.badge) display counts. Set role='alert' on alert containers to support screen-reader accessibility."
  },
  {
    id: "progress-spinners",
    title: "Progress Bars & Spinners",
    what: "Progress bars (.progress) display completion scales. Spinners (.spinner-border) display loading indicators.",
    why: "Visual cues manage user expectations. Showing spinners during API calls and progress bars during file uploads makes pages feel responsive.",
    syntax: `<div class="progress">
  <div class="progress-bar" style="width: 50%;">50%</div>
</div>
<div class="spinner-border text-primary"></div>`,
    basicExample: "A spinner icon: `<div class=\"spinner-border\"></div>`.",
    exampleHTML: `<div class="p-2">
    <div class="progress mb-3" style="height: 15px;">
        <div class="progress-bar bg-success" style="width: 60%;">60%</div>
    </div>
    <div class="d-flex align-items-center gap-2">
        <div class="spinner-border text-primary spinner-border-sm" role="status"></div>
        <span class="small">Uploading assets...</span>
    </div>
</div>`,
    expectedOutputDescription: "A green progress bar at 60% completion, followed by an animated blue spinner and text below.",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px;">
    <div style="background-color: #e2e8f0; border-radius: 4px; height: 15px; overflow: hidden; margin-bottom: 10px;">
        <div style="background-color: #198754; color: white; text-align: center; font-size: 10px; line-height: 15px; width: 60%;">60%</div>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
        <div style="width: 16px; height: 16px; border: 2px solid #e2e8f0; border-top: 2px solid #0d6efd; border-radius: 50%; animation: rotate_btn_spin 1s linear infinite;"></div>
        <span style="font-size: 12px; color: #475569;">Uploading assets...</span>
    </div>
    <style>
    @keyframes rotate_btn_spin {
        to { transform: rotate(360deg); }
    }
    </style>
</div>`,
    explanation: [
      "progress: Wrapper setting the background bar width.",
      "progress-bar: Inner bar styled with a percentage width.",
      "spinner-border-sm: Shrinks the loading spinner size to fit inline layouts."
    ],
    importantProperties: [
      { name: "progress-bar-striped", desc: "Adds angled stripes to the progress bar." },
      { name: "progress-bar-animated", desc: "Animates progress bar stripes from right to left." },
      { name: "spinner-grow", desc: "Styles the spinner as a pulsing, growing circle instead of a rotating loop." }
    ],
    realWorld: "SaaS dashboards use animated progress bars to track database syncs, and display loading spinners inside buttons during form submissions.",
    commonMistakes: [
      "Omitting accessibility attributes (like role='progressbar') on progress bars, which prevents screen readers from reading progress percentages.",
      "Applying width styles to the outer progress container instead of the inner progress-bar element."
    ],
    bestPractices: [
      "Add labels inside progress bars to ensure accessibility.",
      "Use spinner-border-sm inside buttons to display inline loading states."
    ],
    practice: {
      question: "Write a progress bar at 40% completion using Bootstrap theme styling (bg-info).",
      objective: "Practice building progress tracking tags.",
      instructions: "Combine progress and progress-bar classes with width inline style.",
      starterCode: `<!-- Write Progress component -->`,
      expectedOutput: "A light blue progress indicator representing partial completion.",
      hint: "Use wrapper class='progress' and child class='progress-bar bg-info' style='width: 40%'.",
      solution: `<div class="progress">
    <div class="progress-bar bg-info" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
</div>`
    },
    interview: {
      question: "How do you make a loading spinner accessible?",
      answer: "To make loading spinners accessible to screen readers, you should add role='status' to the container element and wrap a screen-reader-only text element (using the .visually-hidden class) inside it. This describes the loading state without displaying text on screen.",
      explanation: "Screen readers announce the hidden text (e.g. 'Loading...') when the spinner appears.",
      example: "<div class='spinner-border' role='status'><span class='visually-hidden'>Loading...</span></div>"
    },
    revision: "Use .progress and .progress-bar to display completion scales. Use .spinner-border and .spinner-grow to display loading indicators."
  },
  {
    id: "drawers-modals",
    title: "Accordions & Modals",
    what: "Accordions (.accordion) display collapsible sections. Modals (.modal) display popup dialog overlays. Offcanvas (.offcanvas) displays slide-in sidebar drawers.",
    why: "Accordions organize text heavy pages (like FAQs). Modals focus attention on critical actions without changing pages.",
    syntax: `<!-- Modal Shell -->
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">Content</div>
    </div>
  </div>
</div>`,
    basicExample: "A button triggering a modal: `<button data-bs-toggle=\"modal\" data-bs-target=\"#myModal\">Open</button>`.",
    exampleHTML: `<div class="p-2 text-center">
    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#demo_modal">
        Trigger Dialog (Needs JS)
    </button>
</div>`,
    expectedOutputDescription: "A blue button configured to open a popup modal when clicked (requires Bootstrap JS to function).",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px; text-align: center;">
    <button style="background-color: #0d6efd; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-weight: bold; font-size: 12px; cursor: pointer;">Open Modal Dialog</button>
</div>`,
    explanation: [
      "data-bs-toggle='modal': HTML5 data attribute instructing Bootstrap to toggle a modal.",
      "data-bs-target='#demo_modal': Links the button trigger to the target modal container ID.",
      "modal fade: Applies a smooth fade-in transition effect when opening the modal."
    ],
    importantProperties: [
      { name: "modal-dialog-centered", desc: "Centers the modal popup vertically on the screen." },
      { name: "accordion-collapse", desc: "Wraps collapsible text sections inside an accordion." },
      { name: "offcanvas-start", desc: "Slides the offcanvas drawer in from the left side of the screen." }
    ],
    realWorld: "FAQ pages use accordions to keep outlines clean, and profiles display terms of service links inside modal scroll wrappers.",
    commonMistakes: [
      "Forgetting to load Bootstrap's JavaScript bundle, which prevents modals and accordions from opening when clicked.",
      "Nesting modal containers inside other divs, which can cause background backdrop display issues."
    ],
    bestPractices: [
      "Always include close buttons with data-bs-dismiss='modal' inside modals.",
      "Use accordions to collapse text-heavy panels."
    ],
    practice: {
      question: "Build an accordion item with header 'Info' and collapse container containing body text 'Details'.",
      objective: "Build collapsible accordions.",
      instructions: "Combine accordion-item, accordion-header, and accordion-collapse classes.",
      starterCode: `<!-- Write accordion block -->`,
      expectedOutput: "A collapsible FAQ panel header.",
      hint: "Create a parent div.accordion and nested accordion-item containers.",
      solution: `<div class="accordion" id="acc">
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#col1">Info</button>
        </h2>
        <div id="col1" class="accordion-collapse collapse show">
            <div class="accordion-body">Details</div>
        </div>
    </div>
</div>`
    },
    interview: {
      question: "How do you trigger a Bootstrap modal programmatically?",
      answer: "You trigger a modal programmatically using Bootstrap's JavaScript class instance methods. Initialize the modal constructor and call .show() or .hide() methods in your script.",
      explanation: "This allows triggering dialogs after backend API responses.",
      example: "const myModal = new bootstrap.Modal('#myModal'); myModal.show();"
    },
    revision: "Accordions, modals, and offcanvas drawers require Bootstrap's JS bundle to toggle. Link trigger buttons to target container IDs using data-bs attributes."
  },
  {
    id: "forms-validation",
    title: "Forms & Validations",
    what: "Bootstrap forms format inputs, labels, and validation states. Inputs are styled with .form-control, labels with .form-label, and validation errors with .invalid-feedback.",
    why: "Default browser inputs look inconsistent. Bootstrap standardizes input dimensions, focus states, and handles validation feedback layouts.",
    syntax: `<div class="mb-3">
  <label class="form-label">Email</label>
  <input type="email" class="form-control" required>
  <div class="invalid-feedback">Invalid Email!</div>
</div>`,
    basicExample: "A standard text field: `<input type=\"text\" class=\"form-control\">`.",
    exampleHTML: `<div class="p-3 border rounded bg-white" style="max-width: 320px;">
    <div class="mb-3">
        <label for="b_user" class="form-label fw-bold">Username</label>
        <input type="text" id="b_user" class="form-control" placeholder="john_doe" required>
    </div>
    <div class="form-check mb-3">
        <input type="checkbox" class="form-check-input" id="b_check">
        <label class="form-check-label" for="b_check">Subscribe</label>
    </div>
    <button class="btn btn-primary w-100 font-weight-bold">Register</button>
</div>`,
    expectedOutputDescription: "A styled vertical sign-up box showing username and checkbox fields with a blue button at the bottom.",
    renderedOutput: `<div style="font-family: sans-serif; display: flex; justify-content: center; padding: 10px;">
    <div style="max-width: 260px; width: 100%; border: 1px solid #cbd5e1; border-radius: 6px; padding: 15px; background: white;">
        <div style="margin-bottom: 10px;">
            <label style="display: block; font-weight: bold; font-size: 12px; color: #1e3a8a; margin-bottom: 4px;">Username</label>
            <input type="text" style="width: 100%; padding: 4px 8px; font-size: 12px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box;" placeholder="john_doe">
        </div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <input type="checkbox" style="width: 14px; height: 14px; margin: 0;">
            <label style="font-size: 11px; color: #475569;">Subscribe</label>
        </div>
        <button style="width: 100%; background: #0d6efd; color: white; border: none; padding: 6px; font-weight: bold; border-radius: 4px; font-size: 12px; cursor: pointer;">Register</button>
    </div>
</div>`,
    explanation: [
      "form-control: Resets browser defaults, styles focus borders, and sets width to 100%.",
      "form-check: Aligns checkboxes and labels cleanly.",
      "mb-3: Adds margin spacing below the input group."
    ],
    importantProperties: [
      { name: "form-select", desc: "Styles drop-down select option lists." },
      { name: "form-floating", desc: "Creates input elements where labels float upwards when you focus or type." },
      { name: "was-validated", desc: "A class applied to the form container that triggers Bootstrap validation states (green/red borders) automatically." }
    ],
    realWorld: "Customer login forms, contact portals, checkout screens, and settings pages use form layouts to align elements.",
    commonMistakes: [
      "Omitting the .form-control class from text inputs, causing inputs to fall back to browser default sizes.",
      "Applying validation feedback classes without wrapping them inside a validated form container."
    ],
    bestPractices: [
      "Always associate labels with inputs to ensure accessibility.",
      "Use floating labels (.form-floating) to build modern sign-up sheets."
    ],
    practice: {
      question: "Write an HTML text field using Bootstrap form classes, with a label 'Search Keyword' and input placeholder 'Type here...'.",
      objective: "Arrange form elements with input styles.",
      instructions: "Combine form-label, form-control, and spacing.",
      starterCode: `<!-- Write form controls here -->`,
      expectedOutput: "A fully styled search entry block.",
      hint: "Use label class='form-label' and input class='form-control'.",
      solution: `<div class="mb-3">
    <label for="srch" class="form-label">Search Keyword</label>
    <input type="text" id="srch" class="form-control" placeholder="Type here...">
</div>`
    },
    interview: {
      question: "How does Bootstrap 5 handle form validation feedback layout?",
      answer: "Bootstrap 5 uses CSS sibling selectors. When a form container receives the .was-validated class, it displays green borders for valid fields and red borders for invalid fields. Sibling elements with .invalid-feedback or .valid-feedback classes are hidden or displayed based on the field's validation state.",
      explanation: "This allows displaying inline validation errors without using custom JavaScript to toggle messages.",
      example: "<input class='form-control' required><div class='invalid-feedback'>Required field!</div>"
    },
    revision: "Use .form-control for inputs, .form-label for labels, and .form-check for checkboxes/radio buttons. Use .form-floating to create modern floating labels."
  }
];

module.exports = bootstrapLessons;
