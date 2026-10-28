/* ==========================================================
   HE AVATAR — shared script (all pages)
   Edit the DATA block below to change sliders, brands and
   household products everywhere on the site.
   ========================================================== */

/* ---------- ICONS (inline SVG, stroke style) ---------- */
const ICONS = {
  home:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',
  bat:'<ellipse cx="9" cy="9" rx="5.5" ry="7" transform="rotate(-38 9 9)"/><path d="M13.2 14.2L20.5 21.5M6 6l6 6M9 3.6l6 6M3.8 9.4l6 6"/>',
  fan:'<circle cx="12" cy="12" r="1.8"/><ellipse cx="12" cy="6" rx="2.2" ry="4"/><ellipse cx="12" cy="18" rx="2.2" ry="4"/><ellipse cx="6" cy="12" rx="4" ry="2.2"/><ellipse cx="18" cy="12" rx="4" ry="2.2"/>',
  hub:'<rect x="3" y="10" width="18" height="7" rx="2"/><path d="M7 13.5h2M11 13.5h2M15 13.5h2M12 10V4M9 4h6"/>',
  bag:'<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M9 8V6a3 3 0 016 0v2M4 13h16M11 13v2h2v-2"/>',
  speaker:'<rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="9" r="2.4"/><circle cx="12" cy="16" r="3"/>',
  pad:'<rect x="3" y="7" width="18" height="10" rx="5"/><path d="M8 10v4M6 12h4M15.5 11h.01M18 13h.01"/>',
  plug:'<rect x="2.5" y="13" width="19" height="7" rx="2"/><path d="M6.5 16.5h1M11.5 16.5h1M16.5 16.5h1M7 13V8M17 13V8M7 8h2M15 8h2"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  gel:'<path d="M9 3h6v4l1.5 2v10a2 2 0 01-2 2h-5a2 2 0 01-2-2V9L9 7z"/><path d="M9 7h6M10 13h4"/>',
  chalk:'<rect x="3" y="9" width="18" height="6" rx="1.5" transform="rotate(-20 12 12)"/><path d="M8 12.5l1.5-.6M11 11.5l1.5-.6"/>',
  glue:'<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M4 10l6-5M4 15l11-10M7 19L19 8M13 19l7-6"/>',
  cube:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12L4 7.5M12 12v9"/>',
  mosquito:'<ellipse cx="12" cy="14" rx="1.6" ry="4.2"/><circle cx="12" cy="8.6" r="1.4"/><path d="M12 7.2V3.5M10.5 11L5 8M13.5 11L19 8M10.5 14L4.5 15M13.5 14l6 1M11 18l-3 3M13 18l3 3"/><ellipse cx="7" cy="11" rx="4" ry="1.7" transform="rotate(-30 7 11)"/><ellipse cx="17" cy="11" rx="4" ry="1.7" transform="rotate(30 17 11)"/>',
  roach:'<ellipse cx="12" cy="14.5" rx="4" ry="6"/><circle cx="12" cy="7" r="1.9"/><path d="M11 5.4L8 2M13 5.4L16 2M8.2 11L4 9M8 14.5H3.5M8.4 18L4.5 20.5M15.8 11L20 9M16 14.5h4.5M15.6 18l3.9 2.5M12 9v11"/>',
  fly:'<ellipse cx="12" cy="14.5" rx="2.6" ry="4.6"/><circle cx="12" cy="8.6" r="2.3"/><ellipse cx="6.5" cy="12" rx="4.6" ry="2" transform="rotate(-30 6.5 12)"/><ellipse cx="17.5" cy="12" rx="4.6" ry="2" transform="rotate(30 17.5 12)"/><path d="M10.5 18l-2 3M13.5 18l2 3"/>',
  ant:'<circle cx="12" cy="5.5" r="2.2"/><circle cx="12" cy="11.5" r="2.3"/><circle cx="12" cy="18.2" r="3.1"/><path d="M10.5 4L8 1.5M13.5 4L16 1.5M10 10.5L5 8.5M10 12.5L5 14.5M14 10.5l5-2M14 12.5l5 2M10 17.5l-4 3M14 17.5l4 3"/>',
  rat:'<ellipse cx="11.5" cy="14" rx="7" ry="4.2"/><circle cx="19" cy="13" r="2.4"/><circle cx="17.7" cy="10.4" r="1.5"/><path d="M4.5 14C1 14 1 19.5 5.5 19.5M9 18l-1 3M15 18l1 3M21.4 13h.01"/>',
  star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  badge:'<circle cx="12" cy="9" r="6"/><path d="M8.5 14.5L7 21l5-2.5 5 2.5-1.5-6.5M9.5 9l1.8 1.8L15 7.2"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4"/>',
  hourglass:'<path d="M6 3h12M6 21h12M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9"/>',
  thumbs:'<path d="M7 11v9H4v-9zM7 11l4-8c2 0 3 1.5 2.5 3.5L13 10h6a2 2 0 012 2.3l-1.2 6A2 2 0 0117.8 20H7"/>',
  map:'<path d="M12 21s7-6.2 7-11.5a7 7 0 10-14 0C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  support:'<path d="M4 14v-2a8 8 0 0116 0v2"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19c0 2-2 2.5-5 2.5"/>',
  b2b:'<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V5a1 1 0 011-1h4a1 1 0 011 1v3M3 13h18M12 12v3"/>',
  store:'<path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9c0 2 2 2.5 4 2.5S12 11 12 9c0 2 2 2.5 4 2.5S20 11 20 9M10 20v-5h4v5"/>',
  light:'<path d="M12 2v3M8 21h8M9 17h6a5 5 0 10-6 0z"/>',
  bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  battery:'<rect x="3" y="8" width="16" height="9" rx="2"/><path d="M21 11v3M7 11v3M10 11v3"/>',
  fb:'<path d="M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
  ig:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  in:'<path d="M4 9h4v11H4zM6 4.5h.01M10 9h4v2c1-1.5 2.5-2.3 4-2.3 3 0 4 2 4 5V20h-4v-5.5c0-1.4-.5-2.2-1.7-2.2S14 13.200 14 14.700V20h-4z"/>',
  yt:'<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.500l5 2.500-5 2.500z"/>',
  x:'<path d="M4 4l16 16M20 4L4 20"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  up:'<path d="M12 19V5M6 11l6-6 6 6"/>',
  chat:'<path d="M4 5h16v11H9l-5 4z"/>'
};
function icon(name){return `<i data-icon="${name}"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]||ICONS.star}</svg></i>`}
function paintIcons(root=document){root.querySelectorAll('i[data-icon]:not([data-done])').forEach(el=>{el.dataset.done=1;el.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[el.dataset.icon]||ICONS.star}</svg>`})}

/* ---------- DATA ---------- */
// Slides = brands + household. Each has colour theme, icon and link target.
const SLIDES=[
 {img:'avatar-household-range-green-banner',name:'Avatar Household Range',pest:'all',link:'products.html'},
 {img:'avatar-household-range-banner-1',name:'Avatar Household Range',pest:'all',link:'products.html'},
 {img:'avatar-household-range-banner-2',name:'Avatar Household Range',pest:'all',link:'products.html'},
 {img:'avatar-cockroach-spray-red-banner-1',name:'Cockroach Spray Killer',pest:'cockroaches',link:'products.html#household/cockroach-spray'},
 {img:'avatar-cockroach-spray-red-banner-2',name:'Cockroach Spray Killer',pest:'cockroaches',link:'products.html#household/cockroach-spray'},
 {img:'avatar-mosquito-spray-blue-banner',name:'Mosquito Spray Killer',pest:'mosquitoes',link:'products.html#household/mosquito-spray'},
 {img:'avatar-mosquito-spray-black-green',name:'Mosquito Spray Killer',pest:'mosquitoes',link:'products.html#household/mosquito-spray'},
 {img:'avatar-mosquito-spray-black-yellow',name:'Mosquito Spray Killer',pest:'mosquitoes',link:'products.html#household/mosquito-spray'},
 {img:'avatar-mosquito-spray-lime-green',name:'Mosquito Spray Killer',pest:'mosquitoes',link:'products.html#household/mosquito-spray'},
 {img:'avatar-cockroach-ant-chalk-bedbugs',name:'Cockroach & Ant Killer Chalk',pest:'ants',link:'products.html#household/chalk'},
 {img:'avatar-cockroach-ant-chalk-lion',name:'Cockroach & Ant Killer Chalk',pest:'ants',link:'products.html#household/chalk'},
 {img:'avatar-flies-killer-chalk-fly',name:'Flies Killer Chalk',pest:'flies',link:'products.html#household/flies-killer-chalk'}
];
const HOUSE={name:'Household Pest Control',tag:'HOUSEHOLD RANGE',blurb:'Sprays, chalk, coils, vaporizers, racquets, gels and rat control for every common household pest.',c1:'#5a1a10',c2:'#c43a22',accent:'#ffd84d',icon:'shield'};
const PESTS=[
 {id:'mosquitoes',name:'Mosquitoes',icon:'mosquito',diseases:'Dengue · Chikungunya · Malaria',strength:'Blood sucker, hides in corners of the home',weak:'Electric racquets, repellents',text:'Mosquitoes breed in stagnant water and can transmit disease. Keeping water covered and using a racquet or lamp helps reduce their numbers indoors. (Sample copy — replace with approved content.)',recs:['mosquito-spray','gangster-racquet','mosquito-coil','mosquito-vaporizer']},
 {id:'cockroaches',name:'Cockroaches',icon:'roach',diseases:'Food contamination',strength:'Survive long without food, hide in dark gaps',weak:'Gels and chalk placed along their path',text:'Cockroaches prefer warm, dark spaces and travel along edges and gaps in kitchens and bathrooms. Targeted gel and chalk are placed where they hide. (Sample copy — replace with approved content.)',recs:['cockroach-spray','roach-gel','chalk']},
 {id:'flies',name:'Flies',icon:'fly',diseases:'Spread germs from waste to food',strength:'Fast, multiply quickly',weak:'Cleanliness and covered food',text:'Flies are attracted to food and waste. Covering food, sealing waste bins and using an electric racquet help keep rooms fly-free. (Sample copy — replace with approved content.)',recs:['flies-killer-chalk','gangster-racquet']},
 {id:'ants',name:'Ants',icon:'ant',diseases:'Contaminate food',strength:'Live in organised colonies',weak:'Chalk lines along entry points',text:'Ants follow trails to food. Drawing a line with chalk along entry points and cleaning spills quickly helps keep them out. (Sample copy — replace with approved content.)',recs:['chalk']},
 {id:'rats',name:'Rats',icon:'rat',diseases:'Spread bacteria through droppings',strength:'Breed fast, chew through materials',weak:'Glue pads and baits in their runs',text:'Rats leave droppings and gnaw wires and food packs. Place glue pads and rat cubes along walls and near entry points as per the label. (Sample copy — replace with approved content.)',recs:['rat-glue','rat-cube']}
];

const HOUSEHOLD=[
 {id:'mosquito-spray',img:'mosquito-spray',banner:'avatar-mosquito-spray-blue-range',name:'Avatar Mosquito Spray Killer',pest:'Mosquitoes · Flies',icon:'shield',c1:'#0b1a33',c2:'#1f3d78',accent:'#5ec8ff',line:'Instant mosquito and flying insect killer spray that reaches the deepest corners of your house.',desc:'Instant-kill aerosol for mosquitoes and houseflies. (Sample copy — replace with approved product description.)',variants:['Spray — 400 ml', 'Spray — Lime fresh'],origin:'India',maker:'Add manufacturer name and address',usage:{WHERE:['Under beds', 'Behind sofas', 'Around curtains and cabinets'],HOW:['Close doors and windows', 'Spray towards corners and hiding spots', 'Leave the room for the time stated on the label']}},
 {id:'cockroach-spray',img:'cockroach-spray',banner:'avatar-cockroach-spray-red-banner-3',name:'Avatar Cockroach Spray Killer',pest:'Cockroaches',icon:'shield',c1:'#5a1a10',c2:'#c43a22',accent:'#ffd84d',line:'Kills hidden cockroaches that crawl into your kitchen and other corners.',desc:'Aerosol for cockroaches in cracks, drains and kitchen gaps. (Sample copy — replace with approved product description.)',variants:['Spray — 400 ml'],origin:'India',maker:'Add manufacturer name and address',usage:{WHERE:['Kitchen cabinets', 'Drain areas', 'Behind appliances'],HOW:['Spray directly into cracks and gaps', 'Keep food covered while spraying', 'Follow the label for re-application']}},
 {id:'flies-killer-chalk',img:'flies-killer-chalk',banner:'avatar-flies-killer-chalk-red',name:'Avatar Flies Killer Chalk',pest:'Flies',icon:'chalk',c1:'#8a1a0e',c2:'#e0451f',accent:'#ffe27a',line:'Household flies killer. Kills crawling insects.',desc:'Chalk for household pest paths. (Sample copy — replace with approved product description.)',variants:['Chalk — 1 unit'],origin:'India',maker:'Add manufacturer name and address',usage:{WHERE:['Window sills', 'Near the dustbin', 'Kitchen corners'],HOW:['Draw a line along the path', 'Keep out of reach of children']}},
 {id:'mosquito-coil',img:'mosquito-coil',banner:'avatar-mosquito-coil-vaporizer-set',name:'Avatar Mosquito Coil',pest:'Mosquitoes',icon:'shield',c1:'#2a1450',c2:'#5b2fa0',accent:'#c9a2ff',line:'Long-lasting protection from mosquitoes. Pack of 10 coils.',desc:'Mosquito coil with stand for rooms and verandas. (Sample copy — replace with approved product description.)',variants:['Coil — 10 coils'],origin:'India',maker:'Add manufacturer name and address',usage:{WHERE:['Well-ventilated rooms', 'Verandas'],HOW:['Place the coil on its stand', 'Light one end and let it smoulder', 'Keep away from children and flammables']}},
 {id:'mosquito-vaporizer',img:'mosquito-vaporizer',banner:'avatar-mosquito-vaporizer-orange-pack',name:'Avatar Liquid Vaporizer',pest:'Mosquitoes',icon:'shield',c1:'#ff8a3d',c2:'#c25a10',accent:'#ffd84d',line:'45 nights of protection. Fits all machines.',desc:'Liquid vaporizer refill and machine. (Sample copy — replace with approved product description.)',variants:['Refill — 45 nights'],origin:'India',maker:'Add manufacturer name and address',usage:{WHERE:['Bedrooms', 'Living rooms'],HOW:['Fit the refill into the machine', 'Plug in and switch on', 'Use as directed on the label']}},
 {id:'roach-gel',img:'roach-gel',banner:'avatar-household-range-banner-2',name:'HE Avatar Anti Roach Gel',pest:'Cockroaches',icon:'gel',c1:'#7a1a10',c2:'#d9381f',accent:'#ffd84d',line:'Power of pest control without any hassle. Effective. Safe. Easy.',desc:'A cockroach gel designed to be applied in cracks and corners where cockroaches travel. (Sample copy — replace with approved product description.)',variants:['Anti Roach Gel — Pack 1','Anti Roach Gel — Pack 2'],origin:'India',maker:'Add manufacturer name and address',usage:{WHERE:['Kitchen corners','Under the sink','Behind cabinets'],HOW:['Click the injection to dispense','Apply small dots in corners','Leave undisturbed'],WHEN:['Whenever cockroach activity is seen','Reapply as per label']}},
 {id:'gangster-racquet',img:'gangster-racquet',banner:'avatar-household-range-banner-1',name:'Gangster Mosquito Racquet',pest:'Mosquitoes · Flies',icon:'bat',c1:'#121212',c2:'#2d2d2d',accent:'#ffd84d',line:'Intelligently designed electric racquet with wide coverage.',desc:'Rechargeable electric racquet for mosquitoes and flies. (Sample copy — replace with approved product description.)',variants:['Racquet — 1 unit'],origin:'Add country of origin',maker:'Add manufacturer name and address',features:[['shield','Strong & durable','Add approved feature copy'],['bolt','Powerful','Add approved feature copy'],['battery','Long battery life','Add approved feature copy'],['light','LED light','Add approved feature copy']],usage:{USAGE:['Press and hold the safety switch','Swing the racquet near the insect','Release the switch after use'],CHARGING:['Plug in charger','Indicator shows charging','Unplug when full'],CAUTION:['Keep away from children','Do not touch the mesh','Do not use near flammables']}},
 {id:'chalk',img:'chalk',banner:'avatar-cockroach-ant-killer-chalk-banner',name:'HE Avatar Chalk',pest:'Cockroaches · Ants',icon:'chalk',c1:'#8a1a0e',c2:'#e0451f',accent:'#ffe27a',line:'Kills crawling insects.',desc:'Chalk used to draw lines along paths that crawling insects follow. (Sample copy — replace with approved product description.)',variants:['Chalk — 1 unit'],origin:'India',maker:'Add manufacturer name and address',usage:{WHERE:['Near the dustbin','Near the gas cylinder','In the sink area','In the cabinets'],HOW:['Draw a line along the path','Keep out of reach of children']}},
 {id:'rat-glue',img:'rat-glue',banner:'avatar-household-range-banner-1',name:'HE Avatar Rat Glue Pad',pest:'Rats',icon:'glue',c1:'#6a1a10',c2:'#c9361f',accent:'#ffd84d',line:'Non-toxic solution to capture rats and keep your home safe.',desc:'Glue pad placed along walls and runways to capture rats. (Sample copy — replace with approved product description.)',variants:['Glue Pad (Small)','Glue Pad (Large)'],origin:'India',maker:'Add manufacturer name and address',usage:{WHERE:['Near the cabinets','Near the gas cylinder','Under the fridge'],HOW:['Open the pad flat','Place along the wall','Check and replace regularly'],PRECAUTIONS:['Keep away from children and pets','Dispose of as per label']}},
 {id:'rat-cube',img:'rat-cube',banner:'avatar-household-range-banner-2',name:'HE Avatar Rat Cube',pest:'Rats',icon:'cube',c1:'#7a1a10',c2:'#d4381f',accent:'#ffd84d',line:'Keep dangerous rats away from your home.',desc:'Rat cube placed in corners where rats are active. Always follow the label. (Sample copy — replace with approved product description.)',variants:['Rat Cube — 1 pack'],origin:'India',maker:'Add manufacturer name and address',usage:{WHERE:['Near the cabinets','Near the gas cylinder','Under the fridge'],HOW:['Place in corners where rats travel','Keep out of reach of children']}}
];


const BLOG_TABS=['Mosquitoes','Cockroaches','Flies','Ants','Rats','Kitchen cleaning'];
const BLOGS=[
 {t:'Mosquitoes',h:'What keeps mosquitoes away? Best mosquito killer for home',img:'avatar-mosquito-spray-blue-banner',link:'products.html#household/mosquito-spray'},
 {t:'Mosquitoes',h:'Mosquitoes in India: how mosquito killer spray helps',img:'avatar-mosquito-spray-black-green',link:'products.html#household/mosquito-spray'},
 {t:'Mosquitoes',h:'Coil or liquid vaporizer: which is right for your bedroom?',img:'avatar-mosquito-coil-vaporizer-set',link:'products.html#household/mosquito-vaporizer'},
 {t:'Cockroaches',h:'Why cockroaches keep coming back to your kitchen',img:'avatar-cockroach-spray-red-banner-1',link:'products.html#household/cockroach-spray'},
 {t:'Cockroaches',h:'Gel, chalk or spray? Picking the right cockroach killer',img:'avatar-cockroach-ant-chalk-dark',link:'products.html#household/chalk'},
 {t:'Flies',h:'Keep flies away from food: simple habits that work',img:'avatar-flies-killer-chalk-fly',link:'products.html#household/flies-killer-chalk'},
 {t:'Ants',h:'Stop ant trails at the entry points',img:'avatar-cockroach-ant-chalk-bedbugs',link:'products.html#household/chalk'},
 {t:'Rats',h:'Signs of rats at home and how to place glue pads safely',img:'avatar-household-range-banner-1',link:'products.html#household/rat-glue'},
 {t:'Kitchen cleaning',h:'A monthly kitchen cleaning routine for a pest-free home',img:'avatar-household-range-green-banner',link:'products.html'}
];
const VID_TABS=['Home pest control solution','Product demos','Brand film'];
// Add a real video link in "url" (YouTube embed link, e.g. https://www.youtube.com/embed/VIDEO_ID)
const VIDEOS=[
 {t:'Home pest control solution',h:'Avatar Cockroach Spray: your home pest control',img:'avatar-cockroach-spray-red-banner-2',url:''},
 {t:'Home pest control solution',h:'Kill hidden cockroaches with Avatar chalk',img:'avatar-cockroach-ant-chalk-lion',url:''},
 {t:'Home pest control solution',h:'Keep mosquitoes away all night',img:'avatar-mosquito-vaporizer-45-nights',url:''},
 {t:'Product demos',h:'How to use Avatar Mosquito Spray Killer',img:'avatar-mosquito-spray-lime-green',url:''},
 {t:'Product demos',h:'How to use Avatar Flies Killer Chalk',img:'avatar-flies-killer-chalk-red',url:''},
 {t:'Product demos',h:'Using a mosquito racquet safely',img:'avatar-household-range-banner-2',url:''},
 {t:'Brand film',h:'Avatar: powerful protection for a safer home',img:'avatar-household-range-banner-1',url:''}
];
const TESTIMONIALS=[
 {n:'Sample customer name',t:'Replace this sample with a verified customer review. Add the name, city and rating exactly as given by the customer.'},
 {n:'Sample dealer name',t:'Replace this sample with verified dealer feedback about product quality, delivery or support.'},
 {n:'Sample retailer name',t:'Replace this sample with a verified retailer testimonial. Remove the "Sample" label once real feedback is added.'}
];
const FAQS=[
 ['Which products do you offer?','We offer the Avatar household pest-control range: mosquito and cockroach sprays, chalk, coils, liquid vaporizers, racquets, gels and rat control. Use the Our Products page to browse every product.'],
 ['How do I place an enquiry?','Click "Enquire" on any product card, or open the Enquiry page, choose a product, and send your details. Our team will respond with the information you need.'],
 ['Do you supply to dealers and retailers?','Yes — choose "B2B / Dealer" or "Retail" in the enquiry message, or call the numbers on the Contact page. (Update with your approved policy.)'],
 ['Is there a warranty on the products?','Warranty terms vary by brand and product. Please ask in your enquiry and we will confirm the terms. (Update with your approved policy.)'],
 ['How should I use household pest-control products safely?','Always read and follow the product label. Keep products away from children and pets, and store them as instructed.']
];

/* ---------- COMMON: nav, header, reveal, FAQ, totop ---------- */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
paintIcons();

// mobile nav
const burger=$('#burger'),mnav=$('#mnav');
if(burger&&mnav){burger.addEventListener('click',()=>{const o=mnav.classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.textContent=o?'×':'☰'});
  $$('a',mnav).forEach(a=>a.addEventListener('click',()=>{mnav.classList.remove('open');burger.textContent='☰'}))}

// header shadow + to-top
const header=$('.header'),totop=$('#totop');
addEventListener('scroll',()=>{header&&header.classList.toggle('scrolled',scrollY>20);totop&&totop.classList.toggle('show',scrollY>500)},{passive:true});
totop&&totop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

// reveal on scroll
function initReveal(root=document){
  const items=$$('.reveal:not(.in)',root);
  if(!('IntersectionObserver' in window)){items.forEach(i=>i.classList.add('in'));return}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  items.forEach(i=>io.observe(i));
}
initReveal();

// FAQ build + accordion (shared look: grey rows, + / - toggle)
function faqHTML(list){return list.map((f,i)=>`<div class="faq-item${i===0?' open':''}"><button class="faq-q" aria-expanded="${i===0}"><span>${f[0]}</span><span class="pl"></span></button><div class="faq-a"><p>${f[1]}</p></div></div>`).join('')}
const faqList=$('#faqList');
if(faqList)faqList.innerHTML=faqHTML(FAQS);
document.addEventListener('click',e=>{const b=e.target.closest('.faq-q');if(!b)return;const it=b.parentElement,list=it.parentElement;const open=!it.classList.contains('open');$$('.faq-item',list).forEach(x=>{x.classList.remove('open');$('.faq-q',x).setAttribute('aria-expanded',false)});it.classList.toggle('open',open);b.setAttribute('aria-expanded',open)});

// brand dropdown + footer lists
$$('[data-brand-links]').forEach(el=>{el.innerHTML=HOUSEHOLD.map(p=>`<a href="products.html#household/${p.id}">${p.name}</a>`).join('')});
$$('[data-house-li]').forEach(el=>{el.innerHTML=HOUSEHOLD.map(p=>`<li><a href="products.html#household/${p.id}">${p.name}</a></li>`).join('')});
const yr=$('#year');if(yr)yr.textContent=new Date().getFullYear();

/* ---------- SECTION 1 + 2: SLIDERS + ICON STRIP ---------- */
const slidesEl=$('#slides');
if(slidesEl){
  const hero=$('#hero'),strip=$('#iconRow'),dotsEl=$('#dots'),prog=$('#progress');
  slidesEl.innerHTML=SLIDES.map((b,i)=>`
   <a class="slide${i===0?' active':''}" href="${b.link}" aria-roledescription="slide" aria-label="${i+1} of ${SLIDES.length}: ${b.name}"${i===0?'':' tabindex="-1"'}>
     <img class="bgblur" src="images/photos/${b.img}.jpg" alt="" aria-hidden="true"${i<2?'':' loading="lazy"'}>
     <img class="bgimg" src="images/photos/${b.img}.jpg" alt="${b.name} banner"${i<2?'':' loading="lazy"'}>
     <span class="slide-cta">${b.name} ${icon('arrow')}</span></a>`).join('');
  const STRIP=[{id:'all',label:'All Products',icon:'shield'}].concat(PESTS.map(p=>({id:p.id,label:p.name,icon:p.icon})));
  strip.innerHTML=STRIP.map((p,i)=>`<button class="ico-btn${i===0?' on':''}" data-p="${p.id}" aria-label="Show ${p.label}">${icon(p.icon)}<span>${p.label}</span></button>`).join('');
  dotsEl.innerHTML=SLIDES.map((b,i)=>`<button class="${i===0?'on':''}" data-i="${i}" aria-label="Slide ${i+1}"></button>`).join('');
  paintIcons(hero);paintIcons(strip);
  const slides=$$('.slide',slidesEl),dots=$$('button',dotsEl),icos=$$('.ico-btn',strip);
  let cur=0,timer;
  function go(n){cur=(n+slides.length)%slides.length;
    slides.forEach((s,i)=>{s.classList.toggle('active',i===cur);s.tabIndex=i===cur?0:-1});
    dots.forEach((d,i)=>d.classList.toggle('on',i===cur));
    icos.forEach(d=>d.classList.toggle('on',d.dataset.p===SLIDES[cur].pest));
    prog.classList.remove('run');void prog.offsetWidth;prog.classList.add('run');restart()}
  function restart(){clearTimeout(timer);if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;timer=setTimeout(()=>go(cur+1),6000)}
  $('#prev').addEventListener('click',()=>go(cur-1));$('#next').addEventListener('click',()=>go(cur+1));
  dots.forEach(d=>d.addEventListener('click',()=>go(+d.dataset.i)));
  icos.forEach(d=>d.addEventListener('click',()=>{const k=SLIDES.findIndex(x=>x.pest===d.dataset.p);
    if(k>=0){hero.scrollIntoView({behavior:'smooth',block:'nearest'});go(k)}else location.href='products.html#household/rat-glue'}));
  hero.addEventListener('mouseenter',()=>{clearTimeout(timer);prog.style.animationPlayState='paused'});
  hero.addEventListener('mouseleave',()=>{prog.style.animationPlayState='running';restart()});
  let sx=0,moved=false;hero.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;moved=false},{passive:true});
  hero.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50){moved=true;go(cur+(dx<0?1:-1))}});
  slidesEl.addEventListener('click',e=>{if(moved){e.preventDefault();moved=false}});
  hero.addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)});
  go(0);
}

/* ---------- SECTION 7: TESTIMONIALS carousel ---------- */
const tmStage=$('#tmStage');
if(tmStage){
  tmStage.innerHTML=TESTIMONIALS.map((t,i)=>`<div class="tm${i===0?' on':''}"><span class="q">“</span><p>${t.t}</p><div class="who"><span>${t.n}</span><span class="stars">★★★★★</span></div></div>`).join('');
  const dotsT=$('#tmDots');dotsT.innerHTML=TESTIMONIALS.map((t,i)=>`<button class="${i===0?'on':''}" aria-label="Testimonial ${i+1}"></button>`).join('');
  const tms=$$('.tm',tmStage),tds=$$('button',dotsT);let ti=0,tt;
  const show=n=>{ti=(n+tms.length)%tms.length;tms.forEach((x,i)=>x.classList.toggle('on',i===ti));tds.forEach((x,i)=>x.classList.toggle('on',i===ti));clearInterval(tt);tt=setInterval(()=>show(ti+1),5500)};
  tds.forEach((d,i)=>d.addEventListener('click',()=>show(i)));show(0);
}

/* ---------- OUR PRODUCTS PAGE: household range + product pages ---------- */
const subRoot=$('#subRoot');
if(subRoot){
  const brandBanner=b=>`<div class="brand-banner" style="--c1:${b.c1};--c2:${b.c2};--accent:${b.accent}"><div><span class="eyebrow on-dark">${b.tag}</span><h2 style="margin-top:12px">${b.name}</h2><p>${b.blurb}</p></div>${icon(b.icon)}</div>`;

  function showHousehold(){
    const rs=$('#relSec');if(rs)rs.hidden=true;
    subRoot.innerHTML=`<div class="subpage on"><div class="sec-head center"><h1 class="sec-title bold-title">Our products</h1><p class="lead">Explore individual products and pick the right one for your pest.</p></div>
      <div class="choose" id="choose"></div></div>`;
    $('#choose').innerHTML=HOUSEHOLD.map((p,i)=>`<a class="hcard reveal in has-img" href="#household/${p.id}" style="--c1:${p.c1};--c2:${p.c2};--accent:${p.accent};transition-delay:${i*50}ms"><img class="himg" src="images/products/${p.img}.jpg" alt="${p.name}" loading="lazy"><h3>${p.name}</h3><p>${p.line}</p><span class="go">EXPLORE →</span></a>`).join('');
  }

  const prodFaqs=p=>{const w=(p.usage.WHERE||p.usage.USAGE||[]).join(', ').toLowerCase(),c=(p.usage.CAUTION||p.usage.PRECAUTIONS||[]).join('. ');return[
    [`Is ${p.name} effective against ${p.pest.replace(/·/g,'and').toLowerCase()}?`,`Yes, it is made for ${p.pest.replace(/·/g,'and').toLowerCase()}. Use it as directed on the label. (Sample copy — replace with approved answer.)`],
    [`Where should I use ${p.name}?`,w?`Recommended places: ${w}. (Sample copy — replace with approved answer.)`:'Use it where the pest is seen, as per the label. (Sample copy — replace with approved answer.)'],
    [`What precautions should I take when using ${p.name}?`,(c?c+'. ':'Keep out of reach of children and pets. ')+'Always follow the product label. (Sample copy — replace with approved answer.)']]};
  function showProduct(id){
    const p=HOUSEHOLD.find(x=>x.id===id);if(!p)return showHousehold();
    const pests=PESTS.filter(x=>x.recs.includes(id));
    const keys=Object.keys(p.usage);
    const kills=p.pest.split('·').map(s=>s.trim()).join(' & ').toUpperCase();
    const others=HOUSEHOLD.filter(x=>x.id!==id);
    const related=others.filter(x=>pests.some(z=>z.recs.includes(x.id))).concat(others).filter((x,i,arr)=>arr.indexOf(x)===i).slice(0,3);
    const stepIcon=(k,j)=>/WHERE/i.test(k)?`<span class="sq"><b></b></span>`:`<span class="ci">${j+1}</span>`;
    subRoot.innerHTML=`<div class="subpage on pdx">
      <a class="backlink" href="#household">⟵ <b>Go back to all products</b></a>
      <div class="crumbs"><a href="index.html">Home</a> › <a href="products.html">Products</a> › <b>${p.name}</b></div>
      <div class="pdx-hero" style="--c1:${p.c1};--c2:${p.c2};--accent:${p.accent}"><div class="pdx-shape"></div>
        <div class="pdx-copy"><h1>${p.name}</h1><p>${p.line}</p><a class="btn btn-leaf" href="enquiry.html?product=${encodeURIComponent(p.name)}">Enquire now ${icon('arrow')}</a></div>
        <img class="pdx-img" src="images/products/${p.img}.jpg" alt="${p.name}"></div>
      <div class="pdx-kill"><h2 class="bold-title">Kills ${kills}.</h2><p>${p.desc}</p></div>
      <hr class="pdx-hr">
      <div class="pdx-block"><h2 class="bold-title">Know your enemy</h2><p class="sub">Learn about the pests that infest your home and the diseases they spread.</p>
        ${pests.map(x=>`<div class="pdx-enemy"><div class="ylabel">${icon(x.icon)}<b>${x.name}</b></div><div><p>${x.text}</p><p class="small"><b>Diseases / risks:</b> ${x.diseases}<br><b>Strengths:</b> ${x.strength}<br><b>Weaknesses:</b> ${x.weak}</p></div></div>`).join('')}</div>
      ${p.features?`<div class="pdx-block"><h2 class="bold-title">Features</h2><div class="feats">${p.features.map(f=>`<div>${icon(f[0])}<b>${f[1]}</b>${f[2]}</div>`).join('')}</div></div>`:''}
      <div class="pdx-block"><h2 class="bold-title">Available for</h2><div class="pdx-avail">${p.variants.map(v=>`<div><img src="images/products/${p.img}.jpg" alt=""><span>${v}</span></div>`).join('')}</div></div>
      <div class="pdx-details"><h2 class="bold-title">Other details</h2><p>Country of origin: ${p.origin}</p><p>Manufacturer's address:</p><p class="addr">${p.maker}</p></div>
      <div class="pdx-usage"><h2 class="bold-title">Usage instructions</h2><p class="sub">Each enemy has its own strengths. And weaknesses. If you successfully lock the target, you can kill it.</p>
        <div class="ytabs" id="uTabs">${keys.map((k,i)=>`<button class="${i===0?'on':''}" data-k="${k}">${k}?</button>`).join('')}</div>
        <div class="upanels">${keys.map((k,i)=>`<div class="upanel${i===0?' on':''}" data-k="${k}">${p.usage[k].map((s,j)=>`<div class="ustep">${stepIcon(k,j)}<p>${s}</p></div>`).join('')}</div>`).join('')}</div></div>
      <p class="note">Sample content shown. Replace with the approved label text; always follow the official product label.</p>
      <div class="pdx-faq"><h2 class="bold-title">FAQ's</h2><p>Find answers to this product and all your pest control queries</p><button class="ybtn" id="faqToggle" aria-expanded="false" aria-controls="prodFaq">Explore</button><div class="faq-list" id="prodFaq" hidden>${faqHTML(prodFaqs(p))}</div></div></div>`;
    $('#uTabs').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('#uTabs button').forEach(x=>x.classList.toggle('on',x===b));$$('.upanel').forEach(x=>x.classList.toggle('on',x.dataset.k===b.dataset.k))});
    $('#faqToggle').addEventListener('click',e=>{const l=$('#prodFaq');l.hidden=!l.hidden;e.currentTarget.setAttribute('aria-expanded',!l.hidden);e.currentTarget.textContent=l.hidden?'Explore':'Close'});
    // related products render after blogs (placed in #relRoot)
    $('#relRoot').innerHTML=`<div class="wrap"><h2 class="bold-title center-t">Explore related products</h2><div class="relgrid">${related.map(r=>`<a class="relcard" href="#household/${r.id}"><div class="relimg"><img src="images/products/${r.img}.jpg" alt="${r.name}" loading="lazy"></div><h3>${r.name}</h3><p>${r.line}</p><span class="ybtn sm">Explore</span></a>`).join('')}</div></div>`;
    $('#relSec').hidden=false;
    paintIcons(subRoot);
  }

  function route(first){
    const h=decodeURIComponent(location.hash.slice(1)),[b,p]=h.split('/');
    if(b==='household'&&p)showProduct(p);else showHousehold();
    if(!first)scrollTo({top:0,behavior:'smooth'});
  }
  addEventListener('hashchange',()=>route(false));
  route(true);
}

