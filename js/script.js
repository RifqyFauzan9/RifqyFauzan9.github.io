// toggle icon navbar
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scrolll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active'); 
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
};

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text',{
    strings:['Web Developer','Android Developer','Graphic Designer'],
    typeSpeed:30,
    backSpeed:30,
    backDelay:1000,
    loop:true
});
const vid = document.getElementById("street");

window.addEventListener("scroll", function() {
    const scrollPosition = window.pageYOffset;
    vid.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});

document.addEventListener("DOMContentLoaded", function() {
  CustomEase.create("custom", "M0,0,C0,0.8,0.139,0.86,0.224,0.918,0.344,1,0.504,1,1,1");

  for (let i = 1; i <= 8; i++) {
    const elementClass = `.big-header-${i}`;
    const animationDelay = 0.5 + (i - 1) * 0.06;
    
    gsap.from(elementClass, {
      y: -400,
      duration: 0.9,
      delay: animationDelay,
      ease: "custom"
    });
  }

  gsap.to(".opening", {y: -830, opacity: 0, duration: 1, delay: 3, ease: CustomEase.create("custom", "M0,0 C0.7,0 0.198,1 1,1 ")});
  gsap.to(".the-header", {y: 400, duration: 1, delay: 3, ease: CustomEase.create("custom", "M0,0 C0.7,0 0.198,1 1,1 ")})
  gsap.from(".background", {y: 800, duration: 1, delay: 3, ease: CustomEase.create("custom", "M0,0 C0.7,0 0.198,1 1,1 ")});
});

