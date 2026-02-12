const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const main = document.getElementById("main");
const love = document.getElementById("love");

/* ===============================
   NO BUTTON MOVEMENT + MAGIC
================================= */

noBtn.style.position = "fixed";

// Move only on hover (hard to click 😈)
noBtn.addEventListener("mouseover", moveNoButton);

function moveNoButton() {
  const btnRect = noBtn.getBoundingClientRect();

  // Create sparkle trail BEFORE moving
  createSparkles(
    btnRect.left + btnRect.width / 2,
    btnRect.top + btnRect.height / 2
  );

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  const randomRotate = (Math.random() - 0.5) * 90;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  noBtn.style.transform = `rotate(${randomRotate}deg)`;
}

/* ===============================
   SPARKLES + HEART TRAIL
================================= */

function createSparkles(x, y) {
  // ✨ Pink + Gold sparkles
  for (let i = 0; i < 6; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    if (Math.random() > 0.5) {
      sparkle.classList.add("pink");
    } else {
      sparkle.classList.add("gold");
    }

    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 40;

    sparkle.style.left = x + offsetX + "px";
    sparkle.style.top = y + offsetY + "px";

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 900);
  }

  // 💖 Tiny emoji hearts
  for (let i = 0; i < 3; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart-sparkle");
    heart.innerHTML = "💖";

    const offsetX = (Math.random() - 0.5) * 50;
    const offsetY = (Math.random() - 0.5) * 50;

    heart.style.left = x + offsetX + "px";
    heart.style.top = y + offsetY + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }

  // 🌟 Comet streak
  const comet = document.createElement("div");
  comet.classList.add("comet");

  comet.style.left = x - 20 + "px";
  comet.style.top = y + "px";

  document.body.appendChild(comet);
  setTimeout(() => comet.remove(), 600);
}

/* ===============================
   EXPLOSION IF CLICKED 😈
================================= */

noBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  const rect = noBtn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  explodeHearts(centerX, centerY);

  noBtn.style.transition = "all 0.3s ease";
  noBtn.style.transform = "scale(0)";
  setTimeout(() => {
    noBtn.style.display = "none";
  }, 300);
});

function explodeHearts(x, y) {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("explosion-heart");
    heart.innerHTML = "💖";

    const angle = Math.random() * 2 * Math.PI;
    const distance = 150 + Math.random() * 150;

    const moveX = Math.cos(angle) * distance + "px";
    const moveY = Math.sin(angle) * distance + "px";

    heart.style.setProperty("--x", moveX);
    heart.style.setProperty("--y", moveY);

    heart.style.left = x + "px";
    heart.style.top = y + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
  }
}

/* ===============================
   YES BUTTON LOVE LANDING
================================= */

yesBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  love.classList.remove("hidden");

  startConfetti();
  startHearts();
  createLoveGlow();
  animateLoveText();
});

/* ===============================
   LOVE PAGE EXTRA ANIMATION
================================= */

function createLoveGlow() {
  for (let i = 0; i < 3; i++) {
    const glow = document.createElement("div");
    glow.classList.add("love-glow");

    glow.style.left = Math.random() * 80 + "%";
    glow.style.top = Math.random() * 80 + "%";
    glow.style.animationDelay = i * 2 + "s";

    love.appendChild(glow);
  }
}

function animateLoveText() {
  const loveText = document.querySelector(".love-text");

  loveText.style.opacity = "0";
  loveText.style.transform = "scale(0.7)";

  setTimeout(() => {
    loveText.style.transition = "all 1s ease";
    loveText.style.opacity = "1";
    loveText.style.transform = "scale(1)";
  }, 100);
}


/* 🎉 Confetti */
function startConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = randomColor();
    confetti.style.animationDuration =
      2 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);
  }
}

function randomColor() {
  const colors = [
    "#ff4d6d",
    "#ff85a2",
    "#ffb3c6",
    "#ffc2d1",
    "#ffd700",
    "#ffb703"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

/* 💖 Floating Hearts After Yes */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize =
      18 + Math.random() * 25 + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 400);
}

/* ===============================
   ✨ CURSOR GLITTER TRAIL
================================= */

document.addEventListener("mousemove", (e) => {
  const glitter = document.createElement("div");
  glitter.classList.add("cursor-glitter");

  const colors = [
    "#ff4d6d",
    "#ff85a2",
    "#ffd700",
    "#ffb703"
  ];

  glitter.style.background =
    colors[Math.floor(Math.random() * colors.length)];

  glitter.style.left = e.clientX + "px";
  glitter.style.top = e.clientY + "px";

  document.body.appendChild(glitter);
  setTimeout(() => glitter.remove(), 800);
});
