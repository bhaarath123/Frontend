// HTML5 Complete Curriculum Data - 14 Lessons

const htmlLessons = [
  {
    id: "introduction",
    title: "HTML Introduction & Syntax",
    what: "HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages. It uses a tag-based syntax to define text, images, forms, and layout structures.",
    why: "HTML is the absolute skeleton of all web pages. Browsers read HTML elements to understand what content to display and how the outline of the page is organized.",
    syntax: `<!-- Standard HTML Element Syntax -->
<tagname attribute="value">Content goes here...</tagname>`,
    basicExample: "A standard paragraph element: `<p class=\"intro\">Hello World</p>`.",
    exampleHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Page</title>
</head>
<body>
    <h1>Welcome to WebLearn Hub</h1>
    <p>HTML is easy to learn and write.</p>
</body>
</html>`,
    expectedOutputDescription: "A browser tab titled 'My First Page' displaying a bold top heading and a paragraph below it.",
    renderedOutput: `<div>
    <h1 style="font-family: sans-serif; color: #1e3a8a; margin-bottom: 8px;">Welcome to WebLearn Hub</h1>
    <p style="font-family: sans-serif; color: #4b5563; font-size: 16px;">HTML is easy to learn and write.</p>
</div>`,
    explanation: [
      "<!DOCTYPE html>: Declares the page type as HTML5 so the browser renders it in standard mode.",
      "<html>: The root wrapper containing the head and body tags.",
      "<head>: Contains non-visible document metadata and the page title.",
      "<body>: Houses the visible document content like headers and paragraphs."
    ],
    importantProperties: [
      { name: "DOCTYPE", desc: "Tells the browser to use the modern HTML5 standard rendering engine." },
      { name: "lang", desc: "Attribute specifying the page's language, aiding accessibility and search engines." },
      { name: "charset", desc: "Specifies character encoding (usually UTF-8 to support international characters)." }
    ],
    realWorld: "Every website from Wikipedia to Google uses HTML5 tags to structure text copy, buttons, and layout containers.",
    commonMistakes: [
      "Forgetting to add a closing tag (e.g., leaving a paragraph open), leading to broken text spacing.",
      "Omitting the DOCTYPE declaration, which triggers quirks mode in older browsers."
    ],
    bestPractices: [
      "Always write tags and attribute names in lowercase (e.g. <html>, not <HTML>).",
      "Always wrap attribute values in double quotes."
    ],
    practice: {
      question: "Create a page structure containing a title 'Self Intro', an h1 heading 'About Me', and a paragraph about your goals.",
      objective: "Build a valid HTML5 structural shell.",
      instructions: "Combine html, head, title, body, h1, and p elements.",
      starterCode: `<!-- Write layout skeleton here -->`,
      expectedOutput: "A title heading and a paragraph below it.",
      hint: "Make sure all tags are closed in reverse order of their opening.",
      solution: `<!DOCTYPE html>
<html>
<head>
    <title>Self Intro</title>
</head>
<body>
    <h1>About Me</h1>
    <p>I am learning backend and frontend development.</p>
</body>
</html>`
    },
    interview: {
      question: "What is the difference between an element and a tag in HTML?",
      answer: "A tag is the markup token used to start or end an element (e.g., <p> or </p>). An element represents the complete construct including the opening tag, closing tag, attributes, and any contents wrapped inside.",
      explanation: "<p> is a tag. <p>Hello</p> is the complete HTML element.",
      example: "Tag: <a>. Element: <a href='index.html'>Home</a>."
    },
    revision: "HTML uses elements defined by tags to structure web documents. All elements reside inside the root <html> container divided into <head> (meta) and <body> (content)."
  },
  {
    id: "structure",
    title: "Document Structure & Meta Tags",
    what: "The HTML document structure defines the nesting order of core layout elements. The head section houses metadata tags that communicate page information (description, viewport scaling, charset) to browsers and search bots.",
    why: "Metadata controls browser behaviors and indexing. Viewport scaling ensures mobile compatibility, while descriptions drive search snippet previews.",
    syntax: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Meta summary.">
</head>`,
    basicExample: "Setting viewport: `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`.",
    exampleHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="WebLearn Hub structure lesson.">
    <title>Document Setup</title>
</head>
<body>
    <h2>Structure Lesson</h2>
    <p>Look at the source code head tag to inspect metadata.</p>
</body>
</html>`,
    expectedOutputDescription: "A standard page listing headings and description, with invisible metadata configured in the page header.",
    renderedOutput: `<div style="font-family: sans-serif;">
    <h2 style="color: #1e3a8a; margin: 0 0 8px 0;">Structure Lesson</h2>
    <p style="color: #4b5563; margin: 0; font-size: 14px;">Look at the source code head tag to inspect metadata.</p>
</div>`,
    explanation: [
      "charset='UTF-8': Instructs the browser to render symbols and characters accurately.",
      "name='viewport': Enables fluid layout scaling on mobile viewports.",
      "name='description': Explains the website topic, displaying as search result text."
    ],
    importantProperties: [
      { name: "viewport", desc: "Configures layout scaling. Critical for responsive web design." },
      { name: "description", desc: "Provides page description snippet for search indexing." }
    ],
    realWorld: "Search engines read the head description to summarize articles, and browsers use charset to decode special currency symbols correctly.",
    commonMistakes: [
      "Placing visible content tags like <h1> or <img> inside the <head> container.",
      "Omitting the viewport tag, causing mobile displays to render tiny desktop views."
    ],
    bestPractices: [
      "Keep meta descriptions under 160 characters to prevent clipping in search listings.",
      "Include a canonical link tag to indicate the authoritative URL."
    ],
    practice: {
      question: "Create an HTML head block with UTF-8 charset, viewport scaling, and a description 'Learn web structure'.",
      objective: "Set up metadata files.",
      instructions: "Include all three key meta elements inside a head wrapper.",
      starterCode: `<head>\n  <!-- Add meta items -->\n</head>`,
      expectedOutput: "An HTML head container with metadata tags.",
      hint: "Meta tags are self-closing void elements.",
      solution: `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn web structure">
    <title>Metadata Page</title>
</head>`
    },
    interview: {
      question: "Why is the charset='UTF-8' tag important?",
      answer: "UTF-8 is a character encoding that covers almost all characters and symbols in the world. Declaring it tells browsers how to read and render special symbols, international alphabets, and emojis accurately without displaying broken symbols.",
      explanation: "Without a charset declaration, browsers might fall back to ISO encodings, converting symbols into corrupted characters.",
      example: "Correct: € (Euro). Incorrect: Ã¢â€šÂ¬ (Corrupted symbol)."
    },
    revision: "The head section stores essential metadata (charset, viewport, description) that configures mobile layout scaling and search engine previews."
  },
  {
    id: "headings-text",
    title: "Headings, Paragraphs & Text Formatting",
    what: "Headings (<h1> to <h6>) define content hierarchy, paragraphs (<p>) container block text, and formatting tags (<strong>, <em>, <mark>, <small>) style specific inline text ranges.",
    why: "Text formatting guides reading outlines. Heading sizes organize chapters, and bold/italic tags emphasize key terms.",
    syntax: `<h1>Main Heading</h1>
<p>Standard paragraph with <strong>bold</strong> words.</p>`,
    basicExample: "Adding emphasis: `<p>This is <em>important</em> content.</p>`.",
    exampleHTML: `<h1>HTML Text Elements</h1>
<p>We use paragraphs to write text descriptions.</p>
<p>You can make text <strong>bold and strong</strong>, or <em>italicized for emphasis</em>.</p>
<p>Use the <mark>mark tag</mark> to highlight elements, and <small>small tag</small> for fine print.</p>`,
    expectedOutputDescription: "A page outline displaying nested font sizing and text blocks with bold, italic, and highlighted spans.",
    renderedOutput: `<div style="font-family: sans-serif; color: #334155; line-height: 1.6;">
    <h1 style="font-size: 24px; color: #1e3a8a; margin-bottom: 8px;">HTML Text Elements</h1>
    <p style="margin-bottom: 8px; font-size: 14px;">We use paragraphs to write text descriptions.</p>
    <p style="margin-bottom: 8px; font-size: 14px;">You can make text <strong>bold and strong</strong>, or <em>italicized for emphasis</em>.</p>
    <p style="margin-bottom: 0; font-size: 14px;">Use the <mark style="background-color: #fef08a;">mark tag</mark> to highlight elements, and <small style="font-size: 11px;">small tag</small> for fine print.</p>
</div>`,
    explanation: [
      "<h1>: The highest outline header. A page should have only one <h1>.",
      "<p>: Block container that adds vertical padding/margins automatically.",
      "<strong>: Styles text bold and flags it with high semantic importance.",
      "<mark>: Highlights text in yellow by default."
    ],
    importantProperties: [
      { name: "h1-h6", desc: "Heading tags ranging from largest/most important (h1) to smallest (h6)." },
      { name: "em", desc: "Emphasizes text, rendering as italic font." },
      { name: "br", desc: "Void tag that forces a line break inside a paragraph." }
    ],
    realWorld: "Articles, blogs, and news feeds rely on structured headings and bold callouts to make copy readable and scannable.",
    commonMistakes: [
      "Using heading tags (like h3) just to make text bold or big. Sizing should be done in CSS; headings are for structure.",
      "Nesting block containers (like lists or divs) inside paragraph tags, which violates HTML syntax."
    ],
    bestPractices: [
      "Follow sequential heading order (h1, then h2, then h3) without skipping levels.",
      "Use strong/em instead of outdated presentational tags like b/i."
    ],
    practice: {
      question: "Write an HTML block displaying a main heading 'Recipe Index', a sub-heading 'Baking Steps', and a paragraph containing bold text 'Step 1' followed by a line break.",
      objective: "Combine headings, formatting, and break tags.",
      instructions: "Use h1, h2, p, strong, and br tags.",
      starterCode: `<!-- Write recipe steps here -->`,
      expectedOutput: "A heading outline with a line-break separator.",
      hint: "Use <br> to force content below the current line without closing the paragraph.",
      solution: `<h1>Recipe Index</h1>
<h2>Baking Steps</h2>
<p><strong>Step 1</strong>:<br>Preheat the oven to 350 degrees.</p>`
    },
    interview: {
      question: "What is the difference between <strong> and <b>, and between <em> and <i>?",
      answer: "<strong> and <em> are semantic tags. <strong> indicates high importance and <em> indicates emphasis; screen readers will announce them with different emphasis. <b> (bold) and <i> (italic) are purely style tags that carry no semantic meaning, only visual style.",
      explanation: "HTML5 prefers semantic tags to support screen readers and search crawlers.",
      example: "Semantic: <strong>Danger!</strong>. Presentational: <b>Bold Text</b>."
    },
    revision: "Use h1-h6 for outlines, p for text block runs, and strong/em for inline highlighting. This maintains a clean accessibility outline."
  },
  {
    id: "links",
    title: "Links & Relative Paths",
    what: "Links (hyperlinks) connect pages. Created with the anchor tag (<a>), the href attribute defines the target directory path, target control options, and bookmark anchors.",
    why: "Links connect documents. Relative paths point to internal pages within a website, while absolute paths target external domains.",
    syntax: `<a href="target.html" target="_blank" rel="noopener">Link Text</a>`,
    basicExample: "Internal link: `<a href=\"pages/about.html\">About Us</a>`.",
    exampleHTML: `<h3>Navigation Center</h3>
<p>Go to the <a href="../index.html">Homepage</a> (Relative link).</p>
<p>Browse <a href="https://www.google.com" target="_blank" rel="noopener">Google search</a> (Absolute link in new tab).</p>
<p>Contact us via <a href="mailto:support@site.com">Email support</a>.</p>`,
    expectedOutputDescription: "Clickable blue underlined hyperlinks that navigate internally, externally, or open email clients.",
    renderedOutput: `<div style="font-family: sans-serif; font-size: 14px;">
    <h3 style="color: #1e3a8a; font-size: 18px; margin-bottom: 8px;">Navigation Center</h3>
    <p style="margin-bottom: 6px;">Go to the <a href="#" style="color: #3b82f6; text-decoration: underline;">Homepage</a> (Relative link).</p>
    <p style="margin-bottom: 6px;">Browse <a href="#" style="color: #3b82f6; text-decoration: underline;">Google search</a> (Absolute link in new tab).</p>
    <p style="margin-bottom: 0;">Contact us via <a href="#" style="color: #3b82f6; text-decoration: underline;">Email support</a>.</p>
</div>`,
    explanation: [
      "href='../index.html': Relative path that moves up one directory level to find the index file.",
      "target='_blank': Opens the target webpage in a separate browser tab.",
      "rel='noopener': Security setting for target='_blank' links to prevent security exploits (tabnabbing)."
    ],
    importantProperties: [
      { name: "href", desc: "Specifies destination path or protocol (mailto:, tel:, #)." },
      { name: "target", desc: "Controls target tab load behavior (_self, _blank)." },
      { name: "rel", desc: "Defines relation parameters (noopener, noreferrer)." }
    ],
    realWorld: "Navbars, sidebars, and call-to-action buttons use anchor tags to direct users through sites and funnel checkouts.",
    commonMistakes: [
      "Forgetting the href attribute, turning the tag into static plain text.",
      "Omitting security rel attributes on external blank targets."
    ],
    bestPractices: [
      "Use relative paths for internal site navigation to ensure pages link correctly across testing domains.",
      "Write descriptive link copy (e.g. 'Download PDF' instead of 'Click Here')."
    ],
    practice: {
      question: "Create an anchor link that points to phone dialer '123-456-7890' with text 'Call Hotline'.",
      objective: "Use special link protocols.",
      instructions: "Apply the 'tel:' protocol prefix in href.",
      starterCode: `<!-- Write hotline link -->`,
      expectedOutput: "A link that launches telephone dialer interfaces on mobile.",
      hint: "Use href='tel:1234567890'.",
      solution: `<a href="tel:1234567890">Call Hotline</a>`
    },
    interview: {
      question: "What is the security risk of target='_blank' and how is it resolved?",
      answer: "When you link to an external page using target='_blank', the opened page gets access to the window object of your page via window.opener. This allows malicious external pages to redirect your original page to a phishing site. Adding rel='noopener' or rel='noreferrer' blocks this access.",
      explanation: "Security compliance requires combining rel='noopener' with target='_blank'.",
      example: "<a href='https://external.com' target='_blank' rel='noopener'>Link</a>"
    },
    revision: "Anchor tags connect web documents. Use relative paths for internal files, absolute paths for external sites, and always include rel='noopener' on target='_blank' links."
  },
  {
    id: "images",
    title: "HTML Images & Semantics",
    what: "Images in HTML are void elements defined with the <img> tag. The figure (<figure>) and figcaption (<figcaption>) elements provide a semantic container to group images with captions.",
    why: "Visual graphics make layouts engaging. Alt text fallback ensures visually impaired users and search engine bots can index and understand your images.",
    syntax: `<figure>
  <img src="pic.jpg" alt="Descriptive text" width="300" height="200">
  <figcaption>Photo label caption.</figcaption>
</figure>`,
    basicExample: "A simple image tag: `<img src=\"logo.png\" alt=\"WebLearn logo\">`.",
    exampleHTML: `<figure style="max-width: 320px; border: 1px solid #ccc; padding: 10px; border-radius: 8px;">
    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Workspace showing code on screen" style="width: 100%; border-radius: 4px;">
    <figcaption style="font-size: 12px; color: #555; text-align: center; margin-top: 8px;">Fig 1: Frontend Coding Workspace.</figcaption>
</figure>`,
    expectedOutputDescription: "A bordered card container containing a scaled workspace photo and an italicized text caption below it.",
    renderedOutput: `<div style="font-family: sans-serif; display: flex; justify-content: center;">
    <figure style="max-width: 300px; border: 1px solid #e2e8f0; padding: 10px; border-radius: 8px; background: #fff; margin: 0;">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Workspace showing code on screen" style="width: 100%; border-radius: 4px; display: block;">
        <figcaption style="font-size: 13px; color: #4b5563; text-align: center; margin-top: 8px;">Fig 1: Frontend Coding Workspace.</figcaption>
    </figure>
</div>`,
    explanation: [
      "<img>: Void tag (requires no closing tag) to display graphic assets.",
      "alt attribute: Descriptive text for accessibility screen readers.",
      "<figure>: Grouping tag that separates images from the surrounding text flow.",
      "<figcaption>: Defines the text caption for the figure parent container."
    ],
    importantProperties: [
      { name: "src", desc: "The relative path or URL of the image file." },
      { name: "alt", desc: "Accessibility description, displayed if the image fails to load." },
      { name: "loading", desc: "Set loading='lazy' to defer image loading until user scrolls close, improving speed." }
    ],
    realWorld: "E-commerce sites wrap product listings in figures, showing details and captions aligned with the card image.",
    commonMistakes: [
      "Leaving alt descriptions blank (alt='') or writing useless summaries like 'photo.jpg'.",
      "Using massive high-resolution camera files without scaling them, destroying mobile loading performance."
    ],
    bestPractices: [
      "Always define width and height attributes in CSS or HTML to prevent layout shift during loading.",
      "Use modern web graphic formats like WebP or AVIF."
    ],
    practice: {
      question: "Create a semantic figure grouping containing an image file 'avatar.jpg', description 'Profile photo', and caption text 'Sarah Jenkins'.",
      objective: "Apply image semantics.",
      instructions: "Use figure, img, and figcaption tags.",
      starterCode: `<!-- Write avatar figure -->`,
      expectedOutput: "A structured profile card element.",
      hint: "Place alt attribute directly on the image tag.",
      solution: `<figure>
    <img src="avatar.jpg" alt="Profile photo of Sarah Jenkins">
    <figcaption>Sarah Jenkins</figcaption>
</figure>`
    },
    interview: {
      question: "What is Cumulative Layout Shift (CLS) and how do image dimensions affect it?",
      answer: "Cumulative Layout Shift (CLS) is a performance metric measuring visual stability. If you omit width/height attributes on images, the browser allocates 0px space initially. When the image loads, it suddenly pushes the content below it down. Defining dimensions reserves space beforehand, preventing shifts.",
      explanation: "Reserving space stabilizes the page during lazy loading.",
      example: "<img src='hero.jpg' alt='Hero' width='800' height='400'>"
    },
    revision: "Use img inside figure wrappers with figcaption. Always define alt text for screen readers and specify dimensions to minimize layout shifts."
  },
  {
    id: "lists",
    title: "HTML Lists (ul, ol, dl)",
    what: "Lists organize related content. Unordered lists (<ul>) create bullet lists, ordered lists (<ol>) create numbered sequences, and description lists (<dl>) define terms (<dt>) and descriptions (<dd>).",
    why: "Lists provide clean content structures. Bullet structures format text documents, and description lists format technical specifications.",
    syntax: `<ol>
  <li>Ordered item</li>
</ol>`,
    basicExample: "A simple bullet list item: `<ul><li>Bullet Item</li></ul>`.",
    exampleHTML: `<h4>WebLearn Hub Syllabus</h4>
<ul>
    <li>HTML5 Basics</li>
    <li>CSS3 Layouts
        <ol>
            <li>Flexbox columns</li>
            <li>Grid cells</li>
        </ol>
    </li>
</ul>
<dl>
    <dt>Frontend</dt>
    <dd>The visual presentation layer.</dd>
</dl>`,
    expectedOutputDescription: "A bulleted outline displaying a nested numbered sub-list, followed by a term-definition pair below.",
    renderedOutput: `<div style="font-family: sans-serif; font-size: 14px; color: #334155;">
    <h4 style="color: #1e3a8a; font-size: 16px; margin: 0 0 8px 0;">WebLearn Hub Syllabus</h4>
    <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 12px;">
        <li>HTML5 Basics</li>
        <li>CSS3 Layouts
            <ol style="list-style-type: decimal; padding-left: 20px; margin-top: 4px;">
                <li>Flexbox columns</li>
                <li>Grid cells</li>
            </ol>
        </li>
    </ul>
    <dl style="margin: 0; padding: 6px; background-color: #f8fafc; border-left: 3px solid #6366f1;">
        <dt style="font-weight: bold; color: #1e1b4b;">Frontend</dt>
        <dd style="margin: 0; color: #475569; padding-left: 10px;">The visual presentation layer.</dd>
    </dl>
</div>`,
    explanation: [
      "<ul>: Container defining unordered bullet points.",
      "<ol>: Container defining numbered ordered items.",
      "Nested Lists: Wrapping an <ol> inside a parent <li> element.",
      "<dl>: Container defining descriptions list containing terms (dt) and descriptions (dd)."
    ],
    importantProperties: [
      { name: "li", desc: "List item tag. The only valid direct child element of ul or ol." },
      { name: "type", desc: "Attribute on ol that changes number styling (A, a, I, i, 1)." },
      { name: "start", desc: "Attribute on ol that changes the starting sequence index number." }
    ],
    realWorld: "Header menus and sidebars are built using styled unordered lists with bullets removed using CSS properties.",
    commonMistakes: [
      "Placing text, links, or div tags directly inside a <ul> or <ol> block without wrapping them in an <li> container.",
      "Using lists purely to indent paragraphs visually."
    ],
    bestPractices: [
      "Use lists when items have structural relations to maintain accessibility outlines.",
      "Format glossary pages using dl, dt, and dd."
    ],
    practice: {
      question: "Create a list representing 'Fruit Index'. Under 'Apple', nest a bullet list containing 'Red Apple' and 'Green Apple'.",
      objective: "Build nested list structures.",
      instructions: "Position the sub-list inside the Apple list item.",
      starterCode: `<!-- Write nested index -->`,
      expectedOutput: "A structured outline displaying a nested sub-bullet list.",
      hint: "Place the sub <ul> block before the closing </li> tag of Apple.",
      solution: `<ul>
    <li>Apple
        <ul>
            <li>Red Apple</li>
            <li>Green Apple</li>
        </ul>
    </li>
    <li>Orange</li>
</ul>`
    },
    interview: {
      question: "When should you use a Description List (dl) instead of a standard list?",
      answer: "Use a Description List (<dl>) when displaying name-value pairs, glossaries, product metadata specs, or FAQ grids. It links terms (<dt>) directly with definitions (<dd>), providing screen readers with clearer semantic relations than bullet lists.",
      explanation: "It defines logical dictionary structures in markup.",
      example: "<dl><dt>DNS</dt><dd>Domain Name System</dd></dl>"
    },
    revision: "Use ul for bullet lists, ol for sequential steps, and dl for term-definition structures. Always keep li as the direct child of ul/ol."
  },
  {
    id: "tables",
    title: "HTML Tables & Layout grids",
    what: "Tables arrange data in rows and columns. They are constructed using <table>, <tr> (row), <th> (header), and <td> (cell) tags, supported by cell-merging parameters (colspan, rowspan).",
    why: "Tabular data is unreadable in raw text runs. Grid structures organize pricing lists, schedules, and metrics databases into readable layouts.",
    syntax: `<table>
  <tr>
    <th>Header</th>
  </tr>
  <tr>
    <td>Data</td>
  </tr>
</table>`,
    basicExample: "A simple two-column single row table: `<table><tr><td>A</td><td>B</td></tr></table>`.",
    exampleHTML: `<table border="1" style="border-collapse: collapse; width: 100%; font-family: sans-serif;">
    <thead>
        <tr style="background-color: #f1f5f9;">
            <th>Language</th>
            <th colspan="2">Complexity & Rank</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>HTML5</td>
            <td>Easy</td>
            <td>#1</td>
        </tr>
    </tbody>
</table>`,
    expectedOutputDescription: "A bordered data grid displaying one header row with a merged right cell, and one data row below.",
    renderedOutput: `<div style="font-family: sans-serif; font-size: 14px;">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid #cbd5e1; text-align: left;">
        <thead>
            <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                <th style="padding: 8px;">Language</th>
                <th colspan="2" style="padding: 8px; text-align: center;">Complexity & Rank</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 8px; border-bottom: 1px solid #cbd5e1;">HTML5</td>
                <td style="padding: 8px; border-bottom: 1px solid #cbd5e1; border-right: 1px solid #cbd5e1;">Easy</td>
                <td style="padding: 8px; border-bottom: 1px solid #cbd5e1;">#1</td>
            </tr>
        </tbody>
    </table>
</div>`,
    explanation: [
      "<thead> & <tbody>: Grouping tags separating header rows from content rows.",
      "colspan='2': Merges the header cell across two columns horizontally.",
      "border-collapse: CSS style that collapses adjacent borders into single lines."
    ],
    importantProperties: [
      { name: "colspan", desc: "Attribute merging cells across columns." },
      { name: "rowspan", desc: "Attribute merging cells across rows." },
      { name: "caption", desc: "Optional tag defining the title description of the table." }
    ],
    realWorld: "Compare plans (Free vs Pro packages) and dashboards data metrics utilize tables to format grids.",
    commonMistakes: [
      "Using HTML tables to design page layouts (navbars, column grids). This is bad for SEO, rendering speed, and mobile responsiveness.",
      "Miscounting column merges, warping the grid layout."
    ],
    bestPractices: [
      "Always wrap tables in an overflow container to prevent horizontal scrollbars on mobile devices.",
      "Use caption elements to describe table contents."
    ],
    practice: {
      question: "Create a table with two header columns 'Plan' and 'Price'. Add a second row where the first cell spans both columns showing text 'Unavailable'.",
      objective: "Practice using colspan merging.",
      instructions: "Combine th, td, and colspan elements.",
      starterCode: `<!-- Write pricing table -->`,
      expectedOutput: "A data grid displaying a merged footer row.",
      hint: "Use colspan='2' on the td element in the second row.",
      solution: `<table border="1">
    <tr>
        <th>Plan</th>
        <th>Price</th>
    </tr>
    <tr>
        <td colspan="2">Unavailable</td>
    </tr>
</table>`
    },
    interview: {
      question: "Why is it bad practice to use tables for website layouts?",
      answer: "Using tables for website layouts hurts web accessibility (screen readers read cells in a linear order, which breaks layouts), makes responsive styling extremely difficult, and slows down browser rendering because browsers calculate table dimensions after loading all cells.",
      explanation: "Modern responsive layouts should be built using div or semantic wrappers styled with Flexbox and CSS Grid.",
      example: "Incorrect: Using table rows for navbars. Correct: Using nav/ul tags with flex styles."
    },
    revision: "Use tables for tabular data, not layouts. Manage cell span columns/rows using colspan/rowspan, and group records using thead, tbody, and tfoot."
  },
  {
    id: "forms",
    title: "HTML Forms & User Inputs",
    what: "HTML Forms collect user input. Forms are defined with the <form> tag, containing label interfaces (<label>), text fields (<textarea>), selectors (<select>), and actions (<button>).",
    why: "Forms are the core interactive elements of a webpage. They enable user logins, search inputs, support queries, and checkout processes.",
    syntax: `<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="username">
  <button type="submit">Send</button>
</form>`,
    basicExample: "A standard email input form: `<input type=\"email\" placeholder=\"Enter Email\">`.",
    exampleHTML: `<form action="#" style="font-family: sans-serif; max-width: 320px; padding: 15px; border: 1px solid #ccc; border-radius: 6px;">
    <div style="margin-bottom: 10px;">
        <label for="form_username" style="display: block; font-weight: bold; font-size: 13px;">Username:</label>
        <input type="text" id="form_username" name="user" style="width: 100%; padding: 5px; box-sizing: border-box;" placeholder="john_doe">
    </div>
    <div style="margin-bottom: 10px;">
        <label for="form_notes" style="display: block; font-weight: bold; font-size: 13px;">Bio Notes:</label>
        <textarea id="form_notes" name="notes" style="width: 100%; padding: 5px; box-sizing: border-box;" placeholder="Brief details..."></textarea>
    </div>
    <button type="submit" style="width: 100%; background: #6366f1; color: white; border: none; padding: 8px; font-weight: bold; border-radius: 4px;">Submit</button>
</form>`,
    expectedOutputDescription: "A styled vertical box showing username and textarea fields with a blue submission button at the bottom.",
    renderedOutput: `<div style="font-family: sans-serif; display: flex; justify-content: center;">
    <form style="max-width: 280px; width: 100%; padding: 15px; border: 1px solid #e2e8f0; border-radius: 6px; background: #fff;">
        <div style="margin-bottom: 8px;">
            <label style="display: block; font-weight: bold; font-size: 12px; color: #1e3a8a; margin-bottom: 4px;">Username:</label>
            <input type="text" style="width: 100%; padding: 4px; font-size: 12px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box;" placeholder="john_doe">
        </div>
        <div style="margin-bottom: 8px;">
            <label style="display: block; font-weight: bold; font-size: 12px; color: #1e3a8a; margin-bottom: 4px;">Bio Notes:</label>
            <textarea style="width: 100%; padding: 4px; font-size: 12px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box;" placeholder="Brief details..."></textarea>
        </div>
        <button type="button" style="width: 100%; background: #6366f1; color: white; border: none; padding: 6px; font-weight: bold; border-radius: 4px; cursor: pointer; font-size: 12px;">Submit</button>
    </form>
</div>`,
    explanation: [
      "action attribute: Specifies where the form payload is transmitted upon submission.",
      "method='POST': Transmits data securely within the HTTP request body instead of the URL.",
      "label for='...': Connects text labels with input fields via matching IDs.",
      "textarea: Creates a multi-line text input field."
    ],
    importantProperties: [
      { name: "action", desc: "The URL target endpoint where data is sent." },
      { name: "method", desc: "HTTP transmission type (GET/POST)." },
      { name: "name", desc: "The key name associated with the input value sent to the backend." }
    ],
    realWorld: "Customer login screens, registration pages, support desks, and search inputs are built using HTML forms.",
    commonMistakes: [
      "Forgetting the name attribute on input tags. If name is missing, the input data is not included in the form payload.",
      "Using plain text labels without the 'for' attribute, which hurts accessibility."
    ],
    bestPractices: [
      "Always associate a label with its input using matching 'for' and 'id' attributes.",
      "Use fieldset and legend elements to group related inputs."
    ],
    practice: {
      question: "Create a search form containing an input field with id 'search-box' and a button with type 'submit'.",
      objective: "Build input fields.",
      instructions: "Combine form, label, input, and button elements.",
      starterCode: `<!-- Write search form -->`,
      expectedOutput: "A single row search entry field.",
      hint: "Use input type='search' and connect it to a label.",
      solution: `<form action="/search" method="GET">
    <label for="search-box">Search:</label>
    <input type="search" id="search-box" name="q">
    <button type="submit">Go</button>
</form>`
    },
    interview: {
      question: "Why should you always bind input fields to label elements?",
      answer: "Binding inputs to labels is vital for two reasons: 1) Accessibility (allows screen readers to read the label text when the input is focused), and 2) Usability (allows users to focus or select the input field by clicking on the label text, which is helpful for small checkboxes and radio buttons).",
      explanation: "This is done by setting the label's 'for' attribute to match the input's 'id'.",
      example: "<label for='user-pass'>Password</label><input type='password' id='user-pass'>"
    },
    revision: "HTML Forms wrap inputs using form tags. Always use labels linked with IDs, set input name attributes, and configure the appropriate method (GET/POST)."
  },
  {
    id: "input-types",
    title: "HTML Input Types",
    what: "HTML5 supports various input types (text, password, email, number, date, checkbox, radio, file, etc.) that enable validation and custom mobile keypads.",
    why: "Default text inputs accept any characters. Setting specific input types (like email or tel) prompts browsers to show mobile @ symbols or numeric keypads automatically.",
    syntax: `<input type="email">
<input type="date">`,
    basicExample: "A date input field: `<input type=\"date\" name=\"bday\">`.",
    exampleHTML: `<div>
    <label>Email: <input type="email" placeholder="user@site.com"></label><br><br>
    <label>Choose Color: <input type="color"></label><br><br>
    <label>Select Date: <input type="date"></label>
</div>`,
    expectedOutputDescription: "An email input field, a color picker box, and a calendar selector aligned vertically.",
    renderedOutput: `<div style="font-family: sans-serif; font-size: 13px; color: #334155;">
    <div style="margin-bottom: 8px;">
        <label>Email: <input type="email" style="padding: 2px;" placeholder="user@site.com"></label>
    </div>
    <div style="margin-bottom: 8px;">
        <label>Choose Color: <input type="color" style="padding: 0; border: none; cursor: pointer;"></label>
    </div>
    <div>
        <label>Select Date: <input type="date" style="padding: 2px;"></label>
    </div>
</div>`,
    explanation: [
      "type='email': Automatically validates email formatting before submission.",
      "type='color': Launches the OS color picker palette.",
      "type='date': Launches the OS native calendar selection calendar."
    ],
    importantProperties: [
      { name: "checkbox", desc: "Allows selecting multiple options from a list." },
      { name: "radio", desc: "Allows selecting a single option from a list. Sibling radio options must share the same name attribute." },
      { name: "file", desc: "Launches the OS file browser to upload documents." }
    ],
    realWorld: "Mobile sign-up screens use tel or number input types to show numeric keypads instantly, speeding up form completion.",
    commonMistakes: [
      "Forgetting to group radio buttons with the same name attribute, which allows selecting multiple radio options concurrently.",
      "Using type='text' for numerical inputs, which prevents mobile numeric keypads from displaying."
    ],
    bestPractices: [
      "Use tel input type for phone numbers to show the telephone keyboard on mobile devices.",
      "Use file input types with accept parameters to restrict uploaded file extensions."
    ],
    practice: {
      question: "Create a list of two radio buttons grouped under name 'gender' with labels 'Male' and 'Female'.",
      objective: "Build grouped radio items.",
      instructions: "Ensure both inputs share the same name attribute.",
      starterCode: `<!-- Write radio group -->`,
      expectedOutput: "A single-choice toggle option list.",
      hint: "Use input type='radio' name='gender'.",
      solution: `<label>
    <input type="radio" name="gender" value="male"> Male
</label>
<label>
    <input type="radio" name="gender" value="female"> Female
</label>`
    },
    interview: {
      question: "What is the difference between a checkbox and a radio button?",
      answer: "A checkbox (type='checkbox') allows selecting multiple independent options from a list. A radio button (type='radio') is used for mutually exclusive options where only one option can be selected from a group. Sibling radio buttons must share the same name attribute to behave as a group.",
      explanation: "Checkboxes are multi-select; radio buttons are single-select within a group.",
      example: "Checkbox: Select multiple hobbies. Radio: Select payment method."
    },
    revision: "HTML5 input types configure validation and custom mobile keypads. Sibling radio buttons must share name attributes to function as a mutually exclusive group."
  },
  {
    id: "form-validation",
    title: "Form Attributes & Validation",
    what: "Form attributes define validation rules, formatting guidelines, and behavior limits (required, placeholder, disabled, pattern, min/max) that browsers validate automatically.",
    why: "Validating inputs server-side is secure, but validation on the client using HTML5 attributes provides users with instant feedback if inputs are incomplete.",
    syntax: `<input type="text" required minlength="5" pattern="[A-Z]+">`,
    basicExample: "A required number field: `<input type=\"number\" min=\"1\" max=\"10\" required>`.",
    exampleHTML: `<form action="#" style="font-family: sans-serif; max-width: 320px;">
    <div style="margin-bottom: 10px;">
        <label for="val_user" style="display: block; font-size: 13px;">Username (Required, min 5 chars):</label>
        <input type="text" id="val_user" required minlength="5" style="width: 100%; padding: 4px;" placeholder="Min 5 letters">
    </div>
    <div style="margin-bottom: 10px;">
        <label for="val_age" style="display: block; font-size: 13px;">Age (18 - 99):</label>
        <input type="number" id="val_age" min="18" max="99" style="width: 100%; padding: 4px;">
    </div>
    <button type="submit" style="width: 100%; background: #2563eb; color: white; padding: 6px; border: none; font-weight: bold; border-radius: 4px;">Validate Form</button>
</form>`,
    expectedOutputDescription: "A form layout that displays error tooltips if you submit empty fields or input ages under 18.",
    renderedOutput: `<div style="font-family: sans-serif; display: flex; justify-content: center;">
    <form style="max-width: 280px; width: 100%; padding: 15px; border: 1px solid #e2e8f0; border-radius: 6px; background: #fff;">
        <div style="margin-bottom: 8px;">
            <label style="display: block; font-weight: bold; font-size: 12px; color: #1e3a8a; margin-bottom: 4px;">Username (Min 5):</label>
            <input type="text" required minlength="5" style="width: 100%; padding: 4px; font-size: 12px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box;" placeholder="Min 5 letters">
        </div>
        <div style="margin-bottom: 8px;">
            <label style="display: block; font-weight: bold; font-size: 12px; color: #1e3a8a; margin-bottom: 4px;">Age (18-99):</label>
            <input type="number" min="18" max="99" style="width: 100%; padding: 4px; font-size: 12px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box;">
        </div>
        <button type="submit" style="width: 100%; background: #6366f1; color: white; border: none; padding: 6px; font-weight: bold; border-radius: 4px; font-size: 12px; cursor: pointer;">Validate Form</button>
    </form>
</div>`,
    explanation: [
      "required: Enforces validation, showing browser errors if submitted empty.",
      "minlength='5': Displays error if characters typed is less than five.",
      "min='18' / max='99': Enforces numerical boundaries on number inputs."
    ],
    importantProperties: [
      { name: "disabled", desc: "Prevents user interaction and excludes the field value from form submission." },
      { name: "readonly", desc: "Allows viewing and copying the field value, but prevents modification." },
      { name: "pattern", desc: "Regular expression (Regex) constraint that input values must match to submit." }
    ],
    realWorld: "Credit card form inputs use max-length and patterns to ensure card numbers match standard lengths before sending data.",
    commonMistakes: [
      "Relying solely on client-side HTML5 validation. Hackers can bypass browser validations, so backend validation is required for security.",
      "Setting values that conflict (e.g. min larger than max)."
    ],
    bestPractices: [
      "Always set placeholders as formatting guides, not label replacements.",
      "Configure autocomplete='on' or autocomplete='email' to speed up form completion."
    ],
    practice: {
      question: "Create a code text field that is read-only (readonly) and displays a preset code value 'WL-9928'.",
      objective: "Apply read-only attributes.",
      instructions: "Combine value and readonly attributes on an input.",
      starterCode: `<!-- Write read-only field -->`,
      expectedOutput: "A text field with a non-editable value.",
      hint: "Use attributes value='WL-9928' and readonly.",
      solution: `<input type="text" value="WL-9928" readonly>`
    },
    interview: {
      question: "What is the difference between the disabled and readonly attributes?",
      answer: "The disabled attribute prevents user interaction, dims the element visually, and excludes its value from the form payload when submitted. The readonly attribute prevents users from modifying the value, but allows them to highlight and copy it, and includes the value in the form payload when submitted.",
      explanation: "Use readonly for values that are relevant to the submission; use disabled to lock options completely.",
      example: "Readonly: User account ID. Disabled: Inactive checkbox."
    },
    revision: "HTML5 validation attributes (required, min, max, pattern, readonly, disabled) validate user inputs inside the browser before sending data to the server."
  },
  {
    id: "semantic",
    title: "Semantic HTML5 Elements",
    what: "Semantic HTML refers to using markup tags that describe the meaning of the content (like <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>) rather than visual appearance (like <div>).",
    why: "Semantic tags improve accessibility (screen readers use them as navigation landmarks), search engine indexing (bots crawl semantic elements to parse context), and code maintainability.",
    syntax: `<header>
  <nav>Links</nav>
</header>
<main>
  <article>Content</article>
</main>
<footer>Footer info</footer>`,
    basicExample: "A semantic article: `<article><h2>Topic</h2><p>Description</p></article>`.",
    exampleHTML: `<header style="background: #f1f5f9; padding: 10px;">
    <nav><strong>WebLearn Navigation</strong></nav>
</header>
<main style="padding: 15px;">
    <section>
        <h2>Curriculum Topics</h2>
        <p>We teach semantic tags to construct page frameworks.</p>
    </section>
</main>
<footer style="background: #334155; color: white; padding: 10px; text-align: center;">
    <p>© 2026 WebLearn Hub</p>
</footer>`,
    expectedOutputDescription: "A semantic page skeleton divided into a top nav header, a main content section, and a dark footer at the bottom.",
    renderedOutput: `<div style="font-family: sans-serif; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden; background: #fff;">
    <header style="background: #f8fafc; padding: 10px; border-bottom: 1px solid #e2e8f0;">
        <nav><strong style="color: #6366f1;">WebLearn Navigation</strong></nav>
    </header>
    <main style="padding: 12px;">
        <section>
            <h4 style="color: #1e3a8a; margin: 0 0 6px 0;">Curriculum Topics</h4>
            <p style="color: #4b5563; font-size: 13px; margin: 0;">We teach semantic tags to construct page frameworks.</p>
        </section>
    </main>
    <footer style="background: #0f172a; color: white; padding: 8px; text-align: center; font-size: 11px;">
        © 2026 WebLearn Hub
    </footer>
</div>`,
    explanation: [
      "<header>: Introductory or navigational aids.",
      "<nav>: Navigational container holding anchors.",
      "<main>: The primary content area. There must be only one <main> per document.",
      "<footer>: The document footer containing copyright, contact links, and sitemaps."
    ],
    importantProperties: [
      { name: "section", desc: "A thematic grouping of content, usually with a heading." },
      { name: "article", desc: "A self-contained block of content that can be reused independently (e.g. blog posts)." },
      { name: "aside", desc: "Content tangentially related to the surrounding text, usually styled as a sidebar." }
    ],
    realWorld: "Search engines parse the text inside <article> elements to display search snippets, while ignoring links inside <nav> and <aside> containers.",
    commonMistakes: [
      "Using <div> for all layout panels instead of semantic elements, which breaks the accessibility tree.",
      "Nesting multiple <main> elements on a single page."
    ],
    bestPractices: [
      "Do not use semantic elements just for styling; use them to describe content structure.",
      "Use <aside> for page sidebars, callout boxes, and advertising widgets."
    ],
    practice: {
      question: "Convert a layout consisting of div elements into a semantic skeleton layout containing head navigation, main body, and a footer.",
      objective: "Identify semantic tag positions.",
      instructions: "Replace divs with header, nav, main, and footer elements.",
      starterCode: `<div class="header">
    <div class="logo">Site Logo</div>
</div>
<div class="content">
    <div class="post">Post content</div>
</div>
<div class="footer">Credits</div>`,
      expectedOutput: "A structurally identical page defined with semantic HTML5 elements.",
      hint: "Replace the outer divs with header, main, and footer elements.",
      solution: `<header>
    <nav>Site Logo</nav>
</header>
<main>
    <article>Post content</article>
</main>
<footer>Credits</footer>`
    },
    interview: {
      question: "What is the difference between <article> and <section>?",
      answer: "<article> is used for self-contained, independent compositions that could be distributed or reused in another context (e.g. a blog post, a newspaper article). <section> is a thematic grouping of content, typically with a heading, used to divide a larger document into sections.",
      explanation: "A single article can contain multiple sections (like chapters or subtopics), and a section can contain multiple articles (like a list of recent blog cards).",
      example: "<article><h2>CSS Flexbox</h2><section><h3>Syntax</h3></section></article>"
    },
    revision: "Semantic elements (header, nav, main, section, article, footer) define content meaning and hierarchy rather than visual style, aiding screen readers and search bots."
  },
  {
    id: "multimedia",
    title: "HTML5 Multimedia & Embeds",
    what: "HTML5 native multimedia tags include <audio> and <video> for playing media files without external plugins, alongside <iframe> elements for embedding external browsing contexts (like YouTube or Google Maps).",
    why: "Earlier versions of HTML required plugins like Adobe Flash to play media, which was slow and insecure. HTML5 audio and video tags are fast, secure, and supported by mobile browsers.",
    syntax: `<video controls>
  <source src="vid.mp4" type="video/mp4">
</video>`,
    basicExample: "A basic audio element: `<audio src=\"music.mp3\" controls></audio>`.",
    exampleHTML: `<h3>Native Video Player</h3>
<video width="240" controls style="border-radius: 4px;">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>`,
    expectedOutputDescription: "A native browser video player containing play/pause buttons, sound controls, and a fullscreen trigger.",
    renderedOutput: `<div style="font-family: sans-serif; text-align: center;">
    <h5 style="font-size: 14px; margin-bottom: 8px; color: #1e3a8a;">Native Video Player</h5>
    <video width="240" controls style="border-radius: 4px; display: inline-block;">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>`,
    explanation: [
      "controls: Boolean attribute that displays play, pause, volume, and fullscreen controls.",
      "<source>: Specifies multiple media file formats, allowing browsers to play the first format they support.",
      "Fallback text: Displays inside the tag only in browsers that do not support native video."
    ],
    importantProperties: [
      { name: "autoplay", desc: "Starts playing media automatically (browsers block this unless muted is set)." },
      { name: "loop", desc: "Restarts playback automatically from the beginning when finished." },
      { name: "poster", desc: "Specifies an image placeholder to show before the video plays." }
    ],
    realWorld: "Documentation pages use native video elements to show screen recordings, and blogs embed YouTube tutorial clips using iframes.",
    commonMistakes: [
      "Omitting the controls attribute, which hides the play/pause button, making the video/audio unplayable unless handled via custom scripting.",
      "Providing a single file format (like MP4) without fallback formats, which can fail on some browsers."
    ],
    bestPractices: [
      "Provide multiple source tags (WebM and MP4) to maximize cross-browser compatibility.",
      "Add preload='none' to prevent browsers from downloading media files automatically when the page loads, saving bandwidth."
    ],
    practice: {
      question: "Write an audio element loading 'podcast.mp3' and showing control buttons, with a text fallback 'Audio unsupported'.",
      objective: "Work with native audio embeds.",
      instructions: "Combine audio and source elements with control parameters.",
      starterCode: `<!-- Add audio tag here -->`,
      expectedOutput: "A visual audio player component on supported browsers.",
      hint: "Make sure you include the 'controls' attribute in the audio tag.",
      solution: `<audio controls>
    <source src="podcast.mp3" type="audio/mpeg">
    Audio unsupported
</audio>`
    },
    interview: {
      question: "Why should you specify multiple source elements inside a video tag?",
      answer: "Different browsers support different audio and video codecs (like MP4, WebM, Ogg). By providing multiple <source> elements, the browser will read the list from top to bottom and play the first format it supports, ensuring maximum cross-browser compatibility.",
      explanation: "This fallback strategy allows developers to offer modern, highly compressed formats (like WebM) while retaining older formats (like MP4) as backups.",
      example: "<video controls><source src='v.webm' type='video/webm'><source src='v.mp4' type='video/mp4'></video>"
    },
    revision: "HTML5 native multimedia tags (video, audio, source) play media files directly inside the browser using controls. Use iframes to embed external media layers."
  },
  {
    id: "advanced-html",
    title: "Advanced HTML, a11y & SEO",
    what: "Advanced HTML5 incorporates global attributes, metadata (for search engines), accessible templates (a11y), and semantic structures to maximize page optimization and SEO rankings.",
    why: "Even the best website is useless if no one can find it. Semantic, accessible HTML5 ensures that search engine crawlers understand your page and indexing it correctly.",
    syntax: `<!-- SEO Meta Tags -->
<meta name="robots" content="index, follow">
<!-- Accessibility landmark -->
<nav aria-label="Main menu">...</nav>`,
    basicExample: "Setting up search robots: `<meta name=\"robots\" content=\"index, follow\">`.",
    exampleHTML: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="robots" content="index, follow">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <title>Advanced SEO & A11y Guide</title>
</head>
<body>
    <main>
        <h1>SEO & Accessibility</h1>
        <p>Using semantic structures increases website search rankings.</p>
    </main>
</body>
</html>`,
    expectedOutputDescription: "An optimized HTML document with structured headings, favicon links, and crawler configuration settings.",
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px;">
    <h5 style="color: #1e3a8a; font-weight: bold; margin: 0 0 5px 0;">SEO & Accessibility Preview</h5>
    <p style="font-size: 13px; color: #4b5563; margin: 0;">Using semantic structures increases website search rankings.</p>
</div>`,
    explanation: [
      "name='robots': Configures search bots to index the page and follow its links.",
      "rel='icon': Links to the browser tab icon (favicon).",
      "<main>: Communicates the core topic container to screen readers."
    ],
    importantProperties: [
      { name: "aria-label", desc: "Provides an accessible text label for elements that lack visual text descriptions." },
      { name: "data-*", desc: "Custom data attributes that store private metadata values for styling or scripting." },
      { name: "tabindex", desc: "Controls keyboard focus order when navigating using the Tab key." }
    ],
    realWorld: "E-commerce sites configure detailed meta elements and schema markups to show pricing and rating stars in search results.",
    commonMistakes: [
      "Using non-semantic tags (like span or div) to build buttons without adding keyboard focus or button role accessibility.",
      "Omitting alt attributes on decorative images."
    ],
    bestPractices: [
      "Ensure color contrast ratios pass accessibility compliance levels (minimum 4.5:1 for standard text).",
      "Organize headings sequentially (H1, H2, H3) to establish a clean page outline."
    ],
    practice: {
      question: "Create a button tag containing an aria-label 'Close dialog' and displaying an 'X' symbol.",
      objective: "Apply accessibility attributes.",
      instructions: "Combine button and aria-label attributes.",
      starterCode: `<!-- Write accessible button -->`,
      expectedOutput: "A button optimized for screen readers.",
      hint: "Use aria-label='Close dialog' on the button element.",
      solution: `<button aria-label="Close dialog">X</button>`
    },
    interview: {
      question: "What is accessibility (a11y) in HTML, and why is it important?",
      answer: "Accessibility (a11y) means designing web content so that it is usable by everyone, including people with physical, sensory, or cognitive impairments. Accessible HTML uses semantic tags, alt text, form labels, and focus controls to help screen readers and keyboard users navigate pages.",
      explanation: "Accessible websites are a legal requirement under ADA compliance and rank higher in Google search results.",
      example: "<label for='search'>Search</label><input type='search' id='search'>"
    },
    revision: "Optimized HTML combines metadata (for SEO), semantic markup, and ARIA attributes (for accessibility) to ensure that browsers, bots, and screen readers can parse page outlines."
  }
];

module.exports = htmlLessons;
