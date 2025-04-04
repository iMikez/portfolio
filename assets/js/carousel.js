const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const items = track.querySelectorAll(".carousel-item");
let index = 0;
let interval;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth + 24; // including gap
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

function startAutoSlide() {
  interval = setInterval(() => {
    index = (index + 1) % items.length;
    updateCarousel();
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

prevBtn.addEventListener("click", () => {
  stopAutoSlide();
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
  startAutoSlide();
});

nextBtn.addEventListener("click", () => {
  stopAutoSlide();
  index = (index + 1) % items.length;
  updateCarousel();
  startAutoSlide();
});

window.addEventListener("resize", updateCarousel);

updateCarousel();
startAutoSlide();
