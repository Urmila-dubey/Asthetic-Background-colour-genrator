const btn = document.getElementById("btn");
const codeText = document.getElementById("code");

btn.addEventListener("click", () => {
   // Generate random hex color
   let color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
let color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;

codeText.textContent = `${color1} → ${color2}`;

});
