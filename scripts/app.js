const cardRates = document.getElementById('cardRates');
const options = document.querySelectorAll('input[name="rate"]');
const btnSubmit = document.querySelector('.btn__submit');
const cardThanks = document.getElementById('cardThanks');
const thanksMessage = document.getElementById('thanksMessage');
const btnRateAgain = document.querySelector('.btn__rate__again');

// get the value of selected option rate
let option_value_selected;

options.forEach(option => {
  option.addEventListener('click', () => {  
    if(option.checked) {
      option_value_selected = option.value;
    }
  });
});

// show option rate selected with thanks message
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  if(option_value_selected) {
    cardRates.style.display = 'none';
    cardThanks.classList.add('show');
    
    thanksMessage.innerText = `You selected ${option_value_selected} out of 5`;
  }
});


btnRateAgain.addEventListener("click", () => {
  location.reload();
}) 
