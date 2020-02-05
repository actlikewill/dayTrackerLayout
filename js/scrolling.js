let growBody = gsap.to('#body', { scale: 5});

let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({    
    triggerElement: '#body-container',
    triggerHook: .5,
    duration: "50%"
})
.setTween(growBody)

// .addIndicators({
//     name: "Body Timeline",
//     colorTrigger: "red",
//     colorStart: "blue",
//     colorEnd: "green"
// })
// .addTo(controller);
scene.on("add", function (event) {
    console.log('Scene was added to a new controller.');
    console.log(event.what)
});
controller.addScene(scene);

