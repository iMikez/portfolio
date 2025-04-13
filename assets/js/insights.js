document.querySelectorAll(".insight-question").forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    const isActive = q.classList.contains("active");

    document
      .querySelectorAll(".insight-question")
      .forEach((el) => el.classList.remove("active"));
    document
      .querySelectorAll(".insight-answer")
      .forEach((el) => (el.style.display = "none"));

    if (!isActive) {
      q.classList.add("active");
      answer.style.display = "block";
    }
  });
});
