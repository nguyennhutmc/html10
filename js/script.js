var vw = ($('html').css('font-size').replace('px', ''));

//console.log(vw);
function init() {
    if ($(".banner_main .swiper").length) {
        var swiper_img = new Swiper(".banner_main .swiper", {
            effect: "fade",
            spaceBetween: 0,
            slidesPerView: 1,
            loop: true,
            speed:1000,
            allowTouchMove: false,
            autoplay: {
                delay:5000,
                disableOnInteraction: false
            },
            //autoplay:false,
        });
    }
    if ($(window).width() >= 992) {
        let hideTimeout;
        $('.nav-item.dropdown').hover(
            function () {
                clearTimeout(hideTimeout);
                $(this).addClass('show');
                $(this).find('.dropdown-toggle').addClass('show');
                $(this).find('.dropdown-menu').addClass('show');
            },
            function () {
                const $dropdown = $(this);
                hideTimeout = setTimeout(function () {
                    $dropdown.removeClass('show');
                    $dropdown.find('.dropdown-toggle').removeClass('show');
                    $dropdown.find('.dropdown-menu').removeClass('show');
                }, 500);
            }
        );
    }
}

function _sticky() {
    var winscroll = $(window).scrollTop();
    if (winscroll >= vw * 10) {
        $("body").addClass("sticky");
    } else {
        $("body").removeClass("sticky");
    }
}

$(function () {
    init();
});
var lastScrollTop = 0;
$(window).on("scroll", function (event) {
    _sticky();
});
