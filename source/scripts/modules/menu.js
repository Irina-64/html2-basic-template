const nav = document.querySelector('.main-nav');
const toggle = document.querySelector('.main-nav__toggle');

const openMenu = () => {
  nav.classList.remove('main-nav--closed');
  toggle.setAttribute('aria-expanded', 'true');
  toggle.setAttribute('aria-label', 'Закрыть меню');
};

const closeMenu = () => {
  nav.classList.add('main-nav--closed');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Открыть меню');
};

const initMenu = () => {
  if (!nav || !toggle) {
    return;
  }

  toggle.addEventListener('click', () => {
    if (nav.classList.contains('main-nav--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
};

export { initMenu };
