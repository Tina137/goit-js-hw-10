import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startButton = document.querySelector('.start-button');
const input = document.querySelector('#datetime-picker');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  value.textContent = value.textContent.padStart(2, '0');
}

let userSelectedDate;
const defaultDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: defaultDate,
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= defaultDate) {
      //   window.alert('Please choose a date in the future');
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      startButton.setAttribute('disabled', '');
    } else {
      startButton.removeAttribute('disabled');
      startButton.addEventListener('click', e => {
        let change = setInterval(() => {
          let objWTime = convertMs(
            userSelectedDate.getTime() - new Date().getTime()
          );
          const values = document.querySelectorAll('.value');
          values.forEach(e => {
            for (const element of Object.keys(objWTime)) {
              if (Object.keys(e.dataset)[0] === element) {
                startButton.setAttribute('disabled', '');
                input.setAttribute('disabled', '');
                e.textContent = objWTime[element];
                addLeadingZero(e);
                if (e.textContent < 0) {
                  clearInterval(change);
                  startButton.removeAttribute('disabled');
                  input.removeAttribute('disabled');
                  e.textContent = '00';
                }
              }
            }
          });
        }, 1000);
      });
    }
    console.log(selectedDates[0], defaultDate);
  },
};

flatpickr('#datetime-picker', options);
