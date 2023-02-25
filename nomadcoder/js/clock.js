const clock = document.getElementById('clock');

let getClock = function() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hour} : ${minute} : ${seconds}`;
}

setInterval(getClock, 1000);