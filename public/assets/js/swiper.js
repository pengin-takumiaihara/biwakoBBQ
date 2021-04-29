var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 15,
  // 自動スライド
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  // ブレイクポイント
  breakpoints: {
    1025: {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
    },
  },
  // フリック操作
  allowTouchMove: true,
})