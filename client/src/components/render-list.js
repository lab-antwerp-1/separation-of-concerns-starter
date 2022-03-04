/* eslint-disable folders/match-regex */
// this function is to return the product from the array and show them as UL in the list Menu!

export const renderList = (productsArray = []) => {
  const ulEl = document.createElement('ul');

  for (const newProduct of productsArray) {
    const liEl = document.createElement('li');
    // eslint-disable-next-line spellcheck/spell-checker
    liEl.innerHTML = `<input type="checkbox" id="item" />
    <label for="item"> ${newProduct} </label><br>`;
    ulEl.appendChild(liEl);
  }
  return ulEl;
};
