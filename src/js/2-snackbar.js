import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function returnPromise(delay, userSelected) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userSelected) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
  promise
    .then(value => {
      iziToast.success({
        title: 'OK',
        message: value,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error,
        position: 'topRight',
      });
    })
    .finally(() => {
      form.reset();
    });
}

const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const delay = e.target.elements.delay.value;
  const userSelected = e.target.elements.state.value;
  if (userSelected == 'fulfilled') {
    returnPromise(delay, true);
  } else {
    returnPromise(delay, false);
  }
});
