$(document).ready(function() {
    $('.menu-list').hide();
    $('.hamburger').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('open');
        $('.menu-list').slideToggle(200);
    });

    // click anywhere to close the .open from .menu-list
    $(document).click(function(e) {
        if(e.target != $('.menu-list')[0]) {
            $('.menu-list').slideToggle(200);
            $('.menu-list').hide();
            $('.hamburger').removeClass('open');
        }
    });
});

// function ready(fn) {
//     if (document.readyState !== 'loading'){
//         fn();
//     } else {
//         document.addEventListener('DOMContentLoaded', fn);
//     }
// }

// function fn() {
//     console.log('doc is ready');
// }

// fn();


// The arrow appears after scrolling half page
const scrollTop = document.querySelector('.scroll-top');

function fixToTop() {
    (window.scrollY > 500) ? scrollTop.classList.remove('hidden') : scrollTop.classList.add('hidden');
}

window.addEventListener('scroll', fixToTop);

// highlight follow along in about section
const triggers = document.querySelectorAll('em');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLinks() {
    const linkCoords = this.getBoundingClientRect();

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(em => em.addEventListener('mouseenter', highlightLinks));
