
let calendarTimeline = gsap.timeline({ repeat: 0, repeatDelay: 1});
let allRects = document.querySelectorAll('#XMLID_611_ rect, #XMLID_443_ rect');
allRects.forEach(function(rect) { rect.classList.add('myrects') });
calendarTimeline.from('#XMLID_388_', {opacity: 0, x: -50});
calendarTimeline.from('#XMLID_593_', {opacity: 0, x: 50}, 0);
calendarTimeline.from('#XMLID_611_', {opacity: 0}, "end");
calendarTimeline.from('#XMLID_443_', {opacity: 0}, "end");
calendarTimeline.from('.myrects', {opacity: 0, x: "random(-100, 100)", y: "random(-100, 100)", stagger: .02}, 0);

let chartTimeline = gsap.timeline({repeat: 0, repeatDelay: 1});

chartTimeline.from("#XMLID_517_", { opacity: 0, x: -50});
chartTimeline.from("#XMLID_528_", { opacity: 0, x: 50}, 0);
chartTimeline.from("#XMLID_414_", {x: -1000, y: 1000});

let chartBars = document.querySelectorAll('#XMLID_512_ path');
chartBars.forEach(bar => bar.classList.add('bar'));
chartTimeline.from(".bar", {scaleY: -0, transformOrigin: "bottom", stagger: .1});

let wineTimeline = gsap.timeline({repeat: 0, repeatDelay: 1});

wineTimeline.from("#XMLID_436_", { scaleX: 0, opacity: 0, transformOrigin: "center"});
wineTimeline.from("#XMLID_389_", { opacity: 0, transformOrigin: "bottom"}, .4);
wineTimeline.from("#XMLID_392_", {x:-50, opacity: 0}, "cheers");
wineTimeline.from("#XMLID_437_", {x:50, opacity: 0}, "cheers");

let controller = new ScrollMagic.Controller();
let calendarScene = new ScrollMagic.Scene({    
    triggerElement: '#planBetter',
    triggerHook: .5,    
})
.setTween(calendarTimeline)
.addTo(controller);
let chartScene = new ScrollMagic.Scene({
    triggerElement: '#seeResults',
    triggerHook: .5, 
})
.setTween(chartTimeline)
.addTo(controller);
let wineScene = new ScrollMagic.Scene({
    triggerElement: '#stress',
    triggerHook: .5
})
.setTween(wineTimeline)
.addTo(controller);