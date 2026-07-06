/* ===== Yashpal Parmar — Portfolio JS ===== */

// ---------- Smooth scrolling (Lenis) ----------
(function initSmoothScroll(){
  if (typeof Lenis === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const lenis = new Lenis({
    duration: 1.8,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // expoOut, slow premium glide
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 0.9,
    lerp: 0.08,
    syncTouch: false,
  });
  function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  // Hook anchor links so Lenis handles them (overrides native jump)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',(e)=>{
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -20, duration: 1.2 });
    });
  });
  // Smooth keyboard scrolling
  const isTypingTarget = (el) => {
    if (!el) return false;
    const tag = el.tagName;
    return el.isContentEditable || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
  };
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (isTypingTarget(e.target)) return;
    const vh = window.innerHeight;
    const cur = lenis.scroll;
    const max = document.documentElement.scrollHeight - vh;
    const lineStep = 90;
    const pageStep = vh * 0.9;
    let target = null;
    let dur = 0.9;
    switch (e.key) {
      case 'ArrowDown': target = cur + lineStep; break;
      case 'ArrowUp':   target = cur - lineStep; break;
      case 'PageDown':  target = cur + pageStep; dur = 1.2; break;
      case 'PageUp':    target = cur - pageStep; dur = 1.2; break;
      case ' ':         target = cur + (e.shiftKey ? -pageStep : pageStep); dur = 1.2; break;
      case 'Home':      target = 0; dur = 1.6; break;
      case 'End':       target = max; dur = 1.6; break;
      default: return;
    }
    e.preventDefault();
    lenis.scrollTo(Math.max(0, Math.min(max, target)), { duration: dur });
  }, { passive: false });
  window.__lenis = lenis;
})();





// ---------- Data ----------
const projects = [
  { title:"AWS CI-CD Pipeline", tag:"Automation",
    url:"https://github.com/Zatch07/Web-Deployment-CI-CD-Pipeline-using-AWS-and-Github",
    points:[
      "Configured and automated CI/CD pipeline using AWS CodeBuild, CodeDeploy and CodePipeline.",
      "Deployed application on Nginx on EC2 with proper IAM roles and permissions.",
      "Integrated GitHub Actions in AWS CodePipeline for automated build & deploy on every push."],
    tech:["CodePipeline","EC2","IAM","GitHub Actions"] },
  { title:"EC2 Backup & Restore Automation", tag:"Serverless",
    url:"https://github.com/Zatch07/Backing-and-Restoring-AWS-EC2-instances-with-Automated-Script",
    points:[
      "Engineered EC2 backup automation every 7 days with Lambda + Python, scheduled via CloudWatch.",
      "Stored backups securely in S3 with IAM-managed access. Managed resources with AWS CLI.",
      "Optimized quick recovery with custom scripts, ensuring backups skip reboot states."],
    tech:["Lambda","Python","S3","CloudWatch"] },
  { title:"AWS Lex Chatbot with ChatGPT", tag:"AI Integration",
    url:"https://github.com/Zatch07/AWS-LEX-chatbot-with-chatgpt",
    points:[
      "Integrated Amazon Lex with ChatGPT for an e-commerce chatbot, enhancing customer interaction.",
      "AWS Lambda backend in Python, wired to the OpenAI API for human-like responses.",
      "Personalized support minimising the need for service employees."],
    tech:["Lex","Lambda","OpenAI","Python"] },
  { title:"Cloud VPN (Multi-Region)", tag:"Networking",
    points:[
      "Secure cloud-based VPN using GCP VM instances, networking tools and Outline.",
      "Multi-region setup on AWS with OpenVPN for cloud ↔ on-prem connectivity.",
      "Optimized VM performance and resource utilization across regions."],
    tech:["GCP","AWS","OpenVPN","Outline"] },
  { title:"AWS QuickSight Visualization", tag:"Analytics",
    url:"https://github.com/Zatch07/AWS-Quicksight-visualization",
    points:[
      "Visualizations for 50,000 Amazon best-selling products using Amazon QuickSight.",
      "S3 for storage, manifest.json for management and QuickSight integration.",
      "Interactive bar, pie and line charts to derive actionable insights."],
    tech:["QuickSight","S3","Analytics"] },
  { title:"Reinforcement Learning in Gaming", tag:"ML",
    points:[
      "Trained an ML agent to play a Starship game using Unity's ML-Agent Toolkit.",
      "Designed a point-based reward system incentivising survival and defeats.",
      "Consistent, long-duration gameplay proving the training pipeline works."],
    tech:["Unity","ML-Agents","RL"] },
  { title:"Corporate Communication System", tag:"Full-stack",
    points:[
      "Web-based corporate communication system for hosting/joining meetings inside an org.",
      "Room creation, personal chats, and hosted meetings for tight collaboration.",
      "Peer-to-peer service for confidentiality and integrity of communication."],
    tech:["WebRTC","P2P","Web"] },
];

