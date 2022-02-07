const clock = document.querySelector("#clock");

function paintTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const miuntes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${miuntes}:${seconds}`;
}
paintTime();
setInterval(paintTime, 1000);
