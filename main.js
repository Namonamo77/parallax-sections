gsap.registerPlugin(ScrollTrigger)
let banners = document.querySelectorAll(".banner")

banners.forEach(banner =>{
    let bg = banner.querySelectorAll(".delorean, .falcon, .mystery")
    let text = banner.querySelectorAll("h2, h3")

    let tl = gsap.timeline()
    tl.from(bg, {backgroundPosition: "60% 0%", opacity:0})
        .from(text, {y: 150, stagger: .2})

    ScrollTrigger.create({
        trigger: banner,
        markers: true,
        start: "top 60%",
        toggleActions: "play none none reverse",
        animation: tl
    })
})