const btn = document.getElementById("colorBtn");
const colorText = document.getElementById("currentColor");
const visitedText = document.getElementById("visitedCount");
const h1 = document.querySelector("h1");
let visited = 1;

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}

function getLuminance(hex) {
  const r = parseInt(hex.substr(1, 2), 16) / 255;
  const g = parseInt(hex.substr(3, 2), 16) / 255;
  const b = parseInt(hex.substr(5, 2), 16) / 255;
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

btn.addEventListener("click", () => {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;

  const lum = getLuminance(newColor);
  const textColor = lum > 0.6 ? "#000000" : "#ffffff";

  document.body.style.color = textColor;
  btn.style.color = textColor;
  colorText.style.color = textColor;
  h1.style.color = textColor;
  document.querySelector("p").style.color = textColor;
  document.getElementById("visitedCount").style.color = textColor;
  document.getElementById("totalColors").style.color = textColor;

  colorText.textContent = "Current Color: " + newColor;
  visited++;
  visitedText.textContent = "Colors Visited: " + visited;

  const r = 255 - parseInt(newColor.substr(1, 2), 16);
  const g = 255 - parseInt(newColor.substr(3, 2), 16);
  const b = 255 - parseInt(newColor.substr(5, 2), 16);
  const complementary = `rgb(${r}, ${g}, ${b})`;

  btn.classList.remove("fade");
  btn.style.setProperty("background", `linear-gradient(45deg, ${newColor}, ${complementary})`);
  btn.offsetWidth;
  btn.classList.add("fade");
  btn.style.backgroundSize = "300% 300%";
});