const ICONS = {
  code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>',
  cloud:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a5 5 0 0 1-1-9.9A7 7 0 0 1 19 8a4.5 4.5 0 0 1-.5 9H6z"/></svg>',
  db:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
  wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a5 5 0 0 0-6.9 6.9L3 18l3 3 4.8-4.8a5 5 0 0 0 6.9-6.9l-2.8 2.8-2.8-2.8 2.6-3z"/></svg>',
  boxes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l9 4v10l-9 4-9-4V7z"/><path d="M3 7l9 4 9-4M12 11v10"/></svg>',
  award:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="9" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/></svg>',
  briefcase:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>',
  sparkles:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>',
  trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 4h10v4a5 5 0 0 1-10 0zM5 4H2v2a4 4 0 0 0 4 4M19 4h3v2a4 4 0 0 1-4 4M9 20h6M12 15v5"/></svg>',
  music:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  gamepad:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/><rect x="2" y="6" width="20" height="12" rx="4"/></svg>',
  tv:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M7 3l5 4 5-4"/></svg>',
  server:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6h.01M7 17h.01"/></svg>',
};

const skillGroups = [
  { icon:"code", title:"Programming", items:["Python","SQL","C","C++","HTML","CSS"] },
  { icon:"cloud", title:"Domain Knowledge", items:["Cloud Dev (AWS & GCP)","Data Structures & Algorithms","Graphic Designing"] },
  { icon:"db", title:"Databases", items:["Amazon RDS","MySQL","Firestore","Google Cloud Storage","S3","Artifacts","MongoDB Atlas"] },
  { icon:"wrench", title:"Tools / Platforms", items:["Linux","AWS","Google Cloud Platform","VS Code","Autodesk Maya","GitHub","Unreal Engine"] },
  { icon:"boxes", title:"Additional", items:["VPC","Kubernetes (K8s)","Docker","BigQuery","CodeBuild","CodeDeploy"] },
  { icon:"award", title:"Certificates", items:["Google Cloud Skillboost — Silver League (6 certs)","GeeksforGeeks — Cloud Bootcamp","Skill Nation — ChatGPT & AI Tools"] },
];

const experience = [
  { role:"DevOps Engineer", org:"BlackApps AI, Ahmedabad",
    points:[
      "Secured MongoDB Atlas by implementing VPC endpoints to restrict internet access and enhance data security.",
      "Evaluated NAT Gateways and VPC peering options to identify the most suitable solution for our architecture needs.",
      "Assessed the need for a Non-Default VPC and chose an efficient configuration by modifying the Default VPC."] },
  { role:"Software Developer", org:"LBEF Group of Institutions, Nepal",
    points:[
      "Upgraded LBEF's database to MySQL in a scalable cloud environment; used Python to migrate from Excel — better access, reliability and security.",
      "Collaborated on a user-friendly front-end for the cloud-hosted database.",
      "Delivered complex cloud DB migration + front-end within the project timeline."] },
  { role:"Student Executive", org:"IIIT Sports Fest, Gwalior",
    points:[
      "Organized a successful Sports Fest as a student representative.",
      "Used SQL for efficient data management — teams, players, volunteers.",
      "Overhauled sports grounds with advanced equipment and lighting."] },
  { role:"Student Executive", org:"IIIT Cultural Fest",
    points:[
      "Executed a Campus Ambassador Program attracting 500+ student participants.",
      "Central role in event setup and promotion; drove vibrant, inclusive atmosphere.",
      "Liaison for out-of-town attendees — engagement and visitor support."] },
  { role:"House Captain", org:"School Activities",
    points:[
      "Chaired academic, cultural and sporting events — strong leadership and organization.",
      "Led the team to the highest ranking in the House system during my tenure.",
      "Won 50% of House-based games in the annual sports fest."] },
];

