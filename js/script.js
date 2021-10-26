let nav = document.getElementById("nav");
let header = document.querySelector("header");
let logo = document.querySelector(".navbar-brand img")
let sticky = nav.offsetHeight;

window.onscroll = function() {
    myFunction();
    Counter();
    scrollFunction();

};

function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
        logo.setAttribute('src', './imgs/catBlack.svg');
        nav.style.boxShadow = '-5px -2px 6px #eee';

    } else {
        nav.classList.remove("sticky");
        logo.setAttribute('src', './imgs/navLogo.svg')
        nav.style.boxShadow = 'none';

    }
}

let imgSession = document.querySelector('.ourachievments li img');
/*
        imgSession.onmouseover = function() {
            this.setAttribute('src', './imgs/seessions.svg');
            this.style.transition = "all .5s ease-in-out"
        };
        imgSession.onmouseleave = function() {
            this.style.transition = "all .5s ease-in-out"
            this.setAttribute('src', './imgs/Layer 2.svg');
        };
*/

const counters = document.querySelectorAll('.ourachievments li span');
// Declate variable
var timer;
let achievements = document.querySelector('.ourachievments');

function Counter() {
    if (window.pageYOffset >= achievements.offsetTop + 500) {
        achievements.style.display = "flex";
        countUp(counters[0], 0, 15, 60);
        countUp(counters[1], 0, 7, 70);
        countUp(counters[2], 0, 50, 30);
        countUp(counters[3], 0, 5, 30);
        countUp(counters[4], 0, 50, 40);
        countUp(counters[5], 0, 200, 10);
    }
}


function countUp(selector, min, max, duration) {
    var inter = setInterval(function() {
        selector.innerHTML = ++min;
        if (min >= max) {
            clearTimeout(inter);
        }
    }, duration);
}

let mybutton = document.getElementById("btn-back-to-top");


function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document.ready(function() {
    $('#carouselExampleDark, #latestProject, #Oursponsor').carousel();

}))