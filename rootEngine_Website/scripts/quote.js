/**
 *
 * TEST JS code to replace quote accordion with buttons and replace text with invisible text.
 *Last edit 2017-02-14
 * Not fully functional
 *
 */

document.addEventListener('click', tabClick);

function tabClick(event) {
    var elem = event.target,
        elemHREF = elem.getAttribute('href'),
        tabs = document.querySelector('.tabs li a'),
        tabContents = document.querySelectorAll('.tab-contents li');

    if (elemHREF != null && elemHREF.indexOf('tab-') != -1) {
        event.preventDefault();

        if (elem.className.indexOf('active1') == -1) {

            for (var i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active1');
                tabContents[i].classList.remove('visible');
            }

            elem.classList.add('active1');
            document.getElementById(elemHREF).classList.add('visible');
        }
    }
}

