function swapSheet(ev) {
    function swap(sheetName) {
    	document.getElementById('sheet').setAttribute('href', sheetName);
    }
    	if (screen.width < 450) {
    		swap('styles/mobile.css');
    	} else if (screen.width < 600) {
            swap('styles/mobile.css');

        } else if (screen.width < 900) {
            swap('styles/mobile.css');

    	} else {
    		swap('styles/main.css');
    	}
    
}