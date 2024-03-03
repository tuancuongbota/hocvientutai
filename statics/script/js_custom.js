$(document).ready(function() {
    $('.tooltip').tooltipster();
    $('.btn_menu_mb').click(function() {
        $(this).toggleClass('open');
        $('.header-nav-main').addClass('active');
        $('.open_opiton_mb').addClass('active');
        return false;
    });
    $('.open_opiton_mb').click(function() {
        $(this).removeClass('open');
        $('.header-nav-main').removeClass('active');
        $('.open_opiton_mb').removeClass('active');
        return false;
    });
    $('.header-nav-main').on('click', '.toggle', function(event) {
        event.preventDefault(); 
        $(this).toggleClass('active');
        var submenu = $(this).closest('li').find('ul');
        if ($(this).hasClass('active')) {
            submenu.slideDown(300);
        } else {
            submenu.slideUp(300);
        }
    });
    if ($("#home-slider").length > 0) {
        $('.counter').counterUp({ delay: 20, time: 2000 });
    }
    if ($(".owl-slideshow-item").length > 0) {
        $('.owl-slideshow-item').owlCarousel({
            dots:true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items:1,
            smartSpeed:550,
            responsiveClass:true,
            autoplay:true,
            autoplayTimeout:5000,
            nav:true,
            loop:true,
            navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        });
    }
    if ($(".owl-info-item").length > 0) {
        $('.owl-info-item').owlCarousel({
            dots:false,
            items:1,
            smartSpeed:550,
            responsiveClass:true,
            autoplay:true,
            autoplayTimeout:3000,
            nav:true,
            loop:true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        });
    }
    if ($(".owl-testimonial-item").length > 0) {
        $(".owl-testimonial-item").owlCarousel({
            dots:false,
            loop:true,
            responsiveClass:true,
            nav:true,
            margin:20,
            autoplay:3000,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                768:{
                    items:2,
                },
                1024:{
                    items:3,
                }
            }
        });
}

});
// Scroll To Top //
$(document).ready(function () {
    // Hide,Show ScrollToTop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.fix_top_button').addClass('show');
            $('.html').addClass('fixed');
        } else {
            $('.fix_top_button').removeClass('show');
            $('.html').removeClass('fixed')
        }
    });
    $('.fix_top_button').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    });
});
// End Scroll To Top //