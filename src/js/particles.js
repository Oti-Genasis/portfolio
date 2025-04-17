// Get the canvas element and its 2D rendering context
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

// Set the canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle storage array
let particles = [];

// Number of particles depends on screen width (responsive density)
const numParticles = Math.floor(window.innerWidth / 15);

// Max distance for connecting lines between particles
const maxDistance = 140;

// Object to store mouse position
let mouse = { x: null, y: null };

// Update mouse position on movement
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

// Resize canvas when the window is resized
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Particle class defining behavior and appearance
class Particle {
    constructor() {
      // Random initial position
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
  
      // Random size from predefined values
      const sizes = [1, 2, 3];
      this.radius = sizes[Math.floor(Math.random() * sizes.length)];
  
      // Random velocity (dx and dy)
      this.dx = (Math.random() - 0.5) * 1.5;
      this.dy = (Math.random() - 0.5) * 1.5;
    }
  
    draw() {
      // Draw the particle as a filled circle
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#808080"; // Particle color
      ctx.fill();
    }
  
    update() {
      // Update particle position
      this.x += this.dx;
      this.y += this.dy;
  
      // Bounce off canvas edges
      if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
  
      this.draw(); // Redraw the particle
    }
}

// Draw a line between two particles if they are close enough
function connect(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < maxDistance) {
    ctx.beginPath();
    // Line opacity decreases with distance
    ctx.strokeStyle = "rgba(128, 128, 128, " + (1 - distance / maxDistance) + ")";
    ctx.lineWidth = 1;
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  }
}

// Animation loop: updates and draws all particles
function drawParticles() {
  // Clear the canvas before each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw each particle
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();

    // Connect this particle to every other particle after it
    for (let j = i + 1; j < particles.length; j++) {
      connect(particles[i], particles[j]);
    }

    // Optionally connect to mouse if mouse is present
    if (mouse.x && mouse.y) {
      connect(particles[i], { x: mouse.x, y: mouse.y });
    }
  }

  // Request the next frame
  requestAnimationFrame(drawParticles);
}

// Initialize particles and start animation
function init() {
  particles = [];
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
  drawParticles();
}

init(); // Start everything
