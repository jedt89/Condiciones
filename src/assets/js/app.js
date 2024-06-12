let imageContainer = document.querySelector('#image');
let stickersContainer = document.querySelector('#stickers-container');
let totalSum = document.querySelector('#total-sum');
let totalContainer = document.querySelector('#total-container');
let totalStickers = document.querySelector('#full-stickers');
let quantityInputs = document.querySelectorAll('input');
let selectors = document.querySelectorAll('select');
let display = document.querySelector('#display');
let displayResult = document.querySelector('#display-result');
let checkPassButton = document.querySelector('#check-pass-button');

const checkQuantityStickers = () => {
  const total =
    Number(quantityInputs[0].value) +
    Number(quantityInputs[1].value) +
    Number(quantityInputs[2].value);

  if (total > 10) {
    totalContainer.style.display = 'none';
    totalStickers.style.display = 'flex';
  } else {
    totalSum.textContent = total;
    totalContainer.style.display = 'flex';
    totalStickers.style.display = 'none';
  }
};

const checkPassword = () => {
  const pass = `${selectors[0].value}${selectors[1].value}${selectors[2].value}`;
  display.textContent = pass;

  switch (pass) {
    case '911':
      displayResult.textContent = 'Password 1 correcto!';
      displayResult.style.color = '#00ba00';
      break;

    case '714':
      displayResult.textContent = 'Password 2 correcto!';
      displayResult.style.color = '#00ba00';
      break;

    default:
      displayResult.textContent = 'Password incorrecto!';
      displayResult.style.color = 'red';
      break;
  }
};

// Init listeners
(initListeners = () => {
  totalSum.textContent = '0';
  totalStickers.style.display = 'none';
  imageContainer.addEventListener('click', () => {
    imageContainer.classList.toggle('border-red');
  });

  quantityInputs.forEach((input) => {
    input.value = 0;
    input.onkeyup = () => {
      checkQuantityStickers();
    };
  });

  selectors.forEach((select) => {
    let options = [];
    for (let i = 1; i <= 9; i++) {
      options.push(`<option value='${i}'>${i}</option>`);
    }

    options.forEach((option) => {
      select.insertAdjacentHTML('beforeend', option);
    });
    select.value = 1;
  });
  checkPassButton.onclick = () => checkPassword();
})();
