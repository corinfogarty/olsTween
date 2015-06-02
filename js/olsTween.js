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

var ready = false;

function playFrame(frame, del) {
    var go = setInterval(function() {
        if (ready === true) {
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
    ready = false;

    setTimeout(function() {
        var s = name.style;
        var a = args;
        var easeType = a.ease;
        s.position = 'absolute';
        s.zoom = a.zoom;
        s[transformProperty] = 'scale(' + a.scaleX + ' , ' + a.scaleY + ') rotate( ' + a.rotate + 'deg )';

        s.transformOrigin = a.xOrigin + '% , ' + a.yOrigin + '%';
        s[transitionProperty] = 'all ' + duration + 's';
        s.transitionTimingFunction = 'cubic-bezier(' + easing[easeType] + ')' || a.ease;
        s.opacity = a.alpha;

        s.filter = 'blur(' + a.blur + 'px)';

        s.top = a.top + 'px';
        s.left = a.left + 'px';
        s.bottom = a.bottom + 'px';
        s.right = a.right + 'px';
        s.marginLeft = a.marginLeft + 'px';
        s.marginTop = a.marginTop + 'px';
        ready = true;
        doNext();
    }, args.delay * 1000);
    if (args.onStart) {
        eval(args.onStart)()
    }

    function doNext() {

        setTimeout(function() {
            if (args.onComplete && ready === true) {
                eval(args.onComplete)();
            }
        }, args.delay + duration * 1000 || 75)
    }

}

function addClass(element, className, delay) {
    var d = delay || 0;
    setTimeout(function() {
        element.className = element.className + " " + className;
    }, d);
}

function swapClass(element, className, delay) {
    var d = delay || 0;
    setTimeout(function() {
        element.className = className;
    }, d);
}

function removeClass(element, removeClassName, delay) {
    var d = delay || 0;
    setTimeout(function() {
        var list = element.className;
        var listArr = list.split(" ");
        listArr.splice(listArr.indexOf(removeClassName), 1);
        var classNames = listArr.join(",");
        element.className = classNames;
    }, d);
}
