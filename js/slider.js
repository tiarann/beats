const slider = $(".products__list").bxSlider({
    pager: false,
    controls: false
  });

  $(".products__slider-arrows--prev").click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
  })

  $(".products__slider-arrows--next").click(e => {
    e.preventDefault();
    slider.goToNextSlide();
  })