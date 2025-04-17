var vw = ($('html').css('font-size').replace('px', ''));
//console.log(vw);
function init_slider() {
    if ($(".hero_banner").length) {
        var swiper_img = new Swiper(".hero_banner .swiper", {
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
}

function init_mCustomScrollbar() {
    if ($(".box_scroll").length) {
        $(".box_scroll").mCustomScrollbar({
            theme: "3d-thick-dark",
            scrollButtons: {
                enable: false,
            },
            scrollbarPosition: "inside",
            callbacks:{
                onTotalScroll:function(){
                    //console.log("Scrolled to end of content.");
                }
            }
        });
    }
}
function _sticky() {
    var winscroll = $(window).scrollTop();
    if (winscroll >= vw * 10) {
        $("body").addClass("sticky");
    }
    else{
        $("body").removeClass("sticky");
    }
}
$(function () {
    $("#loader").show().delay(1000).fadeOut("fast");
    $('body').addClass($('main').attr('class'));
    init_slider();
    init_mCustomScrollbar();
});
var lastScrollTop = 0;
$(window).on("scroll", function (event) {
    _sticky();
});
