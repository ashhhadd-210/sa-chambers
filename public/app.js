/* =====================================================================
   SA CHAMBERS — EDIT YOUR DETAILS HERE
   Everything marked TODO is a placeholder; replace it with real info.
   ===================================================================== */
const CONFIG = {
  name: 'Sabah Cheema',
  title: 'Advocate High Court',
  city: 'Lahore, Pakistan',
  address: 'TODO: Office address, Lahore, Punjab, Pakistan',
  phone: '+92 300 0000000',            // TODO
  whatsapp: '923000000000',            // TODO — digits only, country code first, no +
  email: 'info@sachambers.pk',         // TODO
  hours: 'Mon – Sat, 10:00 am – 6:00 pm',
  linkedin: 'https://pk.linkedin.com/in/sabah-cheema-254647255',

  admissions: [
    'Advocate High Court, Punjab Bar Council',
    'Member, Lahore High Court Bar Association',   // TODO confirm
    'Member, Lahore Bar Association',              // TODO confirm
  ],
  education: [
    'LL.B (Hons), BPP University',                 // TODO confirm degree & year
  ],
  activities: [
    'Associate, Axis Law Chambers, Lahore',        // TODO confirm role & years
    'Founder, SA Chambers',
  ],
  languages: ['English', 'Urdu', 'Punjabi'],
};

/* ---------------- Practice areas (from LinkedIn services) ---------------- */
const PRACTICE = [
  { ic: '🧾', t: 'Tax Law & Litigation', c: ['Litigation'],
    d: 'Representation in income tax and sales tax disputes with the FBR and provincial revenue authorities.',
    li: ['Replies to notices under the Income Tax Ordinance, 2001', 'Sales Tax Act, 1990 & Punjab sales tax on services', 'Appeals before Commissioner Inland Revenue (Appeals)', 'Appeals before the Appellate Tribunal Inland Revenue', 'Tax references & writ petitions before the Lahore High Court'] },
  { ic: '📊', t: 'Tax Advisory', c: ['Advisory'],
    d: 'Proactive tax advice for individuals, salaried professionals, businesses and overseas Pakistanis.',
    li: ['NTN registration & active taxpayer (ATL) status', 'Return filing & wealth statement guidance', 'Tax planning for property transactions', 'Withholding tax compliance for businesses', 'Tax position of non-resident Pakistanis'] },
  { ic: '👨‍👩‍👧', t: 'Family Law', c: ['Litigation'],
    d: 'Sensitive, discreet handling of family disputes before the Family Courts.',
    li: ['Maintenance for wife and children', 'Custody & guardianship (Guardians & Wards Act, 1890)', 'Recovery of dower (haq mehr) & dowry articles', 'Restitution of conjugal rights', 'Enforcement of family court decrees'] },
  { ic: '💍', t: 'Divorce & Khula', c: ['Litigation'],
    d: 'Guidance through talaq, khula and judicial dissolution — with clarity on rights and procedure.',
    li: ['Khula & dissolution suits (Dissolution of Muslim Marriages Act, 1939)', 'Talaq notices & Union Council proceedings (MFLO, 1961)', 'Effectiveness certificates & NADRA record updates', 'Divorce involving overseas spouses', 'Post-divorce maintenance & custody'] },
  { ic: '🏠', t: 'Property Law', c: ['Litigation','Transactional'],
    d: 'Protecting ownership, possession and transactions in land and real estate.',
    li: ['Title verification — fard, registry & mutation', 'Suits for specific performance & declaration', 'Illegal Dispossession Act, 2005 complaints', 'Partition of joint family property', 'Drafting sale agreements, gift deeds & tenancy agreements'] },
  { ic: '🏢', t: 'Corporate Law', c: ['Transactional','Advisory'],
    d: 'Setting up, running and protecting businesses under the Companies Act, 2017.',
    li: ['Company incorporation & SECP filings', 'Shareholder & partnership agreements', 'Commercial contracts & vendor agreements', 'Corporate compliance & secretarial support', 'Commercial & recovery disputes'] },
  { ic: '📜', t: 'Wills & Succession Planning', c: ['Transactional','Advisory'],
    d: 'Planning ahead so your family avoids disputes — and resolving inheritance when it arises.',
    li: ['Drafting wills (wasiyyat) in line with Islamic law', 'Succession certificates & letters of administration', 'Inheritance shares & distribution of estate', 'Mutation of inherited property (intiqal)', 'Gift (hiba) and family settlement deeds'] },
  { ic: '⚖️', t: 'Legal Consulting', c: ['Advisory'],
    d: 'Clear, written legal opinions and practical advice before you sign or act.',
    li: ['Legal opinions & document vetting', 'Legal notices & replies', 'Contract review for individuals and SMEs', 'Pre-litigation strategy & settlement', 'Retainer arrangements for businesses'] },
  { ic: '🏛️', t: 'Civil & Constitutional', c: ['Litigation'],
    d: 'Civil suits and writ petitions to enforce your rights against individuals and public bodies.',
    li: ['Civil suits for recovery, declaration & injunction', 'Writ petitions under Article 199 of the Constitution', 'Appeals & revisions', 'Execution of decrees', 'Service & administrative matters'] },
];

