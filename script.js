/* ===== CONFIG ===== */
const CFG={
 lines:["971558911522","971525690137"], // used only inside links; never printed on the page
 formEndpoint:"", // e.g. a Formspree/Getform URL or your own server endpoint. Required for non-WhatsApp submissions.
 gaId:"", siteUrl:"",
 photos:{ // add your own photo URLs or file names (e.g. "images/hero.jpg"). Leave "" to keep the illustration.
  hero:"",
  cats:["","","","",""] // order: Battery & Emergency, Maintenance & Servicing, Mechanical Repairs, Tyre Services, Air Conditioning
 }
};
const WA_MSG="Hello Car Mechanic Onsite, I would like to book a car mechanic. Please share your available services and appointment details.";
const CATS=["Battery & Emergency Assistance","Car Maintenance & Servicing","Mechanical Repairs","Tyre Services","Air Conditioning Services"];
const S=[ // slug, name, cat, description, extra paragraph
["battery-replacement-onsite","Battery Replacement Onsite",0,"Convenient onsite car battery replacement and battery inspection at home, office or roadside.","We test the battery and charging system first, so a new battery is recommended only when it is needed. Share your vehicle details when you book so a compatible battery can be arranged."],
["jumpstart-onsite","Jumpstart Onsite",0,"Onsite jumpstart assistance for vehicles experiencing starting problems due to discharged batteries.","A flat battery is often just the first sign. After getting you started we can check whether the battery is ageing or something is draining it overnight."],
["lithium-battery-replacement-onsite","Lithium Battery Replacement Onsite",0,"Professional inspection and replacement of compatible lithium batteries for supported vehicles.","Lithium batteries are not suitable for every vehicle. We check compatibility with your car before recommending a replacement."],
["fuel-top-up-onsite","Fuel Top Up Onsite",0,"Convenient fuel delivery assistance where legally permitted and available.","If you run low away from a station, contact us with your location and fuel type. Availability depends on local rules and the situation."],
["oil-change-onsite","Oil Change Onsite",1,"Onsite engine oil replacement, oil filter replacement and engine oil level inspection.","Using the grade your manufacturer recommends matters. Tell us your make, model and year and we will confirm the right oil and filter."],
["minor-car-service-onsite","Minor Car Service Onsite",1,"Routine vehicle maintenance, oil and filter checks and essential vehicle inspections.","A good fit for regular upkeep between larger services, with a quick look at the essentials that wear first."],
["major-car-service-onsite","Major Car Service Onsite",1,"Comprehensive vehicle inspection and scheduled maintenance according to vehicle manufacturer recommendations.","We follow your manufacturer’s schedule for your vehicle. Some items may need workshop equipment, and we will tell you if so."],
["car-maintenance-onsite","Car Maintenance Onsite",1,"Preventive maintenance, routine vehicle checks and general automotive maintenance.","Preventive checks catch small problems early. Ask us what your car is due for and we will advise."],
["all-fluids-top-up-onsite","All Fluids Top Up Onsite",1,"Inspection and top-up of appropriate vehicle fluids, including coolant, washer fluid and other manufacturer-recommended fluids.","Fluids drop for a reason. If a level keeps falling we will point out a possible leak instead of just topping up."],
["brake-fluid-top-up-onsite","Brake Fluid Top Up Onsite",1,"Brake fluid level inspection, appropriate top-up and brake system checks.","A falling brake fluid level can mean worn pads or a leak. We investigate before simply adding fluid, because braking safety comes first."],
["car-repair-onsite","Car Repair Onsite",2,"Professional onsite troubleshooting and mechanical repairs for suitable vehicle problems.","Describe the symptoms when you book. We will tell you what can be fixed at your location and what needs a workshop."],
["mobile-mechanic-onsite","Mobile Mechanic Onsite",2,"Convenient mobile mechanic services at customer homes, offices and accessible roadside locations.","Our mechanic comes to your home, office or an accessible roadside spot, so you can carry on with your day."],
["brake-pads-replacement-onsite","Brake Pads Replacement Onsite",2,"Brake pad inspection and replacement with appropriate brake performance and safety checks.","Squealing, grinding or a longer stopping distance are common signs of worn pads. We check performance after the work."],
["tyre-replacement-onsite","Tyre Replacement Onsite",3,"Convenient tyre inspection and replacement at the customer’s location.","We inspect the tyres first and help you choose the right size for your vehicle."],
["tyre-puncture-repair-onsite","Tyre Puncture Repair Onsite",3,"Onsite tyre inspection and puncture repair for tyres that are safe and suitable for repair.","Not every puncture can be repaired safely. If a tyre is not suitable, we will say so and suggest replacement."],
["ac-gas-filling-onsite","AC Gas Filling Onsite",4,"Vehicle AC refrigerant inspection, correct refrigerant filling and cooling performance checks.","Weak cooling in Dubai’s heat is more than inconvenient. We check the refrigerant and test cooling afterwards."],
["car-ac-repair-onsite","Car AC Repair Onsite",4,"Professional diagnosis and repair of car air-conditioning issues, including cooling problems and AC component faults.","If gas refilling is not the cause, we diagnose further. Some AC component repairs need workshop equipment, and we will let you know."]
];
const AREAS=[
["Dubai","Home, office and roadside car repair and maintenance across Dubai. Book a service for a time and place that suits your day."],
["Sharjah","Residents and workers in Sharjah can arrange battery, tyre, AC and routine maintenance help without driving to a workshop."],
["Abu Dhabi","Onsite servicing for homes, offices and accessible roadside locations in Abu Dhabi, so you can carry on with your day."],
["Al Ain","Convenient mobile mechanic help in Al Ain for everyday maintenance, battery problems, tyres and AC concerns."],
["Ras Al Khaimah","Message us your location in Ras Al Khaimah and we will confirm what can be done onsite and when."],
["Umm Al Quwain","Car repair and maintenance can come to you in Umm Al Quwain. Share your vehicle details and location to book."],
["Fujairah","Mobile mechanic assistance in Fujairah for routine servicing and common breakdown problems, where accessible."],
["Ajman","Residents and businesses in Ajman can book battery, oil change, tyre and AC services at their own location."]];
const WHY=["Convenient Onsite Services","Mobile Mechanic Assistance","Complete Car Maintenance","Professional Automotive Solutions","Convenient Appointment Booking","Clear Customer Communication","Home and Office Service Options","Multiple Car Services Under One Roof"];
const POLICY="Some complex repairs require workshop equipment or vehicle transportation, so not every job can be completed onsite. We will tell you honestly what is possible at your location before any work begins.";

