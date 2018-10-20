//javaScript document for basic effects
window.addEventListener('load', function() {
    'use strict';
    var input = document.getElementById('gsc-i-id1'),
        search_button1 = document.getElementsByClassName('gsc-search-button'),
        search_button2 = document.getElementsByClassName('gsc-search-button-v2');
    input.placeholder = "search here....";
    if (input.value === "") {
        search_button1.style.top = '-20px !important';
        search_button2.style.top = '-20px !important';
    } else {
        search_button1.style.top = "-36.5px !important";
        search_button2.style.top = "-36.5px !important";
    }
});


function showOrHide() {
    'use strict';
    var study = document.getElementById('boxstudy_wrapper'),
        phy1_1 = document.getElementById('phy1Box'),
        phy1_2 = document.getElementById('phy2Box'),
        phy1_3 = document.getElementById('phy3Box'),
        blur = document.getElementById('blur_studybox_id');
    if (study.style.height === '0px') {
        study.style.height = '406px';
        study.style.transition = '2s';
        phy1_1.style.visibility = 'visible';
        blur.style.height = '100vh';
        blur.style.transition = '200ms';
        phy1_2.style.visibility = 'hidden';
        phy1_1.style.display = 'block';
        phy1_2.style.display = 'none';
        phy1_3.style.display = 'none';
        phy1_3.style.visibility = 'hidden';
    } else {
        study.style.height = '0px';
        blur.style.height = '0vh';
        blur.style.transition = '6s';
        phy1_1.style.visibility = 'hidden';
        phy1_2.style.visibility = 'hidden';
        phy1_3.style.visibility = 'hidden';
        phy1_1.style.display = 'none';
        phy1_2.style.display = 'none';
        phy1_3.style.display = 'none';
    }
}

function boxStudyHide() {
    'use strict';
    var studyHide = document.getElementById('boxstudy_wrapper'),
        phy1_1 = document.getElementById('phy1Box'),
        phy1_2 = document.getElementById('phy2Box'),
        phy1_3 = document.getElementById('phy3Box'),
        blur = document.getElementById('blur_studybox_id');
    studyHide.style.height = '0px';
    blur.style.height = '0px';
    blur.style.transition = '5s';
    phy1_1.style.visibility = 'hidden';
    phy1_2.style.visibility = 'hidden';
    phy1_3.style.visibility = 'hidden';
    phy1_1.style.display = 'none';
    phy1_2.style.display = 'none';
    phy1_3.style.display = 'none';
}
//phy1_1
function phy1BoxShow() {
    'use strict';
    var phy1_1 = document.getElementById('phy1Box'),
        phy1_2 = document.getElementById('phy2Box'),
        phy1_3 = document.getElementById('phy3Box'),
        btnphy1_I = document.getElementById('btnS1'),
        btnphy1_II = document.getElementById('btnS2'),
        btnphy1_III = document.getElementById('btnS3');
    if (phy1_1.style.visibility === 'hidden') {
        phy1_1.style.visibility = 'visible';
        phy1_2.style.visibility = 'hidden';
        phy1_3.style.visibility = 'hidden';
        phy1_1.style.display = 'block';
        phy1_2.style.display = 'none';
        phy1_3.style.display = 'none';
        btnphy1_I.style.backgroundColor = '#185004';
        btnphy1_II.style.backgroundColor = 'green';
        btnphy1_III.style.backgroundColor = 'green';
    }
}
//phy1_2
function phy2BoxShow() {
    'use strict';
    var phy1_1 = document.getElementById('phy1Box'),
        phy1_2 = document.getElementById('phy2Box'),
        phy1_3 = document.getElementById('phy3Box'),
        btnphy1_I = document.getElementById('btnS1'),
        btnphy1_II = document.getElementById('btnS2'),
        btnphy1_III = document.getElementById('btnS3');
    if (phy1_2.style.visibility === 'hidden') {
        phy1_2.style.visibility = 'visible';
        phy1_1.style.visibility = 'hidden';
        phy1_3.style.visibility = 'hidden';
        phy1_1.style.display = 'none';
        phy1_2.style.display = 'grid';
        phy1_3.style.display = 'none';
        btnphy1_I.style.backgroundColor = 'green';
        btnphy1_II.style.backgroundColor = '#185004';
        btnphy1_III.style.backgroundColor = 'green';
    }
}
//phy1_3
function phy3BoxShow() {
    'use strict';
    var phy1_1 = document.getElementById('phy1Box'),
        phy1_2 = document.getElementById('phy2Box'),
        phy1_3 = document.getElementById('phy3Box'),
        btnphy1_I = document.getElementById('btnS1'),
        btnphy1_II = document.getElementById('btnS2'),
        btnphy1_III = document.getElementById('btnS3');
    if (phy1_3.style.visibility === 'hidden') {
        phy1_3.style.visibility = 'visible';
        phy1_1.style.display = 'none';
        phy1_2.style.display = 'none';
        phy1_3.style.display = 'block';
        phy1_1.style.visibility = 'hidden';
        phy1_2.style.visibility = 'hidden';
        btnphy1_I.style.backgroundColor = 'green';
        btnphy1_II.style.backgroundColor = 'green';
        btnphy1_III.style.backgroundColor = '#185004';
    }
}


