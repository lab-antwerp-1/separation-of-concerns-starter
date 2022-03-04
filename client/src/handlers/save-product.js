/* eslint-disable folders/match-regex */
import { data } from '../../data.js';
import { isProductExist } from '../logic/is-product-exist.js';
import { renderList } from '../components/render-list.js';
import { showHide } from '../logic/show-hide-elements.js';

export const saveProduct = (event) => {
  // checks that the save button is clicked
  if (event.target.id !== 'saveBtn') {
    return;
  }

  // clearing any error message
  const message = document.getElementById('productExist');
  message.innerHTML = '';

  // reading the product name from the form
  const productName = document.getElementById('productName').value;

  // check if the product exists in the list
  if (isProductExist(data.products, productName)) {
    const productIndex = data.products.findIndex((ele) => ele === productName);

    // reading the Edited product name from the form
    const productNewName = document.getElementById('editProductName').value;

    // change the product in the array
    data.products[productIndex] = productNewName;

    // render the array to the list menu section
    const productsList = renderList(data.products);

    // get list Menu and assign it to variable
    const listMenu = document.getElementById('list');

    // clearing the list Menu
    listMenu.innerHTML = '';

    // add the products list to the list menu
    listMenu.appendChild(productsList);

    // hide editing elements on the form
    showHide();

    // clear the text boxes
    document.getElementById('productName').value = '';
    document.getElementById('editProductName').value = '';
  } else {
    // show a message that the product is not exist
    document.getElementById('productExist').innerHTML = 'Product is NOT exist';
  }
};
