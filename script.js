const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const main = document.getElementById("main");
const love = document.getElementById("love");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 150 - 75;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  love.classList.remove("hidden");
});
