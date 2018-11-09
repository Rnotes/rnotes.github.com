//                 for fullscreen--------js document
var f_s = document.getElementById('f_screen'),
    f_i = document.getElementById('f_img');

function fullScreen(imgLocation) {
    f_s.style.display = 'block';
    f_s.style.width = (screen.width) + 'px';
    f_s.style.height = (screen.height) + 'px';
    f_i.setAttribute('src', imgLocation);
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
}

function reset() {
    f_s.style.display = 'none';
}