/* ===== helpers ===== */
const $=s=>document.querySelector(s),esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ICW='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.2z"/></svg>';
const ICC='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.6 3.6a1 1 0 0 1-.25 1z"/></svg>';
const waLink=(i,m)=>"https://wa.me/"+CFG.lines[i]+"?text="+encodeURIComponent(m||WA_MSG);
const telLink=i=>"tel:+"+CFG.lines[i];
const callDD=(c)=>`<details class="dd"><summary class="btn ${c||""}" aria-label="Call Now, choose a line">${ICC}<span>Call Now</span></summary><div class="menu"><a href="${telLink(0)}">${ICC}Call line 1</a><a href="${telLink(1)}">${ICC}Call line 2</a></div></details>`;
const waDD=(c,m)=>`<details class="dd"><summary class="btn ${c||"wa"}" aria-label="WhatsApp Us, choose a line">${ICW}<span>WhatsApp Us</span></summary><div class="menu"><a href="${waLink(0,m)}" target="_blank" rel="noopener">${ICW}WhatsApp line 1</a><a href="${waLink(1,m)}" target="_blank" rel="noopener">${ICW}WhatsApp line 2</a></div></details>`;
const ctas=()=>`<div class="cta"><a class="btn" href="#book">Book a Mechanic</a>${callDD("sk")}${waDD("wa")}</div>`;

