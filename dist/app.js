const session = eventData.sessions[document.body.dataset.session] || eventData.sessions.morning;
const assetBase = new URL('assets/', document.currentScript.src).href;
const copy = {
    navAgenda: 'Agenda', navLocation: 'Location', agenda: 'AGENDA',
    date: 'Wednesday, 14 October 2026', location: 'LOCATION',
    locationIntro: 'Meet us at',
    mapTitle: 'The Westin Jakarta on Google Maps', directions: 'Get directions',
    tentative: 'Tentative', moderator: 'Moderator', photoSoon: 'Photo coming soon',
    bioLabel: 'About the speaker', navigationLabel: 'Main navigation',
    skip: 'Skip to content'
};
const navigationLinks = [...document.querySelectorAll('.nav-link')];
let navigationSections = [];
let navigationFrame = 0;
let activeNavigationId = null;

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function renderPortrait(speaker, t) {
  return `<div class="agenda-photo">
    ${speaker.portrait
      ? `<div class="portrait portrait--${escapeHTML(speaker.id)}"><img src="${escapeHTML(assetBase + speaker.portrait)}" alt="${escapeHTML(speaker.name)}" loading="lazy" data-speaker-id="${escapeHTML(speaker.id)}"></div>`
      : `<div class="portrait portrait--placeholder" role="img" aria-label="${escapeHTML(speaker.name + ' – ' + t.photoSoon)}"><span aria-hidden="true">${escapeHTML(speaker.initials)}</span></div>`}
    <p class="photo-status"${speaker.portrait ? ' hidden' : ''}>${escapeHTML(t.photoSoon)}</p>
  </div>`;
}

function renderParticipant(participant, t, rowIndex) {
  const badge = participant.tentative
    ? `<span class="tentative-badge">${escapeHTML(t.tentative)}</span>`
    : participant.moderator
      ? `<span class="moderator-label">${escapeHTML(t.moderator)}</span>` : '';
  const speaker = eventData.speakers[participant.speakerId];
  if (speaker) {
    return `<li class="agenda-participant agenda-participant--profile" id="agenda-${rowIndex}-${escapeHTML(speaker.id)}">
      ${renderPortrait(speaker, t)}
      <div class="agenda-profile-copy">
        <div class="agenda-participant-name"><strong>${escapeHTML(participant.name)}</strong>${badge}</div>
        <p class="speaker-bio" aria-label="${escapeHTML(t.bioLabel)}">${escapeHTML(speaker.bio.en)}</p>
      </div>
    </li>`;
  }
  return `<li class="agenda-participant">
    <div class="agenda-participant-name"><strong>${escapeHTML(participant.name)}</strong>${badge}</div>
    ${participant.role ? `<p>${escapeHTML(participant.role)}</p>` : ''}
  </li>`;
}

function renderAgenda(t) {
  return session.agenda.map((item, rowIndex) => {
    const participants = item.participants.filter(participant =>
      participant.speakerId || participant.role || !['KIM', 'MC'].includes(participant.name)
    );
    return `<li class="agenda-row${participants.length ? '' : ' agenda-row--activity'}">
    <div class="agenda-time" aria-label="${escapeHTML(item.time)} WIB">
      <time datetime="2026-10-14T${escapeHTML(item.start)}:00+07:00">${escapeHTML(item.start)}</time>
      <span aria-hidden="true">–</span>
      <time datetime="2026-10-14T${escapeHTML(item.end)}:00+07:00">${escapeHTML(item.end)}</time>
    </div>
    <div class="agenda-content">
      <h3>${escapeHTML(item.title)}</h3>
      ${participants.length ? `<ul class="agenda-participants${participants.length > 2 ? ' agenda-participants--panel' : ''}">
        ${participants.map(participant => renderParticipant(participant, t, rowIndex)).join('')}
      </ul>` : ''}
    </div>
  </li>`;
  }).join('');
}