const hobbies = [
  { icon:"trophy", title:"Sports", items:"Football, Table Tennis, etc." },
  { icon:"music", title:"Music", items:"Pop, EDM, etc." },
  { icon:"gamepad", title:"Gaming", items:"Call of Duty, Rocket League, etc." },
  { icon:"tv", title:"TV Shows", items:"The Office, Breaking Bad, etc." },
  { icon:"server", title:"Cubing", items:"3x3, 4x4, 5x5, etc." },
];

// ---------- Render ----------
const el = (t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;};

// Projects
const pg = document.getElementById('projectsGrid');
projects.forEach((p,i)=>{
  const li = p.points.map(pt=>`<li>${pt}</li>`).join('');
  const tech = p.tech.map(t=>`<span>${t}</span>`).join('');
  const card = el('article','project glass-card reveal-up',`
    <div class="p-head">
      <span class="p-tag">${p.tag}</span>
      <span class="p-num">0${i+1}</span>
    </div>
    <h3>${p.url ? `<a href="${p.url}" target="_blank" rel="noopener" class="p-link">${p.title} <svg viewBox="0 0 24 24" class="ico-sm" style="display:inline-block;vertical-align:-2px;width:14px;height:14px"><path fill="none" stroke="currentColor" stroke-width="2" d="M7 17L17 7M9 7h8v8"/></svg></a>` : p.title}</h3>
    <ul>${li}</ul>
    <div class="tech">${tech}</div>
  `);
  card.style.transitionDelay = (i*0.05)+'s';
  card.addEventListener('mousemove',(e)=>{
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx',(e.clientX-r.left)+'px');
    card.style.setProperty('--my',(e.clientY-r.top)+'px');
  });
  pg.appendChild(card);
});

// Skills
const sg = document.getElementById('skillsGrid');
skillGroups.forEach((g,i)=>{
  const items = g.items.map(it=>`<span>${it}</span>`).join('');
  const card = el('div','skill glass-card reveal-up',`
    <div class="skill-head">
      <span class="skill-icon">${ICONS[g.icon]}</span>
      <h3>${g.title}</h3>
    </div>
    <div class="skill-items">${items}</div>
  `);
  card.style.transitionDelay = (i*0.06)+'s';
  sg.appendChild(card);
});

// Experience
const tl = document.getElementById('timeline');
experience.forEach((e,i)=>{
  const pts = e.points.map(p=>`<li>${ICONS.sparkles}<span>${p}</span></li>`).join('');
  const item = el('div','tl-item reveal-up',`
    <div class="tl-dot"></div>
    <div class="tl-card glass-card">
      <div class="tl-head">
        ${ICONS.briefcase}
        <div>
          <h3>${e.role}</h3>
          <p>${e.org}</p>
        </div>
      </div>
      <ul>${pts}</ul>
    </div>
  `);
  item.style.transitionDelay = (i*0.05)+'s';
  tl.appendChild(item);
});

// Hobbies
const hg = document.getElementById('hobbiesGrid');
hobbies.forEach((h,i)=>{
  const card = el('div','hobby glass-card reveal-up',`
    <span class="hobby-icon">${ICONS[h.icon]}</span>
    <h3>${h.title}</h3>
    <p>${h.items}</p>
  `);
  card.style.transitionDelay = (i*0.06)+'s';
  hg.appendChild(card);
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{ rootMargin:"-80px" });
document.querySelectorAll('.reveal, .reveal-up').forEach(n=>io.observe(n));

// Hero word reveal
requestAnimationFrame(()=>{ document.querySelector('.hero')?.classList.add('in-view'); });

// ---------- Animated counters ----------
const countIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.count, 10);
    if(isNaN(target)) return;
    const dur = 1400;
    const start = performance.now();
    function tick(now){
      const p = Math.min(1, (now-start)/dur);
      const eased = 1 - Math.pow(1-p, 3);
      el.textContent = Math.round(target*eased);
      if(p<1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
},{ rootMargin:"-40px" });
document.querySelectorAll('.stat .num[data-count]').forEach(n=>countIO.observe(n));

// ---------- Nav active + smooth scroll ----------
const navLinks = document.querySelectorAll('#navLinks a');
const sections = ['home','projects','skills','experience','hobbies'].map(id=>document.getElementById(id));
const navIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      navLinks.forEach(a=>a.classList.toggle('active', a.dataset.id===e.target.id));
    }
  });
},{ rootMargin:"-40% 0px -55% 0px" });
sections.forEach(s=>s && navIO.observe(s));

