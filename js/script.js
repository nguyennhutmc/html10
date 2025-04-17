var vw = ($('html').css('font-size').replace('px', ''));
//console.log(vw);

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
});
var lastScrollTop = 0;
$(window).on("scroll", function (event) {
    _sticky();
});
