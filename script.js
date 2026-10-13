'use strict';

const TRANSLATIONS = {
  de: {
    navFeatures:'Features',navHow:"So funktioniert's",navScreens:'Screenshots',navDiscover:'App entdecken',
    eyebrow:'DEIN DIGITALER ORDNUNGSHELFER FÜR ANDROID',
    heroTitle:'Mehr Ordnung.<br><span class="gradient-text">Weniger Chaos.</span>',
    heroLead:'Hunderte Screenshots, aber nichts wiederzufinden? Screenshot Sorting Pro erkennt typische App-Ansichten und hilft dir, Bilder automatisch in übersichtliche Kategorien einzuordnen.',
    heroExplore:'App entdecken',heroHow:"So funktioniert's",trustLocal:'Lokale Verarbeitung',trustFast:'Smarte Erkennung',trustAndroid:'Für Android',
    visualNote:'Designvorschau: Die gezeigten Oberflächen sind Illustrationen und können vom aktuellen App-Stand abweichen.',
    floatingIntelligent:'Intelligent analysieren',floatingOrganized:'Übersichtlich sortieren',stripLocal:'Privatsphäre im Fokus',stripDetect:'App-basierte Erkennung',stripFolders:'Klare Ordnerstruktur',stripOptions:'Flexible Optionen',
    featuresKicker:'DIE FEATURES',featuresTitle:'Alles im Griff. <span class="gradient-text">Ganz automatisch.</span>',featuresIntro:'Vom ersten Scan bis zum fertigen Ordner: Eine durchdachte Arbeitsfläche für deine Screenshot-Sammlung.',
    f1Title:'Apps intelligent erkennen',f1Text:'Farbprofile und charakteristische Elemente helfen dabei, Screenshots aus WhatsApp, Facebook, Telegram und vielen weiteren Apps zuzuordnen.',
    f2Title:'Schnell & präzise',f2Text:'Wähle zwischen schnellen Scans und detaillierterer Erkennung. Behalte den Fortschritt jederzeit im Blick.',
    f3Title:'Saubere Kategorien',f3Text:'Organisiere Bilder nach Apps, sieh dir Ergebnisse vorab an und behalte die Zielordner im Überblick.',
    f4Title:'Lokal statt Cloud',f4Text:'Die Bildverarbeitung ist für die lokale Nutzung auf deinem Android-Gerät konzipiert – ohne erforderlichen Upload deiner Screenshots.',
    f5Title:'Dein Workflow',f5Text:'Passe Scan-Modus, unterstützte Kategorien und Dateiaktionen an deine Bedürfnisse an.',
    howKicker:"SO EINFACH GEHT'S",howTitle:'Drei Schritte. <span class="gradient-text">Mehr Überblick.</span>',howIntro:'Weniger Suchen, mehr Zeit für die wichtigen Dinge.',
    step1Title:'Ordner wählen',step1Text:'Wähle den Ordner mit deinen Screenshots über die Android-Dateiauswahl.',
    step2Title:'Bilder analysieren',step2Text:'Die Erkennung ordnet passende Screenshots ihren Kategorien zu und zeigt den Fortschritt.',
    step3Title:'Ordnung genießen',step3Text:'Prüfe die Ergebnisse und lasse Dateien übersichtlich in Unterordner sortieren.',
    screensKicker:'EIN BLICK IN DIE APP',screensTitle:'Schön gestaltet. <span class="gradient-text">Einfach bedient.</span>',screensIntro:'Entdecke die Oberflächen der App – vom Dashboard bis zu den Einstellungen.',galleryHint:'Bild anklicken, um die Vorschau zu vergrößern.',
    shot1Title:'Dashboard',shot1Text:'Alles auf einen Blick',shot2Title:'App-Erkennung',shot2Text:'Farben und Regeln',shot3Title:'Live-Scan',shot3Text:'Fortschritt verfolgen',shot4Title:'Ergebnisse',shot4Text:'Jede Datei im Blick',shot5Title:'Einstellungen',shot5Text:'Volle Kontrolle',
    screensDisclaimer:'Hinweis: Die gezeigten Screenshots sind Designvisualisierungen und keine verifizierten Aufnahmen eines aktuellen Builds.',
    showcaseKicker:'GUT SORTIERT',showcaseTitle:'Aus Chaos wird <span class="gradient-text">Struktur.</span>',showcaseBody:'Aus vielen Einzelbildern werden übersichtliche App-Kategorien. Deine Sammlung bleibt nachvollziehbar – auch wenn es mal richtig viele Screenshots sind.',showcasePoint1:'Eigene Ordner je Kategorie',showcasePoint2:'Ergebnisse vorab prüfen',showcasePoint3:'Unklare Treffer im Blick',
    faqTitle:'Noch Fragen? <span class="gradient-text">Hier sind Antworten.</span>',
    faq1Q:'Wie erkennt die App meine Screenshots?',faq1A:'Die Erkennung nutzt unter anderem Farbprofile und typische Bildbereiche, um Screenshots bestimmten Apps zuzuordnen. Nicht jeder Treffer ist eindeutig; dafür gibt es die Kategorie „Unklar“.',
    faq2Q:'Werden meine Bilder in eine Cloud geladen?',faq2A:'Die dargestellte Bildanalyse ist für die lokale Ausführung auf Android ausgelegt. Ob die veröffentlichte Version weitere Dienste verwendet, steht in der Datenschutzerklärung der jeweiligen App-Version.',
    faq3Q:'Kann ich Kopieren statt Verschieben verwenden?',faq3A:'Ja, das ist als Dateiverarbeitungsoption vorgesehen. Für einen sicheren Einstieg empfiehlt sich der Kopiermodus, damit die Originaldateien erhalten bleiben.',
    faq4Q:'Kann ich die App schon bei Google Play herunterladen?',faq4A:'Der Google-Play-Link wird auf dieser Seite eingeblendet, sobald er in der Konfiguration hinterlegt wurde. Bis dahin kannst du dich per E-Mail nach dem Veröffentlichungsstand erkundigen.',
    faq5Q:'Funktioniert die Landingpage auf GitHub Pages?',faq5A:'Ja. Diese Website benötigt weder Server noch Build-Tools: Dateien hochladen, GitHub Pages aktivieren, fertig.',
    ctaKicker:'BEREIT FÜR MEHR ORDNUNG?',ctaTitle:'Deine Screenshots verdienen <span class="gradient-text">ein Upgrade.</span>',ctaBody:'Entdecke Screenshot Sorting Pro – smarter sortieren statt endlos suchen.',ctaContact:'Verfügbarkeit anfragen',
    footerSubtitle:'Eine App von Flondy',footerLegal:'Impressum',footerPrivacy:'Datenschutz',footerContact:'Kontakt',footerRights:'Alle Rechte vorbehalten.',
    storeButton:'Bei Google Play ansehen',apkButton:'APK herunterladen',
  },
  en: {
    navFeatures:'Features',navHow:'How it works',navScreens:'Screenshots',navDiscover:'Explore the app',
    eyebrow:'YOUR DIGITAL ORGANIZER FOR ANDROID',
    heroTitle:'Less clutter.<br><span class="gradient-text">More clarity.</span>',
    heroLead:'Hundreds of screenshots and nothing easy to find? Screenshot Sorting Pro recognizes familiar app interfaces and helps you organize images into clear categories.',
    heroExplore:'Explore the app',heroHow:'How it works',trustLocal:'On-device processing',trustFast:'Smart recognition',trustAndroid:'Built for Android',
    visualNote:'Design preview: Images are illustrations and may differ from the current version of the app.',
    floatingIntelligent:'Smart analysis',floatingOrganized:'Neatly organized',stripLocal:'Privacy focused',stripDetect:'App-based detection',stripFolders:'Organized folders',stripOptions:'Flexible settings',
    featuresKicker:'THE FEATURES',featuresTitle:'Take control. <span class="gradient-text">Automatically.</span>',featuresIntro:'From your first scan to organized folders: a considered workspace for all your screenshots.',
    f1Title:'Recognize apps intelligently',f1Text:'Color profiles and distinctive visual elements help categorize screenshots from WhatsApp, Facebook, Telegram and many other apps.',
    f2Title:'Fast & accurate',f2Text:'Choose quick scans or more detailed detection. Keep an eye on progress at every step.',
    f3Title:'Clean categories',f3Text:'Group images by app, preview results and keep destination folders organized.',
    f4Title:'Local, not cloud-based',f4Text:'Image processing is designed to run locally on Android, with no need to upload your screenshots.',
    f5Title:'Your workflow',f5Text:'Customize scan modes, supported app categories and file actions to fit your needs.',
    howKicker:'HOW IT WORKS',howTitle:'Three steps. <span class="gradient-text">One clear picture.</span>',howIntro:'Spend less time searching and more time doing what matters.',
    step1Title:'Choose a folder',step1Text:'Select your screenshots folder using the Android system file picker.',
    step2Title:'Analyze images',step2Text:'The recognizer assigns matching screenshots to categories and shows live progress.',
    step3Title:'Enjoy the order',step3Text:'Review results and neatly organize your files into subfolders.',
    screensKicker:'INSIDE THE APP',screensTitle:'Beautifully designed. <span class="gradient-text">Easy to use.</span>',screensIntro:'Explore the app experience, from dashboard to settings.',galleryHint:'Click a screenshot for a larger preview.',
    shot1Title:'Dashboard',shot1Text:'Everything at a glance',shot2Title:'App detection',shot2Text:'Colors and rules',shot3Title:'Live scan',shot3Text:'Watch progress',shot4Title:'Results',shot4Text:'Every file in view',shot5Title:'Settings',shot5Text:'Full control',
    screensDisclaimer:'Note: Images are promotional design mockups, not verified captures of the current app build.',
    showcaseKicker:'BETTER ORGANIZED',showcaseTitle:'Turn clutter into <span class="gradient-text">clarity.</span>',showcaseBody:'Turn individual images into clear app categories. Your collection stays manageable even when the screenshot count grows.',showcasePoint1:'A folder for each category',showcasePoint2:'Review results first',showcasePoint3:'Identify uncertain matches',
    faqTitle:'Questions? <span class="gradient-text">We have answers.</span>',
    faq1Q:'How does the app detect my screenshots?',faq1A:'Recognition uses color profiles and typical regions of screenshots to match images with apps. Not every match is certain, so unclear images can be categorized separately.',
    faq2Q:'Will my images be uploaded to the cloud?',faq2A:'The illustrated image analyzer is intended to run locally on Android. Check the privacy policy for the released app version for details on any additional services.',
    faq3Q:'Can I copy files instead of moving them?',faq3A:'That is a planned file management option. Copy mode is the safer starting point because your original files stay in place.',
    faq4Q:'Is the app available on Google Play?',faq4A:'The Google Play button appears here when its official URL is added in the site configuration. Until then, you can email for the latest release status.',
    faq5Q:'Does this landing page work with GitHub Pages?',faq5A:'Yes. The site is fully static, with no server or build step required. Upload the files and enable GitHub Pages.',
    ctaKicker:'READY FOR AN ORGANIZED GALLERY?',ctaTitle:'Give your screenshots <span class="gradient-text">an upgrade.</span>',ctaBody:'Discover Screenshot Sorting Pro – sort smarter, search less.',ctaContact:'Ask about availability',
    footerSubtitle:'An app by Flondy',footerLegal:'Legal notice',footerPrivacy:'Privacy policy',footerContact:'Contact',footerRights:'All rights reserved.',
    storeButton:'View on Google Play',apkButton:'Download APK',
  }
};

