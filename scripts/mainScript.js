//javaScript document for basic effects
function showOrHide() {
    'use strict';
    var study = document.getElementById('boxstudy_wrapper'),
        phy1_1 = document.getElementById('phy1Box'),
        phy1_2 = document.getElementById('phy2Box'),
        phy1_3 = document.getElementById('phy3Box');
    if (study.style.display === 'none') {
        study.style.display = 'block';
        phy1_1.style.visibility = 'visible';
        phy1_2.style.visibility = 'hidden';
        phy1_1.style.display = 'block';
        phy1_2.style.display = 'none';
        phy1_3.style.display = 'none';
        phy1_3.style.visibility = 'hidden';
    } else {
        study.style.display = 'none';
        phy1_1.style.visibility = 'hidden';
        phy1_2.style.visibility = 'hidden';
        phy1_3.style.visibility = 'hidden';
        phy1_1.style.display = 'none';
        phy1_2.style.display = 'none';
        phy1_3.style.display = 'none';
    }
}
document.getElementById('study').onclick = showOrHide;
document.getElementById('StdClose').onclick = showOrHide;
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
document.getElementById('support').onclick = supShow;

function helpShow() {
    'use strict';
    var help = document.getElementById('helpbox');
    if (help.style.visibility === 'hidden') {
        help.style.visibility = 'visible';
        help.style.display = 'block';
    }
}
document.getElementById('help').onclick = helpShow;
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
//javaScript document for Hide effect in header
function pageHeight() {
    'use strict';
    var idContainer = ['phy1Box', 'phy2Box', 'phy3Box', 'supportbox', 'helpbox', 'boxstudy_wrapper'],
        head = document.getElementById('header'),
        study = document.getElementById('boxstudy_wrapper'),
        i;
    for (i = 0; i < idContainer.length; i++) {
        if (window.pageYOffset > 100) {
            var hidAll = document.getElementById(idContainer[i]);
            study.style.display = "none";
            head.style.top = '-400px';
            head.style.transform = 'rotateX(130deg)';
            hidAll.style.display = 'none';
        } else {
            head.style.top = '0px';
            head.style.transform = 'rotateX(0deg)';
        }
    }
}
window.onscroll = pageHeight;

//window.addEventListener('mousemove', function (e) {
//    'use strict';
//    console.log("x : " + e.clientX + " y : " + e.clientY);
//});
function showCoords(event) {
    'use strict';
    var y = event.clientY,
        head = document.getElementById('header');
    if (y < 40) {
        head.style.top = '0px';
        head.style.transform = 'rotateX(0deg)';
    }
}
document.addEventListener('mousemove', showCoords);
// for contribute...
function s_c_t() {
    let o_c_w = document.getElementById('cont');
        if (o_c_w.classList.contains('c_l_b') === true) {
        o_c_w.classList.remove('c_l_b');
        o_c_w.classList.add('c_l_a');
        document.getElementById('c_opener').setAttribute('title', 'click to close');
    } else if(o_c_w.classList.contains('c_l_a') === true) {
        o_c_w.classList.remove('c_l_a');
        o_c_w.classList.add('c_l_b');
        document.getElementById('c_opener').setAttribute('title', 'click to open');
    }
}
document.getElementById('c_opener').onclick = s_c_t;

// for preloader...
function loaderHide() {
    'use strict';
    var load = document.getElementById('loader');
    load.style.visibility = 'hidden';
}
//for fullscreen...image
document.getElementById('resetFsr').addEventListener('click', () => {
    document.getElementById('f_sr').style.display = 'none';
    document.body.style.overflowY = 'scroll';
})