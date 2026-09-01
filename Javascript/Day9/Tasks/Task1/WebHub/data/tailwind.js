// Tailwind CSS Complete Curriculum Data - 9 Lessons

const tailwindLessons = [
  {
    id: "introduction",
    title: "Tailwind CSS Introduction",
    what: "Tailwind CSS is a utility-first CSS framework. Unlike Bootstrap, which provides pre-designed components (like cards or navbars), Tailwind provides low-level utility classes that you combine to build completely custom designs directly in your HTML.",
    why: "Tailwind eliminates writing custom CSS selectors. You build unique designs without leaving your HTML, maintaining clean files with zero unused stylesheet bloating.",
    syntax: `<!-- Tailwind Component Markup -->
<div class="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-6">
  <h2 class="tw-text-xl tw-font-bold tw-text-gray-800">Custom Title</h2>
</div>`,
    basicExample: "A styled Tailwind box: `<div class=\"tw-bg-blue-500 tw-p-4 tw-rounded\">Text</div>`.",
    exampleHTML: `<div class="tw-bg-slate-100 tw-p-4 tw-rounded-lg tw-shadow-sm tw-max-w-xs">
    <h5 class="tw-text-indigo-600 tw-font-semibold tw-text-base">Utility Build</h5>
    <p class="tw-text-slate-600 tw-text-sm tw-mt-1">Tailwind uses specific, single-purpose classes.</p>
    <button class="tw-mt-3 tw-bg-indigo-600 hover:tw-bg-indigo-700 tw-text-white tw-text-xs tw-font-bold tw-py-2 tw-px-4 tw-rounded">Learn more</button>
</div>`,
    expectedOutputDescription: "A styled grey card container containing an indigo title, slate-grey text, and a blue button that turns dark blue on hover.",
    renderedOutput: `<div style="font-family: sans-serif; background-color: #f1f5f9; padding: 1rem; border-radius: 0.5rem; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); max-width: 20rem; margin: 0 auto;">
    <h5 style="color: #4f46e5; font-weight: 600; font-size: 1rem; margin: 0 0 4px 0;">Utility Build</h5>
    <p style="color: #475569; font-size: 0.875rem; margin: 0 0 12px 0; line-height: 1.25rem;">Tailwind uses specific, single-purpose classes.</p>
    <button style="background-color: #4f46e5; color: white; font-size: 0.75rem; font-weight: bold; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; cursor: pointer;">Learn more</button>
</div>`,
    explanation: [
      "tw-bg-slate-100: Sets a light slate background color.",
      "tw-p-4, tw-mt-1: Spacing padding and margins.",
      "tw-text-indigo-600, tw-text-sm: Sizing and colors for text.",
      "hover:tw-bg-indigo-700: State variant class that changes background color on mouse hover."
    ],
    importantProperties: [
      { name: "Utility-first", desc: "Building designs using low-level utility classes directly in the markup." },
      { name: "Prefix variants", desc: "Appending state prefixes (hover:, focus:) to handle interactive states." },
      { name: "Responsive prefixes", desc: "Appending screen prefixes (sm:, md:) to handle responsive breakpoints." }
    ],
    realWorld: "Modern SaaS platforms and custom portfolios use Tailwind CSS to build highly unique designs that differ from standard Bootstrap templates.",
    commonMistakes: [
      "Expecting class names to match Bootstrap names (e.g., writing 'card' or 'btn', which do not exist in Tailwind).",
      "Cluttering HTML files with hundreds of class overrides without refactoring repeated patterns into reusable templates."
    ],
    bestPractices: [
      "Refactor repeated patterns into reusable templates (like partials) to keep HTML files clean.",
      "Use Tailwind's config file to customize brand colors, spacing scales, and breakpoints."
    ],
    practice: {
      question: "Write an HTML element styled with Tailwind classes (using 'tw-' prefix) to create a dark grey background (tw-bg-slate-800), white text (tw-text-white), and padding of level 4 (tw-p-4).",
      objective: "Practice building basic Tailwind blocks.",
      instructions: "Combine background, text color, and padding classes.",
      starterCode: `<!-- Write Tailwind box -->`,
      expectedOutput: "A padded dark grey layout box.",
      hint: "Use classes class='tw-bg-slate-800 tw-text-white tw-p-4'.",
      solution: `<div class="tw-bg-slate-800 tw-text-white tw-p-4">
    Tailwind content box.
</div>`
    },
    interview: {
      question: "What is utility-first CSS, and how does it differ from component frameworks like Bootstrap?",
      answer: "Utility-first CSS means building layouts using low-level, single-purpose classes (e.g. for margins, font sizes, colors) directly in the HTML. Component frameworks like Bootstrap provide pre-designed UI elements (like cards or alerts). Tailwind gives you the building blocks to build any design, whereas Bootstrap gives you pre-packaged components that are harder to customize.",
      explanation: "Tailwind doesn't impose a visual style; it acts as a styling tool inside your HTML.",
      example: "Bootstrap: .btn .btn-primary. Tailwind: .tw-bg-blue-600 .tw-text-white .tw-px-4 .tw-py-2 .tw-rounded."
    },
    revision: "Tailwind CSS is a utility-first CSS framework. It provides low-level utility classes that you apply directly to HTML tags, giving you complete design freedom without forcing a visual template."
  },
  {
    id: "spacing",
    title: "Spacing (Margin & Padding)",
    what: "Tailwind handles margins and padding using precise scales. It supports applying padding (tw-p-*) and margins (tw-m-*) uniformly, horizontally, vertically, or to specific sides.",
    why: "Tailwind's spacing scale is proportional, ensuring vertical rhythm and consistent alignments across all layout containers.",
    syntax: `<!-- Uniform padding and side margins -->
<div class="tw-p-6 tw-mt-4 tw-mb-2">
  Spaced Content
</div>`,
    basicExample: "A padded div: `<div class=\"tw-p-4\">Padded Content</div>`.",
    exampleHTML: `<div class="tw-bg-slate-200 tw-p-6">
    <div class="tw-bg-white tw-pt-4 tw-pb-2 tw-px-6 tw-mb-4">Padding Demo</div>
    <div class="tw-bg-white tw-p-4 tw-mx-auto tw-max-w-xs">Margin Demo</div>
</div>`,
    expectedOutputDescription: "A light grey background block containing a white card with left/right padding, and a centered white card below.",
    renderedOutput: `<div style="font-family: sans-serif; background-color: #e2e8f0; padding: 1.5rem;">
    <div style="background-color: white; padding-top: 1rem; padding-bottom: 0.5rem; padding-left: 1.5rem; padding-right: 1.5rem; margin-bottom: 1rem; font-weight: bold; color: #4f46e5; font-size: 13px;">Padding Demo</div>
    <div style="background-color: white; padding: 1rem; max-width: 15rem; margin: 0 auto; text-align: center; color: #10b981; font-weight: bold; font-size: 13px;">Margin Demo</div>
</div>`,
    explanation: [
      "tw-pt-4, tw-pb-2: Spacing parameters for top and bottom padding.",
      "tw-px-6: Horizontal padding (left and right).",
      "tw-mx-auto: Horizontally centers element blocks within their containers.",
      "tw-p-6: Adds 1.5rem (24px) padding to all four sides."
    ],
    importantProperties: [
      { name: "tw-p-*", desc: "Adds padding to all sides of an element." },
      { name: "tw-m-*", desc: "Adds margins to all sides of an element." },
      { name: "tw-gap-*", desc: "Adds grid or flexbox item gap spacing." }
    ],
    realWorld: "Card content clearance, grids spacing gaps, header offsets, and article margin wraps are set using spacing utilities.",
    commonMistakes: [
      "Thinking spacing units correspond directly to pixels (e.g. writing tw-p-10 and expecting 10px padding instead of 40px padding).",
      "Forgetting the required 'tw-' class prefix."
    ],
    bestPractices: [
      "Use consistent spacing increments (like steps of 4) to maintain vertical rhythm.",
      "Use horizontal auto margins (tw-mx-auto) to center layout blocks."
    ],
    practice: {
      question: "Apply top padding of level 6 (tw-pt-6), bottom margin of level 8 (tw-mb-8), and horizontal margin auto (tw-mx-auto) to a container.",
      objective: "Combine specific margin and padding configurations.",
      instructions: "Set tw-pt-6 tw-mb-8 tw-mx-auto in class list.",
      starterCode: `<div class="/* add classes here */">Spaced block</div>`,
      expectedOutput: "An element positioned with margins and top padding.",
      hint: "Use prefix 'tw-' before pt-6, mb-8, and mx-auto.",
      solution: `<div class="tw-pt-6 tw-mb-8 tw-mx-auto">Spaced block</div>`
    },
    interview: {
      question: "How do Tailwind spacing classes map to CSS values?",
      answer: "Tailwind's spacing scale uses a base factor where 1 unit equals 0.25rem (which translates to 4px by default). For example, tw-p-1 translates to padding: 4px; tw-p-4 translates to padding: 16px (1rem); and tw-p-8 translates to padding: 32px (2rem).",
      explanation: "This proportional multiplier ensures layout scaling conforms to standard pixel-grid increments.",
      example: "tw-m-12 maps to margin: 3rem (48px)."
    },
    revision: "Tailwind spacing uses a proportional scale where 1 unit equals 0.25rem (4px). Apply padding with tw-p-* and margins with tw-m-* using standard suffixes."
  },
  {
    id: "typography",
    title: "Typography",
    what: "Tailwind typography classes control font size, weight, colors, line height, alignment, and styles directly in the HTML tag.",
    why: "Saves you from writing custom text classes. You can make text small and muted (tw-text-sm tw-text-gray-500) or bold and large (tw-text-3xl tw-font-bold) instantly.",
    syntax: `<h1 class="tw-text-3xl tw-font-extrabold tw-tracking-tight tw-text-slate-900">
  Headline Content
</h1>`,
    basicExample: "A bold, large heading: `<h1 class=\"tw-text-2xl tw-font-bold\">Title</h1>`.",
    exampleHTML: `<div class="tw-p-3 bg-white border rounded">
    <h3 class="tw-text-xl tw-font-bold tw-text-indigo-600">Heading 3</h3>
    <p class="tw-text-sm tw-text-slate-500 tw-leading-relaxed tw-mt-2">This is a description paragraph with relaxed line height and muted grey text styling.</p>
</div>`,
    expectedOutputDescription: "A card displaying a bold indigo title and a paragraph with spacious, readable grey text copy.",
    renderedOutput: `<div style="font-family: sans-serif; padding: 1rem; border: 1px solid #e2e8f0; border-radius: 0.375rem; background: #fff;">
    <h3 style="font-size: 1.25rem; font-weight: bold; color: #4f46e5; margin: 0;">Heading 3</h3>
    <p style="font-size: 0.875rem; color: #64748b; line-height: 1.625; margin-top: 0.5rem; margin-bottom: 0;">This is a description paragraph with relaxed line height and muted grey text styling.</p>
</div>`,
    explanation: [
      "tw-text-xl: Sets font size to 1.25rem (20px).",
      "tw-font-bold: Sets font weight to 700.",
      "tw-text-indigo-600: Applies blue text color.",
      "tw-leading-relaxed: Increases line-height to 1.625, boosting article readability."
    ],
    importantProperties: [
      { name: "tw-text-*", desc: "Sets font size (text-xs, text-sm, text-lg, text-3xl)." },
      { name: "tw-font-*", desc: "Sets font weight (font-light, font-normal, font-bold, font-black)." },
      { name: "tw-leading-*", desc: "Sets line height (leading-tight, leading-normal, leading-relaxed)." }
    ],
    realWorld: "Blogs, headers, landing details, and settings labels rely on typography utilities. Tailwind's typography plugin (@tailwindcss/typography) is widely used to style raw markdown content.",
    commonMistakes: [
      "Using heading sizing classes without pairing them with correct HTML tags, hurting document hierarchy.",
      "Forgetting that typography color configurations (tw-text-blue-500) require color values (like 500) and cannot be just 'tw-text-blue'."
    ],
    bestPractices: [
      "Use relative units (rem) for sizing to ensure accessibility.",
      "Set readable line heights (leading-relaxed) for body paragraphs."
    ],
    practice: {
      question: "Style a blockquote using Tailwind classes to make the text size level 2 (tw-text-lg), text italic (tw-italic), and text color grey level 600.",
      objective: "Set font sizing, style, and colors.",
      instructions: "Apply tw-text-lg tw-italic tw-text-slate-600 in class list.",
      starterCode: `<p class="/* class list */">Quote text</p>`,
      expectedOutput: "A styled quote paragraph.",
      hint: "Use tw-text-slate-600 for the grey color.",
      solution: `<p class="tw-text-lg tw-italic tw-text-slate-600">Quote text</p>`
    },
    interview: {
      question: "What are font weight and sizing utilities in Tailwind, and how do you configure line height?",
      answer: "In Tailwind, font sizes are set using tw-text-{size} (e.g. tw-text-sm, tw-text-lg, tw-text-4xl). Font weights are set using tw-font-{weight} (e.g. tw-font-normal, tw-font-bold, tw-font-black). Line height is configured using the leading-{height} classes (e.g. tw-leading-tight, tw-leading-relaxed).",
      explanation: "Pairing size classes with proportional line height is critical for text layouts.",
      example: "tw-text-2xl tw-leading-snug (large text with tight line spacing)."
    },
    revision: "Manage typography inside HTML tags using text size (tw-text-*), font weights (tw-font-*), and line height (tw-leading-*) utility classes."
  },
  {
    id: "colors-borders",
    title: "Colors & Borders",
    what: "Tailwind CSS features a pre-designed color palette. Colors are applied to text (tw-text-*), backgrounds (tw-bg-*), and borders (tw-border-*). Borders can be styled with width and corner curves (tw-rounded-*).",
    why: "Colors and borders build card boundaries and highlighted sections. Tailwind's color scale makes styling hover colors and card outlines easy.",
    syntax: `<div class="tw-bg-slate-50 tw-text-slate-900 tw-border tw-border-slate-200 tw-rounded-lg">
  Bordered slate card container.
</div>`,
    basicExample: "A rounded green button: `<button class=\"tw-bg-green-500 tw-text-white tw-rounded-full\">Go</button>`.",
    exampleHTML: `<div class="tw-flex tw-flex-col tw-gap-2">
    <div class="tw-bg-emerald-50 tw-text-emerald-800 tw-border tw-border-emerald-200 tw-p-3 tw-rounded-md font-semibold">Success Alert</div>
    <div class="tw-bg-rose-50 tw-text-rose-800 tw-border tw-border-rose-200 tw-p-3 tw-rounded-md font-semibold">Danger Alert</div>
</div>`,
    expectedOutputDescription: "A light green success notification block, followed by a light red danger notification block below.",
    renderedOutput: `<div style="font-family: sans-serif; display: flex; flex-direction: column; gap: 8px;">
    <div style="background-color: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; padding: 10px; border-radius: 6px; font-weight: 600; font-size: 13px;">Success Alert</div>
    <div style="background-color: #fff5f5; color: #9b2c2c; border: 1px solid #feb2b2; padding: 10px; border-radius: 6px; font-weight: 600; font-size: 13px;">Danger Alert</div>
</div>`,
    explanation: [
      "tw-bg-emerald-50: Sets a light green background tint.",
      "tw-text-emerald-800: Applies high-contrast green text color.",
      "tw-border-emerald-200: Applies a thin green border frame.",
      "tw-rounded-md: Curves the container corners."
    ],
    importantProperties: [
      { name: "tw-bg-*", desc: "Sets element background colors using color names and shade levels." },
      { name: "tw-border-*", desc: "Sets border colors using shade levels (e.g. tw-border-slate-200)." },
      { name: "tw-rounded-*", desc: "Sets border radius (rounded-sm, rounded-md, rounded-lg, rounded-full)." }
    ],
    realWorld: "Websites use color shades to style warning badges, green success indicators, and grey card borders.",
    commonMistakes: [
      "Forgetting the shade suffix (e.g. writing tw-bg-indigo instead of tw-bg-indigo-600).",
      "Mixing too many contrasting colors, making the website look unpolished."
    ],
    bestPractices: [
      "Use light colors (shade level 50/100) for alert backgrounds, and pair them with dark text (shade level 800/900).",
      "Use rounded-full on buttons to build circular actions."
    ],
    practice: {
      question: "Write an HTML container styled with Tailwind classes (using 'tw-' prefix) to display a warning card with yellow-50 background, yellow-800 text, and yellow-300 borders.",
      objective: "Coordinate colors, text, and border styling.",
      instructions: "Apply bg-yellow-50, text-yellow-800, border, and border-yellow-300 classes.",
      starterCode: `<!-- Write warning card -->`,
      expectedOutput: "A bordered yellow alert container.",
      hint: "Use classes tw-bg-yellow-50 tw-text-yellow-800 tw-border tw-border-yellow-300.",
      solution: `<div class="tw-bg-yellow-50 tw-text-yellow-800 tw-border tw-border-yellow-300 tw-p-4">
    Warning alert content.
</div>`
    },
    interview: {
      question: "How does Tailwind's color scale system work?",
      answer: "Tailwind's color scale uses numeric steps from 50 to 950. 50 is the lightest tint (useful for backgrounds), 500 is the base color (useful for buttons), and 900/950 are the darkest shades (useful for text and headings).",
      explanation: "This allows developers to build coordinated, high-contrast color structures easily.",
      example: "tw-bg-indigo-50 (light bg) -> tw-bg-indigo-600 (button) -> tw-bg-indigo-950 (dark text)."
    },
    revision: "Apply backgrounds with tw-bg-* and text colors with tw-text-*. Set border colors with tw-border-* and curves with tw-rounded-* using standard color shades (50-950)."
  },
  {
    id: "shadows-dimensions",
    title: "Shadows & Dimensions",
    what: "Dimensions control elements width (tw-w-*) and height (tw-h-*). Shadows (tw-shadow-*) apply depth to elements using blur ranges.",
    why: "Controlling card dimensions and shadows is critical. Shadow levels build layout depth, and width constraints keep text blocks readable.",
    syntax: `<div class="tw-w-full tw-max-w-md tw-h-64 tw-shadow-lg tw-bg-white">
  Shadow card container.
</div>`,
    basicExample: "A shadowed box with size: `<div class=\"tw-w-32 tw-h-32 tw-shadow\">Size Box</div>`.",
    exampleHTML: `<div class="tw-bg-white tw-shadow-md tw-p-6 tw-max-w-xs tw-mx-auto tw-rounded-lg border">
    <h5 class="tw-font-bold text-slate-900">Shadow Card</h5>
    <p class="tw-text-xs tw-text-slate-500 tw-mt-1">This card has width boundaries and a drop shadow.</p>
</div>`,
    expectedOutputDescription: "A centered white card container displaying a title and description, elevated on the screen by a drop shadow.",
    renderedOutput: `<div style="font-family: sans-serif; display: flex; justify-content: center; padding: 10px;">
    <div style="background-color: white; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; max-width: 220px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);">
        <h5 style="margin: 0 0 4px 0; font-size: 14px; font-weight: bold; color: #1e293b;">Shadow Card</h5>
        <p style="margin: 0; font-size: 11px; color: #64748b;">This card has width boundaries and a drop shadow.</p>
    </div>
</div>`,
    explanation: [
      "tw-shadow-md: Applies a medium drop shadow effect.",
      "tw-max-w-xs: Restricts the card width to a maximum of 20rem (320px).",
      "tw-p-6: Adds padding space inside the card."
    ],
    importantProperties: [
      { name: "tw-shadow-*", desc: "Adds box drop shadows (shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-none)." },
      { name: "tw-w-*", desc: "Sets element width using percentages (w-1/2, w-full) or relative units." },
      { name: "tw-h-*", desc: "Sets element height using relative units (h-32, h-64, h-screen)." }
    ],
    realWorld: "Portals display dashboards widgets using shadowed cards, and set viewport heights using h-screen to align overlays.",
    commonMistakes: [
      "Using fixed height classes (like h-64) on text cards, which causes text to overflow container boundaries on small screens. Use min-h-* instead.",
      "Using overly dark shadow utilities, making the interface look unpolished."
    ],
    bestPractices: [
      "Use max-w-* classes to restrict content widths on wide screens.",
      "Use shadow-sm or shadow-md for subtle, professional layout depth."
    ],
    practice: {
      question: "Create a card element styled with Tailwind classes to have a width of 100%, a maximum width of md (tw-max-w-md), and a large drop shadow (tw-shadow-lg).",
      objective: "Set element dimensions and shadow effects.",
      instructions: "Combine w-full, max-w-md, and shadow-lg classes.",
      starterCode: `<div class="/* Add classes */">Content</div>`,
      expectedOutput: "A shadowed container box with width boundaries.",
      hint: "Use classes tw-w-full tw-max-w-md tw-shadow-lg.",
      solution: `<div class="tw-w-full tw-max-w-md tw-shadow-lg tw-bg-white tw-p-4">Content</div>`
    },
    interview: {
      question: "What is the difference between tw-w-screen and tw-w-full in Tailwind?",
      answer: "The tw-w-screen class sets the element width to 100vw (100% of the viewport width), which can bypass parent containers. The tw-w-full class sets the element width to 100% of its parent container's width.",
      explanation: "Use w-full to keep elements within grids; use w-screen for full-width overlays.",
      example: "Overlay modal: w-screen. Card inside grid: w-full."
    },
    revision: "Set widths with tw-w-* and heights with tw-h-*. Add depth to containers using shadow levels (tw-shadow-*), and restrict widths with max-w-* classes."
  },
  {
    id: "flexbox",
    title: "Tailwind Flexbox",
    what: "Tailwind Flexbox utilities configure flex layout structures directly in the HTML markup. They manage direction, wrapping, justification, alignments, and gap spacing.",
    why: "Avoids writing custom flex selectors. You align lists and center elements side-by-side without leaving the HTML file.",
    syntax: `<div class="tw-flex tw-flex-row tw-justify-between tw-items-center tw-gap-4">
  <div>Logo</div>
  <div>Nav Links</div>
</div>`,
    basicExample: "Perfect centering in Tailwind: `<div class=\"tw-flex tw-justify-center tw-items-center\">Center</div>`.",
    exampleHTML: `<div class="tw-flex tw-flex-col sm:tw-flex-row tw-gap-3 tw-bg-slate-100 tw-p-4 rounded">
    <div class="tw-flex-1 tw-bg-white tw-p-3 tw-rounded text-center font-bold text-indigo-600 border">Item 1</div>
    <div class="tw-flex-1 tw-bg-white tw-p-3 tw-rounded text-center font-bold text-indigo-600 border">Item 2</div>
</div>`,
    expectedOutputDescription: "Two white boxes displayed side-by-side on desktop, but stacked vertically on mobile screens.",
    renderedOutput: `<div style="font-family: sans-serif; display: flex; gap: 10px; background-color: #f1f5f9; padding: 10px; border-radius: 6px;">
    <div style="flex: 1; background-color: white; padding: 8px; border-radius: 4px; text-align: center; font-weight: bold; color: #4f46e5; font-size: 13px; border: 1px solid #e2e8f0;">Item 1</div>
    <div style="flex: 1; background-color: white; padding: 8px; border-radius: 4px; text-align: center; font-weight: bold; color: #4f46e5; font-size: 13px; border: 1px solid #e2e8f0;">Item 2</div>
</div>`,
    explanation: [
      "tw-flex: Sets display: flex on container.",
      "tw-flex-col, sm:tw-flex-row: Stacks elements vertically on mobile, but aligns them horizontally on tablets and desktops.",
      "tw-flex-1: Sets flex-grow, flex-shrink, and flex-basis, making items share container space equally."
    ],
    importantProperties: [
      { name: "tw-flex-row / tw-flex-col", desc: "Sets flex item direction (row, column)." },
      { name: "tw-justify-*", desc: "Aligns items along the main axis (justify-start, justify-center, justify-between)." },
      { name: "tw-items-*", desc: "Aligns items along the cross axis (items-start, items-center, items-stretch)." }
    ],
    realWorld: "Navbar components, sidebar listings, button clusters, and form groups are built using Tailwind flex utilities.",
    commonMistakes: [
      "Adding justification (tw-justify-center) or alignment (tw-items-center) classes to elements that do not have the display flex (tw-flex) class.",
      "Forgetting that gap classes require the display flex or grid property to function."
    ],
    bestPractices: [
      "Use responsive direction classes (flex-col md:flex-row) to build layouts that adapt to mobile.",
      "Use flex-1 to distribute space equally among flex items."
    ],
    practice: {
      question: "Write an HTML flex container styled with Tailwind classes (using 'tw-' prefix) to center text items both horizontally and vertically, with a gap of level 4 (tw-gap-4).",
      objective: "Perfectly center flex items.",
      instructions: "Combine flex, justify-center, items-center, and gap-4 classes.",
      starterCode: `<!-- Write centering block -->`,
      expectedOutput: "A centered horizontal grid block.",
      hint: "Use classes tw-flex tw-justify-center tw-items-center tw-gap-4.",
      solution: `<div class="tw-flex tw-justify-center tw-items-center tw-gap-4">
    <div>X</div>
    <div>Y</div>
</div>`
    },
    interview: {
      question: "How do you build a responsive card layout that stacks on mobile but aligns horizontally on desktop using Tailwind?",
      answer: "You configure this by combining tw-flex-col (the mobile default vertical stack) with a responsive breakpoint override like md:tw-flex-row (row alignment on medium screens and wider) on the flex container element.",
      explanation: "This allows you to control responsive layout behavior directly in the HTML without writing media queries in custom CSS files.",
      example: "<div class='tw-flex tw-flex-col md:tw-flex-row tw-gap-4'>...</div>"
    },
    revision: "Use tw-flex to activate flexbox. Control spacing using tw-gap-*. Use justification (tw-justify-*) and alignment (tw-items-*) classes to manage alignment."
  },
  {
    id: "grid",
    title: "Tailwind Grid",
    what: "Tailwind Grid utilities configure responsive two-dimensional grid layouts directly in the HTML. They define grid template columns, columns spanning, and cell gaps.",
    why: "Saves you from writing media queries. You build responsive card layouts and dashboard panels using simple grid utilities.",
    syntax: `<div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6">
  <div>Cell A</div>
  <div>Cell B</div>
  <div>Cell C</div>
</div>`,
    basicExample: "A 3-column grid layout: `<div class=\"tw-grid tw-grid-cols-3\"></div>`.",
    exampleHTML: `<div class="tw-grid tw-grid-cols-4 tw-gap-2 tw-bg-slate-100 tw-p-3 rounded">
    <div class="tw-col-span-2 tw-bg-white tw-p-2 tw-rounded text-center text-teal-600 border font-bold">Span 2</div>
    <div class="tw-bg-white tw-p-2 tw-rounded text-center text-teal-600 border font-bold">Col 3</div>
    <div class="tw-bg-white tw-p-2 tw-rounded text-center text-teal-600 border font-bold">Col 4</div>
</div>`,
    expectedOutputDescription: "A row grid containing one double-width box and two single-width boxes aligned side-by-side.",
    renderedOutput: `<div style="font-family: sans-serif; font-size: 13px;">
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; background-color: #f1f5f9; padding: 10px; border-radius: 6px;">
        <div style="grid-column: span 2; background-color: white; padding: 6px; border-radius: 4px; text-align: center; font-weight: bold; color: #0d9488; border: 1px solid #e2e8f0;">Span 2</div>
        <div style="background-color: white; padding: 6px; border-radius: 4px; text-align: center; font-weight: bold; color: #0d9488; border: 1px solid #e2e8f0;">Col 3</div>
        <div style="background-color: white; padding: 6px; border-radius: 4px; text-align: center; font-weight: bold; color: #0d9488; border: 1px solid #e2e8f0;">Col 4</div>
    </div>
</div>`,
    explanation: [
      "tw-grid: Sets display: grid on the parent container.",
      "tw-grid-cols-4: Splits the grid layout into 4 equal columns.",
      "tw-col-span-2: Spans the cell across 2 column tracks.",
      "tw-gap-2: Sets a small gap spacing between grid cells."
    ],
    importantProperties: [
      { name: "tw-grid-cols-*", desc: "Defines the number of columns in the grid (up to 12)." },
      { name: "tw-col-span-*", desc: "Controls cell spanning across columns (e.g. tw-col-span-3)." },
      { name: "tw-row-span-*", desc: "Controls cell spanning across rows." }
    ],
    realWorld: "E-commerce product lists, dashboard cards, blog feeds, and image galleries use grid templates to align items across different device resolutions.",
    commonMistakes: [
      "Forgetting to define columns on the parent container (tw-grid-cols-*) before col-span properties can work on the child elements.",
      "Applying col-span values that exceed the total columns of the parent grid container, breaking the layout."
    ],
    bestPractices: [
      "Use responsive column classes (grid-cols-1 md:grid-cols-3) to build layouts that adapt to mobile.",
      "Use grid-column: span values to highlight featured cards."
    ],
    practice: {
      question: "Write an HTML grid layout styled with Tailwind classes (using 'tw-' prefix) that displays 1 column on mobile and 4 columns on large screens (lg), with a cell gap of 4 (tw-gap-4).",
      objective: "Build responsive columns.",
      instructions: "Combine grid, grid-cols-1, lg:grid-cols-4, and gap-4 classes.",
      starterCode: `<!-- Write responsive grid -->`,
      expectedOutput: "A responsive grid stack that splits into 4 columns on large monitors.",
      hint: "Use classes tw-grid tw-grid-cols-1 lg:tw-grid-cols-4 tw-gap-4.",
      solution: `<div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-4 tw-gap-4">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>`
    },
    interview: {
      question: "How do you span an element across multiple grid columns in Tailwind CSS?",
      answer: "You span columns using the tw-col-span-{n} classes (e.g., tw-col-span-2, tw-col-span-6). To span an element across the entire width of a 12-column grid, apply the tw-col-span-12 class.",
      explanation: "This allows you to align banners, headers, and featured cards across multiple columns.",
      example: "<div class='tw-col-span-3'>Spans three columns</div>"
    },
    revision: "Use tw-grid to activate grid layouts. Define columns on the parent container using tw-grid-cols-*. Use tw-col-span-* on child elements to merge cells."
  },
  {
    id: "positioning-states",
    title: "Positioning & States",
    what: "Positioning classes (tw-relative, tw-absolute, tw-fixed) control element layouts. State modifiers (hover:, focus:, active:) apply styles only when elements are hovered, focused, or clicked.",
    why: "Interactive elements need feedback. Hover classes darken buttons, and focus classes highlight active inputs.",
    syntax: `<button class="tw-bg-indigo-600 hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500">
  Submit
</button>`,
    basicExample: "Changing background on hover: `hover:tw-bg-blue-600`.",
    exampleHTML: `<div class="tw-p-2 bg-white rounded border">
    <input type="text" placeholder="Focus me..." class="tw-w-full tw-border tw-border-slate-300 tw-p-2 tw-rounded focus:tw-outline-none focus:tw-border-indigo-500 focus:tw-ring-1 focus:tw-ring-indigo-500">
</div>`,
    expectedOutputDescription: "A text field that displays an indigo border and a focus glow ring when clicked or tabbed.",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px; background: white; border: 1px solid #e2e8f0; border-radius: 6px;">
    <input type="text" placeholder="Focus me (Static Preview)..." style="width: 100%; padding: 6px 12px; border: 1px solid #cbd5e1; border-radius: 4px; outline: none; font-size: 13px;">
</div>`,
    explanation: [
      "focus:tw-border-indigo-500: Changes border color when focused.",
      "focus:tw-ring-1: Adds a light ring outline when focused, boosting accessibility.",
      "focus:tw-outline-none: Removes default browser focus outline, allowing you to use custom styles."
    ],
    importantProperties: [
      { name: "hover:*", desc: "Applies styles when the user hovers over the element with the mouse." },
      { name: "focus:*", desc: "Applies styles when the element receives keyboard focus." },
      { name: "active:*", desc: "Applies styles when the element is clicked." }
    ],
    realWorld: "Dashboard notifications display count badges positioned absolutely at the top-right corner of card icons, and form fields highlight borders when focused.",
    commonMistakes: [
      "Omitting focus styles when using focus:tw-outline-none, which makes the element inaccessible to keyboard users.",
      "Using state prefixes on non-interactive elements (like paragraphs or divs), where hover effects carry no functional benefit."
    ],
    bestPractices: [
      "Always include focus states alongside hover states to ensure keyboard accessibility.",
      "Use transitions to smooth out state color changes."
    ],
    practice: {
      question: "Create a button using Tailwind classes that has a red background (tw-bg-red-500) and shifts to a darker red background (tw-bg-red-700) on mouse hover.",
      objective: "Set hover state overrides.",
      instructions: "Combine tw-bg-red-500 and hover:tw-bg-red-700 classes.",
      starterCode: `<button class="/* classes */">Delete</button>`,
      expectedOutput: "A delete button that darkens on hover.",
      hint: "Use classes class='tw-bg-red-500 hover:tw-bg-red-700 tw-text-white tw-py-2 tw-px-4 tw-rounded'.",
      solution: `<button class="tw-bg-red-500 hover:tw-bg-red-700 tw-text-white tw-py-2 tw-px-4 tw-rounded">Delete</button>`
    },
    interview: {
      question: "How do focus state utilities improve web accessibility?",
      answer: "When a user navigates a page using the Tab key on their keyboard, focus state utilities (like focus:tw-ring-2) highlight the active element visually. Without focus styles (or if you hide them using focus:tw-outline-none without an alternative), keyboard users cannot see which element is active, making the site unusable.",
      explanation: "Highlighting focused elements is a core requirement of the WCAG accessibility guidelines.",
      example: "focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500"
    },
    revision: "Use positioning classes (tw-relative, tw-absolute) to position elements on the screen. Add interactive feedback using state variants (hover:, focus:, active:)."
  },
  {
    id: "darkmode-customizations",
    title: "Dark Mode & Customization",
    what: "Tailwind CSS features native dark mode support using the dark: variant class prefix. When active, styles with the dark: prefix (e.g., dark:tw-bg-slate-900) are applied to elements automatically.",
    why: "Dark mode reduces eye strain in low-light environments. Tailwind lets you configure dark mode layouts directly in your HTML files, avoiding duplicate custom CSS files.",
    syntax: `<div class="tw-bg-white tw-text-slate-900 dark:tw-bg-slate-900 dark:tw-text-white">
  Automatic Dark Mode adaptive card.
</div>`,
    basicExample: "A dark mode background: `dark:tw-bg-slate-950`.",
    exampleHTML: `<div class="tw-bg-white tw-p-4 tw-rounded-lg tw-shadow dark:tw-bg-slate-800 tw-border dark:tw-border-slate-700">
    <h5 class="tw-text-slate-900 dark:tw-text-white tw-font-bold">Adaptive Theme Card</h5>
    <p class="tw-text-slate-500 dark:tw-text-slate-400 tw-text-sm tw-mt-1">This text adjusts to light and dark modes.</p>
</div>`,
    expectedOutputDescription: "Two cards displaying light and dark theme configurations side-by-side (simulated visual preview).",
    renderedOutput: `<div style="font-family: sans-serif; display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
    <!-- Light Theme Mode -->
    <div style="background-color: white; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
        <h5 style="color: #0f172a; font-weight: bold; margin-top: 0; margin-bottom: 0.25rem; font-size: 13px;">Light Example</h5>
        <p style="color: #64748b; font-size: 11px; margin-bottom: 0;">White cards with dark text.</p>
    </div>
    <!-- Dark Theme Mode -->
    <div style="background-color: #1e293b; padding: 1rem; border-radius: 0.5rem; border: 1px solid #334155; color: white;">
        <h5 style="color: white; font-weight: bold; margin-top: 0; margin-bottom: 0.25rem; font-size: 13px;">Dark Example</h5>
        <p style="color: #94a3b8; font-size: 11px; margin-bottom: 0;">Slate cards with bright text.</p>
    </div>
</div>`,
    explanation: [
      "dark:tw-bg-slate-800: Sets a dark slate background in dark mode.",
      "dark:tw-text-white: Sets white text in dark mode.",
      "dark:tw-border-slate-700: Adjusts borders to dark grey in dark mode to prevent visual harshness."
    ],
    importantProperties: [
      { name: "dark:*", desc: "Applies style overrides when dark mode is enabled on the HTML container." },
      { name: "darkMode: 'media'", desc: "Tailwind config setting that checks system color preferences automatically." },
      { name: "darkMode: 'class'", desc: "Tailwind config setting that triggers dark mode only when the .dark class is added to the HTML root." }
    ],
    realWorld: "Modern SaaS platforms detect system preferences natively, or allow manual theme toggling via class name updates, adjusting layout styling instantly.",
    commonMistakes: [
      "Forgetting to design custom dark mode overrides, leaving some cards with bright white backgrounds in dark mode, causing poor contrast and layout inconsistencies.",
      "Using pure black background (#000) and pure white text, which creates harsh contrast. Rich dark slates (#0f172a, #1e293b) are preferred."
    ],
    bestPractices: [
      "Always design light mode first, then add dark mode overrides using the dark: prefix.",
      "Ensure text contrast ratios remain high in both themes."
    ],
    practice: {
      question: "Write an HTML container styled with Tailwind classes (using 'tw-' prefix) to display a white background (tw-bg-white) and black text (tw-text-black) in light mode, and a slate-900 background (dark:tw-bg-slate-900) and white text (dark:tw-text-white) in dark mode.",
      objective: "Set responsive theme colors.",
      instructions: "Combine light and dark: variants.",
      starterCode: `<!-- Write adaptive theme card -->`,
      expectedOutput: "A responsive theme card that adjusts to dark mode.",
      hint: "Use classes class='tw-bg-white tw-text-black dark:tw-bg-slate-900 dark:tw-text-white'.",
      solution: `<div class="tw-bg-white tw-text-black dark:tw-bg-slate-900 dark:tw-text-white tw-p-4">
    Adaptive content.
</div>`
    },
    interview: {
      question: "What are the two strategies Tailwind uses for Dark Mode, and how do they differ?",
      answer: "The two strategies are: 1) 'media' (the default, which uses the browser's prefers-color-scheme media query to match dark mode automatically), and 2) 'class' (which applies dark mode styles only when the .dark class is added to the HTML root tag).",
      explanation: "The 'media' strategy is automatic; the 'class' strategy is used when you want to build a manual toggle switch in the UI.",
      example: "tailwind.config.js: darkMode: 'class'"
    },
    revision: "Tailwind's dark: variant prefix applies styles in dark mode. Configure dark mode using either system preferences ('media') or a manual root class ('class') in the configuration file."
  }
];

module.exports = tailwindLessons;
