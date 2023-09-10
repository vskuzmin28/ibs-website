$(document).ready(() => {
    svg4everybody()

    $('.header, footer, .main__tags').on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
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