// import gsap
import { gsap } from 'gsap';

// import TweenMax
export function loader(){

gsap.to(".first", 1, {
    delay: 0.5,
    left: "-100%",
});

gsap.to(".second", 1, {
    delay: 0.7,
    left: "-100%",
});

gsap.to(".third", 1, {
    delay: 0.9,
    left: "-100%",
});

gsap.from("header", 1, {
    delay: 1.3,
    opacity: 0,
});

gsap.from(".navbar", 1, {
    delay: 1.3,
    top: "-50%",
});

gsap.from(".info-autour", 1, {
    delay: 1.5,
    bottom: "-40%",
    opacity: 0,
});
}