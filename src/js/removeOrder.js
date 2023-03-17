import renderOrders from './renderOrders.js';

const removeOrder = (itemId) => {
  const orderObj = JSON.parse(localStorage.getItem('order'));
  const orderItems = orderObj.items;
  const remainingItems = orderItems.filter((item, index) => index !== itemId);
  orderObj.items = remainingItems;
  localStorage.setItem('order', JSON.stringify(orderObj));
  renderOrders();
};

export default removeOrder;