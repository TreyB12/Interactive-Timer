document.addEventListener("DOMContentLoaded", () => {

    const timeline = gsap.timeline({defaults: {duration: 1, opacity: 0}})
    timeline 
    .from("#timer-id", {y: "-100%", ease: "bounce"})
    .from("#btn-reset", {y: "100%", ease: "sine"})
    .from("#button-id", {y: "100%", ease: "sine"})
    .from("#btn", {y: "300%", ease: "sine"})



})



