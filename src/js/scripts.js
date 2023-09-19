$(document).ready(() => {
    svg4everybody()

    $('.navigation').on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top - 150;
        $('body,html').animate({scrollTop: top}, 1500)
    })
})

$(document).scroll(function() {
    let scroll_status = $(document).scrollTop()
    
    if (scroll_status > $('.header').height()) {
      $('.header').addClass('header--float')
    }
    else {
      $('.header').removeClass('header--float')
    }
})

// sliders

$(document).ready(function () {
  //initialize swiper when document ready
  let mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.controls__next',
      prevEl: '.controls__prev',
    },
    
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },

    },
    on: {
      init: function() {
        checkArrow();
      },
      resize: function () {
        checkArrow();
      }
    },
  })
});

// function checkArrow() {
//   var swiperPrev = document.querySelector('.swiper-button-prev');
//   var swiperNext = document.querySelector('.swiper-button-next');
//   if ( window.innerWidth > 450 ) {
//     //console.log('Success', window.innerWidth);
//     swiperPrev.style.display = 'block';
//     swiperNext.style.display = 'block';
//   } else {
//     swiperPrev.style.display = 'none';
//     swiperNext.style.display = 'none';
//   }
// }

$('.projects__slider').each(function(){
  let swiper = new Swiper('.projects__slider', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 30,
      
      noSwipingClass: "projects__slider",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
          },
          navigation: {
            nextEl: '.controls__next',
            prevEl: '.controls__prev',
          },
          //effect: 'fade',
  })
});