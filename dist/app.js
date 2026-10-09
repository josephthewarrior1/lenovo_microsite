const countdownDate = new Date('2026-10-14T09:00:00+07:00').getTime();
function updateCountdown(){const diff=Math.max(0,Math.floor((countdownDate-Date.now())/1000));const parts={days:Math.floor(diff/86400),hours:Math.floor(diff/3600)%24,minutes:Math.floor(diff/60)%60,seconds:diff%60};for(const [id,value] of Object.entries(parts))document.getElementById(id).textContent=String(value).padStart(2,'0');}
updateCountdown();setInterval(updateCountdown,1000);

const copy = {
  id: {
    navOverview:'Ringkasan', navSpeakers:'Pembicara', navAgenda:'Agenda', navLocation:'Lokasi',
    eventDate:'Rabu, 14 Oktober 2026 · The Westin Jakarta', days:'HARI', hours:'JAM', minutes:'MENIT', seconds:'DETIK',
    countdownCaption:'Menuju Lenovo OEM Innovation Forum Indonesia 2026',
    introTitle:'Wujudkan ide menjadi inovasi nyata bersama Lenovo.',
    introP1:'Di <strong>Lenovo OEM Innovation Forum Indonesia 2026</strong>, para mitra ISV, inovator teknologi, dan pemimpin manufaktur berkumpul untuk mengeksplorasi peluang baru bersama teknologi Lenovo.',
    introP2:'Temukan bagaimana solusi OEM, AI, dan teknologi cerdas dapat mempercepat inovasi, mendukung operasional yang lebih cerdas, dan membuka peluang bisnis baru.',
    eventOverview:'Ringkasan Acara', whyAttend:'Mengapa Anda harus hadir?', date:'Rabu, 14 Oktober 2026',
    cards:[['Teknologi Lenovo OEM','Jelajahi kemungkinan baru bersama Lenovo OEM.'],['Wawasan dari Para Ahli','Temui pakar Lenovo OEM dan pemimpin industri.'],['Inovasi Berbasis AI','Temukan potensi AI untuk solusi dunia nyata.'],['Kolaborasi & Peluang','Bangun koneksi dan peluang bisnis masa depan.']],
    partnerTitle:'ISV Partner Innovation Forum', partnerAudience:'Untuk mitra ISV & inovator teknologi', partnerTagline:'Build what’s next with Lenovo technology.',
    partnerDescription:'Forum eksklusif bagi mitra ISV dan inovator teknologi untuk mengeksplorasi bagaimana teknologi Lenovo OEM dapat mendukung solusi yang disesuaikan, mempercepat inovasi, dan membuka peluang bisnis baru.',
    partnerBenefits:[['Jelajahi Kemungkinan Baru','Eksplorasi kemungkinan baru dengan teknologi Lenovo OEM sebagai fondasi solusi yang disesuaikan.'],['Terhubung & Berkolaborasi','Bertukar ide dengan pakar Lenovo OEM, pemimpin industri, dan sesama mitra teknologi.'],['Wujudkan Ide Menjadi Peluang','Temukan potensi use case dan peluang bisnis yang dapat berkembang menjadi solusi serta kemitraan masa depan.']],
    customerTitle:'Customer Leader Circle',customerAudience:'Untuk pemimpin teknologi & manufaktur',customerTagline:'Shaping the Future of Manufacturing in the Age of AI',
    customerDescription:'Bergabunglah bersama para pemimpin senior teknologi dan manufaktur dalam malam eksklusif yang menghadirkan wawasan strategis, diskusi bermakna, dan jejaring eksekutif tentang masa depan manufaktur di era AI.',
    customerBenefits:[['Dapatkan Perspektif Baru','Perluas wawasan tentang tren teknologi dan bisnis yang membentuk masa depan manufaktur.'],['Terhubung dengan Pemimpin Industri','Bangun koneksi dengan para pemimpin Lenovo dan eksekutif senior manufaktur.'],['Buka Peluang Baru','Eksplorasi bagaimana AI dan teknologi cerdas mendukung operasional yang lebih cerdas, mempercepat inovasi, dan membuka peluang bisnis.']],
    agenda:'Agenda',agendaPartner:'Eksplorasi teknologi Lenovo OEM, kolaborasi dengan para ahli, serta potensi solusi dan kemitraan baru.',agendaCustomer:'Wawasan strategis, diskusi tentang manufaktur di era AI, dan jejaring eksekutif.',
    speakers:'Pembicara Undangan',invited:'Invited Speaker',sonnyRole:'Director of Digital Ecosystem Development',sonnyOrg:'Komdigi',omarRole:'President Commissioner, PT. Bank Negara Indonesia (Persero)',omarOrg:'Deputy CEO, PT. Pertamina (Persero)',
    prizes:'Lucky Draw Prizes',prizesIntro:'Kesempatan membawa pulang inovasi Lenovo.',location:'Lokasi',directions:'Petunjuk arah',locationIntro:'Temui kami di The Westin Jakarta.',
    closing:'Where industry insight meets innovation.',closing2:'Let’s shape what’s next together.',footer:'Lenovo OEM Innovation Forum Indonesia 2026',mapTitle:'Lokasi The Westin Jakarta di Google Maps',
  },
  en: {
    navOverview:'Overview', navSpeakers:'Speakers', navAgenda:'Agenda', navLocation:'Location',
    eventDate:'Wednesday, 14 October 2026 · The Westin Jakarta',days:'DAYS',hours:'HOURS',minutes:'MINUTES',seconds:'SECONDS',
    countdownCaption:'Until Lenovo OEM Innovation Forum Indonesia 2026',introTitle:'Turn ideas into real-world innovation with Lenovo.',
    introP1:'At the <strong>Lenovo OEM Innovation Forum Indonesia 2026</strong>, ISV partners, technology innovators, and manufacturing leaders come together to explore new possibilities with Lenovo technology.',
    introP2:'Discover how OEM solutions, AI, and intelligent technology can accelerate innovation, enable smarter operations, and unlock new business opportunities.',
    eventOverview:'Event Overview',whyAttend:'Why should you attend?',date:'Wednesday, 14 October 2026',
    cards:[['Lenovo OEM Technology','Explore new possibilities with Lenovo OEM.'],['Expert Perspectives','Meet Lenovo OEM experts and industry leaders.'],['AI-Powered Innovation','Discover AI’s potential for real-world solutions.'],['Connect & Collaborate','Build connections and new business opportunities.']],
    partnerTitle:'ISV Partner Innovation Forum',partnerAudience:'For ISV partners & technology innovators',partnerTagline:'Build what’s next with Lenovo technology.',
    partnerDescription:'This exclusive forum is designed for ISV partners and technology innovators to explore how Lenovo OEM technology can enable customized solutions, accelerate innovation, and unlock new business opportunities.',
    partnerBenefits:[['Explore New Possibilities','Explore new possibilities with Lenovo OEM technology as the foundation for customized solutions.'],['Connect & Collaborate','Connect and collaborate with Lenovo OEM experts, industry leaders, and fellow technology partners.'],['Turn Ideas into Opportunities','Discover potential use cases and business opportunities that can evolve into future solutions and partnerships.']],
    customerTitle:'Customer Leader Circle',customerAudience:'For technology & manufacturing leaders',customerTagline:'Shaping the Future of Manufacturing in the Age of AI',
    customerDescription:'Join senior technology and manufacturing leaders for an exclusive evening of strategic insights, meaningful discussions, and executive networking as we explore the future of manufacturing in the age of AI.',
    customerBenefits:[['Gain New Perspectives','Gain new perspectives on technology and business trends shaping the future of manufacturing.'],['Connect with Industry Leaders','Connect with Lenovo leaders and senior manufacturing executives.'],['Unlock New Opportunities','Explore how AI and intelligent technology can enable smarter operations, accelerate innovation, and unlock new business opportunities.']],
    agenda:'Agenda',agendaPartner:'Explore Lenovo OEM technology, collaborate with experts, and discover potential solutions and future partnerships.',agendaCustomer:'Strategic insights, meaningful discussions on manufacturing in the age of AI, and executive networking.',
    speakers:'Invited Speakers',invited:'Invited Speaker',sonnyRole:'Director of Digital Ecosystem Development',sonnyOrg:'Komdigi',omarRole:'President Commissioner, PT. Bank Negara Indonesia (Persero)',omarOrg:'Deputy CEO, PT. Pertamina (Persero)',
    prizes:'Lucky Draw Prizes',prizesIntro:'A chance to take home Lenovo innovation.',location:'Location',directions:'Get directions',locationIntro:'Meet us at The Westin Jakarta.',
    closing:'Where industry insight meets innovation.',closing2:'Let’s shape what’s next together.',footer:'Lenovo OEM Innovation Forum Indonesia 2026',mapTitle:'The Westin Jakarta on Google Maps',
  }
};

