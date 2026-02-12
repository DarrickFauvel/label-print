const label = document.querySelector(".label");

const padZero = (number) => String(number).padStart(2, "0");

const today = new Date();
const year = today.getFullYear();
const month = padZero(today.getMonth() + 1);
const day = padZero(today.getDate());
const hours = padZero(today.getHours());
const minutes = padZero(today.getMinutes());
const seconds = padZero(today.getSeconds());

const labelText = `${year}${month}${day}-${hours}${minutes}${seconds}`;

label.textContent = labelText;
