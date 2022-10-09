const tl = gsap.timeline({defaults: {stagger:1, yoyo:true} })
    .fromTo('.vuejs, .javascript, .git, .python, .reactnative, .html5, .css3, .github', {opacity:1, duration:2}, {opacity:1, duration:5, yoyo: true, ease: "none"}, 0)
    .fromTo('.landing', {delay: 0,  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0)"}, {duration:5, boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0)", ease: "none"}, 0)
    .fromTo('.writeup h1', {opacity:0, scale: 0}, {duration:1, opacity: 0, scale:0, ease: "none"})
    .fromTo('.writeup h3', {opacity: 0}, {duration:1, opacity: 0, ease: "none"})
    .addPause(">", wait)
    .fromTo('.vuejs, .javascript, .git, .python, .reactnative, .html5, .css3, .github', {opacity:1, duration:2}, {opacity:0, duration:5, ease: "none"}, 30)
    .fromTo('.landing', {boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0)"}, {duration:20,  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,1)", ease: "none"}, 20)
    .fromTo('.writeup h1', {delay: 0, opacity:0, scale:0}, {delay: 0, duration:8, opacity: 1, scale:1, ease: "ease"}, 30)
    .fromTo('.writeup h3', {scale:0, opacity:0, delay: 0, y:'50vh'}, {scale:1, opacity:1, duration:5, y:'0', ease: "none"}, 38)
    .addPause(">", wait)
    .fromTo('.landing', { boxShadow: "inset 0 0 0 1000px rgba(0,0,0,1)"}, {duration:20, boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0)", ease: "none"}, 50)
    .fromTo('.writeup h1', {delay: 0, opacity:1, scale:1}, {delay: 0, duration:4, opacity: 0, scale:0, ease: "ease", ease: "none"}, 50)
    .fromTo('.writeup h3', {scale:1, opacity:1, delay: 0, y:'0'}, {scale:0, opacity:0, duration:5, y:'50vh', ease: "none"}, 50)
    .fromTo('.writeup h1', {delay: 0, opacity:0, scale:0}, {delay: 0, duration:0, opacity: 0, scale:0, ease: "ease"}, 54)
    .fromTo('.writeup h3', {scale:0, opacity:0, delay: 0, y:'0'}, {scale:0, opacity:0, duration:0, y:'0', ease: "none"}, 54)
    .fromTo('.vuejs, .javascript, .git, .python, .reactnative, .html5, .css3, .github', {opacity:0, duration:1}, {opacity:1, duration:10, ease: "none"}, 54)
    .repeat(-1)

var te = gsap.timeline({repeat: -1, yoyo:true});
te.fromTo('.github', {duration: 10, x: '-40vw', y:'-40vh'}, {duration: 10, x: '40vw', y:'40vh'}, 0)
te.fromTo('.javascript', {duration: 10, x: '40vw', y:'-40vh'}, {duration: 10, x: '-40vw', y:'40vh'}, 0)
te.to('.html5', {duration: 5, y: '40vh', rotationY:180, scaleX:-1}, 0)
te.to('.css3', {duration: 5, y: '-40vh', rotationY:180, scaleX:-1}, 0)
te.fromTo('.python', {y:'-40vh', x:'-40vw', duration: 5}, {x:'40vw', duration: 5, scaleX:-1}, 0)
te.fromTo('.reactnative', {y:'-40vh', x:'40vw', duration: 5}, {x:'-40vw', duration: 5, scaleX:-1}, 0)
gsap.fromTo('.git', {rotation: -5}, {duration: 2, rotation: 5, yoyo: true, repeat: -1, transformOrigin: "center bottom", ease: "sine.inOut"}, 0);
te.fromTo('.git', {x:0}, {duration:10, x:'40vw'}, 0);
gsap.fromTo('.vuejs', {rotation: -5}, {duration: 2, rotation: 5, yoyo: true, repeat: -1, transformOrigin: "center bottom", ease: "sine.inOut"}, 0);
te.fromTo('.vuejs', {x:0}, {duration:10, x:'-40vw'}, 0);

const first = document.querySelector('#first')
first.addEventListener('click', function(evt){
    if (evt.currentTarget.id === 'first'){
        if(tl.paused() || te.paused()){
            tl.play() && te.play()
        }else {
            tl.pause() && te.pause()
        }
    }
})

function wait(){
    gsap.delayedCall(5, function(){
        tl.play()
    })
}
    