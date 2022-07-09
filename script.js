"use strict";

const gloClock = document.querySelector(".glo");
const clockEl = document.querySelector(".clock");
const timeOfDay = document.querySelector(".tod");
const curDate = document.querySelector(".date");
const widget = document.querySelector(".wid");
const yearMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let date = new Date();

function ampm() {
  clockEl.classList.toggle("cur");
  clockEl.classList.toggle("glo");
}

function curDates() {
  let day = date.getDate();
  let month = yearMonths[date.getMonth()];
  let year = date.getFullYear();

  curDate.innerText = `Its ${day} ${month} ${year}`;
}

function curTime() {
  let hour = date.getHours();
  let min = date.getMinutes();
  let tod = "AM";

  if (hour >= 12) {
    tod = "PM";
  } else {
    tod = "AM";
  }

  if (hour > 12) {
    hour = hour % 12;
  }

  clockEl.innerText = `${hour}:${min}`;
  timeOfDay.innerText = tod;
}

function themeSw() {
  if (widget.classList.contains("th1")) {
    widget.classList.remove("th1");
    widget.classList.add("th2");
  } else {
    widget.classList.remove("th2");
    widget.classList.add("th1");
  }
}

curDates();
//setInterval(curTime, 1000);
