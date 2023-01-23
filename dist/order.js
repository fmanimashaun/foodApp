const addOrder = (order) => {
  return `
  <div class="app__footer-order-item">
    <p class="app__footer-order-item-name">${order.name}<button class="app__footer-order-item-btn">remove</button></p>
    <p class="app__footer-order-item-price">$${order.price}</p>
  </div>
  `;
};