function renderPage() {
  const t = copy;
  document.documentElement.lang = 'en';
  document.title = eventData.siteName;
  document.querySelector('meta[name="description"]').content = `${eventData.siteName} – ${session.title}. ${t.date}, ${session.time}, The Westin Jakarta.`;
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t[node.dataset.i18n]; });
  document.querySelector('.main-nav').setAttribute('aria-label', t.navigationLabel);
  document.querySelector('.skip-link').textContent = t.skip;
  document.getElementById('hero-title').textContent = session.tagline;
  document.querySelector('.hero-session-label').textContent = session.title;
  document.querySelector('.hero-time').textContent = session.time;
  const banner = document.querySelector('.hero-banner');
  banner.src = `${assetBase}hero-${session.id}.webp`;
  banner.alt = `${eventData.siteName} – ${session.title}, ${t.date}, ${session.time}, The Westin Jakarta`;

  document.getElementById('event-sections').innerHTML = `
    <section id="agenda" class="agenda-section" aria-labelledby="agenda-title">
      <div class="container"><div class="agenda-panel">
        <h2 id="agenda-title" class="section-title">${escapeHTML(t.agenda)}</h2>
        <div class="agenda-heading"><p class="agenda-date">${escapeHTML(t.date)}</p><p class="agenda-venue">The Westin Jakarta</p><p class="agenda-window">All times in WIB</p></div>
        <ol class="agenda-list">${renderAgenda(t)}</ol>
      </div></div>
    </section>
    <section id="location" class="location-section" aria-labelledby="location-title">
      <div class="container"><h2 id="location-title" class="section-title">${escapeHTML(t.location)}</h2><p class="section-subtitle">${escapeHTML(t.locationIntro)}</p>
        <div class="location-info"><strong>The Westin Jakarta</strong><p>Jl. H.R. Rasuna Said Blok C No.22A, Jakarta</p></div>
        <div class="map-frame glass"><iframe title="${escapeHTML(t.mapTitle)}" src="https://maps.google.com/maps?q=The%20Westin%20Jakarta%20Jl.%20H.R.%20Rasuna%20Said%20Blok%20C%20No.22A&z=16&output=embed" width="1180" height="370" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
        <a class="directions-button" href="https://www.google.com/maps/dir/?api=1&destination=The+Westin+Jakarta+Jl.+H.R.+Rasuna+Said+Blok+C+No.22A" target="_blank" rel="noopener noreferrer">${escapeHTML(t.directions)}</a>
      </div>
    </section>`;

  document.querySelectorAll('img[data-speaker-id]').forEach(image => {
    image.addEventListener('error', () => {
      const speaker = eventData.speakers[image.dataset.speakerId];
      const portrait = image.parentElement;
      portrait.className = 'portrait portrait--placeholder';
      portrait.setAttribute('role', 'img');
      portrait.setAttribute('aria-label', `${speaker.name} – ${t.photoSoon}`);
      portrait.innerHTML = `<span aria-hidden="true">${escapeHTML(speaker.initials)}</span>`;
      portrait.nextElementSibling.hidden = false;
    }, { once: true });
  });
  observeSections();
}

function updateActiveNavigation() {
  navigationFrame = 0;
  if (!navigationSections.length) return;
  const scrollPadding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const marker = scrollPadding + 8;
  let activeSection = navigationSections[0];
  for (const section of navigationSections) {
    if (section.getBoundingClientRect().top <= marker) activeSection = section;
    else break;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    activeSection = navigationSections[navigationSections.length - 1];
  }
  if (activeNavigationId === activeSection.id) return;
  activeNavigationId = activeSection.id;
  navigationLinks.forEach(link => {
    const active = link.hash === `#${activeNavigationId}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

function scheduleNavigationUpdate() {
  if (!navigationFrame) navigationFrame = requestAnimationFrame(updateActiveNavigation);
}

function observeSections() {
  navigationSections = navigationLinks.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
  updateActiveNavigation();
}

window.addEventListener('scroll', scheduleNavigationUpdate, { passive: true });
window.addEventListener('resize', scheduleNavigationUpdate);
window.addEventListener('hashchange', scheduleNavigationUpdate);
window.addEventListener('load', scheduleNavigationUpdate);
document.fonts.ready.then(scheduleNavigationUpdate);
renderPage();
