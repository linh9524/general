$('#emoiji').click(
function() {
$('.emoiji').toggle();
}
);

function bili() {
$("#s_3").show();
$("#s_2").hide();
$("#s_1").hide();
$('td[onclick="bili()"]').addClass('active');
$('td[onclick="chibi()"]').removeClass('active');
$('td[onclick="emoijis()"]').removeClass('active');
}

function chibi() {
$("#s_3").hide();
$("#s_2").show();
$("#s_1").hide();
$('td[onclick="bili()"]').removeClass('active');
$('td[onclick="chibi()"]').addClass('active');
$('td[onclick="emoijis()"]').removeClass('active');
}

function emoijis() {
$("#s_3").hide();
$("#s_2").hide();
$("#s_1").show();
$('td[onclick="bili()"]').removeClass('active');
$('td[onclick="chibi()"]').removeClass('active');
$('td[onclick="emoijis()"]').addClass('active');
}
