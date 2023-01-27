const renderOrders = async () => {
  const orderContainer = document.querySelector('.app__footer');
  const order = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : [];

  // Generate the internal HTML for the order items
  if (order.length > 0) {
    let total = 0;
    let orderItemsHtml = '';

    order.forEach((orderItem, index) => {
      total += orderItem.price;
      orderItemsHtml += `
        <div class="app__footer-order-item">
          <p class="app__footer-order-item-name">${orderItem.name}<button class="app__footer-order-item-btn" data-remove-order=${index}>remove</button></p>
          <p class="app__footer-order-item-price">$${orderItem.price}</p>
        </div>
      `;
    });

    const orderHtml = `
      <h2 class="app__footer-title ">Your order</h2>
      <div class="app__footer-order">
        ${orderItemsHtml}
      </div>
      <div class="app__footer-order-total">
        <p class="app__footer-order-total-title">Total price:</p>
        <p class="app__footer-order-total-price">$${total}</p>
      </div>
      <button class="app__footer-order-btn" data-submit='pay'>Complete order</button>
    `;

    // return innerHTML for the order container
    orderContainer.innerHTML = orderHtml;
  } else {
    orderContainer.innerHTML = '';
  }
};

export default renderOrders;