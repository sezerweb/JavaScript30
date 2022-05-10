const secondHand = document.querySelector(".second");
const minutedHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");
const dayArea = document.querySelector(".day");
const dayNameArea = document.querySelector(".dayName");
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function perSecond() {
  const time = new Date();
  //const time = new Date("July 21, 1983 17:59:59") ;
  let second = time.getSeconds();
  let minute = time.getMinutes();
  let hour = time.getHours();
  let day = time.getDate();

  let secondAngel = (second / 60) * 360 + 90;
  let minuteAngel = (minute / 60) * 360 + (second / 60) * 6 + 90;
  let hourAngel = (hour / 12) * 360 + (minute / 60) * 30 + 90;
  let dayName = weekday[time.getUTCDay()];
  

  secondHand.style.transform = "rotate(" + secondAngel + "deg)";
  minutedHand.style.transform = "rotate(" + minuteAngel + "deg)";
  hourHand.style.transform = "rotate(" + hourAngel + "deg)";
  dayArea.innerHTML = day;
  dayNameArea.innerHTML = dayName;
}

setInterval(perSecond, 1000);
perSecond();
