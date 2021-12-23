import { initNavigation, changeLanguage } from './changeLanguage.js';
import { initGallery, renderGallery } from './gallery.js';
import { initControls } from './player.js';
import { initEventForm } from './form.js';
import { scrollAnchor } from './scrollAnchor.js';

document.addEventListener('DOMContentLoaded', () => {
  changeLanguage();
  renderGallery('autumn');
  initNavigation();
  initGallery();
  initControls();
  initEventForm();
  scrollAnchor();
});

window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  const wrapper = document.querySelector('.wrapper');
  preloader.style.display = 'none';
  wrapper.style.display = 'block';
});
