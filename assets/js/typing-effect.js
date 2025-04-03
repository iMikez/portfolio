const text =
  "QA Engineer and Full-Stack Developer with a focus on building reliable, user-centered eCommerce experiences.";
const typingEl = document.getElementById("typing-text");
let idx = 0;
let isDeleting = false;
let speed = 40;
let pause = 2000;

function typeEffect() {
  if (isDeleting) {
    typingEl.textContent = text.substring(0, idx--);
    if (idx < 0) {
      isDeleting = false;
    }
  } else {
    typingEl.textContent = text.substring(0, idx++);
    if (idx > text.length) {
      isDeleting = true;
      setTimeout(typeEffect, pause);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();
