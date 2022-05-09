var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
// c.fillStyle = "pink";
// c.fillRect(0, 0, 100, 100);
// c.fillRect(400, 0, 100, 100);
// c.fillRect(800, 0, 100, 100);
// c.fillStyle = "red";
// c.fillRect(0, 200, 100, 100);
// c.fillRect(0, 400, 100, 100);

//draw lines
// c.beginPath();
// c.moveTo(300, 300);
// c.lineTo(600, 500);
// c.lineTo(800, 300);
// c.stroke();

//arcs
// for (i = 0; i < 10; i++) {
//   x = Math.random() * window.innerWidth;
//   y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 50, 0, Math.PI * 2, false);
//   c.strokeStyle = "brown";
//   c.stroke();
// }
let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let dx = (Math.random() - 0.5) * 10;
let dy = (Math.random() - 0.5) * 10;
let radius = 30;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "brown";
  c.stroke();
  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  y += dy;
  x += dx;
}
animate();
