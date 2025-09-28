/* Simple interactions: hamburger, slider, modal */
function toggleMenu(){
  const nav = document.querySelector('.main-nav ul');
  nav.classList.toggle('show');
}

/* Enquiry modal */
function openEnquiry(){ document.getElementById('enquiry-modal').style.display='flex'; document.getElementById('enquiry-modal').setAttribute('aria-hidden','false'); }
function closeEnquiry(){ document.getElementById('enquiry-modal').style.display='none'; document.getElementById('enquiry-modal').setAttribute('aria-hidden','true'); }

/* Slider */
let current = 0;
const slides = document.querySelectorAll ? document.querySelectorAll('#hero-slider .slide') : [];
function showSlide(i){
  if(!slides.length) return;
  if(i<0) i = slides.length-1;
  if(i>=slides.length) i = 0;
  current = i;
  const wrapper = document.getElementById('hero-slider');
  wrapper.style.transform = `translateX(-${i*100}%)`;
}
function nextSlide(){ showSlide(current+1); }
function prevSlide(){ showSlide(current-1); }

/* Auto-advance */
let slideInterval = setInterval(()=> nextSlide(), 6000);

/* Pause on hover (desktop) */
const hero = document.getElementById('hero-slider');
if(hero){
  hero.addEventListener('mouseenter', ()=> clearInterval(slideInterval));
  hero.addEventListener('mouseleave', ()=> slideInterval = setInterval(()=> nextSlide(), 6000));
}

/* Close modal when clicking outside panel */
const modal = document.getElementById('enquiry-modal');
if(modal){
  modal.addEventListener('click', (e)=>{
    if(e.target === modal) closeEnquiry();
  });
}
