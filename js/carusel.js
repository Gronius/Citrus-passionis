$(document).ready(function () {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');

  var updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' + slidesCount);
  };

  $('.slider').on('init', function (event, slick) {
    $('.slider').append(sliderCounter);
    updateSliderCounter(slick);
  });

  $('.slider').on('afterChange', function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });
// });

// $(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    // dots: true,
    // variableWidth: true,
    centerModel: true,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        }
      },
      {
        breakpoint: 1081,
        settings: {
          slidesToShow: 3,
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
        }
      },
    ],
  });
  // });
});
