function swapSheet(ev) {
    function swap(sheetName) {
        document.getElementById('sheet').setAttribute('href', sheetName);
    }
    if (screen.width < 450 || window.innerWidth < 450) {
        swap('styles/mobile.css');
    } else if (screen.width < 600 || window.innerWidth < 600) {
        swap('styles/mobile.css');

    } else if (screen.width < 900 || window.innerWidth < 900) {
        swap('styles/tab.css');

    } else {
        swap('styles/main.css');
    }

}