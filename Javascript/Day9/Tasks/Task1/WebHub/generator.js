// WebLearn Hub Static Site Generator Script - Version 2.0 (with JavaScript Module & Logical 10)
const fs = require('fs');
const path = require('path');
const {
  webBasicsLessons,
  htmlLessons,
  cssLessons,
  responsiveLessons,
  bootstrapLessons,
  tailwindLessons,
  javascriptLessons,
  jsLogicProblems,
  articlesData,
  cheatSheetsData,
  interviewData,
  examplesData,
  practiceData,
  projectsData,
  quizzesData,
  comparisonData,
  linkedinTemplates
} = require('./content.js');

// 1. Create Target Directories
const dirs = [
  'pages',
  'web-basics',
  'html',
  'css',
  'responsive',
  'bootstrap',
  'tailwind',
  'javascript',
  'examples',
  'practice',
  'projects',
  'quizzes',
  'articles',
  'cheat-sheets',
  'interview',
  'assets/css',
  'assets/images',
  'assets/icons'
];

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Dynamic relative link pathing resolver based on folder location
function getRelativeLink(targetPath, currentFolder) {
  if (!currentFolder) {
    return targetPath;
  }
  const targetParts = targetPath.split('/');
  if (targetParts.length > 1 && targetParts[0] === currentFolder) {
    return targetParts.slice(1).join('/');
  }
  return '../' + targetPath;
}

