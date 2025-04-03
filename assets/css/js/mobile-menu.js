const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
  burger.classList.toggle("open");
});

// Optional: Close menu when a link is clicked
mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    burger.classList.remove("open");
  });
});
