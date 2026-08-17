import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const failures = [];
const passes = [];

function pass(message) {
  passes.push(message);
}

function fail(message) {
  failures.push(message);
}

async function text(relativePath) {
  return readFile(path.join(root, relativePath), 'utf8');
}

async function exists(relativePath) {
  try {
    await stat(path.join(root, relativePath));
    return true;
  } catch {
    return false;
  }
}

const requiredFiles = [
  'index.html',
  'vite.config.js',
  'src/main.jsx',
  'src/app/router.jsx',
  'src/app/AppLayout.jsx',
  'src/components/layout/Header.jsx',
  'src/components/layout/Footer.jsx',
  'src/features/booking/BookingForm.jsx',
  'src/components/ui/ServiceStandardCard.jsx',
  'src/styles/index.css',
  'src/styles/mobile.css',
  'public/_redirects',
  'vercel.json',
];

for (const file of requiredFiles) {
  if (await exists(file)) pass(`required file exists: ${file}`);
  else fail(`missing required file: ${file}`);
}

const main = await text('src/main.jsx');
if (main.includes("from 'react-dom/client'")) pass('uses React client entrypoint');
else fail('src/main.jsx must import createRoot from react-dom/client');

if (main.includes('createRoot(rootElement).render')) pass('mounts app with createRoot');
else fail('src/main.jsx does not mount with createRoot');

const indexHtml = await text('index.html');
if (indexHtml.includes('<meta name="viewport"')) pass('viewport metadata exists');
else fail('viewport metadata is missing');
if (indexHtml.includes('<div id="root"></div>')) pass('React root element exists');
else fail('React root element is missing');
if (indexHtml.includes('type="module"') && indexHtml.includes('/src/main.jsx')) pass('Vite module entry exists');
else fail('Vite module entry is missing');

const router = await text('src/app/router.jsx');
const routes = ['about', 'services', 'why-us', 'how-it-works', 'faq', 'contact'];
for (const route of routes) {
  if (router.includes(`path: '${route}'`)) pass(`route configured: /${route}`);
  else fail(`route missing: /${route}`);
}
if (router.includes("path: '*'")) pass('404 route configured');
else fail('404 route is missing');

const sourceFiles = [];
async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(full);
    else if (/\.(js|jsx|css|html)$/.test(entry.name)) sourceFiles.push(full);
  }
}
await collect(path.join(root, 'src'));
sourceFiles.push(path.join(root, 'index.html'));

const bannedPatterns = [
  ['legacy UMD React', /react\.production\.min\.js/i],
  ['legacy UMD ReactDOM', /react-dom\.production\.min\.js/i],
  ['HTM runtime', /htm\.umd/i],
  ['global ReactDOM createRoot call', /ReactDOM\.createRoot/],
  ['window SITE_CONFIG', /window\.SITE_CONFIG/],
];

for (const filePath of sourceFiles) {
  const body = await readFile(filePath, 'utf8');
  for (const [label, pattern] of bannedPatterns) {
    if (pattern.test(body)) fail(`${label} found in ${path.relative(root, filePath)}`);
  }
}
if (!failures.some((item) => item.includes('legacy') || item.includes('HTM') || item.includes('SITE_CONFIG'))) {
  pass('no legacy React/HTM runtime patterns found');
}

const imageRefs = new Set();
for (const filePath of sourceFiles.filter((file) => /\.(js|jsx)$/.test(file))) {
  const body = await readFile(filePath, 'utf8');
  for (const match of body.matchAll(/['"](\/images\/[^'"]+)['"]/g)) imageRefs.add(match[1]);
}

for (const imageRef of imageRefs) {
  const relative = path.join('public', imageRef.replace(/^\//, ''));
  if (await exists(relative)) pass(`image exists: ${imageRef}`);
  else fail(`referenced image missing: ${imageRef}`);
}

const imageDirectory = path.join(root, 'public/images');
const imageEntries = await readdir(imageDirectory);
for (const image of imageEntries) {
  const info = await stat(path.join(imageDirectory, image));
  if (info.size <= 300 * 1024) pass(`image budget ok: ${image} (${Math.round(info.size / 1024)} KB)`);
  else fail(`image exceeds 300 KB budget: ${image}`);
}

const header = await text('src/components/layout/Header.jsx');
if (header.includes('NavLink') && header.includes('navigationItems.map')) pass('navigation is data-driven with NavLink');
else fail('header navigation is not using data-driven NavLink routing');

const form = await text('src/features/booking/BookingForm.jsx');
if (form.includes('<label') && form.includes('aria-invalid')) pass('booking form includes labels and validation semantics');
else fail('booking form accessibility semantics are incomplete');


const mobileCss = await text('src/styles/mobile.css');
if (mobileCss.includes('@media (max-width: 720px)') && mobileCss.includes('.mobile-action-bar')) {
  pass('dedicated mobile refinement layer exists');
} else {
  fail('mobile refinement layer is incomplete');
}

const standardCard = await text('src/components/ui/ServiceStandardCard.jsx');
if (standardCard.includes('standard-card__proof') && standardCard.includes("import { Icon } from './Icon'")) {
  pass('shared service-standard card component is configured');
} else {
  fail('shared service-standard card component is incomplete');
}

const animationCss = await text('src/styles/animations.css');
if (animationCss.includes('prefers-reduced-motion')) pass('reduced-motion preference is supported');
else fail('prefers-reduced-motion handling is missing');

console.log(`\nStatic QA: ${passes.length} checks passed, ${failures.length} failed.\n`);
for (const item of failures) console.error(`FAIL: ${item}`);

if (failures.length > 0) process.exit(1);
console.log('Static QA passed.');