function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 2. Base HTML Layout Wrapper
function generateLayout({ title, description, content, currentFolder, activeNav, sidebarHtml }) {
  const rootPath = currentFolder ? '../' : '';
  const stylesheetPath = `${rootPath}assets/css/style.css`;
  
  // Primary Navigation
  const navItems = [
    { label: 'Home', path: 'index.html' },
    { label: 'JavaScript', path: 'javascript/index.html' },
    { label: 'Logic 10', path: 'javascript/logical-problems.html' },
    { label: 'Roadmap', path: 'pages/roadmap.html' },
    { label: 'Practice', path: 'pages/practice.html' },
    { label: 'Projects', path: 'pages/projects.html' },
    { label: 'Quizzes', path: 'pages/quizzes.html' },
    { label: 'Articles', path: 'pages/articles.html' },
    { label: 'Interviews', path: 'pages/interview.html' },
    { label: 'Cheat Sheets', path: 'pages/cheat-sheets.html' },
    { label: 'About', path: 'pages/about.html' },
    { label: 'Contact', path: 'pages/contact.html' }
  ];

  const navLinksHtml = navItems.map(item => {
    const isCurrent = activeNav.toLowerCase() === item.label.toLowerCase();
    const href = getRelativeLink(item.path, currentFolder);
    return `
      <li class="nav-item">
        <a class="nav-link ${isCurrent ? 'active fw-bold text-white' : 'text-white-50'}" href="${href}">${item.label}</a>
      </li>
    `;
  }).join('');

  // Dropdown Curriculum items
  const learnItems = [
    { label: 'Web Basics', path: 'web-basics/index.html' },
    { label: 'HTML5', path: 'html/index.html' },
    { label: 'CSS3', path: 'css/index.html' },
    { label: 'Responsive Design', path: 'responsive/index.html' },
    { label: 'Bootstrap 5', path: 'bootstrap/index.html' },
    { label: 'Tailwind CSS', path: 'tailwind/index.html' },
    { label: 'JavaScript (New!)', path: 'javascript/index.html' },
    { label: 'JS Logical 10 (New!)', path: 'javascript/logical-problems.html' }
  ];

  const learnLinksHtml = learnItems.map(item => {
    const href = getRelativeLink(item.path, currentFolder);
    return `<li><a class="dropdown-item text-white" style="font-size: 13px;" href="${href}">${item.label}</a></li>`;
  }).join('');

  const bodyContent = sidebarHtml 
    ? `
      <div class="tutorial-wrapper">
        <aside class="sidebar-nav">
          ${sidebarHtml}
        </aside>
        <main class="content-area">
          ${content}
        </main>
      </div>
    `
    : `
      <main class="flex-grow-1">
        ${content}
      </main>
    `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${description}">
  <title>${title} | WebLearn Hub</title>
  <!-- Bootstrap 5 CSS CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom Compiled style.css (includes Tailwind utilities + prefixing) -->
  <link href="${stylesheetPath}" rel="stylesheet">
  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;600&display=swap" rel="stylesheet">
  <style>
    /* Inline CSS Checkbox Hack for Mobile Navbar toggling */
    #mobile-nav-checkbox:checked ~ #navbarCollapseContent {
      display: block !important;
    }
    /* Hover Dropdown Menu triggers */
    .nav-item-dropdown {
      position: relative;
    }
    .dropdown-menu-custom {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #212529;
      border: 1px solid #343a40;
      padding: 0.5rem 0;
      z-index: 1000;
      min-width: 200px;
      border-radius: 0.25rem;
      list-style: none;
    }
    .dropdown-menu-custom a:hover {
      background-color: #4f46e5;
    }
    .nav-item-dropdown:hover .dropdown-menu-custom {
      display: block;
    }
    .interactive-runner-card {
      background: #0f172a;
      border: 1px solid #334155;
      border-radius: 8px;
      padding: 16px;
      color: #e2e8f0;
    }
    .runner-screen {
      background: #020617;
      border: 1px solid #1e293b;
      border-radius: 6px;
      padding: 12px;
      font-family: 'Fira Code', monospace;
      color: #38bdf8;
      min-height: 48px;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>

  <!-- Responsive Navigation Header -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center gap-2 fw-bold" href="${getRelativeLink('index.html', currentFolder)}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #6366f1;">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        WebLearn Hub
      </a>
      
      <!-- Mobile toggle using checkbox -->
      <input type="checkbox" id="mobile-nav-checkbox" class="d-none">
      <label for="mobile-nav-checkbox" class="navbar-toggler" role="button" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </label>

      <div class="collapse navbar-collapse" id="navbarCollapseContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-1">
          ${navLinksHtml}
          <!-- Learn hover dropdown -->
          <li class="nav-item nav-item-dropdown">
            <a class="nav-link dropdown-toggle text-white-50" href="#" role="button">All Modules</a>
            <ul class="dropdown-menu-custom shadow">
              ${learnLinksHtml}
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search" onsubmit="return false;">
          <input class="form-control me-2 bg-secondary text-white border-0" type="search" placeholder="Search JS & web topics..." aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  ${bodyContent}

  <!-- Footer -->
  <footer class="bg-dark text-white-50 py-5 mt-auto border-top border-secondary">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4">
          <h5 class="text-white fw-bold d-flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #6366f1;">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            WebLearn Hub
          </h5>
          <p class="small mt-2">Master Web Basics, HTML5, CSS3, Bootstrap 5, Tailwind CSS, and JavaScript with interactive examples and logic problem solvers.</p>
          <p class="small text-white-50">Tagline: <em>Learn. Code. Build. Share.</em></p>
        </div>
        <div class="col-md-2">
          <h6 class="text-white fw-bold">Curriculum</h6>
          <ul class="list-unstyled small mt-2">
            <li><a href="${getRelativeLink('web-basics/index.html', currentFolder)}" class="text-white-50 text-decoration-none">Web Basics</a></li>
            <li><a href="${getRelativeLink('html/index.html', currentFolder)}" class="text-white-50 text-decoration-none">HTML5 Basics</a></li>
            <li><a href="${getRelativeLink('css/index.html', currentFolder)}" class="text-white-50 text-decoration-none">CSS3 Styles</a></li>
            <li><a href="${getRelativeLink('responsive/index.html', currentFolder)}" class="text-white-50 text-decoration-none">Responsive Design</a></li>
            <li><a href="${getRelativeLink('bootstrap/index.html', currentFolder)}" class="text-white-50 text-decoration-none">Bootstrap 5</a></li>
            <li><a href="${getRelativeLink('tailwind/index.html', currentFolder)}" class="text-white-50 text-decoration-none">Tailwind CSS</a></li>
            <li><a href="${getRelativeLink('javascript/index.html', currentFolder)}" class="text-warning text-decoration-none fw-bold">JavaScript (New)</a></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h6 class="text-white fw-bold">Resources</h6>
          <ul class="list-unstyled small mt-2">
            <li><a href="${getRelativeLink('javascript/logical-problems.html', currentFolder)}" class="text-white-50 text-decoration-none">JS Logical 10</a></li>
            <li><a href="${getRelativeLink('pages/practice.html', currentFolder)}" class="text-white-50 text-decoration-none">Practice Sets</a></li>
            <li><a href="${getRelativeLink('pages/projects.html', currentFolder)}" class="text-white-50 text-decoration-none">Projects</a></li>
            <li><a href="${getRelativeLink('pages/quizzes.html', currentFolder)}" class="text-white-50 text-decoration-none">Quizzes</a></li>
            <li><a href="${getRelativeLink('pages/articles.html', currentFolder)}" class="text-white-50 text-decoration-none">Articles</a></li>
            <li><a href="${getRelativeLink('pages/cheat-sheets.html', currentFolder)}" class="text-white-50 text-decoration-none">Cheat Sheets</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h6 class="text-white fw-bold">Company & Legal</h6>
          <ul class="list-unstyled small mt-2">
            <li><a href="${getRelativeLink('pages/about.html', currentFolder)}" class="text-white-50 text-decoration-none">About Hub</a></li>
            <li><a href="${getRelativeLink('pages/contact.html', currentFolder)}" class="text-white-50 text-decoration-none">Contact Us</a></li>
            <li><a href="#" class="text-white-50 text-decoration-none">Privacy Policy</a></li>
            <li><a href="#" class="text-white-50 text-decoration-none">Terms of Use</a></li>
          </ul>
        </div>
      </div>
      <hr class="border-secondary my-4">
      <div class="text-center small">
        © 2026 WebLearn Hub. Complete Frontend & JavaScript Learning System. All rights reserved.
      </div>
    </div>
  </footer>

</body>
</html>`;
}

// 3. Generate Sidebar HTML based on course lessons list
function generateSidebar(lessons, courseName, activeId) {
  const linksHtml = lessons.map(lesson => {
    const isActive = lesson.id === activeId;
    const href = getRelativeLink(`${courseName}/${lesson.id}.html`, courseName);
    return `
      <a href="${href}" class="nav-link ${isActive ? 'active' : ''}">
        ${lesson.title}
      </a>
    `;
  }).join('');
  
  const extraLinks = courseName === 'javascript'
    ? `<a href="${getRelativeLink('javascript/logical-problems.html', 'javascript')}" class="nav-link text-warning fw-bold mt-2 border-top pt-2">
        ⚡ Logical 10 Problems
       </a>`
    : '';

  return `
    <div class="mb-4">
      <h5 class="fw-bold px-3 mb-3 text-secondary text-uppercase small tracking-wider">${courseName.toUpperCase()} Outline</h5>
      <nav class="nav flex-column">
        <a href="${getRelativeLink(`${courseName}/index.html`, courseName)}" class="nav-link ${activeId === 'index' ? 'active' : ''}">
          Course Overview
        </a>
        ${linksHtml}
        ${extraLinks}
      </nav>
    </div>
  `;
}

// 4. Generate Lesson Page Content HTML with 17-part outline
function renderLessonContent(lesson, courseName, lessonsList, index) {
  const nextLesson = lessonsList[index + 1];
  const prevLesson = lessonsList[index - 1];

  const prevBtn = prevLesson 
    ? `<a href="${prevLesson.id}.html" class="btn btn-outline-secondary d-flex align-items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Previous: ${prevLesson.title}
       </a>` 
    : '<div></div>';

  const nextBtn = nextLesson 
    ? `<a href="${nextLesson.id}.html" class="btn btn-primary d-flex align-items-center gap-1">
        Next: ${nextLesson.title}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
       </a>` 
    : '<div></div>';

  const explanationHtml = lesson.explanation.map(item => `<li>${item}</li>`).join('');
  const propertiesHtml = (lesson.importantProperties || []).map(p => `
    <tr>
      <td class="font-monospace fw-bold text-indigo-600">${p.name}</td>
      <td>${p.desc}</td>
    </tr>
  `).join('');

  const mistakesHtml = (lesson.commonMistakes || []).map(item => `<li>${item}</li>`).join('');
  const practicesHtml = (lesson.bestPractices || []).map(item => `<li>${item}</li>`).join('');

  return `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
        <li class="breadcrumb-item"><a href="index.html">${courseName.toUpperCase()}</a></li>
        <li class="breadcrumb-item active" aria-current="page">${lesson.title}</li>
      </ol>
    </nav>

    <!-- 1. Topic Title -->
    <h1 class="fw-bold tw-text-4xl tw-text-slate-900 dark:tw-text-white tw-mb-4">${lesson.title}</h1>
    
    <!-- 2. What is it? -->
    <section class="tw-mb-8">
      <h3 class="fw-bold tw-text-xl tw-text-indigo-600 dark:tw-text-indigo-400 tw-mb-2">1. What is it?</h3>
      <p class="lead">${lesson.what}</p>
    </section>

    <!-- 3. Why is it important? -->
    <section class="tw-mb-8">
      <h3 class="fw-bold tw-text-xl tw-text-indigo-600 dark:tw-text-indigo-400 tw-mb-2">2. Why is it important?</h3>
      <p>${lesson.why}</p>
    </section>

    <!-- 4. Syntax & 5. Basic Example -->
    <section class="tw-mb-8">
      <h3 class="fw-bold tw-text-xl tw-text-indigo-600 dark:tw-text-indigo-400 tw-mb-2">3. Syntax & Basic Example</h3>
      <pre class="bg-dark text-white p-3 rounded font-monospace small mb-2"><code>${escapeHtml(lesson.syntax)}</code></pre>
      <p class="small text-muted mt-2"><strong>Basic description:</strong> <code>${escapeHtml(lesson.basicExample || 'No basic explanation needed.')}</code></p>
    </section>

    <!-- 6. Code Example & 7. Expected Output -->
    <section class="tw-mb-8">
      <h3 class="fw-bold tw-text-xl tw-text-indigo-600 dark:tw-text-indigo-400 tw-mb-3">4. Code & Interactive Rendered Output</h3>
      
      <div class="editor-container">
        <div class="editor-header">
          <div class="dot dot-red"></div>
          <div class="dot dot-yellow"></div>
          <div class="dot dot-green"></div>
          <div class="editor-title">${courseName} live sandbox</div>
        </div>
        <div class="editor-body">
          <pre class="code-panel"><code>${escapeHtml(lesson.exampleHTML || lesson.syntax)}</code></pre>
          <div class="output-panel">
            <h6 class="tw-text-xs tw-text-slate-400 tw-font-bold tw-uppercase tw-mb-2">Live Output & Execution Preview</h6>
            <div class="border tw-p-4 tw-rounded bg-white text-dark">
              ${lesson.renderedOutput}
            </div>
          </div>
        </div>
      </div>
      <p class="small text-muted mt-2"><strong>Expected Layout / Behavior:</strong> ${lesson.expectedOutputDescription || 'Visual representation of element content.'}</p>
    </section>

    <!-- 8. Line-by-Line Explanation -->
    <section class="tw-mb-8">
      <h3 class="fw-bold tw-text-xl tw-text-indigo-600 dark:tw-text-indigo-400 tw-mb-2">5. Line-by-Line Explanation</h3>
      <ul class="tw-list-disc tw-pl-5 tw-space-y-2">
        ${explanationHtml}
      </ul>
    </section>

    <!-- 9. Important Properties/Tags/Classes -->
    <section class="tw-mb-8">
      <h3 class="fw-bold tw-text-xl tw-text-indigo-600 dark:tw-text-indigo-400 tw-mb-3">6. Key Properties, Methods & Syntax</h3>
      <table class="table table-bordered table-striped small">
        <thead>
          <tr class="table-primary">
            <th>Property / Method / Tag</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          ${propertiesHtml || '<tr><td colspan="2">No specific variables declared.</td></tr>'}
        </tbody>
      </table>
    </section>

    <!-- 10. Real-World Use -->
    <section class="tw-mb-8 bg-info bg-opacity-10 border border-info border-opacity-20 tw-p-4 tw-rounded-lg">
      <h4 class="fw-bold text-info-emphasis fs-5">7. Real-World Use</h4>
      <p class="mb-0 small">${lesson.realWorld}</p>
    </section>

    <!-- 11. Common Mistakes & 12. Best Practices -->
    <div class="row g-4 tw-mb-8">
      <div class="col-md-6">
        <div class="card bg-light h-100 p-3 border-0">
          <h4 class="fw-bold text-success fs-5">Best Practices</h4>
          <ul class="small mb-0 mt-2">
            ${practicesHtml || '<li>Keep code clean and modular.</li>'}
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card bg-light h-100 p-3 border-0">
          <h4 class="fw-bold text-danger fs-5">Common Mistakes</h4>
          <ul class="small mb-0 mt-2">
            ${mistakesHtml || '<li>Avoid syntax pitfalls.</li>'}
          </ul>
        </div>
      </div>
    </div>

    <!-- 13. Practice Exercise -->
    <section class="tw-mb-8">
      <h3 class="fw-bold tw-text-xl tw-text-indigo-600 dark:tw-text-indigo-400 tw-mb-3">8. Interactive Practice Challenge</h3>
      <div class="card border-primary p-4 bg-white text-dark">
        <h5 class="fw-bold">${lesson.practice.question}</h5>
        <p class="small text-muted mt-1">Objective: ${lesson.practice.objective}</p>
        <p class="small">Instructions: ${lesson.practice.instructions}</p>
        
        <pre class="bg-dark text-white p-3 rounded font-monospace small mb-3"><code>${escapeHtml(lesson.practice.starterCode)}</code></pre>
        
        <div class="d-flex gap-2">
          <details class="interactive-card flex-fill">
            <summary>Reveal Hint</summary>
            <div class="interactive-body">
              <p class="mb-0 text-secondary">${escapeHtml(lesson.practice.hint)}</p>
            </div>
          </details>
          <details class="interactive-card flex-fill">
            <summary>Reveal Solution</summary>
            <div class="interactive-body">
              <pre class="bg-dark text-white p-3 rounded font-monospace small mb-0"><code>${escapeHtml(lesson.practice.solution)}</code></pre>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- 14. Interview Questions -->
    <section class="tw-mb-8">
      <h3 class="fw-bold tw-text-xl tw-text-indigo-600 dark:tw-text-indigo-400 tw-mb-3">9. Tech Screening Question</h3>
      <details class="interactive-card">
        <summary>Q: ${lesson.interview.question}</summary>
        <div class="interactive-body">
          <h6 class="fw-bold text-success">Answer:</h6>
          <p>${lesson.interview.answer}</p>
          <h6 class="fw-bold text-indigo-600">Explanation:</h6>
          <p class="small">${lesson.interview.explanation}</p>
          <pre class="bg-dark text-white p-3 rounded font-monospace small mb-0"><code>${escapeHtml(lesson.interview.example)}</code></pre>
        </div>
      </details>
    </section>

    <!-- 15. Quick Revision -->
    <section class="tw-mb-8 bg-warning bg-opacity-10 border border-warning border-opacity-20 tw-p-4 tw-rounded-lg">
      <h4 class="fw-bold text-warning-emphasis fs-5">10. Quick Revision</h4>
      <p class="mb-0 small">${lesson.revision || 'Review key concepts and outlines.'}</p>
    </section>

    <!-- 16 & 17. Previous / Next navigation -->
    <div class="d-flex justify-content-between pt-4 border-top">
      ${prevBtn}
      ${nextBtn}
    </div>
  `;
}

// 5. Generate Individual Lesson Files for Courses
const courses = [
  { name: 'web-basics', lessons: webBasicsLessons },
  { name: 'html', lessons: htmlLessons },
  { name: 'css', lessons: cssLessons },
  { name: 'responsive', lessons: responsiveLessons },
  { name: 'bootstrap', lessons: bootstrapLessons },
  { name: 'tailwind', lessons: tailwindLessons },
  { name: 'javascript', lessons: javascriptLessons }
];

courses.forEach(course => {
  // Course overview page
  const sidebarHtml = generateSidebar(course.lessons, course.name, 'index');
  
  let overviewHero = '';
  if (course.name === 'javascript') {
    overviewHero = `
      <div class="card border-0 shadow-sm p-4 mb-4" style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); color: white;">
        <span class="badge bg-warning text-dark align-self-start fw-bold mb-2 text-uppercase">Module Active</span>
        <h2 class="display-6 fw-bold text-white mb-2">Learn JavaScript From Scratch</h2>
        <p class="lead text-white-50 mb-3">Master JavaScript fundamentals, logic, DOM manipulation, events and modern JavaScript through simple explanations, examples and practice.</p>
        <div class="d-flex flex-wrap gap-2">
          <a href="introduction.html" class="btn btn-warning fw-bold px-4">Start Learning</a>
          <a href="logical-problems.html" class="btn btn-outline-light px-4">Practice Logical 10</a>
          <a href="../quizzes/javascript-quiz.html" class="btn btn-outline-light px-4">Take Quiz</a>
        </div>
      </div>
    `;
  }

  const overviewHtml = `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">${course.name === 'javascript' ? 'JavaScript' : course.name.toUpperCase()} Course</li>
      </ol>
    </nav>
    ${overviewHero}
    <h1 class="fw-bold tw-text-3xl tw-text-slate-900 dark:tw-text-white tw-mb-4">${course.name === 'javascript' ? 'JavaScript Curriculum: 10 Major Topics' : `${course.name.toUpperCase()} Course Overview`}</h1>
    <p class="lead text-muted">Select any topic from the list below or from the sidebar menu to begin learning from basic to advanced parameters.</p>
    
    <div class="row g-4 mt-1">
      ${course.lessons.map((lesson, idx) => `
        <div class="col-md-6">
          <div class="card h-100 shadow-sm border-0 bg-white text-dark">
            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-indigo text-uppercase small" style="background-color: #6366f1;">Topic ${idx + 1}</span>
              </div>
              <h5 class="card-title fw-bold text-slate-800">${lesson.title}</h5>
              <p class="card-text text-muted small flex-grow-1">${lesson.what.slice(0, 140)}...</p>
              <a href="${lesson.id}.html" class="btn btn-sm btn-outline-primary fw-bold mt-2 align-self-start">Start Lesson</a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    ${course.name === 'javascript' ? `
      <!-- Logical 10 Banner in JS Overview -->
      <div class="mt-5 p-4 rounded-3 border border-warning bg-warning bg-opacity-10">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <span class="badge bg-warning text-dark text-uppercase fw-bold mb-1">Interactive Logic Suite</span>
            <h4 class="fw-bold text-slate-900 mb-1">JavaScript Logical Problems — Top 10</h4>
            <p class="text-muted mb-0 small">Test Palindromes, Primes, Factorials, Fibonacci series, and String Reversals with live interactive execution runners.</p>
          </div>
          <a href="logical-problems.html" class="btn btn-primary fw-bold px-4">Open Logical 10 Suite</a>
        </div>
      </div>
    ` : ''}
  `;
  
  const indexPageTitle = course.name === 'javascript' ? 'JavaScript — Learn JavaScript From Scratch' : `${course.name.toUpperCase()} Course Overview`;
  const indexPageDesc = course.name === 'javascript' ? 'Master JavaScript fundamentals, logic, DOM manipulation, events and modern JavaScript through simple explanations, examples and practice.' : `Master ${course.name.toUpperCase()} with structured visual tutorials.`;

  const indexPageCode = generateLayout({
    title: indexPageTitle,
    description: indexPageDesc,
    content: overviewHtml,
    currentFolder: course.name,
    activeNav: course.name === 'javascript' ? 'JavaScript' : 'Learn',
    sidebarHtml
  });
  
  fs.writeFileSync(path.join(__dirname, course.name, 'index.html'), indexPageCode);
  console.log(`Generated ${course.name}/index.html`);

  // Individual lesson pages
  course.lessons.forEach((lesson, index) => {
    const sidebarHtml = generateSidebar(course.lessons, course.name, lesson.id);
    const content = renderLessonContent(lesson, course.name, course.lessons, index);
    
    const pageHtml = generateLayout({
      title: lesson.title,
      description: `Learn ${lesson.title} syntax, properties, mistakes, and practice questions.`,
      content,
      currentFolder: course.name,
      activeNav: course.name === 'javascript' ? 'JavaScript' : 'Learn',
      sidebarHtml
    });
    
    fs.writeFileSync(path.join(__dirname, course.name, `${lesson.id}.html`), pageHtml);
    console.log(`Generated ${course.name}/${lesson.id}.html`);
  });
});

