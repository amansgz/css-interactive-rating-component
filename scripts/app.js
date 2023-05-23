const options = document.querySelectorAll('input[name="rate"]');
const btnSubmit = document.querySelector('.article__button');
const articleRates = document.getElementById('articleRates');
const articleThanks = document.getElementById('articleThanks');
const message = document.getElementById('message');

// get the value of selected option
let option_value_selected;

options.forEach(option => {
  option.addEventListener('click', () => {  
    if(option.checked) {
      option_value_selected = option.value;
    }
  });
});

// show thank you article with message and hide article rates
btnSubmit.addEventListener('click', () => {
  if(option_value_selected) {
    articleRates.style.display = 'none';
    articleThanks.classList.add('show');
    
    message.innerText = `You selected ${option_value_selected} out of 5`;
  }
});
