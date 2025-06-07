import "./particles.js";
import "./logoAnimation.js";
import "./typeWriter.js";

// Load images faster
document.querySelectorAll("img").forEach(img => {
  img.setAttribute("loading", "eager");
});

// Fade-In-Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // Replay Animation
    }
  });
}, { threshold: 0.1 }); // Limit

document.querySelectorAll('.fade-in-up').forEach(section => {
  observer.observe(section);
});

document.querySelectorAll('.fade-in-right').forEach(section => {
  observer.observe(section);
});


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
const navMenuBtns = document.querySelectorAll('.right-navbar-section-buttons button');

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

//Listen to right-navbar-menu-buttons to close

navMenuBtns.forEach(button => {
  button.addEventListener('click', (e) => {
    navMenu.classList.toggle('show');
    overlay.classList.toggle('show');
    document.body.classList.remove('no-scroll');
    navbar.classList.remove("scrolled");

    const target = button.getAttribute('data-target');
    const targetSection = document.querySelector(target);

    if (targetSection) {
      e.preventDefault();
      setTimeout(() => {
        // Premier essai avec scrollIntoView
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

        // Secours : scroll direct si rien ne se passe après 400ms
        setTimeout(() => {
          const rect = targetSection.getBoundingClientRect();
          if (Math.abs(rect.top) > 10) {
            window.scrollTo({
              top: window.scrollY + rect.top - 10,
              behavior: "smooth"
            });
          }
        }, 400);
      }, 200); // Délai augmenté à 200ms
    }
  });
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


// get year for footer
document.getElementById("year").textContent = new Date().getFullYear();

// Slider Animation
const sliders = document.querySelectorAll('.projects-section-slider-mobile');

sliders.forEach(slider => {
  const track = slider.querySelector('.projects-section-slider-mobile .slider');
  const images = track.querySelectorAll('.projects-section-slider-mobile img');
  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);
});