// 6. Generate Dedicated Logical 10 Pages for JavaScript

function generateLogicSidebar(activeId) {
  const linksHtml = jsLogicProblems.map(p => `
    <a href="logic-${p.num}.html" class="nav-link ${activeId === p.id ? 'active' : ''}">
      <span class="badge bg-secondary me-1">#${p.num}</span> ${p.title}
    </a>
  `).join('');

  return `
    <div class="mb-4">
      <h5 class="fw-bold px-3 mb-3 text-warning text-uppercase small tracking-wider">Logical 10 Problems</h5>
      <nav class="nav flex-column">
        <a href="logical-problems.html" class="nav-link ${activeId === 'index' ? 'active' : ''}">
          Logical 10 Overview
        </a>
        ${linksHtml}
      </nav>
    </div>
  `;
}

// A. Logical 10 Hub Page (javascript/logical-problems.html)
const logicalHubHtml = `
  <div class="container py-4">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
        <li class="breadcrumb-item"><a href="index.html">JavaScript</a></li>
        <li class="breadcrumb-item active" aria-current="page">Logical Problems</li>
      </ol>
    </nav>

    <div class="text-center mb-5">
      <span class="badge bg-warning text-dark text-uppercase fw-bold px-3 py-2 mb-2">Project Submission</span>
      <h1 class="display-5 fw-bold text-slate-900">JavaScript Logical Problems — Top 10</h1>
      <p class="lead text-muted col-lg-8 mx-auto">Master core programming logic with step-by-step algorithms, intuitive explanations, clean code, time complexity analysis, and live interactive runners.</p>
    </div>

    <div class="row g-4">
      ${jsLogicProblems.map(p => `
        <div class="col-md-6">
          <div class="card h-100 shadow-sm border-0 bg-white text-dark">
            <div class="card-header bg-dark text-white fw-bold d-flex justify-content-between align-items-center">
              <span>Logic ${p.num}: ${p.title}</span>
              <span class="badge bg-warning text-dark font-monospace">O(1) / O(N)</span>
            </div>
            <div class="card-body d-flex flex-column">
              <h6 class="fw-bold text-primary mb-2">Problem:</h6>
              <p class="small text-slate-700">${p.problem}</p>
              <div class="bg-light p-2 rounded mb-3 small font-monospace">
                <strong>Input:</strong> ${p.example.input} &rarr; <strong>Output:</strong> ${p.example.output}
              </div>
              <p class="small text-muted flex-grow-1"><strong>Algorithm:</strong> ${p.algorithm[2] || p.algorithm[1]}</p>
              <a href="logic-${p.num}.html" class="btn btn-sm btn-primary fw-bold align-self-start mt-2">Open Solution & Live Runner</a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

fs.writeFileSync(path.join(__dirname, 'javascript', 'logical-problems.html'), generateLayout({
  title: 'JavaScript Logical Problems — Top 10',
  description: 'Top 10 JavaScript logic and algorithm problems with explanations, code solutions, and live interactive execution.',
  content: logicalHubHtml,
  currentFolder: 'javascript',
  activeNav: 'Logic 10',
  sidebarHtml: generateLogicSidebar('index')
}));
console.log('Generated javascript/logical-problems.html');

