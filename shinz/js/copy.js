function copy(element) {
var $temp = $("<input>");
$("body").append($temp);
$temp.val($(element).text().replace('                    ','\r\n')).select();
document.execCommand("copy");
$temp.remove();
$('btn[key="'+element.replace('#','')+'"]').attr('class','fas fa-check');
}
