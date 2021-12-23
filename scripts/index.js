import { initNavigation, changeLanguage } from './changeLanguage.js';
import { initGallery, renderGallery } from './gallery.js';
import { initControls } from './player.js';
import { initEventForm } from './form.js';
import { scrollAnchor } from './scrollAnchor.js';
import { initMenu, toggleMenu } from './burgerMenu.js';

document.addEventListener('DOMContentLoaded', () => {
  changeLanguage();
  renderGallery('autumn');
  initNavigation();
  initGallery();
  initControls();
  initEventForm();
  initMenu();
  scrollAnchor();
});

window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  const wrapper = document.querySelector('.wrapper');
  preloader.style.display = 'none';
  wrapper.style.display = 'block';
});

document.addEventListener('click', e => {
  const menu = document.querySelector('.header__lists');
  const hamburger = document.querySelector('.header__btn-menu');

  const target = e.target;
  const its_menu = target == menu || menu.contains(target);
  const its_hamburger = target == hamburger;

  if (!its_menu && !its_hamburger) {
    toggleMenu();
  }
});
