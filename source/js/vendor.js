// Swiper 7.4.1
import Swiper, {Navigation} from 'swiper';
// import 'swiper/css';

const swiperCoaches = new Swiper('.coaches__swiper.swiper', {
  spaceBetween: 0,
  slidesPerView: 1,
  autoHeight: true,
  direction: 'horizontal',
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.coaches__button--next.swiper-button-next',
    prevEl: '.coaches__button--prev.swiper-button-prev',
  },
  breakpoints: {

    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },

    1199: {
      spaceBetween: 40,
      slidesPerView: 3,
    },

    1300: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
  },
});

const swiperReviews = new Swiper('.reviews__swiper.swiper', {
  spaceBetween: 40,
  slidesPerView: 1,
  autoHeight: true,
  direction: 'horizontal',
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.reviews__button--next.swiper-button-next',
    prevEl: '.reviews__button--prev.swiper-button-prev',
  },
});

swiperCoaches.init();

swiperReviews.init();