function supShow() {
    'use strict';
    var sup = document.getElementById('supportbox');
    if (sup.style.visibility === 'hidden') {
        sup.style.visibility = 'visible';
        sup.style.display = 'block';
    }
}

function helpShow() {
    'use strict';
    var help = document.getElementById('helpbox');
    if (help.style.visibility === 'hidden') {
        help.style.visibility = 'visible';
        help.style.display = 'block';
    }
}

var supHelpBoxes = ['supportbox', 'helpbox'],
    i;
window.addEventListener('mousedown', function(c) {
    'use strict';
    for (i = 0; i < supHelpBoxes.length; i++) {
        var getBox = document.getElementById(supHelpBoxes[i]);
        if (c.target != getBox && c.target.parentNode != getBox) {
            getBox.style.visibility = 'hidden';
        }
    }
}, true);

//for header..

//javaScript document for Hide effect in header
function pageHeight() {
    'use strict';
    var idContainer = ['phy1Box', 'phy2Box', 'phy3Box', 'supportbox', 'helpbox', 'search_Box'],
        blur = document.getElementById('blur_studybox_id'),
        head = document.getElementById('header'),
        study = document.getElementById('boxstudy_wrapper'),
        i;
    for (i = 0; i < idContainer.length; i++) {
        if (window.pageYOffset > 100) {
            var hidAll = document.getElementById(idContainer[i]);
            blur.style.height = "0px";
            blur.style.transition = '0s';
            study.style.height = "0px";
            study.style.transition = '0s';
            head.style.top = '-400px';
            head.style.transform = 'rotateX(130deg)';
            hidAll.style.visibility = 'hidden';
            hidAll.style.display = 'none';
        } else {
            head.style.top = '0px';
            head.style.transform = 'rotateX(0deg)';
        }
    }
}

//window.addEventListener('mousemove', function (e) {
//    'use strict';
//    console.log("x : " + e.clientX + " y : " + e.clientY);
//});
function showCoords(event) {
    'use strict';
    var y = event.clientY;
    if (y < 40) {
        document.getElementById('header').style.top = '0px';
        document.getElementById('header').style.transform = 'rotateX(0deg)';
    }
}


// js for search...
function show_search_box() {
    'use strict';
    var search = document.getElementById('search_Box'),
        seachClose = document.getElementById('gs_cb50');
    if (search.style.visibility === 'hidden') {
        search.style.visibility = 'visible';
        search.style.display = 'block';
    } else {
        search.style.visibility = 'hidden';
        search.style.display = 'none';
        seachClose.style.transition = '0s';
    }
}

// for preloader...
function showLoader() {
    'use strict';
    var loader = document.getElementById('loader');
    if (loader.style.visibility === 'hidden') {
        loader.style.visibility = 'visible';
    } else {
        loader.style.visibility = 'hidden';
    }
}
document.getElementsByClassName('gsc-search-button').onload = showLoader;

function loaderHide() {
    'use strict';
    var load = document.getElementById('loader');
    load.style.visibility = 'hidden';
}