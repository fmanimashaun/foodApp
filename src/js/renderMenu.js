const renderMenu = async (arr, location) => {
  // Generate the internal HTML for the menu container
  const menuHTML = await Promise.all(arr.map(async (item) => {
    // Import the image for the menu item
    const img = await import(`../img/${item.image}`);

    // Return the HTML for the menu item
    return `
      <div class="app__body-menu-item">
        <div class="app__body-menu-item-info">
          <img class="app__body-menu-item-img" src="${img.default}" alt="${item.name} icon" aria-hidden='true'>
          <div class="app__body-menu-item-details">
            <h2 class="app__body-menu-item-name">${item.name}</h2>
            <p class="app__body-menu-item-desc">${item.ingredients.join(', ')}</p>
            <p class="app__body-menu-item-price">$${item.price}</p>
          </div>
        </div>
        <button class="app__body-menu-item-btn" aria-label='add ${item.name} to cart at $${item.price} per unit'>
          +
        </button>
      </div>
    `;
  }));

  // return innerHTML for the menu container
  location.insertAdjacentHTML('afterbegin', menuHTML.join(''));
};

export default renderMenu;