// ---------- Scroll progress + timeline fill ----------
const progress = document.getElementById('scrollProgress');
const fill = document.getElementById('timelineFill');
const expSection = document.getElementById('experience');
function onScroll(){
  const h = document.documentElement;
  const pct = h.scrollTop / (h.scrollHeight - h.clientHeight);
  progress.style.width = (pct*100)+'%';
  // timeline fill
  const rect = expSection.getBoundingClientRect();
  const vh = window.innerHeight;
  const total = rect.height + vh*0.5;
  const passed = Math.min(Math.max(vh - rect.top, 0), total);
  fill.style.height = Math.min((passed/total)*100, 100)+'%';
}
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

// ---------- Cursor glow + dot ----------
const glow = document.getElementById('cursorGlow');
const dot = document.getElementById('cursorDot');
let gx=0,gy=0,tx=0,ty=0;
window.addEventListener('mousemove',(e)=>{
  tx = e.clientX; ty = e.clientY;
  dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%,-50%)`;
});
function raf(){
  gx += (tx-gx)*0.08; gy += (ty-gy)*0.08;
  glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%,-50%)`;
  requestAnimationFrame(raf);
}
raf();
document.querySelectorAll('a, button, .project, .hobby, .skill, .tl-card').forEach(node=>{
  node.addEventListener('mouseenter',()=>dot.classList.add('grow'));
  node.addEventListener('mouseleave',()=>dot.classList.remove('grow'));
});

// ---------- Terminal typing ----------
const termLines = [
  { k:"$", v:"whoami", c:"peach" },
  { k:">", v:"yashpal.parmar // devops", c:"muted" },
  { k:"$", v:"cat stack.yml", c:"peach" },
  { k:"-", v:"aws • gcp • terraform", c:"muted" },
  { k:"-", v:"kubernetes • docker", c:"muted" },
  { k:"-", v:"python • ci/cd", c:"muted" },
  { k:"$", v:"status", c:"peach" },
  { k:">", v:"shipping ✦", c:"copper" },
];
const termEl = document.getElementById('terminal');
function typeLine(idx){
  if(idx>=termLines.length){
    const last = termEl.lastElementChild?.querySelector('.v');
    if(last) last.classList.add('cursor-blink');
    return;
  }
  const line = termLines[idx];
  const row = el('div','t-line',`<span class="k ${line.c}">${line.k}</span><span class="v ${line.c}"></span>`);
  row.style.animationDelay = '0s';
  termEl.appendChild(row);
  const target = row.querySelector('.v');
  let i=0;
  const speed = 22;
  function tick(){
    target.textContent = line.v.slice(0,i);
    if(i<line.v.length){ i++; setTimeout(tick, speed); }
    else setTimeout(()=>typeLine(idx+1), 220);
  }
  tick();
}
// Start typing when hero visible
const heroIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ setTimeout(()=>typeLine(0), 600); heroIO.disconnect(); } });
});
heroIO.observe(document.getElementById('home'));

// ---------- Hero parallax ----------
const heroMag = document.querySelector('.hero-mag');
const heroGlowA = document.querySelector('.hero-glow.a');
const heroGlowB = document.querySelector('.hero-glow.b');
window.addEventListener('scroll',()=>{
  const y = window.scrollY;
  if(y < window.innerHeight){
    if(heroMag){ heroMag.style.transform = `translateY(${y*0.18}px)`; heroMag.style.opacity = 1 - (y/window.innerHeight)*0.85; }
    if(heroGlowA) heroGlowA.style.transform = `translateY(${y*0.25}px)`;
    if(heroGlowB) heroGlowB.style.transform = `translateY(${y*-0.18}px)`;
  }
},{ passive:true });

// ---------- 3D tilt on terminal ----------
const tilt = document.querySelector('.tilt');
if(tilt){
  const wrap = tilt.parentElement;
  wrap.addEventListener('mousemove',(e)=>{
    const r = wrap.getBoundingClientRect();
    const px = (e.clientX - r.left)/r.width - 0.5;
    const py = (e.clientY - r.top)/r.height - 0.5;
    tilt.style.transform = `perspective(900px) rotateY(${px*8}deg) rotateX(${-py*8}deg)`;
  });
  wrap.addEventListener('mouseleave',()=>{ tilt.style.transform = ''; });
}

// ---------- Magnetic buttons ----------
document.querySelectorAll('.magnetic').forEach(btn=>{
  btn.addEventListener('mousemove',(e)=>{
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top - r.height/2;
    btn.style.transform = `translate(${x*0.25}px, ${y*0.35}px)`;
  });
  btn.addEventListener('mouseleave',()=>{ btn.style.transform=''; });
});
