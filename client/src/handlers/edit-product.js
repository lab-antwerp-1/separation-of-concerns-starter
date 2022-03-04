/* eslint-disable folders/match-regex */
import { data } from '../../data.js';
import { isProductExist } from '../logic/is-product-exist.js';
import { showHide } from '../logic/show-hide-elements.js';

export const editProduct = (event) => {
  // checks that the edit button is clicked
  if (event.target.id !== 'editBtn') {
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
      'Please write the product you want to EDIT';
    // check if the product exists in the list
  } else if (isProductExist(data.products, productName)) {
    // show editing elements on the form
    showHide();
  } else {
    // show a message that the product is not exist
    document.getElementById('productExist').innerHTML = 'Product is NOT exist';
  }
};
