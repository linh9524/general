function open_menu() {
$(".nav").addClass("active");
$("#overlay").addClass("active");
$(".nav close").on('click', close_menu);
$("#overlay").on('click', close_menu);
}

function close_menu() {
$(".nav").removeClass("active");
$("#overlay").removeClass("active");
}

$(window).bind('scroll', function () {
if ($(window).scrollTop() > 10) {
$('.menu').addClass('blur');
} else {
$('.menu').removeClass('blur');
}
});
