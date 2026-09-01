// WebLearn Hub Link Verification Script
const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
let checkedCount = 0;
let failedCount = 0;

function checkLinksInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Strip out code blocks so we don't validate dummy links inside tutorials' code examples
  content = content.replace(/<pre[^>]*>[\s\S]*?<\/pre>/g, '');
  content = content.replace(/<code[^>]*>[\s\S]*?<\/code>/g, '');

  const fileDir = path.dirname(filePath);
  
  // Find all href and src links (e.g. href="path" or src="path")
  const linkRegex = /(?:href|src)="([^"#:]+)(?:#[^"]*)?"/g;
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const targetLink = match[1];
    
    // Ignore external web links, protocols, and anchors
    if (targetLink.startsWith('http') || targetLink.startsWith('mailto:') || targetLink.startsWith('tel:') || targetLink === '#') {
      continue;
    }
    
    checkedCount++;
    const resolvedPath = path.resolve(fileDir, targetLink);
    
    if (!fs.existsSync(resolvedPath)) {
      failedCount++;
      const relToRoot = path.relative(rootDir, filePath);
      console.error(`[BROKEN LINK] File: ${relToRoot} -> Reference: "${targetLink}" (Resolved: ${path.relative(rootDir, resolvedPath)})`);
    }
  }
}

function walkDir(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Exclude node_modules and .git
      if (file !== 'node_modules' && file !== '.git') {
        walkDir(fullPath);
      }
    } else if (file.endsWith('.html')) {
      checkLinksInFile(fullPath);
    }
  });
}

console.log("Starting link verification across all HTML files...");
walkDir(rootDir);

console.log(`\nVerification complete!`);
console.log(`Checked links: ${checkedCount}`);
console.log(`Broken links: ${failedCount}`);

if (failedCount > 0) {
  process.exit(1);
} else {
  console.log("All internal navigation and asset links are 100% valid!");
  process.exit(0);
}
