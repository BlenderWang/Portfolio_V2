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

    // smooth scroll
    $('.about-section').click(function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 800);
    });
    $('.skills-section').click(function() {
        $('html, body').animate({
            scrollTop: $('#skills').offset().top
        }, 800);
    });
    $('.showcase-section').click(function() {
        $('html, body').animate({
            scrollTop: $('#showcase').offset().top
        }, 800);
    });
    $('.contact-section').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 800);
    });

    // The arrow appears after scrolling half page
    $(window).scroll(function() {
        if($(this).scrollTop() > 500) {
            $('.scroll-top').removeClass('hidden');
        }else {
            $('.scroll-top').addClass('hidden')
        }
    });

    // Scroll back to top
    $('.scroll-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // highlight follow along in about section
    const triggers = document.querySelectorAll('em');
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.append(highlight);

    function highlightLinks() {
        const linkCoords = this.getBoundingClientRect();
        console.log(linkCoords);

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
});

// delaying pie chart animation
const charts = document.querySelector("#skills");
const topOfCharts = charts.offsetTop;

function fixCharts() {
  if (window.scrollY >= topOfCharts) {
    // document.body.style.paddingTop = charts.offsetHeight + 'px';
    document.body.classList.add("circle_animation");
  } else {
    // document.body.style.paddingTop = 0;
    document.body.classList.remove("circle_animation");
  }
  console.log(topOfCharts, window.scrollY);
}

window.addEventListener("scroll", fixCharts);
