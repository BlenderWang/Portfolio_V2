$(document).ready(function() {
    $('.menu-list').hide();
    hideMenuList();
    $('.hamburger').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('open');
        $('.menu-list').slideToggle(200);
    });
});


const menuList = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');

// menuBtn.onclick = () => {
//     console.log(menuBtn.classList);
//     menuBtn.classList.toggle('open');
// }

// click anywhere to close the .open from .menu-list
function hideMenuList() {
    document.addEventListener('click', (e) => {
        if(e.target.classList !== 'menu-list') {
            menuList.style.display = 'none';
        }
        menuBtn.classList.remove('open');
    });
}

hideMenuList();

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
