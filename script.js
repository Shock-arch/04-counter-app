let count = 0;

// Use const for these values because the elements won't be replaced.
const countElement = document.getElementById('count');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');

increaseButton.addEventListener('click', function () {
  count = count + 1;
  countElement.textContent = count;
});

decreaseButton.addEventListener('click', function () {
  count = count - 1;
  countElement.textContent = count;
});

resetButton.addEventListener('click', function () {
  count = 0;
  countElement.textContent = count;
});
