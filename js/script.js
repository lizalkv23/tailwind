const sliderCar = new Swiper('.slider-car', {
         observer: true,
      observeParents: true,
   freeMode: true,
   parallax: true,
   // loop: true,
   // initialSlide: 2,
   slidesPerView: 2,
   mousewheel: true,
     breakpoints: {
      0: {
         slidesPerView:1,
      },
      550: {
         slidesPerView:2,
      }
   },
         effect: "coverflow",
      coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
   },
        scrollbar: {
        el: ".swiper-scrollbar",
         draggable: true,
       hide: false,
    },
})