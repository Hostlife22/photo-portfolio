const btnElem = document.querySelector('.header__btn-menu');

export function checkClassBtn() {
  const activeMenuElem = document.querySelector('.header__btn-menu_active');

  if (activeMenuElem) {
    toggleMenu();
  }
}

export function toggleMenu() {
  const btn = btnElem.classList.toggle('header__btn-menu_active');

  const navElement = document.querySelector('.header__lists');
  if (btn) {
    navElement.style.right = 0;
  } else {
    navElement.style.right = -1000 + 'px';
  }
}

const changeState = e => {
  e.stopPropagation();

  toggleMenu();
};

export function initMenu() {
  btnElem.addEventListener('click', changeState);
}
