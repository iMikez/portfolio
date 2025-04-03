fetch("components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    // Re-initialize menu script after header is loaded
    const burger = document.getElementById("burger");
    const mobileNav = document.getElementById("mobileNav");

    burger.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      burger.classList.toggle("open");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        burger.classList.remove("open");
      });
    });
  });
