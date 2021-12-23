const navElem = document.querySelector('.header__lists');

const onChangePosition = event => {
  if (!event.target.closest('a[href]')) {
    return;
  }

  event.preventDefault();

  const blockId = event.target.getAttribute('href').substr(1);

  document.getElementById(blockId).scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const scrollAnchor = () => {
  navElem.addEventListener('click', onChangePosition);
};
