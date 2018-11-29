//                 for fullscreen--------js document
function swapSheet(ev) {
    function swap(sheetName) {
        document.getElementById('sheet').setAttribute('href', sheetName);
    }
    if (screen.width < 450 || window.innerWidth < 450) {
        swap('mob.css');
    } else if (screen.width < 600 || window.innerWidth < 600) {
        swap('mob.css');

    } else if (screen.width < 900 || window.innerWidth < 900) {
        swap('mob.css');

    } else {
        swap('default.css');
    }

}
window.onload = swapSheet;
window.onresize = swapSheet;


//for fullscreen in parent document...
function fullScreen(imgSrc){
    let parFul = window.parent.document.getElementById('f_sr');
    let parImg = window.parent.document.getElementById('f_sr_i');
    let imgLocation = document.getElementById(imgSrc).src;
    parFul.style.display = 'block';
    parImg.src = imgLocation;
    window.parent.document.body.style.overflowY = 'hidden';
}