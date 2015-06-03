'use strict';
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
    addClass(elem ent, className, delay)

    To replace class of an object use
    changeClass(element, className, delay)

 ========================================================================================================================================================*/

var ready = [];
//PLAY THE NEXT FRAME WITH DELAY AFTER ALL TWEENS 
function playFrame(frame, del) {
    var go = setInterval(function() {
        if (ready.length === 0) {
            clearInterval(go);
            setTimeout(function() {
                eval(frame());
            }, del);

        }
    });
}

function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != 'undefined') {
            return properties[i];
        }
    }
    return null;
}

var easing = {
    easeInSine: '0.47, 0, 0.745, 0.715',
    easeOutSine: '0.39, 0.575, 0.565, 1',
    easeInOutSine: '0.445, 0.05, 0.55, 0.95',
    easeInQuad: '0.55, 0.085, 0.68, 0.53',
    easeOutQuad: '0.25, 0.46, 0.45, 0.94',
    easeInOutQuad: '0.455, 0.03, 0.515, 0.955',
    easeInCubic: '0.55, 0.055, 0.675, 0.19',
    easeOutCubic: '0.215, 0.61, 0.355, 1',
    easeInOutCubic: '0.645, 0.045, 0.355, 1',
    easeInQuart: '0.895, 0.03, 0.685, 0.22',
    easeOutQuart: '0.165, 0.84, 0.44, 1',
    easeInOutQuart: '0.77, 0, 0.175, 1',
    easeInQuint: '0.755, 0.05, 0.855, 0.06',
    easeOutQuint: '0.23, 1, 0.32, 1',
    easeInOutQuint: '0.86, 0, 0.07, 1',
    easeInExpo: '0.95, 0.05, 0.795, 0.035',
    easeOutExpo: '0.19, 1, 0.22, 1',
    easeInOutExpo: '1, 0, 0, 1',
    easeInCirc: '0.6, 0.04, 0.98, 0.335',
    easeOutCirc: '0.075, 0.82, 0.165, 1',
    easeInOutCirc: '0.785, 0.135, 0.15, 0.86',
    easeOutBack: '0.175, 0.885, 0.32, 1.275'
};

var transform = ['transform', 'msTransform', 'webkitTransform', 'mozTransform', 'oTransform'];
var transition = ['transition', 'msTransition', 'webkitTransition', 'mozTransition', 'oTransition'];

var transformProperty = getSupportedPropertyName(transform);
var transitionProperty = getSupportedPropertyName(transition);

function $(name, duration, args) {
    ready.unshift(false);
    setTimeout(function() {
        var s = name.style;
        var a = args;
        var easeType = a.ease;
        var scaleAll = a.scale;
        var xScale = a.scaleX || scaleAll || 1;
        var yScale = a.scaleY || scaleAll || 1;
        var rotation = a.rotate || 0;
        var top = a.top || 0;
        var left = a.left || 0;

        s.position = a. position || 'absolute';


        s[transformProperty] = ' scale(' + xScale + ' , ' + yScale + ') rotate( ' + rotation + 'deg ) translate(' + top +'px'+ ', ' + left + 'px' + ')';
        s[transitionProperty] = 'all ' + duration + 's';
        s.transitionTimingFunction = 'cubic-bezier(' + easing[easeType] + ')' || a.ease;
        s.opacity = a.alpha;

        s.filter = 'blur(' + a.blur + 'px)';
        s.bottom = a.bottom + 'px';
        s.right = a.right + 'px';

        s.width = a.width + "px";
        s.height = a.height + "px";

        s.marginTop = a.marginTop + 'px';
        s.marginRight = a.marginRight + 'px';
        s.marginBottom = a.marginBottom + 'px';
        s.marginLeft = a.marginLeft + 'px';

        s.paddingTop = a.paddingTop + 'px';
        s.paddingRight = a.paddingRight + 'px';
        s.paddingBottom = a.paddingBottom + 'px';
        s.paddingLeft = a.paddingLeft + 'px';

        s.backgroundColor = '#' + a.backgroundColor;

        ready.pop();
        doNext();
    }, args.delay * 1000);
    if (args.onStart) {
        eval(args.onStart)()
    }

    function doNext() {
        setTimeout(function() {
            if (args.onComplete && ready.length === 0) {
                eval(args.onComplete)();
            }
        }, args.delay + duration * 1000 || 75)
    }

}

box.className = "one"

addClass(box, "hello fish water", 500)

box.className = "one hello fish water"

    // ADD A CLASS NAME TO THE EXISTING SET
function addClass(element, className, delay) {
        var d = delay || 0;
        setTimeout(function() {
            element.className = element.className + " " + className;
        }, d);
    }


    // SWAP ALL CLASS NAMES FOR A NEW SET
function swapClass(element, className, delay) {
        var d = delay || 0;
        setTimeout(function() {
            element.className = className;
        }, d);
    }

box.className = "one"

swapClass(box, "hello fish water", 500)

box.className = "hello fish water"

    // REMOVE THE FIRST INSTANCE OF A CLASS NAME AND ITS TRAILING SPACE
function removeClass(element, removeClassName, delay) {
    var d = delay || 0;
    setTimeout(function() {
        element.className = element.className.replace(removeClassName + " ", "");
    }, d);
}
box.className = "one two three"

removeClass(box, "one", 500)

box.className = "two three"
