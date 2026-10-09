const sessions = {
  morning: {
    id:'morning',title:'ISV Partner Innovation Forum',time:'09:00 – 13:00 WIB',
    tagline:'Build what’s next with Lenovo technology.',
    speaker:'Dr. Sonny Hendra Sudaryana',portrait:'sonny',
    idCopy:{
      agendaDescription:'Eksplorasi teknologi Lenovo OEM, kolaborasi dengan para ahli, serta potensi solusi dan kemitraan baru.',
      bio:'Dr. Sonny Hendra Sudaryana menjabat sebagai Director of Digital Ecosystem Development di Komdigi.'
    },
    enCopy:{
      agendaDescription:'Explore Lenovo OEM technology, collaborate with experts, and discover potential solutions and future partnerships.',
      bio:'Dr. Sonny Hendra Sudaryana is the Director of Digital Ecosystem Development at Komdigi.'
    }
  },
  afternoon: {
    id:'afternoon',title:'Customer Leader Circle',time:'17:00 – 20:00 WIB',
    tagline:'Shaping the Future of Manufacturing in the Age of AI',
    speaker:'Omar Sjawaldy Anwar',portrait:'omar',
    idCopy:{
      agendaDescription:'Wawasan strategis, diskusi tentang manufaktur di era AI, dan jejaring eksekutif.',
      bio:'Omar Sjawaldy Anwar menjabat sebagai President Commissioner di PT. Bank Negara Indonesia (Persero) serta Deputy CEO di PT. Pertamina (Persero).'
    },
    enCopy:{
      agendaDescription:'Strategic insights, meaningful discussions on manufacturing in the age of AI, and executive networking.',
      bio:'Omar Sjawaldy Anwar is President Commissioner of PT. Bank Negara Indonesia (Persero) and Deputy CEO of PT. Pertamina (Persero).'
    }
  }
};
const session = sessions[document.body.dataset.session] || sessions.morning;
const siteName = 'OEM Innovation Forum Indonesia';
const assetBase = new URL('assets/', document.currentScript.src).href;
const copy = {
  id:{navAgenda:'Agenda',navSpeakers:'Speaker',navLocation:'Lokasi',agenda:'Agenda',date:'Rabu, 14 Oktober 2026',speakers:'Speaker',invited:'Invited Speaker',bioLabel:'Tentang Pembicara',location:'Lokasi',locationIntro:'Temui kami di The Westin Jakarta.',mapTitle:'Lokasi The Westin Jakarta di Google Maps',directions:'Petunjuk arah'},
  en:{navAgenda:'Agenda',navSpeakers:'Speaker',navLocation:'Location',agenda:'Agenda',date:'Wednesday, 14 October 2026',speakers:'Speaker',invited:'Invited Speaker',bioLabel:'About the Speaker',location:'Location',locationIntro:'Meet us at The Westin Jakarta.',mapTitle:'The Westin Jakarta on Google Maps',directions:'Get directions'}
};

