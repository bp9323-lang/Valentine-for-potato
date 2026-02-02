const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const celebration = document.getElementById("celebration");
const music = document.getElementById("music");

// NO button runs away 😈
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// YES button party 🎉
yesBtn.addEventListener("click", () => {
  celebration.classList.remove("hidden");
  music.play();

  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
});
