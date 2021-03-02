function setMaximumDate() {
  // set maximum date as 18 years ago
  const date = new Date();
  date.setFullYear(date.getFullYear() - 18);
  const age18 = date.toISOString().split('T')[0];
  document.querySelector('#date').max = age18;
}

function checkValidity(e) {
  e.target.classList.toggle('invalid', !e.target.checkValidity());
}

function init() {
  setMaximumDate();

  // set up event listeners for showing invalidity
  for (const input of document.querySelectorAll('input')) {
    input.addEventListener('blur', checkValidity);
  }
}

window.addEventListener('load', init);
