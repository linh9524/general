function open_slide() {
$(".slide").addClass("active");
$("#overlay").addClass("active");
$("#overlay").on('click', close_slide);
}

function close_slide() {
$(".slide").removeClass("active");
$("#overlay").removeClass("active");
}
