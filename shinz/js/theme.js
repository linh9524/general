const toggleSwitch = document.querySelector('#theme-switch input[type="checkbox"]');

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {

toggleSwitch.checked = true;
$('#theme .icon-1').addClass('active');
$('#theme .icon-2').removeClass('active');
$('meta[name="theme-color"]').attr('content', '#2b2f35');

} else {

toggleSwitch.checked = false;
$('#theme .icon-2').addClass('active');
$('#theme .icon-1').removeClass('active');
$('meta[name="theme-color"]').attr('content', '#f6f7f8');

}

} else {

toggleSwitch.checked = false;
$('#theme .icon-2').addClass('active');
$('#theme .icon-1').removeClass('active');
$('meta[name="theme-color"]').attr('content', '#f6f7f8');

}

function switchTheme(e) {

if (e.target.checked) {
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');
$('#theme .icon-1').addClass('active');
$('#theme .icon-2').removeClass('active');
$('meta[name="theme-color"]').attr('content', '#2b2f35');

} else {
        document.documentElement.setAttribute('data-theme', 'light');
localStorage.setItem('theme', 'light');
$('#theme .icon-2').addClass('active');
$('#theme .icon-1').removeClass('active');
$('meta[name="theme-color"]').attr('content', '#f6f7f8');

}

}

toggleSwitch.addEventListener('change', switchTheme);
