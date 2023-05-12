new Swiper('.brand-swiper', {
   slidesPerView: 6,
   //стрелки
   navigation: {
      nextEl: '.arrow-circle-right',
      prevEl: '.arrow-circle-left',
   },
})

new Swiper('.swiper-catalog',{
   slidesPerView: 3,
   spaceBetween: 30,
   //стрелки
   navigation: {
      nextEl: '.catalog-arrow-right',
      prevEl: '.catalog-arrow-left',
   },

   pagination: {
      el: '.swiper-pagination',

   }


})