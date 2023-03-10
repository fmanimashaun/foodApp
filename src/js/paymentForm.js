import IMG from '../img/close.svg';
import formListener from './formListener.js';

const renderpaymentForm = () => {
  const appBodyMenu = document.querySelector('.app__body-menu');

  const orderObj = JSON.parse(localStorage.getItem('order'));

  const orderArr = orderObj.items;

  const totalPrice = orderArr.reduce((acc, item) => acc + item.price, 0);

  const formCardHtml = `
     <div class="app__body-payment">
        <div class="app__body-payment-header">
          <h2 class="app__body-payment-title">Enter card details</h2>
          <button class='app__body-payment-close-btn' data-close-btn='close'><img class="app__body-payment-close-btn-img" src="${IMG}" alt="close icon"></button>
        </div>

        <form class="app__body-payment-form">
          <input class="app__body-payment-input" type="text" name="CardName" id="card-name"
                  aria-label='enter your name' placeholder='Enter your name' required>
          
          <input class="app__body-payment-input" type="text" maxlength="16" pattern="[0-9]*" inputmode="numeric" name="cardNumner"
                  id="card-number" aria-label='Enter card number' placeholder='Enter card number' required>
          
          <input class="app__body-payment-input" type="text" maxlength="3" inputmode="numeric" name="cardCvv" id="card-cvv"
                  aria-label='Enter cvv' placeholder='Enter CVV' required>
          <input class="app__body-payment-submit" type="submit" value='Pay' data-submit-order="${totalPrice}">
        </form>
    </div>
  `;

  appBodyMenu.insertAdjacentHTML('afterbegin', formCardHtml);

  formListener();
};

export default renderpaymentForm;