import { addProduct } from '../handlers/add-product.js';

export const listenerAdd = (id) => {
  document.getElementById(id).addEventListener('click', addProduct);
};
