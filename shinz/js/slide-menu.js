function open_slide() {
$(".slide-menu").addClass("active");
$("#overlay").addClass("active");
$("#overlay").on('click', close_slide);
}

function close_slide() {
$(".slide-menu").removeClass("active");
$("#overlay").removeClass("active");
}
