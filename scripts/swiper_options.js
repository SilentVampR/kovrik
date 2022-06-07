const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    320: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 1,
    },
    768: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 1,
    },
    1024: {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 30,
      initialSlide: 0,
    }
  },
});
