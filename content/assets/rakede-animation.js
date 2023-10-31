const rakedeImagePath = '/assets/rakede-farbe.webp';
const rakedeAcceleration = 0.01;
const rakedeAccelerationVariation = 0.005;
const countRakedes = 10;

let mousePositionSet = false;
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', function (event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
  mousePositionSet = true;
})

console.log('rakede-animation.js loading');
document.addEventListener('DOMContentLoaded', async function () {
  const canvas = document.getElementById('rakede-canvas');
  resizeCanvas();
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);

  const ctx = canvas.getContext('2d');

  const rakedes = [];
  for (let i = 0; i < countRakedes; i++) {
    rakedes.push(await spawnRakede(ctx));

    //
  }
  rakedes.forEach((rakede, index) => rakede.init({
    delay: index * 100 + Math.random() * 100
  }))

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rakedes.forEach(rakede => {
      rakede.update();
      rakede.render(ctx);
    });
    requestAnimationFrame(update);
  }
  update();

  console.log('rakede-animation.js loaded');
})


async function spawnRakede(ctx) {
  const image = new Image();
  image.src = rakedeImagePath;



  await new Promise(r => image.onload = r);
  return {
    rotation: 0,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    maxSpeed: 10,
    acceleration: rakedeAcceleration,
    width: 25,
    height: 50,
    running: false,
    init ({delay}) {
      this.reset()
      setTimeout(() => {
        this.running = true;
      }, delay);
    },
    reset() {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      const centerOfScreenX = screenWidth / 2;
      const centerOfScreenY = screenHeight / 2;

      const screenDiagonal = Math.sqrt(Math.pow(screenHeight, 2) + Math.pow(screenWidth, 2)) + 100;
      const randomStartAngle = Math.random() * 2 * Math.PI;

      const startX = Math.floor(centerOfScreenX + Math.cos(randomStartAngle) * screenDiagonal / 2);
      const startY = Math.floor(centerOfScreenY + Math.sin(randomStartAngle) * screenDiagonal / 2);

      const angleVariation = Math.PI;
      const randomTargetAngle = randomStartAngle + Math.PI + (Math.random() * 2 * angleVariation - angleVariation);

      const targetX = Math.floor(centerOfScreenX + Math.cos(randomTargetAngle) * screenDiagonal / 2);
      const targetY = Math.floor(centerOfScreenY + Math.sin(randomTargetAngle) * screenDiagonal / 2);

      const angleStartToTarget = Math.atan2(targetY - startY, targetX - startX);

      this.x = startX;
      this.y = startY;
      this.vx = 0;
      this.vy = 0;
      this.rotation = angleStartToTarget
      this.acceleration = rakedeAcceleration + Math.random() * 2 * rakedeAccelerationVariation - rakedeAccelerationVariation;

    },
    render(xtx) {
      if (!this.running) {
        return;
      }
      xtx.save();
      xtx.translate(this.x, this.y);
      xtx.rotate(this.rotation + Math.PI/2);
      xtx.drawImage(image, -this.width / 2, -this.height / 2, this.width, this.height);
      xtx.restore();
    },
    update() {
      if (!this.running) {
        return;
      }
      this.vx += Math.cos(this.rotation) * this.acceleration;
      this.vy += Math.sin(this.rotation) * this.acceleration;
      this.x += this.vx;
      this.y += this.vy;

      const distanceToCenter = Math.sqrt(Math.pow(this.x - window.innerWidth / 2, 2) + Math.pow(this.y - window.innerHeight / 2, 2));
      const screenDiagonal = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));

      if (mousePositionSet) {
        // gravitational attract to mouse position
        const distanceToMouse = Math.sqrt(Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2));
        const angleToMouse = Math.atan2(mouseY - this.y, mouseX - this.x);
        const accelerationToMouse = Math.min(1 / Math.pow(distanceToMouse, 2), 1) * 100;
        this.vx += Math.cos(angleToMouse) * accelerationToMouse;
        this.vy += Math.sin(angleToMouse) * accelerationToMouse;
      }

      // limit speed
      const speed = Math.sqrt(Math.pow(this.vx, 2) + Math.pow(this.vy, 2));
      if (speed > this.maxSpeed) {
        this.vx *= this.maxSpeed / speed;
        this.vy *= this.maxSpeed / speed;
      }

      this.rotation = Math.atan2(this.vy, this.vx);

      if (distanceToCenter > screenDiagonal / 2 + 100) {
        this.reset();
      }
    }
  }
}
