/* eslint-disable folders/match-regex */
import { data } from '../../data.js';
import { isProductExist } from '../logic/is-product-exist.js';
import { renderList } from '../components/render-list.js';

export const addProduct = (event) => {
  // reading the product name from the form.

  if (event.target.id !== 'addBtn') {
    return;
  }
  const productName = document.getElementById('productName').value;
  // console.log(productName);
  // check if the product exists in the list
  if (isProductExist(data.products, productName)) {
    document.getElementById('productExist').innerHTML = 'Product already exist';
  } else {
    // adding the product to the array
    data.products.push(productName);
    // render the array to the list menu section
    const productsList = renderList(data.products);
    // get list Menu and assign it to variable
    const listMenue = document.getElementById('list');
    // clearing the list Menu
    listMenue.innerHTML = '';
    // add the products list to the list menu
    listMenue.appendChild(productsList);
  }
};
