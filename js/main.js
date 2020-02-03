
let tl = gsap.timeline({ repeat: 3, repeatDelay: 1}); 

// let allRects = document.querySelectorAll('rect');
let allRects = document.querySelectorAll('#XMLID_611_ rect, #XMLID_443_ rect');
console.log(allRects);
allRects.forEach(function(rect) { rect.classList.add('myrects') });


// console.log(allRects.length)

tl.from('#XMLID_388_', {opacity: 0, x: -50});
tl.from('#XMLID_593_', {opacity: 0, x: 50}, 0);
tl.from('#XMLID_611_', {opacity: 0}, "end");
tl.from('#XMLID_443_', {opacity: 0}, "end");
tl.from('.myrects', {opacity: 0, x: "random(-100, 100)", y: "random(-100, 100)", stagger: .02}, 0);

let tl2 = gsap.timeline({repeat: 4, repeatDelay: 1});


tl2.from("#XMLID_517_", { opacity: 0, x: -50});
tl2.from("#XMLID_528_", { opacity: 0, x: 50}, 0);
tl2.from("#XMLID_414_", {x: -1000, y: 1000});

let chartBars = document.querySelectorAll('#XMLID_512_ path');
chartBars.forEach(bar => bar.classList.add('bar'));
tl2.from(".bar", {scaleY: -0, transformOrigin: "bottom", stagger: .1})

// tl2.from("#XMLID_498_", { scaleY: -0, transformOrigin: "bottom"});
// tl2.from("#XMLID_500_", { scaleY: -0, transformOrigin: "bottom"});
// tl2.from("#XMLID_502_", { scaleY: -0, transformOrigin: "bottom"});
// tl2.from("#XMLID_503_", { scaleY: -0, transformOrigin: "bottom"});
// tl2.from("#XMLID_504_", { scaleY: -0, transformOrigin: "bottom"});
// tl2.from("#XMLID_511_", { scaleY: -0, transformOrigin: "bottom"});
