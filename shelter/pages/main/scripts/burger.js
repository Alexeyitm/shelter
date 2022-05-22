import { page, burgerButton, burgerLinks, burgerPopup, burgerMenu, headerLogo } from './variables.js';

const turnButton = () => {
  burgerButton.classList.toggle('button-burger_open');
}

const openPopup = () => {
  burgerPopup.classList.toggle('burger_active');
}

const openMenu = () => {
  burgerMenu.classList.toggle('burger__menu_active');
}

const disableScroll = () => {
  page.classList.toggle('page_disabled');
}

const hideLogo = () => {
  headerLogo.classList.toggle('header__logo_hide');
}




burgerButton.addEventListener('click', () => {
  turnButton();
  openPopup();
  openMenu();
  hideLogo();
  disableScroll();
});

burgerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    turnButton();
    openPopup();
    openMenu();
    hideLogo();
    disableScroll();
  })
});

burgerPopup.addEventListener('click', () => {
  turnButton();
  openPopup();
  openMenu();
  hideLogo();
  disableScroll();
});
burgerMenu.addEventListener('click', (e) => e.stopPropagation());