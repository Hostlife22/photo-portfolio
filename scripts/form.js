const formElem = document.querySelector('.contacts__form');

const onCreateEvent = event => {
  event.preventDefault();
  formElem.reset();
  const formData = Object.fromEntries(new FormData(formElem));
};

export function initEventForm() {
  formElem.addEventListener('submit', onCreateEvent);
}
