$(document).ready(function () {
  const nav = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  };

  const flowersSlider = new Swiper('.flowers-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: nav,
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      // when window width is >= 320px    
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 576px   
      576: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 6,
      }
    },
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: nav,
  });
});

$('#review-1').on('click', function () {
  $.fancybox.open([
    {
      src: 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
      opts: {
        caption: 'First caption',
        thumb: 'https://source.unsplash.com/IvfoDk30JnI/240x160'
      }
    },
    {
      src: 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
      opts: {
        caption: 'Second caption',
        thumb: 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
      }
    }
  ], {
    loop: false
  });
});