/* ---------------- Legal guides ---------------- */
const INSIGHTS = [
  { tag: 'Family Law', t: 'Khula in Pakistan: how the process works',
    d: 'A wife may seek dissolution of marriage through khula by filing a suit in the Family Court. Here is the general sequence.',
    steps: ['Consultation and collection of nikahnama, CNICs and relevant documents', 'Suit for dissolution filed in the Family Court', 'Notice to the husband and pre-trial reconciliation proceedings', 'Decree of dissolution passed by the court', 'Decree sent to the Union Council; effectiveness certificate and NADRA record updated'] },
  { tag: 'Tax', t: 'Received a notice from the FBR? Don\'t ignore it',
    d: 'Tax notices carry deadlines. Missing them can lead to ex-parte assessments, penalties or blocked accounts.',
    steps: ['Note the section of law and the compliance date on the notice', 'Gather returns, wealth statements, bank statements and supporting records', 'Seek extension if more time is needed — in writing and on time', 'File a reasoned reply with documents through IRIS or as directed', 'If an adverse order is passed, appeal within the limitation period'] },
  { tag: 'Succession', t: 'Inheritance after a family member passes away',
    d: 'Transferring bank balances, shares and property to legal heirs requires formal steps. A typical path:',
    steps: ['Obtain the death certificate and family registration certificate (FRC) from NADRA', 'Identify all legal heirs and their shares under the applicable personal law', 'Apply for a succession certificate / letter of administration (NADRA SFU or Civil Court)', 'Process mutation (intiqal) of inherited land through the revenue record', 'Transfer or partition assets; resolve disputes amicably or in court'] },
];

/* ---------------- FAQ ---------------- */
const FAQ = [
  ['How much does a consultation cost?', 'Consultation fees depend on the nature and complexity of the matter. We tell you the fee before the consultation, and after reviewing your case we give you a clear quote for the full matter — no surprises between hearings.'],
  ['I live abroad. Can you handle my case without me coming to Pakistan?', 'In many matters, yes. We consult by video call and act on your behalf through a properly executed power of attorney, attested at the Pakistani embassy or consulate where you live. We will tell you if your personal appearance is required at any stage.'],
  ['What documents should I bring to the first meeting?', 'Your CNIC and any papers relating to the matter — for example nikahnama, property documents (fard, registry, mutation), agreements, tax notices, court orders or correspondence. If you are unsure, bring everything and we will sort it together.'],
  ['How long does a family or khula case take?', 'Timelines depend on the court\'s schedule and whether the other side contests. Family courts are required to proceed expeditiously, and uncontested matters generally conclude faster. We will give you a realistic estimate after reviewing your facts.'],
  ['I have received a tax notice. What should I do?', 'Contact us as soon as possible and do not miss the compliance date on the notice. We will review it, advise on the documents needed, and prepare a reply or seek an extension on your behalf.'],
  ['Is what I tell you confidential?', 'Yes. Communications between you and your advocate are privileged and kept strictly confidential. Please avoid sharing highly sensitive details through the website form — we will discuss them privately.'],
  ['Do you offer consultations in Urdu?', 'Yes. We advise clients in English, Urdu and Punjabi, and we explain every document before you sign it.'],
];

/* ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const waLink = msg => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

// bind config values
$$('[data-bind]').forEach(el => {
  const k = el.dataset.bind;
  el.textContent = k === 'whatsappDisplay' ? '+' + CONFIG.whatsapp.replace(/^(\d{2})(\d{3})(\d+)/, '$1 $2 $3') : CONFIG[k];
});
$$('[data-href="tel"]').forEach(a => a.href = 'tel:' + CONFIG.phone.replace(/\s/g, ''));
$$('[data-href="mailto"]').forEach(a => a.href = 'mailto:' + CONFIG.email);
$$('[data-src-href]').forEach(a => a.href = CONFIG[a.dataset.srcHref]);
$$('[data-whatsapp]').forEach(a => { a.href = waLink(a.dataset.whatsapp); a.target = '_blank'; a.rel = 'noopener'; });
$$('[data-list]').forEach(ul => ul.innerHTML = CONFIG[ul.dataset.list].map(x => `<li>${x}</li>`).join(''));
$('#year').textContent = new Date().getFullYear();

// practice cards
$('#practiceGrid').innerHTML = PRACTICE.map((p, i) => `
  <article class="pa reveal" tabindex="0" data-c="${p.c.join(' ')}">
    <div class="pa-top"><span class="pa-no">${String(i + 1).padStart(2, '0')}</span><span class="pa-tag">${p.c[0]}</span></div>
    <h4>${p.t}</h4><p>${p.d}</p>
    <ul>${p.li.map(x => `<li>${x}</li>`).join('')}</ul>
    <span class="pa-more">What we handle</span>
  </article>`).join('');
$$('.pa').forEach(c => {
  const ul = $('ul', c);
  const toggle = () => { const o = c.classList.toggle('open'); ul.style.maxHeight = o ? ul.scrollHeight + 'px' : 0; };
  c.addEventListener('click', toggle);
  c.addEventListener('keydown', e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), toggle()));
});
// capability filters (buttons + the three pillars)
function filterPractice(f) {
  $$('#filters button').forEach(b => b.classList.toggle('active', b.dataset.f === f));
  $$('.pa').forEach(c => c.classList.toggle('hide', f !== 'All' && !c.dataset.c.includes(f)));
}
$$('#filters button').forEach(b => b.addEventListener('click', () => filterPractice(b.dataset.f)));
$$('.pillar').forEach(p => p.addEventListener('click', () => filterPractice(p.dataset.filter)));

$('#matterSelect').insertAdjacentHTML('beforeend',
  PRACTICE.map(p => `<option>${p.t}</option>`).join('') + '<option>Other / Not sure</option>');
$('#footerPractice').innerHTML = PRACTICE.slice(0, 6).map(p => `<li><a href="#practice">${p.t}</a></li>`).join('');

// insights
$('#insightGrid').innerHTML = INSIGHTS.map((i, n) => `
  <article class="insight reveal">
    <div class="insight-top"><span class="badge">${i.tag}</span><span class="insight-no">Guide ${String(n + 1).padStart(2, '0')}</span></div>
    <div class="insight-body">
      <h4>${i.t}</h4><p>${i.d}</p>
      <details><summary>Read the steps</summary><ol>${i.steps.map(s => `<li>${s}</li>`).join('')}</ol></details>
    </div>
  </article>`).join('');

// faq
$('#faqList').innerHTML = FAQ.map(([q, a]) => `
  <div class="faq-item"><button class="faq-q" aria-expanded="false">${q}</button><div class="faq-a"><p>${a}</p></div></div>`).join('');
$$('.faq-item').forEach(item => {
  const btn = $('.faq-q', item), ans = $('.faq-a', item);
  btn.addEventListener('click', () => {
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    ans.style.maxHeight = open ? ans.scrollHeight + 'px' : 0;
  });
});

// courts ticker — duplicate for a seamless loop
const track = $('#tickerTrack'); track.innerHTML += track.innerHTML;

// The portal: every line of the hero is fitted to its band, so the words form the
// stepped facade. Each .fit is scaled until it exactly fills its .st band.
function fitPortal() {
  $$('.fit').forEach(el => {
    const band = el.parentElement;
    const max = parseFloat(el.dataset.max);
    el.classList.remove('wrap');
    el.style.fontSize = max + 'px';
    const avail = band.clientWidth - (parseFloat(getComputedStyle(band).paddingLeft) * 2);
    const need = el.scrollWidth;
    let size = Math.min(max, max * avail / need);
    if (size < 9) { size = 11; el.classList.add('wrap'); }   // tiny screens: let it wrap instead
    el.style.fontSize = size + 'px';
  });
}
fitPortal();
if (document.fonts) document.fonts.ready.then(fitPortal);
addEventListener('load', fitPortal);
let rT; addEventListener('resize', () => { clearTimeout(rT); rT = setTimeout(fitPortal, 80); });

// header + mobile nav
const header = $('#header'), nav = $('#nav'), burger = $('#burger');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10), { passive: true });
burger.addEventListener('click', () => { nav.classList.toggle('open'); burger.classList.toggle('open'); });
$$('a', nav).forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); burger.classList.remove('open'); }));

// highlight current section in nav
const navIO = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) $$('a:not(.btn)', nav).forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
$$('section[id]').forEach(s => navIO.observe(s));

// reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: .12 });
$$('.reveal').forEach(el => io.observe(el));

// world clocks
function clocks() {
  const f = tz => new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: tz });
  $('#tzPk').textContent = f('Asia/Karachi');
  $('#tzAe').textContent = f('Asia/Dubai');
  $('#tzUk').textContent = f('Europe/London');
  $('#tzNy').textContent = f('America/Toronto');
}
clocks(); setInterval(clocks, 30000);

// inquiry form
$('#inquiryForm').addEventListener('submit', async e => {
  e.preventDefault();
  const form = e.target, msg = $('#formMsg');
  const req = ['name', 'phone', 'matter'];
  let ok = true;
  req.forEach(n => { const el = form[n]; const bad = !el.value.trim(); el.classList.toggle('invalid', bad); if (bad) ok = false; });
  if (!form.consent.checked) ok = false;
  if (!ok) { msg.className = 'form-msg err'; msg.textContent = 'Please fill in your name, phone, matter type and tick the acknowledgement.'; return; }

  const data = Object.fromEntries(new FormData(form));
  const btn = $('button[type=submit]', form);
  btn.disabled = true; btn.textContent = 'Sending…';
  try {
    const r = await fetch('/api/inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    if (!r.ok) throw new Error((await r.json()).error || 'Failed');
    form.reset();
    msg.className = 'form-msg ok';
    msg.innerHTML = `Thank you, ${data.name.split(' ')[0]}. Our office will contact you shortly. For urgent matters, <a href="${waLink('Assalam-o-Alaikum, I just submitted a consultation request on your website.')}" target="_blank" rel="noopener"><u>WhatsApp us</u></a>.`;
  } catch (err) {
    msg.className = 'form-msg err';
    msg.textContent = 'Could not send right now — please call or WhatsApp us directly.';
  } finally {
    btn.disabled = false; btn.textContent = 'Submit Inquiry';
  }
});
