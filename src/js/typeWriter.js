//Animation for the title in section 'Hero'

function startTypingAnimationByClass(className, texts, typingSpeed = 100, pauseDelay = 2500) {

  // Select all elements with the given class name
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach(element => {
    let textIndex = 0;  // Index of the current phrase in the texts array
    let charIndex = 0;  // Index of the character currently being typed
    let isDeleting = false;  // Flag to determine whether we are typing or deleting

    function type() {
      const currentText = texts[textIndex]; // Get the current phrase
      const currentDisplayed = currentText.substring(0, charIndex); // Get the portion to display
      element.textContent = currentDisplayed; // Update the element’s text

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
        if (charIndex > 0) {
          charIndex--;
          setTimeout(type, typingSpeed / 2);
        } else {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length; // Loop through the array
          setTimeout(type, typingSpeed);
        }
      }
    }

    type();
  });
}

startTypingAnimationByClass(
  "hero-section-text-title1",
  [
    "IT Analyst",
    "IT Technician",
    "Network Technician",
    "Network Administrator",
    "System Administrator"
  ]
);

startTypingAnimationByClass(
  "hero-section-text-title2-title",
  [
    "IT Analyst",
    "IT Technician",
    "Network Technician",
    "Network Administrator",
    "System Administrator"
  ]
);
