import renderOrders from './renderOrders.js';

const removeOrder = (itemId) => {
  const orderItems = JSON.parse(localStorage.getItem('order'));
  const remainingItems = orderItems.filter((item, index) => index !== itemId);
  localStorage.setItem('order', JSON.stringify(remainingItems));
  renderOrders();
};

export default removeOrder;