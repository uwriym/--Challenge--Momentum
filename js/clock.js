const date = new Date();

//paint Time
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

//paint Date
const dateElement = document.querySelector("#date");
const year = date.getFullYear();
const month = date.getMonth();
const convertedMonth = convertMonth();
const numberOfDate = date.getDate();
const StNdRdTh = addStNdRdTh();
const day = date.getDay();
const convertedDay = convertDay();
dateElement.innerText = `${convertedDay}, ${convertedMonth} ${numberOfDate}${StNdRdTh}, ${year}`;

function convertMonth() {
  if (month === 0) {
    return "January";
  } else if (month === 1) {
    return "Feburary";
  } else if (month === 2) {
    return "March";
  } else if (month === 3) {
    return "April";
  } else if (month === 4) {
    return "May";
  } else if (month === 5) {
    return "June";
  } else if (month === 6) {
    return "July";
  } else if (month === 7) {
    return "August";
  } else if (month === 8) {
    return "September";
  } else if (month === 9) {
    return "October";
  } else if (month === 10) {
    return "November";
  } else {
    return "December";
  }
}

function convertDay() {
  if (day === 0) {
    return "Sunday";
  } else if (day === 1) {
    return "Monday";
  } else if (day === 2) {
    return "Tuesday";
  } else if (day === 3) {
    return "Wednesday";
  } else if (day === 4) {
    return "Thursday";
  } else if (day === 5) {
    return "Friday";
  } else {
    return "Saturday";
  }
}

function addStNdRdTh() {
  if (
    numberOfDate === 1 ||
    numberOfDate === 11 ||
    numberOfDate === 21 ||
    numberOfDate === 31
  ) {
    return "st";
  } else if (numberOfDate === 2 || numberOfDate === 12 || numberOfDate === 22) {
    return "nd";
  } else if (numberOfDate === 3 || numberOfDate === 13 || numberOfDate === 23) {
    return "rd";
  } else {
    return "th";
  }
}
