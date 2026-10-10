import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';

// Both routes and the root page use the same public event data and layout.
const source = await readFile(new URL('./dist/index.html', import.meta.url), 'utf8');
const script = await readFile(new URL('./dist/event-data.js', import.meta.url), 'utf8');
const data = runInNewContext(`${script}\n;eventData`, Object.create(null));
const version = '20261010-english2';
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character]);

function renderEntry(session, relativePrefix) {
  const description = `${data.siteName} – ${session.title}. 14 October 2026, ${session.time}, The Westin Jakarta.`;
  const bannerDescription = `${data.siteName} – ${session.title}, 14 October 2026, ${session.time}, The Westin Jakarta`;
  return source
    .replace(/(<meta name="description" content=")[^"]*(">)/, `$1${escapeHTML(description)}$2`)
    .replace(/(<title>)[\s\S]*?(<\/title>)/, `$1${escapeHTML(data.siteName)}$2`)
    .replace(/(data-session=")[^"]*(")/, `$1${session.id}$2`)
    .replace(/(<p class="hero-session-label">)[\s\S]*?(<\/p>)/, `$1${escapeHTML(session.title)}$2`)
    .replace(/(<h1 id="hero-title">)[\s\S]*?(<\/h1>)/, `$1${escapeHTML(session.tagline)}$2`)
    .replace(/(<p class="hero-time">)[\s\S]*?(<\/p>)/, `$1${escapeHTML(session.time)}$2`)
    .replace(/(class="hero-banner"[^>]*\balt=")[^"]*(")/, `$1${escapeHTML(bannerDescription)}$2`)
    .replace(/hero-(?:morning|afternoon)(?:-updated)?\.webp/g, `hero-${session.id}.webp`)
    .replace(/\b(href|src)="(?:\.\.\/)?(assets\/[^\"]+)"/g, (_, attribute, path) => `${attribute}="${relativePrefix}${path}"`)
    .replace(/\b(href|src)="(?:\.\.\/)?(styles\.css|event-data\.js|app\.js)(?:\?[^\"]*)?"/g, (_, attribute, path) => `${attribute}="${relativePrefix}${path}?v=${version}"`);
}

await writeFile(new URL('./dist/index.html', import.meta.url), renderEntry(data.sessions.morning, ''));
for (const session of Object.values(data.sessions)) {
  const directory = new URL(`./dist/${session.id}/`, import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), renderEntry(session, '../'));
}

console.log('Built /morning/ and /afternoon/ from event-data.js. Root defaults to morning.');
