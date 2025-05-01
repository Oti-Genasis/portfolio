import "./particles";
import "./logoAnimation";
import "./typeWriter";

// Change navbar design when scrolled
if (window.scrollY > 1) {
  document.querySelector(".top-navbar").classList.add("scrolled");
}

//Change navbar design when scrolled
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".top-navbar");
  if (window.scrollY > 1) {
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

//right-navbar-burger-btn
const hamburgerMenu = document.getElementById('right-navbar-burger-btn');
const closeBtn = document.getElementById('right-navbar-close-button');
const navMenu = document.getElementById('right-navbar-buttons');
const hamburgerIcon = document.getElementById('right-navbar-burger-icon');
const overlay = document.getElementById('overlay');
const navbar = document.querySelector(".top-navbar");

// Listen to hamburger click & run an overlay when clicked
hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  overlay.classList.toggle('show');
  document.body.classList.toggle('no-scroll');
  navbar.classList.remove("scrolled"); // Disable navbar scrolled design

  // Reset Navbar scrolled design
  if (window.scrollY > 1) {
    document.querySelector(".top-navbar").classList.add("scrolled");
  }

});

// Listen to right-navbar-close-button to close 
closeBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  overlay.classList.toggle('show');
  document.body.classList.toggle('no-scroll');
  navbar.classList.remove("scrolled"); // Disable navbar scrolled design

  // Reset Navbar scrolled design
  if (window.scrollY > 1) {
    document.querySelector(".top-navbar").classList.add("scrolled");
  }

});


// Close overlay when clicked on
overlay.addEventListener('click', () => {
  navMenu.classList.remove('show');
  overlay.classList.remove('show');
  document.body.classList.remove('no-scroll');// Disable no-scrolling

  // Reset Navbar scrolled design
  if (window.scrollY > 1) {
    document.querySelector(".top-navbar").classList.add("scrolled");
  }

});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