function renderPage(language){
  const t={...copy[language],...session[`${language}Copy`]};
  document.documentElement.lang=language;
  document.title=siteName;
  document.querySelector('meta[name="description"]').content=`${siteName} – ${session.title}. ${t.date}, ${session.time}, The Westin Jakarta. ${t.agendaDescription}`;
  document.querySelectorAll('[data-i18n]').forEach(node=>{node.textContent=t[node.dataset.i18n];});
  document.getElementById('hero-title').textContent=session.tagline;
  document.querySelector('.hero-session-label').textContent=session.title;
  document.querySelector('.flag').classList.toggle('english',language==='en');
  const banner=document.querySelector('.hero-banner');
  banner.src=`${assetBase}hero-${session.id}.webp`;
  banner.alt=`Lenovo OEM Innovation Forum Indonesia 2026 – ${session.title}, 14 October 2026, ${session.time}, The Westin Jakarta`;

  document.getElementById('event-sections').innerHTML=`
    <section id="agenda" class="agenda-section section-purple">
      <div class="container"><div class="agenda-panel glass">
        <h2 class="floating-title">${t.agenda}</h2>
        <p class="agenda-date">${t.date} · The Westin Jakarta</p>
        <article class="agenda-row">
          <div class="agenda-row-heading"><h3>${session.title}</h3><span>${session.time}</span></div>
          <p>${t.agendaDescription}</p>
        </article>
      </div></div>
    </section>
    <section id="speakers" class="speakers-section section-purple">
      <div class="container"><h2 class="section-title">${t.speakers}</h2>
        <div class="speakers-grid speakers-grid--single">
          <article class="speaker-card glass">
            <p class="speaker-label">${t.invited}</p>
            <div class="portrait portrait--${session.portrait}"><img src="${assetBase}speaker-${session.portrait}-hd.png" alt="${session.speaker}" width="874" height="1241" loading="lazy"></div>
            <div class="speaker-content"><h3>${session.speaker}</h3><p class="speaker-bio" aria-label="${t.bioLabel}">${t.bio}</p></div>
            <div class="speaker-session"><span>${session.title}</span><small>${session.time}</small></div>
          </article>
        </div>
      </div>
    </section>
    <section id="location" class="location-section section-purple">
      <div class="container"><h2 class="section-title">${t.location}</h2><p class="section-subtitle">${t.locationIntro}</p>
        <div class="location-info"><strong>The Westin Jakarta</strong><p>Jl. H.R. Rasuna Said Blok C No.22A, Jakarta</p></div>
        <div class="map-frame glass"><iframe title="${t.mapTitle}" src="https://maps.google.com/maps?q=The%20Westin%20Jakarta%20Jl.%20H.R.%20Rasuna%20Said%20Blok%20C%20No.22A&z=16&output=embed" width="1180" height="370" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
        <a class="directions-button" href="https://www.google.com/maps/dir/?api=1&destination=The+Westin+Jakarta+Jl.+H.R.+Rasuna+Said+Blok+C+No.22A" target="_blank" rel="noopener noreferrer">${t.directions}</a>
      </div>
    </section>`;
  observeSections();
}

const navigationLinks=[...document.querySelectorAll('.nav-link')];
let navigationSections=[];
let navigationFrame=0;
let activeNavigationId=null;

function updateActiveNavigation(){
  navigationFrame=0;
  if(!navigationSections.length)return;
  const scrollPadding=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0;
  const marker=scrollPadding+8;
  let activeSection=navigationSections[0];
  for(const section of navigationSections){
    if(section.getBoundingClientRect().top<=marker)activeSection=section;
    else break;
  }
  if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-2){
    activeSection=navigationSections[navigationSections.length-1];
  }
  if(activeNavigationId===activeSection.id)return;
  activeNavigationId=activeSection.id;
  navigationLinks.forEach(link=>{
    const active=link.hash===`#${activeNavigationId}`;
    link.classList.toggle('active',active);
    if(active)link.setAttribute('aria-current','location');
    else link.removeAttribute('aria-current');
  });
}

function scheduleNavigationUpdate(){
  if(!navigationFrame)navigationFrame=requestAnimationFrame(updateActiveNavigation);
}

function observeSections(){
  navigationSections=navigationLinks.map(link=>document.getElementById(link.hash.slice(1))).filter(Boolean);
  updateActiveNavigation();
}

window.addEventListener('scroll',scheduleNavigationUpdate,{passive:true});
window.addEventListener('resize',scheduleNavigationUpdate);
window.addEventListener('hashchange',scheduleNavigationUpdate);
window.addEventListener('load',scheduleNavigationUpdate);
document.fonts.ready.then(scheduleNavigationUpdate);
document.getElementById('language').addEventListener('change',event=>renderPage(event.target.value));
renderPage('id');
