$(document).ready(function(){
    $('.reviews__inner').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>'
      });
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__menu'),
  menuItem = document.querySelectorAll('.header__link'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      });
  });
});

window.onscroll = function showHeader () {
    const header = this.document.querySelector('.header');
    if (window.pageYOffset > 130) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
};