/* ===== illustrations (inline SVG, no external images) ===== */
const BG='<rect width="200" height="120" fill="#e8f5fc"/><circle cx="165" cy="22" r="34" fill="#c9e8f7"/>';
const ART=[
 BG+'<rect x="55" y="38" width="90" height="56" rx="8" fill="#14283f"/><rect x="72" y="28" width="14" height="10" fill="#14283f"/><rect x="114" y="28" width="14" height="10" fill="#14283f"/><path d="M106 48 82 70h14l-4 18 26-24h-14z" fill="#89cff0"/>',
 BG+'<path d="M100 18C100 18 66 58 66 78a34 34 0 0 0 68 0C134 58 100 18 100 18z" fill="#14283f"/><path d="M84 82a16 16 0 0 0 14 14" stroke="#89cfdf" stroke-width="5" fill="none" stroke-linecap="round"/>',
 BG+'<circle cx="100" cy="60" r="32" fill="none" stroke="#14283f" stroke-width="16" stroke-dasharray="11 8.5"/><circle cx="100" cy="60" r="30" fill="#14283f"/><circle cx="100" cy="60" r="12" fill="#89cfdf"/>',
 BG+'<circle cx="100" cy="60" r="40" fill="#14283f"/><circle cx="100" cy="60" r="26" fill="#89cfdf"/><circle cx="100" cy="60" r="9" fill="#14283f"/><g stroke="#14283f" stroke-width="4"><path d="M100 34v52M74 60h52M82 42l36 36M118 42 82 78"/></g>',
 BG+'<g stroke="#14283f" stroke-width="7" stroke-linecap="round"><path d="M100 24v72M68 42l64 36M132 42 68 78"/></g><g stroke="#89cfdf" stroke-width="4" stroke-linecap="round"><path d="M92 30l8 8 8-8M92 90l8-8 8 8"/></g>'];
const art=(i,l)=>CFG.photos.cats[i]?`<img class="art" src="${esc(CFG.photos.cats[i])}" alt="${esc(l)}" loading="lazy" width="600" height="360" style="border-radius:0">`:`<svg class="art" viewBox="0 0 200 120" role="img" aria-label="${esc(l)}" style="border-radius:0">${ART[i].replace(/#89cfdf/g,"#89cff0")}</svg>`;
const heroArt=CFG.photos.hero?`<img class="art hero-img" src="${esc(CFG.photos.hero)}" alt="Mobile car mechanic servicing a car at a customer’s location" width="840" height="600">`:`<svg class="art" viewBox="0 0 420 300" role="img" aria-label="Illustration of a mobile mechanic servicing a car at a customer’s location" style="background:#e8f5fc;border:3px solid #89cff0"><circle cx="330" cy="60" r="46" fill="#c9e8f7"/><rect y="236" width="420" height="64" fill="#cfe9f7"/><path d="M40 200l24-52c4-8 12-14 22-14h120c10 0 18 5 24 12l30 36 30 8c10 3 16 11 16 20v16H40z" fill="#14283f"/><path d="M92 146h60l-4 36H78zM164 146h40l22 36h-62z" fill="#89cff0"/><circle cx="110" cy="222" r="26" fill="#14283f" stroke="#fff" stroke-width="6"/><circle cx="110" cy="222" r="10" fill="#89cff0"/><circle cx="258" cy="222" r="26" fill="#14283f" stroke="#fff" stroke-width="6"/><circle cx="258" cy="222" r="10" fill="#89cff0"/><path d="M150 134 142 120" stroke="#14283f" stroke-width="6"/><rect x="300" y="154" width="14" height="64" rx="7" fill="#14283f"/><circle cx="307" cy="136" r="15" fill="#f1c9a5"/><path d="M293 132a14 14 0 0 1 28 0z" fill="#89cff0"/><rect x="292" y="160" width="30" height="50" rx="10" fill="#5bb6e3"/><rect x="296" y="206" width="9" height="32" fill="#14283f"/><rect x="309" y="206" width="9" height="32" fill="#14283f"/><path d="M290 172 270 156" stroke="#5bb6e3" stroke-width="9" stroke-linecap="round"/><path d="M264 150l-8-8" stroke="#14283f" stroke-width="5" stroke-linecap="round"/><rect x="334" y="214" width="42" height="24" rx="4" fill="#14283f"/><path d="M345 214v-6h20v6" stroke="#14283f" stroke-width="4" fill="none"/></svg>`;

