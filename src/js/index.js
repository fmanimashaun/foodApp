import '../scss/styles.scss';
import menuArray from './data.js';
import renderMenu from './renderMenu.js';

// get the menu container element
const menuContainer = document.querySelector('.app__body-menu');

// Render the menu
renderMenu(menuArray, menuContainer);
