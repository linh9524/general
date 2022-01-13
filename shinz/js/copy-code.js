function copy(element) {
var $temp = $("<input>");
$("body").append($temp);
$temp.val($(element).text().replace('                    ','\r\n')).select();
document.execCommand("copy");
$temp.remove();
$('[key="'+element.replace('#','')+'"]').attr('class','bi bi-clipboard-check');
}
