$(function () {
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  }),
    $('.heroes__slider-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      asNavFor: '.heroes__slider-text',
      prevArrow:
        '<button  class="slick-btn slick-prev"><img src="/images/arrows-left.png" alt=""></button>',
      nextArrow:
        '<button  class="slick-btn slick-next"><img src="/images/arrows-right.png" alt=""></button>',
      responsive: [
        {
          brealpoint: 769,
          settings: {
            arrows: false,
          },
        },
      ],
    })
  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    fade: true,
    arrows: false,
  })
})
