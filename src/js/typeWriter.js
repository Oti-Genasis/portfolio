// List of phrases to display
const texts = [
  "IT Analyst",
  "IT Technician",
  "Network Technician",
  "Network Administrator",
  "System Administrator",
];
const typingElement = document.querySelector(".hero-title");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let pauseDelay = 2500;

function type() {
  const currentText = texts[textIndex];
  const currentDisplayed = currentText.substring(0, charIndex);
  typingElement.textContent = currentDisplayed;

  if (!isDeleting) {
    // Typing forward
    if (charIndex < currentText.length) {
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      isDeleting = true;
      setTimeout(type, pauseDelay);
    }
  } else {
    // Deleting
    if (charIndex > 0) {
      charIndex--;
      setTimeout(type, typingSpeed / 2);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, typingSpeed);
    }
  }
}

// Start animation
type();
