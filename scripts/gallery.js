const galleryBtnElement = document.querySelector('.portfolio__container');

const getNumbers = (from, to) => {
  const arr = [];

  for (let i = from; i <= to; i++) {
    arr.push(i);
  }

  return arr;
};

const createImageGallery = (photoNumbers, period) => {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('portfolio__images');

  photoNumbers.map(number => {
    const container = document.createElement('div');
    container.classList.add('portfolio__img-wrapper');

    const img = document.createElement('img');

    img.classList.add('portfolio__img');
    img.setAttribute('alt', `photo ${period}`);
    img.src = `./assets/img/${period}/${number}.jpg`;

    container.append(img);

    imgContainer.append(container);
  });

  return imgContainer;
};

export const renderGallery = period => {
  const firstContainer = createImageGallery(getNumbers(1, 3), period);
  const secondContainer = createImageGallery(getNumbers(4, 6), period);

  const portfolioGalleryElem = document.querySelector('.portfolio__gallery');
  portfolioGalleryElem.innerHTML = '';
  portfolioGalleryElem.append(firstContainer, secondContainer);
};

const onChangeButtons = event => {
  const allButtons = document.querySelectorAll('.portfolio__button');
  allButtons.forEach(btn => {
    btn.dataset.content === event
      ? btn.classList.add('portfolio__button_active')
      : btn.classList.remove('portfolio__button_active');
  });
};

const onChangeChoice = event => {
  if (event.target.closest('button') === null) {
    return;
  }

  onChangeButtons(event.target.dataset.content);
  renderGallery(event.target.dataset.content);
};

export const initGallery = () => {
  galleryBtnElement.addEventListener('click', onChangeChoice);
};
