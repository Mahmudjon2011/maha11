const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Sahifa yuklanganda fon rangini 'bisque' qilib qo'yamiz
    document.body.style.backgroundColor = "bisque";
});

// Slayd o'zgarganda fon rangini o'zgartirish
swiper.on('slideChange', function () {
    const aktivSlaydRaqami = swiper.realIndex;
    
    if (aktivSlaydRaqami == 0) {
        document.body.style.backgroundColor = "bisque";
    } 
    else if (aktivSlaydRaqami == 1) {
        document.body.style.backgroundColor = "darkgray";
    } 
    else if (aktivSlaydRaqami == 2) {
        document.body.style.backgroundColor = "green";
    } 
    else if (aktivSlaydRaqami == 3) {
        document.body.style.backgroundColor = "red";
    }
});
