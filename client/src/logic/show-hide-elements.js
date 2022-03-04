// eslint-disable-next-line spellcheck/spell-checker
/* eslint-disable no-undef */
/* eslint-disable folders/match-regex */

export const showHide = () => {
  const label = document.getElementById('editLabel');
  const textBox = document.getElementById('editProductName');
  const btn = document.getElementById('saveBtn');

  if (label.style.display === 'none') {
    label.style.display = 'block';
    textBox.style.display = 'block';
    btn.style.display = 'block';
  } else {
    label.style.display = 'none';
    textBox.style.display = 'none';
    btn.style.display = 'none';
  }
};
