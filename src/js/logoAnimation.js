document.addEventListener("DOMContentLoaded", () => {
  const letters = "OSabcdefghijklmnopqrstuvwxyz!@#$%^&*_-:'.,+";
  const finalText = "Otniel.S";
  const logo = document.querySelector(".logo");

  function animateText() {
    let iterations = 0;

    const interval = setInterval(() => {
      logo.innerHTML = finalText
        .split("")
        .map((char, i) => {
          //if (char === " ") return " ";
          if (i < iterations) {
            // Make 'O' and 'S' red once they're revealed
            if (i === 0 || i === finalText.indexOf("S")) {
              return `<span style="color: red;">${finalText[i]}</span>`;
            }
            return finalText[i];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      iterations += 1 / 4; // Number of iteration before find the right value

      if (iterations >= finalText.length) {
        clearInterval(interval);

        // Pause before restarting
        setTimeout(() => {
          animateText();
        }, 10000); // Delay between each animation in ms
      }
    }, 50); // Letter changing delay in ms
  }

  animateText();
});
