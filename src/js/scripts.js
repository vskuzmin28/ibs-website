$(document).ready(() => {
    svg4everybody()

    $('.header, footer').on("click","a", function (event) {
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