const galleryItems = [
  {url:'assets/img/screenshot-dashboard.webp',key:'shot1Title'},
  {url:'assets/img/screenshot-recognition.webp',key:'shot2Title'},
  {url:'assets/img/screenshot-live.webp',key:'shot3Title'},
  {url:'assets/img/screenshot-results.webp',key:'shot4Title'},
  {url:'assets/img/screenshot-settings.webp',key:'shot5Title'}
];
let lang = 'de', activeShot = 0, lastFocused = null;
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

function setLanguage(language) {
  lang = TRANSLATIONS[language] ? language : 'de';
  const t = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  document.title = lang === 'de' ? 'Screenshot Sorting Pro – Automatisch sortieren' : 'Screenshot Sorting Pro – Organize automatically';
  $$('[data-i18n]').forEach(el => {const key=el.dataset.i18n;if(Object.hasOwn(t,key))el.textContent=t[key];});
  $$('[data-i18n-html]').forEach(el => {const key=el.dataset.i18nHtml;if(Object.hasOwn(t,key))el.innerHTML=t[key];});
  $$('.lang-btn').forEach(btn=>{const isActive=btn.dataset.lang===lang;btn.classList.toggle('active',isActive);btn.setAttribute('aria-pressed',String(isActive));});
  try {localStorage.setItem('ssp_lang', lang);} catch (_) {}
  configureLinks();
  if(!$('#lightbox').hidden) updateLightbox();
}

