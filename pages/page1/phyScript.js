//javaScript document
function showOrHide(boxstudy) {
    'use strict';
    var study = document.getElementById('boxstudy'),
		phy_1 = document.getElementById('phyBox'),
		phy_2 = document.getElementById('chemBox'),
		phy_3 = document.getElementById('mathBox');
    if (study.style.visibility === 'hidden') {
        study.style.visibility = 'visible';
        phy_1.style.visibility = 'visible';
		phy_2.style.visibility = 'hidden';
		phy_3.style.visibility = 'hidden';
    } else {
        study.style.visibility = 'hidden';
        phy_1.style.visibility = 'hidden';
		phy_2.style.visibility = 'hidden';
		phy_3.style.visibility = 'hidden';
    }
}
function boxStudyHide() {
    'use strict';
    var studyHide = document.getElementById('boxstudy'),
		phy_1 = document.getElementById('phyBox'),
		phy_2 = document.getElementById('chemBox'),
		phy_3 = document.getElementById('mathBox');
    studyHide.style.visibility = "hidden";
    phy_1.style.visibility = 'hidden';
    phy_2.style.visibility = 'hidden';
    phy_3.style.visibility = 'hidden';
}
//phy_1
function phyBoxShow(phyBox) {
    'use strict';
	var phy_1 = document.getElementById('phyBox'),
		phy_2 = document.getElementById('chemBox'),
		phy_3 = document.getElementById('mathBox'),
		btnPhy_I = document.getElementById('btnS1'),
		btnPhy_II = document.getElementById('btnS2'),
		btnPhy_III = document.getElementById('btnS3');
    if (phy_1.style.visibility === 'hidden') {
        phy_1.style.visibility = 'visible';
		phy_2.style.visibility = 'hidden';
		phy_3.style.visibility = 'hidden';
		btnPhy_I.style.backgroundColor = '#185004';
		btnPhy_II.style.backgroundColor = 'green';
		btnPhy_III.style.backgroundColor = 'green';
	} else {
        phy_1.style.visibility = 'visible';
    }
}
//phy_2
function chemBoxShow(chemBox) {
    'use strict';
    var phy_1 = document.getElementById('phyBox'),
		phy_2 = document.getElementById('chemBox'),
		phy_3 = document.getElementById('mathBox'),
		btnPhy_I = document.getElementById('btnS1'),
		btnPhy_II = document.getElementById('btnS2'),
		btnPhy_III = document.getElementById('btnS3');
    if (phy_2.style.visibility === 'hidden') {
        phy_2.style.visibility = 'visible';
		phy_1.style.visibility = 'hidden';
		phy_3.style.visibility = 'hidden';
        btnPhy_I.style.backgroundColor = 'green';
		btnPhy_II.style.backgroundColor = '#185004';
		btnPhy_III.style.backgroundColor = 'green';
	} else {
        phy_2.style.visibility = 'visible';
        btnPhy_I.style.backgroundColor = 'green';
		btnPhy_II.style.backgroundColor = 'green';
		btnPhy_III.style.backgroundColor = 'green';
    }
}
//phy_3
function mathBoxShow(mathBox) {
    'use strict';
    var phy_1 = document.getElementById('phyBox'),
		phy_2 = document.getElementById('chemBox'),
		phy_3 = document.getElementById('mathBox'),
		btnPhy_I = document.getElementById('btnS1'),
		btnPhy_II = document.getElementById('btnS2'),
		btnPhy_III = document.getElementById('btnS3');
    if (phy_3.style.visibility === 'hidden') {
        phy_3.style.visibility = 'visible';
		phy_1.style.visibility = 'hidden';
		phy_2.style.visibility = 'hidden';
		btnPhy_I.style.backgroundColor = 'green';
		btnPhy_II.style.backgroundColor = 'green';
		btnPhy_III.style.backgroundColor = '#185004';
    } else {
        phy_3.style.visibility = 'visible';
    }
}
function supShow(supportbox) {
    'use strict';
    var sup = document.getElementById('supportbox');
    if (sup.style.visibility === 'hidden') {
        sup.style.visibility = 'visible';
    } else {
        sup.style.visibility = 'hidden';
    }
}
function helpShow(helpbox) {
    'use strict';
    var help = document.getElementById('helpbox');
    if (help.style.visibility === 'hidden') {
        help.style.visibility = 'visible';
    } else {
        help.style.visibility = 'hidden';
    }
}