const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.shoe', {y:'0%', duration: 2});
tl.to('.shoe', {scale:0.75, duration: 0.01}, "-=2");
tl.to('.shadow', {opacity: 1, scale: 0.9, duration: 2}, "-=1.7");
tl.to('.arrow', {opacity: 1, duration: 2}, "-=1.7");
tl.to('.tagline', {opacity: 1, duration: 2}, "-=1.7");
tl.to('.msg h1, .msg p', {x:'0%', duration: 1.5});

button = document.getElementById('scrollup');

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop !=0 || document.documentElement.scrollTop !=0) {
   button.style.display = "block";
 } else {
   button.style.display = "none";
 }
}
var timeout;
function topFunction() {
  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  if (document.body.scrollTop !=0 || document.documentElement.scrollTop !=0) {
    window.scrollBy(0,-50);
    timeout = setTimeout('topFunction()',10);
  }else {
  clearTimeout(timeout);
}
}
