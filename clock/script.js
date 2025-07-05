const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDeg = ((seconds / 60) * 360) + 90;
  const minutesDeg = ((minutes / 60) * 360) + 90;
  const hoursDeg = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30) + 90;

  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);
setDate();
