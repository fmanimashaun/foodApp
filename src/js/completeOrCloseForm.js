import renderMenu from './renderMenu.js';
import renderOrders from './renderOrders.js';

const completeorCloseForm = (e) => {
  if (e.target.dataset.closeBtn) {
    renderMenu();
  } else {
    e.preventDefault();

    // get the form element
    const form = e.target.closest('.app__body-payment-form');

    // get the order object from localstorage
    const orderObj = JSON.parse(localStorage.getItem('order'));

    // get the submitted form data
    const formData = new FormData(form);
    // set the order object to complete
    orderObj.complete = true;

    // set the order object to the submitted form data
    orderObj.customer = formData.get('CardName');

    // set the order object back to localstorage
    localStorage.setItem('order', JSON.stringify(orderObj));

    // render the menu & order section
    renderMenu();
    renderOrders();

    // reset the form and clear localstorage
    form.reset();
    localStorage.removeItem('order');
  }
};

export default completeorCloseForm;