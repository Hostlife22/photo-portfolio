export function setItem(key, value) {
  const isLang = key === 'lang';

  if (!isLang) {
    return;
  }

  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}
