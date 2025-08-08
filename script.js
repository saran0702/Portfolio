// Graph line animation
const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let points = [];
for (let i = 0; i < 20; i++) {
  points.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 3
  });
}

function drawPoints() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#0077ff";
  ctx.beginPath();
  points.forEach((p, i) => {
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    if (i > 0) {
      ctx.lineTo(points[i - 1].x, points[i - 1].y);
    }
  });
  ctx.stroke();
}
drawPoints();

// Typing Effect
new Typed("#typedText", {
  strings: ["I’m a Data Science student passionate about AI and ML."],
  typeSpeed: 50,
  showCursor: true
});

// Skill bars fill animation
document.addEventListener("scroll", () => {
  document.querySelectorAll(".skill-bar").forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      if (!bar.querySelector(".skill-bar-fill")) {
        const fill = document.createElement("div");
        fill.className = "skill-bar-fill";
        fill.style.width = bar.getAttribute("data-percent") + "%";
        bar.appendChild(fill);
      }
    }
  });
});

// Particles.js config
particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: { enable: true, color: "#0077ff" }
  }
});
