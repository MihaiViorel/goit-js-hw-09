import flatpickr from "flatpickr/dist/flatpickr.min.js";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const start = document.querySelector('[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      Notify.warning('Please choose a date in the future');
      start.disabled = true;
    } else {
      start.disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);

const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let countdownInterval;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const updateTimer = () => {
  const currentDate = new Date();
  const selectedDate = flatpickr("#datetime-picker").selectedDates[0];
  const difference = selectedDate - currentDate;

  if (difference <= 0) {
    clearInterval(countdownInterval);
    Notify.warning("Countdown finished!");
  } else {
    const { days, hours, minutes, seconds } = convertMs(difference);
    daysElement.textContent = addLeadingZero(days);
    hoursElement.textContent = addLeadingZero(hours);
    minutesElement.textContent = addLeadingZero(minutes);
    secondsElement.textContent = addLeadingZero(seconds);
  }
};

start.addEventListener('click', () => {
  countdownInterval = setInterval(updateTimer, 1000);
});