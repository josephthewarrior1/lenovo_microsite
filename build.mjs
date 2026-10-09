import { readFile, writeFile, mkdir } from 'node:fs/promises';

// Both routes share one layout, stylesheet and script. No server rewrite is needed.
const source = await readFile(new URL('./dist/index.html', import.meta.url), 'utf8');
const sessions = {
  morning: {title:'ISV Partner Innovation Forum',tagline:'Build what’s next with Lenovo technology.',time:'09:00 – 13:00 WIB'},
  afternoon: {title:'Customer Leader Circle',tagline:'Shaping the Future of Manufacturing in the Age of AI',time:'17:00 – 20:00 WIB'}
};

for (const [id, session] of Object.entries(sessions)) {
  const directory = new URL(`./dist/${id}/`, import.meta.url);
  await mkdir(directory, {recursive:true});
  const html = source
    .replaceAll('ISV Partner Innovation Forum', session.title)
    .replaceAll('Build what’s next with Lenovo technology.', session.tagline)
    .replaceAll('09:00 – 13:00 WIB', session.time)
    .replaceAll('hero-morning.webp', `hero-${id}.webp`)
    .replace('data-session="morning"', `data-session="${id}"`)
    .replaceAll('href="assets/', 'href="../assets/')
    .replaceAll('src="assets/', 'src="../assets/')
    .replace('href="styles.css"', 'href="../styles.css"')
    .replace('src="app.js"', 'src="../app.js"');
  await writeFile(new URL('index.html', directory), html);
}

console.log('Built /morning/ and /afternoon/. Root defaults to morning.');
