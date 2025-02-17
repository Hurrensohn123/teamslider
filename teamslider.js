document.addEventListener("DOMContentLoaded", function () {
  // Initialize image swiper with custom settings
  const imgSwiper = new Swiper(".team_slider.swiper", {
    touchRatio: 0.5,
    speed: 1000,
    spaceBetween: 16,
    slidesPerView: "auto",
    centeredSlides: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '[swiper-arrow="next"]',
      prevEl: '[swiper-arrow="previous"]',
    },
  });

  // Initialize text swiper with vertical direction and no touch interaction
  const textSwiper = new Swiper(".team_text_slider.swiper", {
    allowTouchMove: false,
    direction: "vertical",
    speed: 1000,
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
  });

  // Initialize bio swiper with vertical direction and auto height adjustment
  const bioSwiper = new Swiper(".team_bio_slider.swiper", {
    allowTouchMove: false,
    direction: "vertical",
    speed: 1000,
    spaceBetween: 16,
    slidesPerView: 1,
    centeredSlides: true,
  });

  // Sync the swipers for coordinated sliding
  imgSwiper.controller.control = textSwiper;
  textSwiper.controller.control = bioSwiper;
});
