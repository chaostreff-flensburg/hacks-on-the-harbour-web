const targetSelector = 'body';
const rakedeImagePath = '/assets/rakede-farbe.webp';
const rakedeSpeedPxPerSecond = 150;
const rakedeSpeedVariation = 50;
const countRakedes = 10;

console.log('rakede-animation.js loading');
document.addEventListener('DOMContentLoaded', function () {

  for (let i = 0; i < countRakedes; i++) {
    // spawn with a delay to avoid all rakedes starting at the same time
    setTimeout(() => {
      spawnRakede();
    }, i* 100 + Math.random() * 100);
  }

  console.log('rakede-animation.js loaded');
})

function spawnRakede() {
  const target = document.querySelector(targetSelector);

  const image = document.createElement('img');
  image.src = rakedeImagePath;
  image.style.position = 'fixed';
  image.style.width = '25px';
  image.style.height = '50px';

  target.appendChild(image);
  startRandomAnimation(image);
}


function startRandomAnimation(image) {
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;

  // get screen diagonal
  const screenDiagonal = Math.sqrt(Math.pow(screenHeight, 2) + Math.pow(screenWidth, 2)) + 100;
  const centerOfScreenX = screenWidth / 2;
  const centerOfScreenY = screenHeight / 2;

  const randomStartAngle = Math.random() * 2 * Math.PI;

  const startX = Math.floor(centerOfScreenX + Math.cos(randomStartAngle) * screenDiagonal / 2);
  const startY = Math.floor(centerOfScreenY + Math.sin(randomStartAngle) * screenDiagonal / 2);

  const angleVariation = Math.PI / 3;
  const randomTargetAngle = randomStartAngle + Math.PI + (Math.random() * 2 * angleVariation - angleVariation);

  const targetX = Math.floor(centerOfScreenX + Math.cos(randomTargetAngle) * screenDiagonal / 2);
  const targetY = Math.floor(centerOfScreenY + Math.sin(randomTargetAngle) * screenDiagonal / 2);

  const angleStartToTarget = Math.atan2(targetY - startY, targetX - startX) * 180 / Math.PI + 90;
  const distanceStartToTarget = Math.sqrt(Math.pow(targetY - startY, 2) + Math.pow(targetX - startX, 2));

  const speed = rakedeSpeedPxPerSecond + Math.random() * 2 * rakedeSpeedVariation - rakedeSpeedVariation;
  const duration = distanceStartToTarget / speed;

  image.style.top = `${startY}px`;
  image.style.left = `${startX}px`;
  image.style.transition = `top ${duration}s ease-in, left ${duration}s ease-in`;
  image.style.transform = `rotate(${angleStartToTarget}deg)`;

  setTimeout(() => {
    // move image to target position
    image.style.top = `${targetY}px`;
    image.style.left = `${targetX}px`;

    // after the animation is finished, start a new random animation
    setTimeout(() => {
      // reset image to initial position
      image.style.transition = '';
      image.style.transform = '';
      image.style.top = '';
      image.style.left = '';
      setTimeout(() => {
        startRandomAnimation(image)
      }, 100)
    }, duration * 1000);
  }, 1);
}