// B. Individual Logic Problem Pages (javascript/logic-1.html to logic-10.html)
jsLogicProblems.forEach((p, idx) => {
  const prevP = jsLogicProblems[idx - 1];
  const nextP = jsLogicProblems[idx + 1];

  const prevBtn = prevP 
    ? `<a href="logic-${prevP.num}.html" class="btn btn-outline-secondary d-flex align-items-center gap-1">
        &larr; Prev: Logic ${prevP.num}
       </a>` 
    : '<div></div>';

  const nextBtn = nextP 
    ? `<a href="logic-${nextP.num}.html" class="btn btn-primary d-flex align-items-center gap-1">
        Next: Logic ${nextP.num} &rarr;
       </a>` 
    : '<div></div>';

  const content = `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
        <li class="breadcrumb-item"><a href="index.html">JavaScript</a></li>
        <li class="breadcrumb-item"><a href="logical-problems.html">Logical Problems</a></li>
        <li class="breadcrumb-item active" aria-current="page">Logic ${p.num}</li>
      </ol>
    </nav>

    <div class="d-flex align-items-center gap-2 mb-2">
      <span class="badge bg-warning text-dark fw-bold text-uppercase">Logic Problem ${p.num} of 10</span>
    </div>
    <h1 class="fw-bold tw-text-3xl tw-text-slate-900 dark:tw-text-white tw-mb-4">${p.title}</h1>

    <!-- Problem Statement -->
    <div class="card border-primary p-4 bg-white text-dark mb-4 shadow-sm">
      <h4 class="fw-bold text-primary fs-5">Problem Statement</h4>
      <p class="lead mb-0 fs-6">${p.problem}</p>
    </div>

    <!-- Examples -->
    <section class="tw-mb-6">
      <h4 class="fw-bold tw-text-xl tw-text-indigo-600 tw-mb-3">Examples</h4>
      <div class="row g-3">
        <div class="col-md-6">
          <div class="bg-light p-3 border rounded font-monospace small">
            <strong>Example 1:</strong><br>
            Input: <code>${escapeHtml(p.example.input)}</code><br>
            Output: <code>${escapeHtml(p.example.output)}</code>
          </div>
        </div>
        ${p.example2 ? `
        <div class="col-md-6">
          <div class="bg-light p-3 border rounded font-monospace small">
            <strong>Example 2:</strong><br>
            Input: <code>${escapeHtml(p.example2.input)}</code><br>
            Output: <code>${escapeHtml(p.example2.output)}</code>
          </div>
        </div>` : ''}
      </div>
    </section>

    <!-- Logic -->
    <section class="tw-mb-6">
      <h4 class="fw-bold tw-text-xl tw-text-indigo-600 tw-mb-2">Logic & Thought Process</h4>
      <div class="bg-info bg-opacity-10 border border-info border-opacity-25 p-3 rounded">
        <p class="mb-0">${p.logic}</p>
      </div>
    </section>

    <!-- Algorithm -->
    <section class="tw-mb-6">
      <h4 class="fw-bold tw-text-xl tw-text-indigo-600 tw-mb-2">Step-by-Step Algorithm</h4>
      <ol class="tw-list-decimal tw-pl-5 tw-space-y-1">
        ${p.algorithm.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </section>

    <!-- Code Example -->
    <section class="tw-mb-6">
      <h4 class="fw-bold tw-text-xl tw-text-indigo-600 tw-mb-3">JavaScript Solution Code</h4>
      <pre class="bg-dark text-white p-3 rounded font-monospace small mb-2"><code>${escapeHtml(p.code)}</code></pre>
      <p class="small text-muted mt-2"><strong>Output:</strong> ${p.outputDescription}</p>
    </section>

    <!-- Line by line explanation -->
    <section class="tw-mb-6">
      <h4 class="fw-bold tw-text-xl tw-text-indigo-600 tw-mb-2">Line-by-Line Code Explanation</h4>
      <ul class="tw-list-disc tw-pl-5 tw-space-y-1 small">
        ${p.lineByLineExplanation.map(line => `<li>${line}</li>`).join('')}
      </ul>
    </section>

    <!-- Complexity & Edge Cases -->
    <div class="row g-3 tw-mb-8">
      <div class="col-md-6">
        <div class="card bg-light h-100 p-3 border-0">
          <h5 class="fw-bold text-dark fs-6">Complexity Analysis</h5>
          <p class="small mb-1"><strong>Time Complexity:</strong> ${p.timeComplexity}</p>
          <p class="small mb-0"><strong>Space Complexity:</strong> ${p.spaceComplexity}</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card bg-light h-100 p-3 border-0">
          <h5 class="fw-bold text-dark fs-6">Edge Cases & Interview Tips</h5>
          <p class="small mb-0">${p.edgeCases}</p>
        </div>
      </div>
    </div>

    <!-- Live Interactive Tester -->
    <section class="tw-mb-8">
      <h4 class="fw-bold tw-text-xl tw-text-warning tw-mb-3">⚡ Live Interactive Code Runner</h4>
      <div class="interactive-runner-card">
        <label class="form-label fw-bold small text-slate-300" for="live-input-${p.num}">${p.runnerConfig.inputLabel}</label>
        <div class="input-group mb-3">
          <input type="${p.runnerConfig.inputType}" id="live-input-${p.num}" class="form-control font-monospace" value="${p.runnerConfig.defaultValue}">
          <button class="btn btn-warning fw-bold px-4" type="button" id="live-run-btn-${p.num}">Run Code</button>
        </div>
        <label class="form-label small text-slate-400">Execution Output Console:</label>
        <div id="live-output-${p.num}" class="runner-screen">Click 'Run Code' to execute JavaScript logic...</div>
      </div>
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          const btn = document.getElementById('live-run-btn-${p.num}');
          const input = document.getElementById('live-input-${p.num}');
          const output = document.getElementById('live-output-${p.num}');
          
          ${p.runnerConfig.handlerCode}

          function run() {
            try {
              const res = executeLogic(input.value);
              output.innerText = res;
            } catch(e) {
              output.innerText = "Error: " + e.message;
            }
          }

          btn.addEventListener('click', run);
          input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') run();
          });
          // Auto run once
          run();
        });
      </script>
    </section>

    <!-- Navigation between problems -->
    <div class="d-flex justify-content-between pt-4 border-top">
      ${prevBtn}
      ${nextBtn}
    </div>
  `;

  fs.writeFileSync(path.join(__dirname, 'javascript', `logic-${p.num}.html`), generateLayout({
    title: `Logic ${p.num}: ${p.title}`,
    description: `Solution, algorithm, explanation and interactive code runner for ${p.title}.`,
    content,
    currentFolder: 'javascript',
    activeNav: 'Logic 10',
    sidebarHtml: generateLogicSidebar(p.id)
  }));
  console.log(`Generated javascript/logic-${p.num}.html`);
});