/* ===== views ===== */
const trust="Car Mechanic Onsite is a professional mobile car mechanic service in Dubai. We bring repair and maintenance to your home, office or an accessible roadside location, and we explain what is needed before work starts.";
function card(x){const cat=CATS[x[2]];return `<article class="card" data-c="${x[2]}">${art(x[2],x[1]+" illustration")}<div class="cb"><span class="pill">${esc(cat)}</span><h3>${esc(x[1])}</h3><p>${esc(x[3])}</p><div class="row"><a class="btn sm" href="#${x[0]}" aria-label="Learn more about ${esc(x[1])}">Learn More</a><a class="btn sm wa" href="${waLink(0,"Hello Car Mechanic Onsite, I would like to enquire about "+x[1]+".")}" target="_blank" rel="noopener" aria-label="WhatsApp enquiry for ${esc(x[1])}">${ICW}WhatsApp</a></div></div></article>`}
let FILTER=-1;
function grid(){return `<div class="grid" id="sg">${S.filter(x=>FILTER<0||x[2]===FILTER).map(card).join("")}</div>`}
function filters(){return `<div class="fl" role="group" aria-label="Filter services by category"><button data-f="-1" aria-pressed="${FILTER<0}">All services</button>${CATS.map((c,i)=>`<button data-f="${i}" aria-pressed="${FILTER===i}">${c}</button>`).join("")}</div>`}
const hero=(h,p,x)=>`<section class="hero"><div class="wrap"><div class="hg"><div>${x||""}<h1>${h}</h1><p>${p}</p>${ctas()}</div>${x===undefined?"":""}<div>${heroArt}</div></div></div></section>`;
const head=(h,p,c)=>`<section class="hero"><div class="wrap">${c||""}<h1>${h}</h1><p>${p}</p>${ctas()}</div></section>`;
function home(){return `<section class="hero"><div class="wrap"><div class="hg"><div><span class="tag">Professional Car Care at Your Doorstep.</span><h1>Professional Onsite Car Mechanic & Complete Vehicle Maintenance Services in Dubai</h1><p>Looking for a reliable car mechanic at your doorstep? Car Mechanic Onsite provides professional mobile car repair, battery replacement, jumpstart, oil changes, tyre services, AC repair and complete vehicle maintenance at your home, office or convenient location across Dubai.</p>${ctas()}</div><div>${heroArt}</div></div></div></section>
<section class="sec"><div class="wrap"><h2>Expert mechanics, reliable service, wherever you are</h2><p>${trust}</p><p class="note">${POLICY}</p></div></section>
<section class="sec alt"><div class="wrap"><h2>Our onsite car services</h2><p>All 17 services, grouped into five categories.</p>${filters()}${grid()}</div></section>
<section class="sec"><div class="wrap"><h2>Why choose us</h2><div class="grid">${WHY.map(w=>`<div class="card pad"><h3 style="margin:0">${w}</h3></div>`).join("")}</div></div></section>
${how()}
<section class="sec"><div class="wrap"><h2>Areas we serve in the UAE</h2><p>We serve customers across these emirates.</p><div class="row" style="margin:1rem 0">${AREAS.map(a=>`<a class="pill" href="#areas">${a[0]}</a>`).join("")}</div></div></section>
<section class="sec alt"><div class="wrap"><h2>Book a mechanic</h2>${form()}</div></section>`}
function how(){return `<section class="sec alt"><div class="wrap"><h2>How our service works</h2><div class="steps"><div><h3>Contact us</h3><p>Call or WhatsApp the business.</p></div><div><h3>Select your service</h3><p>Explain your vehicle problem and choose the service you need.</p></div><div><h3>Book an appointment</h3><p>Share your location and preferred time.</p></div><div><h3>Get your car serviced</h3><p>A mechanic attends the agreed location and performs the service where feasible.</p></div></div></div></section>`}
function about(){return head("About Car Mechanic Onsite","Convenient mobile car mechanic and vehicle maintenance services across our UAE coverage areas.")+`<section class="sec"><div class="wrap"><p>${trust}</p><h2>What you can expect</h2><ul class="ck"><li>Convenient onsite services</li><li>Professional automotive assistance</li><li>Complete vehicle maintenance solutions</li><li>Customer-focused service</li><li>Convenient booking options</li><li>Home, office and roadside assistance where available</li></ul><p class="note">${POLICY}</p><a class="btn" href="#book">Book a Mechanic</a></div></section>`}
function services(){return head("All Onsite Car Services in Dubai","Battery, servicing, repairs, tyres and air conditioning, at your location.")+`<section class="sec"><div class="wrap">${filters()}${grid()}</div></section>`}
function svc(x){const rel=S.filter(y=>y[2]===x[2]&&y[0]!==x[0]).concat(S.filter(y=>y[2]!==x[2])).slice(0,4);
return head(esc(x[1])+" in Dubai",esc(x[3]),`<div class="crumb"><a href="#home">Home</a> / <a href="#services">Services</a> / ${esc(x[1])}</div>`)+`<section class="sec"><div class="wrap"><div class="hg"><div><h2>About this service</h2><p>${esc(x[4])}</p><p class="note">${POLICY}</p><h3>Category</h3><p>${esc(CATS[x[2]])}</p><h3>Where we work</h3><p>Home, office and accessible roadside locations across our service areas. <a href="#areas">See service areas</a>.</p><div class="cta"><a class="btn" href="#book">Book a Mechanic</a>${waDD("wa","Hello Car Mechanic Onsite, I would like to enquire about "+x[1]+".")}</div></div><div>${art(x[2],x[1]+" illustration").replace('style="border-radius:0"','')}</div></div><h2 style="margin-top:2.5rem">Related services</h2><ul class="ck">${rel.map(y=>`<li><a href="#${y[0]}">${esc(y[1])}</a></li>`).join("")}</ul></div></section>`}
function areas(){return head("Car Mechanic Service Areas in the UAE","Onsite repair and maintenance across these emirates.")+`<section class="sec"><div class="wrap"><div class="ar">${AREAS.map(a=>`<div><h3>${a[0]}</h3><p>${a[1]}</p></div>`).join("")}</div><p>Not sure whether we cover your exact spot? Message us with your location.</p></div></section>`}
function contact(){return head("Contact Car Mechanic Onsite","Call, WhatsApp or send a booking request. We serve customers across the UAE.")+`<section class="sec"><div class="wrap"><h2>Reach us</h2><p>Choose the option that suits you.</p><div class="cta">${callDD("sk")}${waDD("wa")}<a class="btn" href="#book">Book a Mechanic</a></div><h2 style="margin-top:2.5rem">Send an enquiry</h2>${form()}</div></section>`}
function book(){return head("Book a Mechanic in Dubai","Tell us about your car and where it is. We will confirm your appointment.")+`<section class="sec"><div class="wrap">${form()}<p class="note">${POLICY}</p></div></section>`}
function privacy(){return head("Privacy Policy","How Car Mechanic Onsite handles the information you share with us.")+`<section class="sec"><div class="wrap"><h2>Information we collect</h2><p>When you submit the booking form we collect your name, contact number, vehicle details, service location, requested service and preferred appointment time.</p><h2>How we use it</h2><p>We use this information only to respond to your enquiry and to provide the service you request. We do not sell your personal information.</p><h2>Contact</h2><p>Questions about this policy can be sent through our <a href="#contact">contact page</a>. Have this text reviewed and replaced with your final policy before launch.</p></div></section>`}
function form(){const o=S.map(x=>`<option>${esc(x[1])}</option>`).join("");
const F=(id,l,t,req,x)=>`<div class="f ${x||""}"><label for="${id}">${l}${req?' <i aria-hidden="true">*</i>':""}</label><input id="${id}" name="${id}" type="${t}" ${req?"required":""}><span class="err" id="e-${id}"></span></div>`;
return `<form class="bf" novalidate>${F("name","Full name","text",1)}${F("phone","Contact number","tel",1)}${F("make","Vehicle make","text",1)}${F("model","Vehicle model","text",1)}${F("year","Vehicle year","text",1)}
<div class="f"><label for="service">Required service <i aria-hidden="true">*</i></label><select id="service" name="service" required><option value="">Choose a service</option>${o}</select><span class="err" id="e-service"></span></div>
<div class="f w"><label for="problem">Vehicle problem description <i aria-hidden="true">*</i></label><textarea id="problem" name="problem" rows="3" required></textarea><span class="err" id="e-problem"></span></div>
${F("location","Service location (area and building or street)","text",1,"w")}${F("date","Preferred appointment date","date",1)}${F("time","Preferred appointment time","time",1)}
<div class="f w"><label for="message">Additional message</label><textarea id="message" name="message" rows="2"></textarea></div>
<div class="f w"><div class="row"><button class="btn" type="submit" data-m="form">Send request</button><button class="btn wa" type="submit" data-m="0">${ICW}Book on WhatsApp (line 1)</button><button class="btn wa" type="submit" data-m="1">${ICW}Book on WhatsApp (line 2)</button></div><p class="note" style="margin:.8rem 0 0">“Send request” submits to the business’s form service once it is configured. The WhatsApp buttons open a pre-written message that is sent when you press Send in WhatsApp.</p></div>
<div id="ok" role="status" tabindex="-1"></div></form>`}

