$(document).ready(function () {
    $(".gallery__carousel").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        prevArrow: '<button type="button" class="slick-prev gallery__btn gallery__btn_prev">&#10094</button>',
        nextArrow: '<button type="button" class="slick-next gallery__btn gallery__btn_next">&#10095</button>',
    });
});

new WOW().init();