// 7. Generate Homepage (index.html)
const homeContent = `
  <header class="bg-dark text-white py-5 text-center" style="background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%) !important;">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <span class="badge bg-indigo mb-3 px-3 py-2 text-uppercase fw-bold" style="background-color: #6366f1;">Version 2.0 (JavaScript Edition)</span>
          <h1 class="display-3 fw-bold text-white mb-3">Learn Web Development From Zero</h1>
          <p class="lead text-white-50 mb-4">Master HTML5, CSS3, Bootstrap 5, Tailwind CSS, and JavaScript through simple explanations, interactive examples, practice and projects.</p>
          <div class="d-flex justify-content-center flex-wrap gap-3">
            <a href="javascript/index.html" class="btn btn-warning btn-lg px-4 fw-bold">Explore JavaScript (New!)</a>
            <a href="javascript/logical-problems.html" class="btn btn-outline-warning btn-lg px-4">Logical 10 Suite</a>
            <a href="web-basics/index.html" class="btn btn-outline-light btn-lg px-4">Start from Zero</a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section class="container py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Learning Path Modules</h2>
      <p class="text-muted">Master the core building blocks of frontend layouts, styling, and programming logic</p>
    </div>
    
    <div class="row g-4 justify-content-center">
      <!-- Web Basics -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body d-flex flex-column p-4">
            <h4 class="card-title fw-bold text-slate-900">Web Basics</h4>
            <p class="card-text text-muted small flex-grow-1">Learn core internet concepts: browser engines, web hosts, domains, URL schemas, and client-server HTTP requests.</p>
            <a href="web-basics/index.html" class="btn btn-outline-dark mt-3 w-100 fw-bold">Explore Basics</a>
          </div>
        </div>
      </div>

      <!-- HTML5 -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body d-flex flex-column p-4">
            <h4 class="card-title fw-bold text-slate-900">HTML5</h4>
            <p class="card-text text-muted small flex-grow-1">Learn how to create webpage content structures. Format headings, lists, tables, inputs validation, and semantic outlines.</p>
            <a href="html/index.html" class="btn btn-outline-danger mt-3 w-100 fw-bold">Learn HTML5</a>
          </div>
        </div>
      </div>

      <!-- CSS3 -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body d-flex flex-column p-4">
            <h4 class="card-title fw-bold text-slate-900">CSS3</h4>
            <p class="card-text text-muted small flex-grow-1">Learn styling. Master box models, cascade specificity, flexbox grid alignments, transitions, and local variables.</p>
            <a href="css/index.html" class="btn btn-outline-primary mt-3 w-100 fw-bold">Learn CSS3</a>
          </div>
        </div>
      </div>

      <!-- Responsive Design -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body d-flex flex-column p-4">
            <h4 class="card-title fw-bold text-slate-900">Responsive Web Design</h4>
            <p class="card-text text-muted small flex-grow-1">Build layouts for all viewports. Understand mobile-first media queries, breakpoints, fluid media, and forms.</p>
            <a href="responsive/index.html" class="btn btn-outline-success mt-3 w-100 fw-bold">Learn Responsive</a>
          </div>
        </div>
      </div>

      <!-- Bootstrap 5 -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body d-flex flex-column p-4">
            <h4 class="card-title fw-bold text-slate-900">Bootstrap 5</h4>
            <p class="card-text text-muted small flex-grow-1">Accelerate design. Add pre-styled grids, buttons, alerts cards, accordions, progress bars, and modal dialogs instantly.</p>
            <a href="bootstrap/index.html" class="btn btn-outline-violet mt-3 w-100 fw-bold" style="color: #8b5cf6; border-color: #8b5cf6;">Learn Bootstrap</a>
          </div>
        </div>
      </div>

      <!-- Tailwind CSS -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body d-flex flex-column p-4">
            <h4 class="card-title fw-bold text-slate-900">Tailwind CSS</h4>
            <p class="card-text text-muted small flex-grow-1">Learn utility-first CSS. Style custom borders, shadows, heights, hover states, and dark mode variants inside HTML.</p>
            <a href="tailwind/index.html" class="btn btn-outline-info mt-3 w-100 fw-bold">Learn Tailwind</a>
          </div>
        </div>
      </div>

      <!-- JavaScript Module -->
      <div class="col-md-12 col-lg-8">
        <div class="card h-100 shadow border-warning bg-warning bg-opacity-10">
          <div class="card-body d-flex flex-column p-4">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-warning text-dark text-uppercase fw-bold">Core Programming Language</span>
              <span class="badge bg-dark text-white">Topics 10 + Logical 10</span>
            </div>
            <h3 class="card-title fw-bold text-slate-900">JavaScript Programming & Logic</h3>
            <p class="card-text text-muted small flex-grow-1">Master variables, data types, operators, conditional statements, loops, functions, array & object methods, strings & numbers, DOM manipulation, events, and modern ES6+ features with live interactive code runners.</p>
            <div class="d-flex gap-2 mt-3 flex-wrap">
              <a href="javascript/index.html" class="btn btn-warning fw-bold px-4">Start JavaScript (10 Topics)</a>
              <a href="javascript/logical-problems.html" class="btn btn-outline-dark fw-bold px-4">Solve Logical 10 Problems</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const homePageCode = generateLayout({
  title: 'Learn Web Development From Zero',
  description: 'Master HTML5, CSS3, Bootstrap 5, Tailwind CSS, and JavaScript. Tutorials, interactive examples, exercises, and projects.',
  content: homeContent,
  currentFolder: '',
  activeNav: 'Home'
});

fs.writeFileSync(path.join(__dirname, 'index.html'), homePageCode);
console.log('Generated index.html');

// 8. Generate Landing Pages in pages/

// A. Roadmap Page
const roadmapContent = `
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold text-slate-900">Full-Stack Career Roadmap</h1>
      <p class="text-muted">A structured timeline tracing your career path from web basics to professional full-stack development.</p>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-9">
        <div class="card p-4 border-0 shadow-sm">
          <div class="d-flex flex-column gap-4">
            <!-- Stage 1 -->
            <div class="d-flex align-items-start gap-3 border-left border-success pb-3" style="border-left: 3px solid #10b981 !important; padding-left: 20px;">
              <span class="badge bg-success px-2 py-1 text-uppercase small">Stage 1</span>
              <div>
                <h5 class="fw-bold mb-1">Web Basics <span class="text-success small fw-semibold">(Completed)</span></h5>
                <p class="small text-muted mb-0">Internet protocols, client-server architectures, DNS names, and URL formatting guidelines.</p>
              </div>
            </div>
            
            <!-- Stage 2 -->
            <div class="d-flex align-items-start gap-3 border-left border-success pb-3" style="border-left: 3px solid #10b981 !important; padding-left: 20px;">
              <span class="badge bg-success px-2 py-1 text-uppercase small">Stage 2</span>
              <div>
                <h5 class="fw-bold mb-1">HTML5 Structure <span class="text-success small fw-semibold">(Completed)</span></h5>
                <p class="small text-muted mb-0">Semantic outlines, text markup elements, anchors relative routing, tabular grids, and accessibility.</p>
              </div>
            </div>

            <!-- Stage 3 -->
            <div class="d-flex align-items-start gap-3 border-left border-success pb-3" style="border-left: 3px solid #10b981 !important; padding-left: 20px;">
              <span class="badge bg-success px-2 py-1 text-uppercase small">Stage 3</span>
              <div>
                <h5 class="fw-bold mb-1">CSS3 Aesthetics <span class="text-success small fw-semibold">(Completed)</span></h5>
                <p class="small text-muted mb-0">Selectors, box models layouts, typography rules, flexbox centering, transitions, and local variables.</p>
              </div>
            </div>

            <!-- Stage 4 -->
            <div class="d-flex align-items-start gap-3 border-left border-success pb-3" style="border-left: 3px solid #10b981 !important; padding-left: 20px;">
              <span class="badge bg-success px-2 py-1 text-uppercase small">Stage 4</span>
              <div>
                <h5 class="fw-bold mb-1">Responsive Web Design <span class="text-success small fw-semibold">(Completed)</span></h5>
                <p class="small text-muted mb-0">Media queries, viewport breakpoints, fluid media sizes, and layout testing guides.</p>
              </div>
            </div>

            <!-- Stage 5 -->
            <div class="d-flex align-items-start gap-3 border-left border-success pb-3" style="border-left: 3px solid #10b981 !important; padding-left: 20px;">
              <span class="badge bg-success px-2 py-1 text-uppercase small">Stage 5</span>
              <div>
                <h5 class="fw-bold mb-1">Bootstrap 5 Components <span class="text-success small fw-semibold">(Completed)</span></h5>
                <p class="small text-muted mb-0">Responsive layouts, navigation headers, cards metrics, progress loaders, and modal panels.</p>
              </div>
            </div>

            <!-- Stage 6 -->
            <div class="d-flex align-items-start gap-3 border-left border-success pb-3" style="border-left: 3px solid #10b981 !important; padding-left: 20px;">
              <span class="badge bg-success px-2 py-1 text-uppercase small">Stage 6</span>
              <div>
                <h5 class="fw-bold mb-1">Tailwind CSS Utilities <span class="text-success small fw-semibold">(Completed)</span></h5>
                <p class="small text-muted mb-0">Utility composition, colors scales, shadows depth, responsive states, and dark mode variants.</p>
              </div>
            </div>

            <!-- Stage 7 -->
            <div class="d-flex align-items-start gap-3 border-left border-success pb-3" style="border-left: 3px solid #10b981 !important; padding-left: 20px;">
              <span class="badge bg-success px-2 py-1 text-uppercase small">Stage 7</span>
              <div>
                <h5 class="fw-bold mb-1">JavaScript DOM & Logical 10 <span class="text-success small fw-semibold">(Completed!)</span></h5>
                <p class="small text-muted mb-0">Variables, objects, event listener triggers, 10 algorithm problems, and client-side storage configurations.</p>
              </div>
            </div>

            <!-- Stage 8 -->
            <div class="d-flex align-items-start gap-3 border-left border-warning pb-3" style="border-left: 3px solid #f59e0b !important; padding-left: 20px;">
              <span class="badge bg-warning text-dark px-2 py-1 text-uppercase small">Stage 8</span>
              <div>
                <h5 class="fw-bold mb-1">Git & GitHub <span class="text-warning small fw-semibold">(In Progress)</span></h5>
                <p class="small text-muted mb-0">Repository commits, branching routes, conflicts merging, and GitHub page hosting configurations.</p>
              </div>
            </div>

            <!-- Stage 9 -->
            <div class="d-flex align-items-start gap-3 border-left pb-3" style="border-left: 3px solid #6366f1 !important; padding-left: 20px;">
              <span class="badge bg-indigo px-2 py-1 text-uppercase small" style="background-color: #6366f1;">Stage 9</span>
              <div>
                <h5 class="fw-bold mb-1">Core Java & OOP</h5>
                <p class="small text-muted mb-0">Java syntax, control flows, arrays collections, exception boundaries, collections framework, and OOP principles.</p>
              </div>
            </div>

            <!-- Stage 10 -->
            <div class="d-flex align-items-start gap-3 border-left pb-3" style="border-left: 3px solid #6366f1 !important; padding-left: 20px;">
              <span class="badge bg-indigo px-2 py-1 text-uppercase small" style="background-color: #6366f1;">Stage 10</span>
              <div>
                <h5 class="fw-bold mb-1">SQL & Relational Databases</h5>
                <p class="small text-muted mb-0">DDL/DML structures, table joins queries, indexes, normalization models, and subqueries.</p>
              </div>
            </div>

            <!-- Stage 11 -->
            <div class="d-flex align-items-start gap-3 border-left pb-3" style="border-left: 3px solid #6366f1 !important; padding-left: 20px;">
              <span class="badge bg-indigo px-2 py-1 text-uppercase small" style="background-color: #6366f1;">Stage 11</span>
              <div>
                <h5 class="fw-bold mb-1">Spring Boot Backend APIs</h5>
                <p class="small text-muted mb-0">Dependency Injection, REST API endpoints, JPA Hibernate mappings, validations, and custom exception classes.</p>
              </div>
            </div>

            <!-- Stage 12 -->
            <div class="d-flex align-items-start gap-3 border-left pb-3" style="border-left: 3px solid #6366f1 !important; padding-left: 20px;">
              <span class="badge bg-indigo px-2 py-1 text-uppercase small" style="background-color: #6366f1;">Stage 12</span>
              <div>
                <h5 class="fw-bold mb-1">React SPA Framework</h5>
                <p class="small text-muted mb-0">Components states, dynamic props, hooks (useState, useEffect), router routes, and fetch APIs integrations.</p>
              </div>
            </div>

            <!-- Stage 13 -->
            <div class="d-flex align-items-start gap-3 border-left pb-3" style="border-left: 3px solid #6366f1 !important; padding-left: 20px;">
              <span class="badge bg-indigo px-2 py-1 text-uppercase small" style="background-color: #6366f1;">Stage 13</span>
              <div>
                <h5 class="fw-bold mb-1">Full-Stack Integration</h5>
                <p class="small text-muted mb-0">Connect React frontends with Spring Boot APIs, and verify database exchanges.</p>
              </div>
            </div>

            <!-- Stage 14 -->
            <div class="d-flex align-items-start gap-3 border-left pb-3" style="border-left: 3px solid #6366f1 !important; padding-left: 20px;">
              <span class="badge bg-indigo px-2 py-1 text-uppercase small" style="background-color: #6366f1;">Stage 14</span>
              <div>
                <h5 class="fw-bold mb-1">Testing & Deployment</h5>
                <p class="small text-muted mb-0">Unit tests writing (JUnit, Mockito), cloud host deployment frameworks, and integration tools.</p>
              </div>
            </div>

            <!-- Stage 15 -->
            <div class="d-flex align-items-start gap-3" style="padding-left: 20px;">
              <span class="badge bg-indigo px-2 py-1 text-uppercase small" style="background-color: #6366f1;">Stage 15</span>
              <div>
                <h5 class="fw-bold mb-1">DSA & Technical Interviews</h5>
                <p class="small text-muted mb-0">Data Structures algorithm complexities, coding assessments, resume styling, and mock interviews practice.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
`;

fs.writeFileSync(path.join(__dirname, 'pages', 'roadmap.html'), generateLayout({
  title: 'Career Roadmap',
  description: 'Track your career path from web basics to full stack development.',
  content: roadmapContent,
  currentFolder: 'pages',
  activeNav: 'Roadmap'
}));

// B. About Page
const aboutContent = `
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="fw-bold mb-4 text-slate-900">About WebLearn Hub</h1>
        <p class="lead">WebLearn Hub is a comprehensive web development learning platform designed to guide students from absolute zero to full-stack career readiness.</p>
        <p>The platform covers Web Basics, HTML5, CSS3, Bootstrap 5, Tailwind CSS, and a complete JavaScript programming suite featuring the <strong>10 Major Topics</strong> and <strong>Logical 10 Problem Solvers</strong>.</p>
      </div>
    </div>
  </div>
`;

fs.writeFileSync(path.join(__dirname, 'pages', 'about.html'), generateLayout({
  title: 'About WebLearn Hub',
  description: 'Understand the architecture and curriculum design of WebLearn Hub.',
  content: aboutContent,
  currentFolder: 'pages',
  activeNav: 'About'
}));

// C. Contact Page
const contactContent = `
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <h1 class="fw-bold mb-3 text-slate-900">Contact WebLearn Hub</h1>
        <p class="text-muted mb-4">Have feedback or suggestions? Send a message.</p>
        <form action="#" method="GET" class="card p-4 shadow-sm border-0 bg-white text-dark">
          <div class="mb-3">
            <label for="p_name" class="form-label fw-bold">Name</label>
            <input type="text" class="form-control" id="p_name" required placeholder="John Doe">
          </div>
          <div class="mb-3">
            <label for="p_email" class="form-label fw-bold">Email</label>
            <input type="email" class="form-control" id="p_email" required placeholder="john@example.com">
          </div>
          <div class="mb-3">
            <label for="p_msg" class="form-label fw-bold">Message</label>
            <textarea class="form-control" id="p_msg" rows="4" required placeholder="Type details..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-100 fw-bold">Send Message</button>
        </form>
      </div>
    </div>
  </div>