/* ---------- ENQUIRY FORM ---------- */
const form=$('#enquiryForm');
if(form){
  const sel=$('#product');
  sel.innerHTML='<option value="">Select products</option>'+
    HOUSEHOLD.map(p=>`<option>${p.name}</option>`).join('')+'<option>More than one product</option>';
  const qp=new URLSearchParams(location.search).get('product');
  if(qp){let o=[...sel.options].find(x=>x.value===qp||x.textContent===qp||qp.toLowerCase().startsWith(x.textContent.toLowerCase()+' '));if(!o){o=new Option(qp,qp);sel.add(o)}sel.value=o.value}
  form.addEventListener('submit',e=>{
    e.preventDefault();let ok=true;
    $$('.field',form).forEach(f=>{const c=$('.control',f);if(!c)return;const bad=c.required&&!c.value.trim()||c.type==='email'&&c.value&&!/^\S+@\S+\.\S+$/.test(c.value);f.classList.toggle('bad',!!bad);if(bad)ok=false});
    if(!$('#robot').checked)ok=false,$('#robotErr').style.display='block';else $('#robotErr').style.display='none';
    if(!ok)return;
    const d=new FormData(form);
    const text=['HE AVATAR PRODUCT ENQUIRY','-------------------------',`Name: ${d.get('name')}`,`Email: ${d.get('email')}`,`Phone: ${d.get('phone')||'Not provided'}`,`City: ${d.get('city')||'Not provided'}`,`Product: ${d.get('product')||'Not selected'}`,'','Message:',d.get('message')||'—'].join('\n');
    $('#summary').value=text;$('#result').classList.add('show');$('#result').scrollIntoView({behavior:'smooth',block:'nearest'});
  });
  $('#copyBtn').addEventListener('click',async()=>{const s=$('#copyStatus');try{await navigator.clipboard.writeText($('#summary').value);s.textContent='Enquiry summary copied.'}catch(_){$('#summary').select();s.textContent='Select and copy the text manually.'}});
}

