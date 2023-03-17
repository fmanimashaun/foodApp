import menuArray from './data.js';
import renderOrders from './renderOrders.js';

const addOrder = (itemId) => {
  const orderObj = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : { complete: false, items: [] };
  const orderItem = menuArray.find((item) => item.id === itemId);
  const itemsArr = orderObj.items;
  itemsArr.push(orderItem);
  orderObj.items = itemsArr;
  localStorage.setItem('order', JSON.stringify(orderObj));
  renderOrders();
};

export default addOrder;