`;

fs.writeFileSync(path.join(__dirname, 'pages', 'contact.html'), generateLayout({
  title: 'Contact Us',
  description: 'Reach out to the WebLearn Hub team.',
  content: contactContent,
  currentFolder: 'pages',
  activeNav: 'Contact'
}));

// D. Quizzes Landing Page
const quizzesHtml = `
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold text-slate-900">Interactive & Static Quiz Assessments</h1>
      <p class="text-muted">Validate your knowledge with multiple-choice questions and instant explanations.</p>
    </div>

    <div class="row g-4">
      ${Object.keys(quizzesData).map(key => {
        const title = key === 'final' ? 'Final Comprehensive Assessment' : `${key.toUpperCase()} Quiz`;
        return `
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body d-flex flex-column">
                <span class="badge ${key === 'javascript' ? 'bg-warning text-dark' : 'bg-secondary'} align-self-start mb-2 text-uppercase" style="font-size: 10px;">${key}</span>
                <h5 class="card-title fw-bold text-slate-800">${title}</h5>
                <p class="card-text text-muted small flex-grow-1">Test your syntax, logic, and concepts.</p>
                <a href="../quizzes/${key}-quiz.html" class="btn btn-sm btn-outline-primary fw-bold mt-2 align-self-start">Start Quiz</a>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  </div>
`;

fs.writeFileSync(path.join(__dirname, 'pages', 'quizzes.html'), generateLayout({
  title: 'Quizzes Index',
  description: 'Browse all syntax and logic quizzes for web development modules.',
  content: quizzesHtml,
  currentFolder: 'pages',
  activeNav: 'Quizzes'
}));

// E. Practice Landing Page
const practiceHtml = `
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold text-slate-900">Hands-on Code Practice</h1>
      <p class="text-muted">Explore coding exercises with starter code and expandable solution walk-throughs.</p>
    </div>

    <div class="row g-4">
      ${['html', 'css', 'bootstrap', 'tailwind', 'javascript'].map(tech => `
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body d-flex flex-column">
              <span class="badge ${tech === 'javascript' ? 'bg-warning text-dark' : 'bg-primary'} align-self-start mb-2 text-uppercase">${tech}</span>
              <h5 class="card-title fw-bold text-slate-800">${tech.toUpperCase()} Exercises</h5>
              <p class="card-text text-muted small flex-grow-1">Practice syntax, layouts, and algorithms.</p>
              <a href="../practice/${tech}-practice.html" class="btn btn-sm btn-outline-primary fw-bold mt-2 align-self-start">View Exercises</a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

fs.writeFileSync(path.join(__dirname, 'pages', 'practice.html'), generateLayout({
  title: 'Practice Index',
  description: 'Navigate to HTML, CSS, Bootstrap, Tailwind, and JavaScript practice files.',
  content: practiceHtml,
  currentFolder: 'pages',
  activeNav: 'Practice'
}));

// F. Projects Landing Page
const projectsHtml = `
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold text-slate-900">Frontend & JavaScript Projects Gallery</h1>
      <p class="text-muted">Build real-world portfolios, interactive calculators, task managers, and responsive layouts.</p>
    </div>

    <div class="row g-4">
      ${['html', 'css', 'bootstrap', 'tailwind', 'javascript'].map(tech => `
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body d-flex flex-column">
              <span class="badge ${tech === 'javascript' ? 'bg-warning text-dark' : 'bg-indigo'} align-self-start mb-2 text-uppercase" style="background-color: #6366f1;">${tech}</span>
              <h5 class="card-title fw-bold text-slate-800">${tech.toUpperCase()} Projects</h5>
              <p class="card-text text-muted small flex-grow-1">Step-by-step guides with requirements and full solution codes.</p>
              <a href="../projects/${tech}-projects.html" class="btn btn-sm btn-outline-primary fw-bold mt-2 align-self-start">View Projects</a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

fs.writeFileSync(path.join(__dirname, 'pages', 'projects.html'), generateLayout({
  title: 'Projects Index',
  description: 'Build real-world frontend and JavaScript projects.',
  content: projectsHtml,
  currentFolder: 'pages',
  activeNav: 'Projects'
}));

// G. Articles Landing Page
const articlesCardsHtml = articlesData.map(art => `
  <div class="col-md-6 col-lg-4" id="${art.id}">
    <div class="card h-100 shadow-sm border-0 bg-white text-dark">
      <div class="card-body d-flex flex-column">
        <span class="badge ${art.category === 'JavaScript' ? 'bg-warning text-dark' : 'bg-secondary'} align-self-start mb-2 text-uppercase" style="font-size: 10px;">${art.category}</span>
        <h5 class="card-title fw-bold text-slate-900">${art.title}</h5>
        <p class="card-text text-muted small flex-grow-1">${art.desc}</p>
        <a href="../articles/index.html#${art.id}" class="btn btn-sm btn-outline-primary fw-bold mt-2 align-self-start">Read Article</a>
      </div>
    </div>
  </div>
`).join('');

const articlesHtml = `
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold text-slate-900">Learning Articles & Guides</h1>
      <p class="text-muted">In-depth developer tutorials covering box-models, JavaScript Event Loops, Closures, DOM, and responsive layouts.</p>
    </div>

    <div class="row g-4">
      ${articlesCardsHtml}
    </div>

    <!-- LinkedIn templates inside Articles page -->
    <section class="mt-5 pt-5 border-top">
      <div class="text-center mb-4">
        <h2 class="fw-bold">LinkedIn Learning Post Templates</h2>
        <p class="text-muted">Copy these professional templates to share your coding milestones on LinkedIn.</p>
      </div>

      <div class="row g-4 justify-content-center">
        ${linkedinTemplates.map(post => `
          <div class="col-md-8">
            <div class="card border-0 shadow-sm p-4 bg-white text-dark">
              <h6 class="fw-bold text-primary mb-2">${post.day}: ${post.title}</h6>
              <pre class="bg-light p-3 rounded font-monospace small mb-3" style="white-space: pre-wrap; font-size: 11px;"><code>${post.content}</code></pre>
              <button class="btn btn-outline-primary btn-sm w-100 fw-bold" onclick="navigator.clipboard.writeText(\`${post.content.replace(/`/g, '\\`')}\`); alert('Copied to clipboard!');">Copy Post Template</button>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  </div>
`;

fs.writeFileSync(path.join(__dirname, 'pages', 'articles.html'), generateLayout({
  title: 'Articles Index',
  description: 'Browse articles and LinkedIn templates.',
  content: articlesHtml,
  currentFolder: 'pages',
  activeNav: 'Articles'
}));

// H. Cheat Sheets Landing Page
const cheatSheetsHtml = `
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold text-slate-900">Frontend & JavaScript Cheat Sheets</h1>
      <p class="text-muted">Quick reference tables for HTML5 tags, CSS3 selectors, Bootstrap, Tailwind, and JavaScript APIs.</p>
    </div>

    <div class="row g-4">
      ${['html', 'css', 'bootstrap', 'tailwind', 'javascript'].map(tech => `
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body d-flex flex-column">
              <span class="badge ${tech === 'javascript' ? 'bg-warning text-dark' : 'bg-primary'} align-self-start mb-2 text-uppercase">${tech}</span>
              <h5 class="card-title fw-bold text-slate-800">${tech.toUpperCase()} Cheat Sheet</h5>
              <p class="card-text text-muted small flex-grow-1">Inspect properties, methods, syntax rules, and examples.</p>
              <a href="../cheat-sheets/index.html" class="btn btn-sm btn-outline-primary fw-bold mt-2 align-self-start">View Cheat Sheets</a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

fs.writeFileSync(path.join(__dirname, 'pages', 'cheat-sheets.html'), generateLayout({
  title: 'Cheat Sheets Index',
  description: 'Quick reference reference cards for frontend and JavaScript.',
  content: cheatSheetsHtml,
  currentFolder: 'pages',
  activeNav: 'Cheat Sheets'
}));

// I. Interview Questions Landing Page
const interviewHtml = `
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold text-slate-900">Technical Interview Question Bank</h1>
      <p class="text-muted">Technical screening questions divided into Beginner, Intermediate, and Advanced categories for HTML5, CSS3, Bootstrap, Tailwind, and JavaScript.</p>
    </div>

    <div class="row g-4">
      ${['html', 'css', 'bootstrap', 'tailwind', 'javascript'].map(tech => `
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body d-flex flex-column">
              <span class="badge ${tech === 'javascript' ? 'bg-warning text-dark' : 'bg-primary'} align-self-start mb-2 text-uppercase">${tech}</span>
              <h5 class="card-title fw-bold text-slate-800">${tech.toUpperCase()} Interview Qs</h5>
              <p class="card-text text-muted small flex-grow-1">Prepare with detailed answers and code examples.</p>
              <a href="../interview/index.html" class="btn btn-sm btn-outline-primary fw-bold mt-2 align-self-start">View Questions</a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

fs.writeFileSync(path.join(__dirname, 'pages', 'interview.html'), generateLayout({
  title: 'Interview Prep Index',
  description: 'Navigate to structured developer interview questions.',
  content: interviewHtml,
  currentFolder: 'pages',
  activeNav: 'Interviews'
}));

// 9. Generate Specific Resource Files (Quizzes, Examples, Practice, Projects, CheatSheets, Interview)

// A. Quizzes Generator
Object.keys(quizzesData).forEach(key => {
  const quizObj = quizzesData[key];
  const quizTitle = key === 'final' ? 'Final Assessment' : `${key.toUpperCase()} Quiz`;
  let questionsHtml = '';

  if (Array.isArray(quizObj)) {
    questionsHtml = quizObj.map((q, idx) => `
      <div class="card p-3 mb-4 bg-white text-dark shadow-sm border">
        <span class="badge bg-secondary mb-2 align-self-start text-uppercase" style="font-size: 10px;">${q.difficulty}</span>
        <h5 class="fw-bold">Q${idx + 1}: ${q.q}</h5>
        <div class="form-check my-2"><input type="radio" disabled class="form-check-input"><label class="form-check-label">A) ${q.a}</label></div>
        <div class="form-check my-2"><input type="radio" disabled class="form-check-input"><label class="form-check-label">B) ${q.b}</label></div>
        ${q.c ? `<div class="form-check my-2"><input type="radio" disabled class="form-check-input"><label class="form-check-label">C) ${q.c}</label></div>` : ''}
        ${q.d ? `<div class="form-check my-2"><input type="radio" disabled class="form-check-input"><label class="form-check-label">D) ${q.d}</label></div>` : ''}
        
        <details class="interactive-card mt-3">
          <summary>Show Answer & Explanation</summary>
          <div class="interactive-body bg-light">
            <h6 class="fw-bold text-success">Correct Answer: Option ${q.correct}</h6>
            <p class="small text-muted mb-0 mt-1">Explanation: ${q.explanation}</p>
          </div>
        </details>
      </div>
    `).join('');
  } else {
    questionsHtml = Object.keys(quizObj).map(level => `
      <div class="mb-4">
        <h4 class="fw-bold h5 text-indigo-600 mb-3 border-bottom pb-1 text-uppercase">${level} Level</h4>
        ${quizObj[level].map((q, idx) => `
          <div class="card p-3 mb-4 bg-white text-dark shadow-sm border">
            <h5 class="fw-bold">Question ${idx + 1}: ${q.q}</h5>
            <div class="form-check my-2"><input type="radio" disabled class="form-check-input"><label class="form-check-label">A) ${q.a}</label></div>
            <div class="form-check my-2"><input type="radio" disabled class="form-check-input"><label class="form-check-label">B) ${q.b}</label></div>
            ${q.c ? `<div class="form-check my-2"><input type="radio" disabled class="form-check-input"><label class="form-check-label">C) ${q.c}</label></div>` : ''}
            ${q.d ? `<div class="form-check my-2"><input type="radio" disabled class="form-check-input"><label class="form-check-label">D) ${q.d}</label></div>` : ''}
            
            <details class="interactive-card mt-3">
              <summary>Show Answer & Explanation</summary>
              <div class="interactive-body bg-light">
                <h6 class="fw-bold text-success">Correct Answer: Option ${q.correct}</h6>
                <p class="small text-muted mb-0 mt-1">Explanation: ${q.explanation}</p>
              </div>
            </details>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  const pageContent = `
    <div class="container py-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
          <li class="breadcrumb-item"><a href="../pages/quizzes.html">Quizzes</a></li>
          <li class="breadcrumb-item active" aria-current="page">${quizTitle}</li>
        </ol>
      </nav>

      <h1 class="fw-bold mb-4 text-slate-900">${quizTitle}</h1>
      <p class="text-muted mb-4">Complete the quiz and expand the details panels to verify your answers.</p>

      <div class="quizzes-questions">
        ${questionsHtml}
      </div>
    </div>
  `;

  fs.writeFileSync(path.join(__dirname, 'quizzes', `${key}-quiz.html`), generateLayout({
    title: quizTitle,
    description: `Take the syntax and logic assessment for ${quizTitle}.`,
    content: pageContent,
    currentFolder: 'quizzes',
    activeNav: 'Quizzes'
  }));
  console.log(`Generated quizzes/${key}-quiz.html`);
});

// B. Examples Pages
const allExamplesTabs = ['html', 'css', 'bootstrap', 'tailwind', 'javascript'];
allExamplesTabs.forEach(activeTab => {
  const tabsHtml = allExamplesTabs.map(tab => `
    <li class="nav-item">
      <a class="nav-link ${tab === activeTab ? 'active fw-bold' : ''}" href="${tab}-examples.html">${tab.toUpperCase()} Examples</a>
    </li>
  `).join('');

  const targetExamples = examplesData[activeTab] || [];
  const listHtml = targetExamples.map((ex, idx) => `
    <div class="card mb-4 shadow-sm border-0">
      <div class="card-header bg-dark text-white fw-bold d-flex justify-content-between align-items-center">
        <span>${ex.title}</span>
        <span class="badge ${activeTab === 'javascript' ? 'bg-warning text-dark' : 'bg-secondary'} text-uppercase small">${activeTab}</span>
      </div>
      <div class="editor-body">
        <pre class="code-panel mb-0 rounded-0"><code>${escapeHtml(ex.code)}</code></pre>
        <div class="output-panel">
          <h6 class="tw-text-xs tw-text-slate-400 tw-font-bold tw-uppercase tw-mb-2">Visual Output / Code Preview</h6>
          <div class="border p-3 rounded bg-white text-dark font-monospace small">
            ${activeTab === 'html' ? ex.code : `
              <div>
                <p class="text-muted small mb-1">// Script Execution Preview:</p>
                <div class="p-2 border rounded bg-light text-primary font-monospace">${ex.title} output ready.</div>
              </div>
            `}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const content = `
    <div class="container py-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">${activeTab.toUpperCase()} Examples</li>
        </ol>
      </nav>
      <h1 class="fw-bold mb-4 text-slate-900">${activeTab.toUpperCase()} Code Examples</h1>
      <p class="text-muted mb-4">Explore copy-pasteable, beginner-friendly code examples.</p>

      <ul class="nav nav-tabs mb-4">
        ${tabsHtml}
      </ul>

      <div class="examples-list">
        ${listHtml}
      </div>
    </div>
  `;

  fs.writeFileSync(path.join(__dirname, 'examples', `${activeTab}-examples.html`), generateLayout({
    title: `${activeTab.toUpperCase()} Code Examples`,
    description: `Browse code examples for ${activeTab.toUpperCase()}.`,
    content,
    currentFolder: 'examples',
    activeNav: 'Practice'
  }));
  console.log(`Generated examples/${activeTab}-examples.html`);
});

// C. Practice Pages
const allPracticeTabs = ['html', 'css', 'bootstrap', 'tailwind', 'javascript'];
allPracticeTabs.forEach(activeTab => {
  const tabsHtml = allPracticeTabs.map(tab => `
    <li class="nav-item">
      <a class="nav-link ${tab === activeTab ? 'active fw-bold' : ''}" href="${tab}-practice.html">${tab.toUpperCase()} Practice</a>
    </li>
  `).join('');

  const targetPractice = practiceData[activeTab] || [];
  const listHtml = targetPractice.map((ex, idx) => `
    <div class="card mb-4 border-primary bg-white text-dark">
      <div class="card-header bg-primary text-white fw-bold d-flex justify-content-between align-items-center">
        <span>Exercise ${idx + 1}: ${ex.title}</span>
        <span class="badge bg-light text-primary text-uppercase">${ex.difficulty}</span>
      </div>
      <div class="card-body">
        <h5 class="fw-bold mb-2">Question:</h5>
        <p>${ex.q}</p>
        <h6 class="fw-bold">Starter Code:</h6>
        <pre class="bg-dark text-white p-3 rounded font-monospace small mb-3"><code>${escapeHtml(ex.starter)}</code></pre>
        
        <div class="d-flex gap-2">
          <details class="interactive-card flex-fill">
            <summary>Reveal Hint</summary>
            <div class="interactive-body">
              <p class="mb-0 text-secondary">${ex.hint}</p>
            </div>
          </details>
          <details class="interactive-card flex-fill">
            <summary>Reveal Solution</summary>
            <div class="interactive-body">
              <pre class="bg-dark text-white p-3 rounded font-monospace small mb-0"><code>${escapeHtml(ex.solution)}</code></pre>
            </div>
          </details>
        </div>
      </div>
    </div>
  `).join('');

  const content = `
    <div class="container py-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
          <li class="breadcrumb-item"><a href="../pages/practice.html">Practice</a></li>
          <li class="breadcrumb-item active" aria-current="page">${activeTab.toUpperCase()} Practice</li>
        </ol>
      </nav>
      <h1 class="fw-bold mb-4 text-slate-900">${activeTab.toUpperCase()} Practice Exercises</h1>
      <p class="text-muted mb-4">Validate your syntax and programming logic using interactive code challenges.</p>

      <ul class="nav nav-tabs mb-4">
        ${tabsHtml}
      </ul>

      <div class="practice-list">
        ${listHtml}
      </div>
    </div>
  `;

  fs.writeFileSync(path.join(__dirname, 'practice', `${activeTab}-practice.html`), generateLayout({
    title: `${activeTab.toUpperCase()} Practice Exercises`,
    description: `Master ${activeTab.toUpperCase()} by solving tasks.`,
    content,
    currentFolder: 'practice',
    activeNav: 'Practice'
  }));
  console.log(`Generated practice/${activeTab}-practice.html`);
});

// D. Projects Pages
const allProjectsTabs = ['html', 'css', 'bootstrap', 'tailwind', 'javascript'];
allProjectsTabs.forEach(activeTab => {
  const tabsHtml = allProjectsTabs.map(tab => `
    <li class="nav-item">
      <a class="nav-link ${tab === activeTab ? 'active fw-bold' : ''}" href="${tab}-projects.html">${tab.toUpperCase()} Projects</a>
    </li>
  `).join('');

  const targetProjects = projectsData[activeTab] || [];
  const listHtml = targetProjects.map(proj => `
    <div class="card mb-4 shadow-sm border-0">
      <div class="card-header bg-dark text-white fw-bold d-flex justify-content-between align-items-center">
        <span>Project: ${proj.title}</span>
        <span class="badge bg-indigo text-uppercase" style="background-color: #6366f1;">${proj.difficulty}</span>
      </div>
      <div class="card-body bg-light text-dark">
        <div class="row g-3">
          <div class="col-md-6">
            <h5 class="fw-bold text-primary">Project Objective:</h5>
            <p class="small">${proj.obj}</p>
            <h6 class="fw-bold mt-3">Requirements:</h6>
            <ul class="small">
              ${proj.req.map(r => `<li>${r}</li>`).join('')}
            </ul>
          </div>
          <div class="col-md-6">
            <h5 class="fw-bold text-success">Starter Skeleton:</h5>
            <pre class="bg-dark text-white p-3 rounded font-monospace small mb-2" style="max-height: 150px; overflow-y: auto;"><code>${escapeHtml(proj.starter)}</code></pre>
            <p class="small text-muted mb-0">Expected: ${proj.result}</p>
          </div>
        </div>
        
        <details class="interactive-card mt-3">
          <summary>View Complete Solution Code</summary>
          <div class="interactive-body">
            <pre class="bg-dark text-white p-3 rounded font-monospace small mb-0" style="max-height: 300px; overflow-y: auto;"><code>${escapeHtml(proj.solution)}</code></pre>
          </div>
        </details>
      </div>
    </div>
  `).join('');

  const content = `
    <div class="container py-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
          <li class="breadcrumb-item"><a href="../pages/projects.html">Projects</a></li>
          <li class="breadcrumb-item active" aria-current="page">${activeTab.toUpperCase()} Projects</li>
        </ol>
      </nav>
      <h1 class="fw-bold mb-4 text-slate-900">${activeTab.toUpperCase()} Portfolio Projects</h1>
      <p class="text-muted mb-4">Apply your knowledge by building real-world projects with instructions and source codes.</p>

      <ul class="nav nav-tabs mb-4">
        ${tabsHtml}
      </ul>

      <div class="projects-list">
        ${listHtml}
      </div>
    </div>
  `;

  fs.writeFileSync(path.join(__dirname, 'projects', `${activeTab}-projects.html`), generateLayout({
    title: `${activeTab.toUpperCase()} Portfolio Projects`,
    description: `Build real ${activeTab.toUpperCase()} projects.`,
    content,
    currentFolder: 'projects',
    activeNav: 'Projects'
  }));
  console.log(`Generated projects/${activeTab}-projects.html`);
});

// E. Articles Page (including comparative grid)
const articlesPageCardsHtml = articlesData.map(art => `
  <div class="col-md-6 mb-4" id="${art.id}">
    <div class="card h-100 shadow-sm border-0 bg-white text-dark">
      <div class="card-body d-flex flex-column">
        <span class="badge ${art.category === 'JavaScript' ? 'bg-warning text-dark' : 'bg-secondary'} mb-2 align-self-start text-uppercase" style="font-size: 10px;">${art.category}</span>
        <h3 class="card-title fw-bold h5 text-slate-900">${art.title}</h3>
        <p class="card-text text-muted small">${art.desc}</p>
        <details class="interactive-card mt-auto">
          <summary>Read Article Content</summary>
          <div class="interactive-body bg-white text-dark border-0">
            ${art.content}
          </div>
        </details>
      </div>
    </div>
  </div>
`).join('');

const comparisonHtml = `
  <section class="mt-5 pt-5 border-top">
    <div class="text-center mb-4">
      <h2 class="fw-bold">Technology Comparisons</h2>
      <p class="text-muted">A detailed comparison of purpose, difficulty, and advantages across frontend & JavaScript modules.</p>
    </div>

    <div class="table-responsive bg-white text-dark shadow-sm rounded border">
      <table class="table table-bordered mb-0 small">
        <thead class="table-dark text-white">
          <tr>
            <th>Technology 1</th>
            <th>Technology 2</th>
            <th>Purpose</th>
            <th>Difficulty</th>
            <th>Advantages</th>
            <th>Limitations</th>
            <th>When to use</th>
          </tr>
        </thead>
        <tbody>
          ${comparisonData.map(c => `
            <tr>
              <td class="fw-bold">${c.term1}</td>
              <td class="fw-bold">${c.term2}</td>
              <td>${c.purpose}</td>
              <td><span class="badge bg-warning text-dark">${c.diff}</span></td>
              <td>${c.advantages}</td>
              <td>${c.limitations}</td>
              <td>${c.whenToUse}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </section>
`;

const articlesContent = `
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold text-slate-900">Developer Articles & Guides</h1>
      <p class="text-muted">Stay updated with articles, tips, and tutorials for web development and JavaScript learners.</p>
    </div>

    <div class="row">
      ${articlesPageCardsHtml}
    </div>

    ${comparisonHtml}
  </div>
`;

fs.writeFileSync(path.join(__dirname, 'articles', 'index.html'), generateLayout({
  title: 'Frontend & JavaScript Articles',
  description: 'Read web development articles for beginners. HTML, CSS, JavaScript Event Loop, Closures, and DOM.',
  content: articlesContent,
  currentFolder: 'articles',
  activeNav: 'Articles'
}));
console.log('Generated articles/index.html');

// F. Cheat Sheets Page
const cheatSheetsContent = `
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold text-slate-900">Developer Cheat Sheets</h1>
      <p class="text-muted">A quick-reference guide for HTML5 tags, CSS3 selectors, Bootstrap, Tailwind, and JavaScript APIs.</p>
    </div>

    <div class="row g-4">
      <!-- HTML -->
      <div class="col-md-6">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-header bg-danger text-white fw-bold">HTML5 Quick Reference</div>
          <div class="card-body bg-white text-dark">
            <ul class="list-group list-group-flush small">
              ${cheatSheetsData.html.map(c => `<li class="list-group-item"><strong>${c.name}:</strong><div class="mt-1">${c.details}</div></li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <!-- CSS -->
      <div class="col-md-6">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-header bg-primary text-white fw-bold">CSS3 Quick Reference</div>
          <div class="card-body bg-white text-dark">
            <ul class="list-group list-group-flush small">
              ${cheatSheetsData.css.map(c => `<li class="list-group-item"><strong>${c.name}:</strong><div class="mt-1">${c.details}</div></li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <!-- Bootstrap -->
      <div class="col-md-6">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-header text-white fw-bold" style="background-color: #8b5cf6;">Bootstrap 5 Quick Reference</div>
          <div class="card-body bg-white text-dark">
            <ul class="list-group list-group-flush small">
              ${cheatSheetsData.bootstrap.map(c => `<li class="list-group-item"><strong>${c.name}:</strong><div class="mt-1">${c.details}</div></li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <!-- Tailwind -->
      <div class="col-md-6">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-header bg-info text-white fw-bold">Tailwind CSS Quick Reference</div>
          <div class="card-body bg-white text-dark">
            <ul class="list-group list-group-flush small">
              ${cheatSheetsData.tailwind.map(c => `<li class="list-group-item"><strong>${c.name}:</strong><div class="mt-1">${c.details}</div></li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <!-- JavaScript -->
      <div class="col-12">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-header bg-warning text-dark fw-bold">JavaScript (ES6+) Quick Reference</div>
          <div class="card-body bg-white text-dark">
            <ul class="list-group list-group-flush small">
              ${cheatSheetsData.javascript.map(c => `<li class="list-group-item"><strong>${c.name}:</strong><div class="mt-1">${c.details}</div></li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

fs.writeFileSync(path.join(__dirname, 'cheat-sheets', 'index.html'), generateLayout({
  title: 'Developer Cheat Sheets',
  description: 'Quick reference for HTML5 tags, CSS properties, Bootstrap, Tailwind, and JavaScript.',
  content: cheatSheetsContent,
  currentFolder: 'cheat-sheets',
  activeNav: 'Cheat Sheets'
}));
console.log('Generated cheat-sheets/index.html');

// G. Interview Questions Page
const renderQuestionsList = (sectionsObj) => {
  return Object.keys(sectionsObj).map(level => `
    <div class="mb-4">
      <h3 class="fw-bold h5 text-capitalize text-indigo-600 mb-3">${level} Level</h3>
      ${sectionsObj[level].map(item => `
        <details class="interactive-card">
          <summary>Q: ${item.q}</summary>
          <div class="interactive-body bg-white text-dark">
            <h6 class="fw-bold text-success">Answer:</h6>
            <p>${item.a}</p>
            <h6 class="fw-bold text-secondary">Explanation:</h6>
            <p class="small text-muted">${item.explanation}</p>
            ${item.example ? `<pre class="bg-dark text-white p-3 rounded font-monospace small mb-0"><code>${escapeHtml(item.example)}</code></pre>` : ''}
          </div>
        </details>
      `).join('')}
    </div>
  `).join('');
};

const interviewContent = `
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold text-slate-900">Technical Interview Preparation</h1>
      <p class="text-muted">Common technical screening questions for HTML5, CSS3, Bootstrap 5, Tailwind CSS, and JavaScript.</p>
    </div>

    <div class="row g-4">
      <div class="col-12">
        <div class="card p-4 shadow-sm border-0 mb-4 bg-white text-dark">
          <h2 class="fw-bold border-bottom pb-2 text-warning mb-3">⚡ JavaScript Interview Questions</h2>
          ${renderQuestionsList(interviewData.javascript)}
        </div>
      </div>

      <div class="col-12">
        <div class="card p-4 shadow-sm border-0 mb-4 bg-white text-dark">
          <h2 class="fw-bold border-bottom pb-2 text-danger mb-3">HTML5 Interview Questions</h2>
          ${renderQuestionsList(interviewData.html)}
        </div>
      </div>

      <div class="col-12">
        <div class="card p-4 shadow-sm border-0 mb-4 bg-white text-dark">
          <h2 class="fw-bold border-bottom pb-2 text-primary mb-3">CSS3 Interview Questions</h2>
          ${renderQuestionsList(interviewData.css)}
        </div>
      </div>

      <div class="col-12">
        <div class="card p-4 shadow-sm border-0 mb-4 bg-white text-dark">
          <h2 class="fw-bold border-bottom pb-2 text-violet mb-3" style="color: #8b5cf6;">Bootstrap 5 Interview Questions</h2>
          ${renderQuestionsList(interviewData.bootstrap)}
        </div>
      </div>

      <div class="col-12">
        <div class="card p-4 shadow-sm border-0 mb-4 bg-white text-dark">
          <h2 class="fw-bold border-bottom pb-2 text-info mb-3">Tailwind CSS Interview Questions</h2>
          ${renderQuestionsList(interviewData.tailwind)}
        </div>
      </div>
    </div>
  </div>
`;

fs.writeFileSync(path.join(__dirname, 'interview', 'index.html'), generateLayout({
  title: 'Technical Interview Questions',
  description: 'Practice questions for frontend and JavaScript developer technical interviews.',
  content: interviewContent,
  currentFolder: 'interview',
  activeNav: 'Interviews'
}));
console.log('Generated interview/index.html');

console.log('All static and interactive pages compiled successfully!');