/* ---------- HOME: CHOOSE / EXPLORE / KNOW YOUR ENEMY / BLOGS / VIDEOS ---------- */
const homeChoose=$('#homeChoose');
if(homeChoose){
  const card=(p,i,big)=>`<a class="hcard${big?' big':''}${p.img?' has-img':''}" href="products.html#household/${p.id}" style="--c1:${p.c1};--c2:${p.c2};--accent:${p.accent};transition-delay:${i*60}ms"><img class="himg" src="images/products/${p.img}.jpg" alt="${p.name}" loading="lazy"><h3>${p.name}</h3><p>${p.line}</p><span class="go">KNOW MORE →</span></a>`;
  homeChoose.innerHTML=HOUSEHOLD.slice(0,2).map((p,i)=>card(p,i,true)).join('');
  $('#homeRange').innerHTML=HOUSEHOLD.slice(2).map((p,i)=>card(p,i,false)).join('');
  const stage=$('#enemyStage'),tiles=$('#homePestWheel');
  tiles.innerHTML=PESTS.map(p=>`<button class="ptile" data-id="${p.id}">${icon(p.icon)}<span>${p.name}</span></button>`).join('');
  const pick=id=>{const p=PESTS.find(x=>x.id===id);$$('.ptile',tiles).forEach(x=>x.classList.toggle('on',x.dataset.id===id));
    stage.innerHTML=`<div class="xl"><div class="xlab">Diseases</div><p>${p.diseases}</p><div class="xlab" style="margin-top:34px">Strengths</div><p>${p.strength}</p></div>
      <div class="xc" key="${id}"><svg class="rings" viewBox="0 0 240 240" aria-hidden="true"><circle class="r1" cx="120" cy="120" r="112"/><circle class="r2" cx="120" cy="120" r="98"/><path class="cross" d="M120 36v26M120 178v26M36 120h26M178 120h26"/></svg><span class="xpest">${icon(p.icon)}</span></div>
      <div class="xr"><div class="xlab">Weaknesses</div><p>${p.weak}</p><div class="xprods">${p.recs.map(r=>{const h=HOUSEHOLD.find(x=>x.id===r);return `<a href="products.html#household/${r}"><img src="images/products/${h.img}.jpg" alt=""><span>${h.name} ›</span></a>`}).join('')}</div></div>`;paintIcons(stage)};
  $$('.ptile',tiles).forEach(x=>x.addEventListener('click',()=>pick(x.dataset.id)));pick('mosquitoes');paintIcons(tiles);

}

