// Web Basics Lessons Curriculum

const webBasicsLessons = [
  {
    id: "internet-basics",
    title: "What is the Internet?",
    what: "The Internet is a global network of billions of computers and electronic devices connected together. It allows devices to communicate, exchange data, and share resources worldwide using standardized communication protocols (TCP/IP).",
    why: "Understanding the Internet is the starting point of web development. As a developer, the code you write will be transmitted over this network to reach users across the globe.",
    syntax: `[Your Device] <---(TCP/IP Packets)---> [ISP Router] <---(Fiber Optics)---> [Global Servers]`,
    exampleHTML: `<!-- Conceptual demonstration of an IP address and packet request -->
GET /index.html HTTP/1.1
Host: 192.168.1.1
Connection: keep-alive`,
    renderedOutput: `<div style="font-family: sans-serif; padding: 10px; border-left: 4px solid #6366f1; background-color: #f8fafc;">
    <h6 style="color: #4f46e5; margin: 0 0 5px 0; font-weight: bold;">Network Request Simulation</h6>
    <p style="margin: 0; font-size: 14px; color: #475569;">Sending data packets across routers to IP <strong>8.8.8.8</strong>...</p>
</div>`,
    explanation: [
      "GET /index.html HTTP/1.1: Represents an HTTP request sent over the network.",
      "Host: 192.168.1.1: The IP address of the target server on the network.",
      "Packets: Data is broken down into small packets, routed individually, and reassembled at the destination."
    ],
    importantPoints: [
      "The Internet is the hardware infrastructure; the Web is a software service running on top of it.",
      "TCP/IP (Transmission Control Protocol / Internet Protocol) is the base language of the internet.",
      "Every device on the internet has a unique numerical label called an IP address."
    ],
    commonMistakes: [
      "Confusing the Internet with the World Wide Web. They are not the same thing.",
      "Thinking data travels instantly without latency. Physical distance and routing hops affect load speeds."
    ],
    bestPractices: [
      "Optimize data payloads (images, scripts) because users access your site over varying internet speeds (3G/4G/5G).",
      "Design websites to handle network packet losses gracefully (e.g. caching)."
    ],
    realWorld: "When you send a message on WhatsApp, search on Google, or stream a video on Netflix, your data is traveling over the physical cables and routers of the Internet.",
    practice: {
      question: "Draw a conceptual diagram showing how data flows from your home laptop to a remote server.",
      objective: "Understand routing paths and IP addresses.",
      instructions: "Label your device, ISP, routers, and the destination server.",
      starterCode: `[Laptop: 192.168.1.10] -> [?] -> [Server: 104.244.42.1]`,
      expectedOutput: "A conceptual flow mapping the local device to the ISP and target host.",
      hint: "The data must pass through your local router and internet service provider (ISP).",
      solution: `[Laptop] -> [Local Router] -> [ISP Gateways] -> [Internet Backbone Routers] -> [Target Server]`
    },
    interview: {
      question: "What is TCP/IP and how does it work?",
      answer: "TCP/IP is a suite of communication protocols. TCP (Transmission Control Protocol) breaks data into packets, ensures they arrive safely, and reassembles them. IP (Internet Protocol) addresses and routes the packets to the correct destination.",
      explanation: "TCP is connection-oriented and reliable, while IP handles logical addressing.",
      example: "TCP ensures that all bytes of an image file arrive correctly; IP ensures the bytes reach the correct server."
    },
    revision: "The Internet is a hardware-based global network of computers communicating via IP addresses using the TCP/IP protocol suite."
  },
  {
    id: "world-wide-web",
    title: "What is the Web (WWW)?",
    what: "The World Wide Web (WWW or simply 'the Web') is an information system running on top of the Internet. It allows documents and other web resources to be accessed using web browsers via links.",
    why: "The Web is where your HTML pages live. Developers build websites and web apps that users browse and interact with using web technologies (HTML, CSS, HTTP).",
    syntax: `World Wide Web = HTML (Structure) + HTTP (Transmission) + URLs (Addressing)`,
    exampleHTML: `<!-- A simple link connecting two web documents -->
<a href="about.html">Read About WebLearn Hub</a>`,
    renderedOutput: `<div style="font-family: sans-serif;">
    <p>Browsing a web document: <a href="#" style="color: #6366f1; text-decoration: underline; font-weight: bold;">about.html</a></p>
</div>`,
    explanation: [
      "<a> tag: Defines a hyperlink connecting one web page to another.",
      "href attribute: The target web address (URL) of the connected document.",
      "Web Browser: Fetches the document and displays it visually."
    ],
    importantPoints: [
      "Invented by Sir Tim Berners-Lee in 1989.",
      "The Web is built on three core pillars: HTML, HTTP, and URLs.",
      "The Web runs on top of the Internet, similar to how email or file transfers (FTP) run on the Internet."
    ],
    commonMistakes: [
      "Using the terms Internet and Web interchangeably.",
      "Thinking the Web is a single database instead of a distributed network of independent servers."
    ],
    bestPractices: [
      "Write semantic HTML tags to ensure that search engines can crawl and index your web pages accurately.",
      "Use descriptive link text for better search rankings and user navigation."
    ],
    realWorld: "When you type a URL like 'https://weblearnhub.com' in Chrome or Safari to read an article, you are using the World Wide Web.",
    practice: {
      question: "Write an HTML anchor tag that links to the World Wide Web Consortium (W3C) homepage at 'https://www.w3.org'.",
      objective: "Create external web links.",
      instructions: "Use the anchor element with the correct URL.",
      starterCode: `<!-- Link to W3C here -->`,
      expectedOutput: "A clickable hyperlink that redirects to the W3C organization.",
      hint: "Set the href attribute to 'https://www.w3.org'.",
      solution: `<a href="https://www.w3.org" target="_blank" rel="noopener">Visit W3C</a>`
    },
    interview: {
      question: "What is the difference between the Internet and the World Wide Web?",
      answer: "The Internet is the physical network of computers, routers, and cables connected globally (the hardware). The Web is an information system of linked pages and media running on top of this hardware (the software).",
      explanation: "You can use the Internet without the Web (e.g. sending emails or playing online games), but you cannot access the Web without the Internet.",
      example: "Internet = Roads. Web = Cars traveling on the roads carrying web content."
    },
    revision: "The World Wide Web is an information sharing network of documents accessed via browsers and linked together using URLs and HTTP."
  },
  {
    id: "website-vs-app",
    title: "Website vs Web Application",
    what: "A website is a collection of static web pages containing information that users read and view. A web application is an interactive software program accessed via browsers, allowing users to perform actions, input data, and receive dynamic responses.",
    why: "Knowing the difference helps you plan architectures. Beginners start by building static websites (HTML/CSS) and grow into full-stack developers building dynamic web applications (React, Spring Boot, SQL).",
    syntax: `Website = Read-Only Content (Static)
Web Application = Read-Write Interaction + Database (Dynamic)`,
    exampleHTML: `<!-- Static Website Content -->
<h1>About Our Company</h1>
<p>We build frontend layouts.</p>

<!-- Web Application Input Form -->
<form action="/login" method="POST">
  <input type="email" placeholder="Enter Email" required>
  <button type="submit">Log In</button>
</form>`,
    renderedOutput: `<div style="font-family: sans-serif; display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
    <div style="border: 1px solid #e2e8f0; padding: 10px; background: #fff;">
        <h6 style="font-weight: bold; color: #475569;">Static Website (Read)</h6>
        <p style="font-size: 13px; margin: 0;">Static information, blogs, and manuals.</p>
    </div>
    <div style="border: 1px solid #e2e8f0; padding: 10px; background: #fff;">
        <h6 style="font-weight: bold; color: #6366f1;">Web App (Interactive)</h6>
        <input type="text" placeholder="Type data..." style="font-size: 12px; width: 100%; padding: 4px; border: 1px solid #ccc; margin-bottom: 5px;">
        <button style="font-size: 11px; background: #6366f1; color: white; border: none; padding: 4px 8px; width: 100%;">Process Data</button>
    </div>
</div>`,
    explanation: [
      "Static Website: Serves predefined files (HTML/CSS) directly from the storage to the browser.",
      "Web Application: Processes user requests, executes server-side code (Java/Spring Boot), fetches data from SQL databases, and renders pages dynamically."
    ],
    importantPoints: [
      "Websites are informational; Web Apps are transactional and interactive.",
      "Web Applications require backend servers (APIs, databases, authentication).",
      "Websites load faster because they do not require database queries or complex server-side rendering."
    ],
    commonMistakes: [
      "Thinking that all pages on a browser are simple websites. High-interaction platforms like Gmail or Trello are Web Applications.",
      "Building a complex database backend when a simple static page is sufficient for a client portfolio."
    ],
    bestPractices: [
      "Keep static pages lightweight and host them on Content Delivery Networks (CDNs) like Netlify or GitHub Pages.",
      "Implement client-side state management (like React states) for smooth, app-like interactions."
    ],
    realWorld: "Wikipedia and portfolio pages are websites. Gmail, Facebook, and online banking portals are web applications.",
    practice: {
      question: "Identify whether these platforms are Websites or Web Apps: 1) A restaurant's menu page with address, 2) A flight booking portal.",
      objective: "Differentiate static informational content from transactional operations.",
      instructions: "Answer in terms of Read vs Read-Write operations.",
      starterCode: `1) Menu page: ?\n2) Booking portal: ?`,
      expectedOutput: "Categorization of website vs web application.",
      hint: "Which one requires a user account and database transaction?",
      solution: "1) Menu page: Static Website\n2) Flight booking portal: Web Application"
    },
    interview: {
      question: "How do websites differ from web applications in terms of technology stack?",
      answer: "Websites typically use HTML, CSS, and basic JavaScript, and are served directly as static files. Web applications utilize frontend frameworks (like React or Angular), backend engines (like Java Spring Boot, Node.js), and database layers (like MySQL, PostgreSQL) to process input and generate page structures dynamically.",
      explanation: "Web apps require a server-side engine to handle authentication and transactions.",
      example: "A portfolio page needs only HTML/CSS. An e-commerce dashboard needs React, Spring Boot, and an SQL database."
    },
    revision: "Websites serve static, read-only content directly. Web applications handle complex, read-write interactive workflows using databases and backend servers."
  },
  {
    id: "client-server",
    title: "Client-Server Architecture",
    what: "Client-Server Architecture is a distributed application structure that partitions tasks between service providers (servers) and service requesters (clients). In web development, the browser is the client, and the computer hosting the website code is the server.",
    why: "This architecture is the blueprint of full-stack development. Every action—from entering a username to loading a dashboard—is a client-server exchange.",
    syntax: `[Client (Browser)] --(HTTP Request)--> [Server (Web Host)]
[Client (Browser)] <--(HTTP Response)-- [Server (Web Host)]`,
    exampleHTML: `<!-- Conceptual illustration of Client/Server interactions -->
Client: "Hey Server, please send me 'index.html'."
Server: "Sure! Here is the file: 200 OK."`,
    renderedOutput: `<div style="font-family: sans-serif; text-align: center; padding: 10px; background-color: #f1f5f9;">
    <div style="display: flex; justify-content: space-around; align-items: center; font-size: 14px;">
        <span style="font-weight: bold; color: #475569;">Client (Chrome)</span>
        <span style="color: #6366f1;">⇆</span>
        <span style="font-weight: bold; color: #0f172a;">Server (Apache)</span>
    </div>
</div>`,
    explanation: [
      "Client: Requesters that trigger actions and render the visual layout (HTML/CSS/JS) to the screen.",
      "Server: Listeners that wait for requests, process logic, read/write to databases, and return responses.",
      "HTTP Request: The message format the browser sends to the server."
    ],
    importantPoints: [
      "The client handles user interfaces and layouts (Frontend).",
      "The server handles business logic, security, and database storage (Backend).",
      "Requests and responses communicate over the network via HTTP/HTTPS protocols."
    ],
    commonMistakes: [
      "Trying to query databases directly from client-side HTML/CSS code. Databases must be kept secure behind a server backend.",
      "Confusing client-side errors (like a 400 Bad Request or 404 Not Found) with server-side errors (like 500 Internal Server Error)."
    ],
    bestPractices: [
      "Validate user input on both the client (for instant UI feedback) and the server (for security).",
      "Optimize server response times to prevent clients from waiting with empty screens."
    ],
    realWorld: "When you search for a product on Amazon, your Chrome browser (client) sends your search query to Amazon's data center (server). The server processes the query and sends the list of products back to your screen.",
    practice: {
      question: "List two actions performed by the Client, and two actions performed by the Server.",
      objective: "Understand backend vs frontend duties.",
      instructions: "Think about user displays vs data storage.",
      starterCode: `Client actions: \n- ?\n- ?\nServer actions:\n- ?\n- ?`,
      expectedOutput: "A list dividing visual display and database queries.",
      hint: "Rendering HTML is a client job. Fetching user accounts from a database is a server job.",
      solution: "Client actions:\n- Rendering HTML/CSS text and buttons\n- Capturing keyboard button presses\nServer actions:\n- Querying database tables\n- Authenticating user passwords"
    },
    interview: {
      question: "What is the difference between client-side rendering and server-side rendering?",
      answer: "In Client-Side Rendering (CSR), the server sends a minimal HTML shell and a JavaScript bundle. The browser downloads the script and renders the HTML layout locally. In Server-Side Rendering (SSR), the server executes code to compile the complete HTML page with data and sends the finished page to the browser.",
      explanation: "CSR reduces server load but has slower initial loads. SSR is faster to display initially and is better for SEO.",
      example: "React apps default to CSR. JSP and Spring MVC use SSR."
    },
    revision: "Web development is divided into clients (browsers requesting and displaying interfaces) and servers (computers processing data and hosting files)."
  },
  {
    id: "protocols-addresses",
    title: "URL, Domain, Hosting, and HTTPS",
    what: "To view a website, you need: 1) Hosting (storing files on a server), 2) Domain (a human-readable name like 'google.com'), 3) URL (address of a specific page), and 4) HTTP/HTTPS (protocols for data transfer).",
    why: "Knowing how web naming works is essential for deploying your projects. It explains how a browser locates your HTML files on the global network.",
    syntax: `URL structure:
https://   weblearnhub.com   :443   /html/index.html
[Scheme]   [Domain/Host]     [Port] [Path to file]`,
    exampleHTML: `<!-- Absolute URL referencing a secure web location -->
<a href="https://weblearnhub.com/html/index.html">Start HTML5 Course</a>`,
    renderedOutput: `<div style="font-family: sans-serif; font-size: 13px; color: #475569;">
    <p>Target Link Scheme: <span style="color: #10b981; font-weight: bold;">HTTPS</span> (Encrypted Channel)</p>
</div>`,
    explanation: [
      "https://: Scheme indicating a secure transfer protocol. Data is encrypted using SSL/TLS.",
      "weblearnhub.com: Domain name mapping to the server's IP address using the Domain Name System (DNS).",
      "/html/index.html: The file directory path on the remote web host server."
    ],
    importantPoints: [
      "DNS acts as the phone book of the Web, translating domains (google.com) to numeric IP addresses (142.250.190.46).",
      "Web Hosting is rent space on a computer server that stays connected to the internet 24/7.",
      "HTTPS is HTTP with security. It prevents hackers from intercepts sensitive form inputs like passwords."
    ],
    commonMistakes: [
      "Using HTTP instead of HTTPS for sites collecting user inputs. Browsers display a 'Not Secure' warning for HTTP sites.",
      "Forgetting to renew domain names, causing other servers to claim the address."
    ],
    bestPractices: [
      "Always configure redirect rules to automatically forward traffic from HTTP to HTTPS.",
      "Choose short, readable domain names that are easy for users to type."
    ],
    realWorld: "When you purchase a domain name from GoDaddy and host your HTML files on Netlify with SSL encryption, you are setting up hosting, domain, and HTTPS.",
    practice: {
      question: "Identify the Scheme, Domain, and Path components of this URL: 'https://example.com/blog/article.html'",
      objective: "Break down URL parts.",
      instructions: "List the components matching the syntax example.",
      starterCode: `Scheme: ?\nDomain: ?\nPath: ?`,
      expectedOutput: "URL component analysis.",
      hint: "The scheme comes before the double slash. The domain comes before the first single slash.",
      solution: "Scheme: https\nDomain: example.com\nPath: /blog/article.html"
    },
    interview: {
      question: "What is the difference between HTTP and HTTPS?",
      answer: "HTTP (HyperText Transfer Protocol) transmits data as clear text. If intercepted, anyone can read it. HTTPS (Secure) wraps data inside an encrypted SSL/TLS tunnel, ensuring that credentials, personal details, and transactional data remain secure from interception.",
      explanation: "HTTPS encrypts the request/response payloads; HTTP transmits them in raw text.",
      example: "HTTP link sends passwords in plain text. HTTPS encrypts them into indecipherable strings before sending."
    },
    revision: "Domains map names to server IPs. Hosting stores website files. HTTPS secures the transfer of these files over the network."
  },
  {
    id: "browser-rendering",
    title: "How a Browser Loads a Webpage",
    what: "When you type a URL, the browser: 1) Resolves the domain IP via DNS, 2) Sends an HTTP request, 3) Receives the HTML file, 4) Parses the HTML to build the DOM tree, 5) Downloads CSS/JS files to style and run elements, and 6) Paints the final layout on your screen.",
    why: "Understanding the browser loading pipeline helps developers optimize page speed. It explains why script tags are placed at the bottom and how styles affect render times.",
    syntax: `DNS Lookup ---> HTTP Request ---> Parse HTML (DOM) ---> Parse CSS (CSSOM) ---> Render Tree ---> Paint Page`,
    exampleHTML: `<!DOCTYPE html>
<html>
<head>
    <!-- CSS is loaded first in the head to style layout before paint -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Rendering Pipeline</h1>
    <!-- JS is loaded at the bottom so it doesn't block parsing -->
    <script src="app.js"></script>
</body>
</html>`,
    renderedOutput: `<div style="font-family: sans-serif; font-size: 14px; padding: 10px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px;">
    <h6 style="font-weight: bold; color: #1e3a8a; margin: 0 0 5px 0;">Browser Dev Tools Simulation</h6>
    <div style="background-color: #cbd5e1; height: 10px; border-radius: 5px; width: 100%;">
        <div style="background-color: #10b981; height: 10px; border-radius: 5px; width: 85%;"></div>
    </div>
    <span style="font-size: 11px; color: #64748b;">Page load time: 180ms</span>
</div>`,
    explanation: [
      "DOM (Document Object Model): The hierarchical model representing HTML tags.",
      "CSSOM (CSS Object Model): The model representing style declarations.",
      "Render Tree: The combined model of DOM and CSSOM containing only visible nodes to be painted on screen.",
      "Paint: The process of rendering pixels (color, text, shapes) to the viewport."
    ],
    importantPoints: [
      "HTML parsing is top-down; external scripts can block parsing if not handled correctly.",
      "The DOM and CSSOM are constructed in parallel and must both be ready before the page paints.",
      "Rendering speed is a Google ranking factor (Core Web Vitals)."
    ],
    commonMistakes: [
      "Placing heavy, non-essential JavaScript scripts in the head tag, which stops page parsing and shows a blank screen to users.",
      "Forgetting to optimize image dimensions, which causes layout shifts during page loading."
    ],
    bestPractices: [
      "Place CSS link tags in the `<head>` block so styles are ready before the browser paints.",
      "Add `defer` or `async` attributes to scripts, or place script tags at the bottom of the `<body>` to prevent render blocking."
    ],
    realWorld: "When a page looks plain for a split second and then suddenly jumps into place with formatting, you are seeing a FOUC (Flash of Unstyled Content) caused by styles loading slower than the HTML parsing.",
    practice: {
      question: "Write an HTML skeleton and place a stylesheet reference and a script tag in their correct best-practice locations.",
      objective: "Position resource calls to optimize rendering.",
      instructions: "Place style.css in the head and app.js at the bottom of the body.",
      starterCode: `<!-- Write layout here -->`,
      expectedOutput: "A structured HTML document optimized for browser rendering.",
      hint: "Use link tag inside head and script tag before body close.",
      solution: `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Optimized Page</h1>
    <script src="app.js"></script>
</body>
</html>`
    },
    interview: {
      question: "What is DOM, and what is its role in browser rendering?",
      answer: "DOM stands for Document Object Model. It is a programming interface for web documents. It represents the page structure as a hierarchical tree of nodes. The browser builds this tree from the HTML markup, and scripts (JavaScript) use it to modify page content, styles, and structures dynamically.",
      explanation: "The DOM tree is the bridge between static HTML files and dynamic JavaScript code.",
      example: "h1 tag in HTML becomes an H1 Element Node in the DOM tree, accessible via document.querySelector('h1')."
    },
    revision: "Browsers load pages by resolving IPs, requesting files, parsing HTML/CSS to build the DOM/CSSOM trees, combining them into a Render Tree, and painting pixels on the screen."
  }
];

module.exports = webBasicsLessons;
