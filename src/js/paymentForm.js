const renderpaymentForm = () => {
  const appBody = document.querySelector('.app__body');

  const order = JSON.parse(localStorage.getItem('order'));

  const totalPrice = order.reduce((acc, item) => acc + item.price, 0);

  const formCardHtml = `
    <div class="app__body-payment">
      <h2 class="app__body-payment-title">Enter card details</h2>
      <form class="app__body-payment-form">
        <input class="app__body-payment-input" type="text" name="card-name" id="card-name"
          aria-label='enter your name' placeholder='Enter your name' required>
        <input class="app__body-payment-input" type="text" inputmode="numeric" name="card-numner" id="card-number"
          aria-label='Enter card number' placeholder='Enter card number' required>
        <input class="app__body-payment-input" type="text" inputmode="numeric" name="card-cvv" id="card-cvv"
          aria-label='Enter cvv' placeholder='Enter CVV' required>
        <input class="app__body-payment-submit" type="submit" value='Pay' data-submit-order="${totalPrice}">
      </form>
    </div>
  `;

  appBody.insertAdjacentHTML('afterbegin', formCardHtml);
};

export default renderpaymentForm;