/* ---------- SHARED: BLOGS + VIDEOS ---------- */
{
  const tabs=(el,list,cb)=>{el.innerHTML=list.map((t,i)=>`<button role="tab" class="${i===0?'on':''}" data-t="${t}">${t}</button>`).join('');
    el.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('button',el).forEach(x=>x.classList.toggle('on',x===b));cb(b.dataset.t)})};
  if($('#blogGrid')){
  let bt=BLOG_TABS.find(t=>BLOGS.some(b=>b.t===t)),shown=6;
  const drawBlogs=()=>{const l=BLOGS.filter(b=>b.t===bt);$('#blogGrid').innerHTML=l.slice(0,shown).map(b=>`<a class="mcard" href="${b.link}"><img src="images/photos/${b.img}.jpg" alt="" loading="lazy"><div class="mshade"></div><h3>${b.h}</h3><span class="mmore">Know more <i></i></span></a>`).join('')||'<p class="empty-note">Posts coming soon.</p>';$('#blogMore').hidden=l.length<=shown};
  tabs($('#blogTabs'),BLOG_TABS,t=>{bt=t;shown=6;drawBlogs()});$('#blogMore').addEventListener('click',()=>{shown+=6;drawBlogs()});drawBlogs();
  }
  if($('#vidGrid')){
  const drawVids=t=>{$('#vidGrid').innerHTML=VIDEOS.map((v,i)=>({v,i})).filter(x=>x.v.t===t).map(({v,i})=>`<button class="mcard vcard" data-i="${i}" aria-label="Play: ${v.h}"><img src="images/photos/${v.img}.jpg" alt="" loading="lazy"><div class="mshade"></div><h3>${v.h}</h3><span class="play"><svg viewBox="0 0 24 24"><path d="M9 7l8 5-8 5z"/></svg></span></button>`).join('')};
  tabs($('#vidTabs'),VID_TABS,drawVids);drawVids(VID_TABS[0]);
  const vm=$('#vmodal'),vf=$('#vframe');
  const closeV=()=>{vm.hidden=true;vf.innerHTML=''};
  $('#vidGrid').addEventListener('click',e=>{const c=e.target.closest('.vcard');if(!c)return;const v=VIDEOS[+c.dataset.i];
    vf.innerHTML=v.url?`<iframe src="${v.url}" title="${v.h}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`:`<div class="vsoon"><b>${v.h}</b><p>Video coming soon. Add the video link in <code>VIDEOS</code> in script.js.</p></div>`;vm.hidden=false});
  $('#vclose').addEventListener('click',closeV);vm.addEventListener('click',e=>{if(e.target===vm)closeV()});addEventListener('keydown',e=>{if(e.key==='Escape')closeV()});
  }
}
