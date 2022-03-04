/* eslint-disable folders/match-regex */
import { data } from '../../data.js';
import { isProductExist } from '../logic/is-product-exist.js';
import { renderList } from '../components/render-list.js';

export const addProduct = (event) => {
  // checks that the add button is clicked
  if (event.target.id !== 'addBtn') {
    return;
  }

  // clearing any error message
  const message = document.getElementById('productExist');
  message.innerHTML = '';

  // reading the product name from the form
  const productName = document.getElementById('productName').value;
  // check if the user did not write any thing
  if (productName === '') {
    document.getElementById('productExist').innerHTML =
      'Please write a product to be added';
    // check if the product exists in the list
  } else if (isProductExist(data.products, productName)) {
    // show a message that the product is exist
    document.getElementById('productExist').innerHTML = 'Product already exist';
  } else {
    // adding the product to the array
    data.products.push(productName);

    // render the array to the list menu section
    const productsList = renderList(data.products);

    // get list Menu and assign it to variable
    const listMenu = document.getElementById('list');

    // clearing the list Menu
    listMenu.innerHTML = '';

    // add the products list to the list menu
    listMenu.appendChild(productsList);

    // clear the text box
    document.getElementById('productName').value = '';
  }
};
