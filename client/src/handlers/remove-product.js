/* eslint-disable folders/match-regex */
import { data } from '../../data.js';
import { isProductExist } from '../logic/is-product-exist.js';
import { renderList } from '../components/render-list.js';

export const removeProduct = (event) => {
  // checks that the remove button is clicked
  if (event.target.id !== 'removeBtn') {
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
      'Please write a product to be REMOVED';
  } else {
    // declaring new array to retrieve all the items form the products array after deleting an item
    let newArray = [];

    // check if the product exists in the list
    if (isProductExist(data.products, productName)) {
      // removing the product from the array, and save the remaining items in newArray
      newArray = data.products.filter((ele) => ele !== productName);

      // overwrite the products array
      data.products = newArray;

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
    } else {
      // show a message that the product is not exist
      document.getElementById('productExist').innerHTML =
        'Product is NOT exist';
    }
  }
};
