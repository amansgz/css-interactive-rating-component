const options = document.querySelectorAll('input[name="rate"]');
const label = document.querySelectorAll('.option')
const btnSubmit = document.querySelector('.article__button');
const message = document.getElementById('message');
const articleRates = document.getElementById('articleRates');
const articleThanks = document.getElementById('articleThanks');

// get the value of the option selected
let option_selected;

options.forEach(option => {
  option.addEventListener('click', () => {  
    if(option.checked) {
      label[option.value - 1].classList.add('selected');
      option_selected = option.value;
    }
  });
});

// show thank you article with message / hide article rates
btnSubmit.addEventListener('click', () => {
  articleRates.style.display = 'none';
  articleThanks.classList.add('show');
  
  message.innerText = `You selected ${option_selected} out of 5`;
});
