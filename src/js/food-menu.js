import menuMarkup from '../templates/menu.hbs';
import menuFood from '../menu.json';



const foodMenu = menuMarkup(menuFood);

const renderMenu = document.querySelector('.js-menu');
renderMenu.insertAdjacentHTML('beforeend', foodMenu);