function configureLinks() {
  const cfg = window.SSP_CONFIG || {}, t = TRANSLATIONS[lang];
  const play = typeof cfg.playStoreUrl === 'string' ? cfg.playStoreUrl.trim() : '';
  const apk = typeof cfg.apkDownloadUrl === 'string' ? cfg.apkDownloadUrl.trim() : '';
  const email = typeof cfg.contactEmail === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cfg.contactEmail.trim()) ? cfg.contactEmail.trim() : 'flondy.dev@gmail.com';
  const primary = $('#primaryCTA'), final = $('#finalCTA');
  if (play.startsWith('https://')) {
    primary.href=play;final.href=play;
    primary.target=final.target='_blank';primary.rel=final.rel='noopener noreferrer';
    primary.querySelector('[data-i18n]').textContent=final.querySelector('[data-i18n]').textContent=t.storeButton;
  } else if (apk.startsWith('https://')) {
    primary.href=apk;final.href=apk;primary.target=final.target='_blank';primary.rel=final.rel='noopener noreferrer';
    primary.querySelector('[data-i18n]').textContent=final.querySelector('[data-i18n]').textContent=t.apkButton;
  } else {
    primary.href='#screenshots';primary.removeAttribute('target');primary.removeAttribute('rel');primary.querySelector('[data-i18n]').textContent=t.heroExplore;
    final.href=`mailto:${email}?subject=${encodeURIComponent('Screenshot Sorting Pro')}`;final.removeAttribute('target');final.removeAttribute('rel');final.querySelector('[data-i18n]').textContent=t.ctaContact;
  }
  $$('a[href^="mailto:"]:not(#finalCTA)').forEach(a=>a.href=`mailto:${email}`);
}

