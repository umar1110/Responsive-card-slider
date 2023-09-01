var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 5,
    loop: false,
    centerSlide : "true",
    grabCursor : "true",
    
    fade : "true",
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets : true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView :1,
      },
      600:{
  slidesPerView:2,
      },
      950:{
        slidesPerView:3,

      }
    }
  });