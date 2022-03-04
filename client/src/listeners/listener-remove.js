/* eslint-disable folders/match-regex */
import { removeProduct } from '../handlers/remove-product.js';

export const listenerRemove = (id) => {
  document.getElementById(id).addEventListener('click', removeProduct);
};
