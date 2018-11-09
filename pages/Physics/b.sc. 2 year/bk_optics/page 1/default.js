//                 for fullscreen--------js document
var f_s = document.getElementById('f_screen'),
    f_i = document.getElementById('f_img');

function fullScreen(imgLocation) {
	document.getElementById('f_screen').classList.add('f_vis');
	document.getElementById('f_screen').classList.remove('f_hid');
	f_i.setAttribute('src', imgLocation);
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
}

function reset() {
	document.getElementById('f_screen').classList.remove('f_vis');
	document.getElementById('f_screen').classList.add('f_hid');
}
function swapSheet(ev) {
    function swap(sheetName) {
        document.getElementById('sheet').setAttribute('href', sheetName);
    }
    if (screen.width < 450 || window.innerWidth < 450) {
        swap('styles/mob.css');
    } else if (screen.width < 600 || window.innerWidth < 600) {
        swap('styles/mob.css');

    } else if (screen.width < 900 || window.innerWidth < 900) {
        swap('styles/mob.css');

    } else {
        swap('styles/default.css');
    }

}
window.onload = swapSheet;
window.onscroll = swapSheet;