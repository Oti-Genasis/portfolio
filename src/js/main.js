import "./particles";
import "./logoAnimation";
import "./typeWriter";

// Change navbar design when scrolled
if (window.scrollY > 10) {
  document.querySelector(".navbar").classList.add("scrolled");
}

//Change navbar design when scrolled
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


//Section reveal animation
function revealOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  const triggerBottom = window.innerHeight * 0.9;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

//Hamburger Btn Menu
const hamburgerMenu = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const overlay = document.getElementById('overlay');
const navbar = document.querySelector(".navbar");

// Listen to hamburger click & run an overlay when clicked
hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  overlay.classList.toggle('show');
  document.body.classList.toggle('no-scroll');
  navbar.classList.remove("scrolled"); // Disable navbar scrolled design
});


// Close overlay when clicked on
overlay.addEventListener('click', () => {
  navMenu.classList.remove('show');
  overlay.classList.remove('show');
  document.body.classList.remove('no-scroll');// Disable scrolling

  // Reset Navbar scrolled design
  if (window.scrollY > 10) {
    document.querySelector(".navbar").classList.add("scrolled");
  }

});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