const iconAssets=['overview-innovation.webp','overview-speakers.webp','overview-solutions.webp','overview-network.webp'];
function benefitList(items){return items.map(([title,description])=>`<li><span class="benefit-check" aria-hidden="true">✓</span><div><strong>${title}</strong><p>${description}</p></div></li>`).join('');}
function renderPage(language){
  const t=copy[language];
  document.documentElement.lang=language;
  document.querySelectorAll('[data-i18n]').forEach(node=>{node.innerHTML=t[node.dataset.i18n];});
  const flag=document.querySelector('.flag');flag.classList.toggle('english',language==='en');
  document.getElementById('overview-details').innerHTML=`
    <h2 class="section-title">${t.eventOverview}</h2>
    <div class="overview-grid">${t.cards.map(([title,description],i)=>`<article class="overview-card glass"><img src="assets/${iconAssets[i]}" width="106" height="106" alt="" loading="lazy"><h3>${title}</h3><p>${description}</p></article>`).join('')}</div>
    <h2 class="section-title why-title">${t.whyAttend}</h2>
    <div class="program-grid">
      <article class="program-card glass"><p class="program-audience">${t.partnerAudience}</p><h3>${t.partnerTitle}</h3><p class="program-tagline">${t.partnerTagline}</p><span class="time-chip">09:00 – 15:00 WIB</span><p class="program-description">${t.partnerDescription}</p><ul class="benefit-list">${benefitList(t.partnerBenefits)}</ul></article>
      <article class="program-card glass"><p class="program-audience">${t.customerAudience}</p><h3>${t.customerTitle}</h3><p class="program-tagline">${t.customerTagline}</p><span class="time-chip">18:00 – 21:00 WIB</span><p class="program-description">${t.customerDescription}</p><ul class="benefit-list">${benefitList(t.customerBenefits)}</ul></article>
    </div>`;
  document.getElementById('event-sections').innerHTML=`
    <section id="agenda" class="agenda-section section-purple"><div class="container"><div class="agenda-panel glass"><h2 class="floating-title">${t.agenda}</h2><p class="agenda-date">${t.date}</p><article class="agenda-row"><div class="agenda-row-heading"><h3>${t.partnerTitle}</h3><span>09:00 – 15:00 WIB</span></div><p>${t.agendaPartner}</p></article><article class="agenda-row"><div class="agenda-row-heading"><h3>${t.customerTitle}</h3><span>18:00 – 21:00 WIB</span></div><p>${t.agendaCustomer}</p></article></div></div></section>
    <section id="speakers" class="speakers-section section-purple"><div class="container"><h2 class="section-title">${t.speakers}</h2><div class="speakers-grid">
      <article class="speaker-card glass"><div class="speaker-content"><p class="speaker-label">${t.invited}</p><h3>Dr. Sonny Hendra Sudaryana</h3><p>${t.sonnyRole}</p><p class="speaker-org">${t.sonnyOrg}</p></div><div class="portrait"><img src="assets/speaker-sonny.png" alt="Dr. Sonny Hendra Sudaryana" width="80" height="116" loading="lazy"></div><div class="speaker-session"><span>${t.partnerTitle}</span><small>09:00 – 15:00 WIB</small></div></article>
      <article class="speaker-card glass"><div class="speaker-content"><p class="speaker-label">${t.invited}</p><h3>Omar Sjawaldy Anwar</h3><p>${t.omarRole}</p><p class="speaker-org">${t.omarOrg}</p></div><div class="portrait"><img src="assets/speaker-omar.png" alt="Omar Sjawaldy Anwar" width="80" height="117" loading="lazy"></div><div class="speaker-session"><span>${t.customerTitle}</span><small>18:00 – 21:00 WIB</small></div></article>
    </div></div></section>
    <section class="prizes-section section-purple" aria-labelledby="prizes-title"><div class="container"><h2 id="prizes-title" class="section-title">${t.prizes}</h2><p class="section-subtitle">${t.prizesIntro}</p><div class="prizes-grid"><article class="prize-card glass"><div class="prize-image"><img src="assets/lenovo-idea-tab-plus.png" alt="Lenovo Idea Tab Plus" width="82" height="68" loading="lazy"></div><h3>Lenovo Idea Tab Plus</h3></article><article class="prize-card glass"><div class="prize-image"><img src="assets/lenovo-motopad-60-lite.png" alt="Lenovo MotoPad 60 Lite" width="106" height="70" loading="lazy"></div><h3>Lenovo MotoPad 60 Lite</h3></article></div></div></section>
    <section id="location" class="location-section section-purple"><div class="container"><h2 class="section-title">${t.location}</h2><p class="section-subtitle">${t.locationIntro}</p><div class="location-info"><strong>The Westin Jakarta</strong><p>Jl. H.R. Rasuna Said Blok C No.22A, Jakarta</p></div><div class="map-frame glass"><iframe title="${t.mapTitle}" src="https://maps.google.com/maps?q=The%20Westin%20Jakarta%20Jl.%20H.R.%20Rasuna%20Said%20Blok%20C%20No.22A&z=16&output=embed" width="1180" height="370" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div><a class="directions-button" href="https://www.google.com/maps/dir/?api=1&destination=The+Westin+Jakarta+Jl.+H.R.+Rasuna+Said+Blok+C+No.22A" target="_blank" rel="noopener noreferrer">${t.directions}</a></div></section>
    <footer class="site-footer"><p>${t.closing}<br><strong>${t.closing2}</strong></p><div class="footer-bottom"><span>${t.footer}</span><span>14 October 2026 · The Westin Jakarta</span></div></footer>`;
  observeSections();
}

let sectionObserver;
function observeSections(){
  if(sectionObserver)sectionObserver.disconnect();
  sectionObserver=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting)document.querySelectorAll('.nav-link').forEach(link=>link.classList.toggle('active',link.hash===`#${entry.target.id}`));}},{rootMargin:'-12% 0px -60% 0px',threshold:0});
  document.querySelectorAll('main section[id]').forEach(section=>sectionObserver.observe(section));
}
document.getElementById('language').addEventListener('change',event=>renderPage(event.target.value));
document.querySelectorAll('.nav-link').forEach(link=>link.addEventListener('click',()=>document.querySelectorAll('.nav-link').forEach(item=>item.classList.toggle('active',item===link))));
renderPage('id');
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.querySelector('.hero-video').pause();
