import '../scss/styles.scss';
import IMG from '../img/Online payment_Two.svg';

// get rating and submit buuton
const rating = document.querySelector('.js-rating');
const submitBtn = document.querySelector('.js-submit');

rating.addEventListener('click', (e) => {
  if (e.target.matches('button') && !e.target.classList.contains('active')) {
    // get all rating buttons
    const btns = rating.querySelectorAll('button');

    // remove the active class from all bottons
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });

    // add active the clicked rating botton
    e.target.classList.add('active');
    submitBtn.disabled = false;
  }
});

const renderRateScore = (score) => {
  const cardContent = document.querySelector('.js-card-content');

  const scoreHtml = `
    <div class="rate-card__content-icon submit">
      <img src="${IMG}" alt="payment icon" class="rate-card__content-icon-img"
      aria-hidden='true'>
    </div>

    <p class="rate-card__content-submit-text">You selected ${score} out of 5</p>

    <h2 class="rate-card__content-title submit">Thank you!</h2>

    <p class="rate-card__content-msg submit">
    We appreciate you taking the time to give a rating. If you ever need more
    support, don’t hesitate to get in touch!</p>
  `;
  cardContent.innerHTML = scoreHtml;
};

const submitRating = () => {
  // check the active rating btn
  const btns = rating.querySelectorAll('button');

  // initiate a rateScore variable
  let rateScore;

  btns.forEach((btn) => {
    if (btn.classList.contains('active')) {
      rateScore = btn.innerText;
    }
  });

  renderRateScore(rateScore);
};

submitBtn.addEventListener('click', submitRating);