const tl = gsap.timeline({defaults: {stagger:1} })
    // .addPause(">", wait)    
    // .from('.landing', {delay: 10, duration: 10, boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0)"}, 10)
    // .from('.star1', {scale:0, opacity:0})
    
    .fromTo('.sun', {delay: 1, opacity:0, duration:1, x:'75px', y:'0px'}, {opacity:1, duration:20, x:'-75px', y:'75px', ease: "Power0.easeNone"}, 0)
    .fromTo('.landing', {delay: 1, boxShadow: "inset 0 0 0 1000px rgba(0,0,0,1)"}, {duration:20, boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0)", ease: "Power0.easeNone"}, 0)
    .addPause(">", wait)
    .fromTo('.writeup h1', {delay: 0, opacity:1}, {delay: 0, duration:5, opacity: 0, ease: "ease"}, 0)
    .fromTo('.writeup h1', {scale:1}, {scale:0, duration: 5, ease: "none"}, 0)

    .from('.sun', {opacity:1, scale:1, duration:20, x:'-75px', y:'75px'}, 20)
    
    .fromTo('.writeup h3', {delay: 1, y:0}, {duration:3, y:'50vh', ease: "none"}, 0)
    .from('.landing', {duration:20, boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0)", ease: "Power0.easeNone"}, 20)
    .to('.sun', {opacity:0, scale:0, ease: "Power0.easeNone", x:'75px', y:'0px'}, 40)
    .to('.landing', {delay: 1, boxShadow: "inset 0 0 0 1000px rgba(0,0,0,1)"}, 40)
    .fromTo('.writeup h1', {stagger:0, opacity:0, scale: 0}, {stagger:0, duration:5, opacity: 1, scale:1, ease: "none"}, 30)
    .fromTo('.writeup h3', {y:'50vh'}, {stagger:0, duration:3, y:'0', ease: "none"}, 35)
    .fromTo('.star1', {scale:0, opacity:0, x: "random(0, -500, 5)", y: "random(0, -500, 5)"}, {duration: 1, scale:2, opacity:1, x: "random(0, 100, 5)", y: "random(0, 100, 5)"}, 41)
    .fromTo('.star2', {scale:0, opacity:0, x: "random(0, -500, 5)", y: "random(0, -500, 5)"}, {duration: 1, scale:2, opacity:1, x: "random(0, 100, 5)", y: "random(0, 100, 5)"}, 42)
    .fromTo('.star3', {scale:0, opacity:0, x: "random(0, -500, 5)", y: "random(0, -500, 5)"}, {duration: 1, scale:2, opacity:1, x: "random(0, 100, 5)", y: "random(0, 100, 5)"}, 44)
    .fromTo('.star4', {scale:0, opacity:0, x: "random(0, -500, 5)", y: "random(0, -500, 5)"}, {duration: 1, scale:2, opacity:1, x: "random(0, 100, 5)", y: "random(0, 100, 5)"}, 46)
    .fromTo('.star5', {scale:0, opacity:0, x: "random(0, -500, 5)", y: "random(0, -500, 5)"}, {duration: 1, scale:2, opacity:1, x: "random(0, 100, 5)", y: "random(0, 100, 5)"}, 48)
    .to('.star1, .star2, .star3, .star4, .star5', {delay:1, duration: 1, scale:0, opacity:0}, 40)
    .fromTo('.star1', {scale:0, opacity:0, x: "random(0, 500, 5)", y: "random(0, 500, 5)"}, {duration: 1, scale:2, opacity:1, x: "random(0, 100, 5)", y: "random(0, 100, 5)"}, 43)
    .fromTo('.star2', {scale:0, opacity:0, x: "random(0, 500, 5)", y: "random(0, 500, 5)"}, {duration: 1, scale:2, opacity:1, x: "random(0, 100, 5)", y: "random(0, 100, 5)"}, 50)
    .fromTo('.star3', {scale:0, opacity:0, x: "random(0, 500, 5)", y: "random(0, 500, 5)"}, {duration: 1, scale:2, opacity:1, x: "random(0, 100, 5)", y: "random(0, 100, 5)"}, 43)
    .fromTo('.star4', {scale:0, opacity:0, x: "random(0, 500, 5)", y: "random(0, 500, 5)"}, {duration: 1, scale:2, opacity:1, x: "random(0, 100, 5)", y: "random(0, 100, 5)"}, 50)
    .fromTo('.star5', {scale:0, opacity:0, x: "random(0, 500, 5)", y: "random(0, 500, 5)"}, {duration: 1, scale:2, opacity:1, x: "random(0, 100, 5)", y: "random(0, 100, 5)"}, 50)
    .to('.star1, .star2, .star3, .star4, .star5', {delay:1, duration: 1, scale:0, opacity:0}, 41)
    .addPause(">", wait)
    // .to('.sun', {opacity:1, duration:10, scale:1}, {opacity:0, duration:1, scale: 0, ease: "ease-in"})
    .repeat(-1)
    

const first = document.querySelector('#first')
first.addEventListener('click', function(evt){
    if (evt.currentTarget.id === 'first'){
        if(tl.paused()){
            tl.play()
        }else {
            tl.pause()
        }
    }
})

function wait(){
    gsap.delayedCall(12, function(){
        tl.play()
    })
}
    