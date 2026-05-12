/* ── Typewriter ── */
const roles = ["Programador Java", "Amante del SQL", "Desarrollador en formación"];
let ri = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');
function type() {
  const word = roles[ri];
  if (!deleting) {
    tw.textContent = word.substring(0, ci + 1);
    ci++;
    if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    tw.textContent = word.substring(0, ci - 1);
    ci--;
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 55 : 90);
}
type();

/* ── Hamburger ── */
const hb = document.getElementById('hamburger');
const mm = document.getElementById('mobile-menu');
hb.addEventListener('click', () => {
  hb.classList.toggle('open');
  mm.classList.toggle('open');
});
mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hb.classList.remove('open'); mm.classList.remove('open');
}));

/* ── Reveal on scroll ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.08 });
reveals.forEach(r => observer.observe(r));

/* ── Skill bars on scroll ── */
const fills = document.querySelectorAll('.skill-fill');
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animated'); skillObs.unobserve(e.target); } });
}, { threshold: 0.3 });
fills.forEach(f => skillObs.observe(f));

/* ── Nav scroll ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.background =
    window.scrollY > 60 ? 'rgba(10,15,30,0.97)' : 'rgba(10,15,30,0.85)';
});

/* ── Form submit ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.innerHTML = '<i class="ti ti-check"></i> ¡Mensaje enviado!';
  btn.style.background = 'var(--acc3)';
  setTimeout(() => {
    btn.innerHTML = '<i class="ti ti-send"></i> Enviar mensaje';
    btn.style.background = 'var(--acc)';
    e.target.reset();
  }, 3000);
}