const R={home:[home,"Car Mechanic Onsite Dubai | Mobile Car Repair & Maintenance Services","Car Mechanic Onsite provides professional mobile car repair and maintenance services in Dubai. Book onsite battery replacement, jumpstart, oil change, tyre repair, AC services, brake replacement and complete vehicle servicing."],
about:[about,"About Us | Car Mechanic Onsite Dubai","Learn about Car Mechanic Onsite, a professional mobile car mechanic and vehicle maintenance service in Dubai."],
services:[services,"All Onsite Car Services Dubai | Car Mechanic Onsite","Browse 17 onsite car services in Dubai: battery, jumpstart, servicing, repairs, tyres and AC."],
areas:[areas,"UAE Service Areas | Mobile Car Mechanic","Mobile car mechanic coverage across Dubai, Sharjah, Abu Dhabi, Al Ain, Ras Al Khaimah, Umm Al Quwain, Fujairah and Ajman."],
contact:[contact,"Contact Car Mechanic Onsite Dubai","Call, WhatsApp or send an enquiry to Car Mechanic Onsite, your mobile car mechanic in Dubai."],
book:[book,"Book a Mobile Car Mechanic in Dubai | Car Mechanic Onsite","Book a mobile car mechanic in Dubai. Share your vehicle details, location and preferred time."],
privacy:[privacy,"Privacy Policy | Car Mechanic Onsite","How Car Mechanic Onsite collects and uses your information."]};
S.forEach(x=>R[x[0]]=[()=>svc(x),x[1]+" Dubai | Car Mechanic Onsite",x[3]+" Available across Dubai."]);

