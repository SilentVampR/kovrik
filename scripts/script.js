const copyright = document.querySelector('.copyright');
let date = new Date();
const year = date.getFullYear();

copyright.textContent = `© 2017-${year} «Коврик-РУ»`;

const page = document.querySelector('.page');
const header = page.querySelector('.header');

const mainMenu = header.querySelector('.header__menu');

const mobileMenuButton = header.querySelector('.header__mobile-menu-link');

const showSideMenu = () => {
  page.classList.add('page_disabled');
  mainMenu.classList.add('header__menu_opened');
  mobileMenuButton.classList.add('header__mobile-menu-link_type_close');
  mobileMenuButton.removeEventListener('click', showSideMenu);
  mobileMenuButton.addEventListener('click', hideSideMenu);
}

const hideSideMenu = () => {
  page.classList.remove('page_disabled');
  mainMenu.classList.remove('header__menu_opened');
  mobileMenuButton.classList.remove('header__mobile-menu-link_type_close');
  mobileMenuButton.removeEventListener('click', hideSideMenu);
  mobileMenuButton.addEventListener('click', showSideMenu);
}

mobileMenuButton.addEventListener('click', showSideMenu);
