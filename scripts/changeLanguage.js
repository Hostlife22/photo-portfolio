import { setItem, getItem } from './storage.js';
import i18Obj from './translate.js';

const headerLanguagesElem = document.querySelector('.header__languages');

const renderSelectedLanguage = lang => {
  const languagesElements = document.querySelectorAll('.header__language');
  languagesElements.forEach(elem => {
    elem.dataset.lang !== lang
      ? elem.classList.remove('header__language_active')
      : elem.classList.add('header__language_active');
  });

  const dataContent = document.querySelectorAll('[data-content]');
  dataContent.forEach(el => (el.textContent = i18Obj[lang][el.dataset.content]));
};

export function changeLanguage() {
  const languageActiveElem = document.querySelector('.header__language_active');
  const lang = getItem('lang') || languageActiveElem.dataset.lang;

  location.href = window.location.pathname + '#' + lang;

  let hash = location.href.slice(-2);
  if (hash !== 'ru' || hash !== 'en') {
    location.href = window.location.pathname + '#' + lang;
  }

  setItem('lang', lang);
  renderSelectedLanguage(lang);
}

const onChangeLanguges = event => {
  if (event.target.closest('span[class]') === null) {
    return;
  }
  setItem('lang', event.target.dataset.lang);
  changeLanguage();
};

export const initNavigation = () => {
  headerLanguagesElem.addEventListener('click', onChangeLanguges);
};
