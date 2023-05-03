gsap.registerPlugin(ScrollTrigger);

gsap.from("#img1",{
    delay:0.4,
    opacity:0,
    duration:1.2,
    y:60
})
gsap.from("#img3",{
    delay:0.4,
    opacity:0,
    duration:1.2,
    x:60
})
gsap.from("#img4",{
    delay:0.4,
    opacity:0,
    duration:1.2,
    y:-60
})
gsap.from("#main>h1",{
    delay:0.4,
    opacity:0,
    duration:2,
    
})