function meta(t,d,k){document.title=t;document.querySelector('meta[name=description]').content=d;document.querySelector('meta[property="og:title"]').content=t;
let c=document.querySelector('link[rel=canonical]');if(CFG.siteUrl){if(!c){c=document.createElement("link");c.rel="canonical";document.head.appendChild(c)}c.href=CFG.siteUrl+"#"+k}}
function route(){const k=location.hash.slice(1)||"home",key=R[k]?k:"home",r=R[key];
$("#app").innerHTML=r[0]();meta(r[1],r[2],key);
document.querySelectorAll("nav>a").forEach(a=>a.getAttribute("href")==="#"+key?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current"));
$("#nav").classList.remove("open");$("#mb").setAttribute("aria-expanded","false");window.scrollTo(0,0);bind()}
function bind(){
document.querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{FILTER=+b.dataset.f;document.querySelectorAll("[data-f]").forEach(x=>x.setAttribute("aria-pressed",+x.dataset.f===FILTER));$("#sg").outerHTML=grid()});
const f=document.querySelector("form.bf");if(!f)return;let mode="form";
f.date.min=new Date().toISOString().slice(0,10);
f.querySelectorAll("button[type=submit]").forEach(b=>b.onclick=()=>mode=b.dataset.m);
f.addEventListener("submit",async e=>{e.preventDefault();let bad=null;
["name","phone","make","model","year","service","problem","location","date","time"].forEach(id=>{const el=f[id],er=f.querySelector("#e-"+id),v=el.value.trim();let m="";
if(!v)m="This field is required.";else if(id==="phone"&&!/^[+\d][\d\s()-]{7,}$/.test(v))m="Enter a valid contact number.";else if(id==="year"&&!/^(19|20)\d{2}$/.test(v))m="Enter a four-digit year.";
er.textContent=m;el.setAttribute("aria-invalid",m?"true":"false");if(m&&!bad)bad=el});
if(bad){bad.focus();return}
const d={};new FormData(f).forEach((v,k)=>d[k]=v);
const msg=`Hello Car Mechanic Onsite, I would like to book a mechanic.\nName: ${d.name}\nContact: ${d.phone}\nVehicle: ${d.year} ${d.make} ${d.model}\nService: ${d.service}\nProblem: ${d.problem}\nLocation: ${d.location}\nPreferred: ${d.date} ${d.time}\nNote: ${d.message||"-"}`;
const ok=f.querySelector("#ok");ok.style.display="block";
if(mode==="form"){
 if(!CFG.formEndpoint){ok.innerHTML="<strong>Request not sent.</strong> Online form submission is not connected yet. Please use one of the WhatsApp buttons to send your booking now.";ok.focus();return}
 ok.textContent="Sending your request…";
 try{const r=await fetch(CFG.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)});
  if(!r.ok)throw 0;ok.innerHTML="<strong>Thank you, "+esc(d.name)+".</strong> Your request has been received. We will contact you to confirm your appointment.";f.reset()}
 catch(_){ok.innerHTML="<strong>We could not send your request.</strong> Please try again, or send it on WhatsApp instead."}
}else{window.open(waLink(+mode,msg),"_blank","noopener");ok.innerHTML="<strong>WhatsApp is opening with your booking details.</strong> Your request is sent when you press Send in WhatsApp."}
ok.focus()})}

