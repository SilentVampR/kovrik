const headerMenu = document.querySelector('.header__menu');
const content = document.querySelector('.content');
const headerMenuLinks = Array.from(headerMenu.querySelectorAll('.header__menu-link'));
const contentSliderLinks = Array.from(content.querySelectorAll('.section-slider__link'));
const contentPreloader = document.querySelector('.content__preloader');
let currentPageName = headerMenu.querySelector('.header__menu-link_active').dataset.link;

const changeActiveLink = (current) => {
  headerMenuLinks.forEach(item => {
    if (item.dataset.link === current) {
      item.classList.add('header__menu-link_active');
    } else {
      item.classList.remove('header__menu-link_active');
    }
  })
}

const hidePage = (page) => {
  const pageToHide = document.querySelector(`.content__page_type_${page}`);
  if (!pageToHide.classList.contains('content__page_hidden')) {
    pageToHide.classList.add('content__page_hidden');
    setTimeout(() => {
      pageToHide.classList.add('content__page_no-display')
    }, 300);
  }
}
const showPage = (page) => {
  const pageToShow = document.querySelector(`.content__page_type_${page}`);
  if (pageToShow.classList.contains('content__page_hidden')) {
    pageToShow.classList.remove('content__page_no-display');
    pageToShow.classList.remove('content__page_hidden');
  }
}

const setContentPreLoader = (active) => {
  if (active) {
    contentPreloader.classList.add('content__preloader_active');
  } else {
    contentPreloader.classList.remove('content__preloader_active');
  }
}

const changePage = (e) => {
  const current = e.target;
  const currentName = current.dataset.link;
  if (currentName && currentName !== 'undefind' && currentName !== currentPageName) {
    setContentPreLoader(true);
    window.scroll({
      top: 0,
      //behavior: "smooth"
    });
    changeActiveLink(currentName);
    hidePage(currentPageName);
    currentPageName = document.querySelector(`.content__page_type_${currentName}`).dataset.name;
    showPage(currentPageName);
    setTimeout(() => {
      setContentPreLoader(false);
    }, 1000);
  }
}

if (headerMenuLinks.length > 0) {
  headerMenuLinks.forEach(item => {
    item.addEventListener('click', changePage);
  })
}

if (contentSliderLinks.length > 0) {
  contentSliderLinks.forEach(item => {
    item.addEventListener('click', changePage);
  })
}
