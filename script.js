"use strict";

const gloClock = document.querySelector(".glo");
const clockEl = document.querySelector(".clock");
const timeOfDay = document.querySelector(".tod");
const curDate = document.querySelector(".date");
const widget = document.querySelector(".wid");
const greetEl = document.querySelector(".greet");
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
  document.querySelector(".b1").classList.toggle("one");
}

function curDates() {
  let day = date.getDate();
  let month = yearMonths[date.getMonth()];
  let year = date.getFullYear();

  curDate.innerText = `Its ${day} ${month} ${year}`;
}

function curTime() {
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let tod = "AM";
  let greet = "";

  if (hour <= 12) {
    greet = "Morning";
  } else if (hour > 12 && hour <= 18) {
    greet = "Afternoon";
  } else {
    greet = "Evening";
  }

  if (hour >= 12) {
    tod = "PM";
  } else {
    tod = "AM";
  }

  if (hour > 12) {
    hour = hour % 12;
  }

  if (greet == "Evening") {
    document.querySelector(".ico").setAttribute("name", "moon");
  } else {
    document.querySelector(".ico").setAttribute("name", "sunny");
  }

  greetEl.textContent = `Good ${greet}`;
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
  document.querySelector(".b2").classList.toggle("two");
}

function darkLight() {
  document.querySelector(".mid").classList.toggle("light");
  document.querySelector(".b3").classList.toggle("three");
}

curDates();
setInterval(curTime, 1000);
