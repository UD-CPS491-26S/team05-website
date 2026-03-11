const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach(reveal => {

const elementTop = reveal.getBoundingClientRect().top;

const revealPoint = 120;

if(elementTop < windowHeight - revealPoint){

reveal.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