/* ===== chrome ===== */
const menu=CATS.map((c,i)=>`<b>${c}</b>`+S.filter(x=>x[2]===i).map(x=>`<a href="#${x[0]}">${x[1]}</a>`).join("")).join("");
$("#nav").innerHTML=`<a href="#home">Home</a><a href="#about">About Us</a><div class="dm"><button type="button" aria-haspopup="true">Services ▾</button><div class="dmm"><a href="#services"><strong>All Services</strong></a>${menu}</div></div><a href="#areas">Service Areas</a><a href="#contact">Contact Us</a><a href="#book">Book Now</a>`;
$("#hc").innerHTML=callDD("sk sm")+waDD("wa sm");
$("#stk").innerHTML=callDD("sk sm")+waDD("wa sm")+`<a class="btn sm" href="#book">Book Now</a>`;
$("#foot").innerHTML=`<div><a class="logo" href="#home"><i><svg viewBox="0 0 24 24"><path d="M3 13l2-6a2 2 0 0 1 2-1.4h10a2 2 0 0 1 2 1.4l2 6v5h-3v-2H6v2H3z"/></svg></i>Car Mechanic Onsite</a><p style="margin-top:.8rem">Professional Car Care at Your Doorstep.<br>Expert Mechanics. Reliable Service. Wherever You Are.</p></div>
<div><b>Quick links</b><a href="#home">Home</a><a href="#about">About Us</a><a href="#services">All Services</a><a href="#areas">Service Areas</a><a href="#contact">Contact Us</a><a href="#book">Book a Mechanic</a><a href="#privacy">Privacy Policy</a></div>
<div><b>Major services</b>${S.slice(0,17).filter((x,i)=>[0,1,4,5,6,10,12,13,15,16].includes(i)).map(x=>`<a href="#${x[0]}">${x[1]}</a>`).join("")}</div>
<div><b>Get in touch</b><div class="row" style="margin-top:.5rem">${callDD("sk sm")}${waDD("wa sm")}</div><p style="margin-top:1rem;font-size:.9rem">Serving customers across the UAE: ${AREAS.map(a=>a[0]).join(", ")}.</p></div>`;
$("#yr").textContent=new Date().getFullYear();
$("#mb").onclick=()=>{const o=$("#nav").classList.toggle("open");$("#mb").setAttribute("aria-expanded",o)};
document.addEventListener("click",e=>document.querySelectorAll("details.dd[open]").forEach(d=>{if(!d.contains(e.target))d.open=false}));
const ld=document.createElement("script");ld.type="application/ld+json";ld.textContent=JSON.stringify({"@context":"https://schema.org","@type":"AutoRepair","name":"Car Mechanic Onsite","description":"Mobile car mechanic and onsite vehicle repair and maintenance in Dubai, UAE.","telephone":CFG.lines.map(n=>"+"+n),"areaServed":AREAS.map(a=>({"@type":"Place","name":a[0]+", UAE"})),"slogan":"Professional Car Care at Your Doorstep."});document.head.appendChild(ld);
if(CFG.gaId){const s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+CFG.gaId;document.head.appendChild(s)}
addEventListener("hashchange",route);route();
