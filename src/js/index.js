import '../scss/styles.scss';
import renderMenu from './renderMenu.js';
import addOrder from './addOrder.js';
import renderOrders from './renderOrders.js';
import removeOrder from './removeOrder.js';

// checking localstorage before loading page
if (localStorage.getItem('order')) {
  // Render the menu
  renderMenu();

  // Render pending orders
  renderOrders();
} else {
  // Render the menu
  renderMenu();
}

document.addEventListener('click', (e) => {
  if (e.target.dataset.addOrder) {
    const orderId = parseInt(e.target.dataset.addOrder, 10);
    addOrder(orderId);
  } else if (e.target.dataset.removeOrder) {
    const orderId = parseInt(e.target.dataset.removeOrder, 10);
    removeOrder(orderId);
  }
});
