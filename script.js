const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let playing = false;

musicBtn.addEventListener("click", async () => {
  if (!playing) {
    try {
      await bgMusic.play();
      playing = true;
      musicBtn.textContent = "⏸ Music Off";
    } catch (e) {
      alert("कृपया devotional-music.mp3 फाइल assets फोल्डरमध्ये ठेवा.");
    }
  } else {
    bgMusic.pause();
    playing = false;
    musicBtn.textContent = "🔊 Music On";
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

function createPetal() {
  const p = document.createElement("div");
  p.className = "petal";
  p.textContent = ["✦", "❁", "•", "🌸"][Math.floor(Math.random()*4)];
  p.style.left = Math.random() * 100 + "vw";
  p.style.fontSize = (10 + Math.random()*16) + "px";
  p.style.animationDuration = (5 + Math.random()*5) + "s";
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 11000);
}
setInterval(createPetal, 650);
