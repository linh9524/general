window.onload = function() {
$('#overlay').addClass('active');
$('.notice close').on('click', close_notice);
}

function close_notice() {
$('.notice').fadeOut();
$('#overlay').removeClass('active');
}
