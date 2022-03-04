/* eslint-disable folders/match-regex */
import { editProduct } from '../handlers/edit-product.js';

export const listenerEdit = (id) => {
  document.getElementById(id).addEventListener('click', editProduct);
};
