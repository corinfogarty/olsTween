/* ========================================================================================================================================================
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

 ========================================================================================================================================================*/

var ready = false;

function playFrame(frame, del) {
    var go = setInterval(function() {
        if (ready === true) {
            clearInterval(go);
            setTimeout(function() {
                eval(frame())
            }, del)

        }
    })
}

function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != "undefined") {
            return properties[i];
        }
    }
    return null;
}

var easing = {
    easeOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    easeInSine: "cubic-bezier(0.47, 0, 0.745, 0.715)",
    easeOutSine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
    easeInOutSine: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
    easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
    easeInCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    easeInQuart: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    easeOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    easeInOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
    easeInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    easeOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    easeInOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)",
    easeInExpo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
    easeOutExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
    easeInOutExpo: "cubic-bezier(1, 0, 0, 1)",
    easeInCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
    easeOutCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)",
    easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
}

var transform = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
var transition = ["transition", "msTransition", "webkitTransition", "mozTransition", "oTransition"];

var transformProperty = getSupportedPropertyName(transform);
var transitionProperty = getSupportedPropertyName(transition);

function $(name, duration, args) {
    ready = false;

    setTimeout(function() {

        var easeType = args.ease;
        name.style.position = "absolute";
        name.style.zoom = args.zoom;
        name.style[transformProperty] = "scale(" + args.scaleX + " , " + args.scaleY + ")";
        name.style.transformOrigin = args.xOrigin + "% , " + args.yOrigin + "%";
        name.style[transitionProperty] = "all " + duration + "s";
        name.style.transitionTimingFunction = easing[easeType] || args.ease;
        name.style.opacity = args.alpha;

        name.style.filter = "blur(" + args.blur + "px)";

        name.style.top = args.top + "px";
        name.style.left = args.left + "px";
        name.style.bottom = args.bottom + "px";
        name.style.right = args.right + "px";
        name.style.marginLeft = args.marginLeft + "px";
        name.style.marginTop = args.marginTop + "px";
        ready = true;
        doNext();
    }, args.delay * 1000)
    if (args.onStart) {
        eval(args.onStart)()

    }

    function doNext() {

        setTimeout(function() {
            if (args.onComplete && ready == true) {
                eval(args.onComplete)()
            }
        }, args.delay + duration * 1000 || 50)
    }

}

function addClass(element, className, delay) {
    var d = delay || 0;
    setTimeout(function() {
        element.className = element.className + " " + className
    }, d);
}


function changeClass(element, className, delay) {
    var d = delay || 0;
    setTimeout(function() {
        element.className = className
    }, d);
}
