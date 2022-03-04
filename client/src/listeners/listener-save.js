/* eslint-disable folders/match-regex */
import { saveProduct } from '../handlers/save-product.js';

export const listenerSave = (id) => {
  document.getElementById(id).addEventListener('click', saveProduct);
};
