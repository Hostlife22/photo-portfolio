import { initNavigation, changeLanguage } from './changeLanguage.js';
import { initGallery, renderGallery } from './gallery.js';
import { initControls } from './player.js';

document.addEventListener('DOMContentLoaded', () => {
  changeLanguage();
  renderGallery('autumn');
  initNavigation();
  initGallery();
  initControls();
});