function closeNav() {$('#mobileNav').hidden=true;$('#menuButton').setAttribute('aria-expanded','false');}
function moveGallery(dir) {const card=$('.shot-card');if(!card)return;$('#screenshotTrack').scrollBy({left:(card.getBoundingClientRect().width+18)*dir,behavior:'smooth'});}
function updateLightbox() {const item=galleryItems[activeShot];$('#lightboxImage').src=item.url;$('#lightboxImage').alt=TRANSLATIONS[lang][item.key];$('#lightboxCaption').textContent=`${TRANSLATIONS[lang][item.key]} · ${activeShot+1} / ${galleryItems.length}`;}
function openLightbox(index) {lastFocused=document.activeElement;activeShot=index;updateLightbox();$('#lightbox').hidden=false;document.body.classList.add('modal-open');$('#lightboxClose').focus();}
function closeLightbox() {$('#lightbox').hidden=true;document.body.classList.remove('modal-open');$('#lightboxImage').removeAttribute('src');if(lastFocused?.focus)lastFocused.focus();}
function changeLightbox(step){activeShot=(activeShot+step+galleryItems.length)%galleryItems.length;updateLightbox();}

window.addEventListener('DOMContentLoaded',()=>{
  let preferred='de';try{preferred=localStorage.getItem('ssp_lang')||'de';}catch(_){}
  setLanguage(preferred);
  $$('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));
  $('#menuButton').addEventListener('click',()=>{const nav=$('#mobileNav');nav.hidden=!nav.hidden;$('#menuButton').setAttribute('aria-expanded',String(!nav.hidden));});
  $$('#mobileNav a').forEach(a=>a.addEventListener('click',closeNav));
  $('#galleryPrev').addEventListener('click',()=>moveGallery(-1));
  $('#galleryNext').addEventListener('click',()=>moveGallery(1));
  $$('.shot-card').forEach((el,index)=>el.addEventListener('click',()=>openLightbox(index)));
  $('#lightboxClose').addEventListener('click',closeLightbox);
  $('#lightboxPrev').addEventListener('click',()=>changeLightbox(-1));
  $('#lightboxNext').addEventListener('click',()=>changeLightbox(1));
  $('#lightbox').addEventListener('click',e=>{if(e.target===$('#lightbox'))closeLightbox();});
  window.addEventListener('keydown',e=>{
    if($('#lightbox').hidden)return;
    if(e.key==='Escape')closeLightbox();
    if(e.key==='ArrowLeft')changeLightbox(-1);
    if(e.key==='ArrowRight')changeLightbox(1);
    if(e.key==='Tab') {const focusables=[$('#lightboxClose'),$('#lightboxPrev'),$('#lightboxNext')];const pos=focusables.indexOf(document.activeElement);if(e.shiftKey&&pos<=0){e.preventDefault();focusables[2].focus();}else if(!e.shiftKey&&pos===2){e.preventDefault();focusables[0].focus();}}
  });
  $('#year').textContent=new Date().getFullYear();
  if ('IntersectionObserver' in window) {
    const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:.08,rootMargin:'0px 0px 30px 0px'});
    $$('.reveal').forEach(el=>obs.observe(el));
  } else {$$('.reveal').forEach(el=>el.classList.add('visible'));}
});
