import fs from 'node:fs';
import path from 'node:path';

const appPath = path.resolve('src/App.jsx');

if (!fs.existsSync(appPath)) {
  console.error('❌ Expected src/App.jsx to exist.');
  process.exit(1);
}

const content = fs.readFileSync(appPath, 'utf8');
const requiredMarkers = ['id="about"', 'id="projects"', 'id="skills"', 'id="contact"', 'Featured Projects'];

const missing = requiredMarkers.filter((marker) => !content.includes(marker));

if (missing.length > 0) {
  console.error('❌ Portfolio validation failed. Missing markers:', missing.join(', '));
  process.exit(1);
}

console.log('✅ Portfolio validation passed.');