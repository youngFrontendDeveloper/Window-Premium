var swiper = new Swiper(".swiper-container", {
  cssMode: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: true,
  normalizeSlideIndex: false,
  observer: true,
  watchSlidesVisibility: true
});
