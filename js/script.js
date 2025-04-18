var vw = ($('html').css('font-size').replace('px', ''));

//console.log(vw);
function init() {
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
                }, 300);
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
