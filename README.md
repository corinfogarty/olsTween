# olsTween
Lightweight (3kb minified) GSAP like CSS3 js library for banner animation. 

# Usage
To change style properties of an object use
    olsTween(element, time, {
        delay: 1,
        height: "400px",
        alpha: 0.5, // note ints must start with a 0
        scaleX: 0.1,
        scaleY: 0.1,
        xOrigin: "50%",
        yOrigin: "50%",
        x: "200px",
        y: "100px",
        ease: "cubic-bezier(0.6, -0.28, 0.735, 0.045)"
    })

To change class of an object use
addClass(element, className, delay)

To replace class of an object use
changeClass(element, className, delay)
