import menuArray from './data.js';
import renderOrders from './renderOrders.js';

const addOrder = (itemId) => {
  const orderItems = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : [];
  const orderItem = menuArray.find((item) => item.id === itemId);
  orderItems.push(orderItem);
  localStorage.setItem('order', JSON.stringify(orderItems));
  renderOrders();
};

export default addOrder;